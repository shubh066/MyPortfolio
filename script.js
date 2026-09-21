'use strict';

const projectDetails = {
  invoice: { title: 'France E-Invoicing & E-Reporting', meta: 'Accenture · EC&V · Integration Team · 2026–Present', context: 'Invoice lifecycles depend on correctly mapped data and reliable communication between SAP and compliance platforms. My work focuses on validating those interfaces and investigating failures.', contributions: ['Validate internal and external REST APIs for AR, AP, e-reporting, payment, and invoice lifecycle flows.', 'Validate 200+ XML documents monthly against XSD schemas, namespaces, and business rules.', 'Review UBL, UN/CEFACT CII, and Factur-X mappings, including cardinality and nested structures.', 'Investigate authentication, token, HTTP 401/403/500, and request/response failures; record test evidence and functional requirements.'], takeaway: 'Attention to both the technical contract and the business meaning of a message.', tags: ['Bruno', 'Postman', 'Swagger', 'XML / XSD', 'SAP'] },
  car: { title: 'AI Car Recommendation Assistant', meta: 'Personal project · Prototype in development', context: 'Indian car buyers face scattered specifications, variant differences, and conflicting review evidence. I am building a prototype that organizes this information for retrieval-augmented generation (RAG).', contributions: ['Prepare a structured knowledge base of specifications, prices, safety information, and variant-specific reviews.', 'Curate source-linked records and check data quality and conflicting specifications.', 'Prepare evaluation questions with expected answers and supporting evidence.'], takeaway: 'The current focus is data preparation and evaluation design. This is a developing prototype, with no public demo or performance claims yet.', tags: ['RAG', 'Source-linked data', 'Generative AI', 'Evaluation'] },
  reliability: { title: 'Enterprise TPM & Production Reliability', meta: 'Accenture · MARS and P&G engagements · Dec 2022–Mar 2026', context: 'Trade Promotion Management connects calculations, enterprise data, and production workflows. I progressed from operations into data, integration, and business-rule work.', contributions: ['Investigated 15+ production incidents monthly across Accenture engagements, coordinating service restoration within SLA commitments.', 'Owned NightChain activities during outages, coordinating with boundary-system teams and validating downstream completion.', 'Implemented business-rule and calculation enhancements; contributed to StageDB and SSRS/RDL fixes.', 'Investigated SAP integration issues, validated VIPO calculations, and supported shipment validation and data loads.', 'Supported disaster recovery drills and deployments, and shared knowledge with junior engineers.'], takeaway: 'Follow an issue across system boundaries, communicate clearly, and validate recovery end to end.', tags: ['SQL Server', 'TPM', 'Root cause analysis', 'NightChain', 'StageDB'] },
  network: { title: 'Network Project · Samsung India R&D', meta: 'Project Team Lead · Jun–Dec 2021', context: 'A project exploring APIs, network protocols, and practical user scenarios as part of project work for Samsung India.', contributions: ['Developed APIs and researched network protocols.', 'Defined network concepts and documented user scenarios.', 'Documented technical deliverables while serving as project team lead.'], takeaway: 'An early foundation in structured technical investigation, API development, and team leadership.', tags: ['API development', 'Network protocols', 'Documentation', 'Team leadership'] }
};

const projectDialog = document.querySelector('#projectDialog');
const gameDialog = document.querySelector('#gameDialog');
function openDialog(dialog) { dialog.showModal(); document.body.classList.add('modal-open-custom'); }
function closeDialog(dialog) { dialog.close(); }
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close-dialog').addEventListener('click', () => closeDialog(dialog));
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open-custom'));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDialog(dialog); } });
});
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projectDetails[button.dataset.project];
  document.querySelector('#projectContent').innerHTML = `<h2 id="projectTitle">${p.title}</h2><p class="role">${p.meta}</p><h3>The context</h3><p>${p.context}</p><h3>My contribution</h3><ul>${p.contributions.map(item => `<li>${item}</li>`).join('')}</ul><h3>The perspective</h3><p>${p.takeaway}</p><div class="tags">${p.tags.map(tag => `<span>${tag}</span>`).join('')}</div>`;
  openDialog(projectDialog);
}));
document.querySelector('#discussProject').addEventListener('click', () => closeDialog(projectDialog));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  let count = 0;
  document.querySelectorAll('.project').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  announce(`${count} projects shown`);
}));

let toastTimeout;
function announce(message) { const box = document.querySelector('#feedback'); box.textContent = message; box.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => box.classList.remove('show'), 3500); }
document.querySelector('#copyEmail').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('shubhankar125521@gmail.com'); announce('Email address copied.'); }
  catch { announce('Please copy: shubhankar125521@gmail.com'); }
});
document.querySelector('#year').textContent = new Date().getFullYear();

