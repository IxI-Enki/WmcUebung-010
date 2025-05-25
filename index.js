import express from 'express';

const app = express();

// Globale Middleware
app.use(express.json()); // JSON-Verarbeitung
app.use(express.static('public')); // öffentliche Dateien bereitstellen

// Logger-Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// Async Middleware mit künstlicher Verzögerung
app.use(async (req, res, next) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('✅ Async Middleware abgeschlossen');
  next();
});

// Testroute für Fehler
app.use('/crash-test', async (req, res, next) => {
  throw new Error('💥 Simulierter Fehler für /crash-test');
});

// Startseite
app.get('/', (req, res) => {
  res.send('🚀 Willkommen bei Jans Express-Projekt!');
});

// Eigene Route: Hobbys
app.get('/hobbys', (req, res) => {
  res.send('🎮 Jan liebt Zocken und Programmieren.');
});

// Info-Seite mit lokaler Middleware
app.get('/info', (req, res, next) => {
  console.log('📘 Info-Seite wurde betreten');
  next();
}, (req, res) => {
  res.send('Diese Express-App wurde von Jan entwickelt.');
});

// Kontaktseite
app.get('/kontakt', (req, res) => {
  res.send('📫 Kontakt: Du erreichst Jan normal nicht!');
});

// Dynamischer Benutzer
app.get('/mitglied/:id', (req, res) => {
  const mitgliedId = req.params.id;
  res.send(`🧑‍💻 Mitglied-ID: ${mitgliedId}`);
});

// Dynamisches Projekt
app.get('/projekt/:titel', (req, res) => {
  const titel = req.params.titel;
  res.send(`📁 Projekt "${titel}" ist registriert und bereit zum Deployment.`);
});

// Produktseite
app.get('/shop/:kategorie/:artikelId', (req, res) => {
  const { kategorie, artikelId } = req.params;
  res.send(`🛍 Kategorie: ${kategorie}<br>🆔 Artikel-Nr.: ${artikelId}`);
});

// 404-Fallback
app.use((req, res) => {
  res.status(404).send('🚫 Diese Seite existiert leider nicht (404).');
});

// Serverstart
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Jans Express-App läuft auf Port ${PORT}`);
});
