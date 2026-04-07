/* ═══════════════════════════════════════════════════════
   App Comune di Calcinato — JS
   ═══════════════════════════════════════════════════════ */

/* ─── DATI NEWS ──────────────────────────────────────── */
const IMG_BASE='https://calcinato-api.municipiumapp.it/s3/1072/media/';
const NEWS=[
  {id:0,tipo:"Avviso",titolo:"Risultati del referendum popolare confermativo a Calcinato",data:"24 marzo 2026",img:null,snippet:"S\u00ec 61,29% \u2014 No 38,71%. Pubblicati i risultati ufficiali del referendum popolare.",testo:"Si sono concluse le operazioni di scrutinio del referendum popolare confermativo. Il risultato finale registra il 61,29% di voti favorevoli (S\u00ec) e il 38,71% di voti contrari (No). L\u2019Amministrazione Comunale ringrazia tutti i cittadini che hanno partecipato alla consultazione democratica.",tags:["Elezioni","Democrazia"]},
  {id:1,tipo:"Notizia",titolo:"Consulenza Notarile Aprile 2026 \u2014 Iniziativa gratuita",data:"24 marzo 2026",img:IMG_BASE+'notarile.jpg',snippet:"Servizio di consulenza notarile gratuita per tutti i residenti.",testo:"Il Comune di Calcinato mette a disposizione dei cittadini un servizio di consulenza notarile gratuita per il mese di aprile 2026. Il servizio \u00e8 rivolto a tutti i residenti che necessitano di informazioni su atti notarili, successioni, donazioni e altri aspetti giuridici. Per prenotare un appuntamento contattare l\u2019ufficio Servizi Sociali al numero 030/99891.",tags:["Servizi sociali","Assistenza"]},
  {id:2,tipo:"Avviso",titolo:"Bando di servizio civile universale anno 2026",data:"18 marzo 2026",img:IMG_BASE+'servizio_civile2026_1.jpg',snippet:"Scadenza bando: 8 aprile alle ore 14:00.",testo:"\u00c8 aperto il bando per la selezione di operatori volontari da impiegare in progetti di Servizio Civile Universale per l\u2019anno 2026. I giovani tra i 18 e i 28 anni possono presentare domanda esclusivamente attraverso la piattaforma DOL (Domanda On Line) accessibile dal sito del Dipartimento per le Politiche Giovanili. Scadenza: 8 aprile 2026 ore 14:00.",tags:["Patrimonio culturale","Giovani"]},
  {id:3,tipo:"Avviso",titolo:"Servizio mensa scolastica 2026/2027 \u2014 riapertura iscrizioni",data:"13 marzo 2026",img:null,snippet:"Iscrizioni aperte fino al 18 aprile 2026.",testo:"\u00c8 possibile inoltrare domanda di iscrizione al servizio mensa scolastica per l\u2019anno scolastico 2026/2027 fino al 18 aprile. Le domande devono essere presentate esclusivamente online tramite il portale dei servizi scolastici del Comune di Calcinato. Per informazioni rivolgersi all\u2019Ufficio Pubblica Istruzione.",tags:["Istruzione","Scuola"]},
  {id:4,tipo:"Avviso",titolo:"Dote Scuola \u2014 Materiale Didattico a.s. 2026/27",data:"13 marzo 2026",img:null,snippet:"Contributo regionale per le spese scolastiche delle famiglie.",testo:"Il bando di Regione Lombardia mette a disposizione un contributo per sostenere le spese delle famiglie nel compimento del percorso scolastico nei sistemi di Istruzione e di Istruzione e Formazione Professionale (IeFP). Le domande devono essere presentate tramite il portale di Regione Lombardia.",tags:["Istruzione","Contributi regionali"]},
  {id:5,tipo:"Notizia",titolo:"Non solo compiti \u2014 proposta pomeridiana scuola primaria",data:"18 marzo 2026",img:IMG_BASE+'front.jpg',snippet:"Attivit\u00e0 pomeridiane per bambine e bambini della Scuola Primaria.",testo:"Il Comune di Calcinato propone un\u2019attivit\u00e0 pomeridiana per bambine e bambini della Scuola Primaria. Il progetto \u2018Non solo compiti\u2019 offre supporto scolastico e attivit\u00e0 ludico-educative in un ambiente sicuro e stimolante, dal luned\u00ec al venerd\u00ec. Le iscrizioni sono aperte fino ad esaurimento posti.",tags:["Istruzione","Bambini"]},
  {id:6,tipo:"Comunicato",titolo:"Rinnovo raccolta porta a porta frazione vegetale",data:"19 febbraio 2026",img:IMG_BASE+'bidone-vegetale.jpg',snippet:"Nuova procedura per il rinnovo dell'iscrizione al servizio.",testo:"\u00c8 possibile rinnovare l\u2019iscrizione al servizio di raccolta porta a porta della frazione vegetale con una nuova procedura semplificata. I cittadini interessati possono rivolgersi all\u2019Ufficio Ambiente del Comune di Calcinato per maggiori informazioni.",tags:["Ambiente","Raccolta"]},
];

/* ─── DATI ATTIVITA ──────────────────────────────────── */
const ATTIVITA=[
  {nome:"Trattoria da Marco",cat:"ristorazione",catLabel:"Ristorazione",indirizzo:"Via Roma 14",tel:"030 9988123",plus:true},
  {nome:"Farmacia Centrale",cat:"salute",catLabel:"Salute",indirizzo:"P.za Aldo Moro 3",tel:"030 9988001",plus:false},
  {nome:"Palestra FitLife",cat:"sport",catLabel:"Sport e benessere",indirizzo:"Via Industriale 7",tel:"030 9988055",plus:true},
  {nome:"Ferramenta Rossi",cat:"commercio",catLabel:"Commercio",indirizzo:"Via Brescia 22",tel:"030 9988042",plus:false},
  {nome:"Ristorante Al Lago",cat:"ristorazione",catLabel:"Ristorazione",indirizzo:"Via Lago 5",tel:"030 9988099",plus:true},
  {nome:"Studio Legale Bianchi",cat:"servizi",catLabel:"Servizi professionali",indirizzo:"Corso Italia 5",tel:"030 9988077",plus:false},
  {nome:"Centro Estetico Sole",cat:"salute",catLabel:"Benessere",indirizzo:"Via Milano 18",tel:"030 9988033",plus:true},
  {nome:"Supermercato Coop",cat:"commercio",catLabel:"Commercio",indirizzo:"Via Industriale 3",tel:"030 9988011",plus:false},
  {nome:"Bar Centrale",cat:"ristorazione",catLabel:"Bar e caff\u00e8",indirizzo:"P.za Aldo Moro 7",tel:"030 9988022",plus:false},
  {nome:"Autofficina Galli",cat:"servizi",catLabel:"Servizi auto",indirizzo:"Via Mantova 12",tel:"030 9988088",plus:false},
];

