# BKExamen — Bouwkunde BT1/BT2 (SVMNIVO Makelaar Wonen)

Een oefenexamen-app in de stijl van de echte **SVMNIVO/TestVision-proeftoets** voor
**Bouwkunde BT1 + BT2** (opleiding Makelaar Wonen). De vragen zijn gegroepeerd in vier blokken —
**A. Algemeen**, **B. Constructieve Opbouw**, **C. Afwerking en Installaties** en
**D. Kwaliteitsbeoordeling** — en dekken het hele kwalificatiedossier.

**Live:** https://jordiezoe.github.io/BKExamen/

## Functies
- Kies **BT1**, **BT2** of de **BT1-2 eindsimulatie**, kort (± 25) of vol (± 50 vragen).
- Elke sessie een nieuwe trekking: één vraag per toetsterm uit een gerandomiseerde pool.
- Meerkeuze (radio) én meervoudige keuze (checkboxes, met partiële punten).
- Examen-omgeving met blokintroducties, timer, vraagoverzicht en markeren.
- **Resultaat in proeftoets-stijl:** score + geslaagd/gezakt (cesuur 68%), deelscore per blok,
  en een **foutenoverzicht met de onderwerpen die meer aandacht nodig hebben**. Elke vraag is
  uit te klappen voor het juiste antwoord en de uitleg.
- PWA: installeerbaar en offline bruikbaar op telefoon, tablet en desktop.

## Stack
React + TypeScript + Vite + Tailwind CSS + vite-plugin-pwa.

## Ontwikkelen
```bash
npm install
npm run dev       # http://localhost:5173/BKExamen/
npm run build     # productie-build naar dist/
npm run preview
```

## Deploy
Elke push naar `main` bouwt en publiceert automatisch naar GitHub Pages
(zie `.github/workflows/deploy.yml`).

## Herkomst van de content
De vragenbank en de afbeeldingen zijn afkomstig uit het bijbehorende lesmateriaal en zijn
aangevuld met examen-stijl vragen voor dun bezette toetstermen. Dit is **oefenmateriaal** en
geen officiële SVMNIVO-toets; het SVMNIVO-woordmerk in de kop is nagemaakt voor de look-and-feel.
