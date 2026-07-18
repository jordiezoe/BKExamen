import type { Question } from '../types/content'

/**
 * Bloom-examen — sectie C (Afwerking en Installaties). Zie bloomexamenA.ts
 * voor de opzet. Origineel materiaal, geen bestaande examenvragen.
 */
export const bloomExamenC: Record<string, Question[]> = {
  'C.1': [
    {
      id: 'C.1.bloom.mc', toetstermCode: 'C.1.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat kenmerkt een gescheiden rioolstelsel?',
      options: ['Vuilwater en regenwater gaan door aparte buizen', 'Al het afvalwater gaat door één gezamenlijke buis', 'Regenwater wordt binnen de woning opgevangen', 'Er is geen aansluiting op het riool'],
      correctIndex: 0,
      explanation: 'Een gescheiden stelsel voert vuilwater en regenwater apart af; bij een gemengd stelsel gaat alles samen.',
    },
    {
      id: 'C.1.bloom.multi', toetstermCode: 'C.1.5', type: 'multi', bloom: 'Analyseren',
      prompt: 'Uit een zelden gebruikte logeerbadkamer komt rioollucht. Welke conclusies en maatregelen zijn juist?',
      options: ['Het waterslot van de sifon is waarschijnlijk drooggevallen', 'De sifon doorspoelen lost het probleem meestal op', 'Dit duidt altijd op een kapotte hoofdriolering', 'Dit heeft niets te maken met het gebruik van de ruimte'],
      correctIndices: [0, 1],
      explanation: 'Bij weinig gebruik kan het waterslot in de sifon verdampen; doorspoelen herstelt het slot en verhelpt de stank.',
    },
    {
      id: 'C.1.bloom.match', toetstermCode: 'C.1.7', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk rioleringsonderdeel aan zijn functie.',
      pairs: [
        { left: 'Sifon (stankafsluiter)', right: 'Houdt met een waterslot rioollucht tegen' },
        { left: 'Ontstoppingsstuk', right: 'Toegang om de leiding door te spuiten' },
        { left: 'Ontspanningsleiding', right: 'Belucht het stelsel om onderdruk te voorkomen' },
      ],
      explanation: 'Elk onderdeel heeft een specifieke functie in de riolering.',
    },
    {
      id: 'C.1.bloom.invul', toetstermCode: 'C.1.3', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: in het buitengebied zonder rioolaansluiting wordt afvalwater soms lokaal gezuiverd met een septic tank of een ______.',
      acceptableAnswers: ['iba'],
      explanation: 'Een IBA (Individuele Behandeling van Afvalwater) zuivert afvalwater lokaal, net als een septic tank.',
    },
    {
      id: 'C.1.bloom.open', toetstermCode: 'C.1.6', type: 'open', bloom: 'Analyseren',
      prompt: 'Bij een woning van vóór 1960 wil je het risico op oude, kwetsbare rioolbuizen inschatten. Analyseer welk materiaal je waarschijnlijk aantreft en welke risico\'s daaraan verbonden zijn.',
      acceptableAnswers: [
        'In oude buitenriolering (vóór ca. 1960) is vaak gres (aardewerk) of beton toegepast; PVC kwam pas later in gebruik. Deze oude materialen kunnen na decennia scheuren, verzakken door zettingen, of last hebben van wortelingroei bij de voegen, wat kan leiden tot verstoppingen, lekkages of instroom van grondwater. Bij een woningopname is het daarom verstandig een camera-inspectie van de buitenriolering te overwegen.',
      ],
      explanation: 'Kernpunt: gres/beton is typisch voor oude riolering en brengt risico\'s op scheuren, verzakking en wortelingroei met zich mee.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.bloom.mc', toetstermCode: 'C.2.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk toestel levert zowel warm tapwater als cv-water?',
      options: ['Een combiketel', 'Een losse boiler', 'Een geiser', 'Een hydrofoor'],
      correctIndex: 0,
      explanation: 'Een combiketel verzorgt zowel verwarming als warm tapwater; een boiler/geiser levert alleen tapwater.',
    },
    {
      id: 'C.2.bloom.multi', toetstermCode: 'C.2.7', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een zorginstelling wil het risico op legionella in de warmwaterinstallatie beperken. Welke maatregelen zijn effectief?',
      options: ['Warm tapwater op minimaal 60°C houden', 'Leidingen regelmatig doorspoelen, ook bij weinig gebruik', 'Het water juist op 35°C instellen om energie te besparen', 'Dode (ongebruikte) leidingaftakkingen vermijden'],
      correctIndices: [0, 1, 3],
      explanation: 'Warm water ≥60°C houden, doorspoelen en dode leidingen vermijden beperken legionellagroei. Water op 35°C juist vergroot het risico.',
    },
    {
      id: 'C.2.bloom.match', toetstermCode: 'C.2.5', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke installatie aan haar functie.',
      pairs: [
        { left: 'Hydrofoor', right: 'Verhoogt de waterdruk' },
        { left: 'Wateronthardingsinstallatie', right: 'Verlaagt de kalkhardheid van het water' },
        { left: 'Expansievat', right: 'Vangt de volumetoename van opwarmend water op' },
      ],
      explanation: 'Elke installatie heeft een eigen, specifieke functie in de waterleidinginstallatie.',
    },
    {
      id: 'C.2.bloom.invul', toetstermCode: 'C.2.6', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: een grijs, zacht metaal in oude waterleidingen dat een gezondheidsrisico vormt, is ______.',
      acceptableAnswers: ['lood'],
      explanation: 'Loden waterleidingen zijn grijs, zacht en buigzaam, en vormen een gezondheidsrisico.',
    },
    {
      id: 'C.2.bloom.open', toetstermCode: 'C.2.7', type: 'open', bloom: 'Analyseren',
      prompt: 'Analyseer waarom stilstaand, lauwwarm water in een leidingnet een hoger legionellarisico geeft dan stromend water van 65°C.',
      acceptableAnswers: [
        'Legionellabacteriën groeien het best in stilstaand water tussen ongeveer 25 en 50°C: die temperatuur is gunstig voor de bacterie en stilstand voorkomt dat ze worden weggespoeld. Bij 65°C en hoger sterft de bacterie juist af, en stromend water (regelmatig ververst) geeft de bacterie geen kans zich op te bouwen tot een gevaarlijke concentratie. Vandaar het advies om warm water hoog te houden en leidingen niet dood te laten staan.',
      ],
      explanation: 'Kernpunt: temperatuur én stilstand zijn beide bepalend voor het legionellarisico.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.bloom.mc', toetstermCode: 'C.3.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Waar bevindt zich doorgaans de hoofdgaskraan van een woning?',
      options: ['Bij de gasmeter in de meterkast', 'Bij de cv-ketel', 'In de kruipruimte', 'Buiten op straat'],
      correctIndex: 0,
      explanation: 'De hoofdgaskraan zit bij de gasmeter in de meterkast.',
    },
    {
      id: 'C.3.bloom.multi', toetstermCode: 'C.3.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een woning gaat volledig van het gas af (all-electric). Welke aanpassingen zijn hierbij vaak nodig?',
      options: ['Verzwaring van de elektrische aansluiting/groepenkast', 'Een warmtepomp met lagetemperatuur-afgifte', 'Een grotere gasmeter', 'Een extra schoorsteen'],
      correctIndices: [0, 1],
      explanation: 'All-electric vraagt meer elektrisch vermogen en meestal een warmtepomp met LTV-afgifte; gasmeter en schoorsteen vervallen juist.',
    },
    {
      id: 'C.3.bloom.match', toetstermCode: 'C.3.2', type: 'match', bloom: 'Begrip',
      prompt: 'Koppel elk leidingtype op een installatietekening aan de bijbehorende voorziening.',
      pairs: [
        { left: 'Gasleiding', right: 'Naar kooktoestel en cv-ketel, met toestelafsluiters' },
        { left: 'Warmwaterleiding', right: 'Naar tappunten zoals douche en wastafel' },
        { left: 'Hemelwaterafvoer', right: 'Voert regenwater van het dak af' },
      ],
      explanation: 'Elk leidingtype heeft een eigen, herkenbare functie en aansluitpatroon op de tekening.',
    },
    {
      id: 'C.3.bloom.invul', toetstermCode: 'C.3.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: elk gastoestel heeft een eigen toestelkraan zodat je het toestel apart kunt ______.',
      acceptableAnswers: ['afsluiten'],
      explanation: 'De toestelkraan maakt het mogelijk één toestel af te sluiten voor onderhoud of bij een lek.',
    },
    {
      id: 'C.3.bloom.open', toetstermCode: 'C.3.3', type: 'open', bloom: 'Evalueren',
      prompt: 'Beoordeel de stelling: "Een woning all-electric maken is altijd goedkoper dan aan het gas blijven, ongeacht de staat van de elektrische aansluiting."',
      acceptableAnswers: [
        'Deze stelling klopt niet zonder meer. All-electric maken vraagt vaak een verzwaarde elektrische aansluiting, een nieuwe groepenkast en een warmtepomp — investeringen die aanzienlijk kunnen zijn, zeker bij een lichte, verouderde aansluiting. Of het uiteindelijk goedkoper is hangt af van de besparing op gasverbruik, energieprijzen, eventuele subsidies en de al aanwezige isolatiegraad van de woning (een warmtepomp werkt inefficiënt in een slecht geïsoleerde woning). De keuze vraagt dus een individuele afweging, geen algemene regel.',
      ],
      explanation: 'Kernpunt: de kosten-batenafweging van all-electric hangt sterk af van de bestaande situatie (aansluiting, isolatie).',
    },
  ],
  'C.4': [
    {
      id: 'C.4.bloom.mc', toetstermCode: 'C.4.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk onderdeel in de groepenkast beschermt tegen elektrocutie door bij een lekstroom snel uit te schakelen?',
      options: ['De aardlekschakelaar', 'De kWh-meter', 'De hoofdschakelaar', 'De installatieautomaat'],
      correctIndex: 0,
      explanation: 'De aardlekschakelaar merkt een lekstroom (bv. via een persoon) en schakelt razendsnel uit.',
    },
    {
      id: 'C.4.bloom.multi', toetstermCode: 'C.4.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een eigenaar wil een laadpaal én inductiekoken toevoegen aan een oude woning met een lichte aansluiting. Welke acties zijn passend?',
      options: ['De elektrische aansluiting laten verzwaren', 'Extra groepen laten bijplaatsen', 'Alles op één bestaande groep aansluiten', 'De gasmeter laten vergroten'],
      correctIndices: [0, 1],
      explanation: 'Laadpaal en inductie vragen veel vermogen; verzwaring en extra groepen voorkomen overbelasting. Alles op één groep is juist onverstandig.',
    },
    {
      id: 'C.4.bloom.match', toetstermCode: 'C.4.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk elektrisch begrip aan zijn omschrijving.',
      pairs: [
        { left: 'Aarding', right: 'Voert foutstromen veilig af' },
        { left: 'Krachtstroom', right: 'Driefasenaansluiting (400V) voor zware apparatuur' },
        { left: 'Installatieautomaat', right: 'Beschermt een groep tegen overbelasting' },
      ],
      explanation: 'Deze drie begrippen vormen de basis van een veilige elektrische installatie.',
    },
    {
      id: 'C.4.bloom.invul', toetstermCode: 'C.4.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: in natte ruimten zoals de badkamer wordt vaak een aardlekschakelaar met een hoge gevoeligheid van ______ mA toegepast.',
      acceptableAnswers: ['30'],
      explanation: 'Een 30 mA-aardlekschakelaar schakelt snel uit — belangrijk in natte, elektrocutiegevoelige ruimten.',
    },
    {
      id: 'C.4.bloom.open', toetstermCode: 'C.4.2', type: 'open', bloom: 'Toepassen',
      prompt: 'Leg uit waarom een installatie over meerdere groepen wordt verdeeld in plaats van alles op één groep aan te sluiten.',
      acceptableAnswers: [
        'Door de installatie over meerdere groepen te verdelen, wordt de belasting gespreid en blijft een storing of overbelasting beperkt tot die ene groep — bij één groep voor de hele woning zou een defect direct de gehele elektriciteitsvoorziening uitschakelen. Bovendien voorkomt spreiding dat te veel apparaten tegelijk op één te zware stroom trekken, wat de installatieautomaat zou laten afslaan of zelfs brandgevaar kan geven.',
      ],
      explanation: 'Kernpunt: meerdere groepen spreiden de belasting en beperken de impact van een storing.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.bloom.mc', toetstermCode: 'C.5.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat doet de omvormer bij een PV-installatie?',
      options: ['Gelijkstroom omzetten naar wisselstroom', 'Wisselstroom omzetten naar gelijkstroom', 'De panelen reinigen', 'Water verwarmen'],
      correctIndex: 0,
      explanation: 'Panelen leveren gelijkstroom (DC); de omvormer zet dit om naar bruikbare wisselstroom (AC).',
    },
    {
      id: 'C.5.bloom.multi', toetstermCode: 'C.5.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Twee panelen hebben allebei 400 Wp. Welke conclusies kun je hieruit trekken?',
      options: ['Beide panelen hebben hetzelfde piekvermogen onder testcondities', 'De werkelijke jaaropbrengst kan alsnog verschillen', 'De jaaropbrengst in kWh is hiermee exact vastgesteld', 'Oriëntatie en schaduw kunnen de opbrengst beïnvloeden'],
      correctIndices: [0, 1, 3],
      explanation: 'Wattpiek is het piekvermogen onder testcondities, niet de werkelijke jaaropbrengst; die hangt af van ligging, hoek en schaduw.',
    },
    {
      id: 'C.5.bloom.match', toetstermCode: 'C.5.3', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk systeem aan wat het opwekt.',
      pairs: [
        { left: 'PV-paneel (zonnepaneel)', right: 'Elektriciteit' },
        { left: 'Zonnecollector / zonneboiler', right: 'Warm tapwater' },
        { left: 'Warmtepomp', right: 'Ruimteverwarming/warm water uit omgevingswarmte' },
      ],
      explanation: 'Elk systeem zet zonne- of omgevingsenergie om in een ander bruikbaar type energie.',
    },
    {
      id: 'C.5.bloom.invul', toetstermCode: 'C.5.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het verrekenen van teruggeleverde zonnestroom met afgenomen stroom heet ______.',
      acceptableAnswers: ['salderen'],
      explanation: 'Salderen streept teruggeleverde stroom weg tegen afgenomen stroom.',
    },
    {
      id: 'C.5.bloom.open', toetstermCode: 'C.5.1', type: 'open', bloom: 'Toepassen',
      prompt: 'Een klant meldt dat zijn zonnepanelen wel stroom "maken", maar dat er niets van in huis merkbaar is. Redeneer welk onderdeel waarschijnlijk defect is en waarom.',
      acceptableAnswers: [
        'Waarschijnlijk is de omvormer defect. De panelen leveren gelijkstroom, maar die is niet direct bruikbaar in de woning of het net — de omvormer zet dat om naar wisselstroom. Als de omvormer uitvalt, komt er geen (bruikbare) stroom in huis terecht, ook al "maken" de panelen zelf nog gewoon energie.',
      ],
      explanation: 'Kernpunt: zonder werkende omvormer is de opgewekte gelijkstroom niet bruikbaar in de woning.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.bloom.mc', toetstermCode: 'C.6.7', type: 'mc', bloom: 'Begrip',
      prompt: 'Waarom is een HR-ketel zuiniger dan een oude VR-ketel?',
      options: ['Hij condenseert de waterdamp in de rookgassen en wint zo extra warmte terug', 'Hij verbrandt helemaal geen gas', 'Hij werkt op zonne-energie', 'Hij heeft geen rookgasafvoer nodig'],
      correctIndex: 0,
      explanation: 'De HR-ketel benut de condensatiewarmte van waterdamp in de rookgassen, wat een hoger rendement geeft.',
    },
    {
      id: 'C.6.bloom.multi', toetstermCode: 'C.6.9', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning krijgt een warmtepomp gecombineerd met vloerverwarming. Welke uitspraken hierover zijn juist?',
      options: ['Vloerverwarming werkt op lage temperatuur (LTV), wat goed bij een warmtepomp past', 'Een warmtepomp is het efficiëntst bij lage gevraagde aanvoertemperatuur', 'Radiatoren op hoge temperatuur (HTV) geven altijd het beste rendement met een warmtepomp', 'De combinatie warmtepomp + vloerverwarming is bouwfysisch logisch'],
      correctIndices: [0, 1, 3],
      explanation: 'Warmtepompen zijn efficiënter bij lage aanvoertemperaturen; vloerverwarming (LTV) past daar goed bij. Hoge-temperatuur radiatoren verlagen juist het rendement.',
    },
    {
      id: 'C.6.bloom.match', toetstermCode: 'C.6.6', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk warmteoverdrachtstype aan zijn voorbeeld.',
      pairs: [
        { left: 'Convectie', right: 'Opwarmende, circulerende lucht bij een radiator' },
        { left: 'Straling', right: 'Directe warmteoverdracht zoals bij een stralingspaneel' },
        { left: 'Geleiding', right: 'Warmte die door een vast materiaal trekt' },
      ],
      explanation: 'Deze drie mechanismen van warmteoverdracht komen allemaal voor in verwarmingssystemen.',
    },
    {
      id: 'C.6.bloom.invul', toetstermCode: 'C.6.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: vloer- en wandverwarming werken met relatief laag water en vallen onder ______temperatuurverwarming (afkorting: LTV).',
      acceptableAnswers: ['laag', 'laagtemperatuurverwarming'],
      explanation: 'LTV = laagtemperatuurverwarming, kenmerkend voor vloer- en wandverwarming.',
    },
    {
      id: 'C.6.bloom.open', toetstermCode: 'C.6.5', type: 'open', bloom: 'Evalueren',
      prompt: 'Een klant beweert dat zijn radiator vooral via straling verwarmt, "want hij heet een radiator (straler)". Beoordeel deze uitspraak.',
      acceptableAnswers: [
        'Deze uitspraak klopt niet: ondanks de naam werkt een radiator vooral via convectie. De lucht langs de ribben van de radiator warmt op, stijgt en circuleert door de ruimte, wat de belangrijkste manier is waarop de warmte zich verspreidt. Er is wel enige straling vanaf het radiatoroppervlak, maar dat is een kleiner aandeel. Vloerverwarming en stralingspanelen geven relatief veel meer warmte af via straling dan een gewone radiator.',
      ],
      explanation: 'Kernpunt: de naam "radiator" is misleidend — het werkt in de praktijk vooral via convectie, niet straling.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.bloom.mc', toetstermCode: 'C.7.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat houdt "topkoeling" in?',
      options: ['Alleen de warmtepiek wegnemen, niet volledig conditioneren', 'De ruimte volledig tot een setpoint koelen', 'Uitsluitend verwarmen', 'Ventileren zonder enige koeling'],
      correctIndex: 0,
      explanation: 'Topkoeling neemt alleen de scherpste warmtepiek weg; een volledige airco koelt tot een ingestelde temperatuur.',
    },
    {
      id: 'C.7.bloom.multi', toetstermCode: 'C.7.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een gebouw heeft een gecombineerd systeem met luchtbehandeling. Welke uitspraken hierover zijn juist?',
      options: ['Het systeem kan zowel verwarmen als koelen', 'Ventilatie is vaak in het systeem geïntegreerd', 'Zo\'n systeem kan alleen verwarmen', 'Het is functioneel breder dan een losse radiator'],
      correctIndices: [0, 1, 3],
      explanation: 'Een gecombineerd luchtbehandelingssysteem verwarmt, koelt en ventileert vaak in één; een radiator kan alleen verwarmen.',
    },
    {
      id: 'C.7.bloom.match', toetstermCode: 'C.7.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk klimaatsysteem aan zijn kenmerk.',
      pairs: [
        { left: 'Airconditioning', right: 'Koelt volledig tot een ingesteld setpoint' },
        { left: 'Topkoeling', right: 'Neemt alleen de warmtepiek weg' },
        { left: 'Gecombineerd systeem (luchtbehandeling)', right: 'Verwarmt, koelt en ventileert in één' },
      ],
      explanation: 'Elk klimaatsysteem heeft een eigen reikwijdte en toepassingsgebied.',
    },
    {
      id: 'C.7.bloom.invul', toetstermCode: 'C.7.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: een systeem dat de ruimte volledig tot een ingestelde temperatuur koelt, heet ______.',
      acceptableAnswers: ['airconditioning', 'airco'],
      explanation: 'Airconditioning conditioneert de ruimte volledig; topkoeling doet dat juist niet.',
    },
    {
      id: 'C.7.bloom.open', toetstermCode: 'C.7.1', type: 'open', bloom: 'Evalueren',
      prompt: 'Beoordeel waarom in Nederlandse woningen vaker voor topkoeling wordt gekozen dan voor volledige airconditioning.',
      acceptableAnswers: [
        'Topkoeling is eenvoudiger en aanzienlijk zuiniger dan volledige airconditioning, die veel energie vraagt om een ruimte helemaal tot een ingestelde temperatuur te koelen. In het Nederlandse klimaat, met relatief korte en beperkte hitteperiodes, volstaat het wegnemen van de ergste warmtepiek vaak al voor voldoende comfort, waardoor de investering en het energieverbruik van een volwaardige airco vaak niet in verhouding staan tot het nut.',
      ],
      explanation: 'Kernpunt: in het gematigde Nederlandse klimaat is topkoeling vaak voldoende en veel zuiniger dan volledige airco.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.bloom.mc', toetstermCode: 'C.8.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk type rookmelder is in woningen de verplichte standaard en detecteert rook via lichtverstrooiing?',
      options: ['De optische rookmelder', 'De ionisatiemelder', 'De thermische melder', 'De koolmonoxidemelder'],
      correctIndex: 0,
      explanation: 'De optische rookmelder detecteert rook via lichtverstrooiing en is verplicht in woningen.',
    },
    {
      id: 'C.8.bloom.multi', toetstermCode: 'C.8.5', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een appartementengebouw stelt een WBDBO-eis van 60 minuten tussen twee woningen. Welke uitspraken zijn juist?',
      options: ['De scheiding moet brand 60 minuten tegenhouden via doorslag én overslag', 'Dit is een brandwerendheidseis, geen ontvluchtingseis', 'De brandweer moet binnen 60 minuten aanwezig zijn', 'Dit betekent dat er geen rookmelders nodig zijn'],
      correctIndices: [0, 1],
      explanation: 'WBDBO gaat over de brandwerendheid van de scheiding zelf (door- én overslag), niet over de reactietijd van de brandweer of het al dan niet nodig zijn van rookmelders.',
    },
    {
      id: 'C.8.bloom.match', toetstermCode: 'C.8.5', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk brandveiligheidsbegrip aan zijn betekenis.',
      pairs: [
        { left: 'Compartimentering', right: 'Brand en rook tijdelijk binnen een deel van het gebouw houden' },
        { left: 'WBDBO', right: 'Weerstand tegen brand-doorslag en brand-overslag' },
        { left: 'Vluchtweg', right: 'Route die veilig naar buiten of een veilig compartiment leidt' },
      ],
      explanation: 'Deze begrippen vormen samen de basis van bouwkundige brandveiligheid.',
    },
    {
      id: 'C.8.bloom.invul', toetstermCode: 'C.8.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: bij een brandende pan met hete olie blus je nooit met water, maar dek je de pan af met een deksel of een blus______.',
      acceptableAnswers: ['deken', 'blusdeken'],
      explanation: 'Een deksel of blusdeken sluit de zuurstof af; water in hete olie veroorzaakt een gevaarlijke steekvlam.',
    },
    {
      id: 'C.8.bloom.open', toetstermCode: 'C.8.2', type: 'open', bloom: 'Analyseren',
      prompt: 'Leg uit waarom water gevaarlijk is bij het blussen van een frituurbrand, en welke fysische verklaring hierachter zit.',
      acceptableAnswers: [
        'Water is aanzienlijk zwaarder dan hete olie en zakt dus direct naar de bodem van de pan, waar het door de hoge temperatuur van de olie (vaak ver boven het kookpunt van water) explosief verdampt. Die plotselinge stoomontwikkeling werpt brandende oliedruppels de lucht in, wat een gevaarlijke steekvlam veroorzaakt die zich snel kan uitbreiden. Een deksel of blusdeken sluit daarentegen de zuurstoftoevoer af zonder dit effect te veroorzaken.',
      ],
      explanation: 'Kernpunt: water zinkt in hete olie en verdampt explosief, wat een steekvlam veroorzaakt — vandaar het verbod op blussen met water.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.bloom.mc', toetstermCode: 'C.9.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk ventilatiesysteem heeft natuurlijke toevoer via roosters en mechanische afvoer via een box?',
      options: ['Systeem C', 'Systeem A', 'Systeem B', 'Systeem D'],
      correctIndex: 0,
      explanation: 'Systeem C: natuurlijke toevoer, mechanische afvoer — het meest voorkomend in Nederlandse woningen.',
    },
    {
      id: 'C.9.bloom.multi', toetstermCode: 'C.9.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'In een portiekflat ruikt een bewoner kookgeur van de buren via het ventilatiekanaal. Welke conclusies en oplossingen zijn juist?',
      options: ['Het kanaal is waarschijnlijk niet correct gescheiden per woning', 'Een shuntkanaal met eigen nevenkanaal per woning voorkomt dit', 'Dit probleem kan nooit verholpen worden', 'Individuele afzuiging per woning zou hier passend zijn geweest'],
      correctIndices: [0, 1, 3],
      explanation: 'Overslaande geur wijst op onvoldoende scheiding tussen woningen; een shuntkanaal of individuele afzuiging voorkomt dit.',
    },
    {
      id: 'C.9.bloom.match', toetstermCode: 'C.9.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk ventilatiesysteem aan zijn toe- en afvoerprincipe.',
      pairs: [
        { left: 'Systeem A', right: 'Natuurlijke toevoer, natuurlijke afvoer' },
        { left: 'Systeem B', right: 'Mechanische toevoer, natuurlijke afvoer' },
        { left: 'Systeem C', right: 'Natuurlijke toevoer, mechanische afvoer' },
        { left: 'Systeem D', right: 'Mechanische toevoer én afvoer, met WTW' },
      ],
      explanation: 'De vier systemen verschillen in hoe toe- en afvoer worden gerealiseerd (natuurlijk of mechanisch).',
    },
    {
      id: 'C.9.bloom.invul', toetstermCode: 'C.9.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de afkorting voor het terugwinnen van warmte uit de afvoerlucht bij systeem D is ______.',
      acceptableAnswers: ['wtw'],
      explanation: 'WTW = warmteterugwinning; de warme afvoerlucht verwarmt de koude toevoerlucht voor.',
    },
    {
      id: 'C.9.bloom.open', toetstermCode: 'C.9.1', type: 'open', bloom: 'Analyseren',
      prompt: 'Een woning heeft gevelroosters voor de luchttoevoer en een mechanische afzuigbox. Leg uit welk systeem dit is en waarom dit vaak wordt verward met systeem B.',
      acceptableAnswers: [
        'Dit is systeem C: de toevoer is natuurlijk (via gevelroosters) en de afvoer is mechanisch (via de box). De verwarring met systeem B ontstaat omdat mensen de letters vaak koppelen aan "welk deel is mechanisch" zonder te onthouden welke kant (toevoer of afvoer) dat betreft: bij systeem B is het juist andersom — de tóévoer is mechanisch en de áfvoer natuurlijk. Het is dus belangrijk om exact te onthouden welke van de twee (toevoer of afvoer) mechanisch is per systeem.',
      ],
      explanation: 'Kernpunt: systeem C = natuurlijke toevoer + mechanische afvoer; systeem B is precies andersom — een veelgemaakte verwisseling.',
    },
  ],
  'C.10': [
    {
      id: 'C.10.bloom.mc', toetstermCode: 'C.10.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Waar staat PKVW voor?',
      options: ['Politiekeurmerk Veilig Wonen', 'Provinciaal Keurmerk Vastgoed Waardering', 'Particulier Keurmerk Verwarming en Water', 'Publiek Keurmerk Verduurzaamd Wonen'],
      correctIndex: 0,
      explanation: 'PKVW = Politiekeurmerk Veilig Wonen, gericht op inbraakpreventie.',
    },
    {
      id: 'C.10.bloom.multi', toetstermCode: 'C.10.3', type: 'multi', bloom: 'Begrip',
      prompt: 'Wat valt onder domotica in een woning?',
      options: ['Centrale bediening van verlichting', 'Automatische sturing van zonwering', 'Het metselverband van de gevel', 'Slimme koppeling van beveiligingssystemen'],
      correctIndices: [0, 1, 3],
      explanation: 'Domotica omvat de automatisering en centrale/slimme bediening van huisinstallaties; het metselverband is een bouwkundig, geen installatietechnisch begrip.',
    },
    {
      id: 'C.10.bloom.match', toetstermCode: 'C.10.2', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk data-medium aan zijn kenmerk.',
      pairs: [
        { left: 'Glasvezel', right: 'Data via licht, hoogste en meest stabiele snelheid' },
        { left: 'Coax/koper', right: 'Oudere technologie, lagere snelheid' },
        { left: 'WiFi', right: 'Draadloze dataoverdracht binnenshuis' },
      ],
      explanation: 'Elk medium heeft eigen snelheids- en betrouwbaarheidskenmerken voor data-overdracht.',
    },
    {
      id: 'C.10.bloom.invul', toetstermCode: 'C.10.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het keurmerk met sterren (1 t/m 3) dat de inbraakwerendheid van hang- en sluitwerk aangeeft, is het ______-keurmerk.',
      acceptableAnswers: ['skg'],
      explanation: 'SKG-sterren geven de inbraakwerendheid van hang- en sluitwerk aan.',
    },
    {
      id: 'C.10.bloom.open', toetstermCode: 'C.10.1', type: 'open', bloom: 'Toepassen',
      prompt: 'Een koper wil weten waarom een PKVW-gecertificeerde woning gunstig kan zijn bij het afsluiten van een inboedelverzekering. Leg dit verband uit.',
      acceptableAnswers: [
        'Een PKVW-certificering betekent dat de woning voldoet aan eisen op het gebied van inbraakwerend hang- en sluitwerk (SKG), verlichting en zichtlijnen die inbraak bemoeilijken. Verzekeraars koppelen een lager inbraakrisico vaak aan een lagere premie of gunstigere voorwaarden voor de inboedelverzekering, omdat de kans op een succesvolle inbraak (en dus schadeclaim) kleiner is bij een goed beveiligde woning.',
      ],
      explanation: 'Kernpunt: PKVW verlaagt objectief het inbraakrisico, wat verzekeraars vaak vertalen naar gunstigere polisvoorwaarden.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.bloom.mc', toetstermCode: 'C.11.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat is HR++-glas?',
      options: ['Dubbel glas met coating en gasvulling voor betere isolatie', 'Enkel glas', 'Gehard veiligheidsglas', 'Brandwerend glas'],
      correctIndex: 0,
      explanation: 'HR++-glas is dubbel glas met een metaalcoating en edelgasvulling in de spouw.',
    },
    {
      id: 'C.11.bloom.multi', toetstermCode: 'C.11.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke glassoorten worden tot het veiligheidsglas gerekend?',
      options: ['Gelaagd glas', 'Gehard glas', 'Enkel floatglas', 'HR++-isolatieglas'],
      correctIndices: [0, 1],
      explanation: 'Veiligheidsglas = gelaagd glas (scherven blijven plakken) én gehard glas (breekt in stompe korrels). HR++ zegt iets over isolatie, niet veiligheid.',
    },
    {
      id: 'C.11.bloom.match', toetstermCode: 'C.11.2', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke glaswaarde aan waar hoger of lager beter is.',
      pairs: [
        { left: 'Ug-waarde (isolatie)', right: 'Hoe lager, hoe beter' },
        { left: 'ZTA (zonwering)', right: 'Hoe lager, hoe minder zonnewarmte binnenkomt' },
        { left: 'Lichtdoorlatendheid', right: 'Hoe hoger, hoe meer daglicht' },
      ],
      explanation: 'Elke glaswaarde heeft een eigen richting die "beter" betekent, afhankelijk van het doel.',
    },
    {
      id: 'C.11.bloom.invul', toetstermCode: 'C.11.5', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: condens tússen de twee bladen van een dubbelglasruit wijst op een lekke ______.',
      acceptableAnswers: ['randafdichting', 'afdichting'],
      explanation: 'Damp tussen de bladen betekent dat de randafdichting van de isolatieruit is doorgeslagen; de ruit is defect.',
    },
    {
      id: 'C.11.bloom.open', toetstermCode: 'C.11.1', type: 'open', bloom: 'Toepassen',
      prompt: 'Boven een trapgat moet veiligheidsglas komen dat na breuk in één geheel blijft hangen. Beargumenteer welk glastype je adviseert en waarom gehard glas hier minder geschikt is.',
      acceptableAnswers: [
        'Gelaagd glas is hier het meest geschikt: de taaie kunststoffolie tussen de glasbladen zorgt ervoor dat de scherven bij breuk aan de folie blijven plakken, waardoor er geen scherpe delen naar beneden vallen — letselwerend boven een trapgat. Gehard glas is minder geschikt omdat het bij breuk juist in kleine, stompe korrels uiteenvalt die overal neervallen, wat bij een trapgat een groter risico geeft dan een glasplaat die in zijn geheel blijft hangen.',
      ],
      explanation: 'Kernpunt: gelaagd glas blijft na breuk hangen (folie); gehard glas valt juist uiteen — bij een trapgat is gelaagd glas veiliger.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.bloom.mc', toetstermCode: 'C.12.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk keurmerk met sterren geeft de inbraakwerendheid van hang- en sluitwerk aan?',
      options: ['SKG', 'KOMO', 'CE', 'FSC'],
      correctIndex: 0,
      explanation: 'SKG-sterren (1-3) geven de inbraakwerendheid aan; KOMO is een algemeen bouwkeurmerk.',
    },
    {
      id: 'C.12.bloom.multi', toetstermCode: 'C.12.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een deur heeft een meerpuntsluiting en een kerntrekbeveiligde cilinder. Welke conclusies zijn juist?',
      options: ['De deur vergrendelt op meerdere punten in het kozijn', 'Kerntrekken van de cilinder wordt bemoeilijkt', 'Dit maakt de deur inbraakwerender dan met één enkel slot', 'De sluitplaat is voor deze beveiliging niet relevant'],
      correctIndices: [0, 1, 2],
      explanation: 'Meerpuntsluiting en kerntrekbeveiliging vergroten samen de inbraakwerendheid; de sluitplaat vangt wél de schoten op en is dus relevant.',
    },
    {
      id: 'C.12.bloom.match', toetstermCode: 'C.12.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk slotonderdeel aan zijn functie.',
      pairs: [
        { left: 'Dagschoot', right: 'Schiet vanzelf uit bij het dichttrekken van de deur' },
        { left: 'Nachtschoot', right: 'Wordt met de sleutel of knop extra vergrendeld' },
        { left: 'Sluitplaat', right: 'Vangt de schoten op in het kozijn' },
      ],
      explanation: 'Deze onderdelen vormen samen het sluitmechanisme van een deur.',
    },
    {
      id: 'C.12.bloom.invul', toetstermCode: 'C.12.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: bij een deur met meerdere vergrendelpunten (boven, midden, onder) spreek je van een ______sluiting.',
      acceptableAnswers: ['meerpunt', 'meerpuntsluiting'],
      explanation: 'Een meerpuntsluiting vergrendelt op meerdere punten en is daardoor inbraakwerender dan een enkel slot.',
    },
    {
      id: 'C.12.bloom.open', toetstermCode: 'C.12.1', type: 'open', bloom: 'Evalueren',
      prompt: 'Beoordeel of het vervangen van alleen het zichtbare deurbeslag (kruk en schild) voldoende is om een woning inbraakwerender te maken.',
      acceptableAnswers: [
        'Nee, dat is meestal niet voldoende. De inbraakwerendheid wordt vooral bepaald door de cilinder (bestand tegen kerntrekken/boren), het slotmechanisme (bij voorkeur een meerpuntsluiting) en de sluitplaat/kozijnverankering, niet alleen door het zichtbare beslag. Kruk en schild zijn vooral esthetisch en bedieningsgemak; voor echte inbraakwerendheid (SKG-gecertificeerd) moet het hele systeem — cilinder, slot en sluitwerk — op elkaar zijn afgestemd.',
      ],
      explanation: 'Kernpunt: inbraakwerendheid zit in het hele slotsysteem (cilinder, mechanisme, sluitplaat), niet alleen in het zichtbare beslag.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.bloom.mc', toetstermCode: 'C.13.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat is de juiste opbouw van een verfsysteem op kaal buitenhout?',
      options: ['Grondverf → voorlak → aflak', 'Aflak → grondverf → voorlak', 'Voorlak → aflak → grondverf', 'Alleen aflak in twee lagen'],
      correctIndex: 0,
      explanation: 'Eerst grondverf (hecht), dan voorlak (vult op), dan aflak (beschermende toplaag).',
    },
    {
      id: 'C.13.bloom.multi', toetstermCode: 'C.13.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Buitenverf op een kozijn vertoont blaasvorming en afbladdering. Welke conclusies zijn gegrond?',
      options: ['Er zit waarschijnlijk vocht onder de verflaag', 'Dit kan ontstaan door een lek of te nat hout bij het schilderen', 'Dit is altijd een gevolg van een te dikke verflaag zonder andere oorzaak', 'Herstel vraagt eerst het onderliggende vochtprobleem aan te pakken'],
      correctIndices: [0, 1, 3],
      explanation: 'Blaasvorming/afbladdering wijst meestal op vocht onder de verf; herstel zonder de vochtoorzaak weg te nemen is niet duurzaam.',
    },
    {
      id: 'C.13.bloom.match', toetstermCode: 'C.13.6', type: 'match', bloom: 'Begrip',
      prompt: 'Koppel elk begrip aan zijn betekenis bij vloertegels.',
      pairs: [
        { left: 'Rutschwerte (R-waarde)', right: 'Antislipklasse van de tegel' },
        { left: 'Hoge R-waarde', right: 'Stroever oppervlak, minder uitglijgevaar' },
        { left: 'Natte ruimte', right: 'Vraagt om een hogere R-waarde' },
      ],
      explanation: 'De R-waarde bepaalt hoe geschikt een tegel is voor natte, glibberige omstandigheden.',
    },
    {
      id: 'C.13.bloom.invul', toetstermCode: 'C.13.4', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: een gladde afwerklaag van gips- of kalkmortel op een wand heet ______werk.',
      acceptableAnswers: ['stuc', 'stucwerk'],
      explanation: 'Stucwerk maakt de wand vlak en schilder-/behangklaar.',
    },
    {
      id: 'C.13.bloom.open', toetstermCode: 'C.13.9', type: 'open', bloom: 'Analyseren',
      prompt: 'Bij het aftikken van wandtegels in een badkamer klinken sommige tegels hol. Analyseer wat dit betekent en wat het risico is als er niets aan gedaan wordt.',
      acceptableAnswers: [
        'Een holle klank bij het aftikken wijst op onvoldoende hechting: er zit een holle ruimte (luchtspleet) tussen de tegel en de ondergrond, meestal door slechte lijmverdeling of een stoffige/vochtige ondergrond bij het plaatsen. Het risico is dat de tegel op termijn (helemaal) loslaat, vooral in een vochtige, temperatuurwisselende omgeving zoals een badkamer, wat kan leiden tot lekkage achter de tegels en verdere schade.',
      ],
      explanation: 'Kernpunt: holklinkende tegels hebben onvoldoende hechting en lopen risico op loslaten en gevolgschade.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.bloom.mc', toetstermCode: 'C.14.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Tot welke hoofdgroep behoort graniet?',
      options: ['Stollingsgesteente', 'Afzettingsgesteente', 'Metamorf gesteente', 'Kunststeen'],
      correctIndex: 0,
      explanation: 'Graniet is gestold uit magma: stollingsgesteente. Zandsteen = afzetting; marmer/leisteen = metamorf.',
    },
    {
      id: 'C.14.bloom.multi', toetstermCode: 'C.14.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Voor een keukenwerkblad wordt gezocht naar een zeer harde, zuurbestendige natuursteen. Welke uitspraken zijn juist?',
      options: ['Graniet is hiervoor een geschikte keuze', 'Marmer is minder geschikt vanwege zijn kalkgehalte', 'Travertijn is even zuurbestendig als graniet', 'Zuren kunnen kalkhoudende steen doen doffen/aantasten'],
      correctIndices: [0, 1, 3],
      explanation: 'Graniet is hard en zuurbestendig; marmer en travertijn zijn kalkhoudend en gevoelig voor zuren.',
    },
    {
      id: 'C.14.bloom.match', toetstermCode: 'C.14.3', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke oppervlaktebewerking aan zijn resultaat.',
      pairs: [
        { left: 'Polijsten', right: 'Spiegelglad en glanzend' },
        { left: 'Frijnen', right: 'Fijne groeven, stroef (antislip)' },
        { left: 'Zoeten', right: 'Mat glad oppervlak' },
      ],
      explanation: 'Elke bewerking geeft natuursteen een ander oppervlak, geschikt voor een ander doel.',
    },
    {
      id: 'C.14.bloom.invul', toetstermCode: 'C.14.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: marmer en leisteen behoren tot het ______ gesteente, ontstaan onder hoge druk en temperatuur uit bestaand gesteente.',
      acceptableAnswers: ['metamorf', 'metamorfe'],
      explanation: 'Metamorf gesteente ontstaat door omvorming van bestaand gesteente onder druk en hitte.',
    },
    {
      id: 'C.14.bloom.open', toetstermCode: 'C.14.3', type: 'open', bloom: 'Toepassen',
      prompt: 'Voor een buitentrap wordt hardsteen gevraagd met een antislip oppervlak. Beargumenteer welke oppervlaktebewerking je adviseert en waarom polijsten hier ongeschikt is.',
      acceptableAnswers: [
        'Frijnen is hier de juiste keuze: deze bewerking geeft fijne, parallelle groeven die grip geven, wat bij een buitentrap (blootgesteld aan regen en gladheid) belangrijk is voor de veiligheid. Polijsten is ongeschikt omdat het juist een spiegelglad, glanzend oppervlak geeft — bij nat weer wordt zo\'n gepolijste trap gevaarlijk glad, precies het tegenovergestelde van wat nodig is.',
      ],
      explanation: 'Kernpunt: frijnen geeft grip (antislip); polijsten geeft juist een glad, bij nat weer gevaarlijk oppervlak.',
    },
  ],
}
