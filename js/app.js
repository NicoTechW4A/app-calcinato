/* ═══════════════════════════════════════════════════════
   Comune di Calcinato — Vanilla JS app (Revolut-style)
   ═══════════════════════════════════════════════════════ */

/* ─── DATA ───────────────────────────────────────── */
const NEWS = [
  { id:0, tipo:'Avviso', titolo:'Risultati del referendum popolare confermativo', data:'24 marzo 2026',
    snippet:'Sì 61,29% — No 38,71%. Pubblicati i risultati ufficiali.',
    testo:"Si sono concluse le operazioni di scrutinio del referendum popolare confermativo tenutosi domenica 22 marzo 2026. Il risultato finale registra il 61,29% di voti favorevoli (Sì) e il 38,71% di voti contrari (No), con un'affluenza alle urne del 54,3% degli aventi diritto.\n\nL'Amministrazione Comunale ringrazia tutti i cittadini che hanno partecipato alla consultazione democratica e desidera sottolineare l'importanza della partecipazione attiva alla vita della comunità. I risultati dettagliati per seggio sono disponibili presso l'Ufficio Elettorale.",
    tags:['Elezioni','Democrazia','Referendum'], categoria:'Elettorale', hero:'warm',
    icon:'megaphone', iconColor:'orange' },
  { id:1, tipo:'Notizia', titolo:'Consulenza Notarile Aprile 2026 — Iniziativa gratuita', data:'24 marzo 2026',
    snippet:'Servizio di consulenza notarile gratuita per tutti i residenti.',
    testo:"Il Comune di Calcinato, in collaborazione con il Consiglio Notarile di Brescia, mette a disposizione dei cittadini un servizio di consulenza notarile gratuita per il mese di aprile 2026.\n\nIl servizio è rivolto a tutti i residenti che necessitano di informazioni preliminari su atti notarili, successioni, donazioni, compravendite immobiliari e altri aspetti giuridici. Gli appuntamenti si svolgeranno presso la sede municipale, Piazza Aldo Moro 1.\n\nPer prenotare contattare l'Ufficio Servizi Sociali al numero 030/99891-214.",
    tags:['Servizi sociali','Assistenza legale'], categoria:'Servizi al cittadino', hero:'slate',
    icon:'document', iconColor:'indigo' },
  { id:2, tipo:'Avviso', titolo:'Bando di Servizio Civile Universale — Anno 2026', data:'18 marzo 2026',
    snippet:'Scadenza bando: 8 aprile 2026 alle ore 14:00.',
    testo:"È aperto il bando per la selezione di operatori volontari da impiegare in progetti di Servizio Civile Universale per l'anno 2026 presso il Comune di Calcinato.\n\nI giovani di età compresa tra i 18 e i 28 anni non compiuti possono presentare domanda esclusivamente attraverso la piattaforma DOL, previa autenticazione con SPID di secondo livello.\n\nScadenza tassativa: 8 aprile 2026, ore 14:00.",
    tags:['Giovani','Volontariato','Bandi'], categoria:'Giovani', hero:'blue',
    icon:'user', iconColor:'blue' },
  { id:3, tipo:'Avviso', titolo:'Servizio mensa scolastica 2026/2027 — Riapertura iscrizioni', data:'13 marzo 2026',
    snippet:'Iscrizioni aperte fino al 18 aprile 2026.',
    testo:"È possibile inoltrare domanda di iscrizione al servizio mensa scolastica per l'anno scolastico 2026/2027 fino al 18 aprile 2026.\n\nLe domande devono essere presentate esclusivamente online tramite il Portale dei Servizi Scolastici del Comune di Calcinato, previa autenticazione con SPID, CIE o CNS.",
    tags:['Istruzione','Scuola','Mensa'], categoria:'Istruzione', hero:'orange',
    icon:'fork', iconColor:'yellow' },
  { id:4, tipo:'Comunicato', titolo:'Dote Scuola — Materiale Didattico a.s. 2026/27', data:'13 marzo 2026',
    snippet:'Contributo regionale per le spese scolastiche delle famiglie.',
    testo:"Il bando di Regione Lombardia 'Dote Scuola — Materiale Didattico' mette a disposizione un contributo economico a sostegno delle famiglie per l'acquisto di libri di testo e dotazioni tecnologiche.\n\nPossono accedere al contributo le famiglie con ISEE non superiore a 15.748,78 €, con figli iscritti ai corsi di istruzione secondaria.",
    tags:['Istruzione','Contributi regionali'], categoria:'Istruzione', hero:'purple',
    icon:'document', iconColor:'purple' },
  { id:5, tipo:'Notizia', titolo:'"Non solo compiti" — Proposta pomeridiana scuola primaria', data:'18 marzo 2026',
    snippet:'Attività pomeridiane per bambine e bambini della Scuola Primaria.',
    testo:"Il Comune di Calcinato, in collaborazione con la Cooperativa Tempo Libero, propone un'attività pomeridiana strutturata.\n\nIl progetto 'Non solo compiti' offre supporto allo studio individualizzato, attività ludico-educative, laboratori creativi e momenti di socializzazione. Attivo dal lunedì al venerdì dalle 14:00 alle 18:00.",
    tags:['Istruzione','Bambini','Doposcuola'], categoria:'Istruzione', hero:'pink',
    icon:'heart', iconColor:'pink' },
];

