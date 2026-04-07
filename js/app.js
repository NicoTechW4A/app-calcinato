/* ===== App Router — Comune di Calcinato ===== */

const App = (() => {
  const content = document.getElementById('app-content');
  const headerText = document.getElementById('header-text');
  const btnBack = document.getElementById('btn-back');
  const tabBar = document.getElementById('tab-bar');
  let currentScreen = null;
  let history = [];

  // Screen registry
  const screens = {};

  function register(name, renderFn) {
    screens[name] = renderFn;
  }

  async function navigate(name, params = {}, pushHistory = true) {
    if (!screens[name]) {
      console.warn(`Screen "${name}" not registered`);
      return;
    }

    // Push current screen to history (for back navigation)
    if (pushHistory && currentScreen) {
      history.push({ screen: currentScreen.name, params: currentScreen.params });
    }

    currentScreen = { name, params };

    // Update header
    const titles = {
      home: 'Comune di Calcinato',
      news: 'Novit\u00e0',
      'news-detail': 'Articolo',
      attivita: 'Attivit\u00e0 Locali',
      'scheda-plus': 'Scheda Attivit\u00e0',
      contatti: 'Contatti & Uffici',
      info: 'Info Comune',
    };
    headerText.textContent = titles[name] || 'Comune di Calcinato';

    // Show/hide back button
    const isRoot = ['home', 'news', 'attivita', 'contatti', 'info'].includes(name);
    btnBack.style.display = isRoot ? 'none' : 'flex';

    // Update active tab
    const tabName = getTabForScreen(name);
    tabBar.querySelectorAll('.tab-item').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.screen === tabName);
    });

    // Render screen
    content.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    content.scrollTop = 0;

    try {
      const html = await screens[name](params);
      content.innerHTML = `<div class="screen-enter">${html}</div>`;

      // Run post-render hooks
      if (typeof window[`onRender_${name.replace('-', '_')}`] === 'function') {
        window[`onRender_${name.replace('-', '_')}`](params);
      }
    } catch (err) {
      console.error(`Error rendering screen "${name}":`, err);
      content.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">&#9888;&#65039;</div>
          <div class="empty-state-text">Errore nel caricamento.<br>Riprova pi&ugrave; tardi.</div>
        </div>`;
    }
  }

  function back() {
    if (history.length > 0) {
      const prev = history.pop();
      navigate(prev.screen, prev.params, false);
    }
  }

  function getTabForScreen(name) {
    if (name === 'news-detail') return 'news';
    if (name === 'scheda-plus') return 'attivita';
    return name;
  }

  // Tab bar click
  tabBar.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab-item');
    if (!tab) return;
    const screen = tab.dataset.screen;
    if (screen) {
      history = []; // Reset history on tab tap
      navigate(screen);
    }
  });

  // Back button
  btnBack.addEventListener('click', back);

  return { register, navigate, back };
})();

/* ===== Register all screens after DOM ready ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Register screens (each file adds its own via App.register)
  registerHomeScreen();
  registerNewsScreen();
  registerAttivitaScreen();
  registerContattiScreen();
  registerInfoScreen();

  // Boot
  App.navigate('home');
});

/* =========================================
   HOME SCREEN
   ========================================= */
function registerHomeScreen() {
  App.register('home', async () => {
    const news = await NewsData.fetch();
    const topNews = news.slice(0, 5);

    const newsCards = topNews.map(n => `
      <div class="card home-news-card" onclick="App.navigate('news-detail', { id: '${n.id}' })">
        <img class="card-img" src="${n.image}" alt="" onerror="this.style.background='var(--primary-light)'; this.src='';">
        <div class="card-body">
          <div class="news-title">${n.title}</div>
          <div class="news-date">${n.date}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="home-welcome">
        <h1 class="section-title">Benvenuto</h1>
        <p class="home-welcome-text">Resta aggiornato sulle novit&agrave; del Comune di Calcinato, scopri le attivit&agrave; locali e trova i contatti degli uffici comunali.</p>
      </div>

      <!-- Quick actions -->
      <div class="home-section">
        <div class="quick-actions">
          <button class="quick-action" onclick="App.navigate('news')">
            <div class="quick-action-icon" style="background:#E8F0FE;color:#0055A5;">&#128240;</div>
            <span class="quick-action-label">Novit&agrave;</span>
          </button>
          <button class="quick-action" onclick="App.navigate('attivita')">
            <div class="quick-action-icon" style="background:#FFF3E0;color:#FF8C00;">&#127979;</div>
            <span class="quick-action-label">Attivit&agrave;</span>
          </button>
          <button class="quick-action" onclick="App.navigate('contatti')">
            <div class="quick-action-icon" style="background:#E8F5E9;color:#28A745;">&#128222;</div>
            <span class="quick-action-label">Contatti</span>
          </button>
          <button class="quick-action" onclick="App.navigate('info')">
            <div class="quick-action-icon" style="background:#F3E5F5;color:#8E24AA;">&#127970;</div>
            <span class="quick-action-label">Comune</span>
          </button>
        </div>
      </div>

      <!-- Latest news -->
      <div class="home-section">
        <div class="home-section-header">
          <h2 class="section-title">Ultime novit&agrave;</h2>
          <a class="home-section-link" onclick="App.navigate('news')">Vedi tutte &rarr;</a>
        </div>
        <div class="home-news-scroll">${newsCards}</div>
      </div>
    `;
  });
}

/* =========================================
   NEWS SCREEN + DETAIL
   ========================================= */
const NewsData = (() => {
  // Demo data — will be replaced by Municipium API fetch
  const demoNews = [
    {
      id: '1',
      title: 'Apertura iscrizioni Centri Estivi 2026',
      category: 'Notizia',
      date: '4 Aprile 2026',
      image: '',
      excerpt: 'Sono aperte le iscrizioni per i centri estivi comunali dedicati ai bambini e ragazzi dai 3 ai 14 anni.',
      body: '<p>Il Comune di Calcinato comunica che sono aperte le iscrizioni ai Centri Estivi 2026, dedicati ai bambini e ragazzi dai 3 ai 14 anni residenti nel territorio comunale.</p><p>Le attivit&agrave; si svolgeranno dal 14 giugno al 31 luglio 2026 presso le strutture comunali. Le iscrizioni potranno essere effettuate online tramite il portale del Comune entro il 30 aprile 2026.</p><p>Per informazioni: Ufficio Servizi Sociali, tel. 030 9989811.</p>'
    },
    {
      id: '2',
      title: 'Lavori di asfaltatura Via Roma: modifiche alla viabilit\u00e0',
      category: 'Avviso',
      date: '3 Aprile 2026',
      image: '',
      excerpt: 'A partire da luned\u00ec 7 aprile inizieranno i lavori di rifacimento del manto stradale in Via Roma.',
      body: '<p>Si comunica che a partire da luned&igrave; 7 aprile 2026 inizieranno i lavori di rifacimento del manto stradale in Via Roma, nel tratto compreso tra Piazza Municipio e Via Garibaldi.</p><p>Durante i lavori, previsti per una durata di circa 10 giorni, sar&agrave; istituito il senso unico alternato. Si consiglia di utilizzare percorsi alternativi.</p>'
    },
    {
      id: '3',
      title: 'Consiglio Comunale: seduta del 10 aprile 2026',
      category: 'Comunicato',
      date: '2 Aprile 2026',
      image: '',
      excerpt: '\u00c8 convocata la seduta ordinaria del Consiglio Comunale per gioved\u00ec 10 aprile 2026 alle ore 20:30.',
      body: '<p>&Egrave; convocata la seduta ordinaria del Consiglio Comunale per gioved&igrave; 10 aprile 2026 alle ore 20:30 presso la Sala Consiliare del Municipio.</p><p>Ordine del giorno:<br>1. Approvazione verbali seduta precedente<br>2. Variazione di bilancio<br>3. Regolamento utilizzo impianti sportivi<br>4. Interrogazioni e mozioni<br>5. Varie ed eventuali</p><p>La seduta &egrave; aperta al pubblico.</p>'
    },
    {
      id: '4',
      title: 'Raccolta differenziata: nuovo calendario 2026',
      category: 'Notizia',
      date: '1 Aprile 2026',
      image: '',
      excerpt: 'Disponibile il nuovo calendario della raccolta differenziata valido da aprile 2026.',
      body: '<p>Si informa la cittadinanza che &egrave; disponibile il nuovo calendario della raccolta differenziata, in vigore dal 1&deg; aprile 2026.</p><p>Il calendario &egrave; scaricabile dal sito del Comune nella sezione Ambiente, oppure &egrave; possibile ritirarne una copia cartacea presso l\'URP.</p><p>Si ricorda che l\'indifferenziato viene raccolto il marted&igrave;, la plastica il mercoled&igrave;, carta e cartone il gioved&igrave;, l\'organico il luned&igrave; e venerd&igrave;.</p>'
    },
    {
      id: '5',
      title: 'Bando contributi affitto 2026',
      category: 'Avviso',
      date: '30 Marzo 2026',
      image: '',
      excerpt: 'Pubblicato il bando per l\'erogazione di contributi a sostegno delle spese di locazione anno 2026.',
      body: '<p>Il Comune di Calcinato ha pubblicato il bando per l\'erogazione di contributi a sostegno delle spese di locazione per l\'anno 2026, destinato ai nuclei familiari con reddito ISEE inferiore a 15.000 euro.</p><p>Le domande potranno essere presentate dal 1&deg; al 30 aprile 2026 presso l\'Ufficio Servizi Sociali o tramite PEC.</p>'
    },
    {
      id: '6',
      title: 'Festa della Primavera: 12-13 aprile in Piazza Municipio',
      category: 'Notizia',
      date: '28 Marzo 2026',
      image: '',
      excerpt: 'Torna la tradizionale Festa della Primavera con mercatino, musica dal vivo e attivit\u00e0 per bambini.',
      body: '<p>Torna la tradizionale Festa della Primavera il 12 e 13 aprile 2026 in Piazza Municipio!</p><p>Il programma prevede mercatino artigianale, stand gastronomici, musica dal vivo e attivit&agrave; ludiche per bambini. Ingresso libero.</p><p>Sabato 12 aprile: dalle 10:00 alle 22:00<br>Domenica 13 aprile: dalle 10:00 alle 20:00</p>'
    }
  ];

  async function fetch() {
    // TODO: Replace with real Municipium API call
    // try {
    //   const res = await window.fetch('https://calcinato-api.municipiumapp.it/...');
    //   return await res.json();
    // } catch (err) {
    //   console.warn('Fallback to demo data:', err);
    // }
    return demoNews;
  }

  function getById(id) {
    return demoNews.find(n => n.id === id);
  }

  return { fetch, getById };
})();

function registerNewsScreen() {
  // News list
  App.register('news', async () => {
    const news = await NewsData.fetch();
    const categories = ['Tutte', ...new Set(news.map(n => n.category))];

    const pills = categories.map((c, i) => `
      <button class="pill ${i === 0 ? 'active' : ''}" data-filter="${c}">${c}</button>
    `).join('');

    const cards = news.map(n => `
      <div class="card news-card" onclick="App.navigate('news-detail', { id: '${n.id}' })" data-category="${n.category}">
        <img class="news-thumb" src="${n.image}" alt="" onerror="this.style.background='var(--primary-light)'; this.removeAttribute('src');">
        <div class="card-body">
          <div class="news-category">${n.category}</div>
          <div class="news-title">${n.title}</div>
          <div class="news-date">${n.date}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="filter-bar" id="news-filters">${pills}</div>
      <div class="news-list" id="news-list">${cards}</div>
    `;
  });

  window.onRender_news = () => {
    const filters = document.getElementById('news-filters');
    if (!filters) return;
    filters.addEventListener('click', (e) => {
      const pill = e.target.closest('.pill');
      if (!pill) return;
      filters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      document.querySelectorAll('#news-list .news-card').forEach(card => {
        card.style.display = (filter === 'Tutte' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  };

  // News detail
  App.register('news-detail', async (params) => {
    const article = NewsData.getById(params.id);
    if (!article) return '<div class="empty-state"><div class="empty-state-text">Articolo non trovato.</div></div>';

    return `
      <div class="article-title">${article.title}</div>
      <div class="article-meta">
        <span>${article.category}</span>
        <span>${article.date}</span>
      </div>
      <div class="article-body">${article.body}</div>
    `;
  });
}

/* =========================================
   ATTIVITA SCREEN + SCHEDA PLUS
   ========================================= */
const AttivitaData = (() => {
  const categoryIcons = {
    'Ristorazione': '\uD83C\uDF7D\uFE0F',
    'Alimentari': '\uD83D\uDED2',
    'Servizi': '\uD83D\uDD27',
    'Sport': '\u26BD',
    'Salute': '\uD83C\uDFE5',
    'Commercio': '\uD83D\uDECD\uFE0F',
    'Artigianato': '\uD83D\uDD28',
    'Istruzione': '\uD83C\uDF93',
  };

  const demoAttivita = [
    { id: '1', nome: 'Ristorante Da Mario', categoria: 'Ristorazione', indirizzo: 'Via Roma 15, Calcinato', telefono: '030 9636001', email: 'info@damario.it', sito_web: 'https://www.damario.it', is_plus: true },
    { id: '2', nome: 'Panificio Bresciano', categoria: 'Alimentari', indirizzo: 'Via Garibaldi 22, Calcinato', telefono: '030 9636002', email: '', sito_web: '', is_plus: false },
    { id: '3', nome: 'Elettricista Rossi', categoria: 'Servizi', indirizzo: 'Via Mazzini 8, Calcinato', telefono: '030 9636003', email: 'rossi@email.it', sito_web: '', is_plus: false },
    { id: '4', nome: 'Palestra FitLife', categoria: 'Sport', indirizzo: 'Via dello Sport 3, Calcinato', telefono: '030 9636004', email: 'info@fitlife.it', sito_web: 'https://www.fitlife.it', is_plus: true },
    { id: '5', nome: 'Farmacia Comunale', categoria: 'Salute', indirizzo: 'Piazza Municipio 1, Calcinato', telefono: '030 9636005', email: '', sito_web: '', is_plus: false },
    { id: '6', nome: 'Ferramenta Bianchi', categoria: 'Commercio', indirizzo: 'Via Verdi 12, Calcinato', telefono: '030 9636006', email: '', sito_web: '', is_plus: false },
    { id: '7', nome: 'Falegnameria Artigiana', categoria: 'Artigianato', indirizzo: 'Via dell\'Artigianato 5, Calcinato', telefono: '030 9636007', email: 'info@falegnameria.it', sito_web: '', is_plus: false },
    { id: '8', nome: 'Pizzeria Il Vulcano', categoria: 'Ristorazione', indirizzo: 'Via Dante 20, Calcinato', telefono: '030 9636008', email: '', sito_web: '', is_plus: true },
  ];

  const demoPlus = {
    '1': {
      descrizione_estesa: 'Ristorante a conduzione familiare dal 1985, specializzato in cucina bresciana e piatti di pesce. Ampio parcheggio e sala per eventi fino a 80 persone.',
      orari: { 'Luned\u00ec': 'Chiuso', 'Marted\u00ec': '12:00-14:30 / 19:00-22:30', 'Mercoled\u00ec': '12:00-14:30 / 19:00-22:30', 'Gioved\u00ec': '12:00-14:30 / 19:00-22:30', 'Venerd\u00ec': '12:00-14:30 / 19:00-23:00', 'Sabato': '12:00-14:30 / 19:00-23:00', 'Domenica': '12:00-15:00' },
      servizi: ['Parcheggio', 'WiFi gratuito', 'Sala eventi', 'Menu bambini', 'Piatti senza glutine'],
      video_url: '',
      gallery_urls: [],
    },
    '4': {
      descrizione_estesa: 'Centro fitness completo con sala pesi, corsi di gruppo, piscina coperta e area wellness. Personal trainer qualificati e programmi personalizzati.',
      orari: { 'Luned\u00ec': '06:30-22:00', 'Marted\u00ec': '06:30-22:00', 'Mercoled\u00ec': '06:30-22:00', 'Gioved\u00ec': '06:30-22:00', 'Venerd\u00ec': '06:30-21:00', 'Sabato': '08:00-18:00', 'Domenica': '09:00-13:00' },
      servizi: ['Sala pesi', 'Piscina', 'Corsi di gruppo', 'Personal trainer', 'Sauna', 'Spogliatoi'],
      video_url: '',
      gallery_urls: [],
    },
    '8': {
      descrizione_estesa: 'Pizzeria napoletana con forno a legna. Impasto a lunga lievitazione (72 ore) e ingredienti selezionati. Servizio di asporto e consegna a domicilio.',
      orari: { 'Luned\u00ec': 'Chiuso', 'Marted\u00ec': '18:30-23:00', 'Mercoled\u00ec': '18:30-23:00', 'Gioved\u00ec': '18:30-23:00', 'Venerd\u00ec': '18:30-23:30', 'Sabato': '12:00-14:30 / 18:30-23:30', 'Domenica': '18:30-22:30' },
      servizi: ['Forno a legna', 'Asporto', 'Consegna a domicilio', 'Menu senza glutine', 'Dehors estivo'],
      video_url: '',
      gallery_urls: [],
    }
  };

  async function fetch() {
    // TODO: Replace with Supabase query
    return demoAttivita;
  }

  function getById(id) {
    return demoAttivita.find(a => a.id === id);
  }

  function getPlusById(id) {
    return demoPlus[id] || null;
  }

  function getIcon(categoria) {
    return categoryIcons[categoria] || '\uD83C\uDFE2';
  }

  return { fetch, getById, getPlusById, getIcon };
})();

function registerAttivitaScreen() {
  App.register('attivita', async () => {
    const attivita = await AttivitaData.fetch();
    const categories = ['Tutte', ...new Set(attivita.map(a => a.categoria))];

    const pills = categories.map((c, i) => `
      <button class="pill ${i === 0 ? 'active' : ''}" data-filter="${c}">${c}</button>
    `).join('');

    const cards = attivita.map(a => `
      <div class="card attivita-card" onclick="App.navigate('scheda-plus', { id: '${a.id}' })" data-category="${a.categoria}">
        <div class="attivita-icon">${AttivitaData.getIcon(a.categoria)}</div>
        <div class="attivita-info">
          <div class="attivita-name">${a.nome} ${a.is_plus ? '<span class="badge-plus">PLUS</span>' : ''}</div>
          <div class="attivita-cat">${a.categoria} &middot; ${a.indirizzo}</div>
        </div>
        <div class="attivita-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
      </div>
    `).join('');

    return `
      <div class="filter-bar" id="attivita-filters">${pills}</div>
      <div class="attivita-list" id="attivita-list">${cards}</div>
    `;
  });

  window.onRender_attivita = () => {
    const filters = document.getElementById('attivita-filters');
    if (!filters) return;
    filters.addEventListener('click', (e) => {
      const pill = e.target.closest('.pill');
      if (!pill) return;
      filters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      document.querySelectorAll('#attivita-list .attivita-card').forEach(card => {
        card.style.display = (filter === 'Tutte' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  };

  // Scheda Plus / detail
  App.register('scheda-plus', async (params) => {
    const att = AttivitaData.getById(params.id);
    if (!att) return '<div class="empty-state"><div class="empty-state-text">Attivit&agrave; non trovata.</div></div>';

    const plus = AttivitaData.getPlusById(params.id);

    let html = `
      <div class="plus-header">
        <div>
          <div class="plus-name">${att.nome}</div>
          <div style="color:var(--text-secondary);font-size:14px;margin-top:4px;">${att.categoria} &middot; ${att.indirizzo}</div>
        </div>
        ${att.is_plus ? '<span class="badge-plus">PLUS</span>' : ''}
      </div>
    `;

    if (plus) {
      html += `
        <div class="plus-section">
          <p style="font-size:15px;line-height:1.6;color:var(--text-secondary);">${plus.descrizione_estesa}</p>
        </div>
      `;

      // Orari
      if (plus.orari) {
        const orariRows = Object.entries(plus.orari).map(([day, hours]) => `
          <div class="plus-orari-row">
            <span class="plus-orari-day">${day}</span>
            <span>${hours}</span>
          </div>
        `).join('');
        html += `
          <div class="plus-section">
            <div class="plus-section-title">Orari di apertura</div>
            ${orariRows}
          </div>
        `;
      }

      // Servizi
      if (plus.servizi && plus.servizi.length) {
        const servizi = plus.servizi.map(s => `<span class="plus-servizio">${s}</span>`).join('');
        html += `
          <div class="plus-section">
            <div class="plus-section-title">Servizi</div>
            <div class="plus-servizi">${servizi}</div>
          </div>
        `;
      }
    }

    // CTA buttons
    html += '<div class="plus-cta">';
    if (att.telefono) {
      html += `<a href="tel:${att.telefono}" class="btn-cta btn-cta-primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        Chiama ${att.telefono}
      </a>`;
    }
    if (att.email) {
      html += `<a href="mailto:${att.email}" class="btn-cta btn-cta-secondary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        Invia email
      </a>`;
    }
    if (att.sito_web) {
      html += `<a href="${att.sito_web}" target="_blank" class="btn-cta btn-cta-secondary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        Visita sito web
      </a>`;
    }
    html += '</div>';

    return html;
  });
}

/* =========================================
   CONTATTI SCREEN
   ========================================= */
function registerContattiScreen() {
  const uffici = [
    { nome: 'Municipio — Centralino', telefono: '030 9989811', email: 'protocollo@comune.calcinato.bs.it', indirizzo: 'Piazza Municipio, 1 — 25011 Calcinato (BS)' },
    { nome: 'Ufficio Anagrafe', telefono: '030 9989830', email: 'anagrafe@comune.calcinato.bs.it', indirizzo: '' },
    { nome: 'Ufficio Tributi', telefono: '030 9989840', email: 'tributi@comune.calcinato.bs.it', indirizzo: '' },
    { nome: 'Ufficio Tecnico — Urbanistica', telefono: '030 9989850', email: 'urbanistica@comune.calcinato.bs.it', indirizzo: '' },
    { nome: 'Ufficio Servizi Sociali', telefono: '030 9989860', email: 'servizisociali@comune.calcinato.bs.it', indirizzo: '' },
    { nome: 'Polizia Locale', telefono: '030 9989870', email: 'polizialocale@comune.calcinato.bs.it', indirizzo: '' },
    { nome: 'Ufficio Ragioneria', telefono: '030 9989820', email: 'ragioneria@comune.calcinato.bs.it', indirizzo: '' },
    { nome: 'URP — Ufficio Relazioni con il Pubblico', telefono: '030 9989811', email: 'urp@comune.calcinato.bs.it', indirizzo: '' },
  ];

  App.register('contatti', async () => {
    const cards = uffici.map(u => `
      <div class="card contatto-card">
        <div class="contatto-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
        <div class="contatto-info">
          <div class="contatto-name">${u.nome}</div>
          <div class="contatto-detail">
            ${u.telefono ? `<a href="tel:${u.telefono}">${u.telefono}</a><br>` : ''}
            ${u.email ? `<a href="mailto:${u.email}">${u.email}</a><br>` : ''}
            ${u.indirizzo ? `${u.indirizzo}` : ''}
          </div>
        </div>
      </div>
    `).join('');

    return `
      <div class="section-title">Uffici Comunali</div>
      <div class="section-subtitle">Contatti e recapiti degli uffici del Comune di Calcinato</div>
      <div class="info-list">${cards}</div>
    `;
  });
}

/* =========================================
   INFO SCREEN
   ========================================= */
function registerInfoScreen() {
  App.register('info', async () => {
    return `
      <div class="info-header">
        <img class="info-stemma" src="assets/stemma-calcinato.png" alt="Stemma" onerror="this.style.display='none'">
        <div class="info-comune-name">Comune di Calcinato</div>
        <div class="info-comune-prov">Provincia di Brescia — Lombardia</div>
      </div>

      <div class="info-list">
        <div class="card info-row">
          <div class="info-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div class="info-row-text">
            <div class="info-row-label">Indirizzo</div>
            <div class="info-row-value">Piazza Municipio, 1 — 25011 Calcinato (BS)</div>
          </div>
        </div>

        <div class="card info-row">
          <div class="info-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <div class="info-row-text">
            <div class="info-row-label">Centralino</div>
            <div class="info-row-value"><a href="tel:0309989811">030 9989811</a></div>
          </div>
        </div>

        <div class="card info-row">
          <div class="info-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div class="info-row-text">
            <div class="info-row-label">PEC</div>
            <div class="info-row-value"><a href="mailto:protocollo@pec.comune.calcinato.bs.it">protocollo@pec.comune.calcinato.bs.it</a></div>
          </div>
        </div>

        <div class="card info-row">
          <div class="info-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </div>
          <div class="info-row-text">
            <div class="info-row-label">Sito web</div>
            <div class="info-row-value"><a href="https://www.comune.calcinato.bs.it" target="_blank">www.comune.calcinato.bs.it</a></div>
          </div>
        </div>

        <div class="card info-row">
          <div class="info-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div class="info-row-text">
            <div class="info-row-label">Orari apertura al pubblico</div>
            <div class="info-row-value">Lun-Ven 8:30-12:30 / Mar-Gio anche 14:30-17:00</div>
          </div>
        </div>

        <div class="card info-row">
          <div class="info-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="info-row-text">
            <div class="info-row-label">Popolazione</div>
            <div class="info-row-value">~ 13.000 abitanti</div>
          </div>
        </div>

        <div class="card info-row">
          <div class="info-row-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          </div>
          <div class="info-row-text">
            <div class="info-row-label">Codice Fiscale / P.IVA</div>
            <div class="info-row-value">00550560176</div>
          </div>
        </div>
      </div>

      <div style="text-align:center;padding:24px 0 8px;font-size:12px;color:var(--text-light);">
        App sviluppata da Premier Srls &times; World4All<br>
        Versione 0.1.0-demo
      </div>
    `;
  });
}
