
/* ============================
   Quiz App: Data + Logic
   ============================ */

/* Languages with theme classes and display name */
const LANGUAGES = [
  { id: 'js', name: 'JavaScript', theme: 'theme-js', accent:'#f97316' },
  { id: 'python', name: 'Python', theme: 'theme-python', accent:'#306998' },
  { id: 'cpp', name: 'C++', theme: 'theme-cpp', accent:'#00599C' },
  { id: 'java', name: 'Java', theme: 'theme-java', accent:'#b07219' },
  { id: 'ts', name: 'TypeScript', theme: 'theme-ts', accent:'#3178c6' },
  { id: 'ruby', name: 'Ruby', theme: 'theme-ruby', accent:'#cc342d' },
  { id: 'go', name: 'Go', theme: 'theme-go', accent:'#00ADD8' },
  { id: 'csharp', name: 'C#', theme: 'theme-csharp', accent:'#68217A' },
];

/* QUESTION BANK: each language keeps 10 sample 4-option questions (you can expand) */
const QUESTION_BANK = {
  js: [
    { q:"Which method transforms JSON text into a JS object?", a:["JSON.parse()","JSON.stringify()","parseJSON()","toObject()"], correct:0 },
    { q:"Which keyword declares a block-scoped variable?", a:["var","let","const","both let and const"], correct:3 },
    { q:"What does '===' check in JS?", a:["Value equality", "Type equality", "Value and type equality", "Reference equality"], correct:2 },
    { q:"Select the array method that returns a new array.", a:["push()", "splice()", "map()", "reverse()"], correct:2 },
    { q:"Which event fires when DOM is fully loaded?", a:["onload", "DOMContentLoaded", "ready", "loadDOM"], correct:1 },
    { q:"What will `typeof NaN` return?", a:["'number'","'NaN'","'undefined'","'object'"], correct:0 },
    { q:"Which is not a primitive in JS?", a:["string","number","symbol","object"], correct:3 },
    { q:"Which function schedules code to run after a delay?", a:["setTimeout()", "setInterval()", "setDelay()", "sleep()"], correct:0 },
    { q:"Promise.all resolves when:", a:["Any promise resolves", "All promises resolve", "First promise resolves", "None"], correct:1 },
    { q:"Arrow functions do not bind which keyword?", a:["this","arguments","super","new.target"], correct:0 },
  ],
  python: [
    { q:"Which keyword defines a function in Python?", a:["func","def","function","lambda"], correct:1 },
    { q:"What data type is a Python tuple?", a:["Mutable ordered", "Immutable ordered", "Unordered", "Mutable unordered"], correct:1 },
    { q:"Which library is for numerical computing?", a:["pandas","numpy","flask","matplotlib"], correct:1 },
    { q:"How do you create a list comprehension?", a:["[x for x in seq]","(x for x in seq)","{x for x in seq}","<x for x in seq>"], correct:0 },
    { q:"What symbol starts a comment?", a:["//","--","#","/*"], correct:2 },
    { q:"Which is used for virtual environments?", a:["venv","npm","pip","docker"], correct:0 },
    { q:"How to open a file for reading?", a:["open('file','r')","open('file','w')","read('file')","file.open('r')"], correct:0 },
    { q:"What does 'len' return for a string?", a:["Number of characters","Bytes","Words","Sentences"], correct:0 },
    { q:"Which statement handles exceptions?", a:["try/except","catch/throw","handle/except","attempt/catch"], correct:0 },
    { q:"Which data type holds key-value pairs?", a:["list","set","tuple","dict"], correct:3 },
  ],
  cpp: [
    { q:"Which header is needed for std::cout?", a:["<iostream>","<stdio.h>","<cout>","<ostream>"], correct:0 },
    { q:"Which keyword defines a class?", a:["struct","class","object","type"], correct:1 },
    { q:"What is RAII used for?", a:["Memory leaks","Resource management","Multithreading","I/O"], correct:1 },
    { q:"Which operator is used for scope resolution?", a:["::", ":", ".", "->"], correct:0 },
    { q:"Which function runs when object is destroyed?", a:["constructor", "destructor", "finalize", "dispose"], correct:1 },
    { q:"Which is for dynamic memory allocation?", a:["malloc","alloc","new","create"], correct:2 },
    { q:"C++ supports which polymorphism type at runtime?", a:["Static", "Dynamic (virtual)", "None", "Compile only"], correct:1 },
    { q:"What does STL stand for?", a:["Standard Template Library","Simple Template List","Standard Tools Library","System Template List"], correct:0 },
    { q:"Which container is fastest for random access?", a:["vector","list","map","set"], correct:0 },
    { q:"Which header contains std::string?", a:["<string>","<cstring>","<str>","<s>"], correct:0 },
  ],
  java: [
    { q:"Which keyword is used to inherit a class?", a:["extends","implements","inherits","derives"], correct:0 },
    { q:"Which JVM component executes bytecode?", a:["JDK","JRE","JVM","JAR"], correct:2 },
    { q:"Which collection allows duplicate elements?", a:["Set","Map","List","Queue"], correct:2 },
    { q:"What is the entry point method signature?", a:["public static void main(String[] args)","public void main(String[] args)","static void main()", "void main(String args)"], correct:0 },
    { q:"Which keyword prevents method overriding?", a:["final","static","private","sealed"], correct:0 },
    { q:"Which exception must be declared or handled?", a:["RuntimeException","Error","Checked exception","All exceptions"], correct:2 },
    { q:"Which interface for key-value pairs?", a:["List","Map","Set","Queue"], correct:1 },
    { q:"JVM is platform independent?", a:["True","False","Only on Windows","Only on Linux"], correct:0 },
    { q:"Which is used for synchronization?", a:["volatile","synchronized","static","transient"], correct:1 },
    { q:"Which package is root of standard classes?", a:["java.lang","java.util","javax","org"], correct:0 },
  ],
  ts: [
    { q:"TypeScript is a superset of which language?", a:["Python","JavaScript","Java","C#"], correct:1 },
    { q:"Which file extension is used for TypeScript?", a:[".ts",".js",".tsx",".jsx"], correct:0 },
    { q:"TypeScript adds what to JavaScript?", a:["Strong typing","Faster runtime","Built-in GUI","Bytecode"], correct:0 },
    { q:"Which keyword declares a type alias?", a:["type","alias","typedef","using"], correct:0 },
    { q:"Which tool compiles TypeScript to JavaScript?", a:["tsc","babel","webpack","rollup"], correct:0 },
    { q:"Interfaces in TypeScript are used for?", a:["Styling","Type shapes","Database","Networking"], correct:1 },
    { q:"Which allows JSX in TS?", a:["--jsx react","--jsx preserve","--jsx react-jsx","All"], correct:3 },
    { q:"TypeScript supports enums?", a:["Yes","No","Only in runtime","Only with plugin"], correct:0 },
    { q:"Which is used for generics?", a:["<>","[]","{}","()"], correct:0 },
    { q:"Any type disables type checking?", a:["True","False","Only in dev","Only in prod"], correct:0 },
  ],
  ruby: [
    { q:"Which symbol indicates a block in Ruby?", a:["do...end","{}","both", "lambda"], correct:2 },
    { q:"Which method prints to console?", a:["puts","print","echo","log"], correct:0 },
    { q:"Ruby is primarily which paradigm?", a:["Functional","Object-oriented","Procedural","Logic"], correct:1 },
    { q:"Which gem manager is standard?", a:["npm","gem","pip","cargo"], correct:1 },
    { q:"What is 'irb'?", a:["Interactive Ruby Shell","Ruby compiler","Framework","Package"], correct:0 },
    { q:"Which is string interpolation?", a:["#{var}","$var","%{var}","{var}"], correct:0 },
    { q:"Which keyword defines a class?", a:["class","struct","object","type"], correct:0 },
    { q:"Which is used for blocks as objects?", a:["Proc","Block","Lambda","Func"], correct:0 },
    { q:"Rails is a Ruby...?", a:["Library","Framework","Language","Compiler"], correct:1 },
    { q:"Which returns length of string?", a:["length","len","size","count"], correct:0 },
  ],
  go: [
    { q:"Who created Go?", a:["Google","Microsoft","Apple","Amazon"], correct:0 },
    { q:"Go uses which keyword for packages?", a:["package","import","module","require"], correct:0 },
    { q:"Which concurrency primitive in Go?", a:["goroutine","thread","process","fiber"], correct:0 },
    { q:"What is the file extension for Go?", a:[".go",".golang",".g",".gofile"], correct:0 },
    { q:"Which tool formats code in Go?", a:["gofmt","gofmtx","fmtgo","goformat"], correct:0 },
    { q:"Which type holds key-value pairs in Go?", a:["map","dict","table","object"], correct:0 },
    { q:"Go compiles to?", a:["Machine code","Bytecode","Source only","Interpreted"], correct:0 },
    { q:"Which is the zero value of int?", a:["0","nil","undefined","-1"], correct:0 },
    { q:"Go's package for HTTP is?", a:["net/http","http","nethttp","web"], correct:0 },
    { q:"Which tool manages modules in Go?", a:["go mod","dep","npm","cargo"], correct:0 },
  ],
  csharp: [
    { q:"C# was developed by which company?", a:["Microsoft","Apple","Google","Oracle"], correct:0 },
    { q:"C# is primarily used on which runtime?", a:["CLR","JVM","V8","Node"], correct:0 },
    { q:"Which keyword defines a namespace?", a:["namespace","package","module","using"], correct:0 },
    { q:"Which symbol starts a verbatim string?", a:["@","$","#","%"], correct:0 },
    { q:"Which is used for LINQ queries?", a:["select","filter","map","where"], correct:0 },
    { q:"Which file extension for C#?", a:[".cs",".csharp",".csx",".csh"], correct:0 },
    { q:"Which keyword defines an interface?", a:["interface","class","struct","type"], correct:0 },
    { q:"Which modifier allows inheritance?", a:["virtual","static","sealed","const"], correct:0 },
    { q:"Which type is reference type?", a:["class","struct","int","bool"], correct:0 },
    { q:"Which is entry point signature?", a:["static void Main(string[] args)","void main()","public Main()","main()"], correct:0 },
  ],
};