const ATTIVITA = [
  { id:0, nome:'Grafiche Tagliani Stampa e Comunicazione', cat:'servizi', catLabel:'Tipografia',
    indirizzo:'Via Cairoli 13', tel:'030 963114', orari:'Lun–Ven 8:00–18:00',
    certificata:true, sito:'grafichetagliani.com', email:'lucia@grafichetagliani.com',
    facebook:'https://www.facebook.com/grafichetagliani/',
    img:'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80',
    descrizione:'Attiva nel mondo della stampa da oltre 50 anni. Offre servizi di stampa online e tradizionale: volantini, biglietti da visita, etichette, cartellini, buste, cartoline, locandine.',
    servizi:['Stampa online (SpeedyStampa)','Preventivi personalizzati','Consegna in tutta Italia','Stampa digitale e offset','Grafica e comunicazione'] },

  { id:1, nome:'Ristorante Al Baratello', cat:'ristorazione', catLabel:'Ristorante/Pizzeria',
    indirizzo:'Via Baratello 34', tel:'030 963285',
    orari:'Mer–Ven e Dom 12:00–14:00 / 18:30–22:00, Sab solo sera',
    certificata:true, sito:'baratello.it',
    facebook:'https://www.facebook.com/al.baratello',
    img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    descrizione:'Ristorante-pizzeria Cascina Al Baratello. Cucina italiana e mediterranea con opzioni vegetariane, vegane e senza glutine. Specialità: pizza fritta, pesce, antipasti, tiramisù.',
    servizi:['Pizza','Cucina italiana','Senza glutine','Vegetariano','Vegano','Parcheggio'] },

  { id:2, nome:'Manenti Glass', cat:'servizi', catLabel:'Serramenti e infissi',
    indirizzo:'Via Bixio 38', tel:'030 7994131', orari:'Lun–Ven 8:00–18:00',
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    certificata:false },

  { id:3, nome:'Idroelettrica MCL', cat:'servizi', catLabel:'Impianti idroelettrici',
    indirizzo:'Via Sottopassaggio 1', tel:'030 9636056', orari:'Lun–Ven 8:00–18:00',
    img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    certificata:false, sito:'idroelettricamcl.it' },

  { id:4, nome:'Tapita Beer and Grill', cat:'ristorazione', catLabel:'Birreria/Ristopub',
    indirizzo:'Via XX Settembre 11', tel:'030 5231449',
    orari:'Lun–Mar e Ven–Sab 17:30–01:00',
    certificata:false,
    facebook:'https://www.facebook.com/tapitacalcinato/',
    img:'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80' },

  { id:5, nome:'Tecnocasa Calcinato', cat:'servizi', catLabel:'Agenzia immobiliare',
    indirizzo:'Via G. Marconi 22', tel:'030 9174447',
    orari:'Lun–Ven 9:00–12:30 / 15:00–19:00',
    certificata:false, sito:'calcinato1.tecnocasa.it',
    img:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80' },

  { id:6, nome:'Atelier Patrizia Concari', cat:'commercio', catLabel:'Abiti sposa e cerimonia',
    indirizzo:'Contrada Cavalletto 7/A, Brescia', tel:'329 4083012',
    orari:'Su appuntamento',
    certificata:false, sito:'patriziaconcari.it',
    facebook:'https://www.facebook.com/concaripatriziastilista',
    instagram:'https://www.instagram.com/patriziaconcaristilista',
    img:'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80' },

  { id:7, nome:'Capretti Liscio Internazionale', cat:'ristorazione', catLabel:'Discoteca/Sala da ballo',
    indirizzo:'Via Carlo Alberto 62', tel:'030 963385',
    orari:'Ven–Dom sera, vedi calendario',
    certificata:false, sito:'caprettiliscio.com', email:'info@capretti.info',
    facebook:'https://www.facebook.com/capretti.liscio',
    img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },

  { id:8, nome:'Forneria di Valgonio Italo', cat:'commercio', catLabel:'Panetteria',
    indirizzo:'Via Vittorio Emanuele II 58', tel:'030 9636065',
    orari:'Chiusa (gennaio 2026)',
    certificata:true,
    img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    descrizione:'Storica panetteria di Calcinato, attiva per oltre 65 anni. Pane fresco, prodotti da forno artigianali, focacce e specialità locali.',
    servizi:['Pane artigianale','Focacce','Dolci da forno','Specialità locali'] },

  { id:9, nome:'Pasticceria Lady Rose', cat:'ristorazione', catLabel:'Pasticceria',
    indirizzo:'Via Vittorio Emanuele 6', tel:'030 9969990',
    orari:'Mar–Sab 7:15–12:30 / 15:00–19:00',
    img:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    certificata:false },
];

const UFFICI = [
  { nome:'Anagrafe e Stato Civile', indirizzo:'Piazza Aldo Moro 1', tel:'030 998 91-201', email:'anagrafe@comune.calcinato.bs.it', orari:'Lun–Ven 8:30–12:30, Gio 16:00–18:00' },
  { nome:'Ufficio Tributi',         indirizzo:'Piazza Aldo Moro 1', tel:'030 998 91-215', email:'tributi@comune.calcinato.bs.it',  orari:'Lun, Mer, Ven 9:00–12:30' },
  { nome:'Ufficio Tecnico',         indirizzo:'Via Trento 2',       tel:'030 998 91-230', email:'tecnico@comune.calcinato.bs.it',  orari:'Mar, Gio 9:00–12:30, 15:00–17:00' },
  { nome:'Servizi Sociali',         indirizzo:'Via Roma 8',         tel:'030 998 91-214', email:'sociali@comune.calcinato.bs.it',  orari:'Lun–Ven 9:00–12:00 su appuntamento' },
  { nome:'Polizia Locale',          indirizzo:'Via Brescia 10',     tel:'030 998 91-320', email:'polizia@comune.calcinato.bs.it',  orari:'Lun–Sab 8:00–13:00, 15:00–19:00' },
  { nome:'Pubblica Istruzione',     indirizzo:'Piazza Aldo Moro 1', tel:'030 998 91-218', email:'scuola@comune.calcinato.bs.it',   orari:'Lun, Mer 9:00–12:00' },
];

const NOTIFICHE = [
  { id:0, tipo:'rifiuti', titolo:'Domani: raccolta PLASTICA',           testo:'Esporre il contenitore entro le 6:00.',                      data:'Oggi, 07:00',  letto:false },
  { id:1, tipo:'avviso',  titolo:'Bando Servizio Civile',                testo:'Scadenza domanda: 8 aprile, ore 14:00.',                     data:'Ieri, 18:30',  letto:false },
  { id:2, tipo:'notizia', titolo:'Consulenza notarile gratuita',         testo:'Aperte le prenotazioni per aprile 2026.',                    data:'Ieri, 10:15',  letto:false },
  { id:3, tipo:'segnalazione', titolo:'Segnalazione #2847 in lavorazione', testo:"La buca in Via Roma è stata presa in carico dall'Ufficio Tecnico.", data:'2 giorni fa',  letto:true },
  { id:4, tipo:'notizia', titolo:'Risultati del referendum',             testo:'Pubblicati i risultati ufficiali della consultazione.',      data:'3 giorni fa',  letto:true },
  { id:5, tipo:'rifiuti', titolo:'Cambio calendario — Pasquetta',        testo:'Lunedì 13 aprile raccolta sospesa, recupero martedì.',       data:'5 giorni fa',  letto:true },
];

const RIFIUTI_CAL = [
  { giorno:'Lun', num:20, mese:'apr', tipo:null },
  { giorno:'Mar', num:21, mese:'apr', tipo:'umido' },
  { giorno:'Mer', num:22, mese:'apr', tipo:'carta' },
  { giorno:'Gio', num:23, mese:'apr', tipo:'umido' },
  { giorno:'Ven', num:24, mese:'apr', tipo:'plastica' },
  { giorno:'Sab', num:25, mese:'apr', tipo:null },
  { giorno:'Dom', num:26, mese:'apr', tipo:null },
  { giorno:'Lun', num:27, mese:'apr', tipo:'indifferenziato' },
  { giorno:'Mar', num:28, mese:'apr', tipo:'umido' },
  { giorno:'Mer', num:29, mese:'apr', tipo:'vetro' },
  { giorno:'Gio', num:30, mese:'apr', tipo:'umido' },
  { giorno:'Ven', num:1,  mese:'mag', tipo:'plastica' },
  { giorno:'Sab', num:2,  mese:'mag', tipo:null },
  { giorno:'Dom', num:3,  mese:'mag', tipo:null },
];
const RIFIUTI_TIPI = {
  umido:           { nome:'Umido organico',    colore:'#6F4E37', icon:'leaf' },
  carta:           { nome:'Carta e cartone',   colore:'#1E58A0', icon:'paper' },
  plastica:        { nome:'Plastica e metalli',colore:'#D9A441', icon:'bottle' },
  vetro:           { nome:'Vetro',             colore:'#2E7D5B', icon:'glass' },
  indifferenziato: { nome:'Indifferenziato',   colore:'#5A6475', icon:'bag' },
};

const SEGNALAZIONI_UTENTE = [
  { id:2847, tipo:'Buca stradale',      indirizzo:'Via Roma, angolo Via Marconi', data:'18 apr 2026', stato:'in-lavorazione' },
  { id:2802, tipo:'Cestino danneggiato',indirizzo:'Parco della Rimembranza',      data:'5 apr 2026',  stato:'risolta' },
  { id:2745, tipo:'Illuminazione',      indirizzo:'Via Lago 5',                   data:'22 mar 2026', stato:'risolta' },
];

/* ─── ICONS (SVG paths, 24x24, stroke 1.6) ──────── */
const ICONS = {
  home:       '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',
  newspaper:  '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h6M7 13h6M7 17h4M16 9h2M16 13h2M16 17h2"/>',
  grid:       '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  user:       '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
  bell:       '<path d="M18 15V10a6 6 0 0 0-12 0v5l-2 2v1h16v-1z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  plus:       '<path d="M12 5v14M5 12h14"/>',
  search:     '<circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/>',
  chevronR:   '<path d="M9 6l6 6-6 6"/>',
  chevronL:   '<path d="M15 6l-9 6 9 6"/>',
  arrowR:     '<path d="M5 12h14M13 6l6 6-6 6"/>',
  close:      '<path d="M6 6l12 12M18 6L6 18"/>',
  calendar:   '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  map:        '<path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
  pin:        '<path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  phone:      '<path d="M4 5c0-1 1-2 2-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 1-1 2-2 2-9 0-16-7-16-16z"/>',
  mail:       '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  clock:      '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  document:   '<path d="M7 3h8l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  building:   '<rect x="4" y="4" width="16" height="17" rx="1"/><path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2M10 21v-3h4v3"/>',
  megaphone:  '<path d="M3 11v2l10 4V7L3 11zM13 8l6-3v14l-6-3"/>',
  alert:      '<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',
  info:       '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  trash:      '<path d="M4 7h16M10 7V4h4v3M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/>',
  recycle:    '<path d="M7 19l-3-5 4-2M17 19h5l-2-5M17 5l3 5-4 2M7 5H2l2 5"/><path d="M12 3v4"/>',
  warning:    '<path d="M12 3L2 20h20L12 3z"/><path d="M12 10v4M12 18h.01"/>',
  badge:      '<path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M8 12l3 3 5-6"/>',
  fork:       '<path d="M6 3v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M8 11v10M16 3s-3 3-3 7 3 4 3 4v7"/>',
  bag:        '<path d="M6 7h12l-1 14H7L6 7zM9 7V4a3 3 0 0 1 6 0v3"/>',
  store:      '<path d="M3 7l1-3h16l1 3v2a3 3 0 0 1-5 2 3 3 0 0 1-4 0 3 3 0 0 1-4 0 3 3 0 0 1-5-2V7zM5 11v9h14v-9"/>',
  dumbbell:   '<path d="M3 10v4M7 7v10M17 7v10M21 10v4M7 12h10"/>',
  heart:      '<path d="M12 20s-8-5-8-12a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 7-8 12-8 12z"/>',
  briefcase:  '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  road:       '<path d="M4 21L8 3M20 21l-4-18M12 5v2M12 11v2M12 17v2"/>',
  bulb:       '<path d="M9 18h6M10 21h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3z"/>',
  tree:       '<path d="M12 3L6 12h3l-3 5h12l-3-5h3L12 3zM12 17v4"/>',
  paint:      '<path d="M3 3h8v6H3zM11 6h4a3 3 0 0 1 3 3v3M15 14v3a2 2 0 0 1-2 2h-2v3h4"/>',
  sign:       '<path d="M12 3v18M4 6h12l3 3-3 3H4V6zM8 14h10l3 3-3 3H8v-6z"/>',
  leaf:       '<path d="M5 19c0-9 7-14 15-14-1 8-6 15-15 14zM5 19l7-7"/>',
  paper:      '<path d="M6 3h9l4 4v14H6V3z"/><path d="M14 3v5h5"/>',
  bottle:     '<path d="M10 3h4v3l2 3v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3V3z"/>',
  glass:      '<path d="M6 3h12l-1 8a5 5 0 0 1-10 0L6 3zM12 16v5M9 21h6"/>',
  lock:       '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  settings:   '<circle cx="12" cy="12" r="3"/><path d="M12 2l1.5 2.5h3l1 3 2.5 1.5-1 3 1 3-2.5 1.5-1 3h-3L12 22l-1.5-2.5h-3l-1-3L4 15l1-3-1-3 2.5-1.5 1-3h3L12 2z"/>',
  external:   '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  share:      '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 11l8-4M8 13l8 4"/>',
  bookmark:   '<path d="M6 3h12v18l-6-4-6 4V3z"/>',
  eye:        '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
};

function icon(name, opts = {}) {
  const { size = 24, stroke = 'currentColor', sw = 1.6, fill = 'none' } = opts;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0">${ICONS[name] || ICONS.info}</svg>`;
}

/* ─── STEMMA (reale dal Comune) ──────────────────── */
function stemma(size = 40, onDark = false) {
  const border = onDark ? '1.5px solid rgba(255,255,255,0.85)' : '1px solid var(--border)';
  const shadow = onDark ? '0 2px 10px rgba(0,0,0,0.15)' : '0 2px 8px rgba(28, 63, 170, 0.18)';
  return `
    <div class="stemma" style="width:${size}px;height:${size}px;border-radius:${size*0.28}px;border:${border};box-shadow:${shadow};overflow:hidden;padding:4px;background:#fff">
      <img src="assets/stemma-calcinato.png" alt="Stemma Calcinato" style="width:100%;height:100%;object-fit:contain;display:block">
    </div>`;
}

function tile(iconName, color, size = 44, radius = 12, iconSize = null) {
  const s = iconSize || Math.round(size * 0.5);
  return `<div class="tile tile-${color}" style="width:${size}px;height:${size}px;border-radius:${radius}px">${icon(iconName, { size: s, sw: 2 })}</div>`;
}

/* ─── STATE ────────────────────────────────────── */
/* ─── SEEDED USERS (demo) ──────────────────────── */
const SEED_USERS = [
  // Admin Comune — gestisce richieste Plus
  { email:'admin@comune.calcinato.bs.it', password:'comune2026', nome:'Admin Comune Calcinato', isComuneAdmin:true },
  // Admin attività Plus — Ristorante Al Baratello
  { email:'baratello@calcinato.app', password:'baratello2026', nome:'Famiglia Baratello', attivitaId:1 },
  // Utente cittadino demo
  { email:'marco@example.com', password:'demo2026', nome:'Marco Rossi' },
];

function getUsers() {
  let users = [];
  try { users = JSON.parse(localStorage.getItem('calc-users') || '[]'); } catch(e) {}
  if (!users.length) {
    users = [...SEED_USERS];
    localStorage.setItem('calc-users', JSON.stringify(users));
  }
  return users;
}
function saveUsers(users) { localStorage.setItem('calc-users', JSON.stringify(users)); }

const state = {
  stack: JSON.parse(localStorage.getItem('calc-stack') || '[]').length
    ? JSON.parse(localStorage.getItem('calc-stack'))
    : [{ screen: 'home' }],
  tab: localStorage.getItem('calc-tab') || 'home',
  currentUser: JSON.parse(localStorage.getItem('calc-current-user') || 'null'),
  loginMode: 'login', // 'login' or 'register'
  loginError: '',
  newsFilter: 'tutte',
  newsQuery: '',
  attFilter: 'tutte',
  attQuery: '',
  segnTab: 'mie',
  mappaLayer: 'tutto',
  weather: null,
};

function saveCurrentUser() {
  if (state.currentUser) localStorage.setItem('calc-current-user', JSON.stringify(state.currentUser));
  else localStorage.removeItem('calc-current-user');
}

/* ─── AUTH ACTIONS (called from UI) ────────────── */
function doLogin() {
  const email = document.getElementById('login-email')?.value.trim().toLowerCase();
  const pass = document.getElementById('login-pass')?.value;
  if (!email || !pass) { state.loginError = 'Compila email e password'; render(); return; }
  const users = getUsers();
  const u = users.find(x => x.email.toLowerCase() === email && x.password === pass);
  if (!u) { state.loginError = 'Email o password non corretti'; render(); return; }
  state.currentUser = { email: u.email, nome: u.nome, attivitaId: u.attivitaId, isComuneAdmin: u.isComuneAdmin };
  state.loginError = '';
  saveCurrentUser();
  render();
}

function doRegister() {
  const nome = document.getElementById('reg-nome')?.value.trim();
  const email = document.getElementById('reg-email')?.value.trim().toLowerCase();
  const pass = document.getElementById('reg-pass')?.value;
  const pass2 = document.getElementById('reg-pass2')?.value;
  if (!nome || !email || !pass) { state.loginError = 'Compila tutti i campi'; render(); return; }
  if (pass.length < 6) { state.loginError = 'Password minimo 6 caratteri'; render(); return; }
  if (pass !== pass2) { state.loginError = 'Le password non coincidono'; render(); return; }
  const users = getUsers();
  if (users.some(u => u.email.toLowerCase() === email)) {
    state.loginError = 'Email già registrata'; render(); return;
  }
  users.push({ email, password: pass, nome });
  saveUsers(users);
  state.currentUser = { email, nome };
  state.loginError = '';
  state.loginMode = 'login';
  saveCurrentUser();
  render();
}

function doLogout() {
  state.currentUser = null;
  saveCurrentUser();
  render();
}

function switchLoginMode(mode) {
  state.loginMode = mode;
  state.loginError = '';
  render();
}
window.doLogin = doLogin;
window.doRegister = doRegister;
window.doLogout = doLogout;
window.switchLoginMode = switchLoginMode;

/* ─── PLUS ADMIN: edit own attivita ─────────────── */
function saveAttivitaEdits() {
  const u = state.currentUser;
  if (!u || u.attivitaId === undefined) return;
  const a = ATTIVITA[u.attivitaId];
  if (!a) return;
  const get = (id) => document.getElementById(id)?.value.trim();
  a.nome = get('adm-nome') || a.nome;
  a.indirizzo = get('adm-indirizzo') || a.indirizzo;
  a.tel = get('adm-tel') || a.tel;
  a.orari = get('adm-orari') || a.orari;
  a.sito = get('adm-sito') || a.sito;
  a.email = get('adm-email') || a.email;
  a.facebook = get('adm-fb') || a.facebook;
  a.instagram = get('adm-ig') || a.instagram;
  a.descrizione = get('adm-descrizione') || a.descrizione;
  const serviziStr = get('adm-servizi');
  if (serviziStr !== undefined) a.servizi = serviziStr.split(',').map(s => s.trim()).filter(Boolean);
  // Persist attivita edits
  localStorage.setItem('calc-attivita-overrides', JSON.stringify(ATTIVITA.reduce((m, x) => { m[x.id] = x; return m; }, {})));
  alert('Modifiche salvate!');
  render();
}
window.saveAttivitaEdits = saveAttivitaEdits;

/* ─── PLUS REQUESTS (da attività → Comune) ─────── */
function getPlusRequests() {
  try { return JSON.parse(localStorage.getItem('calc-plus-requests') || '[]'); } catch(e) { return []; }
}
function savePlusRequests(arr) {
  localStorage.setItem('calc-plus-requests', JSON.stringify(arr));
}

function submitPlusRequest() {
  const nome = document.getElementById('req-nome')?.value.trim();
  const attivita = document.getElementById('req-attivita')?.value.trim();
  const email = document.getElementById('req-email')?.value.trim().toLowerCase();
  const tel = document.getElementById('req-tel')?.value.trim();
  const note = document.getElementById('req-note')?.value.trim();
  if (!nome || !attivita || !email || !tel) {
    alert('Compila tutti i campi obbligatori');
    return;
  }
  const requests = getPlusRequests();
  requests.push({
    id: Date.now(),
    nome, attivita, email, tel, note,
    data: new Date().toISOString(),
    stato: 'nuova', // nuova | contattata | attivata
  });
  savePlusRequests(requests);
  alert('Richiesta inviata! Il Comune ti contatterà a breve.');
  pop();
}
window.submitPlusRequest = submitPlusRequest;

function approvePlusRequest(reqId) {
  const password = prompt('Imposta una password per l\'account Plus (minimo 6 caratteri):');
  if (!password || password.length < 6) { alert('Password troppo corta'); return; }
  const requests = getPlusRequests();
  const req = requests.find(r => r.id === reqId);
  if (!req) return;

  // Check if an ATTIVITA exists matching the business name (case-insensitive fuzzy)
  const match = ATTIVITA.find(a => a.nome.toLowerCase().includes(req.attivita.toLowerCase()) ||
                                    req.attivita.toLowerCase().includes(a.nome.toLowerCase()));
  let attivitaId;
  if (match) {
    attivitaId = match.id;
    match.certificata = true; // promuovi a Plus
  } else {
    // Crea nuova attivita' base
    const newId = Math.max(...ATTIVITA.map(a => a.id)) + 1;
    ATTIVITA.push({
      id: newId,
      nome: req.attivita,
      cat: 'servizi',
      catLabel: 'Attività',
      indirizzo: '',
      tel: req.tel,
      orari: '',
      certificata: true,
    });
    attivitaId = newId;
  }

  // Crea utente
  const users = getUsers();
  if (users.some(u => u.email.toLowerCase() === req.email)) {
    alert('Un account con questa email esiste già');
    return;
  }
  users.push({ email: req.email, password, nome: req.nome, attivitaId });
  saveUsers(users);

  // Aggiorna richiesta
  req.stato = 'attivata';
  req.password = password;
  savePlusRequests(requests);

  // Persist attivita
  localStorage.setItem('calc-attivita-overrides', JSON.stringify(ATTIVITA.reduce((m, x) => { m[x.id] = x; return m; }, {})));

  alert(`Account creato!\nEmail: ${req.email}\nPassword: ${password}\n\nComunica le credenziali all'attività.`);
  render();
}
window.approvePlusRequest = approvePlusRequest;

function rejectPlusRequest(reqId) {
  if (!confirm('Rifiutare questa richiesta?')) return;
  const requests = getPlusRequests().filter(r => r.id !== reqId);
  savePlusRequests(requests);
  render();
}
window.rejectPlusRequest = rejectPlusRequest;

function markContactata(reqId) {
  const requests = getPlusRequests();
  const r = requests.find(x => x.id === reqId);
  if (r) { r.stato = 'contattata'; savePlusRequests(requests); render(); }
}
window.markContactata = markContactata;

// Load any saved attivita overrides at boot
(function loadOverrides(){
  try {
    const raw = localStorage.getItem('calc-attivita-overrides');
    if (raw) {
      const map = JSON.parse(raw);
      Object.values(map).forEach(ov => {
        const idx = ATTIVITA.findIndex(x => x.id === ov.id);
        if (idx >= 0) Object.assign(ATTIVITA[idx], ov);
      });
    }
  } catch(e) {}
})();

/* ─── WEATHER (Open-Meteo, no API key needed) ────── */
const WEATHER_ICONS = {
  0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',
  51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',
  71:'🌨️',73:'🌨️',75:'🌨️',80:'🌦️',81:'🌧️',82:'🌧️',
  95:'⛈️',96:'⛈️',99:'⛈️'
};
function weatherIcon(code) { return WEATHER_ICONS[code] || '☀️'; }

async function loadWeather() {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=45.4558&longitude=10.4107&current=temperature_2m,weather_code&timezone=Europe/Rome');
    const d = await res.json();
    state.weather = {
      temp: Math.round(d.current.temperature_2m),
      code: d.current.weather_code,
    };
    // Update weather badges in DOM
    document.querySelectorAll('.topbar-weather').forEach(el => {
      el.innerHTML = `<span class="icon">${weatherIcon(state.weather.code)}</span><span class="temp">${state.weather.temp}°</span>`;
    });
  } catch (e) { /* silent */ }
}