/* ─── DATI CONTATTI ──────────────────────────────────── */
const CONTATTI=[
  {nome:"Municipio \u2014 Centralino",tel:"030 9989811",email:"protocollo@comune.calcinato.bs.it",indirizzo:"Piazza Municipio, 1 \u2014 25011 Calcinato (BS)"},
  {nome:"Ufficio Anagrafe",tel:"030 9989830",email:"anagrafe@comune.calcinato.bs.it"},
  {nome:"Ufficio Tributi",tel:"030 9989840",email:"tributi@comune.calcinato.bs.it"},
  {nome:"Ufficio Tecnico \u2014 Urbanistica",tel:"030 9989850",email:"urbanistica@comune.calcinato.bs.it"},
  {nome:"Ufficio Servizi Sociali",tel:"030 9989860",email:"servizisociali@comune.calcinato.bs.it"},
  {nome:"Polizia Locale",tel:"030 9989870",email:"polizialocale@comune.calcinato.bs.it"},
  {nome:"Ufficio Ragioneria",tel:"030 9989820",email:"ragioneria@comune.calcinato.bs.it"},
  {nome:"URP \u2014 Relazioni con il Pubblico",tel:"030 9989811",email:"urp@comune.calcinato.bs.it"},
];

/* ─── STATO ───────────────────────────────────────── */
let currentScreen='home';
let prevScreen='home';
let currentNewsFilter='tutte';
let currentAttCat='tutte';

/* ─── IMPOSTAZIONI (localStorage) ────────────────── */
const SETT_KEY='calcinato-settings';
const SETT_DEFAULTS={theme:'chiaro',fontsize:'normale',adhd:'off',contrast:'off',dyslexia:'off'};

function loadSettings(){
  let s=SETT_DEFAULTS;
  try{ const raw=localStorage.getItem(SETT_KEY); if(raw) s={...SETT_DEFAULTS,...JSON.parse(raw)}; }catch(e){}
  const app=document.getElementById('app');
  app.dataset.theme=s.theme;
  app.dataset.fontsize=s.fontsize;
  app.dataset.adhd=s.adhd;
  app.dataset.contrast=s.contrast;
  app.dataset.dyslexia=s.dyslexia;
  updateThemeColor(s.theme);
  return s;
}

function saveSettings(){
  const app=document.getElementById('app');
  const s={theme:app.dataset.theme,fontsize:app.dataset.fontsize,adhd:app.dataset.adhd,contrast:app.dataset.contrast,dyslexia:app.dataset.dyslexia};
  try{ localStorage.setItem(SETT_KEY,JSON.stringify(s)); }catch(e){}
}

function updateThemeColor(theme){
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta) meta.content=theme==='scuro'?'#1A1A2E':'#0055A5';
}

function updateSettingsUI(){
  const app=document.getElementById('app');
  // Theme segments
  document.querySelectorAll('#seg-theme .sett-seg').forEach(b=>{
    b.classList.toggle('active',b.dataset.val===app.dataset.theme);
  });
  // Font size segments
  document.querySelectorAll('#seg-fontsize .sett-seg').forEach(b=>{
    b.classList.toggle('active',b.dataset.val===app.dataset.fontsize);
  });
  // Toggles
  ['adhd','contrast','dyslexia'].forEach(key=>{
    const el=document.getElementById('tog-'+key);
    if(el) el.classList.toggle('on',app.dataset[key]==='on');
  });
}

function setTheme(val){
  document.getElementById('app').dataset.theme=val;
  updateThemeColor(val);
  saveSettings();
  updateSettingsUI();
}

function setFontSize(val){
  document.getElementById('app').dataset.fontsize=val;
  saveSettings();
  updateSettingsUI();
}

function toggleSetting(key){
  const app=document.getElementById('app');
  app.dataset[key]=app.dataset[key]==='on'?'off':'on';
  saveSettings();
  updateSettingsUI();
}

/* ═══════════════════════════════════════════════════════
   PLUS — Autenticazione e Sessione
   ═══════════════════════════════════════════════════════ */
const PLUS_SESSION_KEY='calcinato-plus-session';
const PLUS_REQUESTS_KEY='calcinato-plus-requests';
const PLUS_DATA_KEY='calcinato-plus-data';
let plusUser=null;

// Demo credentials
const DEMO_USERS=[
  {email:'demo@plus.it',password:'demo123',attivitaIdx:0,nome:'Marco Bianchi'}, // Trattoria da Marco
  {email:'admin@calcinato.app',password:'admin2026',attivitaIdx:0,nome:'Admin Calcinato',isAdmin:true}, // Admin — gestisce tutte
];

// Demo Plus extended data
const PLUS_EXTENDED_DEFAULTS={
  0:{descrizione:'Trattoria a conduzione familiare dal 1985, specializzata in cucina bresciana e piatti di pesce. Ampio parcheggio e sala per eventi fino a 80 persone.',orari:{Lun:'Chiuso',Mar:'12:00-14:30 / 19:00-22:30',Mer:'12:00-14:30 / 19:00-22:30',Gio:'12:00-14:30 / 19:00-22:30',Ven:'12:00-14:30 / 19:00-23:00',Sab:'12:00-14:30 / 19:00-23:00',Dom:'12:00-15:00'},servizi:['Parcheggio','WiFi gratuito','Sala eventi','Menu bambini','Senza glutine'],email:'info@trattoriadamarco.it',sito:'https://www.trattoriadamarco.it'},
  2:{descrizione:'Centro fitness completo con sala pesi, corsi di gruppo, piscina coperta e area wellness. Personal trainer qualificati.',orari:{Lun:'06:30-22:00',Mar:'06:30-22:00',Mer:'06:30-22:00',Gio:'06:30-22:00',Ven:'06:30-21:00',Sab:'08:00-18:00',Dom:'09:00-13:00'},servizi:['Sala pesi','Piscina','Corsi di gruppo','Personal trainer','Sauna'],email:'info@fitlife.it',sito:'https://www.fitlife.it'},
  4:{descrizione:'Ristorante con vista lago, cucina tradizionale bresciana e specialit\u00e0 di pesce di lago. Terrazza estiva panoramica.',orari:{Lun:'Chiuso',Mar:'12:00-14:30 / 19:00-22:30',Mer:'12:00-14:30 / 19:00-22:30',Gio:'12:00-14:30 / 19:00-22:30',Ven:'12:00-14:30 / 19:00-23:00',Sab:'12:00-14:30 / 19:00-23:00',Dom:'12:00-15:00'},servizi:['Terrazza panoramica','Parcheggio','Pesce di lago','Dehors estivo'],email:'info@allagocalcinato.it',sito:''},
  6:{descrizione:'Centro estetico completo: trattamenti viso e corpo, massaggi, epilazione laser, manicure e pedicure. Prodotti biologici certificati.',orari:{Lun:'09:00-19:00',Mar:'09:00-19:00',Mer:'09:00-19:00',Gio:'09:00-20:00',Ven:'09:00-19:00',Sab:'09:00-17:00',Dom:'Chiuso'},servizi:['Trattamenti viso','Massaggi','Epilazione laser','Manicure','Prodotti bio'],email:'info@centrosole.it',sito:''},
};