/* App state */
const state = {
  player: null,
  email: null,
  lang: null,        // 'js' | 'python' | ...
  qCount: 7,
  questions: [],     // loaded question objects with shuffled options
  current: 0,
  answers: {},       // { index: selectedIndex }
  timerEnabled: false,
  perQuestionTime: 40, // seconds (optional)
  timeLeft: 0,
  timerId: null,
};

/* DOM refs */
const app = document.getElementById('app');
const langSelectEl = document.getElementById('langSelect');
const startForm = document.getElementById('startForm');
const startBtn = document.getElementById('startBtn');
const demoBtn = document.getElementById('demoBtn');
const placeholder = document.getElementById('placeholder');

const quizArea = document.getElementById('quizArea');
const userMeta = document.getElementById('userMeta');
const langMeta = document.getElementById('langMeta');
const qMeta = document.getElementById('qMeta');
const progBar = document.getElementById('progBar');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultCard = document.getElementById('resultCard');
const resultText = document.getElementById('resultText');
const scoreValue = document.getElementById('scoreValue');
const percentText = document.getElementById('percentText');
const retryBtn = document.getElementById('retryBtn');
const startOverBtn = document.getElementById('startOverBtn');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const timeLeftEl = document.getElementById('timeLeft');
const timerPill = document.getElementById('timerPill');
const logoEl = document.getElementById('logo');

