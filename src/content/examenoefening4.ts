import type { Question } from '../types/content'

/**
 * Grote batch UITDAGENDE vragen op toepassings-/analyse-/evaluatieniveau
 * (Bloom T/A/E), minimaal 3 per dossier-onderwerp. In de casus- en
 * toepassingsstijl van de echte SVMNIVO-proeftoets. Geen kopieën van de
 * officiële oefenexamens; antwoordsleutels volgen uit de lesstof.
 */
export const examenoefening4Vragen: Record<string, Question[]> = {
  // ───────────────────────── A · Algemeen ─────────────────────────
  'A.1': [
    {
      id: 'A.1.m1',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt:
        'Een opdrachtgever heeft het definitief ontwerp goedgekeurd en laat nu het bestek maken, de omgevingsvergunning aanvragen en het werk aanbesteden. In welke fase zit het project?',
      options: ['De voorbereidingsfase', 'De ontwerpfase', 'De uitvoeringsfase', 'De initiatieffase'],
      correctIndex: 0,
      explanation:
        'Bestek opstellen, vergunning aanvragen en aanbesteden gebeurt in de voorbereidingsfase — ná het ontwerp en vóór de uitvoering.',
    },
    {
      id: 'A.1.m2',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt:
        'Bij een woning die onder de UAV is gebouwd, komt een half jaar na oplevering een verborgen gebrek aan het licht. Wie is hiervoor in beginsel aansprakelijk?',
      options: [
        'De aannemer, binnen de geldende aansprakelijkheidstermijn',
        'De opdrachtgever, want die heeft opgeleverd',
        'De gemeente die de vergunning gaf',
        'Niemand; na oplevering vervalt alle aansprakelijkheid',
      ],
      correctIndex: 0,
      explanation:
        'Voor verborgen gebreken blijft de aannemer na oplevering nog een bepaalde termijn aansprakelijk. Zichtbare gebreken moeten juist bij oplevering worden gemeld.',
    },
    {
      id: 'A.1.m3',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt:
        'Welke kostenpost hoort NIET bij de directe bouwkosten, maar bij de bijkomende kosten van een bouwproject?',
      options: [
        'Het honorarium van de architect en adviseurs',
        'Het metsel- en voegwerk',
        'Het heiwerk voor de fundering',
        'De dakbedekking',
      ],
      correctIndex: 0,
      explanation:
        'Honoraria (architect, adviseurs), leges en verzekeringen zijn bijkomende kosten. Metsel-, hei- en dakwerk zijn directe bouwkosten (het fysieke bouwen).',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.m1',
      toetstermCode: 'A.2.1.2',
      type: 'mc',
      prompt:
        'Op een detailtekening met schaal 1:5 meet je een onderdeel op als 30 mm. Hoe groot is dit onderdeel in werkelijkheid?',
      options: ['150 mm', '30 mm', '6 mm', '1500 mm'],
      correctIndex: 0,
      explanation:
        'Bij schaal 1:5 is de werkelijkheid 5× de tekeningmaat: 30 mm × 5 = 150 mm.',
    },
    {
      id: 'A.2.1.m2',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Waarvoor dient de renvooi op een bouwtekening?',
      options: [
        'Als verklaring van de gebruikte symbolen, arceringen en afkortingen',
        'Om de schaal van de tekening aan te geven',
        'Om het noorden aan te geven',
        'Om het peil (P) vast te leggen',
      ],
      correctIndex: 0,
      explanation:
        'De renvooi is de legenda: hij verklaart welke symbolen, arceringen en codes op de tekening staan. Schaal, noordpijl en peil zijn aparte aanduidingen.',
    },
    {
      id: 'A.2.1.m3',
      toetstermCode: 'A.2.1.2',
      type: 'mc',
      prompt: 'Wat is het belangrijkste verschil tussen een bestektekening en een werktekening?',
      options: [
        'De bestektekening hoort bij het contract/de aanbesteding; de werktekening is gedetailleerder en dient voor de uitvoering',
        'De werktekening is altijd op schaal 1:1000',
        'De bestektekening bevat geen maten',
        'Er is geen verschil; het zijn synoniemen',
      ],
      correctIndex: 0,
      explanation:
        'De bestektekening hoort bij bestek en aanbesteding (contractstukken). De werktekening is uitgewerkter en wordt op de bouwplaats gebruikt om te bouwen.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.m1',
      toetstermCode: 'A.2.2.3',
      type: 'mc',
      prompt:
        'Een woning heeft machinale baksteen in strak halfsteensverband, betonlateien boven de ramen en stalen kozijnen met enkel glas. Uit welke periode stamt de woning het meest waarschijnlijk?',
      options: ['De jaren 30 (interbellum)', 'Rond 1880', 'De jaren 70', 'Na 2010'],
      correctIndex: 0,
      explanation:
        'Machinale baksteen, betonlateien en stalen kozijnen met enkel glas zijn kenmerkend voor de jaren 30. Vóór ~1900 was er geen spouw/betonlatei; na de oorlog kwamen andere materialen.',
    },
    {
      id: 'A.2.2.m2',
      toetstermCode: 'A.2.2.4',
      type: 'mc',
      prompt:
        'Welke architectuurstroming past bij het motto "vorm volgt functie", met veel glas en beton, platte daken en een strakke, zakelijke uitstraling?',
      options: [
        'Het Functionalisme / Nieuwe Bouwen',
        'De Amsterdamse School',
        'De Jugendstil',
        'De Chaletstijl',
      ],
      correctIndex: 0,
      explanation:
        'Het Functionalisme (Nieuwe Bouwen / Nieuwe Zakelijkheid) is strak en functioneel. De Amsterdamse School is juist expressief in baksteen; Jugendstil is sierlijk-organisch.',
    },
    {
      id: 'A.2.2.m3',
      toetstermCode: 'A.2.2.2',
      type: 'mc',
      prompt:
        'Twee zelfstandige woningen delen samen één doorgaande kap en staan gespiegeld tegen elkaar aan. Welk woningtype is dit?',
      options: ['Twee-onder-een-kapwoning', 'Rijtjeswoning', 'Vrijstaande woning', 'Portiekwoning'],
      correctIndex: 0,
      explanation:
        'Twee gespiegelde woningen onder één kap vormen een twee-onder-een-kapwoning. Bij een rij van drie of meer spreek je van rijtjes-/tussenwoningen.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.m1',
      toetstermCode: 'A.3.7',
      type: 'mc',
      prompt:
        'Een eigenaar wil in een tussenwoning een dragende muur tussen woonkamer en keuken verwijderen. Wat geldt hiervoor?',
      options: [
        'Dit is vergunningplichtig, want de draagconstructie wordt gewijzigd',
        'Dit is altijd vergunningsvrij binnen in de woning',
        'Dit mag alleen de gemeente uitvoeren',
        'Hiervoor is uitsluitend een sloopmelding nodig',
      ],
      correctIndex: 0,
      explanation:
        'Ingrepen in de draagconstructie zijn vergunningplichtig (constructieve veiligheid). Alleen niet-constructieve, inpandige wijzigingen zijn vaak vergunningsvrij.',
    },
    {
      id: 'A.3.m2',
      toetstermCode: 'A.3.6',
      type: 'mc',
      prompt:
        'De Wet kwaliteitsborging (Wkb) is ingevoerd met een "knip". Wat houdt die knip in?',
      options: [
        'De bouwtechnische toets is losgekoppeld van de ruimtelijke (omgevingsplan-)toets',
        'De vergunning wordt in twee helften betaald',
        'Het bouwwerk wordt in twee fasen opgeleverd',
        'De aannemer en architect worden gesplitst',
      ],
      correctIndex: 0,
      explanation:
        'De "knip" scheidt het bouwtechnische deel (nu geborgd door een onafhankelijke kwaliteitsborger, Wkb) van het ruimtelijke deel (omgevingsplan, gemeente).',
    },
    {
      id: 'A.3.m3',
      toetstermCode: 'A.3.2',
      type: 'multi',
      prompt:
        'Welke ruimten tellen volgens de BBMI NIET mee bij de gebruiksoppervlakte wonen? (meerdere juist)',
      options: [
        'Een onverwarmde inpandige garage',
        'Een vrijstaande schuur in de tuin',
        'De woonkamer',
        'Een slaapkamer op de verdieping',
      ],
      correctIndices: [0, 1],
      explanation:
        'Onverwarmde ruimten (garage) en externe bergingen (vrijstaande schuur) worden apart opgegeven, niet bij de woonoppervlakte. Woon- en slaapkamers tellen wél mee.',
    },
  ],

  // ─────────────────────── B · Constructieve opbouw ───────────────────────
  'B.1': [
    {
      id: 'B.1.m1',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'De Vitruvius-kwaliteit "firmitas" leeft in moderne regelgeving voort. In welke hedendaagse eis is dat het duidelijkst terug te zien?',
      options: [
        'De constructieve veiligheid (draagkracht en stabiliteit)',
        'De energiezuinigheid (BENG)',
        'De esthetische welstand',
        'De toegankelijkheid voor minder-validen',
      ],
      correctIndex: 0,
      explanation:
        'Firmitas = stevigheid/duurzaamheid; dat vertaalt zich naar de eis van constructieve veiligheid. Bruikbaarheid (utilitas) en schoonheid (venustas) zijn de andere twee.',
    },
    {
      id: 'B.1.m2',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Welke van de drie Vitruvius-kwaliteiten is het meest subjectief en tijdgebonden?',
      options: ['Venustas (schoonheid)', 'Firmitas (stevigheid)', 'Utilitas (bruikbaarheid)', 'Alle drie evenveel'],
      correctIndex: 0,
      explanation:
        'Schoonheid (venustas) is smaakgevoelig en verandert met de tijd/mode. Stevigheid en bruikbaarheid zijn objectiever te toetsen.',
    },
    {
      id: 'B.1.m3',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Een appartement is fraai en stevig, maar de slaapkamers zijn alleen via de badkamer bereikbaar. Aan welke kwaliteit schort het?',
      options: ['Utilitas (bruikbaarheid)', 'Firmitas (stevigheid)', 'Venustas (schoonheid)', 'Aan geen enkele'],
      correctIndex: 0,
      explanation:
        'Een onhandige, onlogische indeling is een gebrek aan bruikbaarheid (utilitas), ook al zijn stevigheid en schoonheid in orde.',
    },
  ],
  'B.2': [
    {
      id: 'B.2.m1',
      toetstermCode: 'B.2.1',
      type: 'multi',
      prompt: 'Welke onderdelen behoren tot de elementengroep "opbouw" (de bovengrondse draagstructuur)? (meerdere juist)',
      options: ['Dragende binnen- en buitenwanden', 'Verdiepingsvloeren', 'De fundering op palen', 'De cv-installatie'],
      correctIndices: [0, 1],
      explanation:
        'De opbouw omvat de bovengrondse dragende wanden en vloeren. De fundering en de installaties zijn eigen elementengroepen.',
    },
    {
      id: 'B.2.m2',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Waarom is het voor een makelaar nuttig om de hoofdopbouw in elementengroepen te kennen?',
      options: [
        'Om gericht te kunnen beoordelen welk deel een gebrek heeft en wie/wat daarbij hoort',
        'Om de exacte bouwkosten te berekenen',
        'Om de architectuurstroming te bepalen',
        'Om het energielabel af te geven',
      ],
      correctIndex: 0,
      explanation:
        'Door in elementengroepen te denken (fundering, opbouw, dak, afwerking, installaties) kun je gebreken plaatsen en de juiste conclusie/verwijzing geven.',
    },
    {
      id: 'B.2.m3',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt: 'Welke elementengroep brengt de belastingen van de opbouw over naar de draagkrachtige grondlaag?',
      options: ['De fundering', 'Het dak', 'De afwerking', 'De installaties'],
      correctIndex: 0,
      explanation:
        'De fundering draagt alle belastingen (permanent + variabel) af naar de draagkrachtige ondergrond.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.m1',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt:
        'Een stalen ligger buigt onder belasting door. Waar in de doorsnede treden de grootste trekspanningen op?',
      options: [
        'Aan de onderzijde van de ligger',
        'Aan de bovenzijde van de ligger',
        'In het hart (de neutrale lijn)',
        'Gelijkmatig over de hele hoogte',
      ],
      correctIndex: 0,
      explanation:
        'Bij een vrij opgelegde, doorbuigende ligger rekt de onderzijde uit (trek) en wordt de bovenzijde ingedrukt (druk). In het hart (neutrale lijn) is de spanning nul.',
    },
    {
      id: 'B.3.m2',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt:
        'Een console draagt een balkon dat uit de gevel steekt. Welk krachtenspel treedt bovenin de inklemming op?',
      options: [
        'Trek aan de bovenzijde (het balkon "trekt" de inklemming open)',
        'Druk aan de bovenzijde',
        'Alleen afschuiving, geen trek of druk',
        'Geen enkele kracht',
      ],
      correctIndex: 0,
      explanation:
        'Bij een uitkraging buigt het vrije uiteinde omlaag; daardoor treedt bovenin de inklemming juist trek op (en onderin druk) — omgekeerd aan een vrij opgelegde ligger.',
    },
    {
      id: 'B.3.m3',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt:
        'Je vergroot de overspanning van een vloer zonder de vloerdikte aan te passen. Wat is het gevolg?',
      options: [
        'De doorbuiging neemt toe; de vloer moet zwaarder/dikker worden uitgevoerd',
        'De doorbuiging neemt af',
        'Er verandert niets aan de doorbuiging',
        'De vloer wordt automatisch sterker',
      ],
      correctIndex: 0,
      explanation:
        'Een grotere overspanning geeft bij gelijke dikte meer doorbuiging en spanning. Daarom moet de constructie zwaarder (dikker/sterker) worden of extra ondersteund.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.m1',
      toetstermCode: 'B.4.6',
      type: 'mc',
      prompt:
        'Een woning uit 1905 in West-Nederland op houten palen vertoont scheuren en klemmende deuren. De grondwaterstand is de laatste jaren verlaagd. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Paalrot: droogstand van de houten paalkoppen door lage grondwaterstand',
        'Betonrot in de fundering',
        'Te hoge grondwaterstand die de palen laat drijven',
        'Negatieve kleef door ophoging',
      ],
      correctIndex: 0,
      explanation:
        'Houten palen moeten onder water blijven. Bij droogstand (te lage grondwaterstand) rotten de koppen weg → zakking, scheuren, klemmende deuren. Klassiek funderingsprobleem in West-Nederland.',
    },
    {
      id: 'B.4.m2',
      toetstermCode: 'B.4.5',
      type: 'mc',
      prompt:
        'Een garage wordt bijgebouwd op stevige zandgrond dicht onder het maaiveld. Welke fundering ligt het meest voor de hand?',
      options: [
        'Fundering op staal (stroken- of plaatfundering)',
        'Een diepe paalfundering met heipalen',
        'Fundering met damwanden',
        'Helemaal geen fundering',
      ],
      correctIndex: 0,
      explanation:
        'Als de draagkrachtige laag dicht onder het maaiveld ligt, volstaat een ondiepe fundering "op staal". Heipalen zijn nodig als de vaste laag diep zit.',
    },
    {
      id: 'B.4.m3',
      toetstermCode: 'B.4.3',
      type: 'mc',
      prompt:
        'Voor een nieuwbouwproject wil men zowel de draagkracht als de exacte laagopbouw van de bodem kennen. Welke combinatie van onderzoek is dan logisch?',
      options: [
        'Sonderingen voor de draagkracht, aangevuld met boringen voor de laagopbouw',
        'Alleen een enkele sondering',
        'Alleen een energielabel',
        'Alleen een kadastrale meting',
      ],
      correctIndex: 0,
      explanation:
        'Sonderingen meten de weerstand/draagkracht; boringen geven de samenstelling van de lagen. In de praktijk worden ze gecombineerd.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.m1',
      toetstermCode: 'B.5.9',
      type: 'mc',
      prompt:
        'Bij een spouwmuur zie je op de gevel roestbruine strepen onder de spouwankers en her en der afgesprongen baksteen. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Roestende (niet-roestvaste) spouwankers die uitzetten en de steen beschadigen',
        'Te weinig isolatie in de spouw',
        'Een verkeerd metselverband',
        'Een te lage lintvoeg',
      ],
      correctIndex: 0,
      explanation:
        'Oude, niet-roestvaste spouwankers roesten, zetten uit en drukken/springen de steen kapot; de roest lekt als strepen naar buiten. Moderne ankers zijn RVS.',
    },
    {
      id: 'B.5.m2',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt:
        'Boven een brede raamopening in metselwerk is gekozen voor een zichtbare gemetselde rollaag. Welke functie moet daar constructief nog worden geborgd?',
      options: [
        'De belasting dragen via een verborgen stalen latei of geveldrager achter de rollaag',
        'Niets; een rollaag draagt zelf elke belasting',
        'De opening luchtdicht maken',
        'De gevel isoleren',
      ],
      correctIndex: 0,
      explanation:
        'Een gemetselde rollaag is bij grotere overspanningen vooral esthetisch; de last wordt gedragen door een stalen latei/geveldrager erachter.',
    },
    {
      id: 'B.5.m3',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt:
        'Een "koppenmaat" en een "lagenmaat" worden op de bouw gebruikt. Wat geeft de lagenmaat aan?',
      options: [
        'De hoogte van één laag steen inclusief één voeg',
        'De lengte van een strek plus een kop',
        'De dikte van de spouw',
        'Het aantal stenen per m²',
      ],
      correctIndex: 0,
      explanation:
        'De lagenmaat is de hoogte van steen + voeg samen; hiermee bepaal je hoeveel lagen op een bepaalde hoogte passen. De koppenmaat gaat over de breedterichting.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.m1',
      toetstermCode: 'B.6.2',
      type: 'mc',
      prompt:
        'In een doorgaande (over meerdere steunpunten lopende) betonvloer: waar moet bovenin extra wapening liggen?',
      options: [
        'Boven de tussensteunpunten, want daar treedt bovenin trek op',
        'Alleen in het midden van de overspanning',
        'Nergens bovenin; wapening hoort altijd onderin',
        'Gelijkmatig over de hele dikte',
      ],
      correctIndex: 0,
      explanation:
        'Bij doorgaande liggers/vloeren treedt boven de steunpunten trek op aan de bovenzijde; daar moet dus (ook) bovenwapening liggen. In de velden zit de trek onderin.',
    },
    {
      id: 'B.6.m2',
      toetstermCode: 'B.6.6',
      type: 'mc',
      prompt:
        'Een aannemer wil bouwtijd besparen en op de bouwplaats minder afhankelijk zijn van het weer. Welke betonbouwwijze past daarbij het best?',
      options: [
        'Prefab beton (in de fabriek gemaakte elementen)',
        'In het werk gestort beton met bekisting',
        'Metselwerk in kalkmortel',
        'Traditioneel houtskeletbouw ter plaatse',
      ],
      correctIndex: 0,
      explanation:
        'Prefab wordt weer-onafhankelijk in de fabriek gemaakt en snel gemonteerd — kortere bouwtijd en constante kwaliteit. Nadeel: transport en hijskraan nodig.',
    },
    {
      id: 'B.6.m3',
      toetstermCode: 'B.6.4',
      type: 'mc',
      prompt:
        'Bij een balkon van gewapend beton uit de jaren 60 zie je roestplekken en afgespatte betonschollen met zichtbare wapening. Wat is er aan de hand en wat is de oorzaak?',
      options: [
        'Betonrot door carbonatatie/te weinig dekking; de wapening roest en drukt het beton eraf',
        'Bevriezing van te nat beton',
        'Aantasting door houtworm',
        'Uitbloei van kalk zonder gevolgen',
      ],
      correctIndex: 0,
      explanation:
        'Roestende wapening die het beton afdrukt = betonrot, meestal door carbonatatie en te geringe dekking. Vooral oudere balkons zijn hier gevoelig voor.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.m1',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt:
        'Waarom moet een stalen draagconstructie in veel gebouwen brandwerend worden bekleed, terwijl staal zelf onbrandbaar is?',
      options: [
        'Staal verliest bij hoge temperatuur snel zijn sterkte en kan dan bezwijken',
        'Staal vat bij brand vlam',
        'Staal geeft giftige rook af',
        'Staal geleidt geen warmte',
      ],
      correctIndex: 0,
      explanation:
        'Staal brandt niet, maar verliest rond 500 °C fors aan sterkte en kan bezwijken. Een brandwerende bekleding vertraagt het opwarmen en houdt de draagkracht langer in stand.',
    },
    {
      id: 'B.7.m2',
      toetstermCode: 'B.7.4',
      type: 'mc',
      prompt:
        'Een staalconstructie moet op de bouwplaats snel en demontabel worden gemonteerd. Welke verbinding past daar het best bij?',
      options: [
        'Boutverbindingen',
        'Doorgelaste stompe lassen',
        'Klinknagels',
        'Verlijmde verbindingen',
      ],
      correctIndex: 0,
      explanation:
        'Boutverbindingen zijn snel op de bouw te maken én demontabel. Lassen is permanent en vraagt meer werk/omstandigheden ter plaatse.',
    },
    {
      id: 'B.7.m3',
      toetstermCode: 'B.7.1',
      type: 'mc',
      prompt:
        'Een architect kiest bewust voor cortenstaal in de gevel en accepteert dat het gaat roesten. Waarom kan dat?',
      options: [
        'De vaste roestlaag beschermt het onderliggende staal tegen verdere corrosie',
        'Cortenstaal roest nooit door',
        'De roest maakt het staal sterker',
        'Roest is nodig voor de brandwerendheid',
      ],
      correctIndex: 0,
      explanation:
        'Bij cortenstaal vormt zich een dichte, hechtende roestlaag (patina) die als beschermlaag werkt en verdere aantasting afremt.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.m1',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt:
        'Bij een lange zinken dakgoot in de volle zon ontstaan na een paar jaar scheuren op de naden. Wat is de oorzaak en de oplossing?',
      options: [
        'Zink zet sterk uit bij warmte; er zijn uitzetstukken (roeven/expansiestukken) nodig',
        'Zink krimpt bij warmte; de goot moet strakker vastgezet worden',
        'De goot moet van hout zijn',
        'Er is te weinig isolatie in de goot',
      ],
      correctIndex: 0,
      explanation:
        'Zink heeft een grote uitzettingscoëfficiënt. Zonder uitzetvoorzieningen bouwt spanning op en scheuren de naden. Daarom werkt men met uitzetstukken.',
    },
    {
      id: 'B.8.m2',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt:
        'Bij de aansluiting van een schoorsteen op een pannendak is een grijs, zeer buigzaam metaal in de voegen gewerkt om het waterdicht te maken. Welk metaal is dit?',
      options: ['Lood', 'Zink', 'Aluminium', 'Koper'],
      correctIndex: 0,
      explanation:
        'Lood is zeer vervormbaar en waterdicht; het wordt gebruikt voor loketten/slabben bij aansluitingen van schoorstenen en dakvlakken.',
    },
    {
      id: 'B.8.m3',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt:
        'Op een oud dak zit een groen uitgeslagen metalen bedekking. Om welk non-ferro metaal gaat het en is die groene laag een probleem?',
      options: [
        'Koper; de groene patina beschermt juist en is geen gebrek',
        'Zink; de groene laag betekent dat het is doorgeroest',
        'Aluminium; de laag moet worden verwijderd',
        'Lood; de groene laag is giftig stof',
      ],
      correctIndex: 0,
      explanation:
        'Koper vormt in de buitenlucht een groene patina (kopercarbonaat) die het onderliggende koper beschermt. Het is dus geen schade.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.m1',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt:
        'Onderin een houten kozijn aan de weerzijde is het hout zacht, verkleurd en brokkelig. Wat is de oorzaak en wat is de aanpak?',
      options: [
        'Houtrot door langdurig vocht; aangetast hout uithakken en herstellen/vervangen, en de vochtbron aanpakken',
        'Houtworm; het hout schilderen lost het op',
        'Normale veroudering; niets aan doen',
        'Te droge lucht; het hout bevochtigen',
      ],
      correctIndex: 0,
      explanation:
        'Zacht, brokkelig, verkleurd hout onderin een kozijn is houtrot (schimmel) door vocht. Herstel = aangetast deel verwijderen/vervangen én de vochtoorzaak wegnemen.',
    },
    {
      id: 'B.9.m2',
      toetstermCode: 'B.9.1',
      type: 'mc',
      prompt:
        'Een klant vraagt waarom een massief houten tafelblad in de winter kieren vertoont en in de zomer weer sluit. Wat is de verklaring?',
      options: [
        'Het "werken" van hout: het krimpt bij droge lucht en zwelt bij vocht',
        'Het hout is verrot',
        'De lijmnaden smelten in de zomer',
        'Het hout zet uit door warmte, niet door vocht',
      ],
      correctIndex: 0,
      explanation:
        'Hout neemt vocht op en staat het af; daardoor zwelt en krimpt het ("werken"). In de droge winterlucht krimpt het (kieren), in de vochtige zomer zwelt het.',
    },
    {
      id: 'B.9.m3',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt:
        'Voor een constructief dragende ligger in houtbouw wordt gekozen voor kruislaaghout (CLT). Wat is het voordeel van CLT?',
      options: [
        'Door de kruislings verlijmde lagen is het maatvast en sterk in meerdere richtingen',
        'Het is goedkoper dan elk ander materiaal',
        'Het is volledig onbrandbaar',
        'Het hoeft niet verduurzaamd te worden omdat het nooit vocht opneemt',
      ],
      correctIndex: 0,
      explanation:
        'CLT bestaat uit kruislings verlijmde houtlagen, waardoor het in twee richtingen sterk en maatvast is — geschikt voor vloeren en wanden in houtbouw.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.m1',
      toetstermCode: 'B.10.3',
      type: 'mc',
      prompt:
        'Bij nieuwbouw wordt eerst het metselwerk gemaakt en pas later het kozijn geplaatst in een gereedgemaakte opening. Welk type kozijn hoort daarbij?',
      options: ['Een montagekozijn (met stelkozijn)', 'Een inmetselkozijn', 'Een taatskozijn', 'Een schuifkozijn'],
      correctIndex: 0,
      explanation:
        'Een montagekozijn wordt ná het metselwerk in de opening gemonteerd (vaak met een stelkozijn). Een inmetselkozijn wordt tijdens het metselen meteen ingemetseld.',
    },
    {
      id: 'B.10.m2',
      toetstermCode: 'B.10.1',
      type: 'mc',
      prompt:
        'Een opdrachtgever wil weten hoe breed het glas moet zijn. Welke maat van het kozijn is daarvoor bepalend?',
      options: [
        'De sponningmaat (tot in de glassponning gemeten)',
        'De dagmaat (vrije openingsmaat)',
        'De buitenwerkse maat van het kozijnhout',
        'De lagenmaat',
      ],
      correctIndex: 0,
      explanation:
        'Het glas valt in de sponning; de sponningmaat (plus wat instand) bepaalt de glasmaat. De dagmaat is de zichtbare vrije opening.',
    },
    {
      id: 'B.10.m3',
      toetstermCode: 'B.10.6',
      type: 'mc',
      prompt:
        'Een deur valt met een rand over het kozijn heen en dekt zo de naad af. Welk deurtype is dit, en wat is een voordeel?',
      options: [
        'Een opdekdeur; de naad is afgedekt (mooier en beter tegen tocht)',
        'Een stompe deur; hij sluit vlak in het kozijn',
        'Een taatsdeur; hij draait om een centrale as',
        'Een schuifdeur; hij schuift langs het kozijn',
      ],
      correctIndex: 0,
      explanation:
        'Bij een opdekdeur valt de deurrand over het kozijn (afgedekte naad). Een stompe deur valt juist vlak binnen het kozijnvlak.',
    },
  ],
  'B.11': [
    {
      id: 'B.11.m1',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt:
        'Bij een aluminium kozijn ontstaat aan de binnenzijde condens en het voelt koud aan. Welke uitvoering had dit voorkomen?',
      options: [
        'Een thermisch onderbroken aluminium kozijn (kunststof profiel tussen binnen en buiten)',
        'Een dikker aluminium profiel',
        'Enkel glas i.p.v. dubbel glas',
        'Een kozijn zonder rubber afdichting',
      ],
      correctIndex: 0,
      explanation:
        'Aluminium geleidt warmte sterk; zonder thermische onderbreking wordt de binnenzijde koud en ontstaat condens. Een thermisch onderbroken profiel voorkomt de koudebrug.',
    },
    {
      id: 'B.11.m2',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt:
        'Een verhuurder wil onderhoudsarme kozijnen die niet geschilderd hoeven te worden. Welk materiaal past daar het best bij?',
      options: ['Kunststof (PVC)', 'Onbehandeld naaldhout', 'Onbehandeld staal', 'Hardhout met dekkende verf'],
      correctIndex: 0,
      explanation:
        'Kunststof (PVC) kozijnen hoeven niet geschilderd te worden en zijn onderhoudsarm. Hout vraagt periodiek schilderwerk; onbehandeld staal roest.',
    },
    {
      id: 'B.11.m3',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt:
        'Voor een grote pui met zeer slanke profielen en hoge belasting wordt vaak welk kozijnmateriaal gekozen?',
      options: [
        'Staal of aluminium (sterk, slanke profielen mogelijk)',
        'Massief hout, want dat is het slankst',
        'PVC, want dat is het sterkst',
        'Geen enkel; slanke puien bestaan niet',
      ],
      correctIndex: 0,
      explanation:
        'Staal en aluminium zijn sterk en laten slanke profielen toe — geschikt voor grote puien. Kunststof en hout vragen juist dikkere profielen.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.m1',
      toetstermCode: 'B.12.2',
      type: 'mc',
      prompt:
        'In een houten verdiepingsvloer is bij het trapgat een balk dwars aangebracht waarop de onderbroken vloerbalken rusten. Hoe heet die balk?',
      options: ['Raveelbalk', 'Strijkbalk', 'Nokbalk', 'Gording'],
      correctIndex: 0,
      explanation:
        'Rond een sparing (trapgat, schoorsteen) vangt de raveelbalk de afgesneden vloerbalken op. De strijkbalk ligt juist langs de muur.',
    },
    {
      id: 'B.12.m2',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt:
        'In een kruipruimte is het muf, staat water en de onderzijde van de begane-grondvloer is vochtig. Wat is de meest logische maatregel?',
      options: [
        'Ventilatie verbeteren (roosters vrijmaken) en vochtbron/waterprobleem aanpakken',
        'De kruipruimte helemaal luchtdicht afsluiten',
        'De kruipruimte met water vullen',
        'De vloer aan de bovenzijde schilderen',
      ],
      correctIndex: 0,
      explanation:
        'Een vochtige, muffe kruipruimte vraagt om betere ventilatie en het aanpakken van de vochtbron; luchtdicht afsluiten verergert het vochtprobleem juist.',
    },
    {
      id: 'B.12.m3',
      toetstermCode: 'B.12.2',
      type: 'multi',
      prompt: 'Aan een woningscheidende wand tussen twee woningen worden strengere eisen gesteld. Welke? (meerdere juist)',
      options: ['Geluidsisolatie', 'Brandwerendheid', 'Daglichttoetreding', 'Zonwering'],
      correctIndices: [0, 1],
      explanation:
        'Een woningscheidende wand moet geluid tussen buren beperken én brand een bepaalde tijd tegenhouden. Daglicht en zonwering spelen daarbij geen rol.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.m1',
      toetstermCode: 'B.13.4',
      type: 'mc',
      prompt:
        'Een koper twijfelt tussen keramische en betonnen dakpannen. Welke uitspraak over het verschil is juist?',
      options: [
        'Keramische pannen (gebakken klei) gaan doorgaans langer mee; betonpannen zijn zwaarder en vaak goedkoper',
        'Betonpannen zijn gebakken en gaan het langst mee',
        'Keramische pannen zijn van geperst beton',
        'Er is geen enkel verschil in levensduur of gewicht',
      ],
      correctIndex: 0,
      explanation:
        'Keramische (gebakken) pannen hebben doorgaans een langere levensduur; betonpannen zijn zwaarder en vaak goedkoper. Beide zijn gangbaar.',
    },
    {
      id: 'B.13.m2',
      toetstermCode: 'B.13.2',
      type: 'mc',
      prompt:
        'Een oude kap heeft alleen schuine sporen (dakbenen) en géén horizontale liggers. Welke kapconstructie is dit en wat is het gevolg voor de overspanning?',
      options: [
        'Een sporenkap; geschikt voor beperkte overspanningen',
        'Een gordingenkap; geschikt voor grote overspanningen',
        'Een vakwerkligger; ongeschikt voor daken',
        'Een sheddak; alleen voor fabrieken',
      ],
      correctIndex: 0,
      explanation:
        'Zonder gordingen is het een sporenkap, geschikt voor kleinere overspanningen. Bij grotere overspanningen gebruikt men een gordingenkap (met spanten en horizontale gordingen).',
    },
    {
      id: 'B.13.m3',
      toetstermCode: 'B.13.7',
      type: 'mc',
      prompt:
        'Bij een pannendak zie je van binnen op zolder lichtplekken en vochtsporen na regen, terwijl de pannen heel lijken. Wat controleer je als eerste?',
      options: [
        'De onderliggende laag (folie/dakbeschot) en de aansluitingen/loodslabben; een pan kan verschoven zijn',
        'Alleen het energielabel',
        'De fundering',
        'De groepenkast',
      ],
      correctIndex: 0,
      explanation:
        'Lekkage bij ogenschijnlijk hele pannen wijst op verschoven pannen, een lekke onderlaag of falende loodaansluitingen. Die controleer je gericht.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.m1',
      toetstermCode: 'B.14.3',
      type: 'mc',
      prompt:
        'Een trap is te steil en oncomfortabel. Volgens de vuistregel 2×optrede + aantrede ≈ 57–63 cm: wat doe je om de trap flauwer en comfortabeler te maken bij gelijke verdiepingshoogte?',
      options: [
        'De optrede verkleinen en de aantrede vergroten (meer treden, meer ruimtebeslag)',
        'De optrede vergroten en de aantrede verkleinen',
        'Zowel optrede als aantrede verkleinen',
        'Niets; steilheid ligt vast',
      ],
      correctIndex: 0,
      explanation:
        'Kleinere optrede + grotere aantrede maakt de trap flauwer en comfortabeler, maar kost meer treden en dus meer ruimte. De schrede-formule bewaakt het comfort.',
    },
    {
      id: 'B.14.m2',
      toetstermCode: 'B.14.1',
      type: 'mc',
      prompt:
        'In een smalle hal moet een trap met minimaal ruimtebeslag naar de verdieping. Welke trapvorm ligt het meest voor de hand (accepterend dat hij steiler/minder comfortabel is)?',
      options: ['Een spiltrap', 'Een rechte steektrap', 'Een halfslag-bordestrap', 'Een vlizotrap voor dagelijks gebruik'],
      correctIndex: 0,
      explanation:
        'Een spiltrap draait om een spil en neemt weinig grondoppervlak in — ideaal bij ruimtegebrek, maar steiler en minder comfortabel dan een rechte of bordestrap.',
    },
    {
      id: 'B.14.m3',
      toetstermCode: 'B.14.5',
      type: 'mc',
      prompt:
        'In een bestaand pand zonder liftschacht moet toch een lift komen, met beperkte hijshoogte en een machinekamer naast de schacht. Welk lifttype past hier vaak het best?',
      options: [
        'Een hydraulische lift (plunjer/oliedruk)',
        'Een tractielift met tegengewicht over de volledige bouwhoogte',
        'Een roltrap',
        'Een goederenlift zonder aandrijving',
      ],
      correctIndex: 0,
      explanation:
        'Hydraulische liften zijn geschikt voor beperkte hijshoogte en vragen geen doorlopende schacht met tegengewicht/bovenhuis, wat bij inbouw in bestaande panden praktisch is.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.m1',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Voor een binnenriool- en hemelwaterafvoer wordt een lichte, goed verlijmbare kunststof gekozen. Welke is dat?',
      options: ['PVC', 'Polycarbonaat (PC)', 'Perspex (PMMA)', 'EPS'],
      correctIndex: 0,
      explanation:
        'PVC is licht, sterk en goed te verlijmen — standaard voor riolerings- en hemelwaterbuizen. PC/PMMA zijn doorzichtige plaatmaterialen; EPS is isolatie.',
    },
    {
      id: 'B.15.m2',
      toetstermCode: 'B.15.2',
      type: 'mc',
      prompt:
        'Voor een lichtkoepel is een doorzichtig, zeer slagvast materiaal nodig dat niet snel breekt. Welke kunststof kies je?',
      options: ['Polycarbonaat (PC)', 'PVC', 'Polyetheen (PE)', 'Bitumen'],
      correctIndex: 0,
      explanation:
        'Polycarbonaat is helder én zeer slagvast, ideaal voor lichtkoepels en overkappingen. Perspex (PMMA) is ook helder maar breekbaarder.',
    },
    {
      id: 'B.15.m3',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Een leverancier zegt dat een kunststof "thermoplastisch" is. Wat betekent dat voor recycling en verwerking?',
      options: [
        'Het wordt zacht bij verwarmen en is opnieuw te vormen/recyclen',
        'Het blijft bij verwarmen keihard en is niet te recyclen',
        'Het is altijd doorzichtig',
        'Het is per definitie brandwerend',
      ],
      correctIndex: 0,
      explanation:
        'Thermoplasten (PE, PVC, PP) worden zacht bij warmte en zijn hersmeltbaar/recyclebaar. Thermoharders blijven na uitharden hard en zijn niet omvormbaar.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.m1',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Op een omkeerdak komt de isolatie bóven de waterdichte laag te liggen, dus in het water en onder druk (grind/tegels). Welk isolatiemateriaal is hiervoor geschikt?',
      options: ['XPS (geëxtrudeerd polystyreen)', 'Glaswol', 'Steenwol', 'Vlasisolatie'],
      correctIndex: 0,
      explanation:
        'XPS is drukvast en neemt geen water op — het enige gangbare materiaal dat bovenop de dakbedekking van een omkeerdak kan liggen. Minerale wol en vlas zouden vollopen.',
    },
    {
      id: 'B.16.m2',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Bij een houten dak wordt tussen de sporen zeer weinig ruimte gevonden, maar toch is een hoge Rc-waarde vereist. Welk isolatiemateriaal is dan het meest doelmatig?',
      options: [
        'PIR of PUR (laagste lambda, meeste isolatie per cm)',
        'Glaswol',
        'Steenwol',
        'Vlasisolatie',
      ],
      correctIndex: 0,
      explanation:
        'PIR/PUR hebben de laagste lambda-waarde en dus de meeste isolatie per cm — ideaal bij weinig beschikbare dikte.',
    },
    {
      id: 'B.16.m3',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Voor een brandscheiding rond een rookkanaal mag geen kunststofschuim worden gebruikt. Welk isolatiemateriaal is hier juist geschikt?',
      options: ['Steenwol (onbrandbaar, hittebestendig)', 'EPS', 'XPS', 'PUR'],
      correctIndex: 0,
      explanation:
        'Steenwol is onbrandbaar en bestand tegen hoge temperaturen — geschikt bij brand en rond rookkanalen. EPS/XPS/PUR smelten of branden juist.',
    },
  ],

  // ─────────────────── C · Afwerking en installaties ───────────────────
  'C.1': [
    {
      id: 'C.1.m1',
      toetstermCode: 'C.1.2',
      type: 'mc',
      prompt:
        'In een nieuwbouwwijk wordt schoon regenwater apart van het vuilwater afgevoerd naar oppervlaktewater/infiltratie. Welk rioolstelsel is dit en wat is het voordeel?',
      options: [
        'Een gescheiden stelsel; de zuivering wordt niet onnodig belast met schoon regenwater',
        'Een gemengd stelsel; goedkoper aan te leggen',
        'Een drukriolering; nodig bij hoogteverschil',
        'Een beerput; voor afgelegen woningen',
      ],
      correctIndex: 0,
      explanation:
        'Een gescheiden stelsel voert vuil- en regenwater apart af, zodat de zuivering alleen echt vuil water hoeft te verwerken en riooloverstorten minder nodig zijn.',
    },
    {
      id: 'C.1.m2',
      toetstermCode: 'C.1.5',
      type: 'mc',
      prompt:
        'Uit een zelden gebruikte logeerbadkamer komt rioollucht. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Een drooggevallen sifon (stankafsluiter) waardoor het waterslot weg is',
        'Een verstopte hoofdleiding',
        'Een lekkende watermeter',
        'Een te hoge waterdruk',
      ],
      correctIndex: 0,
      explanation:
        'Bij weinig gebruik kan het water in de sifon verdampen; het waterslot verdwijnt en rioollucht komt binnen. Even doorspoelen vult het slot weer.',
    },
    {
      id: 'C.1.m3',
      toetstermCode: 'C.1.6',
      type: 'mc',
      prompt:
        'Bij een woning van vóór 1960 wil je het risico op oude, breekbare rioolbuizen inschatten. Welk materiaal verwacht je in de oude buitenriolering?',
      options: [
        'Gres (aardewerk) of beton',
        'PVC met rubbermanchetten',
        'Roestvast staal',
        'Polyetheen (PE)',
      ],
      correctIndex: 0,
      explanation:
        'Oude buitenriolering is vaak van gres of beton; die kunnen scheuren, verzakken of wortelingroei krijgen. PVC kwam pas later in gebruik.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.m1',
      toetstermCode: 'C.2.7',
      type: 'mc',
      prompt:
        'In een zorginstelling met lange leidingen en soms stilstaand lauw water wil men legionella voorkomen. Welke maatregel is het meest effectief?',
      options: [
        'Warm tapwater op ≥ 60 °C houden en leidingen regelmatig doorspoelen',
        'Het warme water juist op 40 °C instellen om energie te sparen',
        'Alle leidingen van lood maken',
        'De waterdruk verhogen met een hydrofoor',
      ],
      correctIndex: 0,
      explanation:
        'Legionella groeit bij 25–50 °C en in stilstaand water. Warm water ≥ 60 °C houden en doorspoelen (geen dode leidingen) beperkt het risico sterk.',
    },
    {
      id: 'C.2.m2',
      toetstermCode: 'C.2.6',
      type: 'mc',
      prompt:
        'In een woning uit 1930 zie je grijze, zachte waterleidingen die je met een nagel kunt indrukken en die in bochten lopen. Wat is je conclusie en advies?',
      options: [
        'Waarschijnlijk loden leidingen; vanwege gezondheidsrisico adviseren te vervangen',
        'Verzinkt staal; geen actie nodig',
        'Koper; alleen soldeernaden controleren',
        'PVC; prima laten zitten',
      ],
      correctIndex: 0,
      explanation:
        'Grijs, zacht en makkelijk te buigen wijst op lood. Loden drinkwaterleidingen vormen een gezondheidsrisico en worden geadviseerd te vervangen.',
    },
    {
      id: 'C.2.m3',
      toetstermCode: 'C.2.5',
      type: 'mc',
      prompt:
        'In een hoog appartementengebouw is op de bovenste verdiepingen de waterdruk te laag. Welke installatie lost dit op?',
      options: ['Een hydrofoor (drukverhoging)', 'Een wateronthardingsinstallatie', 'Een WTW-douche', 'Een expansievat van de cv'],
      correctIndex: 0,
      explanation:
        'Een hydrofoor verhoogt de waterdruk, nodig als de netdruk onvoldoende is voor de hoogste tappunten. Ontharding en WTW hebben een ander doel.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.m1',
      toetstermCode: 'C.3.3',
      type: 'multi',
      prompt:
        'Een woning gaat volledig van het gas af (all-electric). Welke aanpassingen zijn hiervoor vaak nodig? (meerdere juist)',
      options: [
        'Verzwaring van de elektrische aansluiting/groepenkast',
        'Een warmtepomp en (vaak) lagetemperatuur-afgifte zoals vloerverwarming',
        'Een grotere gasmeter',
        'Een extra schoorsteen',
      ],
      correctIndices: [0, 1],
      explanation:
        'All-electric vraagt meer elektrisch vermogen (verzwaring) en een warmtepomp met lagetemperatuur-afgifte. Een gasmeter en schoorsteen zijn juist niet meer nodig.',
    },
    {
      id: 'C.3.m2',
      toetstermCode: 'C.3.1',
      type: 'mc',
      prompt:
        'Bij een gaslek wil de bewoner snel de toevoer afsluiten. Waar bevindt zich de hoofdgaskraan doorgaans?',
      options: ['Bij de gasmeter in de meterkast', 'Bij de cv-ketel', 'In de kruipruimte', 'Buiten op straat bij het hoofdriool'],
      correctIndex: 0,
      explanation:
        'De hoofdgaskraan zit bij de gasmeter in de meterkast; daarmee sluit je in één keer de gastoevoer naar de woning af.',
    },
    {
      id: 'C.3.m3',
      toetstermCode: 'C.3.2',
      type: 'mc',
      prompt:
        'Op een installatietekening loopt een leiding met een specifieke aanduiding naar de kookplaats en de cv-ketel, met afsluiters bij de toestellen. Om welke leiding gaat het waarschijnlijk?',
      options: ['De gasleiding', 'De hemelwaterafvoer', 'De retourleiding van de cv', 'De datakabel'],
      correctIndex: 0,
      explanation:
        'Een leiding naar kooktoestel én cv-ketel met toestelafsluiters is de gasleiding. Elke gastoestel heeft een eigen afsluitkraan.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.m1',
      toetstermCode: 'C.4.2',
      type: 'mc',
      prompt:
        'Tijdens een keuring test je de knop met "T" op de groepenkast; de hele installatie valt uit. Welk onderdeel is dit en wat is de functie?',
      options: [
        'De aardlekschakelaar; die beschermt tegen elektrocutie bij een lekstroom',
        'De kWh-meter; die registreert het verbruik',
        'De installatieautomaat; die beschermt alleen tegen overbelasting',
        'De hoofdaansluitkast van de netbeheerder',
      ],
      correctIndex: 0,
      explanation:
        'De testknop (T) hoort bij de aardlekschakelaar. Die schakelt bij een lekstroom (bv. via een persoon) razendsnel uit — beveiliging tegen elektrocutie.',
    },
    {
      id: 'C.4.m2',
      toetstermCode: 'C.4.4',
      type: 'mc',
      prompt:
        'Een eigenaar wil een laadpaal én inductiekoken toevoegen in een oude woning met een lichte aansluiting. Wat is het advies?',
      options: [
        'Aansluiting laten verzwaren en groepen bijplaatsen; anders slaat de installatie snel af',
        'Alles op één bestaande groep aansluiten',
        'De gasmeter vergroten',
        'De waterleiding verzwaren',
      ],
      correctIndex: 0,
      explanation:
        'Laadpaal en inductie vragen veel vermogen. In een oude woning met lichte aansluiting is verzwaring en het bijplaatsen van groepen nodig.',
    },
    {
      id: 'C.4.m3',
      toetstermCode: 'C.4.1',
      type: 'mc',
      prompt: 'Waartoe dient de aarding in een elektrische installatie?',
      options: [
        'Foutstromen veilig afvoeren zodat aanraakbare delen niet onder spanning komen',
        'De elektriciteitsrekening verlagen',
        'De waterdruk op peil houden',
        'De cv-ketel ontsteken',
      ],
      correctIndex: 0,
      explanation:
        'De aarding voert foutstromen af naar de aarde, zodat metalen delen niet onder spanning blijven staan; samen met de aardlekschakelaar beschermt dit tegen elektrocutie.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.m1',
      toetstermCode: 'C.5.1',
      type: 'mc',
      prompt:
        'Een klant meldt dat de zonnepanelen wél stroom "maken" maar dat er niets in huis mee gebeurt. Welk onderdeel is vermoedelijk defect?',
      options: [
        'De omvormer (die gelijkstroom naar wisselstroom omzet)',
        'De dakpannen onder de panelen',
        'De watermeter',
        'De cv-ketel',
      ],
      correctIndex: 0,
      explanation:
        'Panelen leveren gelijkstroom; de omvormer maakt daar bruikbare wisselstroom van. Werkt de omvormer niet, dan komt er geen stroom in huis/net.',
    },
    {
      id: 'C.5.m2',
      toetstermCode: 'C.5.2',
      type: 'mc',
      prompt:
        'Twee panelen hebben allebei 400 Wp. Wat kun je op basis daarvan wél en niet concluderen?',
      options: [
        'Wel het piekvermogen onder testcondities; níét de werkelijke jaaropbrengst (die hangt af van ligging en weer)',
        'De exacte jaaropbrengst in kWh',
        'De terugverdientijd in jaren',
        'Het gewicht van het paneel',
      ],
      correctIndex: 0,
      explanation:
        'Wattpiek is het piekvermogen onder standaard testcondities. De echte opbrengst hangt af van oriëntatie, hellingshoek, schaduw en weer.',
    },
    {
      id: 'C.5.m3',
      toetstermCode: 'C.5.3',
      type: 'mc',
      prompt:
        'Op een dak liggen panelen die aangesloten zijn op de warmwatervoorziening in plaats van op de meterkast. Wat voor systeem is dit waarschijnlijk?',
      options: [
        'Een zonnecollector/zonneboiler (verwarmt tapwater)',
        'Een PV-installatie (maakt elektriciteit)',
        'Een omvormer',
        'Een warmtepomp',
      ],
      correctIndex: 0,
      explanation:
        'Panelen die water verwarmen zijn zonnecollectoren (zonneboiler). PV-panelen maken juist elektriciteit en gaan via een omvormer naar de meterkast/het net.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.m1',
      toetstermCode: 'C.6.7',
      type: 'mc',
      prompt:
        'Een woning wordt verwarmd met een warmtepomp. Waarom presteert die het best in combinatie met vloerverwarming?',
      options: [
        'Vloerverwarming werkt op lage temperatuur (LTV), waarbij de warmtepomp efficiënt is',
        'Vloerverwarming vraagt juist hoge temperatuur, wat de warmtepomp fijn vindt',
        'Omdat vloerverwarming geen elektriciteit gebruikt',
        'Omdat de warmtepomp alleen tapwater levert',
      ],
      correctIndex: 0,
      explanation:
        'Een warmtepomp is efficiënter naarmate de gevraagde aanvoertemperatuur lager is. Vloerverwarming (LTV) past daar perfect bij; hoge-temperatuur radiatoren minder.',
    },
    {
      id: 'C.6.m2',
      toetstermCode: 'C.6.7',
      type: 'mc',
      prompt:
        'Waarom haalt een HR-ketel een hoger rendement dan een oude VR-ketel?',
      options: [
        'Hij wint extra warmte terug door de waterdamp in de rookgassen te laten condenseren',
        'Hij verbrandt gas zonder zuurstof',
        'Hij werkt zonder rookgasafvoer',
        'Hij gebruikt zonne-energie',
      ],
      correctIndex: 0,
      explanation:
        'De HR-ketel condenseert de waterdamp in de rookgassen en benut die condensatiewarmte extra — vandaar het hoge rendement t.o.v. een VR-ketel.',
    },
    {
      id: 'C.6.m3',
      toetstermCode: 'C.6.5',
      type: 'mc',
      prompt:
        'Een klant klaagt dat het bij zijn radiator "onderin koud en bovenin warm" is en dat stof rondwarrelt. Via welke warmteoverdracht werkt een radiator vooral, en verklaart dat het verschijnsel?',
      options: [
        'Convectie: opwarmende lucht stijgt en circuleert, wat stof meevoert',
        'Straling: de warmte gaat rechtstreeks door de lucht heen',
        'Geleiding via de vloer',
        'Verdamping van water',
      ],
      correctIndex: 0,
      explanation:
        'Een radiator werkt vooral via convectie: de langsstromende lucht warmt op, stijgt en circuleert (en neemt stof mee). Vandaar de warme bovenzone en het stof.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.m1',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt:
        'In een woning is een systeem dat op warme dagen alleen de ergste warmtepiek wegneemt, maar niet tot een vaste temperatuur koelt. Hoe heet dit?',
      options: ['Topkoeling', 'Volwaardige airconditioning', 'Gebalanceerde ventilatie', 'Vloerverwarming'],
      correctIndex: 0,
      explanation:
        'Topkoeling neemt alleen de bovenste warmtelast weg (de scherpe kantjes). Een echte airco conditioneert de ruimte volledig tot een ingesteld setpoint.',
    },
    {
      id: 'C.7.m2',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt:
        'Een gebouw heeft een systeem dat via luchtbehandeling zowel kan verwarmen als koelen. Onder welke categorie valt dit?',
      options: [
        'Een gecombineerd klimaatsysteem (luchtbehandeling)',
        'Uitsluitend een verwarmingssysteem',
        'Uitsluitend natuurlijke ventilatie',
        'Een losse radiator',
      ],
      correctIndex: 0,
      explanation:
        'Een gecombineerd systeem met luchtbehandeling kan verwarmen én koelen (en vaak ventileren). Een radiator kan alleen verwarmen.',
    },
    {
      id: 'C.7.m3',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt:
        'Waarom kiest men in woningen vaker voor topkoeling dan voor volledige airconditioning?',
      options: [
        'Topkoeling is eenvoudiger en zuiniger; volledige koeling is duur en energie-intensief',
        'Topkoeling koelt juist sterker',
        'Airco kan niet in woningen',
        'Topkoeling verwarmt ook het tapwater',
      ],
      correctIndex: 0,
      explanation:
        'Voor woningen volstaat vaak topkoeling: goedkoper en zuiniger dan volledige airconditioning, die veel energie vraagt.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.m1',
      toetstermCode: 'C.8.5',
      type: 'mc',
      prompt:
        'Bij een appartementengebouw wordt gesproken over een WBDBO-eis van 60 minuten tussen twee woningen. Wat betekent dat concreet?',
      options: [
        'De scheiding moet brand 60 minuten tegenhouden (door- én overslag)',
        'De brandweer moet binnen 60 minuten ter plaatse zijn',
        'De rookmelder gaat na 60 minuten af',
        'De vluchtweg mag 60 meter lang zijn',
      ],
      correctIndex: 0,
      explanation:
        'WBDBO = Weerstand tegen BrandDoorslag en BrandOverslag: de tijd (hier 60 min) dat de scheiding brand tegenhoudt, zowel dwars door de constructie als buitenom.',
    },
    {
      id: 'C.8.m2',
      toetstermCode: 'C.8.1',
      type: 'mc',
      prompt:
        'Voor een woning wordt de gangbare, verplichte rookmelder gekozen die reageert op de verstrooiing van licht door rookdeeltjes. Welk type is dit?',
      options: ['De optische rookmelder', 'De thermische (warmte)melder', 'De koolmonoxidemelder', 'De ionisatiemelder'],
      correctIndex: 0,
      explanation:
        'De optische rookmelder detecteert rook via lichtverstrooiing en is in woningen de standaard (en verplicht). Een thermische melder reageert op temperatuur.',
    },
    {
      id: 'C.8.m3',
      toetstermCode: 'C.8.2',
      type: 'mc',
      prompt:
        'In een keuken vat een pan met hete olie vlam. Wat is de juiste eerste actie?',
      options: [
        'Doven met een deksel of blusdeken (zuurstof afsluiten); nooit met water',
        'Blussen met een emmer water',
        'De pan naar buiten dragen',
        'Er meel op gooien',
      ],
      correctIndex: 0,
      explanation:
        'Water in hete olie verdampt explosief en verspreidt de brand (steekvlam). Een deksel of blusdeken sluit de zuurstof af en dooft de vlam veilig.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.m1',
      toetstermCode: 'C.9.2',
      type: 'mc',
      prompt:
        'Een nieuwbouwwoning heeft mechanische toe- én afvoer met een unit die de warmte uit de afvoerlucht overdraagt aan de verse lucht. Welk systeem is dit en wat is het voordeel?',
      options: [
        'Systeem D met WTW; minder warmteverlies door ventilatie',
        'Systeem C; geen ventilator nodig',
        'Systeem A; volledig natuurlijk',
        'Systeem B; alleen mechanische afvoer',
      ],
      correctIndex: 0,
      explanation:
        'Gebalanceerde ventilatie met warmteterugwinning is systeem D. De WTW-unit voorverwarmt de verse lucht met de warme afvoerlucht → energiewinst.',
    },
    {
      id: 'C.9.m2',
      toetstermCode: 'C.9.3',
      type: 'mc',
      prompt:
        'In een portiekflat blijkt kookgeur van de ene woning bij de buren te ruiken via het ventilatiekanaal. Welke voorziening had dit moeten voorkomen?',
      options: [
        'Een shuntkanaal (collectief kanaal met eigen nevenkanaal per woning)',
        'Een gemeenschappelijk kanaal zonder scheiding',
        'Een hydrofoor',
        'Een aardlekschakelaar',
      ],
      correctIndex: 0,
      explanation:
        'Een shuntkanaal geeft elke woning een eigen nevenkanaal op een gezamenlijk hoofdkanaal, zodat lucht/geur niet naar de buren overslaat.',
    },
    {
      id: 'C.9.m3',
      toetstermCode: 'C.9.1',
      type: 'mc',
      prompt:
        'Een woning heeft gevelroosters voor de toevoer en een mechanische afzuigbox. Welk systeem is dit — en let op de verwisseling met systeem B?',
      options: [
        'Systeem C (natuurlijke toevoer, mechanische afvoer)',
        'Systeem B (mechanische toevoer, natuurlijke afvoer)',
        'Systeem A (volledig natuurlijk)',
        'Systeem D (gebalanceerd met WTW)',
      ],
      correctIndex: 0,
      explanation:
        'Toevoer natuurlijk (roosters) + afvoer mechanisch (box) = systeem C. Bij systeem B is het precies andersom (mechanische toevoer, natuurlijke afvoer).',
    },
  ],
  'C.10': [
    {
      id: 'C.10.m1',
      toetstermCode: 'C.10.1',
      type: 'mc',
      prompt:
        'Een woning wordt geadverteerd met "PKVW". Wat zegt dat een koper?',
      options: [
        'Dat de woning voldoet aan het Politiekeurmerk Veilig Wonen (inbraakpreventie)',
        'Dat de woning een goed energielabel heeft',
        'Dat de woning brandveilig is gekeurd',
        'Dat de woning geluidsisolatie heeft',
      ],
      correctIndex: 0,
      explanation:
        'PKVW = Politiekeurmerk Veilig Wonen: eisen aan o.a. hang- en sluitwerk, verlichting en zicht, gericht op inbraakpreventie.',
    },
    {
      id: 'C.10.m2',
      toetstermCode: 'C.10.2',
      type: 'mc',
      prompt:
        'Een koper wil snel en stabiel internet. Welke aansluiting in de meterkast biedt doorgaans de hoogste, meest stabiele snelheid?',
      options: ['Glasvezel', 'Een oude telefoonlijn (koper)', 'Het gasnet', 'De waterleiding'],
      correctIndex: 0,
      explanation:
        'Glasvezel (data via licht) levert de hoogste en meest stabiele snelheden, beter dan een koperen (telefoon/coax) verbinding.',
    },
    {
      id: 'C.10.m3',
      toetstermCode: 'C.10.3',
      type: 'mc',
      prompt: 'Wat is de kern van "domotica" in een woning?',
      options: [
        'Automatisering en centrale bediening van installaties (licht, verwarming, zonwering, beveiliging)',
        'Een systeem om regenwater te bufferen',
        'Een type fundering',
        'Een vorm van gevelisolatie',
      ],
      correctIndex: 0,
      explanation:
        'Domotica is huisautomatisering: het slim aansturen en koppelen van installaties zoals verlichting, verwarming, zonwering en beveiliging.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.m1',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt:
        'Boven een trapgat en in een deur wordt veiligheidsglas geëist dat na breuk in één geheel blijft hangen (letselwerend). Welk glas kies je?',
      options: ['Gelaagd glas', 'Gehard glas', 'Enkel floatglas', 'Draadglas'],
      correctIndex: 0,
      explanation:
        'Gelaagd glas heeft een taaie folie; bij breuk blijven de scherven aan de folie plakken (letsel- en inbraakwerend). Gehard glas valt juist uiteen in stompe korrels.',
    },
    {
      id: 'C.11.m2',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt:
        'Een woning aan een drukke weg heeft last van geluidsoverlast. Welke glaseigenschap is hier het belangrijkst bij vervanging?',
      options: [
        'Geluidwerend (akoestisch) glas, vaak gelaagd en met asymmetrische opbouw',
        'Zonwerend glas (lage ZTA)',
        'De laagste Ug voor warmte',
        'Draadglas',
      ],
      correctIndex: 0,
      explanation:
        'Tegen verkeerslawaai kies je geluidwerend glas (vaak gelaagd, asymmetrische bladdiktes). Zonwerend en isolerend glas lossen geluidsoverlast niet op.',
    },
    {
      id: 'C.11.m3',
      toetstermCode: 'C.11.5',
      type: 'mc',
      prompt:
        'Tussen de twee bladen van een dubbelglasruit is condens/damp zichtbaar die je niet kunt wegpoetsen. Wat is er aan de hand?',
      options: [
        'De randafdichting lekt; de isolerende ruit is defect en moet vervangen worden',
        'Het glas is enkel; even drogen helpt',
        'Het is zonwerend glas dat zo hoort',
        'Er zit te veel argon in',
      ],
      correctIndex: 0,
      explanation:
        'Condens tússen de bladen betekent dat de randafdichting van de isolatieruit is doorgeslagen; het gas/vacuüm is weg. De ruit is defect en wordt vervangen.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.m1',
      toetstermCode: 'C.12.1',
      type: 'mc',
      prompt:
        'Een koper wil weten of de sloten inbraakwerend zijn. Welk keurmerk met sterren geeft dat aan?',
      options: ['Het SKG-sterrenkeurmerk', 'Het KOMO-keurmerk', 'Het CE-teken', 'Het FSC-keurmerk'],
      correctIndex: 0,
      explanation:
        'Het SKG-sterrenkeurmerk (1–3 sterren) geeft de inbraakwerendheid van hang- en sluitwerk aan; meer sterren = inbraakwerender.',
    },
    {
      id: 'C.12.m2',
      toetstermCode: 'C.12.1',
      type: 'mc',
      prompt:
        'Waarom is een deur met meerpuntsluiting inbraakwerender dan met één insteekslot?',
      options: [
        'De deur vergrendelt op meerdere punten in het kozijn en is daardoor moeilijker open te breken',
        'De deur is lichter',
        'Er is geen sleutel nodig',
        'De deur sluit sneller',
      ],
      correctIndex: 0,
      explanation:
        'Een meerpuntsluiting grijpt op meerdere punten (boven, midden, onder) in het kozijn, waardoor de deur veel moeilijker te forceren is.',
    },
    {
      id: 'C.12.m3',
      toetstermCode: 'C.12.1',
      type: 'mc',
      prompt:
        'Een cilinderslot kan met "kerntrekken" worden geforceerd. Welke maatregel beschermt hiertegen?',
      options: [
        'Een kerntrekbeveiliging / SKG-gecertificeerde veiligheidscilinder met beslag',
        'Een dikkere deur',
        'Een groter raam ernaast',
        'Een tochtstrip',
      ],
      correctIndex: 0,
      explanation:
        'Tegen kerntrekken helpt een veiligheidscilinder met kerntrekbeveiliging en degelijk (SKG-)beslag dat de cilinder afschermt.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.m1',
      toetstermCode: 'C.13.2',
      type: 'mc',
      prompt:
        'Bij het schilderen van nieuw, kaal buitenhout wordt de verf te snel aangebracht. Wat is de juiste, volledige opbouw van het verfsysteem?',
      options: [
        'Grondverf → voorlak → aflak',
        'Alleen aflak in twee lagen',
        'Aflak → grondverf → voorlak',
        'Voorlak → grondverf → aflak',
      ],
      correctIndex: 0,
      explanation:
        'Eerst grondverf (hecht/dringt in), dan voorlak (vult/bouwt op), dan aflak (dekkende beschermlaag). Overslaan geeft slechte hechting en kortere levensduur.',
    },
    {
      id: 'C.13.m2',
      toetstermCode: 'C.13.6',
      type: 'mc',
      prompt:
        'Voor een badkamervloer wordt gevraagd naar tegels met een "R11". Waar slaat dat op en waarom is het hier van belang?',
      options: [
        'Op de stroefheid/antislip; in natte ruimten voorkomt een hogere R-waarde uitglijden',
        'Op de hardheid van de tegel',
        'Op de kleurechtheid',
        'Op de waterdichtheid van de voeg',
      ],
      correctIndex: 0,
      explanation:
        'De Rutschwerte (R9–R13) geeft de antislipklasse; in natte ruimten kies je een hogere R-waarde tegen uitglijden.',
    },
    {
      id: 'C.13.m3',
      toetstermCode: 'C.13.9',
      type: 'mc',
      prompt:
        'Bij het aftikken van wandtegels klinken sommige "hol". Wat betekent dat en wat is de oorzaak?',
      options: [
        'Onvoldoende hechting: er zit een holle ruimte achter de tegel (slechte lijmverdeling of vuile ondergrond)',
        'De tegels zijn te hard gebakken',
        'Er is te veel daglicht',
        'De voeg is te breed',
      ],
      correctIndex: 0,
      explanation:
        'Holklinkende tegels hebben onvoldoende hechting (holle ruimte erachter), meestal door slechte lijmverdeling of een stoffige/vochtige ondergrond. Risico op loslaten.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.m1',
      toetstermCode: 'C.14.1',
      type: 'mc',
      prompt:
        'Een aanrechtblad moet zeer hard, slijtvast en zuurbestendig zijn. Welke natuursteensoort past daar het best bij?',
      options: ['Graniet (stollingsgesteente)', 'Marmer (metamorf, kalkhoudend)', 'Travertijn (kalksteen)', 'Zandsteen'],
      correctIndex: 0,
      explanation:
        'Graniet is zeer hard en slijt-/zuurbestendig — ideaal voor werkbladen. Marmer en travertijn zijn kalkhoudend en gevoelig voor zuren/krassen.',
    },
    {
      id: 'C.14.m2',
      toetstermCode: 'C.14.1',
      type: 'mc',
      prompt:
        'Tot welke hoofdgroep behoren marmer én leisteen, en wat hebben ze gemeen qua ontstaan?',
      options: [
        'Metamorf gesteente: ontstaan uit bestaand gesteente onder hoge druk en temperatuur',
        'Stollingsgesteente: gestold uit magma',
        'Afzettingsgesteente: gevormd door bezinking',
        'Kunststeen: industrieel geperst',
      ],
      correctIndex: 0,
      explanation:
        'Marmer (uit kalksteen) en leisteen (uit klei) zijn metamorf: door druk en hitte omgevormd uit ander gesteente.',
    },
    {
      id: 'C.14.m3',
      toetstermCode: 'C.14.3',
      type: 'mc',
      prompt:
        'Voor een buitentrap wordt hardsteen gevraagd met een stroef, fijn geribbeld oppervlak (antislip). Welke oppervlaktebewerking hoort daarbij?',
      options: ['Frijnen (fijne parallelle groeven)', 'Polijsten (spiegelglad)', 'Zoeten (mat glad)', 'Slijpen tot hoogglans'],
      correctIndex: 0,
      explanation:
        'Frijnen geeft fijne parallelle groeven en dus grip (antislip) — geschikt voor traptreden buiten. Polijsten/zoeten maken juist glad en zijn glibberig bij nat weer.',
    },
  ],

  // ─────────────── D · Kwaliteit, onderhoud, duurzaamheid ───────────────
  'D.1': [
    {
      id: 'D.1.m1',
      toetstermCode: 'D.1.2',
      type: 'mc',
      prompt:
        'In een MJOP krijgt de gevel conditiescore 5 volgens NEN 2767. Wat betekent dit voor de planning?',
      options: [
        'Slechte conditie: ingrijpend herstel/vervanging op korte termijn nodig',
        'Uitstekende conditie: voorlopig niets doen',
        'Gemiddelde conditie: over 20 jaar herzien',
        'De score zegt niets over de staat',
      ],
      correctIndex: 0,
      explanation:
        'NEN 2767 loopt van 1 (uitstekend) tot 6 (zeer slecht). Score 5 is slecht; in het MJOP betekent dat herstel/vervanging op korte termijn inplannen.',
    },
    {
      id: 'D.1.m2',
      toetstermCode: 'D.1.4',
      type: 'mc',
      prompt:
        'Een VvE laat het schilderwerk elke zes jaar volgens plan uitvoeren om houtrot te voorkomen. Welke onderhoudsvorm is dit?',
      options: [
        'Planmatig (preventief) onderhoud',
        'Correctief onderhoud',
        'Achterstallig onderhoud',
        'Mutatieonderhoud',
      ],
      correctIndex: 0,
      explanation:
        'Vooraf ingepland onderhoud om gebreken te vóórkomen is planmatig/preventief onderhoud (basis van een MJOP). Correctief onderhoud volgt pas ná een gebrek.',
    },
    {
      id: 'D.1.m3',
      toetstermCode: 'D.1.1',
      type: 'mc',
      prompt: 'Wat is het doel van een MJOP voor een VvE of eigenaar?',
      options: [
        'Onderhoud en de bijbehorende kosten meerjarig plannen en reserveren',
        'De marktwaarde van de woning bepalen',
        'De architectuurstroming vaststellen',
        'Het energielabel afgeven',
      ],
      correctIndex: 0,
      explanation:
        'Een MJOP (meerjarenonderhoudsplan) plant per bouwdeel het onderhoud en de kosten vooruit, zodat er tijdig gereserveerd en uitgevoerd wordt.',
    },
  ],
  'D.2': [
    {
      id: 'D.2.m1',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt:
        'Bij een opname zie je afbladderende verf, zacht hout onderin de kozijnen en open verbindingen. Wat is de meest onderbouwde conclusie?',
      options: [
        'Achterstallig schilder-/houtwerk met beginnende houtrot; herstel nodig',
        'De fundering is verzakt',
        'Het glas isoleert onvoldoende',
        'De woning is niet vergund',
      ],
      correctIndex: 0,
      explanation:
        'Afbladderende verf + zacht hout + open naden wijzen op achterstallig schilderwerk met (beginnende) houtrot. Dat is een onderhoudsconclusie, geen funderingskwestie.',
    },
    {
      id: 'D.2.m2',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt:
        'Op een naoorlogse galerijflat zie je roeststrepen en afgespatte betonranden aan de galerijplaten. Wat is je conclusie en advies?',
      options: [
        'Betonrot in de galerijplaten; nader constructief onderzoek en herstel adviseren',
        'Normale vervuiling; alleen reinigen',
        'Houtrot; hout vervangen',
        'Vochtdoorslag door de spouw',
      ],
      correctIndex: 0,
      explanation:
        'Roeststrepen en afgespat beton met zichtbare wapening duiden op betonrot. Bij dragende galerijplaten is nader constructief onderzoek en herstel geboden.',
    },
    {
      id: 'D.2.m2b',
      toetstermCode: 'D.2.2',
      type: 'mc',
      prompt:
        'Je constateert diagonale, trapsgewijze scheuren in een gevel die doorlopen door steen én voeg, breder wordend naar boven. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Zetting/verzakking van (een deel van) de fundering',
        'Normale krimp van vers metselwerk',
        'Slecht schilderwerk',
        'Te veel isolatie in de spouw',
      ],
      correctIndex: 0,
      explanation:
        'Diagonale, trapsgewijze scheuren door steen en voeg wijzen op ongelijkmatige zetting/verzakking van de fundering — een constructief signaal.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.m1',
      toetstermCode: 'D.3.5',
      type: 'mc',
      prompt:
        'Een makelaar verwart de Rc- en U-waarde. Welke uitspraak is correct?',
      options: [
        'Rc (dichte constructie): hoe hoger hoe beter; U (glas/kozijn): hoe lager hoe beter',
        'Rc: hoe lager hoe beter; U: hoe hoger hoe beter',
        'Rc en U betekenen hetzelfde',
        'Beide zeggen niets over isolatie',
      ],
      correctIndex: 0,
      explanation:
        'Rc is de warmteweerstand van een dichte constructie: hoger = beter. U is de warmtedoorgang van bv. glas: lager = beter. Ze zijn elkaars "spiegel".',
    },
    {
      id: 'D.3.m2',
      toetstermCode: 'D.3.4',
      type: 'mc',
      prompt:
        'In de hoek van een slaapkamer bij een doorlopende betonvloer naar het balkon ontstaat schimmel en condens. Wat is de bouwfysische oorzaak?',
      options: [
        'Een koudebrug (thermische brug): op die plek lekt warmte weg en condenseert vocht',
        'Te veel ventilatie',
        'Een te hoge Rc-waarde',
        'Een lekkende waterleiding in de vloer',
      ],
      correctIndex: 0,
      explanation:
        'Een doorlopende betonvloer naar buiten is een koudebrug: warmte lekt weg, het binnenoppervlak wordt koud en vocht condenseert → schimmel.',
    },
    {
      id: 'D.3.m3',
      toetstermCode: 'D.3.9',
      type: 'mc',
      prompt:
        'Bewoners horen de buren lopen en stoelen schuiven (via de vloer), maar praten horen ze nauwelijks. Om welk type geluid gaat het vooral?',
      options: [
        'Contactgeluid (via de constructie)',
        'Luchtgeluid (door de lucht)',
        'Galm in de eigen ruimte',
        'Installatiegeluid van de cv',
      ],
      correctIndex: 0,
      explanation:
        'Lopen en schuiven brengen trillingen rechtstreeks in de constructie: contactgeluid. Praten verplaatst zich door de lucht: luchtgeluid. Ze vragen elk andere maatregelen.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.m1',
      toetstermCode: 'D.4.8',
      type: 'mc',
      prompt:
        'Een belegger bezit een kantoor van 500 m² met energielabel E. Wat is sinds 2023 het probleem?',
      options: [
        'De meeste kantoren moeten minimaal label C hebben, anders mogen ze niet als kantoor gebruikt worden',
        'Er is geen enkel probleem',
        'Het kantoor moet gasloos zijn',
        'Het kantoor moet label A hebben',
      ],
      correctIndex: 0,
      explanation:
        'Sinds 2023 geldt voor de meeste kantoren (vanaf 100 m²) minimaal label C. Label E voldoet niet: het pand mag dan niet als kantoor in gebruik blijven tot het is verbeterd.',
    },
    {
      id: 'D.4.m2',
      toetstermCode: 'D.4.2',
      type: 'mc',
      prompt:
        'Een eigenaar wil vóór verkoop een geldig energielabel. Hoe komt dat tot stand?',
      options: [
        'Een erkend energieadviseur neemt de woning op en registreert het label (RVO)',
        'De eigenaar bepaalt het label zelf online zonder opname',
        'De makelaar geeft het label af',
        'Het label volgt automatisch uit de WOZ-waarde',
      ],
      correctIndex: 0,
      explanation:
        'Sinds 2021 stelt een erkend energieadviseur het definitieve energielabel op na opname van de woning; daarna wordt het geregistreerd. Verkoop zonder geldig label kan een boete opleveren.',
    },
    {
      id: 'D.4.m3',
      toetstermCode: 'D.4.5',
      type: 'mc',
      prompt:
        'Een ontwikkelaar wil "circulair" bouwen. Welke keuze past daar het best bij?',
      options: [
        'Remontabel (demontabel) bouwen met herbruikbare materialen, zodat onderdelen later hergebruikt kunnen worden',
        'Zo goedkoop mogelijk bouwen met wegwerpmateriaal',
        'Alles in één keer gieten in beton',
        'Uitsluitend ronde gebouwen ontwerpen',
      ],
      correctIndex: 0,
      explanation:
        'Circulair bouwen richt zich op hergebruik: remontabel/demontabel bouwen met herbruikbare, liefst bio-based materialen, zodat grondstoffen in de kringloop blijven.',
    },
  ],
}