function loadPlusSession(){
  try{
    const raw=localStorage.getItem(PLUS_SESSION_KEY);
    if(raw) plusUser=JSON.parse(raw);
  }catch(e){}
  updateUserIcon();
}

function savePlusSession(){
  if(plusUser) localStorage.setItem(PLUS_SESSION_KEY,JSON.stringify(plusUser));
  else localStorage.removeItem(PLUS_SESSION_KEY);
  updateUserIcon();
}

function logoutPlus(){
  plusUser=null;
  savePlusSession();
  goScreen('home');
}

function updateUserIcon(){
  const svg=document.getElementById('topbar-user-svg');
  if(!svg) return;
  if(plusUser){
    // Dashboard icon (grid)
    svg.innerHTML='<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="12" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="12" width="7" height="7" rx="1.5"/><rect x="12" y="12" width="7" height="7" rx="1.5"/>';
  } else {
    // User icon
    svg.innerHTML='<path d="M18 19v-1.5a3.5 3.5 0 00-3.5-3.5h-7A3.5 3.5 0 004 17.5V19"/><circle cx="11" cy="8" r="3.5"/>';
  }
}

function onUserIconClick(){
  if(plusUser) goScreen('dashboard');
  else goScreen('login-plus');
}

function getPlusData(idx){
  // Check localStorage first (user edits), then defaults
  try{
    const raw=localStorage.getItem(PLUS_DATA_KEY);
    if(raw){
      const all=JSON.parse(raw);
      if(all[idx]) return all[idx];
    }
  }catch(e){}
  return PLUS_EXTENDED_DEFAULTS[idx]||null;
}

function savePlusData(idx,data){
  let all={};
  try{ const raw=localStorage.getItem(PLUS_DATA_KEY); if(raw) all=JSON.parse(raw); }catch(e){}
  all[idx]=data;
  localStorage.setItem(PLUS_DATA_KEY,JSON.stringify(all));
}

/* ─── LOGIN ──────────────────────────────────────── */
function submitLogin(){
  const email=document.getElementById('login-email').value.trim();
  const pass=document.getElementById('login-password').value;
  const errEl=document.getElementById('login-error');

  const allUsers=[...DEMO_USERS,...getPlusUsers()];
  const user=allUsers.find(u=>u.email===email&&u.password===pass);
  if(!user){
    errEl.classList.add('visible');
    return;
  }
  errEl.classList.remove('visible');
  plusUser={email:user.email,attivitaIdx:user.attivitaIdx,nome:user.nome,isAdmin:!!user.isAdmin};
  savePlusSession();
  goScreen('dashboard');
}

/* ─── RICHIESTA PLUS ─────────────────────────────── */
function submitRichiesta(){
  const nome=document.getElementById('req-nome').value.trim();
  const attivita=document.getElementById('req-attivita').value.trim();
  const tel=document.getElementById('req-tel').value.trim();
  const email=document.getElementById('req-email').value.trim();
  const note=document.getElementById('req-note').value.trim();

  if(!nome||!attivita||!tel){
    alert('Compila i campi obbligatori: Nome, Attivit\u00e0 e Telefono');
    return;
  }

  // Save to localStorage (demo) — in prod: Supabase INSERT
  let requests=[];
  try{ const raw=localStorage.getItem(PLUS_REQUESTS_KEY); if(raw) requests=JSON.parse(raw); }catch(e){}
  requests.push({nome,attivita,tel,email,note,data:new Date().toISOString()});
  localStorage.setItem(PLUS_REQUESTS_KEY,JSON.stringify(requests));

  // Show success
  document.getElementById('richiesta-content').innerHTML=`
    <div class="success-msg">
      <div class="success-ico">\u2705</div>
      <div class="success-title">Richiesta inviata!</div>
      <div class="success-text">Grazie <strong>${nome}</strong>. Il nostro team ti ricontatter\u00e0 al numero <strong>${tel}</strong> per attivare la scheda Plus di <strong>${attivita}</strong>.</div>
    </div>`;
}

