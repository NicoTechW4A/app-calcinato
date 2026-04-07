/* ═══════════════════════════════════════════════════════
   App Comune di Calcinato — JS
   ═══════════════════════════════════════════════════════ */

/* ─── DATI NEWS ──────────────────────────────────────── */
const NEWS=[
  {id:0,tipo:"Avviso",titolo:"Risultati del referendum popolare confermativo a Calcinato",data:"24 marzo 2026",snippet:"Si\u0300 61,29% \u2014 No 38,71%. Pubblicati i risultati ufficiali del referendum popolare.",testo:"Si sono concluse le operazioni di scrutinio del referendum popolare confermativo. Il risultato finale registra il 61,29% di voti favorevoli (S\u00ec) e il 38,71% di voti contrari (No). L\u2019Amministrazione Comunale ringrazia tutti i cittadini che hanno partecipato alla consultazione democratica.",tags:["Elezioni","Democrazia"]},
  {id:1,tipo:"Notizia",titolo:"Consulenza Notarile Aprile 2026 \u2014 Iniziativa gratuita",data:"24 marzo 2026",snippet:"Servizio di consulenza notarile gratuita per tutti i residenti.",testo:"Il Comune di Calcinato mette a disposizione dei cittadini un servizio di consulenza notarile gratuita per il mese di aprile 2026. Il servizio \u00e8 rivolto a tutti i residenti che necessitano di informazioni su atti notarili, successioni, donazioni e altri aspetti giuridici. Per prenotare un appuntamento contattare l\u2019ufficio Servizi Sociali al numero 030/99891.",tags:["Servizi sociali","Assistenza"]},
  {id:2,tipo:"Avviso",titolo:"Bando di servizio civile universale anno 2026",data:"18 marzo 2026",snippet:"Scadenza bando: 8 aprile alle ore 14:00.",testo:"\u00c8 aperto il bando per la selezione di operatori volontari da impiegare in progetti di Servizio Civile Universale per l\u2019anno 2026. I giovani tra i 18 e i 28 anni possono presentare domanda esclusivamente attraverso la piattaforma DOL (Domanda On Line) accessibile dal sito del Dipartimento per le Politiche Giovanili. Scadenza: 8 aprile 2026 ore 14:00.",tags:["Patrimonio culturale","Giovani"]},
  {id:3,tipo:"Avviso",titolo:"Servizio mensa scolastica 2026/2027 \u2014 riapertura iscrizioni",data:"13 marzo 2026",snippet:"Iscrizioni aperte fino al 18 aprile 2026.",testo:"\u00c8 possibile inoltrare domanda di iscrizione al servizio mensa scolastica per l\u2019anno scolastico 2026/2027 fino al 18 aprile. Le domande devono essere presentate esclusivamente online tramite il portale dei servizi scolastici del Comune di Calcinato. Per informazioni rivolgersi all\u2019Ufficio Pubblica Istruzione.",tags:["Istruzione","Scuola"]},
  {id:4,tipo:"Avviso",titolo:"Dote Scuola \u2014 Materiale Didattico a.s. 2026/27",data:"13 marzo 2026",snippet:"Contributo regionale per le spese scolastiche delle famiglie.",testo:"Il bando di Regione Lombardia mette a disposizione un contributo per sostenere le spese delle famiglie nel compimento del percorso scolastico nei sistemi di Istruzione e di Istruzione e Formazione Professionale (IeFP). Le domande devono essere presentate tramite il portale di Regione Lombardia.",tags:["Istruzione","Contributi regionali"]},
  {id:5,tipo:"Notizia",titolo:"Non solo compiti \u2014 proposta pomeridiana scuola primaria",data:"18 marzo 2026",snippet:"Attivit\u00e0 pomeridiane per bambine e bambini della Scuola Primaria.",testo:"Il Comune di Calcinato propone un\u2019attivit\u00e0 pomeridiana per bambine e bambini della Scuola Primaria. Il progetto \u2018Non solo compiti\u2019 offre supporto scolastico e attivit\u00e0 ludico-educative in un ambiente sicuro e stimolante, dal luned\u00ec al venerd\u00ec. Le iscrizioni sono aperte fino ad esaurimento posti.",tags:["Istruzione","Bambini"]},
  {id:6,tipo:"Comunicato",titolo:"Servizio Non Solo Compiti a.s. 2026/2027 \u2014 riapertura iscrizioni",data:"13 marzo 2026",snippet:"\u00c8 possibile inoltrare domanda fino al 18 aprile.",testo:"\u00c8 possibile inoltrare domanda di iscrizione al servizio Non Solo Compiti per l\u2019anno scolastico 2026/2027 fino al 18 aprile. Il servizio offre supporto allo studio e attivit\u00e0 educative pomeridiane per gli alunni della scuola primaria. Per informazioni contattare l\u2019Ufficio Pubblica Istruzione.",tags:["Istruzione","Scuola"]},
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
function renderNewsCard(n){
  return `<div class="news-card" onclick="openArticle(${n.id})">
    <div class="news-thumb">${thumbSVG(n.tipo)}</div>
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
  el.innerHTML=filtered.map(a=>`
    <div class="att-card">
      <div class="att-header">
        <div>
          <div class="att-nome">${a.nome}</div>
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
    </div>`).join('');
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
      <div class="info-logo">C</div>
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
      App sviluppata da Premier Srls &times; World4All<br>
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
  const bell=document.getElementById('topbar-bell');
  back.classList.remove('visible');
  logo.style.display='flex';
  text.style.display='block';
  bell.style.display='flex';

  if(id==='news') renderNewsList(currentNewsFilter,'news-list');
  if(id==='attivita') renderAttivita(currentAttCat);
  if(id==='contatti') renderContatti();
  if(id==='info') renderInfo();
}

function openArticle(id){
  const n=NEWS.find(x=>x.id===id);
  if(!n) return;
  prevScreen=currentScreen;

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
  const back=document.getElementById('topbar-back');
  const logo=document.getElementById('topbar-logo');
  const text=document.getElementById('topbar-text');
  back.classList.add('visible');
  logo.style.display='none';
  text.style.display='none';
}

function goBack(){
  goScreen(prevScreen==='article'?'news':prevScreen);
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

/* ─── INIT ────────────────────────────────────────── */
renderHero();
renderNewsList('tutte','home-news-list');
renderNewsList('tutte','news-list');
renderAttivita('tutte');
