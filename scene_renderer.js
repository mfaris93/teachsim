/* TeachSim V6.9 — clean, task-specific vector workspaces. Static shapes only. */
(() => {
  const C={ink:'#244555',line:'#79979a',teal:'#137b70',mint:'#cfe9df',tealPale:'#edf8f4',amber:'#b86c25',gold:'#f8dfb3',brown:'#bc906a',paper:'#fffef8',blue:'#b4d1de',slate:'#738f9a',coral:'#e5b8ab'};
  const R=(x,y,w,h,fill,rx=10,stroke='',sw=2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${stroke?` stroke="${stroke}" stroke-width="${sw}"`:''}/>`;
  const L=(x1,y1,x2,y2,color=C.ink,width=4)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
  const P=(d,fill='none',stroke=C.ink,sw=3)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round"/>`;
  const E=(cx,cy,rx,ry,fill,stroke='',sw=2)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}"${stroke?` stroke="${stroke}" stroke-width="${sw}"`:''}/>`;
  const sprites={
    sink:()=>R(11,35,106,52,'#c5e3df',23,C.teal,3)+E(64,58,43,19,'#f5fcfa','#83bbb3',3)+P('M48 36V9Q48 4 54 4H83Q89 4 89 10V27','none',C.ink,8)+R(79,23,21,10,C.ink,4)+L(85,35,85,41,C.blue,3),
    soap:()=>R(29,31,61,68,'#edbd76',12,'#a8773b',2)+R(51,17,15,17,C.paper,2,C.ink,2)+R(46,12,39,7,C.ink,3)+R(73,17,17,5,C.ink,2)+E(60,78,20,8,'#f4d9ab'),
    towel:()=>R(16,26,100,62,'#b9d5e7',9,'#66869e',3)+P('M38 27V88M93 27V88','none','#8cadbf',3)+L(17,59,115,59,'#87aebe',3),
    hands:()=>E(42,63,21,27,'#dfb59b','#a77d65',2)+E(90,63,21,27,'#dfb59b','#a77d65',2)+R(34,85,17,20,'#dfb59b',6,'#a77d65',2)+R(81,85,17,20,'#dfb59b',6,'#a77d65',2)+P('M34 43L31 28M43 37L43 22M51 43L54 29M82 43L78 28M91 37L91 22M99 43L105 29','none','#a77d65',3),
    tap:()=>P('M22 82V36Q22 22 39 22H84Q99 22 99 37V49','none',C.ink,14)+R(80,44,33,10,C.ink,3)+P('M95 67Q95 72 90 82','none','#76aacc',5)+P('M65 82Q60 93 65 98','none','#76aacc',5),
    bag:()=>R(22,26,88,77,'#82bcb1',17,'#397a71',3)+P('M41 30V20Q41 9 52 9H81Q91 9 91 21V30','none',C.ink,5)+R(43,65,48,31,'#c1e2d9',8,'#397a71',2)+L(24,41,107,41,'#367268',4),
    book:()=>R(28,14,78,96,'#719fb3',6,C.ink,3)+R(40,14,10,96,'#416978',1)+R(59,28,31,44,C.paper,4)+L(65,43,84,43,C.line,2)+L(65,51,84,51,C.line,2),
    bottle:()=>R(38,20,57,89,'#8ec6d6',18,'#46758d',3)+R(53,8,27,17,'#2e6278',4)+R(49,53,35,24,C.paper,5),
    zipper:()=>R(28,20,76,84,'#9bcdbd',15,'#39887a',3)+P('M36 38H95','none',C.ink,5)+R(62,33,13,25,C.gold,4,'#876b3f',2),
    box:()=>P('M20 41L62 24L111 39L70 60Z','#f2d1a0','#a77a4f',3)+P('M20 41V100L70 118V60Z','#dfaa73','#a77a4f',3)+P('M70 60L111 39V98L70 118Z','#c48b56','#9f7246',3),
    product:()=>R(31,15,70,96,'#f1d394',9,'#bb935b',3)+R(43,38,47,38,C.paper,5)+L(51,51,83,51,C.line,2)+L(51,61,77,61,C.line,2),
    slip:()=>P('M30 12H89L104 28V108H30Z','#fffdf8','#9caeb0',3)+P('M89 12V28H104','none','#9caeb0',3)+L(43,47,87,47,C.line,3)+L(43,60,83,60,C.line,3)+L(43,73,79,73,C.line,3),
    lid:()=>P('M11 32L76 10L120 40L56 62Z','#ebc89a','#9e7649',3)+L(20,38,57,54,'#cfab79',4),
    cup:()=>P('M26 30H99L91 100Q65 117 37 100Z','#a7d4d1','#517f80',3)+P('M96 41H107Q122 41 118 58Q116 71 98 70','none','#517f80',5)+E(63,31,36,8,'#e8f8f4','#517f80',2),
    plate:()=>E(68,63,52,43,C.paper,'#8fb9ad',4)+E(68,63,35,29,'#f0f7f2','#a8cabe',2),
    tray:()=>R(8,41,118,62,'#b5d7d0',13,'#5e9d93',4)+R(20,51,93,41,C.paper,7,'#86b5ab',2),
    table:()=>R(4,35,121,66,'#dcbd9b',7,'#a77f5d',3)+L(20,104,20,117,'#a77f5d',6)+L(109,104,109,117,'#a77f5d',6),
    cloth:()=>P('M17 35L105 20L119 94L26 111Z','#a1c9e0','#47778d',3)+P('M36 47L97 38M42 68L102 61','none','#cee7ee',4),
    basket:()=>P('M21 38H113L101 105H35Z','#d0bb9c','#967a55',3)+L(25,55,108,55,'#967a55',3)+L(41,58,48,100,'#967a55',3)+L(70,58,70,101,'#967a55',3)+L(96,58,89,100,'#967a55',3),
    towelFlat:()=>R(12,34,111,56,'#c0d9e6',7,'#6b9aae',3)+L(27,43,108,43,'#e1f0f5',3)+L(27,82,108,82,'#e1f0f5',3),
    towelFold:()=>R(23,39,96,54,'#b7d4e0',7,'#6f9eaf',3)+P('M24 42L69 54V91','none','#8cb4c2',3)+L(27,82,114,82,'#e1f0f5',4),
    stack:()=>R(14,70,112,29,'#c2cfe4',7,'#6f91b5',2)+R(20,44,101,28,'#eed0bc',7,'#bd917d',2)+R(28,19,89,27,'#c9e0d3',7,'#83aa96',2),
    shelf:()=>R(13,13,11,103,C.ink,2)+R(111,13,11,103,C.ink,2)+R(24,42,87,8,'#8fafb1',2)+R(24,87,87,8,'#8fafb1',2)+R(35,14,26,28,'#f1c48e',3)+R(67,19,27,23,'#9bc6ba',3)+R(50,58,28,29,'#b9d3e2',4),
    label:()=>R(24,21,95,80,C.paper,6,C.line,3)+R(36,34,66,21,'#d2e5dd',4)+L(39,68,101,68,C.line,3)+L(39,79,79,79,C.line,3),
    marker:()=>R(20,28,102,64,C.paper,7,C.ink,2)+R(25,34,92,18,C.gold,4)+L(38,67,103,67,C.line,3)+L(38,77,75,77,C.line,3),
    edge:()=>R(13,48,117,18,'#8fb3b1',3,C.ink,2)+L(20,52,122,52,C.paper,3)+R(49,17,36,31,'#b8d4dc',4),
    snack:()=>R(25,15,84,102,'#f0c479',12,'#af7b3d',3)+P('M25 30L39 40L53 29L67 40L81 29L95 40L109 30','none','#9e703a',3)+R(41,53,50,27,C.paper,6)+E(65,68,13,8,'#db9157'),
    napkin:()=>P('M19 25H101L113 107H31Z','#f8f9f2','#9dada7',3)+P('M19 25L44 53L101 25','none','#b8c7c0',2),
    point:()=>R(20,25,105,79,'#e6f0e8',8,'#779f94',3)+R(37,40,67,24,'#c7ddd4',4)+L(39,79,103,79,'#779f94',4)
  };
  const scenes={
    handwashing:{bg:'counter',objects:[['soap',151,141,1],['hands',334,140,1],['tap',334,58,.85],['towel',509,143,.95]],targets:[0,1,2,3],wrong:[3,2,3,1]},
    'template-school-bag':{bg:'floor',objects:[['bag',337,125,1.17],['book',149,147,.95],['bottle',513,151,.93],['zipper',336,70,.57]],targets:[0,1,2,3],wrong:[1,1,2,0]},
    'template-work-packing':{bg:'counter',objects:[['box',335,133,1.19],['product',144,145,.92],['slip',519,144,.82],['lid',346,72,.65]],targets:[0,1,2,3],wrong:[1,1,2,0]},
    'clear-meal-area':{bg:'counter',objects:[['cup',155,150,.93],['plate',317,150,.94],['tray',502,151,1.02],['point',509,66,.59]],targets:[2,2,3,0],wrong:[0,1,2,3]},
    'wipe-table':{bg:'counter',objects:[['cloth',152,153,.89],['table',323,148,1.06],['basket',503,148,1]],targets:[0,1,2,1],wrong:[2,0,1,2]},
    'fold-towels':{bg:'counter',objects:[['towelFlat',150,150,.98],['towelFold',316,149,.98],['stack',505,149,.99]],targets:[0,1,1,1,2],wrong:[1,0,0,0,0]},
    'restock-shelf':{bg:'floor',objects:[['product',146,150,.9],['label',277,147,.85],['shelf',466,126,1.23],['marker',487,58,.56]],targets:[1,3,2,2,2],wrong:[0,1,2,2,0]},
    'prepare-snack-tray':{bg:'counter',objects:[['tray',333,148,1.22],['plate',144,148,.88],['snack',513,145,.88],['napkin',523,75,.56],['point',182,62,.58]],targets:[0,1,2,3,4],wrong:[1,1,2,3,0]}
  };
  const statusNames={ready:'Task workspace',pending:'Observe after waiting',correct:'Step completed',incorrect:'Different action',no_response:'No response',unresolved:'Still incomplete'};
  const svgText=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const scene=(s,stepNum,outcome='ready')=>{
    const config=scenes[s.id]||scenes.handwashing;
    const target=config.targets[stepNum]??0,wrong=config.wrong[stepNum]??0;
    const choice=outcome==='correct'?target:outcome==='incorrect'?wrong:null;
    const chosen=config.objects[choice]||null;
    const isBad=outcome==='incorrect',isGood=outcome==='correct';
    const stamp=isBad?'Different action':isGood?'Completed':outcome==='no_response'?'No action':outcome==='unresolved'?'Incomplete':outcome==='pending'?'Waiting':'Ready';
    const tint=isBad?'#fff0d9':isGood?'#e1f2e9':outcome==='no_response'||outcome==='unresolved'?'#e8f1fa':'#e8f2ee';
    const ink=isBad?'#8e571b':isGood?'#17654e':'#335565';
    const bg=config.bg==='floor'?`${R(20,239,640,13,'#e3e9e5',6)}${R(20,252,640,13,'#d8e4df',6)}`:`${R(20,238,640,11,'#d6e3df',5)}${R(40,249,602,10,'#e5ede9',5)}`;
    const items=config.objects.map(([kind,x,y,scale],i)=>{
      const targetItem=i===target;
      const focal=choice===i;
      const frame=focal?`${E(x+59*scale,y+59*scale,65*scale,61*scale,isBad?'#fff1df':'#ddf2e8','#b2d1c9',2)}`:'';
      const sprite=(sprites[kind]||sprites.point)();
      return `<g>${frame}<g transform="translate(${x} ${y}) scale(${scale})">${sprite}</g></g>`;
    }).join('');
    let cue='';
    if(chosen){
      const [kind,x,y,scale]=chosen;const ax=x+65*scale,ay=y+68*scale;
      // A motion cue marks where the learner acted. It is not a literal motor-performance depiction.
      cue=`<circle cx="${ax}" cy="${ay}" r="31" fill="none" stroke="${ink}" stroke-width="5" stroke-dasharray="8 6"/><circle cx="${ax+28}" cy="${ay-33}" r="20" fill="${ink}"/><text x="${ax+28}" y="${ay-26}" fill="white" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-weight="800" font-size="24">${isGood?'✓':'!'}</text>`;
    } else if(outcome==='no_response'||outcome==='unresolved') {
      cue=`<path d="M45 170H103" stroke="#92a9b3" stroke-width="5" stroke-linecap="round" stroke-dasharray="5 10"/><circle cx="108" cy="170" r="10" fill="#92a9b3"/>`;
    }
    return `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="680" height="280" rx="16" fill="#f7faf8"/>${R(18,14,188,34,tint,17)}<text x="33" y="36" font-family="system-ui,Arial,sans-serif" font-size="15" fill="${ink}" font-weight="750">${svgText(stamp.toUpperCase())}</text>${bg}${items}${cue}</svg>`;
  };
  window.TEACHSIM_SCENE_RENDER=scene;
})();