function persist() {
  localStorage.setItem('calc-stack', JSON.stringify(state.stack));
  localStorage.setItem('calc-tab', state.tab);
  localStorage.setItem('calc-login', state.loggedIn ? '1' : '0');
}

/* ─── NAVIGATION ───────────────────────────────── */
function push(screen, data) {
  state.stack.push({ screen, data });
  render();
}
function pop() {
  if (state.stack.length > 1) {
    state.stack.pop();
    render();
  }
}
function resetTo(screen) {
  state.stack = [{ screen }];
  render();
}
function goTab(id) {
  state.tab = id;
  const map = { home:'home', news:'news', servizi:'servizi', attivita:'attivita', profilo:'profilo' };
  state.stack = [{ screen: map[id] || 'home' }];
  render();
}

window.push = push;
window.pop = pop;
window.resetTo = resetTo;
window.goTab = goTab;

/* ─── HELPERS ──────────────────────────────────── */
function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function pillHtml(tone, text) {
  return `<span class="pill pill-${tone}">${esc(text)}</span>`;
}

/* ─── SCREEN CONFIGS ───────────────────────────── */
const SCREEN_CONFIG = {
  home:              { title:'Calcinato',        sub:'Brescia · BS',         variant:'brand', fullHeader:true, homeHero:true },
  news:              { title:'Novità',           sub:'Notizie e avvisi',     variant:'brand', fullHeader:true },
  article:           { headerless:true },
  servizi:           { title:'Servizi',          sub:'Comune di Calcinato',  variant:'brand', fullHeader:true },
  attivita:          { title:'Attività locali',  sub:'Directory del territorio', variant:'brand', fullHeader:true },
  'attivita-detail': { headerless:true },
  mappa:             { title:'Mappa',            sub:'Punti di interesse',   variant:'light', noPad:true, fullHeight:true },
  uffici:            { title:'Uffici comunali',  sub:'Contatti e orari',     variant:'light' },
  notifiche:         { title:'Notifiche',        sub:'Aggiornamenti dal Comune', variant:'light' },
  profilo:           { title:'Profilo',          sub:'Area riservata',       variant:'brand', fullHeader:true },
  segnalazioni:      { title:'Segnalazioni',     sub:'Città che funziona',   variant:'light' },
  rifiuti:           { title:'Raccolta rifiuti', sub:'Calendario porta a porta', variant:'light' },
  'richiesta-plus':  { title:'Passa a Plus',     sub:'Richiesta al Comune',  variant:'light' },
  'comune-admin':    { title:'Dashboard Comune', sub:'Gestione richieste Plus', variant:'light' },
};

