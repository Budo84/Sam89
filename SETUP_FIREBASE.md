# Collegare Firebase (una volta sola, ~5 minuti)

1. Vai su https://console.firebase.google.com e accedi con il tuo account Google.
2. **Aggiungi progetto** → nome a piacere (es. `winter-cup-sam89`) → puoi disattivare Google Analytics → Crea.
3. **Authentication** → Inizia → scheda *Metodo di accesso* → abilita **Email/password**.
   Poi scheda *Utenti* → **Aggiungi utente**: inserisci una tua email e una password (sono le credenziali "allenatore").
4. **Realtime Database** (menu Build) → Crea database → scegli la regione Europa (Belgio) → "Avvia in modalità **bloccata**".
5. Nella scheda **Regole** cancella tutto, incolla il contenuto di `database.rules.json` e premi **Pubblica**.
6. Annota due dati:
   - **Database URL**: in cima alla scheda *Dati* (es. `https://winter-cup-sam89-default-rtdb.europe-west1.firebasedatabase.app`).
   - **Web API Key**: Impostazioni progetto (ingranaggio) → Generali → *Chiave API web*.
7. Nell'app: scheda **Rosa** → sezione "Presenze dei genitori": inserisci URL, API key, email e password → *Salva e verifica*.
8. Premi **Pubblica partite e bambini**, poi dai a ogni famiglia il suo link personale (pulsante WhatsApp).

## Come funziona
- Ogni bambino ha un link con un codice casuale: chi ha il link vede solo il nome di quel bambino e le partite.
- I genitori scrivono solo la propria risposta (Ci sarà / Non ci sarà). Solo tu, con email e password, puoi leggere tutte le risposte.
- Nella pagina di ogni partita vedi le risposte e puoi segnare presenti chi ha risposto "Ci sarà". Le presenze vere restano quelle che segni tu.
- Email, password e API key restano salvate solo sul tuo dispositivo.
