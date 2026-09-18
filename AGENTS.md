# AGENTS.md — contesto per le review automatiche

App del Comune di Calcinato: PWA installabile, impacchettata come app
nativa Android/iOS tramite Capacitor.

## Stack e vincoli

**Vanilla, senza bundler e senza framework.** Il browser carica
direttamente i sorgenti: niente build step sul JavaScript, niente
transpilazione, niente `import`/`export` fra moduli.

- `index.html` — unico entry point, 57 righe
- `js/app.js` — l'intera applicazione, ~1600 righe
- `css/style.css` — tutti gli stili
- `sw.js` — service worker per l'uso offline
- `capacitor.config.json` — configurazione build native

`js/app.js` è volutamente un file solo. Non proporne lo spezzettamento in
moduli: senza bundler richiederebbe `<script type="module">` e un
refactor dell'intera app, che non è nei piani. Le funzioni sono globali
perché vengono richiamate dagli `onclick` nell'HTML generato: è la
conseguenza di questa scelta, non una svista.

## Build e deploy

`scripts/build.sh` copia in `dist/` i soli file serviti in produzione
(`dist/` è generato e in `.gitignore`).

- **Web**: push su `main` → Netlify costruisce e pubblica in produzione
- **Native**: `npm run sync` — lo script `presync` costruisce `dist/`
  prima di `cap sync`, perché `webDir` punta a `dist/`

## Stato: prototipo funzionante, non ancora in produzione reale

Questo è il punto più importante per una review. Le scelte qui sotto sono
**deliberate e note**, non difetti da segnalare a ogni giro:

- **Dati hardcoded.** `NEWS`, `ATTIVITA`, `UFFICI`, `NOTIFICHE`,
  `RIFIUTI_CAL`, `SEGNALAZIONI_UTENTE` sono costanti in cima ad `app.js`.
  Sostituiranno un backend, per ora popolano le schermate.
- **Autenticazione finta.** `SEED_USERS` contiene password in chiaro; il
  login confronta stringhe e salva l'utente in `localStorage`. È una demo
  navigabile, non un sistema di accessi. Non segnalare l'assenza di
  hashing, di sessioni o di controlli lato server: non c'è un lato
  server.
- **Stato in `localStorage`.** Utenti, richieste Plus e preferenze vivono
  lì. Nessuna persistenza remota.

Quando queste parti diventeranno reali, questo file verrà aggiornato.

## Cosa invece è utile segnalare

- Logica sbagliata nel codice modificato: condizioni invertite, casi
  limite non gestiti, errori negli `if` di filtro e ordinamento
- Riferimenti a file, percorsi, id o chiavi che non esistono
- Rotture della navigazione a stack (`push`/`pop`/`resetTo`/`goTab`):
  ogni azione deve chiudersi con `render()`
- Errori nella gestione di `localStorage`: scritture senza `try/catch`,
  JSON malformato, chiavi incoerenti
- Problemi nella chiamata meteo a open-meteo (`app.js:472`), unica
  dipendenza esterna a runtime: errori di rete non gestiti
- Regressioni nella build: file nuovi non copiati da `build.sh`, risorse
  citate nell'HTML ma assenti da `dist/`
- Rotture del service worker: risorse in cache non aggiornate dopo un
  cambio di `css/style.css` o `js/app.js`

## Punti aperti già noti

Non serve rilevarli di nuovo:

- `package.json` espone `import:attivita` → `scripts/import-attivita.js`,
  file che **non esiste** nel repo (la dipendenza `xlsx` è lì per quello)
- `@supabase/supabase-js` è fra le dipendenze e `.env.example` cita
  `SUPABASE_URL`/`SUPABASE_ANON_KEY`, ma **nessuna riga di `app.js` usa
  Supabase**: integrazione prevista, non ancora iniziata
- `screens/` è una cartella vuota
- Nessun test automatico: è la lacuna principale del progetto
