import type { Question } from '../types/content'

/**
 * Bloom-examen — sectie D (Kwaliteitsbeoordeling, onderhoud en beheer).
 * Zie bloomexamenA.ts voor de opzet. Origineel materiaal, geen bestaande
 * examenvragen.
 */
export const bloomExamenD: Record<string, Question[]> = {
  'D.1': [
    {
      id: 'D.1.bloom.mc', toetstermCode: 'D.1.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke norm wordt gebruikt om de bouwkundige conditie van gebouwonderdelen objectief te scoren (1 t/m 6)?',
      options: ['NEN 2767', 'NEN 2580', 'NEN 1010', 'NEN 1006'],
      correctIndex: 0,
      explanation: 'NEN 2767 (conditiemeting) scoort van 1 (uitstekend) tot 6 (zeer slecht). NEN 2580 gaat over oppervlaktes.',
    },
    {
      id: 'D.1.bloom.multi', toetstermCode: 'D.1.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een VvE plant het buitenschilderwerk elke zes jaar vooraf in om houtrot te voorkomen. Welke uitspraken zijn juist?',
      options: ['Dit is planmatig (preventief) onderhoud', 'Dit onderhoud hoort thuis in een MJOP', 'Dit is correctief onderhoud, want er wordt al vooraf ingegrepen', 'Dit voorkomt duurdere, latere herstelkosten'],
      correctIndices: [0, 1, 3],
      explanation: 'Vooraf gepland onderhoud om gebreken te voorkomen is planmatig/preventief, hoort in een MJOP en voorkomt hogere kosten later. Correctief onderhoud volgt juist ná een gebrek.',
    },
    {
      id: 'D.1.bloom.match', toetstermCode: 'D.1.4', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke onderhoudsvorm aan zijn omschrijving.',
      pairs: [
        { left: 'Planmatig (preventief) onderhoud', right: 'Vooraf gepland om gebreken te voorkomen' },
        { left: 'Correctief onderhoud', right: 'Herstel nadat een gebrek is opgetreden' },
        { left: 'Mutatieonderhoud', right: 'Uitgevoerd bij wisseling van huurder' },
      ],
      explanation: 'Deze drie onderhoudsvormen verschillen in timing en aanleiding.',
    },
    {
      id: 'D.1.bloom.invul', toetstermCode: 'D.1.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: een plan dat onderhoud en kosten voor een gebouw meerdere jaren vooruit plant, heet een ______.',
      acceptableAnswers: ['mjop', 'meerjarenonderhoudsplan'],
      explanation: 'Een MJOP (meerjarenonderhoudsplan) plant onderhoud en kosten per bouwdeel vooruit.',
    },
    {
      id: 'D.1.bloom.open', toetstermCode: 'D.1.2', type: 'open', bloom: 'Toepassen',
      prompt: 'Een bouwdeel krijgt in een NEN 2767-conditiemeting score 5. Leg uit wat dit betekent voor de planning in het MJOP en waarom het cijfer richting geeft aan de urgentie.',
      acceptableAnswers: [
        'De NEN 2767-schaal loopt van 1 (uitstekend, nieuwstaat) tot 6 (zeer slecht). Score 5 betekent een slechte conditie, dicht bij het ergste niveau. In het MJOP wordt dit bouwdeel daarom met hoge urgentie ingepland voor herstel of vervanging op korte termijn, in plaats van pas over meerdere jaren — hoe hoger de score, hoe eerder actie nodig is om verdere achteruitgang en hogere kosten te voorkomen.',
      ],
      explanation: 'Kernpunt: een hogere NEN 2767-score betekent een slechtere conditie en dus hogere onderhoudsurgentie.',
    },
  ],
  'D.2': [
    {
      id: 'D.2.bloom.mc', toetstermCode: 'D.2.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Bij een woningopname zie je afbladderende verf, zacht hout onderin de kozijnen en open verbindingen. Wat is de meest gegronde conclusie?',
      options: ['Achterstallig schilder-/houtwerk met beginnende houtrot', 'Een verzakte fundering', 'Onvoldoende isolerend glas', 'Een niet-vergunde uitbouw'],
      correctIndex: 0,
      explanation: 'Deze signalen wijzen op achterstallig schilder-/houtwerk met houtrot, geen funderings- of vergunningskwestie.',
    },
    {
      id: 'D.2.bloom.multi', toetstermCode: 'D.2.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Je ziet diagonale, trapsgewijze scheuren door steen én voeg, breder wordend naar boven. Welke conclusies zijn gegrond?',
      options: ['Dit wijst op zetting/verzakking van (een deel van) de fundering', 'Nader constructief onderzoek is aan te raden', 'Dit is normale krimp van vers metselwerk zonder gevolgen', 'Het scheurpatroon is een puur esthetisch mankement'],
      correctIndices: [0, 1],
      explanation: 'Diagonale, trapsgewijze scheuren door steen en voeg zijn een constructief signaal van zetting, geen onschuldige krimp.',
    },
    {
      id: 'D.2.bloom.match', toetstermCode: 'D.2.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk gebrek aan het bouwdeel waar je het zou beoordelen.',
      pairs: [
        { left: 'Houtrot onderin het kozijn', right: 'Kozijnen' },
        { left: 'Roeststrepen en afgespat beton', right: 'Betonconstructie (bv. balkon)' },
        { left: 'Verschoven dakpannen', right: 'Dakbedekking' },
      ],
      explanation: 'Elk gebrek hoort bij een specifiek bouwdeel dat je bij een opname apart beoordeelt.',
    },
    {
      id: 'D.2.bloom.invul', toetstermCode: 'D.2.1', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: bruine vlekken en zoutuitslag onderaan een binnenmuur wijzen vaak op ______ vocht.',
      acceptableAnswers: ['optrekkend'],
      explanation: 'Optrekkend vocht (capillair vanuit de bodem) geeft vaak vlekken en zoutuitbloei onderaan een muur.',
    },
    {
      id: 'D.2.bloom.open', toetstermCode: 'D.2.1', type: 'open', bloom: 'Evalueren',
      prompt: 'Bij een galerijflat uit de jaren 60 zie je roeststrepen en afgespat beton met zichtbare wapening aan de galerijplaten. Beoordeel de ernst van dit gebrek en welk advies je hierbij geeft.',
      acceptableAnswers: [
        'Dit is een ernstig, constructief gebrek: roestende, uitzettende wapening die het beton afdrukt (betonrot) tast de draagkracht van de galerijplaat aan, wat een risico voor de veiligheid kan vormen. Het advies is om dit niet als esthetisch te bagatelliseren, maar een nader constructief onderzoek (door een constructeur) te laten uitvoeren om de omvang en ernst vast te stellen, en het herstel met prioriteit in te plannen — niet uit te stellen tot regulier onderhoud.',
      ],
      explanation: 'Kernpunt: betonrot aan dragende galerijplaten is een veiligheidskwestie en vraagt urgent, deskundig onderzoek.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.bloom.mc', toetstermCode: 'D.3.5', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat geeft de Rc-waarde van een dichte constructie (dak, gevel, vloer) aan?',
      options: ['De warmteweerstand — hoe hoger, hoe beter geïsoleerd', 'De geluidsisolatie', 'De brandwerendheid', 'De draagkracht'],
      correctIndex: 0,
      explanation: 'Rc is de warmteweerstand van een dichte constructie: hoger = beter geïsoleerd.',
    },
    {
      id: 'D.3.bloom.multi', toetstermCode: 'D.3.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'In de hoek van een slaapkamer, bij een doorlopende betonvloer naar het balkon, ontstaat schimmel. Welke conclusies zijn gegrond?',
      options: ['Dit wijst op een koudebrug', 'Warmte lekt op die plek versterkt weg', 'Dit heeft niets te maken met de doorlopende betonvloer', 'Onderbreking van de koudebrug is een logische oplossing'],
      correctIndices: [0, 1, 3],
      explanation: 'Een doorlopende betonvloer naar buiten is een koudebrug; warmte lekt weg, het oppervlak wordt koud en er ontstaat condens/schimmel.',
    },
    {
      id: 'D.3.bloom.match', toetstermCode: 'D.3.5', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke bouwfysische grootheid aan zijn betekenis.',
      pairs: [
        { left: 'Rc-waarde', right: 'Warmteweerstand van een dichte constructie (hoger = beter)' },
        { left: 'U-waarde', right: 'Warmtedoorgang van bv. glas (lager = beter)' },
        { left: 'Lambda (λ)', right: 'Warmtegeleiding van een materiaal (lager = beter)' },
      ],
      explanation: 'Deze drie grootheden hebben elk een eigen "richting" die beter isoleren betekent.',
    },
    {
      id: 'D.3.bloom.invul', toetstermCode: 'D.3.9', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: geluid dat via de constructie wordt doorgegeven, zoals voetstappen, heet ______geluid.',
      acceptableAnswers: ['contact', 'contactgeluid'],
      explanation: 'Contactgeluid ontstaat door trillingen die rechtstreeks in de constructie worden ingebracht; luchtgeluid verplaatst zich via de lucht.',
    },
    {
      id: 'D.3.bloom.open', toetstermCode: 'D.3.3', type: 'open', bloom: 'Toepassen',
      prompt: 'Een aannemer isoleert een dak van binnenuit en overweegt of de dampremmende folie aan de warme (binnen) of koude (buiten) zijde moet komen. Beargumenteer de juiste keuze.',
      acceptableAnswers: [
        'De dampremmende folie hoort aan de warme (binnen)zijde van de isolatie. Vochtige binnenlucht bevat waterdamp die door de constructie naar buiten wil trekken; de dampremmer aan de warme kant houdt die damp grotendeels tegen, zodat hij niet dieper de constructie in dringt en daar, bij de koude buitenzijde, condenseert. Zou de folie aan de koude zijde zitten, dan zou vocht juist opgesloten raken in de isolatie, met schimmel en houtrot als gevolg.',
      ],
      explanation: 'Kernpunt: "damp remmen aan de warme kant" — de folie hoort aan de binnenzijde om inwendige condensatie te voorkomen.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.bloom.mc', toetstermCode: 'D.4.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Tussen welke uitersten loopt de energielabelschaal voor woningen?',
      options: ['A (zeer zuinig) tot G (zeer onzuinig)', '1 tot 10', 'Rood tot groen zonder letters', 'A tot D'],
      correctIndex: 0,
      explanation: 'De schaal loopt van A (tegenwoordig tot A++++) tot G.',
    },
    {
      id: 'D.4.bloom.multi', toetstermCode: 'D.4.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een bestaande woning heeft zonnepanelen, een warmtepomp en HR++-glas. Welke conclusies zijn gegrond?',
      options: ['De woning is op meerdere vlakken verduurzaamd', 'Dit wijst waarschijnlijk op een beter energielabel dan een vergelijkbare, niet-verduurzaamde woning', 'Een open gasgeiser past logisch bij dit verduurzamingsniveau', 'Dit zegt niets over het energielabel'],
      correctIndices: [0, 1],
      explanation: 'Zonnepanelen, warmtepomp en HR++-glas zijn duurzame voorzieningen die doorgaans bijdragen aan een beter energielabel; een open gasgeiser hoort daar niet bij.',
    },
    {
      id: 'D.4.bloom.match', toetstermCode: 'D.4.5', type: 'match', bloom: 'Begrip',
      prompt: 'Koppel elk duurzaamheidsbegrip aan zijn betekenis.',
      pairs: [
        { left: 'Circulair bouwen', right: 'Bouwen met herbruikbare materialen, gericht op hergebruik' },
        { left: 'Bio-based bouwen', right: 'Bouwen met materialen van hernieuwbare, plantaardige oorsprong' },
        { left: 'Materialenpaspoort', right: 'Registratie van gebruikte materialen voor later hergebruik' },
      ],
      explanation: 'Deze begrippen horen bij de beweging naar duurzamer en circulair bouwen.',
    },
    {
      id: 'D.4.bloom.invul', toetstermCode: 'D.4.1', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: de aanpak "eerst besparen (isoleren), dan duurzame bronnen, dan zo efficiënt mogelijk fossiel" heet de Trias ______.',
      acceptableAnswers: ['energetica'],
      explanation: 'De Trias Energetica geeft de volgorde van prioriteit aan bij energiezuinig ontwerpen.',
    },
    {
      id: 'D.4.bloom.open', toetstermCode: 'D.4.8', type: 'open', bloom: 'Evalueren',
      prompt: 'Een belegger bezit een kantoorpand van 500 m² met energielabel E. Beoordeel het risico van deze situatie sinds 2023 en wat de belegger zou moeten overwegen.',
      acceptableAnswers: [
        'Sinds 2023 geldt voor de meeste kantoren (vanaf 100 m²) de eis van minimaal energielabel C; een pand met label E voldoet daar niet aan. Het risico is dat het pand niet meer als kantoor gebruikt mag worden zolang niet aan de labeleis is voldaan, wat de verhuurbaarheid en waarde direct raakt. De belegger zou moeten overwegen te investeren in verduurzamingsmaatregelen (isolatie, installaties, glas) om minimaal label C te behalen, of het gebruiksdoel/de bestemming te heroverwegen.',
      ],
      explanation: 'Kernpunt: kantoren onder label C mogen sinds 2023 niet meer als kantoor worden gebruikt — een direct financieel risico voor de belegger.',
    },
  ],
}