/* ─── DASHBOARD ──────────────────────────────────── */
function renderDashboard(){
  const el=document.getElementById('dashboard-content');
  if(!el||!plusUser) return;

  const att=ATTIVITA[plusUser.attivitaIdx];
  const ext=getPlusData(plusUser.attivitaIdx)||{descrizione:'',orari:{Lun:'',Mar:'',Mer:'',Gio:'',Ven:'',Sab:'',Dom:''},servizi:[],email:'',sito:''};

  const giorniOrari=['Lun','Mar','Mer','Gio','Ven','Sab','Dom'];
  const orariRows=giorniOrari.map(g=>`
    <div class="orari-row">
      <span class="orari-day">${g}</span>
      <input class="orari-input" data-giorno="${g}" value="${ext.orari[g]||''}" placeholder="es. 09:00-18:00">
    </div>`).join('');

  const serviziTags=(ext.servizi||[]).map((s,i)=>`
    <span class="tag-item">${s}<span class="tag-remove" onclick="removeServizio(${i})">&times;</span></span>`).join('');

  // Admin: selector to switch between Plus activities
  const plusActivities=ATTIVITA.map((a,i)=>({idx:i,...a})).filter(a=>a.plus);
  const adminSelector=plusUser.isAdmin?`
    <div class="form-group" style="margin-top:8px">
      <label class="form-label">Gestisci attivit\u00e0</label>
      <select class="form-input" onchange="switchAttivita(this.value)" style="cursor:pointer">
        ${plusActivities.map(a=>`<option value="${a.idx}" ${a.idx===plusUser.attivitaIdx?'selected':''}>${a.nome}</option>`).join('')}
      </select>
    </div>`:'';

  el.innerHTML=`
    <div class="dash-welcome">
      <div class="dash-welcome-name">Ciao, ${plusUser.nome}</div>
      <div class="dash-welcome-sub">Gestisci la scheda Plus di <strong>${att.nome}</strong></div>
      ${adminSelector}
    </div>

    <div class="dash-card">
      <div class="dash-card-title">Informazioni base</div>
      <div class="form-group">
        <label class="form-label">Nome attivit\u00e0</label>
        <input class="form-input" id="dash-nome" value="${att.nome}">
      </div>
      <div class="form-group">
        <label class="form-label">Indirizzo</label>
        <input class="form-input" id="dash-indirizzo" value="${att.indirizzo}">
      </div>
      <div class="form-group">
        <label class="form-label">Telefono</label>
        <input class="form-input" id="dash-tel" value="${att.tel}">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input class="form-input" id="dash-email" value="${ext.email||''}">
      </div>
      <div class="form-group" style="margin-bottom:0">
        <label class="form-label">Sito web</label>
        <input class="form-input" id="dash-sito" value="${ext.sito||''}">
      </div>
    </div>

    <div class="dash-card">
      <div class="dash-card-title">Descrizione</div>
      <textarea class="form-textarea" id="dash-desc" rows="4">${ext.descrizione||''}</textarea>
    </div>

    <div class="dash-card">
      <div class="dash-card-title">Orari di apertura</div>
      <div class="orari-grid">${orariRows}</div>
    </div>

    <div class="dash-card">
      <div class="dash-card-title">Servizi</div>
      <div class="tag-list" id="dash-servizi-tags">${serviziTags}</div>
      <div class="tag-add-row">
        <input class="tag-add-input" id="dash-new-servizio" placeholder="Aggiungi servizio...">
        <button class="tag-add-btn" onclick="addServizio()">+</button>
      </div>
    </div>

    <button class="btn-primary" onclick="saveDashboard()" style="margin-top:4px">Salva modifiche</button>

    ${plusUser.isAdmin?renderAdminSections():''}

    <button class="btn-danger" onclick="logoutPlus()">Esci dall'area Plus</button>
    <div style="height:16px"></div>
  `;
}

/* ─── ADMIN FUNCTIONS ─────────────────────────────── */
const PLUS_USERS_KEY='calcinato-plus-users';

