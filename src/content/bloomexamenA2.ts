import type { Question } from '../types/content'

/**
 * Bloom-examen — tweede golf, sectie A. Nieuwe invalshoeken t.o.v.
 * bloomexamenA.ts (geen overlap in specifieke feiten). Origineel materiaal.
 */
export const bloomExamenA2: Record<string, Question[]> = {
  'A.1': [
    {
      id: 'A.1.bloom2.mc', toetstermCode: 'A.1.3', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat is de "eigendomsgrens" van een bouwperceel?',
      options: ['De juridische grens die aangeeft tot waar de grond aan de eigenaar toebehoort', 'De rooilijn waarlangs de gevel moet staan', 'De grens van het bouwvlak', 'De grens tussen twee gemeenten'],
      correctIndex: 0,
      explanation: 'De eigendomsgrens is de kadastrale/juridische grens van het perceel; het bouwvlak en de rooilijn zijn aparte, planologische begrippen.',
    },
    {
      id: 'A.1.bloom2.multi', toetstermCode: 'A.1.4', type: 'multi', bloom: 'Begrip',
      prompt: 'Welke posten horen tot de directe bouwkosten in een begroting?',
      options: ['Materiaalkosten', 'Arbeidskosten', 'Architecthonorarium', 'Kosten van onderaanneming'],
      correctIndices: [0, 1, 3],
      explanation: 'Materiaal, arbeid en onderaanneming zijn directe bouwkosten; het architecthonorarium is een bijkomende kostenpost.',
    },
    {
      id: 'A.1.bloom2.invul', toetstermCode: 'A.1.4', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: extra werk dat tijdens de bouw wordt toegevoegd aan de oorspronkelijke opdracht, valt onder ______werk.',
      acceptableAnswers: ['meer', 'meerwerk'],
      explanation: 'Meerwerk is werk dat bovenop de oorspronkelijke aanneemsom wordt toegevoegd; het tegenovergestelde is minderwerk.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.bloom2.mc', toetstermCode: 'A.2.1.4', type: 'mc', bloom: 'Kennis',
      prompt: 'Op welk soort tekening kun je het duidelijkst zien of een wand dragend of constructief is?',
      options: ['De constructietekening', 'De verkooptekening', 'Het schetsontwerp', 'De situatietekening'],
      correctIndex: 0,
      explanation: 'De constructietekening toont expliciet welke wanden dragend zijn; verkooptekeningen zijn vaak vereenvoudigd voor kopers.',
    },
    {
      id: 'A.2.1.bloom2.multi', toetstermCode: 'A.2.1.3', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke tekeningen horen bij de voorbereidingsfase van een bouwproject (vóór de uitvoering)?',
      options: ['Bestektekening', 'Werktekening', 'Revisietekening', 'Schetsontwerp'],
      correctIndices: [0, 1, 3],
      explanation: 'Bestektekening, werktekening en schetsontwerp horen bij ontwerp/voorbereiding. De revisietekening komt pas ná de uitvoering (as-built).',
    },
    {
      id: 'A.2.1.bloom2.invul', toetstermCode: 'A.2.1.6', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de verzekering die tijdens de bouw schade aan het bouwwerk dekt, wordt vaak aangeduid met de afkorting ______.',
      acceptableAnswers: ['car'],
      explanation: 'De CAR-verzekering (Construction All Risk) dekt schade tijdens de bouw en staat vermeld in het administratieve deel van het bestek.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.bloom2.mc', toetstermCode: 'A.2.2.7', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke architectuurstroming (vanaf ca. 1970-1980) reageert op de kille Nieuwe Zakelijkheid met kleur, decoratie en historische verwijzingen?',
      options: ['Postmodernisme', 'Bauhaus', 'Structuralisme', 'Brutalisme'],
      correctIndex: 0,
      explanation: 'Het postmodernisme voegt weer kleur, ornamentiek en historische citaten toe, als tegenreactie op de sobere Nieuwe Zakelijkheid.',
    },
    {
      id: 'A.2.2.bloom2.multi', toetstermCode: 'A.2.2.9', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning heeft enkel glas, houten kozijnen zonder spouwmuur en een massieve steensmuur. Welke conclusies zijn gegrond?',
      options: ['De woning stamt zeer waarschijnlijk van vóór ca. 1920', 'Er is nog geen sprake van moderne spouwisolatie', 'De woning is beslist na 2000 gebouwd', 'Dit bouwjaar-signaal is betrouwbaarder dan alleen naar de dakvorm te kijken'],
      correctIndices: [0, 1, 3],
      explanation: 'Massieve muren zonder spouw wijzen op een vroege bouwperiode (vóór de spouwmuur gangbaar werd). Materiaaldetails zijn een betrouwbaardere periode-indicator dan alleen de dakvorm.',
    },
    {
      id: 'A.2.2.bloom2.invul', toetstermCode: 'A.2.2.6', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de sobere, functionele architectuurstroming die veel glas, staal en beton gebruikt en "vorm volgt functie" als motto heeft, heet het ______.',
      acceptableAnswers: ['functionalisme'],
      explanation: 'Het Functionalisme (Nieuwe Bouwen) stelt functionaliteit boven decoratie.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.bloom2.mc', toetstermCode: 'A.3.5', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat regelt het Bbl onder meer voor bestaande bouw bij verbouwing?',
      options: ['Minimale eisen aan bijvoorbeeld ventilatie en brandveiligheid bij verbouw', 'De verkoopprijs van de woning', 'De hoogte van de overdrachtsbelasting', 'De rentestand van hypotheken'],
      correctIndex: 0,
      explanation: 'Het Bbl stelt (verbouw)eisen aan bouwtechnische aspecten zoals ventilatie en brandveiligheid, ook bij bestaande bouw.',
    },
    {
      id: 'A.3.bloom2.multi', toetstermCode: 'A.3.7', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke van de volgende ingrepen zijn vaak vergunningsvrij, mits aan de voorwaarden wordt voldaan?',
      options: ['Een dakkapel op het achterdakvlak', 'Een niet-dragende scheidingswand binnen verwijderen', 'Een dragende gevelmuur doorbreken voor een nieuwe pui', 'Een aanbouw aan de achterzijde binnen de vergunningsvrije maten'],
      correctIndices: [0, 1, 3],
      explanation: 'Dakkapellen op het achterdakvlak, niet-dragende wanden en kleine aanbouwen kunnen vergunningsvrij zijn; het doorbreken van een dragende gevel is dat vrijwel nooit.',
    },
    {
      id: 'A.3.bloom2.invul', toetstermCode: 'A.3.3', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de wet die de ruimtelijke regels voor de fysieke leefomgeving bundelt en het omgevingsplan invoerde, heet de Omgevings______.',
      acceptableAnswers: ['wet'],
      explanation: 'De Omgevingswet bundelt regelgeving voor de fysieke leefomgeving en introduceerde het omgevingsplan.',
    },
  ],
}