const ROOT_SCREENS = ['home','news','servizi','attivita','profilo'];

/* ═══════════════════════════════════════════════════
   SCREEN RENDERERS
   ═══════════════════════════════════════════════════ */

/* ─── HOME ─────────────────────────────────────── */
function renderHome() {
  const prossima = RIFIUTI_CAL.find(r => r.tipo);
  const tipoInfo = prossima ? RIFIUTI_TIPI[prossima.tipo] : null;
  const segnalAperte = SEGNALAZIONI_UTENTE.filter(s => s.stato === 'in-lavorazione');
  const bandiAttivi = NEWS.filter(n => n.tipo === 'Avviso').length;

  const quickBtns = [
    { icon:'recycle', label:'Rifiuti',  onClick:"push('rifiuti')" },
    { icon:'warning', label:'Segnala',  onClick:"push('segnalazioni')" },
    { icon:'map',     label:'Mappa',    onClick:"push('mappa')" },
    { icon:'grid',    label:'Altro',    onClick:"resetTo('servizi'); state.tab='servizi'; persist(); render()" },
  ];

  const pickupCard = tipoInfo ? `
    <div class="home-pickup">
      <button class="pickup-card" onclick="push('rifiuti')">
        <div class="pickup-icon" style="background:${tipoInfo.colore}">${icon(tipoInfo.icon, { size:26, sw:2.1 })}</div>
        <div class="pickup-body">
          <div class="pickup-over">Domani · ${prossima.giorno} ${prossima.num} ${prossima.mese}</div>
          <div class="pickup-title">${tipoInfo.nome}</div>
          <div class="pickup-note">Esporre entro le 6:00</div>
        </div>
        <span style="color:var(--ink-faint)">${icon('chevronR', { size:20, sw:2.2 })}</span>
      </button>
    </div>` : '';

  const newsHtml = NEWS.slice(0, 3).map(n => newsCard(n)).join('');

  return `
    <div style="padding-bottom:24px;position:relative;background:var(--bg)">
      <div class="home-hero">
        <svg viewBox="0 0 400 420" preserveAspectRatio="none">
          <circle cx="340" cy="120" r="2" fill="#fff"/>
          <circle cx="60" cy="260" r="1.6" fill="#fff"/>
          <circle cx="280" cy="220" r="1.2" fill="#fff"/>
          <circle cx="150" cy="100" r="1.4" fill="#fff"/>
          <circle cx="100" cy="170" r="1" fill="#fff"/>
          <circle cx="320" cy="290" r="1.8" fill="#fff"/>
          <path d="M -30 380 Q 200 320 430 380" stroke="#fff" stroke-width="0.8" fill="none"/>
        </svg>
      </div>

      <div class="home-top">
        <div class="home-daylabel">${currentDayLabel()}</div>
        <div class="home-greet">Buongiorno, Marco</div>
        <div class="home-sub">Ecco cosa succede oggi nel tuo comune.</div>

        <div class="home-quickgrid">
          ${quickBtns.map(b => `
            <button class="home-quickbtn" onclick="${b.onClick}">
              <div class="home-quicktile">${icon(b.icon, { size:24, sw:2.1 })}</div>
              <span class="home-quicklabel">${b.label}</span>
            </button>`).join('')}
        </div>
      </div>

      ${pickupCard}

      <div class="home-summary">
        <div class="sec-small summary-label">In sintesi</div>
        <div class="summary-grid">
          <button class="summary-tile" onclick="push('segnalazioni')">
            <div class="summary-tile-icon" style="background:var(--t-orange)">${icon('warning', { size:16, sw:2.2 })}</div>
            <div><div class="summary-value">${segnalAperte.length}</div><div class="summary-label-small">Segnalazioni aperte</div></div>
          </button>
          <button class="summary-tile" style="background:#E5E9FB" onclick="resetTo('news'); state.tab='news'; persist(); render()">
            <div class="summary-tile-icon" style="background:var(--t-indigo)">${icon('document', { size:16, sw:2.2 })}</div>
            <div><div class="summary-value">${bandiAttivi}</div><div class="summary-label-small">Bandi attivi</div></div>
          </button>
          <button class="summary-tile" style="background:#DCF2E3" onclick="resetTo('news'); state.tab='news'; persist(); render()">
            <div class="summary-tile-icon" style="background:var(--t-green)">${icon('calendar', { size:16, sw:2.2 })}</div>
            <div><div class="summary-value">3</div><div class="summary-label-small">Eventi a breve</div></div>
          </button>
        </div>
      </div>

      <div class="section-label"><span class="title">Servizi</span><button class="action" onclick="resetTo('servizi'); state.tab='servizi'; persist(); render()">Tutti i servizi</button></div>
      <div class="row-group"><div class="row-group-inner">
        ${rowHtml({ icon:'map',      color:'teal',   title:'Mappa del territorio',    sub:'Punti di interesse, uffici, scuole',  onClick:"push('mappa')" })}
        ${rowHtml({ icon:'building', color:'indigo', title:'Uffici comunali',         sub:'Orari, contatti, prenotazioni',       onClick:"push('uffici')" })}
        ${rowHtml({ icon:'document', color:'yellow', title:'Bandi e avvisi pubblici', sub:`${bandiAttivi} bandi attivi`,         onClick:"resetTo('news'); state.tab='news'; persist(); render()" })}
        ${rowHtml({ icon:'store',    color:'pink',   title:'Attività locali',         sub:`${ATTIVITA.length} esercizi sul territorio`, last:true, onClick:"resetTo('attivita'); state.tab='attivita'; persist(); render()" })}
      </div></div>

      <div class="section-label"><span class="title">Novità</span><button class="action" onclick="resetTo('news'); state.tab='news'; persist(); render()">Vedi tutte</button></div>
      <div class="news-list">${newsHtml}</div>
    </div>
  `;
}