/* Initialize language buttons */
(function renderLanguageOptions(){
  LANGUAGES.forEach((lang, idx) => {
    const btn = document.createElement('div');
    btn.className = 'lang-option';
    btn.dataset.lang = lang.id;
    btn.role = 'button';
    btn.tabIndex = 0;

    // swatch for color + label
    const sw = document.createElement('span');
    sw.className = 'swatch';
    sw.style.background = lang.accent;
    btn.appendChild(sw);

    const label = document.createElement('span');
    label.textContent = lang.name;
    btn.appendChild(label);

    btn.title = lang.name;
    btn.addEventListener('click', ()=> {
      // remove active from all then set this
      document.querySelectorAll('.lang-option').forEach(n=>n.classList.remove('active'));
      btn.classList.add('active');
      selectLanguage(lang.id);
    });
    btn.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); } });
    langSelectEl.appendChild(btn);
  });

  // default select first language reliably
  if(LANGUAGES.length > 0){
    const first = LANGUAGES[0];
    const firstBtn = langSelectEl.querySelector('.lang-option');
    if(firstBtn) firstBtn.classList.add('active');
    selectLanguage(first.id);
  }
})();

/* Language selection: set state and theme */
function selectLanguage(id){
  state.lang = id;
  const langObj = LANGUAGES.find(l=>l.id===id) || LANGUAGES[0];
  // set theme class on root wrapper
  const themeClasses = LANGUAGES.map(l => l.theme).concat('theme-default');
  app.classList.remove(...themeClasses);
  app.classList.add(langObj.theme || 'theme-default');
  // update UI
  langMeta.textContent = `Language: ${langObj.name}`;
  // set logo first two characters (safe)
  const label = (langObj.name || '').trim();
  logoEl.textContent = label.length >= 2 ? label.slice(0,2).toUpperCase() : (label[0] || 'Q').toUpperCase();
}