function getRequests(){
  try{ const raw=localStorage.getItem(PLUS_REQUESTS_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return [];
}
function saveRequests(reqs){
  localStorage.setItem(PLUS_REQUESTS_KEY,JSON.stringify(reqs));
}

function getPlusUsers(){
  // Merge hardcoded DEMO_USERS with localStorage custom users
  let custom=[];
  try{ const raw=localStorage.getItem(PLUS_USERS_KEY); if(raw) custom=JSON.parse(raw); }catch(e){}
  return custom;
}
function savePlusUsers(users){
  localStorage.setItem(PLUS_USERS_KEY,JSON.stringify(users));
}

function renderAdminSections(){
  const requests=getRequests();
  const customUsers=getPlusUsers();

  // Requests section
  const reqCards=requests.length===0
    ?'<div style="text-align:center;padding:16px;color:#bbb;font-size:12px">Nessuna richiesta ricevuta</div>'
    :requests.map((r,i)=>{
      const statusClass={'nuova':'status-nuova','contattata':'status-contattata','pagata':'status-pagata','attivata':'status-attivata'}[r.stato||'nuova'];
      const statusLabel=(r.stato||'nuova').charAt(0).toUpperCase()+(r.stato||'nuova').slice(1);
      return `<div class="req-card">
        <div class="req-header">
          <div>
            <div class="req-nome">${r.nome}</div>
            <div class="req-attivita">${r.attivita}</div>
          </div>
          <span class="status-badge ${statusClass}">${statusLabel}</span>
        </div>
        <div class="req-meta">
          <div class="req-meta-item">
            <svg viewBox="0 0 12 12"><path d="M2.5 2h2l1 2.5-1.5 1a7 7 0 003 3l1-1.5 2.5 1V10a1 1 0 01-1 1C5 11 1 7 1 3a1 1 0 011-1z"/></svg>
            ${r.tel}
          </div>
          ${r.email?`<div class="req-meta-item">
            <svg viewBox="0 0 12 12"><rect x="1" y="3" width="10" height="6" rx="1"/><path d="M1 4l5 3 5-3"/></svg>
            ${r.email}
          </div>`:''}
          ${r.note?`<div class="req-meta-item" style="color:var(--gray-txt)">${r.note}</div>`:''}
        </div>
        <div class="req-actions">
          ${(r.stato||'nuova')!=='attivata'?`
            <button style="background:var(--amber-lt);color:#7D4200" onclick="updateReqStatus(${i},'contattata')">Contattata</button>
            <button style="background:var(--green-lt);color:#166534" onclick="updateReqStatus(${i},'pagata')">Pagata</button>
            <button style="background:var(--blu-lt);color:var(--blu)" onclick="updateReqStatus(${i},'attivata')">Attivata</button>
          `:'<button style="background:var(--gray-bg);color:#aaa" disabled>Completata</button>'}
        </div>
      </div>`;
    }).join('');

  // Users section
  const allPlusUsers=[...DEMO_USERS.filter(u=>!u.isAdmin),...customUsers];
  const userCards=allPlusUsers.map((u,i)=>{
    const att=ATTIVITA[u.attivitaIdx];
    const initials=(u.nome||u.email).substring(0,2).toUpperCase();
    const isCustom=i>=DEMO_USERS.filter(x=>!x.isAdmin).length;
    return `<div class="user-card">
      <div class="user-avatar">${initials}</div>
      <div class="user-info">
        <div class="user-name">${u.nome||'Utente'}</div>
        <div class="user-email">${u.email}</div>
        ${att?`<div class="user-att">${att.nome}</div>`:''}
      </div>
      ${isCustom?`<button class="user-delete" onclick="deleteCustomUser(${i-DEMO_USERS.filter(x=>!x.isAdmin).length})">
        <svg viewBox="0 0 14 14"><path d="M2 4h10M5 4V3a1 1 0 011-1h2a1 1 0 011 1v1M9 7v4M5 7v4M3 4l.5 8a1 1 0 001 1h5a1 1 0 001-1L11 4"/></svg>
      </button>`:''}
    </div>`;
  }).join('');

  // Attivita toggle
  const attToggles=ATTIVITA.map((a,i)=>`
    <div class="att-toggle-card">
      <div>
        <div class="att-toggle-name">${a.nome}</div>
        <div class="att-toggle-cat">${a.catLabel}</div>
      </div>
      <div class="sett-toggle ${a.plus?'on':''}" onclick="toggleAttPlus(${i})" style="flex-shrink:0"></div>
    </div>`).join('');

  return `
    <div class="admin-divider"></div>
    <div class="admin-section-title">Richieste Plus</div>
    <div class="admin-section-sub">Richieste ricevute dalle attivit\u00e0 locali</div>
    ${reqCards}

    <div class="admin-divider"></div>
    <div class="admin-section-title">Gestione Utenti</div>
    <div class="admin-section-sub">Utenti con accesso alla dashboard Plus</div>
    ${userCards}

    <div class="dash-card" style="margin-top:10px">
      <div class="dash-card-title">Crea nuovo utente</div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input class="form-input" id="new-user-email" placeholder="email@attivita.it" type="email">
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input class="form-input" id="new-user-pass" placeholder="Minimo 6 caratteri" type="text">
      </div>
      <div class="form-group">
        <label class="form-label">Nome referente</label>
        <input class="form-input" id="new-user-nome" placeholder="Mario Rossi">
      </div>
      <div class="form-group">
        <label class="form-label">Attivit\u00e0 associata</label>
        <select class="form-input" id="new-user-att" style="cursor:pointer">
          ${ATTIVITA.filter(a=>a.plus).map((a,i)=>`<option value="${ATTIVITA.indexOf(a)}">${a.nome}</option>`).join('')}
        </select>
      </div>
      <button class="btn-primary" onclick="createPlusUser()">Crea utente</button>
    </div>

    <div class="admin-divider"></div>
    <div class="admin-section-title">Stato Attivit\u00e0</div>
    <div class="admin-section-sub">Attiva o disattiva lo status Plus</div>
    ${attToggles}
  `;
}

function updateReqStatus(idx,status){
  const reqs=getRequests();
  if(reqs[idx]){ reqs[idx].stato=status; saveRequests(reqs); }
  renderDashboard();
  // Scroll to maintain position
  document.querySelector('#scr-dashboard .scroll').scrollTop=9999;
}

function createPlusUser(){
  const email=document.getElementById('new-user-email').value.trim();
  const pass=document.getElementById('new-user-pass').value.trim();
  const nome=document.getElementById('new-user-nome').value.trim();
  const attIdx=parseInt(document.getElementById('new-user-att').value);

  if(!email||!pass||pass.length<6){
    alert('Inserisci email e password (minimo 6 caratteri)');
    return;
  }

  // Check duplicate
  const existing=[...DEMO_USERS,...getPlusUsers()];
  if(existing.some(u=>u.email===email)){
    alert('Esiste gi\u00e0 un utente con questa email');
    return;
  }

  const users=getPlusUsers();
  users.push({email,password:pass,attivitaIdx:attIdx,nome:nome||email});
  savePlusUsers(users);

  // Also add to DEMO_USERS in memory so login works immediately
  DEMO_USERS.push({email,password:pass,attivitaIdx:attIdx,nome:nome||email});

  alert('Utente creato! Credenziali: '+email+' / '+pass);
  renderDashboard();
  document.querySelector('#scr-dashboard .scroll').scrollTop=9999;
}

function deleteCustomUser(customIdx){
  if(!confirm('Eliminare questo utente?')) return;
  const users=getPlusUsers();
  const removed=users.splice(customIdx,1)[0];
  savePlusUsers(users);

  // Remove from in-memory DEMO_USERS too
  const memIdx=DEMO_USERS.findIndex(u=>u.email===removed.email);
  if(memIdx>-1) DEMO_USERS.splice(memIdx,1);

  renderDashboard();
}

function toggleAttPlus(idx){
  ATTIVITA[idx].plus=!ATTIVITA[idx].plus;
  renderDashboard();
  document.querySelector('#scr-dashboard .scroll').scrollTop=9999;
}

function switchAttivita(idx){
  if(!plusUser||!plusUser.isAdmin) return;
  plusUser.attivitaIdx=parseInt(idx);
  savePlusSession();
  renderDashboard();
}

function getCurrentServizi(){
  const tags=document.querySelectorAll('#dash-servizi-tags .tag-item');
  return Array.from(tags).map(t=>t.textContent.replace('\u00d7','').trim());
}

function addServizio(){
  const input=document.getElementById('dash-new-servizio');
  const val=input.value.trim();
  if(!val) return;
  input.value='';
  // Re-render by saving temp and re-rendering
  const servizi=getCurrentServizi();
  servizi.push(val);
  updateServiziUI(servizi);
}

function removeServizio(idx){
  const servizi=getCurrentServizi();
  servizi.splice(idx,1);
  updateServiziUI(servizi);
}

function updateServiziUI(servizi){
  const container=document.getElementById('dash-servizi-tags');
  container.innerHTML=servizi.map((s,i)=>`
    <span class="tag-item">${s}<span class="tag-remove" onclick="removeServizio(${i})">&times;</span></span>`).join('');
}

function saveDashboard(){
  if(!plusUser) return;
  const idx=plusUser.attivitaIdx;

  // Update base ATTIVITA data (in-memory)
  ATTIVITA[idx].nome=document.getElementById('dash-nome').value.trim()||ATTIVITA[idx].nome;
  ATTIVITA[idx].indirizzo=document.getElementById('dash-indirizzo').value.trim()||ATTIVITA[idx].indirizzo;
  ATTIVITA[idx].tel=document.getElementById('dash-tel').value.trim()||ATTIVITA[idx].tel;

  // Collect orari
  const orari={};
  document.querySelectorAll('.orari-input').forEach(inp=>{
    orari[inp.dataset.giorno]=inp.value.trim();
  });

  // Save extended data
  const ext={
    descrizione:document.getElementById('dash-desc').value.trim(),
    orari,
    servizi:getCurrentServizi(),
    email:document.getElementById('dash-email').value.trim(),
    sito:document.getElementById('dash-sito').value.trim(),
  };
  savePlusData(idx,ext);

  alert('Modifiche salvate!');
}

/* ─── UTILS ───────────────────────────────────────── */
function pillClass(tipo){
  if(tipo==='Notizia') return 'pill-notizia';
  if(tipo==='Comunicato') return 'pill-comunicato';
  return 'pill-avviso';
}
function thumbColors(tipo){
  if(tipo==='Notizia') return {bg:'#DBEAFE',fg:'#2563EB'};
  if(tipo==='Comunicato') return {bg:'#DCFCE7',fg:'#16A34A'};
  return {bg:'#FEF3C7',fg:'#D97706'};
}
function thumbSVG(tipo){
  const c=thumbColors(tipo);
  return `<svg viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="48" rx="8" fill="${c.bg}"/><path d="M4 36l10-12 8 10 8-10 10 12H4z" fill="${c.fg}" opacity=".7"/></svg>`;
}

/* ─── RENDER HERO ─────────────────────────────────── */
function renderHero(){
  const n=NEWS[0];
  document.getElementById('home-hero').innerHTML=`
    <div class="hero-card" onclick="openArticle(0)">
      <div class="hero-img">
        <div class="hero-deco1"></div>
        <div class="hero-deco2"></div>
        <div class="hero-cat">${n.tipo}</div>
        <div class="hero-title">${n.titolo}</div>
        <div class="hero-date">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="9" rx="1.5" stroke="#99BBDD" stroke-width="1" fill="none"/><path d="M1 5h10M4 1v2M8 1v2" stroke="#99BBDD" stroke-width="1" stroke-linecap="round"/></svg>
          ${n.data}
        </div>
      </div>
      <div class="hero-body">
        <div class="hero-snippet">${n.snippet}</div>
        <div class="hero-cta">Leggi di pi\u00f9 <svg viewBox="0 0 12 12"><path d="M4 2l4 4-4 4"/></svg></div>
      </div>
    </div>`;
}

/* ─── RENDER NEWS ─────────────────────────────────── */
function newsThumb(n){
  if(n.img) return `<img src="${n.img}" alt="" onerror="this.parentNode.innerHTML='${thumbSVG(n.tipo).replace(/'/g,"\\'")}'">`;
  return thumbSVG(n.tipo);
}
function renderNewsCard(n){
  return `<div class="news-card" onclick="openArticle(${n.id})">
    <div class="news-thumb">${newsThumb(n)}</div>
    <div class="news-content">
      <div class="pill ${pillClass(n.tipo)}">${n.tipo}</div>
      <div class="news-title">${n.titolo}</div>
      <div class="news-date">${n.data}</div>
    </div>
  </div>`;
}

function renderNewsList(filter,containerId){
  const filtered=filter==='tutte'?NEWS:NEWS.filter(n=>{
    if(filter==='notizie') return n.tipo==='Notizia';
    if(filter==='avvisi') return n.tipo==='Avviso';
    if(filter==='comunicati') return n.tipo==='Comunicato';
    return true;
  });
  const el=document.getElementById(containerId);
  if(!el) return;
  if(filtered.length===0){
    el.innerHTML=`<div class="empty-state">
      <svg viewBox="0 0 48 48"><rect x="8" y="10" width="32" height="28" rx="4"/><path d="M16 20h16M16 28h10"/></svg>
      <p>Nessuna notizia in questa categoria</p>
    </div>`;
  } else {
    el.innerHTML=filtered.map(renderNewsCard).join('');
  }
}

/* ─── RENDER ATTIVITA ─────────────────────────────── */
function renderAttivita(cat){
  const filtered=cat==='tutte'?ATTIVITA:ATTIVITA.filter(a=>a.cat===cat);
  const el=document.getElementById('att-list');
  if(!el) return;
  if(filtered.length===0){
    el.innerHTML=`<div class="empty-state">
      <svg viewBox="0 0 48 48"><rect x="8" y="8" width="14" height="14" rx="3"/><rect x="26" y="8" width="14" height="14" rx="3"/><rect x="8" y="26" width="14" height="14" rx="3"/><rect x="26" y="26" width="14" height="14" rx="3"/></svg>
      <p>Nessuna attivit\u00e0 in questa categoria</p>
    </div>`;
    return;
  }
  const ctaHtml=(!plusUser)?`
    <div class="cta-plus" onclick="goScreen('richiesta-plus')">
      <div class="cta-plus-star">\u2B50</div>
      <div class="cta-plus-title">La tua attivit\u00e0 su Calcinato?</div>
      <div class="cta-plus-desc">Con la scheda Plus i cittadini vedranno orari, servizi, foto e contatti diretti della tua attivit\u00e0.</div>
      <div class="cta-plus-btn">Scopri Plus \u2192</div>
    </div>`:'';

  let cards=filtered.map((a,i)=>{
    const isOwn=plusUser&&ATTIVITA.indexOf(a)===plusUser.attivitaIdx;
    return `<div class="att-card" ${isOwn?'style="border-left:3px solid var(--blu)"':''}>
      <div class="att-header">
        <div>
          <div class="att-nome">${a.nome} ${isOwn?' <span style="font-size:10px;color:var(--blu);font-weight:400">(La tua)</span>':''}</div>
          <div class="att-cat">${a.catLabel}</div>
        </div>
        ${a.plus?'<div class="plus-badge">Plus</div>':''}
      </div>
      <div class="att-meta">
        <div class="att-meta-item">
          <svg viewBox="0 0 12 12"><path d="M6 1C4.34 1 3 2.34 3 4c0 2.25 3 6 3 6s3-3.75 3-6c0-1.66-1.34-3-3-3z"/><circle cx="6" cy="4" r="1" style="fill:#ccc;stroke:none"/></svg>
          ${a.indirizzo}
        </div>
        <div class="att-meta-item">
          <svg viewBox="0 0 12 12"><path d="M2.5 2h2l1 2.5-1.5 1a7 7 0 003 3l1-1.5 2.5 1V10a1 1 0 01-1 1C5 11 1 7 1 3a1 1 0 011-1z"/></svg>
          ${a.tel}
        </div>
      </div>
    </div>`;
  });

  // Insert CTA after 3rd card
  if(ctaHtml&&cards.length>3) cards.splice(3,0,ctaHtml);
  else if(ctaHtml) cards.push(ctaHtml);

  el.innerHTML=cards.join('');
}

/* ─── RENDER CONTATTI ─────────────────────────────── */
function renderContatti(){
  const el=document.getElementById('contatti-list');
  if(!el) return;
  el.innerHTML=`<div class="sec-lbl" style="margin-top:4px">Uffici Comunali</div>`+
    CONTATTI.map(c=>`
    <div class="cont-card">
      <div class="cont-nome">${c.nome}</div>
      <div class="cont-meta">
        ${c.tel?`<div class="cont-meta-item">
          <svg viewBox="0 0 14 14"><path d="M3 1.5h2.5l1.2 3-1.8 1.2a8.5 8.5 0 003.6 3.6l1.2-1.8 3 1.2V11.5a1.2 1.2 0 01-1.2 1.2C6 12.7 1.3 8 1.3 3.5A1.2 1.2 0 012.5 2.3" stroke-linecap="round"/></svg>
          <a href="tel:${c.tel.replace(/\s/g,'')}">${c.tel}</a>
        </div>`:''}
        ${c.email?`<div class="cont-meta-item">
          <svg viewBox="0 0 14 14"><rect x="1" y="3" width="12" height="8" rx="1.5"/><path d="M1 4.5l6 4 6-4"/></svg>
          <a href="mailto:${c.email}">${c.email}</a>
        </div>`:''}
        ${c.indirizzo?`<div class="cont-meta-item">
          <svg viewBox="0 0 14 14"><path d="M7 1.5C5.07 1.5 3.5 3.07 3.5 5c0 2.8 3.5 7 3.5 7s3.5-4.2 3.5-7c0-1.93-1.57-3.5-3.5-3.5z"/><circle cx="7" cy="5" r="1.2" style="fill:var(--blu);stroke:none"/></svg>
          ${c.indirizzo}
        </div>`:''}
      </div>
    </div>`).join('');
}

/* ─── RENDER INFO ─────────────────────────────────── */
function renderInfo(){
  const el=document.getElementById('info-content');
  if(!el) return;
  el.innerHTML=`
    <div class="info-header">
      <img class="info-logo" src="assets/stemma-calcinato.png" alt="Stemma Calcinato" style="object-fit:cover">
      <div class="info-name">Comune di Calcinato</div>
      <div class="info-prov">Provincia di Brescia \u2014 Lombardia</div>
    </div>

    <div class="info-row">
      <div class="info-ico"><svg viewBox="0 0 18 18"><path d="M9 2C6.79 2 5 3.79 5 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z"/><circle cx="9" cy="6" r="1.5" style="stroke-width:1"/></svg></div>
      <div><div class="info-label">Indirizzo</div><div class="info-value">Piazza Municipio, 1 \u2014 25011 Calcinato (BS)</div></div>
    </div>

    <div class="info-row">
      <div class="info-ico"><svg viewBox="0 0 18 18"><path d="M4 2.5h2.5l1.5 3.5-2 1.3a10 10 0 004.7 4.7l1.3-2 3.5 1.5V14a1.5 1.5 0 01-1.5 1.5C7 15.5 2.5 11 2.5 5A1.5 1.5 0 014 3.5" stroke-linecap="round"/></svg></div>
      <div><div class="info-label">Centralino</div><div class="info-value"><a href="tel:0309989811">030 9989811</a></div></div>
    </div>

    <div class="info-row">
      <div class="info-ico"><svg viewBox="0 0 18 18"><rect x="2" y="4" width="14" height="10" rx="2"/><path d="M2 6l7 5 7-5"/></svg></div>
      <div><div class="info-label">PEC</div><div class="info-value"><a href="mailto:protocollo@pec.comune.calcinato.bs.it">protocollo@pec.comune.calcinato.bs.it</a></div></div>
    </div>

    <div class="info-row">
      <div class="info-ico"><svg viewBox="0 0 18 18"><circle cx="9" cy="9" r="7"/><path d="M2 9h14M9 2a11 11 0 013 7 11 11 0 01-3 7 11 11 0 01-3-7 11 11 0 013-7z"/></svg></div>
      <div><div class="info-label">Sito web</div><div class="info-value"><a href="https://www.comune.calcinato.bs.it" target="_blank">www.comune.calcinato.bs.it</a></div></div>
    </div>

    <div class="info-row">
      <div class="info-ico"><svg viewBox="0 0 18 18"><rect x="2" y="3" width="14" height="13" rx="2"/><path d="M2 8h14M6 3v5M12 3v5"/></svg></div>
      <div><div class="info-label">Orari apertura</div><div class="info-value">Lun-Ven 8:30-12:30 / Mar-Gio 14:30-17:00</div></div>
    </div>

    <div class="info-row">
      <div class="info-ico"><svg viewBox="0 0 18 18"><path d="M13 15v-1.5a3 3 0 00-3-3H8a3 3 0 00-3 3V15"/><circle cx="9" cy="6.5" r="2.5"/></svg></div>
      <div><div class="info-label">Popolazione</div><div class="info-value">~ 13.000 abitanti</div></div>
    </div>

    <div class="info-row">
      <div class="info-ico"><svg viewBox="0 0 18 18"><path d="M11 2H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6z"/><path d="M11 2v4h4"/></svg></div>
      <div><div class="info-label">Codice Fiscale / P.IVA</div><div class="info-value">00550560176</div></div>
    </div>

    <div class="app-footer">
      App sviluppata da Premier Srls<br>
      per Comune di Calcinato (BS)<br>
      Versione 0.1.0-demo
    </div>`;
}

/* ─── NAVIGAZIONE ─────────────────────────────────── */
function goScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));

  const scr=document.getElementById('scr-'+id);
  const nb=document.getElementById('nb-'+id);
  if(scr) scr.classList.add('active');
  if(nb) nb.classList.add('active');

  prevScreen=currentScreen;
  currentScreen=id;

  // topbar
  const back=document.getElementById('topbar-back');
  const logo=document.getElementById('topbar-logo');
  const text=document.getElementById('topbar-text');
  const weather=document.getElementById('topbar-weather');
  const settBtn=document.getElementById('topbar-settings');
  back.classList.remove('visible');
  logo.style.display='block';
  text.style.display='block';
  if(weather) weather.style.display='flex';
  if(settBtn) settBtn.style.display='flex';

  const userBtn=document.getElementById('topbar-user');
  if(userBtn) userBtn.style.display='flex';

  // Back-mode screens
  const backScreens=['settings','login-plus','richiesta-plus','dashboard'];
  if(backScreens.includes(id)){
    back.classList.add('visible');
    logo.style.display='none';
    text.style.display='none';
    if(weather) weather.style.display='none';
    if(settBtn) settBtn.style.display='none';
    if(userBtn) userBtn.style.display='none';
    if(id==='settings') updateSettingsUI();
    if(id==='dashboard') renderDashboard();
  }

  // close weather panel if open
  document.getElementById('weather-panel').classList.remove('open');

  if(id==='news') renderNewsList(currentNewsFilter,'news-list');
  if(id==='attivita') renderAttivita(currentAttCat);
  if(id==='contatti') renderContatti();
  if(id==='info') renderInfo();
}