function currentDayLabel() {
  const days = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
  const months = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
  const d = new Date();
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

function rowHtml({ icon: ic, color, title, sub, onClick, last, right }) {
  const chevron = onClick ? `<span class="row-chevron">${icon('chevronR', { size:18, sw:2.2 })}</span>` : '';
  const rightHtml = right !== undefined ? right : chevron;
  return `
    <button class="row${last ? ' last' : ''}" ${onClick ? `onclick="${onClick}"` : ''}>
      ${ic ? `<div class="row-icon">${tile(ic, color, 40, 12)}</div>` : ''}
      <div class="row-body">
        <div class="row-title">${esc(title)}</div>
        ${sub ? `<div class="row-sub">${esc(sub)}</div>` : ''}
      </div>
      ${rightHtml}
    </button>`;
}

/* ─── NEWS CARD ─────────────────────────────────── */
function newsCard(n) {
  const tone = n.tipo === 'Avviso' ? 'avviso' : n.tipo === 'Notizia' ? 'notizia' : 'comunicato';
  const iconName = n.icon || (n.tipo === 'Avviso' ? 'megaphone' : n.tipo === 'Comunicato' ? 'document' : 'newspaper');
  const iconColor = n.iconColor || (n.tipo === 'Avviso' ? 'orange' : n.tipo === 'Comunicato' ? 'purple' : 'indigo');
  return `
    <button class="news-card" onclick="push('article', { id: ${n.id} })">
      <div class="news-thumb">${tile(iconName, iconColor, 72, 14, 32)}</div>
      <div class="news-body">
        ${pillHtml(tone, n.tipo)}
        <div class="news-title">${esc(n.titolo)}</div>
        <div class="news-meta">${icon('clock', { size:11, sw:2 })} ${esc(n.data)}</div>
      </div>
    </button>`;
}

/* ─── NEWS LIST ─────────────────────────────────── */
function renderNewsList() {
  const filter = state.newsFilter;
  const q = state.newsQuery;
  const filtered = NEWS.filter(n => {
    if (filter === 'notizie' && n.tipo !== 'Notizia') return false;
    if (filter === 'avvisi' && n.tipo !== 'Avviso') return false;
    if (filter === 'comunicati' && n.tipo !== 'Comunicato') return false;
    if (q && !n.titolo.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const filters = [
    ['tutte','Tutte', NEWS.length],
    ['notizie','Notizie', NEWS.filter(n=>n.tipo==='Notizia').length],
    ['avvisi','Avvisi', NEWS.filter(n=>n.tipo==='Avviso').length],
    ['comunicati','Comunicati', NEWS.filter(n=>n.tipo==='Comunicato').length],
  ];

  return `
    <div class="search-wrap">
      <div class="search-box">
        ${icon('search', { size:18, stroke:'var(--ink-mute)', sw:2 })}
        <input type="search" placeholder="Cerca in novità, eventi, avvisi" value="${esc(q)}" oninput="state.newsQuery=this.value; renderNewsListOnly()">
      </div>
    </div>
    <div class="filter-strip">
      ${filters.map(([id, label, count]) => `
        <button class="filter-pill ${filter===id?'active':''}" onclick="state.newsFilter='${id}'; render()">
          ${esc(label)} <span class="count">${count}</span>
        </button>`).join('')}
    </div>
    <div class="news-list" id="news-list-items">
      ${filtered.map(n => newsCard(n)).join('')}
    </div>
  `;
}

function renderNewsListOnly() {
  const q = state.newsQuery;
  const filter = state.newsFilter;
  const filtered = NEWS.filter(n => {
    if (filter === 'notizie' && n.tipo !== 'Notizia') return false;
    if (filter === 'avvisi' && n.tipo !== 'Avviso') return false;
    if (filter === 'comunicati' && n.tipo !== 'Comunicato') return false;
    if (q && !n.titolo.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  const el = document.getElementById('news-list-items');
  if (el) el.innerHTML = filtered.map(n => newsCard(n)).join('');
}
window.renderNewsListOnly = renderNewsListOnly;

/* ─── ARTICLE ───────────────────────────────────── */
function renderArticle() {
  const id = state.stack[state.stack.length - 1].data?.id;
  const n = NEWS.find(x => x.id === id);
  if (!n) return '<div style="padding:40px;text-align:center;color:var(--ink-mute)">Articolo non trovato</div>';
  const tone = n.tipo === 'Avviso' ? 'avviso' : n.tipo === 'Notizia' ? 'notizia' : 'comunicato';
  const paragraphs = (n.testo || n.snippet || '').split('\n\n').map(p => `<p>${esc(p)}</p>`).join('');
  return `
    <div class="photo-ph article-hero ${n.hero || 'blue'}"></div>
    <div class="article-body-wrap">
      <div class="article-pills">
        ${pillHtml(tone, n.tipo)}
        ${pillHtml('neutral', n.categoria)}
      </div>
      <h1 class="article-title">${esc(n.titolo)}</h1>
      <div class="article-meta">
        <span class="article-meta-item">${icon('calendar', { size:13, sw:2 })} ${esc(n.data)}</span>
        <span>·</span>
        <span class="article-meta-item">${icon('eye', { size:13, sw:2 })} 1.2k letture</span>
      </div>
      <div class="article-body">${paragraphs}</div>
      <div class="article-actions">
        <button class="btn-secondary">${icon('bookmark', { size:16, sw:2 })} Salva</button>
        <button class="btn-dark">${icon('share', { size:16, sw:2 })} Condividi</button>
      </div>
    </div>
  `;
}

/* ─── SERVIZI ───────────────────────────────────── */
function renderServizi() {
  const gruppi = [
    { label:'Per il cittadino', items: [
      { icon:'warning',  color:'orange', title:'Segnalazioni',   sub:'Buche, rifiuti, decoro',   onClick:"push('segnalazioni')" },
      { icon:'recycle',  color:'green',  title:'Raccolta rifiuti', sub:'Calendario e guida',     onClick:"push('rifiuti')" },
      { icon:'document', color:'yellow', title:'Bandi e avvisi', sub:'Opportunità per cittadini', onClick:"resetTo('news'); state.tab='news'; persist(); render()" },
      { icon:'calendar', color:'purple', title:'Eventi',         sub:'Cultura e manifestazioni', onClick:"resetTo('news'); state.tab='news'; persist(); render()" },
    ]},
    { label:'Territorio', items: [
      { icon:'map',      color:'teal',   title:'Mappa',          sub:'Punti di interesse',       onClick:"push('mappa')" },
      { icon:'building', color:'indigo', title:'Uffici comunali',sub:'Orari e contatti',         onClick:"push('uffici')" },
      { icon:'store',    color:'pink',   title:'Attività locali',sub:'Directory esercizi',       onClick:"resetTo('attivita'); state.tab='attivita'; persist(); render()" },
      { icon:'bell',     color:'red',    title:'Notifiche',      sub:'Aggiornamenti dal Comune', onClick:"push('notifiche')" },
    ]},
    { label:'Informazioni utili', items: [
      { icon:'phone',    color:'green',  title:'Numeri utili',   sub:'Emergenze e servizi' },
      { icon:'sign',     color:'blue',   title:'Trasporti',      sub:'Orari e linee bus' },
      { icon:'heart',    color:'pink',   title:'Sanità',         sub:'ASST, farmacie, guardia' },
    ]},
  ];
  return `
    <div style="padding-top:4px;padding-bottom:24px">
      ${gruppi.map(g => `
        <div class="section-label"><span class="title">${esc(g.label)}</span></div>
        <div class="row-group"><div class="row-group-inner">
          ${g.items.map((it, i) => rowHtml({ ...it, last: i === g.items.length - 1 })).join('')}
        </div></div>
      `).join('')}
    </div>
  `;
}

/* ─── ATTIVITÀ ──────────────────────────────────── */
function renderAttivita() {
  const cat = state.attFilter;
  const q = state.attQuery;
  const cats = [
    ['tutte','Tutte', null],
    ['ristorazione','Ristoranti','fork'],
    ['commercio','Negozi','bag'],
    ['sport','Sport','dumbbell'],
    ['salute','Salute','heart'],
    ['servizi','Servizi','briefcase'],
  ];
  const filtered = ATTIVITA.filter(a => {
    if (cat !== 'tutte' && a.cat !== cat) return false;
    if (q && !a.nome.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  const catIcon = (c) => ({ ristorazione:'fork', commercio:'bag', sport:'dumbbell', salute:'heart', servizi:'briefcase' }[c] || 'store');
  const catColor = (c) => ({ ristorazione:'orange', commercio:'pink', sport:'green', salute:'red', servizi:'blue' }[c] || 'blue');

  return `
    <div class="search-wrap">
      <div class="search-box">
        ${icon('search', { size:18, stroke:'var(--ink-mute)', sw:2 })}
        <input type="search" placeholder="Cerca attività" value="${esc(q)}" oninput="state.attQuery=this.value; renderAttivitaListOnly()">
      </div>
    </div>
    <div class="filter-strip">
      ${cats.map(([id, label, ic]) => `
        <button class="filter-pill ${cat===id?'active':''}" onclick="state.attFilter='${id}'; render()">
          ${ic ? icon(ic, { size:14, sw:2 }) : ''} ${esc(label)}
        </button>`).join('')}
    </div>
    <div class="activity-list" id="activity-list-items">
      ${filtered.map(a => activityCardHtml(a, catIcon, catColor)).join('')}
    </div>
  `;
}

function renderAttivitaListOnly() {
  const q = state.attQuery;
  const cat = state.attFilter;
  const filtered = ATTIVITA.filter(a => {
    if (cat !== 'tutte' && a.cat !== cat) return false;
    if (q && !a.nome.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  const catIcon = (c) => ({ ristorazione:'fork', commercio:'bag', sport:'dumbbell', salute:'heart', servizi:'briefcase' }[c] || 'store');
  const catColor = (c) => ({ ristorazione:'orange', commercio:'pink', sport:'green', salute:'red', servizi:'blue' }[c] || 'blue');
  const el = document.getElementById('activity-list-items');
  if (!el) return;
  el.innerHTML = filtered.map(a => activityCardHtml(a, catIcon, catColor)).join('');
}

function activityCardHtml(a, catIcon, catColor) {
  const thumb = a.img
    ? `<div style="width:52px;height:52px;border-radius:16px;background:url('${a.img}') center/cover;flex-shrink:0;position:relative" class="tile-img"></div>`
    : tile(catIcon(a.cat), catColor(a.cat), 52, 16);
  return `
    <button class="activity-card" onclick="push('attivita-detail', { id: ${a.id} })">
      ${thumb}
      <div class="activity-body">
        <div class="activity-name-wrap">
          <div class="activity-name">${esc(a.nome)}</div>
          ${a.certificata ? `<span style="color:var(--primary)">${icon('badge', { size:14, stroke:'var(--primary)', sw:2 })}</span>` : ''}
        </div>
        <div class="activity-meta">${esc(a.catLabel)} · ${esc(a.indirizzo)}</div>
      </div>
      <span class="row-chevron">${icon('chevronR', { size:18, sw:2.2 })}</span>
    </button>`;
}
window.renderAttivitaListOnly = renderAttivitaListOnly;

/* ─── ATTIVITÀ DETAIL ──────────────────────────── */
function renderAttivitaDetail() {
  const id = state.stack[state.stack.length - 1].data?.id;
  const a = ATTIVITA.find(x => x.id === id);
  if (!a) return '<div style="padding:40px;text-align:center;color:var(--ink-mute)">Attività non trovata</div>';
  const catColor = { ristorazione:'orange', commercio:'pink', sport:'green', salute:'red', servizi:'blue' }[a.cat] || 'blue';
  const catIcon = { ristorazione:'fork', commercio:'bag', sport:'dumbbell', salute:'heart', servizi:'briefcase' }[a.cat] || 'store';
  const heroTone = catColor === 'orange' ? 'warm' : catColor === 'red' ? 'orange' : catColor;

  const serviziHtml = a.certificata && a.servizi && a.servizi.length ? `
    <div style="margin-top:20px">
      <div class="sec-small" style="padding:0 4px 10px">Servizi</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${a.servizi.map(s => `<span class="pill pill-notizia" style="text-transform:none;letter-spacing:0;font-size:12px">${esc(s)}</span>`).join('')}
      </div>
    </div>` : '';

  const descHtml = a.certificata && a.descrizione ? `
    <div style="margin-top:18px;font-size:14px;line-height:1.6;color:var(--ink-2);font-weight:500">${esc(a.descrizione)}</div>` : '';

  const contattiRows = [];
  contattiRows.push(rowHtml({ icon:'pin',   color:'red',    title: a.indirizzo, sub:'Indirizzo' }));
  contattiRows.push(rowHtml({ icon:'phone', color:'green',  title: a.tel,       sub:'Telefono' }));
  contattiRows.push(rowHtml({ icon:'clock', color:'orange', title: a.orari,     sub:'Orari' }));
  if (a.email) contattiRows.push(rowHtml({ icon:'mail', color:'indigo', title: a.email, sub:'Email' }));
  if (a.sito) contattiRows.push(rowHtml({ icon:'external', color:'purple', title: a.sito, sub:'Sito web' }));

  const socialRows = [];
  if (a.facebook) socialRows.push(rowHtml({ icon:'share', color:'blue', title:'Facebook', sub: a.facebook.replace('https://', '').replace('www.', '') }));
  if (a.instagram) socialRows.push(rowHtml({ icon:'share', color:'pink', title:'Instagram', sub: a.instagram.replace('https://', '').replace('www.', '') }));

  // Mark last row
  const allRows = [...contattiRows, ...socialRows];
  const lastIdx = allRows.length - 1;
  const contattiHtml = allRows.map((r, i) => i === lastIdx ? r.replace('<button class="row"', '<button class="row last"') : r).join('');

  const heroHtml = a.img
    ? `<div class="detail-hero" style="background:url('${a.img}') center/cover no-repeat"></div>`
    : `<div class="photo-ph detail-hero ${heroTone}"></div>`;

  return `
    ${heroHtml}
    <div class="detail-body-wrap">
      <div class="detail-header">
        ${tile(catIcon, catColor, 56, 18)}
        <div style="flex:1;padding-top:2px">
          ${pillHtml('neutral', a.catLabel)}
          <h1 class="detail-title">${esc(a.nome)}</h1>
        </div>
      </div>
      ${a.certificata ? `
        <div class="cert-banner">
          ${tile('badge', 'blue', 40, 12)}
          <div style="flex:1">
            <div class="cert-title">Attività certificata Plus</div>
            <div class="cert-sub">Verificata dal Comune di Calcinato</div>
          </div>
        </div>` : `
        <button class="plus-cta-card" onclick="push('richiesta-plus', { attivita: ${JSON.stringify(a.nome).replace(/"/g,'&quot;')} })" style="margin:18px 0 0;width:100%">
          <div class="plus-cta-icon">${icon('badge', { size:26, sw:2.2 })}</div>
          <div class="plus-cta-body">
            <div class="plus-cta-title">È la tua attività?</div>
            <div class="plus-cta-sub">Passa a Plus: aggiungi foto, descrizione, orari dettagliati e ottieni il badge di verifica del Comune.</div>
          </div>
          ${icon('arrowR', { size:20, sw:2.2 })}
        </button>`}
      ${descHtml}
      <div style="margin-top:18px" class="row-group-inner">
        ${contattiHtml}
      </div>
      ${serviziHtml}
      <div class="article-actions">
        <button class="btn-primary">${icon('phone', { size:16, sw:2 })} Chiama</button>
        <button class="btn-dark">${icon('map', { size:16, sw:2 })} Indicazioni</button>
      </div>
    </div>
  `;
}

/* ─── MAPPA ────────────────────────────────────── */
function renderMappa() {
  const layers = [['tutto','Tutto'],['uffici','Uffici'],['scuole','Scuole'],['parchi','Parchi'],['sanita','Sanità']];
  const pins = [
    { x:135, y:160, c:'indigo', ic:'building' },
    { x:260, y:200, c:'orange', ic:'building' },
    { x:95,  y:360, c:'green',  ic:'tree' },
    { x:310, y:340, c:'red',    ic:'heart' },
    { x:200, y:420, c:'green',  ic:'tree' },
    { x:195, y:250, c:'indigo', ic:'building' },
  ];
  return `
    <div class="mappa-wrap">
      <div class="mappa-bg">
        <svg width="100%" height="100%" viewBox="0 0 400 600" preserveAspectRatio="none" style="position:absolute">
          <path d="M 0 120 Q 150 100 400 140" stroke="#C4CDDB" stroke-width="20" fill="none"/>
          <path d="M 0 300 L 400 280" stroke="#D4DBE8" stroke-width="14" fill="none"/>
          <path d="M 0 460 Q 200 440 400 480" stroke="#CCD5E2" stroke-width="18" fill="none"/>
          <path d="M 80 0 L 120 600" stroke="#D4DBE8" stroke-width="12" fill="none"/>
          <path d="M 240 0 Q 260 300 220 600" stroke="#C4CDDB" stroke-width="16" fill="none"/>
          <path d="M 340 0 L 320 600" stroke="#D4DBE8" stroke-width="10" fill="none"/>
          <rect x="160" y="330" width="80" height="110" rx="12" fill="#C8E0C6" opacity="0.8"/>
          <rect x="30" y="160" width="50" height="60" rx="8" fill="#C8E0C6" opacity="0.8"/>
        </svg>
        ${pins.map(p => `
          <div class="mappa-pin" style="left:${p.x}px;top:${p.y}px">
            <div class="mappa-pin-tile" style="background:var(--t-${p.c})">${icon(p.ic, { size:18, sw:2.2 })}</div>
            <div class="mappa-pin-arrow" style="background:var(--t-${p.c})"></div>
          </div>`).join('')}
      </div>
      <div class="mappa-chips">
        ${layers.map(([id, label]) => `
          <button class="mappa-chip ${state.mappaLayer===id?'active':''}" onclick="state.mappaLayer='${id}'; render()">${esc(label)}</button>
        `).join('')}
      </div>
      <div class="mappa-sheet">
        <div class="mappa-sheet-handle"></div>
        <div class="mappa-sheet-row">
          ${tile('building', 'indigo', 48, 14)}
          <div style="flex:1">
            <div class="mappa-sheet-title">Palazzo Comunale</div>
            <div class="mappa-sheet-sub">Piazza Aldo Moro, 1 · 320m</div>
          </div>
          <button style="padding:10px 16px;border-radius:12px;background:var(--ink);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;gap:6px">${icon('map', { size:14, sw:2 })} Vai</button>
        </div>
      </div>
    </div>
  `;
}

/* ─── UFFICI ───────────────────────────────────── */
function renderUffici() {
  const colors = ['indigo','blue','teal','purple','orange','green'];
  return `
    <div class="uffici-list" style="padding-top:16px">
      ${UFFICI.map((u, i) => {
        const color = colors[i % colors.length];
        const aperto = i % 2 === 0;
        return `
          <div class="ufficio-card">
            <div class="ufficio-top">
              ${tile('building', color, 48, 14)}
              <div style="flex:1">
                <div class="ufficio-name">${esc(u.nome)}</div>
                <div class="ufficio-addr">${esc(u.indirizzo)}</div>
              </div>
              <span class="${aperto ? 'badge-open' : 'badge-closed'}">${aperto ? 'Aperto' : 'Chiuso'}</span>
            </div>
            <div class="ufficio-info">
              <div class="ufficio-info-row">${icon('clock', { size:14, stroke:'var(--ink-mute)', sw:2 })} ${esc(u.orari)}</div>
              <div class="ufficio-info-row">${icon('phone', { size:14, stroke:'var(--ink-mute)', sw:2 })} ${esc(u.tel)}</div>
              <div class="ufficio-info-row">${icon('mail',  { size:14, stroke:'var(--ink-mute)', sw:2 })} ${esc(u.email)}</div>
            </div>
            <div class="ufficio-actions">
              <button class="btn-primary">${icon('calendar', { size:14, sw:2 })} Prenota</button>
              <button class="btn-secondary">${icon('phone', { size:14, sw:2 })} Chiama</button>
            </div>
          </div>`;
      }).join('')}
    </div>
  `;
}

/* ─── NOTIFICHE ────────────────────────────────── */
function renderNotifiche() {
  const gruppoOf = (n) => /oggi/i.test(n.data) ? 'Oggi' : /ieri/i.test(n.data) ? 'Ieri' : 'Precedenti';
  const raggruppate = NOTIFICHE.reduce((acc, n) => {
    const g = gruppoOf(n);
    (acc[g] = acc[g] || []).push(n);
    return acc;
  }, {});
  const iconMap = { avviso:'warning', rifiuti:'recycle', notizia:'newspaper', segnalazione:'megaphone' };
  const colorMap = { avviso:'orange', rifiuti:'green', notizia:'indigo', segnalazione:'pink' };
  const nonLette = NOTIFICHE.filter(n => !n.letto).length;
  return `
    <div style="padding:12px 20px 8px;font-size:13px;color:var(--ink-mute);font-weight:500">${nonLette} non lette</div>
    <div style="padding:0 20px 24px">
      ${Object.entries(raggruppate).map(([gruppo, items]) => `
        <div class="notif-section">
          <div class="notif-section-label">${esc(gruppo)}</div>
          <div class="notif-group">
            ${items.map(n => `
              <div class="notif-item">
                ${tile(iconMap[n.tipo] || 'info', colorMap[n.tipo] || 'blue', 40, 12)}
                <div style="flex:1;min-width:0">
                  <div class="notif-title ${!n.letto ? 'unread' : ''}">${esc(n.titolo)}</div>
                  <div class="notif-text">${esc(n.testo)}</div>
                  <div class="notif-date">${esc(n.data)}</div>
                </div>
                ${!n.letto ? '<div class="notif-dot"></div>' : ''}
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>
  `;
}

/* ─── PROFILO ──────────────────────────────────── */
function renderProfilo() {
  // Not logged in → show login/register form
  if (!state.currentUser) {
    if (state.loginMode === 'register') return renderRegister();
    return renderLogin();
  }
  // Logged as Comune admin → dashboard richieste
  if (state.currentUser.isComuneAdmin) return renderComuneAdminDashboard();
  // Logged as admin attività Plus → dashboard scheda
  if (state.currentUser.attivitaId !== undefined) return renderAdminScheda();
  // Logged as citizen → normal profile
  return renderCitizenProfile();
}

function renderComuneAdminDashboard() {
  const u = state.currentUser;
  const requests = getPlusRequests();
  const nuove = requests.filter(r => r.stato === 'nuova');
  const contattate = requests.filter(r => r.stato === 'contattata');
  const attivate = requests.filter(r => r.stato === 'attivata');

  const renderReq = (r) => {
    const date = new Date(r.data).toLocaleDateString('it-IT', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' });
    const actions = r.stato === 'nuova' ? `
      <div style="display:flex;gap:6px;margin-top:12px;flex-wrap:wrap">
        <button style="flex:1;padding:9px;border-radius:10px;background:var(--surface-2);color:var(--ink);font-size:12px;font-weight:700;min-width:100px" onclick="markContactata(${r.id})">Contattata</button>
        <button style="flex:1;padding:9px;border-radius:10px;background:var(--t-green);color:#fff;font-size:12px;font-weight:700;min-width:100px" onclick="approvePlusRequest(${r.id})">Attiva Plus</button>
        <button style="padding:9px 12px;border-radius:10px;background:transparent;color:var(--t-red);font-size:12px;font-weight:700" onclick="rejectPlusRequest(${r.id})">Rifiuta</button>
      </div>` : r.stato === 'contattata' ? `
      <div style="display:flex;gap:6px;margin-top:12px">
        <button style="flex:1;padding:9px;border-radius:10px;background:var(--t-green);color:#fff;font-size:12px;font-weight:700" onclick="approvePlusRequest(${r.id})">Attiva Plus (pagamento ricevuto)</button>
      </div>` : `
      <div style="margin-top:10px;padding:10px;border-radius:10px;background:#DCF5E8;font-size:12px;color:#006644;font-weight:600">
        ✓ Attivata — password: <code style="background:#fff;padding:2px 6px;border-radius:4px">${esc(r.password || '—')}</code>
      </div>`;
    return `
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:var(--shadow-sm);margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
          <div>
            <div style="font-size:15px;font-weight:800;color:var(--ink);letter-spacing:-0.2px">${esc(r.attivita)}</div>
            <div style="font-size:12px;color:var(--ink-mute);margin-top:2px;font-weight:500">${esc(r.nome)} · ${date}</div>
          </div>
          ${r.stato === 'nuova' ? pillHtml('avviso', 'Nuova') : r.stato === 'contattata' ? pillHtml('notizia', 'Contattata') : pillHtml('success', 'Attivata')}
        </div>
        <div style="font-size:13px;color:var(--ink-2);margin-top:8px;font-weight:500">
          <div>📧 ${esc(r.email)}</div>
          <div>📞 ${esc(r.tel)}</div>
          ${r.note ? `<div style="margin-top:6px;padding:8px 10px;background:var(--surface-2);border-radius:8px;font-style:italic">${esc(r.note)}</div>` : ''}
        </div>
        ${actions}
      </div>`;
  };

  const emptyMsg = `<div style="text-align:center;padding:30px 20px;color:var(--ink-mute);font-size:13px">Nessuna richiesta</div>`;

  return `
    <div style="padding:20px 20px 40px">
      <div style="background:linear-gradient(135deg, var(--primary) 0%, var(--primary-deep) 100%);border-radius:22px;padding:20px;color:#fff;margin-bottom:20px;display:flex;gap:14px;align-items:center">
        ${tile('building', 'ink', 48, 14)}
        <div style="flex:1">
          <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;opacity:0.8">Amministrazione</div>
          <div style="font-size:18px;font-weight:800;letter-spacing:-0.3px;margin-top:3px">${esc(u.nome)}</div>
          <div style="font-size:12px;opacity:0.8;margin-top:2px">${requests.length} richieste totali · ${nuove.length} nuove</div>
        </div>
      </div>

      <div class="section-label" style="padding:0 0 10px"><span class="title">Richieste nuove</span> ${nuove.length ? `<span class="pill pill-avviso">${nuove.length}</span>` : ''}</div>
      ${nuove.length ? nuove.map(renderReq).join('') : emptyMsg}

      ${contattate.length ? `
        <div class="section-label" style="padding:16px 0 10px"><span class="title">In attesa pagamento</span></div>
        ${contattate.map(renderReq).join('')}
      ` : ''}

      ${attivate.length ? `
        <div class="section-label" style="padding:16px 0 10px"><span class="title">Attivate</span></div>
        ${attivate.map(renderReq).join('')}
      ` : ''}

      <button style="width:100%;padding:14px;border-radius:14px;background:transparent;margin-top:20px;font-size:14px;font-weight:700;color:var(--t-red)" onclick="doLogout()">Esci</button>
    </div>
  `;
}

function renderRichiestaPlus() {
  const current = state.stack[state.stack.length - 1];
  const attivita = current.data?.attivita || '';
  return `
    <div style="padding:20px">
      <div style="background:linear-gradient(135deg, var(--t-yellow) 0%, var(--t-orange) 100%);border-radius:22px;padding:20px;color:#fff;margin-bottom:20px;position:relative;overflow:hidden">
        <div style="position:relative">
          <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;opacity:0.85">Scheda Plus</div>
          <div style="font-size:24px;font-weight:800;letter-spacing:-0.5px;margin-top:6px;line-height:1.15">Cosa ottieni con Plus</div>
          <ul style="font-size:14px;font-weight:500;margin-top:14px;padding-left:18px;line-height:1.7">
            <li>Gallery foto e descrizione estesa</li>
            <li>Orari dettagliati giorno per giorno</li>
            <li>Badge di verifica del Comune</li>
            <li>Eventi, offerte e social linkati</li>
            <li>Posizione in evidenza nei risultati</li>
          </ul>
        </div>
      </div>

      <div style="font-size:13.5px;color:var(--ink-2);line-height:1.6;margin-bottom:20px;font-weight:500">
        Compila il form per richiedere l'attivazione Plus. Il Comune ti contatterà per concordare il pagamento con le modalità comunali. Al termine riceverai le credenziali per gestire la scheda.
      </div>

      <div style="background:#fff;border-radius:18px;padding:16px;box-shadow:var(--shadow-sm)">
        <div class="form-field">
          <label class="form-label">Nome e cognome *</label>
          <input class="form-input" id="req-nome" type="text" placeholder="Il tuo nome">
        </div>
        <div class="form-field">
          <label class="form-label">Nome attività *</label>
          <input class="form-input" id="req-attivita" type="text" value="${esc(attivita)}" placeholder="Es. Ristorante Al Baratello">
        </div>
        <div class="form-field">
          <label class="form-label">Email *</label>
          <input class="form-input" id="req-email" type="email" placeholder="tu@attivita.it">
        </div>
        <div class="form-field">
          <label class="form-label">Telefono *</label>
          <input class="form-input" id="req-tel" type="tel" placeholder="030 1234567">
        </div>
        <div class="form-field" style="margin-bottom:0">
          <label class="form-label">Note (opzionale)</label>
          <textarea class="form-input" id="req-note" rows="3" placeholder="Informazioni aggiuntive..."></textarea>
        </div>
      </div>

      <button class="btn-login-dark" onclick="submitPlusRequest()" style="width:100%;margin-top:16px">Invia richiesta al Comune</button>
    </div>
  `;
}

function renderComuneAdmin() {
  return renderComuneAdminDashboard();
}

function renderLogin() {
  const err = state.loginError ? `<div style="background:#FEE4E6;color:#B91C1C;padding:10px 14px;border-radius:10px;font-size:13px;font-weight:600;margin-bottom:14px;text-align:center">${esc(state.loginError)}</div>` : '';
  return `
    <div class="profile-empty">
      <div class="profile-empty-head">
        ${stemma(72)}
        <div class="profile-empty-title">Accedi</div>
        <div class="profile-empty-sub">Entra nel tuo account per seguire le tue segnalazioni, salvare contenuti e ricevere avvisi personalizzati.</div>
      </div>
      <div style="padding:0 4px;flex:1">
        ${err}
        <div class="form-field">
          <label class="form-label">Email</label>
          <input class="form-input" id="login-email" type="email" autocomplete="email" placeholder="tu@esempio.it">
        </div>
        <div class="form-field">
          <label class="form-label">Password</label>
          <input class="form-input" id="login-pass" type="password" autocomplete="current-password" placeholder="La tua password">
        </div>
      </div>
      <div class="profile-empty-actions">
        <button class="btn-login-dark" onclick="doLogin()">Entra</button>
        <button class="btn-login-light" onclick="switchLoginMode('register')">Crea account</button>
        <div style="text-align:center;font-size:11px;color:var(--ink-mute);margin-top:10px;font-weight:500;line-height:1.5">
          Demo: <strong>marco@example.com</strong> / demo2026<br>
          Titolare attività Plus: <strong>baratello@calcinato.app</strong> / baratello2026
        </div>
      </div>
    </div>
  `;
}

function renderRegister() {
  const err = state.loginError ? `<div style="background:#FEE4E6;color:#B91C1C;padding:10px 14px;border-radius:10px;font-size:13px;font-weight:600;margin-bottom:14px;text-align:center">${esc(state.loginError)}</div>` : '';
  return `
    <div class="profile-empty">
      <div class="profile-empty-head">
        ${stemma(72)}
        <div class="profile-empty-title">Crea account</div>
        <div class="profile-empty-sub">Registrati per accedere a tutti i servizi dell'app.</div>
      </div>
      <div style="padding:0 4px;flex:1">
        ${err}
        <div class="form-field">
          <label class="form-label">Nome e cognome</label>
          <input class="form-input" id="reg-nome" type="text" placeholder="Mario Rossi">
        </div>
        <div class="form-field">
          <label class="form-label">Email</label>
          <input class="form-input" id="reg-email" type="email" autocomplete="email" placeholder="tu@esempio.it">
        </div>
        <div class="form-field">
          <label class="form-label">Password</label>
          <input class="form-input" id="reg-pass" type="password" autocomplete="new-password" placeholder="Minimo 6 caratteri">
        </div>
        <div class="form-field">
          <label class="form-label">Conferma password</label>
          <input class="form-input" id="reg-pass2" type="password" autocomplete="new-password" placeholder="Ripeti la password">
        </div>
      </div>
      <div class="profile-empty-actions">
        <button class="btn-login-dark" onclick="doRegister()">Crea account</button>
        <button class="btn-login-light" onclick="switchLoginMode('login')">Hai già un account? Accedi</button>
      </div>
    </div>
  `;
}

function renderCitizenProfile() {
  const u = state.currentUser;
  const initials = u.nome.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  return `
    <div style="padding-bottom:24px">
      <div class="profile-hero">
        <div class="profile-avatar">${esc(initials)}</div>
        <div class="profile-name">${esc(u.nome)}</div>
        <div class="profile-email">${esc(u.email)}</div>
      </div>
      <div style="padding:0 20px">
        <div class="row-group-inner">
          ${rowHtml({ icon:'megaphone', color:'orange', title:'Le mie segnalazioni', sub:'2 aperte · 5 risolte' })}
          ${rowHtml({ icon:'bookmark',  color:'purple', title:'Salvati',             sub:'3 articoli' })}
          ${rowHtml({ icon:'pin',       color:'teal',   title:'La mia zona',         sub:'Via Roma · Zona A', last:true })}
        </div>
        <div class="section-label"><span class="title">Preferenze</span></div>
        <div class="row-group-inner">
          ${rowHtml({ icon:'bell',     color:'red',    title:'Notifiche',    sub:'Personalizza gli avvisi' })}
          ${rowHtml({ icon:'lock',     color:'ink',    title:'Privacy',      sub:'Gestisci i dati' })}
          ${rowHtml({ icon:'settings', color:'indigo', title:'Impostazioni', sub:'Lingua, tema, accessibilità', last:true })}
        </div>
        <button style="width:100%;padding:14px;border-radius:14px;background:transparent;margin-top:20px;font-size:14px;font-weight:700;color:var(--t-red)" onclick="doLogout()">Esci</button>
      </div>
    </div>
  `;
}

function renderAdminScheda() {
  const u = state.currentUser;
  const a = ATTIVITA.find(x => x.id === u.attivitaId);
  if (!a) return '<div style="padding:40px;text-align:center;color:var(--ink-mute)">Attività non trovata</div>';
  const serviziStr = (a.servizi || []).join(', ');
  return `
    <div style="padding:20px 20px 40px">
      <div style="background:linear-gradient(135deg, var(--primary) 0%, var(--primary-deep) 100%);border-radius:22px;padding:20px;color:#fff;margin-bottom:20px;display:flex;gap:14px;align-items:center">
        ${tile('badge', 'whiteGlass', 48, 14).replace('var(--t-whiteGlass)', 'rgba(255,255,255,0.18)')}
        <div style="flex:1">
          <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;opacity:0.8">Area Titolare · Plus</div>
          <div style="font-size:18px;font-weight:800;letter-spacing:-0.3px;margin-top:3px">${esc(u.nome)}</div>
          <div style="font-size:12px;opacity:0.8;margin-top:2px">Gestisci la scheda di <strong>${esc(a.nome)}</strong></div>
        </div>
      </div>

      <div class="section-label" style="padding:0 0 10px"><span class="title">Informazioni base</span></div>
      <div style="background:#fff;border-radius:18px;padding:16px;box-shadow:var(--shadow-sm);margin-bottom:16px">
        <div class="form-field"><label class="form-label">Nome attività</label><input class="form-input" id="adm-nome" value="${esc(a.nome)}"></div>
        <div class="form-field"><label class="form-label">Indirizzo</label><input class="form-input" id="adm-indirizzo" value="${esc(a.indirizzo)}"></div>
        <div class="form-field"><label class="form-label">Telefono</label><input class="form-input" id="adm-tel" value="${esc(a.tel)}"></div>
        <div class="form-field"><label class="form-label">Orari</label><input class="form-input" id="adm-orari" value="${esc(a.orari)}"></div>
        <div class="form-field"><label class="form-label">Sito web</label><input class="form-input" id="adm-sito" value="${esc(a.sito || '')}"></div>
        <div class="form-field"><label class="form-label">Email</label><input class="form-input" id="adm-email" value="${esc(a.email || '')}"></div>
      </div>

      <div class="section-label" style="padding:0 0 10px"><span class="title">Social</span></div>
      <div style="background:#fff;border-radius:18px;padding:16px;box-shadow:var(--shadow-sm);margin-bottom:16px">
        <div class="form-field"><label class="form-label">Facebook URL</label><input class="form-input" id="adm-fb" value="${esc(a.facebook || '')}"></div>
        <div class="form-field"><label class="form-label">Instagram URL</label><input class="form-input" id="adm-ig" value="${esc(a.instagram || '')}"></div>
      </div>

      <div class="section-label" style="padding:0 0 10px"><span class="title">Scheda Plus</span></div>
      <div style="background:#fff;border-radius:18px;padding:16px;box-shadow:var(--shadow-sm);margin-bottom:20px">
        <div class="form-field">
          <label class="form-label">Descrizione estesa</label>
          <textarea class="form-input" id="adm-descrizione" rows="4" style="resize:vertical">${esc(a.descrizione || '')}</textarea>
        </div>
        <div class="form-field" style="margin-bottom:0">
          <label class="form-label">Servizi / Tag (separati da virgola)</label>
          <textarea class="form-input" id="adm-servizi" rows="2" style="resize:vertical" placeholder="es. Parcheggio, WiFi, Menu bambini">${esc(serviziStr)}</textarea>
        </div>
      </div>

      <button class="btn-login-dark" onclick="saveAttivitaEdits()" style="width:100%">Salva modifiche</button>
      <button class="btn-login-light" onclick="push('attivita-detail', { id: ${a.id} })" style="width:100%;margin-top:10px">Vedi la tua scheda</button>
      <button style="width:100%;padding:14px;border-radius:14px;background:transparent;margin-top:14px;font-size:14px;font-weight:700;color:var(--t-red)" onclick="doLogout()">Esci</button>
    </div>
  `;
}

/* ─── SEGNALAZIONI ─────────────────────────────── */
function renderSegnalazioni() {
  const statoPill = (s) => s==='in-lavorazione' ? pillHtml('notizia','In lavorazione')
                        : s==='risolta' ? pillHtml('success','Risolta')
                        : s==='aperta' ? pillHtml('avviso','Aperta')
                        : pillHtml('neutral', s);
  const categorie = [
    { icon:'road',    color:'orange', label:'Strade' },
    { icon:'trash',   color:'green',  label:'Rifiuti' },
    { icon:'bulb',    color:'yellow', label:'Illuminazione' },
    { icon:'tree',    color:'teal',   label:'Verde' },
    { icon:'paint',   color:'pink',   label:'Decoro' },
    { icon:'sign',    color:'blue',   label:'Segnaletica' },
  ];
  return `
    <div style="padding-bottom:24px;padding-top:12px">
      <div class="segn-cta">
        <button class="segn-cta-card">
          <div class="segn-cta-icon">${icon('plus', { size:28, sw:2.2 })}</div>
          <div class="segn-cta-body">
            <div class="segn-cta-title">Nuova segnalazione</div>
            <div class="segn-cta-sub">Invia foto e posizione in 30 secondi</div>
          </div>
          ${icon('arrowR', { size:20, sw:2.2 })}
        </button>
      </div>

      <div class="section-label"><span class="title">Cosa vuoi segnalare?</span></div>
      <div class="segn-cats">
        ${categorie.map(c => `
          <button class="segn-cat">
            ${tile(c.icon, c.color, 44, 14)}
            <span class="segn-cat-label">${esc(c.label)}</span>
          </button>`).join('')}
      </div>

      <div class="segn-tabs-wrap">
        <div class="segn-tabs">
          ${[['mie','Le mie'],['zona','Nella zona']].map(([k,l]) => `
            <button class="segn-tab ${state.segnTab===k?'active':''}" onclick="state.segnTab='${k}'; render()">${esc(l)}</button>
          `).join('')}
        </div>
      </div>

      <div class="segn-list">
        ${SEGNALAZIONI_UTENTE.map(s => `
          <div class="segn-card">
            <div class="segn-thumb"><div class="photo-ph stone" style="height:56px"></div></div>
            <div class="segn-body">
              <div class="segn-top">
                <div class="segn-tipo">${esc(s.tipo)}</div>
                ${statoPill(s.stato)}
              </div>
              <div class="segn-addr">${icon('pin', { size:11, sw:2 })} ${esc(s.indirizzo)}</div>
              <div class="segn-id">#${s.id} · ${esc(s.data)}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

/* ─── RIFIUTI ──────────────────────────────────── */
function renderRifiuti() {
  const giorni = RIFIUTI_CAL.slice(0, 7);
  const prossimo = giorni.find(g => g.tipo) || giorni[0];
  const info = prossimo.tipo ? RIFIUTI_TIPI[prossimo.tipo] : null;
  return `
    <div style="padding-bottom:24px;padding-top:12px">
      ${info ? `
        <div class="rifiuti-hero-wrap">
          <div class="rifiuti-hero" style="background:${info.colore}">
            <div class="over">Prossima raccolta · ${prossimo.giorno} ${prossimo.num} ${prossimo.mese}</div>
            <div class="title">${esc(info.nome)}</div>
            <div class="note">Esporre il contenitore entro le 6:00</div>
          </div>
        </div>` : ''}

      <div class="section-label"><span class="title">Prossimi 7 giorni</span></div>
      <div class="rifiuti-cal">
        ${giorni.map(g => {
          const i = g.tipo ? RIFIUTI_TIPI[g.tipo] : null;
          return `
            <div class="rifiuti-day">
              <div class="rifiuti-day-date">
                <div class="rifiuti-day-name">${esc(g.giorno)}</div>
                <div class="rifiuti-day-num">${g.num}</div>
              </div>
              <div class="rifiuti-day-body">
                ${i ? `
                  <div class="rifiuti-day-title">${esc(i.nome)}</div>
                  <div class="rifiuti-day-note">Esporre entro le 6:00</div>
                ` : `<div class="rifiuti-day-none">Nessuna raccolta</div>`}
              </div>
              ${i ? `<div class="rifiuti-day-icon" style="background:${i.colore}">${icon(i.icon, { size:18, sw:2.2 })}</div>` : ''}
            </div>`;
        }).join('')}
      </div>

      <div class="section-label"><span class="title">Guida differenziata</span><button class="action">Tutti i rifiuti</button></div>
      <div class="rifiuti-guide">
        ${Object.entries(RIFIUTI_TIPI).slice(0, 4).map(([k, t]) => `
          <div class="rifiuti-guide-card">
            <div class="rifiuti-guide-icon" style="background:${t.colore}">${icon(t.icon, { size:20, sw:2.2 })}</div>
            <div class="rifiuti-guide-title">${esc(t.nome)}</div>
            <div class="rifiuti-guide-sub">Contenitore dedicato</div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   MAIN RENDER
   ═══════════════════════════════════════════════════ */
function render() {
  persist();
  const current = state.stack[state.stack.length - 1];
  const cfg = SCREEN_CONFIG[current.screen] || SCREEN_CONFIG.home;
  const isRoot = state.stack.length === 1 && ROOT_SCREENS.includes(current.screen);

  // Weather pill (reused in all topbars)
  const weatherHtml = state.weather
    ? `<div class="topbar-weather"><span class="icon">${weatherIcon(state.weather.code)}</span><span class="temp">${state.weather.temp}°</span></div>`
    : `<div class="topbar-weather"><span class="icon">☀️</span><span class="temp">—</span></div>`;

  // Render header
  let headerHtml = '';
  const headerless = typeof cfg.headerless === 'function' ? cfg.headerless() : cfg.headerless;
  const hasBack = state.stack.length > 1;

  if (headerless) {
    // Floating back button over hero
    headerHtml = `<button class="backbtn-floating" onclick="pop()">${icon('chevronL', { size:20, sw:2 })}</button>`;
  } else if (cfg.fullHeader) {
    // Brand header (all root screens) — blue gradient background
    const ext = cfg.homeHero ? '' : '<div class="brand-ext"></div>';
    headerHtml = `
      <div class="topbar brand">
        <button style="background:transparent;padding:0" onclick="resetTo('profilo'); state.tab='profilo'; persist(); render()">${stemma(44, true)}</button>
        <div class="topbar-text">
          <div class="title">${esc(cfg.title)}</div>
          <div class="sub">${esc(cfg.sub)}</div>
        </div>
        ${weatherHtml}
        <button class="topbar-btn" onclick="push('notifiche')">
          ${icon('bell', { size:18, sw:2 })}
          <span class="badge-dot"></span>
        </button>
      </div>
      ${ext}`;
  } else {
    // Unified light top bar — with back button if deep, stemma if root
    headerHtml = `
      <div class="topbar">
        ${hasBack
          ? `<button class="topbar-btn" onclick="pop()">${icon('chevronL', { size:20, sw:2 })}</button>`
          : stemma(44)
        }
        <div class="topbar-text">
          <div class="title">${esc(cfg.title)}</div>
          <div class="sub">${esc(cfg.sub)}</div>
        </div>
        ${weatherHtml}
        <button class="topbar-btn" onclick="push('notifiche')">
          ${icon('bell', { size:18, sw:2 })}
          <span class="badge-dot"></span>
        </button>
      </div>`;
  }

  // Render screen body
  let bodyHtml = '';
  switch (current.screen) {
    case 'home':              bodyHtml = renderHome(); break;
    case 'news':              bodyHtml = renderNewsList(); break;
    case 'article':           bodyHtml = renderArticle(); break;
    case 'servizi':           bodyHtml = renderServizi(); break;
    case 'attivita':          bodyHtml = renderAttivita(); break;
    case 'attivita-detail':   bodyHtml = renderAttivitaDetail(); break;
    case 'mappa':             bodyHtml = renderMappa(); break;
    case 'uffici':            bodyHtml = renderUffici(); break;
    case 'notifiche':         bodyHtml = renderNotifiche(); break;
    case 'profilo':           bodyHtml = renderProfilo(); break;
    case 'segnalazioni':      bodyHtml = renderSegnalazioni(); break;
    case 'rifiuti':           bodyHtml = renderRifiuti(); break;
    case 'richiesta-plus':    bodyHtml = renderRichiestaPlus(); break;
    case 'comune-admin':      bodyHtml = renderComuneAdmin(); break;
    default:                  bodyHtml = renderHome();
  }

  const scrollHtml = cfg.fullHeight
    ? `<div class="scroll" style="display:flex;flex-direction:column">${bodyHtml}</div>`
    : `<div class="scroll">${bodyHtml}</div>`;

  document.getElementById('screen-host').innerHTML = `${headerHtml}${scrollHtml}`;

  // Render tab bar — always visible except on headerless deep screens
  const tabbar = document.getElementById('tabbar');
  if (headerless) {
    tabbar.style.display = 'none';
  } else {
    tabbar.style.display = 'flex';
    const items = [
      { id:'home',     icon:'home',      label:'Home' },
      { id:'news',     icon:'newspaper', label:'Novità' },
      { id:'servizi',  icon:'grid',      label:'Servizi' },
      { id:'attivita', icon:'store',     label:'Attività' },
      { id:'profilo',  icon:'user',      label:'Profilo' },
    ];
    tabbar.innerHTML = items.map(it => {
      const on = state.tab === it.id && state.stack.length === 1;
      return `
        <button class="tab ${on?'active':''}" onclick="goTab('${it.id}')">
          <div class="tab-icon-wrap">${icon(it.icon, { size:22, sw: on?2.4:1.8, fill: 'none' })}</div>
          <span class="tab-label">${esc(it.label)}</span>
        </button>`;
    }).join('');
  }

  // Scroll to top on screen change
  const scrollEl = document.querySelector('.scroll');
  if (scrollEl) scrollEl.scrollTop = 0;
}

/* ─── INIT ─────────────────────────────────────── */
render();
loadWeather();
