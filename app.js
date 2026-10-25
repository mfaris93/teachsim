'use strict';
/* TeachSim V6.9: local-only, deterministic educational demonstration.
   NO network calls, AI model, PII processing, or assessment of real teaching fidelity. */
(() => {
  // V6.7: fixed, fictional built-in scenarios. No accounts, storage, or content editor.
  const ACTION_LABELS={say:'Gave instruction',wait:'Waited for response',gesture:'Gestural prompt',model:'Model prompt',ack:'Acknowledged',next:'Advanced',pause:'Paused and reviewed plan'};
  const FEEDBACK={
    missingDirection:'No task direction was entered before the response opportunity. The demonstration protocol begins with one spoken direction.',
    multipleDirections:'More than one direction was entered within this step. This demo specifies a single initial direction.',
    lateDirection:'A direction was entered after the initial response opportunity.',
    earlyPrompt:'You prompted before giving the learner an independent response opportunity. Give the instruction, then wait first.',
    skipGesture:'You skipped the gestural prompt in this demonstration hierarchy. Try the gestural prompt and wait before modelling.',
    extraPrompt:'An additional teaching prompt or direction was delivered after the student completed this step.',
    repeatedGesture:'You repeated the gestural prompt. Wait and observe before choosing the next level.',
    earlyAck:'Completion was acknowledged before the student completed the step.',
    repeatedAck:'Completion was acknowledged more than once.',
    missedAck:'Completion was not acknowledged before advancing.',
    incomplete:'You moved on before the learner completed the step or paused for plan review.',
    prematurePause:'You paused before observing the outcome after the model prompt. In this exercise, pause when the planned hierarchy has not supported completion.',
    missedPause:'The learner remained unable to complete the step after modelling. Pause and consult the plan before moving on.',
    missedPromptWait:'You moved to another prompt without observing the previous response. Wait and observe after each prompt.',
    repeatedWait:'You selected Wait again without delivering a new prompt or direction.',
    unnecessaryEscalation:'You added a prompt after the learner already responded correctly.'
  };
  const CONTENT_DEFAULT={
    model:'Trainer model (illustrative): Present a single clear direction. Allow the response opportunity. Provide the prescribed gestural cue only when needed, then model if that does not lead to a response. Acknowledge completion. Discuss how this would need adaptation for a real learner.',
    reflectNew:'What learner cue should you observe before moving from waiting to a gesture or demonstration?',
    reflectExperienced:'Where could you have avoided unnecessary prompts, and how would you respond if the next learner opportunity required different support?',
    alignedNew:'Your selected action order matched the provisional sequence. This does not evaluate the wording or delivery of your direction.',
    alignedExperienced:'The selected action sequence matched the provisional procedure. Spoken words and actual prompt delivery were not assessed.',
    messages:FEEDBACK
  };
  const FEEDBACK_LABELS={missingDirection:'Missing initial direction',multipleDirections:'Repeated directions',lateDirection:'Late direction',earlyPrompt:'Prompted too early',missedPromptWait:'Missing wait after prompt',skipGesture:'Skipped gestural prompt',extraPrompt:'Extra prompt after completion',repeatedWait:'Repeated waiting',repeatedGesture:'Repeated gesture',earlyAck:'Early acknowledgement',repeatedAck:'Repeated acknowledgement',missedAck:'Missing acknowledgement',incomplete:'Incomplete step',prematurePause:'Paused early',missedPause:'Missing plan review',unnecessaryEscalation:'Prompt after correct response'};
  function schemaContent(obj){obj=obj&&typeof obj==='object'&&!Array.isArray(obj)?obj:{};
    const messages={};for(const key of Object.keys(FEEDBACK))messages[key]=fieldString(obj.messages?.[key]||FEEDBACK[key],700);
    const out={messages};for(const key of ['model','reflectNew','reflectExperienced','alignedNew','alignedExperienced'])out[key]=fieldString(obj[key]||CONTENT_DEFAULT[key],1600);
    return out;
  }
  const SEED=window.TEACHLAB_SEED_SCENARIOS||[];
  const $=id=>document.getElementById(id);
  const clone=x=>JSON.parse(JSON.stringify(x));
  const escapeHTML=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug=()=>`scenario-${Date.now().toString(36)}`;
  const fieldString=(v,lim=1400)=>typeof v==='string'?v.slice(0,lim):'';
  const limit=(n,min,max)=>Math.max(min,Math.min(max,Number.isFinite(+n)?Number(n):min));
  function schemaStep(item,index){return {
    id:fieldString(item.id||`step-${index+1}`,85),name:fieldString(item.name,100),icon:fieldString(item.icon||'🧩',16),iconMode:item.iconMode==='manual'?'manual':'auto',target:fieldString(item.target,100),context:fieldString(item.context,650),direction:fieldString(item.direction,220),initial:fieldString(item.initial,650),waiting:fieldString(item.waiting,650),gestureNoResponse:fieldString(item.gestureNoResponse,650),independent:fieldString(item.independent,650),gestureDone:fieldString(item.gestureDone,650),modelDone:fieldString(item.modelDone,650),correctCriterion:fieldString(item.correctCriterion||item.independent,650),incorrectResponse:fieldString(item.incorrectResponse,650),unresolvedAfterModel:fieldString(item.unresolvedAfterModel,650)};
  }
  function normalise(input){
    if(!input||typeof input!=='object'||Array.isArray(input))throw Error('Scenario is not an object.');
    if(!Array.isArray(input.steps)||input.steps.length<1||input.steps.length>16)throw Error('Each scenario needs 1–16 task steps.');
    if(!Array.isArray(input.patterns)||input.patterns.length<1||input.patterns.length>6)throw Error('Each scenario needs 1–6 response patterns.');
    const steps=input.steps.map(schemaStep);
    const patterns=input.patterns.map((p,i)=>({
      id:fieldString(p?.id||`P${i+1}`,35),name:fieldString(p?.name||`Variation ${i+1}`,80),
      responses:steps.map((_,j)=>{
        const supplied=p?.responses?.[j];
        const defaultNeeds=limit(p?.needs?.[j],0,2);
        const fallback=defaultNeeds===0?['correct']:defaultNeeds===1?['no_response','correct']:['no_response','no_response','correct'];
        const plan=Array.isArray(supplied)&&supplied.length?supplied:fallback;
        if(plan.length>3 || !plan.every((x,k)=>['correct','incorrect','no_response','unresolved'].includes(x) && (x!=='unresolved'||k===2)))throw Error('Invalid learner response plan.');
        if(!['correct','unresolved'].includes(plan[plan.length-1]) || plan.slice(0,-1).some(x=>x==='correct'))throw Error('Response plan must terminate correctly or remain unresolved after modelling.');
        return plan;
      })
    }));
    return {id:fieldString(input.id||slug(),90),title:fieldString(input.title,100),domain:fieldString(input.domain,80),learnerName:fieldString(input.learnerName,65),learnerProfile:fieldString(input.learnerProfile,1200),objective:fieldString(input.objective,800),procedure:fieldString(input.procedure,1400),steps,patterns,content:schemaContent(input.content)};
  }
  function checkLibrary(lib){if(!Array.isArray(lib)||lib.length<1||lib.length>25)throw Error('A library must contain 1–25 scenarios.');let ids=new Set();return lib.map(x=>{let s=normalise(x);if(!s.id||ids.has(s.id))throw Error('Each scenario needs a unique ID.');ids.add(s.id);return s;});}
  function validate(s){let errs=[];for(const [field,label] of [['title','scenario title'],['learnerName','learner name'],['learnerProfile','learner profile'],['objective','learning objective'],['procedure','instructional procedure']])if(!s[field]?.trim())errs.push(label);
    for(let i=0;i<s.steps.length;i++){const st=s.steps[i];for(const f of ['name','target','context','initial','waiting','gestureNoResponse','independent','gestureDone','modelDone','correctCriterion','incorrectResponse','unresolvedAfterModel'])if(!st[f]?.trim())errs.push(`step ${i+1}: ${f}`);}
    for(let i=0;i<s.patterns.length;i++)if(!s.patterns[i].name?.trim())errs.push(`variation ${i+1}: name`);
    return errs;}
  const library=checkLibrary(SEED);
  let selectedId=library[0].id,patternIndex=0,pathway='new',page='prepare';
  let stepIndex=0,records=[],practiceState=null;
  const current=()=>library.find(s=>s.id===selectedId)||library[0];
  const observedText=(raw,name)=>String(raw||'').replace(/^The learner\b/i,name).replace(/^Learner\b/i,name);
  function indicesForPath(s=current()){
    if(!s?.patterns?.length)return [];
    if(pathway==='new'||s.patterns.length===1)return [0];
    return s.patterns.slice(1).map((_,i)=>i+1);
  }
  function ensurePattern(){const available=indicesForPath();if(!available.includes(patternIndex))patternIndex=available[0]??0;}
  function setPathway(value){if(value!=='new'&&value!=='experienced')return;pathway=value;patternIndex=indicesForPath()[0]??0;renderPrepare();}
  function setPage(to,focus=true){
    page=to;
    for(const name of ['prepare','practice','review']){
      $('page-'+name).classList.toggle('hidden',name!==to);
      const stage=document.querySelector(`[data-stage="${name}"]`);
      stage.classList.toggle('active',name===to);
      stage.classList.toggle('done',['prepare','practice','review'].indexOf(name)<['prepare','practice','review'].indexOf(to));
      if(name===to)stage.setAttribute('aria-current','step');
      else stage.removeAttribute('aria-current');
    }
    if(focus){
      window.scrollTo({top:0,behavior:'auto'});
      $('page-'+to).querySelector('h1').focus({preventScroll:true});
    }
  }
  function renderScenarioSelect(){
    const select=$('scenario-select');
    // The matching eight options are already present in HTML for script-blocked previews.
    // Recreate them only if the scenario data and HTML ever get out of sync.
    if(select.options.length!==library.length || library.some((sc,i)=>select.options[i]?.value!==sc.id)){
      select.innerHTML=library.map(sc=>`<option value="${escapeHTML(sc.id)}">${escapeHTML(sc.title)} · ${escapeHTML(sc.domain||'Functional learning')}</option>`).join('');
    }
    select.value=selectedId;
  }
  function renderWorkedExample(s){
    const step=s.steps[0];
    const item=(label,body)=>`<li><strong>${escapeHTML(label)}:</strong> ${escapeHTML(body)}</li>`;
    $('brief-model-notes').innerHTML=[
      item('Give instruction',`“${step.direction||'Please complete this step.'}”`),
      item('Wait and observe',`Observe whether the learner completes: ${step.name.toLowerCase()}.`),
      item('Gestural prompt (if needed)',`Point towards the ${step.target}, then wait again.`),
      item('Model prompt (if needed)',`Demonstrate “${step.name}”, then wait again.`),
      item('Respond to the outcome','If the learner completes the step, acknowledge it. Otherwise, pause and review the plan after modelling.')
    ].join('');
  }
  function renderPrepare(){const s=current();if(!s)return;ensurePattern();renderScenarioSelect();
    document.querySelectorAll('input[name="practice-pathway"]').forEach(el=>{el.checked=el.value===pathway;});
    const choices=indicesForPath(),idx=choices.indexOf(patternIndex);
    
    
    
    $('brief-task-icon').textContent=s.steps[0]?.icon||'🧩';$('learner-initial').textContent=(s.learnerName[0]||'?').toUpperCase();$('brief-learner').textContent=s.learnerName;$('brief-profile').textContent=s.learnerProfile;$('brief-title').textContent=s.title;$('brief-objective').textContent=s.objective;$('brief-procedure').textContent=s.procedure;$('brief-steps').innerHTML=s.steps.map((st,i)=>`<span>${i+1} · ${escapeHTML(st.name)}</span>`).join('');renderWorkedExample(s);$('prepare-error').classList.add('hidden');}
  function freshState(){const s=current().steps[stepIndex];return {
    said:0,waits:0,waitsSincePrompt:0,gestures:0,models:0,completed:false,acknowledged:false,paused:false,
    completionType:null,response:s.initial,outcome:'ready',awaiting:null,observedLevels:[],events:[],issues:[]
  };}
  function log(action,details,issues=[]){practiceState.events.push({action,details});for(const code of issues){if(!practiceState.issues.includes(code))practiceState.issues.push(code);}}
  function start(){const problems=validate(current());if(problems.length){$('prepare-error').textContent=`Scenario incomplete: ${problems.slice(0,4).join(', ')}`;$('prepare-error').classList.remove('hidden');return;}
    stepIndex=0;records=[];practiceState=freshState();resetHint();setPage('practice');renderPractice();}
  function responsePlan(){return current().patterns[patternIndex].responses[stepIndex];}
  function action(type,text=''){
    if(page!=='practice')return;
    const s=current().steps[stepIndex],st=practiceState,flags=[];
    const name=current().learnerName;
    const flag=x=>{if(!flags.includes(x))flags.push(x);};
    if(type==='say'){
      if(st.said)return;
      const message=text.trim();if(!message)return;
      if(st.waits)flag('lateDirection');
      st.said++;st.awaiting='instruction';st.outcome='pending';
      st.response=`No new learner response observed yet. Select Wait to observe ${name}.`;
      log('say',message,flags);
    }else if(type==='wait'){
      if(st.completed||st.paused){flag('extraPrompt');}
      else if(!st.said){flag('missingDirection');st.response=`Give the task instruction before waiting.`;}
      else if(!st.awaiting){flag('repeatedWait');}
      else{
        const level=st.awaiting;
        const pos={instruction:0,gesture:1,model:2}[level];
        const plan=responsePlan();
        // If the teacher skipped a prompt, still show a scripted response for the selected level.
        const outcome=plan[pos]|| (plan[plan.length-1]==='unresolved'?'unresolved':'correct');
        st.outcome=outcome;st.observedLevels.push(level);st.waits++;st.waitsSincePrompt++;
        st.awaiting=null;
        if(outcome==='correct'){
          st.completed=true;
          st.completionType=level==='instruction'?'independently':`after ${level==='gesture'?'gestural':'model'} prompt`;
          st.response=level==='instruction'?s.independent:level==='gesture'?s.gestureDone:s.modelDone;
        }else if(outcome==='incorrect'){
          st.response=s.incorrectResponse;
        }else if(outcome==='unresolved'){
          st.response=s.unresolvedAfterModel;
        }else{
          st.response=level==='gesture'?s.gestureNoResponse:s.waiting;
        }
        log('wait',`Observed ${outcome.replace('_',' ')} response following ${level}`,flags);
        renderPractice();return;
      }
      log('wait','Selected Wait',flags);
    }else if(type==='gesture'||type==='model'){
      if(st.completed){flag('unnecessaryEscalation');flag('extraPrompt');}
      if(st.paused){flag('extraPrompt');}
      if(!st.said)flag('missingDirection');
      if(st.awaiting)flag(st.awaiting==='instruction'?'earlyPrompt':'missedPromptWait');
      if(!st.observedLevels.includes('instruction'))flag('earlyPrompt');
      if(type==='model'&&!st.observedLevels.includes('gesture'))flag('skipGesture');
      if(type==='gesture'&&st.gestures>0)flag('repeatedGesture');
      if(st.completed||st.paused){
        st.response=st.completed?`${name} already completed the step.`:st.response;
      }else{
        if(type==='gesture')st.gestures++;else st.models++;
        st.awaiting=type;st.outcome='pending';st.waitsSincePrompt=0;
        st.response=`No new learner response observed yet. Select Wait to observe ${name}.`;
      }
      log(type,type==='gesture'?`Pointed to ${s.target}`:`Modelled ${s.name}`,flags);
    }else if(type==='ack'){
      if(!st.completed)flag('earlyAck');
      else if(st.acknowledged)flag('repeatedAck');
      else {st.acknowledged=true;}
      log('ack','Acknowledged learner success',flags);
    }else if(type==='pause'){
      if(st.paused)return;
      if(st.outcome!=='unresolved'||st.awaiting||!st.models)flag('prematurePause');
      st.paused=true;
      // Keep the last learner action visible; the pause is shown separately.
      log('pause','Paused unresolved step for plan review',flags);
    }
    renderPractice();
  }
  // Dedicated, task-specific materials; learner observations remain the source of exact action detail.
  const sceneSVG=(s,st,outcome)=>window.TEACHSIM_SCENE_RENDER(s,stepIndex,outcome);
  function renderPractice(){const s=current(),st=s.steps[stepIndex];
    const guided=pathway==='new';
    $('guided-instruction').classList.remove('hidden');

    $('guided-words').textContent=guided?'“'+(st.direction||'Please complete this step.')+'”':'Decide what instruction you would give. Indicate when delivered.';
    $('direction-label').textContent=guided?'Suggested instruction':'Deliver your instruction';
    $('give-guided-direction').disabled=practiceState.said>0;
    $('give-guided-direction').textContent=practiceState.said>0?'✓ Instruction given':(guided?'▸ Give suggested instruction':'▸ I gave an instruction');
    $('practice-pathway-tag').textContent=guided?'Guided':'Experienced';
    $('practice-lead').textContent='Watch what the learner does. Then decide.';$('step-count').textContent=`Task step ${stepIndex+1}`;$('step-name').textContent=st.name;$('step-context').textContent=st.context;$('count-badge').textContent=`${stepIndex+1} / ${s.steps.length}`;
    $('progressbar').innerHTML=s.steps.map((_,i)=>`<i class="${i<stepIndex?'done':i===stepIndex?'now':''}"></i>`).join('');$('progressbar').setAttribute('aria-label',`Step ${stepIndex+1} of ${s.steps.length}`);$('scene-student').textContent=s.learnerName;$('scene-object-label').textContent=st.target||'Task material';$('scene-visual').innerHTML=sceneSVG(s,st,practiceState.outcome);$('gesture-example').textContent=guided?`Point towards ${st.target||'the material'}`:'Use a gesture to cue the step';$('model-example').textContent=guided?`Show how to ${st.name.toLowerCase()}`:'Demonstrate the step';$('guided-hint').classList.toggle('hidden',!guided);$('student-response').textContent=observedText(practiceState.response,s.learnerName);
    const kind=practiceState.outcome;
    const kindText={ready:'Ready',pending:'Not yet observed',correct:'Completed',incorrect:'Different action',no_response:'No action',unresolved:'Still incomplete'};
    $('response-type').textContent=practiceState.paused?'Paused':(kindText[kind]||'Observe response');
    $('response-type').className='observation-type '+(kind||'ready');
    const outcomeDisplay={ready:['👀','Before instruction'],pending:['⏳','Waiting for observation'],correct:['✓','Completed the step'],incorrect:['↗','Did something else'],no_response:['—','Did not begin'],unresolved:['!','Still needs support']};const [glyph,summary]=practiceState.paused?['‖','Paused for plan review']:(outcomeDisplay[kind]||outcomeDisplay.ready);$('observed-glyph').textContent=glyph;$('observed-summary').textContent=summary;$('observed-status').className='observed-status '+(kind||'ready');
    $('pause-step').classList.toggle('hidden', !(practiceState.outcome==='unresolved'&&!practiceState.paused));
    $('advance').textContent=stepIndex===s.steps.length-1?'Finish and review →':'Next task step →';}
  function advance(){
    if(page!=='practice')return;
    const st=practiceState;
    if(!st.said&&!st.issues.includes('missingDirection'))st.issues.push('missingDirection');
    if(!st.completed&&!st.paused)st.issues.push(st.outcome==='unresolved'?'missedPause':'incomplete');
    if(st.completed&&!st.acknowledged)st.issues.push('missedAck');
    st.events.push({action:'next',details:'Moved to next task step'});
    records.push({...clone(st),index:stepIndex,plan:responsePlan()});
    if(stepIndex===current().steps.length-1){renderReview();setPage('review');}
    else{stepIndex++;practiceState=freshState();resetHint();renderPractice();}
  }
  function expectedSequence(plan){
    const result=['Give instruction','Wait'];
    if(plan.length>1)result.push('Gestural prompt','Wait');
    if(plan.length>2)result.push('Model prompt','Wait');
    result.push(plan[plan.length-1]==='unresolved'?'Pause & review plan':'Acknowledge success');
    result.push('Next task step');
    return result;
  }
  function renderReview(){
    const s=current();
    const handled=records.filter(r=>r.issues.length===0&&(r.completed||r.paused)).length;
    const completed=records.filter(r=>r.completed).length;
    const paused=records.filter(r=>r.paused).length;
    $('overall').innerHTML=`<div class="label">${pathway==='new'?'Guided':'Experienced'} · ${escapeHTML(s.title)}</div><h2>${handled===records.length?'You responded to the scripted learner outcomes as planned.':'Practice complete — review your decisions.'}</h2><p>Focus on one decision to improve, then try again.</p>`;
    $('review-stats').innerHTML=`<div class="stat"><strong>${handled} of ${records.length}</strong><span>Steps handled as planned</span></div><div class="stat"><strong>${completed}</strong><span>Completed steps</span></div><div class="stat"><strong>${paused}</strong><span>Paused for plan review</span></div>`;
    const firstIssue=records.find(r=>r.issues.length);
    const firstAligned=records.find(r=>r.issues.length===0&&(r.completed||r.paused));
    const strength=firstAligned?(firstAligned.paused?`You paused “${s.steps[firstAligned.index].name}” when the scripted hierarchy did not produce completion.`:`You completed “${s.steps[firstAligned.index].name}” using the planned prompting decisions.`):'You practised observing learner responses and choosing teaching actions.';
    const improvement=firstIssue?`Step ${firstIssue.index+1} (${s.steps[firstIssue.index].name}): `+(FEEDBACK[firstIssue.issues[0]]||'Revisit the teaching sequence.'):(indicesForPath().length>1?'Try another variation to practise a different learner response.':'Retry to consolidate your decisions.');
    $('review-focus').innerHTML=`<div><span class="review-focus-label">Worked well</span><p>${escapeHTML(strength)}</p></div><div><span class="review-focus-label">Try next</span><p>${escapeHTML(improvement)}</p></div>`;
    const independent=records.filter(r=>r.observedLevels.includes('instruction')&&!r.issues.includes('earlyPrompt')).length;
    const escalation=records.filter(r=>!r.issues.some(x=>['earlyPrompt','skipGesture','missedPromptWait','repeatedGesture','repeatedWait','extraPrompt','unnecessaryEscalation'].includes(x))).length;
    const closes=records.filter(r=>(r.completed&&r.acknowledged&&!r.issues.includes('earlyAck'))||(r.paused&&r.outcome==='unresolved')).length;
    $('decision-summary').innerHTML=`<h2>Prompting decisions</h2><dl><div><dt>Independent response opportunity</dt><dd>${independent}/${records.length} steps</dd></div><div><dt>Prompt selection after observation</dt><dd>${escalation}/${records.length} steps</dd></div><div><dt>Acknowledgement or plan review</dt><dd>${closes}/${records.length} steps</dd></div></dl><p class="small subdued">Based on choices made within the fictional practice.</p>`;
    $('review-reflection').textContent='Discuss with your trainer: '+(pathway==='new'?s.content.reflectNew:s.content.reflectExperienced);
    const variations=indicesForPath();$('retry-next').disabled=variations.length<2;
    $('retry-next').title=variations.length<2?'Only one response pattern is configured for this pathway.':'';
    $('retry-next').textContent=variations.length<2?'No other variation in this pathway':'Try next variation →';
    $('step-feedback').innerHTML=records.map((r,i)=>{
      const st=s.steps[r.index];const good=r.issues.length===0&&(r.completed||r.paused);
      const observed=r.events.map(e=>e.action==='say'?(pathway==='new'?'Gave suggested instruction':'Indicated instruction delivered'):(ACTION_LABELS[e.action]||e.action)+(e.action==='wait'?` (${e.details.replace('Observed ','')})`:'' )).join(' → ');
      const concerns=r.issues.map(code=>FEEDBACK[code]||'Review this action.');
      return `<details class="step-review"><summary><span><strong>${i+1}. ${escapeHTML(st.name)}</strong><br><small class="subdued">${escapeHTML(r.paused?'Paused for review':r.completionType||'Not completed')}</small></span><span class="rowstatus ${good?'':'review'}">${good?'Aligned':'Review'}</span></summary><div class="review-detail"><div class="label">Observed learner responses</div><div class="sequence">${escapeHTML(r.events.filter(e=>e.action==='wait'&&e.details.startsWith('Observed')).map(e=>e.details.replace('Observed ','')).join(' → ')||'No response observed')}</div><div class="label" style="margin-top:10px">Your actions</div><div class="sequence">${escapeHTML(observed)}</div><div class="label" style="margin-top:10px">Planned sequence for this variation</div><div class="sequence">${escapeHTML(expectedSequence(r.plan).join(' → '))}</div><div class="review-callout">${good?escapeHTML(r.paused?'Appropriate pause for trainer review within this fictional plan.':'Selected actions followed the scripted procedure.'): `<strong>Next time:</strong><ul>${concerns.map(c=>`<li>${escapeHTML(c)}</li>`).join('')}</ul>`}</div></div></details>`;
    }).join('');
  }
  function returnBrief(next=false){const eligible=indicesForPath();if(next&&eligible.length>1)patternIndex=eligible[(eligible.indexOf(patternIndex)+1)%eligible.length];renderPrepare();setPage('prepare');}
  function openDialog(el){if(typeof el.showModal==='function')el.showModal();else el.setAttribute('open','');}
  function closeDialog(el){if(typeof el.close==='function')el.close();else el.removeAttribute('open');}
  function resetHint(){$('hint-content').classList.add('hidden');$('toggle-hint').setAttribute('aria-expanded','false');$('toggle-hint').textContent='Show guiding questions';}
  $('toggle-hint').addEventListener('click',()=>{const el=$('hint-content');const expanding=el.classList.contains('hidden');el.classList.toggle('hidden',!expanding);$('toggle-hint').setAttribute('aria-expanded',String(expanding));$('toggle-hint').textContent=expanding?'Hide guiding questions':'Show guiding questions';});
  const helpDialog=$('help-dialog'),briefDialog=$('brief-dialog');
  $('open-guide').addEventListener('click',()=>openDialog(helpDialog));
  $('close-help').addEventListener('click',()=>closeDialog(helpDialog));
  $('review-brief').addEventListener('click',()=>{
    const s=current();
    $('brief-dialog-learner').textContent=s.learnerName;
    $('brief-dialog-title-text').textContent=s.title;
    $('brief-dialog-objective').textContent=s.objective;
    $('brief-dialog-procedure').textContent=s.procedure;
    $('brief-dialog-steps').innerHTML=s.steps.map(st=>`<li><strong>${escapeHTML(st.name)}</strong><span class="step-criterion">Correct response: ${escapeHTML(st.correctCriterion)}</span></li>`).join('');
    openDialog(briefDialog);
  });
  $('close-brief').addEventListener('click',()=>closeDialog(briefDialog));
  for(const d of [helpDialog,briefDialog])d.addEventListener('click',e=>{if(e.target===d)closeDialog(d);});
  $('scenario-select').addEventListener('change',e=>{
    if(!library.some(sc=>sc.id===e.target.value))return;
    selectedId=e.target.value;patternIndex=0;renderPrepare();
  });
  document.querySelectorAll('input[name="practice-pathway"]').forEach(el=>el.addEventListener('change',e=>setPathway(e.target.value)));
  $('start').addEventListener('click',start);
  $('give-guided-direction').addEventListener('click',()=>{
    if(page!=='practice'||practiceState.said>0)return;
    action('say',current().steps[stepIndex].direction||'Please complete this step.');
  });
  $('point-target').addEventListener('click',()=>action('gesture'));
  $('do-wait').addEventListener('click',()=>action('wait'));
  $('do-model').addEventListener('click',()=>action('model'));
  $('do-ack').addEventListener('click',()=>action('ack'));
  $('pause-step').addEventListener('click',()=>action('pause'));
  $('advance').addEventListener('click',()=>{
    const oldStep=stepIndex;
    advance();
    if(page==='practice'&&stepIndex!==oldStep){$('step-name').focus({preventScroll:true});}
  });
  $('retry-same').addEventListener('click',()=>returnBrief(false));
  $('retry-next').addEventListener('click',()=>returnBrief(true));
  $('back-brief').addEventListener('click',()=>returnBrief(false));
  renderPrepare();setPage('prepare',false);
  // Enable controls only after scenario data and action handlers are ready.
  $('scenario-select').disabled=false;
  $('start').disabled=false;
  $('open-guide').disabled=false;
  document.querySelectorAll('input[name="practice-pathway"]').forEach(el=>el.disabled=false);
  $('startup-notice').classList.add('hidden');
})();
