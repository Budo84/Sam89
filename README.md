# Winter Cup 2026 – Sam 89

App web (PWA) per calendario, classifica, presenze e formazioni.

## Pubblicare su GitHub Pages
1. Crea un repository su GitHub (es. `winter-cup`) e carica **tutti** i file di questa cartella nella radice.
2. Settings → Pages → Source: "Deploy from a branch" → branch `main`, cartella `/ (root)` → Save.
3. Dopo 1-2 minuti l'app è su `https://<tuo-utente>.github.io/winter-cup/`.
4. Da telefono: apri il link → "Aggiungi a Home" per installarla.

## Note
- I dati (risultati, rosa, presenze, formazioni) sono salvati sul dispositivo in uso (localStorage).
  Usa Rosa → Backup dati per esportare/importare tra dispositivi.
- Per aggiornare l'app basta ricaricare i file nel repository.

## Risposte dei genitori
Vedi `SETUP_FIREBASE.md` (database Firebase gratuito) e `database.rules.json`.
La pagina per i genitori è `genitori.html` (si apre solo con il link personale).