const navCollapse = document.querySelector('#mainNav');
navCollapse.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  if (!window.bootstrap) return;
  const menu = bootstrap.Collapse.getOrCreateInstance(navCollapse, { toggle: false });
  if (navCollapse.classList.contains('collapsing')) navCollapse.addEventListener('shown.bs.collapse', () => menu.hide(), { once: true });
  else menu.hide();
}));
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .08 });
  document.querySelectorAll('.experience-item, .project-card, .skill-row, .strength-grid').forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) document.querySelectorAll('.nav-link').forEach(link => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }), { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(el => navObserver.observe(el));
}

const scenarios = [
  { title: 'The expired invitation.', code: 'GET /api/invoices\nHTTP 401 Unauthorized\ntoken.expiry < current_time', question: 'The access token has expired. What should you check next?', options: ['Change the invoice amount and retry.', 'Obtain a valid token through the approved authentication flow.', 'Disable authentication on the endpoint.'], correct: 1, explanation: 'Start with the authentication evidence. Obtain a valid token, then retry the authorized request. Changing invoice data will not fix an expired credential.' },
  { title: 'Right data. Wrong shape.', code: 'POST /api/invoices\nXML validation failed\nExpected: {urn:invoice:v2}Invoice\nReceived: {urn:invoice:v1}Invoice', question: 'The validator reports a namespace mismatch. Where do you start?', options: ['Check the expected schema version and correct the XML namespace.', 'Retry the same request until it passes.', 'Delete the invoice identifier.'], correct: 0, explanation: 'Compare the document with the required XSD and integration contract. A namespace or schema-version mismatch can invalidate a document even when its values look sensible.' },
  { title: 'Find the missing link.', code: 'NightChain: completed\nStageDB: records loaded\nDownstream: expected records missing', question: 'A batch reports completion, but downstream records are missing. What is the most useful next step?', options: ['Declare recovery complete because the batch is green.', 'Delete the staged records and start over.', 'Trace handoff logs and record counts with the downstream team.'], correct: 2, explanation: 'A completed batch is one signal. Trace the handoff, compare counts and identifiers, and coordinate with the downstream team before concluding that the whole workflow recovered.' }
];
let questionIndex = 0, score = 0, answered = false;
const gameContent = document.querySelector('#gameContent');
function renderQuestion() {
  answered = false;
  const q = scenarios[questionIndex];
  gameContent.innerHTML = `<div class="game-progress">SCENARIO ${questionIndex + 1} / ${scenarios.length}</div><h2 id="gameTitle">${q.title}</h2><pre class="game-code"></pre><p>${q.question}</p><div class="game-options">${q.options.map((option, i) => `<button class="game-option" data-answer="${i}">${String.fromCharCode(65 + i)}. ${option}</button>`).join('')}</div><div class="game-answer" role="status" aria-live="polite"></div><button id="nextQuestion" class="button button-dark" hidden>${questionIndex === scenarios.length - 1 ? 'See your result' : 'Next scenario'} →</button>`;
  gameContent.querySelector('.game-code').textContent = q.code;
  gameContent.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    if (answered) return;
    answered = true;
    const correct = Number(button.dataset.answer) === q.correct;
    if (correct) score++;
    gameContent.querySelectorAll('[data-answer]').forEach(b => { b.disabled = true; if (Number(b.dataset.answer) === q.correct) b.classList.add('correct'); });
    if (!correct) button.classList.add('wrong');
    gameContent.querySelector('.game-answer').textContent = `${correct ? 'Exactly.' : 'A useful clue to follow:'} ${q.explanation}`;
    const next = gameContent.querySelector('#nextQuestion'); next.hidden = false; next.focus();
  }));
  gameContent.querySelector('#nextQuestion').addEventListener('click', () => { questionIndex++; if (questionIndex < scenarios.length) { renderQuestion(); gameContent.querySelector('[data-answer]').focus(); } else renderScore(); });
}
function renderScore() {
  gameContent.innerHTML = `<p class="game-progress">CHALLENGE COMPLETE</p><h2 id="gameTitle">${score === 3 ? 'You followed the evidence.' : 'Every clue is a starting point.'}</h2><div class="score">${score}<span class="serif"> / 3</span></div><p>Good integration work starts with the evidence: validate the contract, trace the flow, and check the outcome.</p><p>These simplified scenarios are inspired by the kind of engineering work I do.</p><button class="button button-dark" id="replayGame">Play again ↻</button>`;
  const replay = gameContent.querySelector('#replayGame'); replay.addEventListener('click', startGame); replay.focus();
}
function startGame() { questionIndex = 0; score = 0; renderQuestion(); if (!gameDialog.open) openDialog(gameDialog); else gameContent.querySelector('[data-answer]').focus(); }
document.querySelector('#startGame').addEventListener('click', startGame);
