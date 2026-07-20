import type { Question } from '../types/content'

/**
 * Bloom-examen — "fouten"-ronde, sectie B. Origineel geschreven oefenvragen
 * over de ONDERWERPEN waarop bij het echte SVMNIVO-oefenexamen fouten
 * werden gemaakt (non-ferro metalen, isolatieplaten herkennen, functie van
 * loodslabben). Geen letterlijke overname van de officiële examenvraag,
 * opties of feedbacktekst — alleen het onderliggende concept is gebruikt.
 */
export const bloomExamenFoutenB: Record<string, Question[]> = {
  'B.8': [
    {
      id: 'B.8.fix.mc', toetstermCode: 'B.8.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Voor een dakgoot in een agressieve, vochtige kustomgeving wordt een metaal gezocht dat van nature goed tegen roest bestand is, zonder extra beschermlaag. Welk metaal past hier het beste bij?',
      options: ['Zink', 'Constructiestaal zonder verzinking', 'Gietijzer zonder coating', 'Onbehandeld walsstaal'],
      correctIndex: 0,
      explanation: 'Zink is een non-ferro metaal dat van nature een goede roestbestendigheid heeft; staal en gietijzer zijn ferrometalen en roesten zonder bescherming juist snel.',
    },
    {
      id: 'B.8.fix.multi', toetstermCode: 'B.8.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke van de volgende metalen zijn non-ferro metalen die van nature goed bestand zijn tegen roest?',
      options: ['Aluminium', 'Zink', 'Koper', 'Staal'],
      correctIndices: [0, 1, 2],
      explanation: 'Aluminium, zink en koper zijn non-ferro metalen met een van nature goede roestbestendigheid; staal is een ferrometaal en roest juist wél zonder bescherming.',
    },
    {
      id: 'B.8.fix.invul', toetstermCode: 'B.8.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: metalen die ijzer bevatten en daardoor gevoelig zijn voor roest, zoals staal, worden ______metalen genoemd.',
      acceptableAnswers: ['ferro'],
      explanation: 'Ferrometalen bevatten ijzer en zijn roestgevoelig; non-ferrometalen (aluminium, zink, koper, lood) bevatten geen ijzer en zijn dat van nature veel minder.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.fix.mc', toetstermCode: 'B.13.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij de aansluiting van een schoorsteen op het dakvlak wordt een loodslab toegepast. Wat is de belangrijkste functie hiervan?',
      options: [
        'Het waterdicht afvoeren van regenwater bij de aansluiting, zodat er geen vocht in de constructie dringt',
        'Het verhogen van de draagkracht van het metselwerk ter plaatse',
        'Het opvangen van spanningen tussen de schoorsteen en het dakvlak',
        'Het isoleren van de schoorsteen tegen warmteverlies',
      ],
      correctIndex: 0,
      explanation: 'Loodslabben zijn primair een waterkerende voorziening: ze leiden regenwater af bij een kwetsbare aansluiting en voorkomen zo vochtindringing. Ze hebben geen constructieve (dragende) of isolerende functie.',
    },
    {
      id: 'B.13.fix.multi', toetstermCode: 'B.13.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke uitspraken over loodslabben bij dakaansluitingen zijn juist?',
      options: [
        'Hun belangrijkste functie is waterkering', 'Ze worden vaak toegepast bij de aansluiting van een schoorsteen, dakkapel of gevel op het dakvlak', 'Ze vergroten de draagkracht van de onderliggende constructie', 'Lood is goed vervormbaar, wat het geschikt maakt om overgangen soepel af te dichten',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Loodslabben dichten kwetsbare overgangen waterdicht af dankzij de goede vervormbaarheid van lood; ze hebben geen enkele constructieve, dragende functie.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.fix.mc', toetstermCode: 'B.16.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Op een bouwplaats liggen witte isolatieplaten op de grond, opgebouwd uit kleine, samengeperste bolletjes/parels die je aan de rand van de plaat kunt zien. Om welk isolatiemateriaal gaat het hier het meest waarschijnlijk?',
      options: ['EPS (geëxpandeerd polystyreen)', 'PIR (polyisocyanuraat)', 'Steenwol', 'Glaswol'],
      correctIndex: 0,
      explanation: 'De korrelige, "parelachtige" structuur is kenmerkend voor EPS (piepschuim): het bestaat uit samengesmolten polystyreenkorrels, in tegenstelling tot de gladde, harde schuimstructuur van PIR of de vezelstructuur van steen-/glaswol.',
    },
    {
      id: 'B.16.fix.multi', toetstermCode: 'B.16.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke visuele kenmerken helpen om isolatiematerialen op een bouwplaats van elkaar te onderscheiden?',
      options: [
        'EPS heeft een zichtbaar korrelige, "parelachtige" structuur',
        'Steenwol en glaswol hebben een vezelachtige, wattenstructuur',
        'PIR/PUR-platen hebben doorgaans een gladde, harde schuimstructuur met een folie- of glasvlieslaag',
        'Alle isolatiematerialen zijn visueel volstrekt identiek en alleen chemisch te onderscheiden',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Elk isolatiemateriaal heeft een herkenbare structuur: EPS korrelig, minerale wol vezelig, PIR/PUR glad hard schuim — vaak met een afdeklaag.',
    },
  ],
}