function openArticle(id){
  const n=NEWS.find(x=>x.id===id);
  if(!n) return;
  prevScreen=currentScreen;

  const artImg=document.getElementById('art-img');
  if(n.img){
    artImg.innerHTML=`<img src="${n.img}" alt="">`;
  } else {
    artImg.innerHTML=`<svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="8" fill="#D4E6F8"/><path d="M8 40l12-14 10 12 8-10 10 12H8z" fill="#0055A5"/></svg>`;
  }
  document.getElementById('art-pill').innerHTML=`<div class="pill ${pillClass(n.tipo)}">${n.tipo}</div>`;
  document.getElementById('art-title').textContent=n.titolo;
  document.getElementById('art-meta').innerHTML=`
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style="stroke:#bbb;stroke-width:1.1;fill:none">
      <rect x="1" y="2" width="11" height="10" rx="1.5"/>
      <path d="M1 6h11M4.5 1v2.5M8.5 1v2.5"/>
    </svg>
    ${n.data}`;
  document.getElementById('art-body').textContent=n.testo;
  document.getElementById('art-tags').innerHTML=n.tags.map(t=>`<div class="article-tag">${t}</div>`).join('');

  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));
  document.getElementById('scr-article').classList.add('active');
  currentScreen='article';

  // topbar back mode
  document.getElementById('topbar-back').classList.add('visible');
  document.getElementById('topbar-logo').style.display='none';
  document.getElementById('topbar-text').style.display='none';
  const w=document.getElementById('topbar-weather');
  if(w) w.style.display='none';
}

