# Portfolio React + TypeScript

Portfolio moderno costruito con React, TypeScript e Vite.

## Avvio in locale

1. Installa dipendenze:

```bash
npm install
```

2. Avvia sviluppo:

```bash
npm run dev
```

3. Build produzione:

```bash
npm run build
```

## Deploy su GitHub Pages

Il progetto e gia configurato con GitHub Actions in `.github/workflows/deploy.yml`.

1. Fai push su `main`.
2. Su GitHub vai in `Settings > Pages`.
3. In `Build and deployment`, seleziona `Source: GitHub Actions`.
4. Attendi il workflow `Deploy Portfolio to GitHub Pages`.

La configurazione Vite usa automaticamente il nome repository come base path durante la build su GitHub, quindi funziona anche con project pages tipo `https://utente.github.io/nome-repo/`.

## Personalizzazione rapida

- Contenuti portfolio: `src/App.tsx`
- Stile e tema: `src/index.css` e `src/App.css`
- Config build/pages: `vite.config.ts`