/* Helpers */
const shuffle = (arr) => arr
  .map(a=>({v:a, r:Math.random()}))
  .sort((x,y)=>x.r-y.r)
  .map(x=>x.v);

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* Start quiz */
startForm.addEventListener('submit', e=>{
  e.preventDefault();
  const name = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  if(!name || !email) { alert('Please provide name and email.'); return; }
  state.player = name;
  state.email = email;
  // read qcount
  const qcount = document.querySelector('input[name="qcount"]:checked')?.value || '7';
  state.qCount = parseInt(qcount,10) || 7;
  loadQuestionsAndStart();
});

/* Demo button: quick start with demo user */
demoBtn.addEventListener('click', ()=>{
  fullNameInput.value = 'Demo User';
  emailInput.value = 'demo@example.com';
  // set qcount to 10
  const q10input = document.querySelector('#q10 input');
  if(q10input) q10input.checked = true;
  state.qCount = 10;
  state.player = 'Demo User';
  state.email = 'demo@example.com';
  loadQuestionsAndStart();
});

/* Load, shuffle and show first question */
function loadQuestionsAndStart(){
  // load questions for language
  const bank = QUESTION_BANK[state.lang] || [];
  // shuffle bank and pick qCount (clamp qCount to available)
  const take = clamp(state.qCount, 1, bank.length);
  const picked = shuffle(bank).slice(0, take).map(q=>{
    // also shuffle options but keep index of the correct after shuffling
    const options = shuffle(q.a.map((t,i)=>({t,i})));
    const correctIndex = options.findIndex(x=>x.i === q.correct);
    return { q: q.q, options: options.map(x=>x.t), correct: correctIndex };
  });

  state.questions = picked;
  state.current = 0;
  state.answers = {};
  state.timerEnabled = false; // optional
  state.timeLeft = 0;
  clearTimer();
  showQuiz();
}

/* Show quiz area */
function showQuiz(){
  if(placeholder) placeholder.style.display = 'none';
  quizArea.style.display = 'block';
  resultCard.style.display = 'none';
  updateMeta();
  renderCurrentQuestion();
  // focus first option for keyboard accessibility
  setTimeout(()=> {
    const firstOpt = optionsList.querySelector('.option');
    if(firstOpt) firstOpt.focus();
  }, 120);
}

