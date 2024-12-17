# React react-form

```bash
# clono la cartella da github

npm create vite@latest

# alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

# apro il .gitignore e aggiungo package-lock.json

 # installo gli altri pacchetti che mi servono (ad esempio bootstrap:)
 npm install bootstrap
 
 # cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
 # cancello i file che non mi servono

 #se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

 # comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
```

```bash
*Esercizio React Blog Form*
Creare un semplice form con un campo input per il titolo di un articolo del blog.
Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.
*BONUS*
 Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore)
```