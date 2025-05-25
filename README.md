# Protocol <sub><sub> by Jan Ritt </sub></sub>  

## WMC Übung 10 - Express-Projekt 
## [Hier](https://ixi-enki.github.io/WmcUebung-010/public/) kann das Project **LIVE** getestet werden.

### Beschreibung
Dieses Projekt entstand im Kontext der WMC-Aufgabe.  
Das Ziel bestand darin, ein Express-Testskript eigenständig zu entwickeln und individuell zu erweitern.

### Funktionen

- Eigene Seiten wie `/hobbys`, `/kontakt`, `/info`
- Dynamische Routen mit Parametern: `/mitglied/:id`, `/projekt/:titel`, `/shop/:kategorie/:artikelId`
- Globale Middleware mit Logging und künstlicher Verzögerung (`async`)
- Lokale Middleware speziell für einzelne Routen (z. B. `/info`)
- Fehlerbehandlung über eine Testroute (`/crash-test`)
- 404-Seite für nicht vorhandene Pfade
- Statische HTML-Dateien aus dem `public/`-Ordner

<img src="img/.png">