/* Update header meta */
function updateMeta(){
  userMeta.textContent = `Player: ${state.player || '—'}`;
  const total = state.questions.length || 0;
  const current = clamp(state.current, 0, Math.max(0, total-1));
  qMeta.textContent = total ? `Q ${current+1} / ${total}` : `Q 0 / 0`;
  const pct = total ? (((current+1)/total)*100) : 0;
  progBar.style.width = `${pct}%`;

  // submit enable logic: enable only if user is on last question OR has answered all
  const allAnswered = Object.keys(state.answers).length === total && total > 0;
  submitBtn.disabled = !( (total>0 && current === total - 1) || allAnswered );
}

/* Render question */
function renderCurrentQuestion(){
  const item = state.questions[state.current];
  if(!item){
    // no questions loaded - safe fallback
    questionText.textContent = 'No questions available for the selected language.';
    optionsList.innerHTML = '';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    updateMeta();
    return;
  }
  questionText.textContent = item.q;
  optionsList.innerHTML = '';
  // ensure exactly 4 options (if fewer, pad with placeholders)
  const opts = item.options.slice(0,4);
  while(opts.length < 4) opts.push('—');

  opts.forEach((opt, idx)=>{
    const div = document.createElement('div');
    div.className = 'option';
    div.tabIndex = 0;
    div.dataset.idx = idx;
    div.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;"><div>${String.fromCharCode(65+idx)}. ${escapeHtml(opt)}</div></div>`;
    // mark selected if answered before
    if(typeof state.answers[state.current] === 'number' && state.answers[state.current] === idx) div.classList.add('selected');
    div.addEventListener('click', ()=> {
      selectOption(idx);
    });
    div.addEventListener('keydown', (ev)=> { if(ev.key==='Enter' || ev.key===' ') { ev.preventDefault(); selectOption(idx); }});
    optionsList.appendChild(div);
  });

  // show/hide prev/next and set disabled state
  prevBtn.disabled = state.current === 0;
  nextBtn.disabled = state.current === state.questions.length - 1;

  updateMeta();
}

/* Select option */
function selectOption(idx){
  state.answers[state.current] = idx;
  // update UI classes
  Array.from(optionsList.children).forEach(el => el.classList.remove('selected'));
  const chosen = optionsList.querySelector(`[data-idx="${idx}"]`);
  if(chosen) chosen.classList.add('selected');

  // If all answered, enable submit
  const total = state.questions.length;
  const allAnswered = Object.keys(state.answers).length === total && total > 0;
  if(allAnswered) {
    submitBtn.disabled = false;
  }
}

/* Navigation */
prevBtn.addEventListener('click', ()=>{
  if(state.current > 0){ state.current--; renderCurrentQuestion(); }
});
nextBtn.addEventListener('click', ()=>{
  if(state.current < state.questions.length - 1){ state.current++; renderCurrentQuestion(); }
});

/* Submit quiz */
submitBtn.addEventListener('click', ()=>{
  const total = state.questions.length;
  const allAnswered = Object.keys(state.answers).length === total && total > 0;
  const lastQuestion = state.current === total - 1;
  if(!allAnswered && !lastQuestion){
    // safety: shouldn't happen because button disabled, but just in case
    alert('Submit is enabled only after you reach the final question or answer all questions.');
    return;
  }
  // if some unanswered, ask confirm
  if(!allAnswered){
    if(!confirm('Some questions are unanswered. Submit anyway?')) return;
  }
  finishQuiz();
});

