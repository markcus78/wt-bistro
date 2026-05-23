# WT Bistro — sito

Landing page del **WT Bistro**, il bar di [Wellness Town](https://wellnesstown.it) (Roma EUR).

🌐 **Live**: https://bistro.wellnesstown.it

## Cos'è

Landing one-page che racconta il cambio di direzione del WT Bistro:
cibo onesto e artigianale, menu organizzato sui 4 momenti del cliente (mattino · pranzo · post-allenamento · aperitivo), e il programma **Allunga il tuo abbonamento** — ogni 10 € spesi al Bistro regalano 1 giorno di palestra in più agli iscritti WT.

## Stack

- Vite 5 + React 18 + TypeScript
- TailwindCSS v3 + shadcn/ui
- Hosting: GitHub Pages (deploy automatico via GitHub Actions)

## Comandi

```bash
npm install     # install dependencies
npm run dev     # dev server su http://localhost:8080
npm run build   # build di produzione in dist/
npm run preview # serve il dist/ localmente
```

## Struttura

- `src/pages/Index.tsx` — landing page (homepage)
- `src/components/landing/` — sezioni della landing
  - `Hero.tsx` — hero con brand, payoff, 2 valori, due foto
  - `Allunga.tsx` — programma loyalty in evidenza
  - `Manifesto.tsx` — il cambio di direzione, 2 frasi
  - `QuattroMomenti.tsx` — card per Mattino · Pranzo · Post-allenamento · Aperitivo
  - `Menu.tsx` — menu completo in accordion espandibile
  - `Valori.tsx` — i 5 valori del Bistro
  - `DoveQuando.tsx` — indirizzo, orari per fascia, mappa Google
  - `Footer.tsx` — footer
- `public/` — asset statici (foto piatti, logo WT, favicon, CNAME, 404.html)

## Deploy

Push sul branch `main` → GitHub Actions builda → deploy su GitHub Pages → live in ~1-2 minuti.

Workflow: `.github/workflows/deploy.yml`.

## Dominio

- **Dominio custom**: `bistro.wellnesstown.it`
- **DNS**: gestito su Register.it (CNAME `bistro → markcus78.github.io`)
- **HTTPS**: gestito automaticamente da GitHub Pages (Let's Encrypt)