function goBack(){
  const backMap={'settings':'home','login-plus':'home','richiesta-plus':'attivita','dashboard':'home','article':'news'};
  const target=backMap[currentScreen];
  if(target) goScreen(prevScreen===currentScreen?target:prevScreen);
  else goScreen(prevScreen||'home');
}

function setNewsTab(el){
  currentNewsFilter=el.dataset.filter;
  document.querySelectorAll('#scr-news .tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderNewsList(currentNewsFilter,'news-list');
}

function setAttTab(el){
  currentAttCat=el.dataset.cat;
  document.querySelectorAll('#scr-attivita .tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderAttivita(currentAttCat);
}

/* ─── METEO (Open-Meteo API — gratuita, no API key) ── */
const WEATHER_ICONS={
  0:'\u2600\uFE0F',1:'\uD83C\uDF24\uFE0F',2:'\u26C5',3:'\u2601\uFE0F',
  45:'\uD83C\uDF2B\uFE0F',48:'\uD83C\uDF2B\uFE0F',
  51:'\uD83C\uDF26\uFE0F',53:'\uD83C\uDF26\uFE0F',55:'\uD83C\uDF27\uFE0F',
  56:'\uD83C\uDF27\uFE0F',57:'\uD83C\uDF27\uFE0F',
  61:'\uD83C\uDF27\uFE0F',63:'\uD83C\uDF27\uFE0F',65:'\uD83C\uDF27\uFE0F',
  66:'\uD83C\uDF27\uFE0F',67:'\uD83C\uDF27\uFE0F',
  71:'\uD83C\uDF28\uFE0F',73:'\uD83C\uDF28\uFE0F',75:'\uD83C\uDF28\uFE0F',
  77:'\uD83C\uDF28\uFE0F',
  80:'\uD83C\uDF26\uFE0F',81:'\uD83C\uDF27\uFE0F',82:'\uD83C\uDF27\uFE0F',
  85:'\uD83C\uDF28\uFE0F',86:'\uD83C\uDF28\uFE0F',
  95:'\u26C8\uFE0F',96:'\u26C8\uFE0F',99:'\u26C8\uFE0F'
};
const DAY_NAMES=['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];

function getWeatherIcon(code){ return WEATHER_ICONS[code]||'\u2601\uFE0F'; }

async function loadWeather(){
  try{
    const res=await fetch('https://api.open-meteo.com/v1/forecast?latitude=45.4558&longitude=10.4107&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe/Rome&forecast_days=7');
    const d=await res.json();

    // Today in header
    document.getElementById('weather-icon').textContent=getWeatherIcon(d.current.weather_code);
    document.getElementById('weather-temp').innerHTML=Math.round(d.current.temperature_2m)+'&deg;';

    // Weekly panel
    const weekEl=document.getElementById('weather-week');
    const today=new Date().toISOString().slice(0,10);
    weekEl.innerHTML=d.daily.time.map((date,i)=>{
      const dayDate=new Date(date);
      const isToday=date===today;
      const dayName=isToday?'Oggi':DAY_NAMES[dayDate.getDay()];
      return `<div class="weather-day ${isToday?'today':''}">
        <div class="weather-day-name">${dayName}</div>
        <div class="weather-day-icon">${getWeatherIcon(d.daily.weather_code[i])}</div>
        <div class="weather-day-temp">${Math.round(d.daily.temperature_2m_max[i])}&deg;</div>
        <div class="weather-day-min">${Math.round(d.daily.temperature_2m_min[i])}&deg;</div>
      </div>`;
    }).join('');
  }catch(e){
    console.warn('Meteo non disponibile:',e);
    document.getElementById('weather-icon').textContent='\u2601\uFE0F';
    document.getElementById('weather-temp').innerHTML='--&deg;';
  }
}

function toggleWeeklyWeather(){
  document.getElementById('weather-panel').classList.toggle('open');
}

/* ─── INIT ────────────────────────────────────────── */
loadSettings();
loadPlusSession();
// Load custom users into memory for login
getPlusUsers().forEach(u=>{ if(!DEMO_USERS.some(d=>d.email===u.email)) DEMO_USERS.push(u); });
renderHero();
renderNewsList('tutte','home-news-list');
renderNewsList('tutte','news-list');
renderAttivita('tutte');
loadWeather();