function finishQuiz(){
  // stop timer if any
  clearTimer();

  let correct = 0;
  const total = state.questions.length;

  // grade
  for(let i=0;i<total;i++){
    const q = state.questions[i];
    const selected = state.answers[i];
    if(selected === q.correct) correct++;
  }

  // show result panel
  resultCard.style.display = 'block';
  scoreValue.textContent = `${correct} / ${total}`;
  const percent = total ? Math.round((correct/total)*100) : 0;
  percentText.textContent = `${percent}%`;
  if(percent >= 80){
    resultText.textContent = `Excellent work, ${state.player}!`;
  } else if(percent >= 50){
    resultText.textContent = `Nice attempt — keep practicing, ${state.player}.`;
  } else {
    resultText.textContent = `You can do better — review concepts and try again.`;
  }

  // present per-question feedback
  const feedbackList = document.createElement('div');
  feedbackList.style.marginTop = '12px';
  feedbackList.style.textAlign = 'left';
  feedbackList.style.maxHeight = '260px';
  feedbackList.style.overflow = 'auto';
  feedbackList.className = 'feedback-list';

  for(let i=0;i<total;i++){
    const q = state.questions[i];
    const sel = state.answers[i];
    const row = document.createElement('div');
    row.style.padding = '8px';
    row.style.borderBottom = '1px dashed rgba(255,255,255,0.02)';
    const yourAnsText = (typeof sel === 'number') ? escapeHtml(q.options[sel]) : '<em>Not answered</em>';
    const correctAnsText = escapeHtml(q.options[q.correct]);
    const mark = (sel === q.correct) ? '✅' : '❌';
    row.innerHTML = `<strong>Q${i+1}.</strong> ${escapeHtml(q.q)}<div class="muted" style="margin-top:6px;">Your answer: ${ yourAnsText } — <strong>${ correctAnsText }</strong> ${mark}</div>`;
    feedbackList.appendChild(row);
  }

  // attach feedback under resultCard (remove old feedback)
  const existing = resultCard.querySelector('.feedback');
  if(existing) existing.remove();
  const wrapper = document.createElement('div');
  wrapper.className = 'feedback';
  wrapper.style.marginTop = '8px';
  wrapper.appendChild(feedbackList);
  resultCard.appendChild(wrapper);

  // scroll to results
  resultCard.scrollIntoView({behavior:'smooth'});
}

/* Retry and Start Over */
retryBtn.addEventListener('click', ()=>{
  // reset answers and keep same question set (user asked for retry)
  state.answers = {};
  state.current = 0;
  resultCard.style.display = 'none';
  // clear feedback
  const existing = resultCard.querySelector('.feedback');
  if(existing) existing.remove();
  renderCurrentQuestion();
  // disable submit until conditions met again
  updateMeta();
});

startOverBtn.addEventListener('click', ()=>{
  // show start form again
  quizArea.style.display = 'none';
  if(placeholder) placeholder.style.display = 'block';
  // reset UI and state
  startForm.reset();
  state.player = null;
  state.email = null;
  state.lang = null;
  state.questions = [];
  state.current = 0;
  state.answers = {};
  clearTimer();
  // reset theme to default
  const themeClasses = LANGUAGES.map(l => l.theme).concat('theme-default');
  app.classList.remove(...themeClasses);
  app.classList.add('theme-default');
  // clear active language buttons
  document.querySelectorAll('.lang-option').forEach(n=>n.classList.remove('active'));
  // set logo back
  logoEl.textContent = 'QZ';
  // hide result
  resultCard.style.display = 'none';
});

/* Timer helpers (optional feature) */
function startTimer(seconds){
  clearTimer();
  state.timeLeft = seconds;
  timeLeftEl.textContent = `${state.timeLeft}s`;
  timerPill.style.display = 'inline-block';
  state.timerId = setInterval(()=>{
    state.timeLeft--;
    timeLeftEl.textContent = `${state.timeLeft}s`;
    if(state.timeLeft <= 0){
      clearTimer();
      alert('Time is up for this session. Submitting automatically.');
      finishQuiz();
    }
  }, 1000);
}

function clearTimer(){
  if(state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  timerPill.style.display = 'none';
}

/* Small utility to escape HTML in feedback */
function escapeHtml(s){
  return (s+'').replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m]);
}

/* Accessibility: keyboard shortcuts */
document.addEventListener('keydown', (e)=>{
  if(quizArea.style.display === 'block'){
    if(e.key === 'ArrowRight') nextBtn.click();
    if(e.key === 'ArrowLeft') prevBtn.click();
    if(e.key === 's' && (e.ctrlKey || e.metaKey)){ e.preventDefault(); submitBtn.click();}
  }
});

/* Ensure submit button state updates if user navigates */
qMeta.addEventListener('DOMSubtreeModified', updateMeta);

/* End of script */
