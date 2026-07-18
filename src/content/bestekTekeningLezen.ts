import type { Question } from '../types/content'

/**
 * Bestek en tekening lezen (BL) — een losse, praktijkgerichte oefentoets op
 * het echte examenbestek en de bijbehorende tekeningen ("Examenadviesburo
 * 2016-I"), net als in het echte BT1/BT2-examen. De vragen zijn origineel
 * geschreven; waar een vraag om een specifiek feit uit het bestek of de
 * tekening vraagt, moet de kandidaat dit zelf opzoeken in de bijgevoegde
 * bijlage of afbeelding — precies zoals bij het echte examen.
 */

const BESTEK: [{ label: string; href: string }] = [
  { label: 'Bestek Examen 2016-I', href: '/bijlagen/bestek-2016-I.pdf' },
]
const TEKENING_A3: [{ label: string; href: string }] = [
  { label: 'Tekeningen A3 2016-I', href: '/bijlagen/tekening-A3-2016-I.pdf' },
]
const TEKENING_A1: [{ label: string; href: string }] = [
  { label: 'Tekening A1 2016-I', href: '/bijlagen/tekening-A1-2016-I.pdf' },
]

export const bestekExamTopics: Record<string, Question[]> = {
  'BL.1': [
    {
      id: 'BL.1.q1', toetstermCode: 'BL.1.1', type: 'mc',
      prompt: 'Wat is de belangrijkste functie van een bestek in een bouwproject?',
      options: [
        'Precies vastleggen wat er gebouwd moet worden en onder welke voorwaarden, als contractstuk tussen opdrachtgever en aannemer',
        'Een verkoopbrochure om de woning aan kopers te presenteren',
        'Een financieel overzicht van de hypotheek van de opdrachtgever',
        'Een checklist die alleen de gemeente gebruikt bij de vergunningverlening',
      ],
      correctIndex: 0,
      explanation: 'Het bestek is samen met de tekeningen het contractstuk waarin de opdrachtgever precies vastlegt wat de aannemer moet bouwen en onder welke (administratieve en technische) voorwaarden.',
    },
    {
      id: 'BL.1.q2', toetstermCode: 'BL.1.2', type: 'mc',
      prompt: 'De aannemer ontdekt tijdens de bouw een tegenstrijdigheid tussen het bestek en de tekening. Wat moet hij volgens de UAV 2012 doen?',
      options: [
        'Zelf een keuze maken en doorwerken, zonder dit te melden',
        'De opdrachtgever/directie hierover tijdig waarschuwen voordat hij verder werkt',
        'Automatisch de tekening als leidend beschouwen en de rest negeren',
        'Het werk stilleggen en niet meer hervatten',
      ],
      correctIndex: 1,
      explanation: 'De aannemer heeft een waarschuwingsplicht: hij moet de directie/opdrachtgever tijdig informeren over tegenstrijdigheden of fouten, zodat in overleg een oplossing wordt bepaald.',
    },
    {
      id: 'BL.1.q3', toetstermCode: 'BL.1.3', type: 'invul',
      prompt: 'Vul aan: een STABU-bestek bestaat uit twee hoofddelen — de administratieve bepalingen en de ______ bepalingen en werkbeschrijving.',
      acceptableAnswers: ['technische'],
      explanation: 'Het bestek van het examen is opgebouwd uit ADMINISTRATIEVE BEPALINGEN (hoofdstuk 00, de UAV 2012) en TECHNISCHE BEPALINGEN EN WERKBESCHRIJVING (hoofdstukken 05 t/m 75).',
    },
    {
      id: 'BL.1.q4', toetstermCode: 'BL.1.1', type: 'multi',
      prompt: 'Welke onderwerpen horen tot de ADMINISTRATIEVE bepalingen (hoofdstuk 00) van een STABU-bestek?',
      options: [
        'De van toepassing zijnde voorwaarden (UAV 2012)',
        'Aansprakelijkheid en verplichtingen van opdrachtgever en aannemer',
        'De technische specificaties van het metselwerk',
        'De maatvoering van de kozijnen',
      ],
      correctIndices: [0, 1],
      explanation: 'De UAV 2012-voorwaarden en de wederzijdse verplichtingen/aansprakelijkheid staan in het administratieve deel (hoofdstuk 00); materiaalspecificaties en maatvoering horen bij de technische bepalingen (hoofdstukken 05-75).',
      attachments: BESTEK,
    },
    {
      id: 'BL.1.q5', toetstermCode: 'BL.1.1', type: 'open',
      prompt: 'Leg in eigen woorden uit wat de UAV 2012 is en waarom deze voorwaarden in vrijwel elk bestek worden opgenomen.',
      acceptableAnswers: [
        'De UAV 2012 (Uniforme Administratieve Voorwaarden) is een standaardregeling met algemene juridische en administratieve spelregels voor de uitvoering van bouwwerken — over zaken als aansprakelijkheid, oplevering, meer- en minderwerk en directievoering. Bestekken nemen deze op zodat opdrachtgever en aannemer niet steeds opnieuw alle algemene afspraken hoeven te formuleren; alleen de projectspecifieke afwijkingen worden er in het bestek nog los bij vermeld.',
      ],
      explanation: 'De UAV 2012 vormt de juridische basis onder vrijwel elk bouwcontract; het bestek vult deze aan met projectspecifieke (technische) eisen.',
    },
  ],

  'BL.2': [
    {
      id: 'BL.2.q1', toetstermCode: 'BL.2.1', type: 'match',
      prompt: 'Koppel elk type tekening aan de juiste omschrijving.',
      pairs: [
        { left: 'Situatietekening', right: 'Toont het perceel, de ligging ten opzichte van de straat, buren en overige omgeving' },
        { left: 'Plattegrond', right: 'Toont de indeling van één bouwlaag, gezien van bovenaf' },
        { left: 'Doorsnede', right: 'Toont een verticale "doorsnijding" van het gebouw, met hoogtematen' },
        { left: 'Gevelaanzicht', right: 'Toont de buitenkant van één gevel, recht van voren gezien' },
      ],
      explanation: 'Elk tekeningtype geeft een andere kijkrichting op hetzelfde gebouw; samen geven ze een compleet beeld.',
    },
    {
      id: 'BL.2.q2', toetstermCode: 'BL.2.2', type: 'mc',
      prompt: 'Op welke schaal is de situatietekening van het examenbestek getekend?',
      image: { src: '/figs/bestek/situatietekening.png', caption: 'Situatietekening — Tekening A1, Examenadviesburo 2016-I', width: 'full' },
      options: ['1:50', '1:100', '1:500', '1:1000'],
      correctIndex: 2,
      explanation: 'Zoals op de tekening vermeld: "SITUATIE (SCHAAL 1:500)". Een situatietekening dekt een groter gebied en wordt daarom op een kleinere schaal (meer verkleind) getekend dan een plattegrond.',
      attachments: TEKENING_A1,
    },
    {
      id: 'BL.2.q3', toetstermCode: 'BL.2.2', type: 'mc',
      prompt: 'Op welke schaal zijn de plattegronden, gevels en doorsneden van het examen getekend?',
      options: ['1:20', '1:100', '1:500', '1:1000'],
      correctIndex: 1,
      explanation: 'De plattegronden, gevels en doorsneden zijn op schaal 1:100 getekend — gedetailleerder dan de situatietekening (1:500), maar minder gedetailleerd dan een bouwdetail (vaak 1:5 of 1:10).',
    },
    {
      id: 'BL.2.q4', toetstermCode: 'BL.2.1', type: 'invul',
      prompt: 'De tekeningenset bevat drie doorsneden: DRSN AA, DRSN BB en DRSN ______.',
      acceptableAnswers: ['cc', 'CC'],
      explanation: 'De drie doorsneden heten DRSN AA, DRSN BB en DRSN CC — elk een andere "snede" door het gebouw.',
    },
    {
      id: 'BL.2.q5', toetstermCode: 'BL.2.3', type: 'mc',
      prompt: 'Een maat op een tekening met schaal 1:100 is 45 mm. Hoe groot is dit in werkelijkheid?',
      options: ['0,45 m', '4,5 m', '45 m', '450 m'],
      correctIndex: 1,
      explanation: 'Bij schaal 1:100 stelt elke mm op de tekening 100 mm (10 cm) werkelijkheid voor: 45 mm × 100 = 4.500 mm = 4,5 m.',
    },
    {
      id: 'BL.2.q6', toetstermCode: 'BL.2.1', type: 'open',
      prompt: 'Wat is het verschil tussen een plattegrond en een doorsnede, en welke informatie kun je alléén uit een doorsnede aflezen (die niet op een plattegrond staat)?',
      acceptableAnswers: [
        'Een plattegrond toont een bouwlaag van bovenaf (horizontaal), een doorsnede toont het gebouw verticaal "doorgesneden". Alleen op een doorsnede zie je hoogtematen zoals verdiepingshoogtes, goot- en nokhoogte, vloerdiktes en de opbouw van vloeren/daken in de hoogterichting.',
      ],
      explanation: 'Plattegronden geven het horizontale beeld (indeling), doorsneden geven het verticale beeld (hoogtematen en laagopbouw).',
    },
  ],

  'BL.3': [
    {
      id: 'BL.3.q1', toetstermCode: 'BL.3.1', type: 'mc',
      prompt: 'Bekijk de renvooi (legenda) hiernaast. Welke arcering stelt een betonvloer voor?',
      image: { src: '/figs/bestek/renvooi-symbolen.png', caption: 'Renvooi (legenda) — Tekening A1, Examenadviesburo 2016-I', width: 'full' },
      options: [
        'Een effen, grijs gevuld vlak',
        'Een kruisarcering (diagonale ruitjes)',
        'Drie korte verticale streepjes',
        'Een streep-punt-streep lijn met pijl',
      ],
      correctIndex: 0,
      explanation: 'In de renvooi is "betonvloer" een effen grijs vlak; de kruisarcering staat voor isolatie en de drie streepjes voor een balkenvloer.',
    },
    {
      id: 'BL.3.q2', toetstermCode: 'BL.3.1', type: 'mc',
      prompt: 'Welk symbool in de renvooi stelt isolatie voor?',
      options: [
        'Een kruisarcering (diagonale ruitjes)',
        'Een dichte grijze vlakvulling',
        'Een gestippelde dunne lijn',
        'Een pijl met "mv" erbij',
      ],
      correctIndex: 0,
      explanation: 'Isolatie wordt in deze renvooi weergegeven met een kruisarcering van diagonale ruitjes — vergelijkbaar met de arcering die ook bij "buitenwand met isolatie" wordt gebruikt.',
    },
    {
      id: 'BL.3.q3', toetstermCode: 'BL.3.1', type: 'match',
      prompt: 'Koppel elke arcering/elk symbool uit de renvooi aan het juiste bouwdeel.',
      pairs: [
        { left: 'Effen grijs vlak', right: 'Betonvloer' },
        { left: 'Drie korte verticale streepjes op een lijn', right: 'Balkenvloer' },
        { left: 'Kruisarcering (diagonale ruitjes)', right: 'Isolatie' },
        { left: 'Dunne, dicht opeenvolgende horizontale strepen', right: 'Lichte scheidingswand HSB' },
      ],
      explanation: 'Elke arcering staat voor een vast materiaal of bouwdeel — het herkennen hiervan is de basis van tekening lezen.',
    },
    {
      id: 'BL.3.q4', toetstermCode: 'BL.3.1', type: 'mc',
      prompt: 'Welk vloertype hoort bij het symbool met drie korte verticale streepjes in de renvooi?',
      options: ['Balkenvloer', 'Betonvloer', 'Systeemvloer met vulelementen', 'Gietvloer'],
      correctIndex: 0,
      explanation: 'Drie korte verticale streepjes op een lijn stellen de balken van een balkenvloer voor (doorsnede-aanzicht).',
    },
    {
      id: 'BL.3.q5', toetstermCode: 'BL.3.1', type: 'open',
      prompt: 'Waarom is het voor een makelaar belangrijk om arceringen te kunnen herkennen, bijvoorbeeld het verschil tussen een balkenvloer en een betonvloer op een tekening?',
      acceptableAnswers: [
        'Het materiaal en de constructie van een vloer zeggen iets over de bouwperiode, de draagkracht, geluidsisolatie en eventuele risico\'s (bijvoorbeeld houtrot of doorbuiging bij een balkenvloer). Een makelaar die dit kan aflezen, kan een woning beter beoordelen en kopers correct informeren zonder de tekening verkeerd te interpreteren.',
      ],
      explanation: 'Tekening lezen stelt de makelaar in staat zelfstandig een eerste inschatting te maken van constructie en eventuele aandachtspunten.',
    },
  ],

  'BL.4': [
    {
      id: 'BL.4.q1', toetstermCode: 'BL.4.1', type: 'mc',
      prompt: 'Welk element dat verwijderd moet worden, staat expliciet aangegeven op de situatietekening?',
      image: { src: '/figs/bestek/situatietekening.png', caption: 'Situatietekening — Tekening A1, Examenadviesburo 2016-I', width: 'full' },
      options: ['Een boom ("te kappen boom")', 'Een garage', 'Een schuur', 'Een zwembad'],
      correctIndex: 0,
      explanation: 'Op de situatietekening staat bij de brug een cirkel met de tekst "TE KAPPEN BOOM" — een boom die voor de bouw verwijderd moet worden.',
    },
    {
      id: 'BL.4.q2', toetstermCode: 'BL.4.1', type: 'invul',
      prompt: 'Op de situatietekening loopt een waterloop langs meerdere zijden van het perceel. Hoe wordt deze waterloop op de tekening genoemd?',
      acceptableAnswers: ['sloot'],
      explanation: 'De tekening geeft de waterloop rondom het perceel drie keer aan met het woord "SLOOT".',
    },
    {
      id: 'BL.4.q3', toetstermCode: 'BL.4.2', type: 'mc',
      prompt: 'Wat geeft een "peil" (afgekort P) op een bouwtekening aan?',
      options: [
        'Een afgesproken referentieniveau (nulpunt) waaraan alle andere hoogtematen op de tekening worden gerelateerd',
        'De exacte hoogte in meters boven NAP van de nok',
        'De dikte van de begane grondvloer',
        'Het bouwjaar van de woning',
      ],
      correctIndex: 0,
      explanation: 'Het peil (P) is een projectgebonden referentieniveau — vaak gelijk aan de bovenkant van de begane grondvloer — waaraan andere hoogtes (zoals "NOKHOOGTE: 8850 + P") worden gerelateerd.',
    },
    {
      id: 'BL.4.q4', toetstermCode: 'BL.4.2', type: 'invul',
      prompt: 'Bekijk de doorsnede hiernaast. Wat is de nokhoogte, uitgedrukt ten opzichte van het peil (P)?',
      image: { src: '/figs/bestek/doorsnede-bb.png', caption: 'Doorsnede BB — Tekening A1, Examenadviesburo 2016-I', width: 'full' },
      acceptableAnswers: ['8850 + p', '8850+p', '8850 + P'],
      explanation: 'De doorsnede vermeldt: "NOKHOOGTE: 8850 + P = 9000 + MV".',
    },
    {
      id: 'BL.4.q5', toetstermCode: 'BL.4.2', type: 'mc',
      prompt: 'Wat is de goothoogte volgens deze doorsnede?',
      image: { src: '/figs/bestek/doorsnede-bb.png', caption: 'Doorsnede BB — Tekening A1, Examenadviesburo 2016-I', width: 'full' },
      options: ['2990 + P', '3450 + P', '6100 + P', '8850 + P'],
      correctIndex: 0,
      explanation: 'De doorsnede vermeldt: "GOOTHOOGTE: 2990 + P = 3140 + MV". 8850 + P is de nokhoogte, niet de goothoogte.',
    },
    {
      id: 'BL.4.q6', toetstermCode: 'BL.4.3', type: 'match',
      prompt: 'Koppel elk symbool/elke afkorting uit de renvooi aan de juiste betekenis.',
      image: { src: '/figs/bestek/renvooi-symbolen.png', caption: 'Renvooi (legenda) — Tekening A1, Examenadviesburo 2016-I', width: 'full' },
      pairs: [
        { left: 'mv (in vierkantje)', right: 'Mechanische ventilatie' },
        { left: 'rm.', right: 'Rookmelder' },
        { left: 'WM (in kader)', right: 'Opstelplaats wasmachine' },
        { left: 'CV (in kader)', right: 'Centrale verwarmingsinstallatie' },
      ],
      explanation: 'Deze afkortingen komen letterlijk terug in de renvooi van de tekeningenset.',
    },
    {
      id: 'BL.4.q7', toetstermCode: 'BL.4.2', type: 'open',
      prompt: 'Leg uit wat het verschil is tussen een "peil" en een hoogte ten opzichte van NAP op een bouwtekening.',
      acceptableAnswers: [
        'NAP (Normaal Amsterdams Peil) is een vast, landelijk referentiepunt voor hoogtes in heel Nederland. Een "peil" (P) is een lokaal, projectgebonden referentieniveau — vaak de bovenkant van de begane grondvloer van dít project — dat wél een vaste relatie met NAP heeft (bijvoorbeeld "peil = -1,4 m N.A.P."), maar handiger rekent binnen het project omdat de meeste maten dan simpele, ronde getallen worden.',
      ],
      explanation: 'NAP is landelijk vast; het peil is projectgebonden en wordt gekoppeld aan NAP via één referentiemaat (zoals "b.k. maaiveld: 150 - P = -1,4 m N.A.P.").',
    },
  ],

  'BL.5': [
    {
      id: 'BL.5.q1', toetstermCode: 'BL.5.1', type: 'mc',
      prompt: 'Bekijk de plattegrond begane grond hiernaast. Hoeveel verschillende deurkozijnen (kozijncodes die met een H beginnen) zijn hierop aangegeven?',
      image: { src: '/figs/bestek/plattegrond-begane-grond.png', caption: 'Plattegrond begane grond — Tekening A1, Examenadviesburo 2016-I', width: 'full' },
      options: ['3', '4', '5', '6'],
      correctIndex: 2,
      explanation: 'Op de plattegrond staan de deurkozijnen H01, H02, H03, H04 en H05 — vijf stuks.',
      attachments: TEKENING_A1,
    },
    {
      id: 'BL.5.q2', toetstermCode: 'BL.5.2', type: 'invul',
      prompt: 'Op deze tekeningenset beginnen deurkozijncodes met de letter H (zoals H01), terwijl raamkozijncodes beginnen met de letter ______.',
      acceptableAnswers: ['a', 'A'],
      explanation: 'Raamkozijnen zijn aangeduid met codes als A03, A04, A05 (zie o.a. de plattegrond begane grond); deurkozijnen met H01 t/m H05.',
    },
    {
      id: 'BL.5.q3', toetstermCode: 'BL.5.2', type: 'mc',
      prompt: 'Bekijk de plattegrond 1e verdieping hiernaast. Welke ruimte heeft het kozijn met de aanduiding "A08 BADKAMER PUI"?',
      image: { src: '/figs/bestek/plattegrond-1everdieping.png', caption: 'Plattegrond 1e verdieping — Tekening A1, Examenadviesburo 2016-I', width: 'lg' },
      options: ['Badkamer (1.2)', 'Slaapkamer (1.3)', 'Overloop (1.1)', 'Slaapkamer (1.4)'],
      correctIndex: 0,
      explanation: 'De tekening labelt dit kozijn expliciet als "A08 BADKAMER PUI" — het puikozijn van de badkamer.',
    },
    {
      id: 'BL.5.q4', toetstermCode: 'BL.5.1', type: 'open',
      prompt: 'Wat is een "pui" in de context van kozijnen? En waarom denk je dat de badkamer op de 1e verdieping juist een puikozijn heeft (kijk naar de tekening)?',
      acceptableAnswers: [
        'Een pui is een grote, samengestelde gevelopening — vaak een combinatie van glas en een deur/raam over de volle breedte van een gevelvlak. Een puikozijn in de badkamer wijst meestal op een groot raam (en/of openslaande deuren) dat veel daglicht binnenlaat, bijvoorbeeld naar een balkon of dakterras.',
      ],
      explanation: 'Een pui is doorgaans breder en beslaat vaak de volle gevelbreedte, in tegenstelling tot een standaard raam- of deurkozijn.',
    },
    {
      id: 'BL.5.q5', toetstermCode: 'BL.5.1', type: 'mc',
      prompt: 'Op de plattegrond 1e verdieping staat bij een wand tussen de overloop en slaapkamer 1.4 de tekst "TOEKOMSTIGE WAND". Wat betekent dit voor de aannemer?',
      image: { src: '/figs/bestek/plattegrond-1everdieping.png', caption: 'Plattegrond 1e verdieping — Tekening A1, Examenadviesburo 2016-I', width: 'lg' },
      options: [
        'Deze wand hoeft nu nog niet gebouwd te worden, maar is voorzien voor een latere aanpassing',
        'Deze wand moet extra dik worden uitgevoerd',
        'Deze wand is een stabiliteitswand die per se nu al moet worden gebouwd',
        'Deze wand moet worden gesloopt',
      ],
      correctIndex: 0,
      explanation: '"Toekomstige wand" geeft aan waar een bewoner later eventueel zelf een wand kan plaatsen (bijvoorbeeld om de ruimte op te delen) — nu nog niet verplicht.',
    },
    {
      id: 'BL.5.q6', toetstermCode: 'BL.5.1', type: 'invul',
      prompt: 'Op de plattegrond 1e verdieping staat bij een aantal wanden de waarschuwing "LET OP! DIT IS EEN ______WAND".',
      image: { src: '/figs/bestek/plattegrond-1everdieping.png', caption: 'Plattegrond 1e verdieping — Tekening A1, Examenadviesburo 2016-I', width: 'lg' },
      acceptableAnswers: ['stabiliteits', 'stabiliteitswand'],
      explanation: 'Deze waarschuwing geeft aan dat de wand een stabiliteitswand is en dus niet zomaar verwijderd of doorbroken mag worden.',
    },
  ],

  'BL.6': [
    {
      id: 'BL.6.q1', toetstermCode: 'BL.6.1', type: 'match',
      prompt: 'Koppel elk elektrasymbool uit de renvooi aan de montagehoogte die erbij hoort.',
      image: { src: '/figs/bestek/renvooi-elektra.png', caption: 'Renvooi ELEKTRA — Tekening A3, blad 6, Examenadviesburo 2016-I', width: 'full' },
      pairs: [
        { left: 'Enkelpolige schakelaar', right: '1.05 m' },
        { left: 'Wandlichtpunt', right: '2.10 m' },
        { left: 'Trekschakelaar', right: '0.20 m onder plafond' },
        { left: 'Rookmelder', right: 'n.v.t.' },
      ],
      explanation: 'De renvooi ELEKTRA (blad 6) geeft voor elk symbool de standaard montagehoogte.',
    },
    {
      id: 'BL.6.q2', toetstermCode: 'BL.6.1', type: 'mc',
      prompt: 'Op welke hoogte hoort een enkele, geaarde wandcontactdoos boven een aanrecht te worden gemonteerd volgens de renvooi?',
      image: { src: '/figs/bestek/renvooi-elektra.png', caption: 'Renvooi ELEKTRA — Tekening A3, blad 6, Examenadviesburo 2016-I', width: 'full' },
      options: ['0,30 m', '1,05 m', '1,20 m', '2,10 m'],
      correctIndex: 2,
      explanation: 'De renvooi vermeldt voor de wandcontactdoos: "boven aanrecht 1.20m".',
    },
    {
      id: 'BL.6.q3', toetstermCode: 'BL.6.1', type: 'mc',
      prompt: 'Bekijk de elektraplattegrond begane grond. In welke ruimte staan de symbolen voor "kookunit" en "oven"?',
      image: { src: '/figs/bestek/plattegrond-elektra-begane-grond.png', caption: 'Plattegrond ELEKTRA begane grond — Tekening A3, blad 7, Examenadviesburo 2016-I', width: 'full' },
      options: ['Keuken (0.5)', 'Eetkamer (0.6)', 'Woonkamer (0.4)', 'Entree (0.1)'],
      correctIndex: 0,
      explanation: 'De symbolen "kookunit" en "oven" staan in de Keuken (ruimte 0.5).',
    },
    {
      id: 'BL.6.q4', toetstermCode: 'BL.6.1', type: 'invul',
      prompt: 'Op de elektraplattegrond staat bij de entree een rond symbool met de letters "RM" erin. Waar staat de afkorting RM voor?',
      acceptableAnswers: ['rookmelder'],
      explanation: 'RM staat voor rookmelder, verplicht bij de entree/vluchtroute.',
    },
    {
      id: 'BL.6.q5', toetstermCode: 'BL.6.1', type: 'open',
      prompt: 'Beschrijf wat er in en rond de "technische ruimte"/meterkast bij elkaar komt op de elektra- en installatietekeningen, en waarom dat logisch is.',
      acceptableAnswers: [
        'In of bij de technische ruimte/meterkast komen de centrale voorzieningen samen: de elektrische hoofdaansluiting met groepenkast, vaak de verdeler voor de vloerverwarming en de aansluitpunten voor water, gas en cv. Dit wordt op één centrale plek gebundeld omdat daar ook de aansluitingen van het openbare net (elektra, gas, water) het gebouw binnenkomen, zodat leidingen niet onnodig door de hele woning hoeven te lopen.',
      ],
      explanation: 'Centrale bundeling van installaties bij de meterkast/technische ruimte bespaart leidingwerk en houdt de installatie overzichtelijk en toegankelijk voor onderhoud.',
    },
    {
      id: 'BL.6.q6', toetstermCode: 'BL.6.1', type: 'mc',
      prompt: 'Onder welk bestekhoofdstuk (nummer) vind je de bepalingen over de elektrotechnische installaties?',
      options: ['53', '60', '70', '75'],
      correctIndex: 2,
      explanation: 'Hoofdstuk 70 "ELEKTROTECHNISCHE INSTALLATIES" behandelt de elektra; 53 is sanitair, 60 verwarming, 75 communicatie- en beveiligingsinstallaties.',
      attachments: BESTEK,
    },
  ],

  'BL.7': [
    {
      id: 'BL.7.q1', toetstermCode: 'BL.7.1', type: 'invul',
      prompt: 'Zoek het op in het bestek: onder welk hoofdstuknummer vind je de bepalingen over METSELWERK?',
      acceptableAnswers: ['22'],
      explanation: 'Hoofdstuk 22 METSELWERK, zoals te vinden in de inhoudsopgave van het bestek.',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q2', toetstermCode: 'BL.7.1', type: 'invul',
      prompt: 'Zoek het op in het bestek: onder welk hoofdstuknummer vind je de bepalingen over KOZIJNEN, RAMEN EN DEUREN?',
      acceptableAnswers: ['30'],
      explanation: 'Hoofdstuk 30 KOZIJNEN, RAMEN EN DEUREN.',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q3', toetstermCode: 'BL.7.1', type: 'invul',
      prompt: 'Zoek het op in het bestek: onder welk hoofdstuknummer vind je de bepalingen over DAKBEDEKKINGEN?',
      acceptableAnswers: ['33'],
      explanation: 'Hoofdstuk 33 DAKBEDEKKINGEN.',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q4', toetstermCode: 'BL.7.2', type: 'mc',
      prompt: 'Zoek in het bestek hoofdstuk 20 (FUNDERINGSPALEN EN DAMWANDEN) op: wat is de diameter van de toegepaste stalen buispalen?',
      options: ['168 mm', '193 mm', '219 mm', '245 mm'],
      correctIndex: 2,
      explanation: 'Bestekartikel 20.32.21-a vermeldt: "Diameter (mm): 219." Dit komt overeen met de tekening (BLAD 2: "Alle stalen buispalen ⌀219mm").',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q5', toetstermCode: 'BL.7.2', type: 'mc',
      prompt: 'Zoek in het bestek hoofdstuk 22 (METSELWERK) op: welk metselverband wordt voor het schone metselwerk voorgeschreven?',
      options: ['Halfsteensverband', 'Wild verband', 'Vlaams verband', 'Kruisverband'],
      correctIndex: 1,
      explanation: 'Bestekartikel 22.31.12-a vermeldt: "Metselverband: wild." — een minder gangbaar, onregelmatig verband.',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q6', toetstermCode: 'BL.7.2', type: 'invul',
      prompt: 'Zoek in het bestek hoofdstuk 55 (GASINSTALLATIES) op: welke kleur heeft de toegepaste kunststof gasleiding?',
      acceptableAnswers: ['geel'],
      explanation: 'Bestekartikel 55.32.10-a vermeldt bij de VERNET POLYETHEEN BUIS: "Kleur: geel."',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q7', toetstermCode: 'BL.7.2', type: 'mc',
      prompt: 'Zoek in het bestek hoofdstuk 60 (VERWARMINGSINSTALLATIES) op: in welke twee ruimtes is de temperatuur afzonderlijk regelbaar?',
      options: ['Woonkamer en eetkamer', 'Keuken en badkamer', 'Entree en toilet', 'Alle slaapkamers apart'],
      correctIndex: 0,
      explanation: 'Bestekartikel 60.00.20 lid 92 vermeldt: "De ruimtetemperatuur is afzonderlijk regelbaar in de eetkamer en woonkamer."',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q8', toetstermCode: 'BL.7.2', type: 'open',
      prompt: 'Zoek bestekartikel 30.00.70 op (hoofdstuk 30, KOZIJNEN). Welke luchtdichtheidseis (qv,10) geldt voor de buitenkozijnen en de totale woningschil, en waarom is dit volgens jou belangrijk voor de energieprestatie van de woning?',
      acceptableAnswers: [
        'De eis is qv,10 ≤ 0,625 l/s per m² gebruiksoppervlak. Een lage luchtdichtheidseis is belangrijk omdat ongewenste kierdichtheid (naden en spleten) tot ongecontroleerd warmteverlies en tochtklachten leidt; hoe luchtdichter de schil, hoe minder stookenergie er verloren gaat en hoe beter de mechanische ventilatie gecontroleerd kan werken.',
      ],
      explanation: 'De eis staat letterlijk in het bestek: "een luchtdichtheidseis van qv,10 ≤ 0,625 l/sm² gebruiksoppervlak." Luchtdichtheid is een belangrijke factor in de energieprestatiecoëfficiënt (EPC) van een woning.',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q9', toetstermCode: 'BL.7.2', type: 'mc',
      prompt: 'Zoek in het bestek hoofdstuk 70 (ELEKTROTECHNISCHE INSTALLATIES) op: waarvan wordt gebruikgemaakt voor de veiligheidsaarding?',
      options: [
        'Een losse aardpen in de tuin',
        'De wapening van de funderingspalen en de randbalken',
        'Het rioleringssysteem',
        'De dakgoot',
      ],
      correctIndex: 1,
      explanation: 'Bestekartikel 70.11.10-a vermeldt: "Ten behoeve van de veiligheidsaarding zal gebruik worden gemaakt van de wapening van de funderingspalen en de randbalken."',
      attachments: BESTEK,
    },
    {
      id: 'BL.7.q10', toetstermCode: 'BL.7.3', type: 'invul',
      prompt: 'Zoek in het bestek hoofdstuk 53 (SANITAIR) op: het bestek legt sanitairtype en -merk NIET vast, maar deze staan wel aangegeven op de ______.',
      acceptableAnswers: ['tekeningen', 'tekening'],
      explanation: 'Bestekartikel 53.00.30 vermeldt: "De sanitair combinaties en typen zijn derhalve niet opgenomen in dit bestek. De sanitaire toestellen zijn echter wel op de tekeningen aangegeven."',
      attachments: BESTEK,
    },
  ],

  'BL.8': [
    {
      id: 'BL.8.q1', toetstermCode: 'BL.8.1', type: 'match',
      prompt: 'Koppel elk STABU-hoofdstuknummer uit dit bestek aan de juiste omschrijving.',
      pairs: [
        { left: '12', right: 'Grondwerk' },
        { left: '21', right: 'Betonwerk' },
        { left: '41', right: 'Tegelwerk' },
        { left: '51', right: 'Binnenriolering' },
      ],
      explanation: 'De inhoudsopgave van het bestek koppelt elk hoofdstuknummer aan een vast onderdeel van het werk — deze indeling is vergelijkbaar in vrijwel elk STABU-bestek.',
      attachments: BESTEK,
    },
    {
      id: 'BL.8.q2', toetstermCode: 'BL.8.1', type: 'mc',
      prompt: 'Je wilt opzoeken welke beglazing (glassoort) is toegepast. In welk hoofdstuk zoek je?',
      options: ['Hoofdstuk 22 (Metselwerk)', 'Hoofdstuk 34 (Beglazing)', 'Hoofdstuk 00 (Administratieve bepalingen)', 'Hoofdstuk 70 (Elektrotechnische installaties)'],
      correctIndex: 1,
      explanation: 'Beglazing staat in het technische deel onder hoofdstuk 34.',
      attachments: BESTEK,
    },
    {
      id: 'BL.8.q3', toetstermCode: 'BL.8.2', type: 'invul',
      prompt: 'Bestekartikelnummers zijn volgens een vast systeem opgebouwd, bijvoorbeeld 20.32.21-a. Het eerste tweecijferige getal (hier 20) staat voor het ______.',
      acceptableAnswers: ['hoofdstuk'],
      explanation: 'Het eerste getal geeft het hoofdstuk aan (bijv. 20 = funderingspalen); de volgende cijfergroepen verfijnen steeds verder naar paragraaf en artikel.',
    },
    {
      id: 'BL.8.q4', toetstermCode: 'BL.8.2', type: 'mc',
      prompt: 'Je kunt een specificatie voor een bouwdeel dat wél op de tekening staat, niet terugvinden in het bestek. Wat is de juiste vervolgstap?',
      options: [
        'Zelf een aanname doen en niet navragen',
        'Dit navragen/opzoeken bij de architect of directie voordat je verder gaat',
        'Het onderdeel gewoon weglaten',
        'Altijd de duurste uitvoering toepassen',
      ],
      correctIndex: 1,
      explanation: 'Ontbrekende of onduidelijke informatie moet altijd worden nagevraagd bij de directie/architect — dit voorkomt fouten en discussies achteraf.',
    },
    {
      id: 'BL.8.q5', toetstermCode: 'BL.8.1', type: 'open',
      prompt: 'Beschrijf in twee of drie stappen hoe je in een STABU-bestek een specifieke technische eis opzoekt — bijvoorbeeld: welke betonsterkteklasse wordt gebruikt voor de funderingspalen — als je alleen de inhoudsopgave hebt.',
      acceptableAnswers: [
        '1) Bepaal welk bouwonderdeel het betreft (funderingspalen) en zoek in de inhoudsopgave het bijbehorende hoofdstuk (hier: 20 FUNDERINGSPALEN EN DAMWANDEN). 2) Blader naar dat hoofdstuk en zoek de paragraaf die over het specifieke onderdeel gaat (bijvoorbeeld 20.32 IN DE GROND GEVORMDE PALEN). 3) Lees het bestekartikel door tot je het gezochte gegeven vindt (bijvoorbeeld bij "BETONMORTEL": de sterkteklasse).',
      ],
      explanation: 'De inhoudsopgave is de ingang; STABU-hoofdstukken zijn per bouwonderdeel/discipline ingedeeld, dus als je weet wélk bouwdeel je zoekt, weet je meteen welk hoofdstuk je moet raadplegen.',
      attachments: BESTEK,
    },
    {
      id: 'BL.8.q6', toetstermCode: 'BL.8.2', type: 'open',
      prompt: 'Je bent op een kijkdag bij deze woning. Een koper vraagt je wat voor soort verwarming er in de badkamer op de 1e verdieping zit. Welke bijlage(s) zou je raadplegen, en wat zou je antwoord zijn?',
      acceptableAnswers: [
        'Je raadpleegt de installatietekening "plattegronden VERWARMING" (en eventueel het bestek hoofdstuk 60). Op de tekening staat bij de badkamer op de 1e verdieping vermeld: "elektrische vloerverwarming door Velegro" — dus de badkamer heeft elektrische vloerverwarming, in plaats van de vloerverwarming/radiatoren die de rest van de woning verwarmen.',
      ],
      explanation: 'De installatietekeningen (plattegronden VERWARMING) geven per ruimte aan welk verwarmingssysteem is toegepast; voor de badkamer wijkt dit af van de rest van de woning.',
      attachments: [...BESTEK, ...TEKENING_A3],
    },
  ],
}
