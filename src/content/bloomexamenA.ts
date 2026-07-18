import type { Question } from '../types/content'

/**
 * Bloom-examen — sectie A (Algemeen).
 *
 * Per onderwerp vijf vraagsoorten (mc, multi, match, invul, open), elk
 * expliciet getagd met het Bloom-niveau (Kennis/Begrip/Toepassen/Analyseren/
 * Evalueren) zoals het kwalificatiedossier dat per toetsterm hanteert. De
 * open vragen worden door de kandidaat zelf nagekeken tegen het modelantwoord
 * (acceptableAnswers[0]) — vandaar geen letterlijke, korte sleuteltekst maar
 * een compact modelantwoord. Origineel materiaal, geen bestaande examenvragen.
 */
export const bloomExamenA: Record<string, Question[]> = {
  'A.1': [
    {
      id: 'A.1.bloom.mc', toetstermCode: 'A.1.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke partij in het bouwproces is verantwoordelijk voor de constructieve berekeningen (sterkte, stabiliteit, fundering)?',
      options: ['De constructeur', 'De architect', 'De hoofdaannemer', 'De opdrachtgever'],
      correctIndex: 0,
      explanation: 'De constructeur berekent sterkte, stabiliteit en fundering. De architect ontwerpt; de aannemer bouwt; de opdrachtgever initieert en betaalt.',
    },
    {
      id: 'A.1.bloom.multi', toetstermCode: 'A.1.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke posten horen tot de bijkomende kosten van een bouwkostenbegroting (dus niet tot de directe bouwkosten)?',
      options: ['Architect- en adviseurshonoraria', 'Leges voor de omgevingsvergunning', 'Grondwerk voor de fundering', 'Dakbedekking'],
      correctIndices: [0, 1],
      explanation: 'Honoraria en leges zijn bijkomende kosten (naast de bouw). Grondwerk en dakbedekking zijn directe bouwkosten: het fysieke bouwen zelf.',
    },
    {
      id: 'A.1.bloom.match', toetstermCode: 'A.1.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke bouwdeelnemer aan zijn belangrijkste rol in het bouwproces.',
      pairs: [
        { left: 'Opdrachtgever', right: 'Neemt het initiatief en betaalt het project' },
        { left: 'Architect', right: 'Ontwerpt het gebouw en vertaalt de wensen naar tekeningen' },
        { left: 'Constructeur', right: 'Berekent de sterkte, stabiliteit en fundering' },
        { left: 'Hoofdaannemer', right: 'Coördineert en voert de bouw uit' },
      ],
      explanation: 'Elke bouwdeelnemer heeft een eigen, herkenbare rol; als makelaar verwijs je bij vragen naar de juiste partij.',
    },
    {
      id: 'A.1.bloom.invul', toetstermCode: 'A.1.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: in de ______fase van het bouwproces worden het bestek opgesteld, de vergunning aangevraagd en het werk aanbesteed (ná ontwerp, vóór uitvoering).',
      acceptableAnswers: ['voorbereidingsfase', 'voorbereiding', 'voorbereidingfase'],
      explanation: 'De voorbereidingsfase volgt op de ontwerpfase: bestek, vergunning en aanbesteding worden hier geregeld, vóór de daadwerkelijke uitvoering.',
    },
    {
      id: 'A.1.bloom.open', toetstermCode: 'A.1.5', type: 'open', bloom: 'Analyseren',
      prompt: 'Een koper meldt zes maanden na oplevering een verborgen gebrek aan de aannemer. Leg uit hoe de aansprakelijkheid voor verborgen gebreken na oplevering in grote lijnen werkt, en wat het verschil is met zichtbare gebreken die pas ná oplevering worden gemeld.',
      acceptableAnswers: [
        'De aannemer blijft na oplevering nog een bepaalde tijd aansprakelijk voor verborgen gebreken: fouten die bij de oplevering redelijkerwijs niet zichtbaar/waarneembaar waren. Zichtbare gebreken moeten juist direct bij de oplevering (in het proces-verbaal) gemeld worden; meldt de opdrachtgever die pas later, dan is het lastiger de aannemer daarvoor nog aan te spreken. Het onderscheid zit dus in de waarneembaarheid op het opleveringsmoment.',
      ],
      explanation: 'Kernpunt: verborgen gebreken blijven binnen de aansprakelijkheidstermijn voor rekening van de aannemer; zichtbare gebreken horen bij oplevering gemeld te worden.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.bloom.mc', toetstermCode: 'A.2.1.3', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke tekening geeft de werkelijk uitgevoerde situatie weer, inclusief wijzigingen die tijdens de bouw zijn doorgevoerd?',
      options: ['De revisietekening', 'Het schetsontwerp', 'De bestektekening', 'De verkooptekening'],
      correctIndex: 0,
      explanation: 'De revisietekening ("as built") toont de definitieve, werkelijk gebouwde situatie. Het schetsontwerp en de bestektekening horen bij eerdere fases.',
    },
    {
      id: 'A.2.1.bloom.multi', toetstermCode: 'A.2.1.5', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke onderdelen horen bij het administratieve deel van een bouwkundig bestek (in plaats van het technische deel)?',
      options: ['De UAV 2012 als algemene voorwaarden', 'De CAR-verzekering en betalingstermijnen', 'De werkomschrijving van het metselwerk', 'De materiaalspecificatie van de dakbedekking'],
      correctIndices: [0, 1],
      explanation: 'UAV, CAR-verzekering en betalingstermijnen horen bij het administratieve deel (voorwaarden). Werkomschrijvingen en materiaalspecificaties horen bij het technische deel.',
    },
    {
      id: 'A.2.1.bloom.match', toetstermCode: 'A.2.1.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke arcering aan het materiaal dat hij op een bouwtekening voorstelt.',
      pairs: [
        { left: 'Schuine, evenwijdige strepen', right: 'Baksteen (metselwerk)' },
        { left: 'Stippels met driehoekjes en diagonale lijnen', right: 'Gewapend beton' },
        { left: 'Golvende "wolk"-arcering', right: 'Isolatiemateriaal' },
        { left: 'Houtnerf-tekening', right: 'Hout in de lengterichting' },
      ],
      explanation: 'Arceringen zijn de "taal" van de tekening; door ze te kennen lees je in één oogopslag welk materiaal is toegepast.',
    },
    {
      id: 'A.2.1.bloom.invul', toetstermCode: 'A.2.1.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de ______ op een bouwtekening verklaart welke symbolen, arceringen en afkortingen worden gebruikt (de legenda van de tekening).',
      acceptableAnswers: ['renvooi'],
      explanation: 'De renvooi is de legenda van een bouwtekening: de verklaring van symbolen, arceringen en afkortingen.',
    },
    {
      id: 'A.2.1.bloom.open', toetstermCode: 'A.2.1.5', type: 'open', bloom: 'Evalueren',
      prompt: 'In het bestek staat een andere kozijnmaat vermeld dan op de bijbehorende tekening. Beoordeel welk document in beginsel voorgaat en welke stappen de aannemer in de praktijk zou moeten zetten voordat hij doorbouwt.',
      acceptableAnswers: [
        'Bij tegenstrijdigheid tussen bestek en tekening geldt als hoofdregel dat het bestek vóórgaat op de tekening. In de praktijk zal de aannemer dit echter niet zomaar aannemen: hij meldt de tegenstrijdigheid bij de directievoerder/opdrachtgever en vraagt om verduidelijking (bijvoorbeeld via een nota van inlichtingen of bouwvergadering) voordat hij het werk uitvoert, om discussie achteraf te voorkomen.',
      ],
      explanation: 'Kernpunt: bestek gaat in beginsel vóór de tekening, maar zorgvuldig handelen betekent altijd eerst overleggen/verifiëren bij tegenstrijdigheid.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.bloom.mc', toetstermCode: 'A.2.2.4', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke Nederlandse architectuurstroming (ca. 1910–1930) is te herkennen aan expressief, plastisch baksteenwerk met golvende gevels en siermetselwerk?',
      options: ['De Amsterdamse School', 'De Nieuwe Zakelijkheid', 'De Delftse School', 'Het Structuralisme'],
      correctIndex: 0,
      explanation: 'De Amsterdamse School staat bekend om expressief, beeldend baksteenwerk. De Nieuwe Zakelijkheid is juist strak en functioneel.',
    },
    {
      id: 'A.2.2.bloom.multi', toetstermCode: 'A.2.2.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning heeft machinale baksteen in strak halfsteensverband, betonlateien boven de ramen en stalen kozijnen met enkel glas. Welke conclusies over de bouwperiode zijn hiermee te onderbouwen?',
      options: ['De woning heeft vrijwel zeker al een spouwmuur', 'De woning stamt zeer waarschijnlijk uit de jaren 30', 'De woning is gebouwd vóór 1850', 'De woning heeft oorspronkelijk geen dubbel glas'],
      correctIndices: [0, 1, 3],
      explanation: 'Betonlateien en machinale baksteen wijzen op de jaren 30, ná de introductie van de spouwmuur (~1920-1930); stalen kozijnen met enkel glas hadden destijds nog geen dubbel glas.',
    },
    {
      id: 'A.2.2.bloom.match', toetstermCode: 'A.2.2.4', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke architectuurstroming aan het bijbehorende kenmerk.',
      pairs: [
        { left: 'De Stijl', right: 'Abstracte rechthoekige vlakken in primaire kleuren' },
        { left: 'Jugendstil', right: 'Sierlijke, organische lijnen en florale motieven' },
        { left: 'Functionalisme (Nieuwe Bouwen)', right: 'Vorm volgt functie: strak, veel glas en beton' },
        { left: 'Delftse School', right: 'Traditioneel, sober baksteenwerk' },
      ],
      explanation: 'Elke stroming heeft een herkenbare visuele signatuur die je helpt de bouwperiode en stijl te bepalen.',
    },
    {
      id: 'A.2.2.bloom.invul', toetstermCode: 'A.2.2.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: twee zelfstandige woningen die samen onder één doorlopende kap staan en spiegelbeeldig tegen elkaar zijn gebouwd, vormen samen een ______-woning.',
      acceptableAnswers: ['twee-onder-een-kap', 'twee onder een kap', 'twee-onder-eenkapwoning', 'twee-onder-een-kapwoning'],
      explanation: 'Een twee-onder-een-kapwoning bestaat uit twee losse woningen die spiegelbeeldig onder één kap zijn gebouwd.',
    },
    {
      id: 'A.2.2.bloom.open', toetstermCode: 'A.2.2.3', type: 'open', bloom: 'Toepassen',
      prompt: 'Een woning heeft kunststof kozijnen, dikke spouwisolatie en HR++-glas, maar wel nog een traditioneel metselwerk-gevelbeeld. Beargumenteer uit welke periode deze woning waarschijnlijk stamt en welke bouwkundige signalen je tot die conclusie brengen.',
      acceptableAnswers: [
        'Kunststof kozijnen, dikke spouwisolatie en HR++-glas zijn kenmerken die pas vanaf ongeveer de jaren 80-90 gangbaar werden (en breed vanaf de jaren 90-2000); vóór die tijd waren kozijnen van hout of staal en was spouwisolatie dunner of afwezig. Het traditionele metselwerk-gevelbeeld zegt op zich weinig over het bouwjaar (metselwerk wordt in alle periodes toegepast), maar de isolatie- en kozijndetails wijzen op nieuwbouw of een grondige renovatie ná circa 1985.',
      ],
      explanation: 'Kernpunt: isolatie- en kozijndetails zijn betere periode-indicatoren dan het gevelbeeld, dat in vrijwel elke periode traditioneel metselwerk kan hebben.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.bloom.mc', toetstermCode: 'A.3.1', type: 'mc', bloom: 'Kennis',
      prompt: 'In welk document staan sinds de Omgevingswet de bouwtechnische eisen (constructie, brandveiligheid, ventilatie) van een bouwwerk?',
      options: ['Het Besluit bouwwerken leefomgeving (Bbl)', 'Het omgevingsplan', 'De Woningwet', 'De UAV 2012'],
      correctIndex: 0,
      explanation: 'Het Bbl bevat de bouwtechnische eisen (opvolger van het Bouwbesluit). Het omgevingsplan gaat over de ruimtelijke (gemeentelijke) regels.',
    },
    {
      id: 'A.3.bloom.multi', toetstermCode: 'A.3.6', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een aannemer bouwt een eenvoudige grondgebonden eengezinswoning onder de Wkb. Welke uitspraken hierover zijn juist?',
      options: ['Het project valt onder gevolgklasse 1', 'Een onafhankelijke kwaliteitsborger controleert de bouwtechnische kwaliteit', 'De ruimtelijke toets (omgevingsplan) loopt volledig via dezelfde borger', 'Complexe gebouwen zoals ziekenhuizen vallen in dezelfde klasse'],
      correctIndices: [0, 1],
      explanation: 'Eenvoudige woningen vallen onder gevolgklasse 1, met controle door een kwaliteitsborger. De ruimtelijke toets loopt via de gemeente (omgevingsplan), niet via de borger; complexe gebouwen vallen in hogere klassen.',
    },
    {
      id: 'A.3.bloom.match', toetstermCode: 'A.3.2', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke oppervlaktemaat aan de juiste omschrijving.',
      pairs: [
        { left: 'GBO', right: 'Gebruiksoppervlakte — de advertentiemaat, binnenwerks gemeten' },
        { left: 'BVO', right: 'Bruto vloeroppervlakte — gemeten aan de buitenzijde van de wanden' },
        { left: 'VVO', right: 'Verhuurbaar vloeroppervlak — commerciële maat, excl. technische ruimten' },
        { left: 'NVO', right: 'Netto vloeroppervlakte — BVO minus de constructieoppervlakte' },
      ],
      explanation: 'Elke maat heeft een eigen meetmethode en toepassingsgebied; de GBO is de maat die je in woningadvertenties tegenkomt.',
    },
    {
      id: 'A.3.bloom.invul', toetstermCode: 'A.3.6', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de Wet kwaliteitsborging voor het bouwen splitst de bouwtechnische toets en de ruimtelijke toets. Deze scheiding wordt de "______" genoemd.',
      acceptableAnswers: ['knip', 'de knip'],
      explanation: 'De "knip" scheidt het bouwtechnische deel (kwaliteitsborger, Wkb) van het ruimtelijke deel (omgevingsplan, gemeente).',
    },
    {
      id: 'A.3.bloom.open', toetstermCode: 'A.3.7', type: 'open', bloom: 'Evalueren',
      prompt: 'Een eigenaar van een tussenwoning wil een dragende binnenmuur tussen woonkamer en keuken verwijderen om een open keuken te creëren. Beoordeel of dit vergunningsvrij is en onderbouw je antwoord.',
      acceptableAnswers: [
        'Nee, dit is in beginsel vergunningplichtig. Het verwijderen of wijzigen van een dragende constructie raakt de constructieve veiligheid van het gebouw, en dat soort ingrepen valt niet onder de vergunningsvrije inpandige verbouwingen. Alleen niet-constructieve wijzigingen (bijvoorbeeld het verwijderen van een niet-dragende scheidingswand) zijn vaak wél vergunningsvrij. Bij twijfel moet eerst worden vastgesteld of de wand daadwerkelijk dragend is (bijvoorbeeld via de constructietekening) en is meestal constructief advies en een vergunning nodig.',
      ],
      explanation: 'Kernpunt: dragende constructies wijzigen is vergunningplichtig vanwege de constructieve veiligheid; alleen niet-dragende wijzigingen zijn vaak vergunningsvrij.',
    },
  ],
}
