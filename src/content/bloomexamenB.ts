import type { Question } from '../types/content'

/**
 * Bloom-examen — sectie B (Constructieve Opbouw). Zie bloomexamenA.ts voor
 * de opzet: vijf vraagsoorten per onderwerp, elk getagd met Bloom-niveau.
 * Origineel materiaal, geen bestaande examenvragen.
 */
export const bloomExamenB: Record<string, Question[]> = {
  'B.1': [
    {
      id: 'B.1.bloom.mc', toetstermCode: 'B.1.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke drie kwaliteiten vormen samen de Vitruvius-triade?',
      options: ['Firmitas, utilitas, venustas', 'Firmitas, veritas, gravitas', 'Utilitas, celeritas, venustas', 'Firmitas, utilitas, celeritas'],
      correctIndex: 0,
      explanation: 'Firmitas (stevigheid), utilitas (bruikbaarheid) en venustas (schoonheid) vormen samen de klassieke drie-eenheid van Vitruvius.',
    },
    {
      id: 'B.1.bloom.multi', toetstermCode: 'B.1.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een gebouw heeft een prachtige gevel en een uitstekende draagconstructie, maar de indeling maakt het gebouw nauwelijks bruikbaar. Welke conclusies zijn juist?',
      options: ['Aan venustas is voldaan', 'Aan firmitas is voldaan', 'Aan utilitas ontbreekt het', 'Aan alle drie de kwaliteiten ontbreekt het'],
      correctIndices: [0, 1, 2],
      explanation: 'Schoonheid en stevigheid zijn in orde; de bruikbaarheid (utilitas) schiet tekort door de onhandige indeling.',
    },
    {
      id: 'B.1.bloom.match', toetstermCode: 'B.1.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke Vitruvius-term aan zijn Nederlandse betekenis.',
      pairs: [
        { left: 'Firmitas', right: 'Stevigheid en duurzaamheid' },
        { left: 'Utilitas', right: 'Bruikbaarheid en functionaliteit' },
        { left: 'Venustas', right: 'Schoonheid en esthetiek' },
      ],
      explanation: 'De drie Latijnse termen vormen samen de klassieke bouwkundige kwaliteitseisen.',
    },
    {
      id: 'B.1.bloom.invul', toetstermCode: 'B.1.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de Vitruvius-kwaliteit die met "stevigheid" te maken heeft, heet ______.',
      acceptableAnswers: ['firmitas'],
      explanation: 'Firmitas is de Latijnse term voor stevigheid/duurzaamheid.',
    },
    {
      id: 'B.1.bloom.open', toetstermCode: 'B.1.1', type: 'open', bloom: 'Toepassen',
      prompt: 'Een makelaar bezichtigt een woning die er esthetisch fraai uitziet, maar waarvan de fundering zichtbaar verzakt is. Pas de Vitruvius-triade toe: welke kwaliteit(en) zijn in het geding en hoe zou je dit aan een koper uitleggen?',
      acceptableAnswers: [
        'De firmitas (stevigheid/duurzaamheid) is in het geding: een verzakte fundering is een constructief gebrek dat de draagkracht en veiligheid van het gebouw aantast. De venustas (schoonheid) kan intact zijn, maar zonder firmitas is de woning niet volwaardig — aan een koper leg je uit dat esthetiek geen garantie is voor bouwkundige gezondheid en dat nader (funderings)onderzoek nodig is.',
      ],
      explanation: 'Kernpunt: schoonheid zegt niets over de constructieve staat; firmitas is een aparte, cruciale kwaliteit die apart beoordeeld moet worden.',
    },
  ],
  'B.2': [
    {
      id: 'B.2.bloom.mc', toetstermCode: 'B.2.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Uit hoeveel hoofd-elementengroepen bestaat de hoofdopbouw van een gebouw volgens het kwalificatiedossier?',
      options: ['Zes', 'Drie', 'Vier', 'Acht'],
      correctIndex: 0,
      explanation: 'De hoofdopbouw bestaat uit zes elementengroepen: fundering, kelder, opbouw, dak, afwerking en installaties.',
    },
    {
      id: 'B.2.bloom.multi', toetstermCode: 'B.2.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woningopname signaleert scheuren in de fundering én lekkage bij de dakrand. Tot welke elementengroepen horen deze twee gebreken?',
      options: ['Fundering', 'Dak', 'Afwerking', 'Installaties'],
      correctIndices: [0, 1],
      explanation: 'Scheuren in de fundering horen bij de elementengroep fundering; dakranlekkage bij de elementengroep dak.',
    },
    {
      id: 'B.2.bloom.match', toetstermCode: 'B.2.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk bouwdeel aan de juiste elementengroep.',
      pairs: [
        { left: 'Verdiepingsvloer', right: 'Opbouw' },
        { left: 'Dakpannen', right: 'Dak' },
        { left: 'Stucwerk', right: 'Afwerking' },
        { left: 'Groepenkast', right: 'Installaties' },
      ],
      explanation: 'Elk bouwdeel valt onder één van de zes elementengroepen van de hoofdopbouw.',
    },
    {
      id: 'B.2.bloom.invul', toetstermCode: 'B.2.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de elementengroep die de belastingen van het gebouw overbrengt naar de draagkrachtige grondlaag, heet de ______.',
      acceptableAnswers: ['fundering'],
      explanation: 'De fundering draagt alle belastingen af naar de stevige ondergrond.',
    },
    {
      id: 'B.2.bloom.open', toetstermCode: 'B.2.1', type: 'open', bloom: 'Toepassen',
      prompt: 'Bij een woningopname vind je gebreken aan zowel de kruipruimteventilatie als de dakgoot. Leg uit tot welke elementengroepen deze twee bouwdelen horen en waarom het onderscheid in elementengroepen nuttig is bij het rapporteren van gebreken.',
      acceptableAnswers: [
        'Kruipruimteventilatie hoort bij de elementengroep fundering/kelder (de ondergrondse constructie); de dakgoot hoort bij de elementengroep dak. Het onderscheid in elementengroepen is nuttig omdat het een gestructureerde, herkenbare indeling geeft waarmee gebreken eenduidig gerapporteerd en later opgevolgd kunnen worden (bijvoorbeeld in een bouwkundig rapport of MJOP), en waarmee duidelijk wordt welke partij of vervolgstap bij welk gebrek hoort.',
      ],
      explanation: 'Kernpunt: elementengroepen geven structuur aan inspectie en rapportage, en helpen gebreken correct te categoriseren.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.bloom.mc', toetstermCode: 'B.3.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Tot welke categorie belasting hoort het eigen gewicht van de draagconstructie?',
      options: ['Permanente belasting', 'Variabele belasting', 'Windbelasting', 'Sneeuwbelasting'],
      correctIndex: 0,
      explanation: 'Het eigen gewicht is er altijd: een permanente (blijvende) belasting. Wind en sneeuw zijn variabel.',
    },
    {
      id: 'B.3.bloom.multi', toetstermCode: 'B.3.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een balkon steekt als uitkraging uit de gevel. Welke uitspraken over het krachtenspel zijn juist?',
      options: ['Bovenin de inklemming treedt trek op', 'Onderin de inklemming treedt druk op', 'Het balkon rust op twee steunpunten zoals een gewone ligger', 'Bij een grotere uitkraging neemt de belasting op de inklemming toe'],
      correctIndices: [0, 1, 3],
      explanation: 'Bij een uitkraging (één inklemming, vrij uiteinde) is het krachtenspel omgekeerd aan een vrij opgelegde ligger: trek boven, druk onder. Een grotere uitkraging vergroot het moment op de inklemming.',
    },
    {
      id: 'B.3.bloom.match', toetstermCode: 'B.3.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk krachttype aan zijn omschrijving.',
      pairs: [
        { left: 'Trek', right: 'Kracht die een materiaal uit elkaar trekt' },
        { left: 'Druk', right: 'Kracht die een materiaal samenperst' },
        { left: 'Afschuiving', right: 'Kracht die vlakken langs elkaar laat verschuiven' },
        { left: 'Torsie', right: 'Kracht die een constructiedeel om zijn as wringt' },
      ],
      explanation: 'Deze vier krachttypen vormen de basis van de sterkteleer.',
    },
    {
      id: 'B.3.bloom.invul', toetstermCode: 'B.3.3', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de vrije afstand tussen twee steunpunten van een ligger heet de ______.',
      acceptableAnswers: ['overspanning'],
      explanation: 'De overspanning is de afstand tussen twee opleggingen; groter = meer doorbuiging bij gelijke doorsnede.',
    },
    {
      id: 'B.3.bloom.open', toetstermCode: 'B.3.3', type: 'open', bloom: 'Analyseren',
      prompt: 'Een architect wil een woonkamer met een grotere overspanning zonder tussenkolom, maar met dezelfde vloerdikte als voorheen. Analyseer wat hiervan het bouwkundige gevolg is en welke oplossingen mogelijk zijn.',
      acceptableAnswers: [
        'Bij gelijke vloerdikte en grotere overspanning nemen de doorbuiging en de spanningen in de vloer toe; dat kan leiden tot scheurvorming, een te grote (merkbare) doorbuiging of zelfs bezwijken. Oplossingen: de vloer/ligger zwaarder of dikker uitvoeren, een sterker materiaal of profiel toepassen (bijvoorbeeld een stalen ligger of voorgespannen beton), of de overspanning alsnog verkleinen met een extra ondersteuning op een minder storende plek.',
      ],
      explanation: 'Kernpunt: bij gelijkblijvende doorsnede geeft een grotere overspanning meer doorbuiging/spanning; de constructie moet zwaarder of anders uitgevoerd worden.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.bloom.mc', toetstermCode: 'B.4.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke Nederlandse grondsoort is het meest zettingsgevoelig?',
      options: ['Veen', 'Zand', 'Grind', 'Keileem'],
      correctIndex: 0,
      explanation: 'Veen is licht, waterrijk en sterk samendrukbaar — de meest zettingsgevoelige grondsoort.',
    },
    {
      id: 'B.4.bloom.multi', toetstermCode: 'B.4.6', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning uit 1910 op houten palen in West-Nederland vertoont scheuren, terwijl de grondwaterstand de laatste decennia structureel is gedaald. Welke conclusies zijn gegrond?',
      options: ['Paalrot door droogstand van de paalkoppen is een waarschijnlijke oorzaak', 'De houten palen horen permanent onder water te staan', 'Een dalende grondwaterstand heeft geen enkel effect op houten palen', 'Nader funderingsonderzoek is aan te raden'],
      correctIndices: [0, 1, 3],
      explanation: 'Houten palen moeten onder water blijven; bij droogstand rotten de koppen weg. Een gedaalde grondwaterstand is dus een reële risicofactor en rechtvaardigt onderzoek.',
    },
    {
      id: 'B.4.bloom.match', toetstermCode: 'B.4.3', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk onderzoekstype aan het resultaat dat het oplevert.',
      pairs: [
        { left: 'Sondering (CPT)', right: 'Sondeerdiagram met de weerstand tegen de diepte' },
        { left: 'Boring', right: 'Boorstaat met de laagopbouw van de grond' },
        { left: 'Grondmechanisch labonderzoek', right: 'Druksterkte, doorlatendheid en zetting van monsters' },
      ],
      explanation: 'Elke onderzoeksmethode levert een ander soort resultaat op; ze worden vaak gecombineerd.',
    },
    {
      id: 'B.4.bloom.invul', toetstermCode: 'B.4.6', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: wanneer meezakkende grond langs een paal naar beneden wrijft en zo een extra last op de paal geeft, heet dit ______.',
      acceptableAnswers: ['negatieve kleef'],
      explanation: 'Negatieve kleef is een extra neerwaartse belasting op een paal door meezakkende omringende grond.',
    },
    {
      id: 'B.4.bloom.open', toetstermCode: 'B.4.5', type: 'open', bloom: 'Evalueren',
      prompt: 'Een makelaar krijgt de vraag of een fundering "op staal" altijd goedkoper en beter is dan een paalfundering. Beoordeel deze stelling.',
      acceptableAnswers: [
        'Nee, die stelling klopt niet zonder meer. Fundering op staal is alleen mogelijk (en dan vaak goedkoper) als de draagkrachtige grondlaag dicht onder het maaiveld ligt. Ligt de vaste laag diep (zoals in grote delen van West-Nederland met dikke veen-/kleipakketten), dan is een paalfundering juist noodzakelijk om voldoende draagkracht te krijgen — fundering op staal zou daar tot zetting en scheefstand leiden. De keuze hangt dus af van de plaatselijke bodemopbouw, niet van een algemene regel dat het één beter is dan het ander.',
      ],
      explanation: 'Kernpunt: de juiste funderingskeuze is grondafhankelijk; geen van beide methoden is universeel beter.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.bloom.mc', toetstermCode: 'B.5.3', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk metselverband bestaat binnen dezelfde laag afwisselend uit koppen en strekken?',
      options: ['Vlaams verband', 'Halfsteensverband', 'Staand verband', 'Koppenverband'],
      correctIndex: 0,
      explanation: 'In het Vlaams verband wisselen koppen en strekken elkaar af binnen dezelfde laag.',
    },
    {
      id: 'B.5.bloom.multi', toetstermCode: 'B.5.9', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij een spouwmuur zie je roestbruine strepen onder de spouwankers en losse, afgesprongen stenen. Welke conclusies zijn gegrond?',
      options: ['De spouwankers zijn waarschijnlijk niet-roestvast en roesten', 'De uitzettende roest heeft het metselwerk beschadigd', 'Dit duidt altijd op een verzakte fundering', 'Vervanging door RVS-ankers is een logische herstelmaatregel'],
      correctIndices: [0, 1, 3],
      explanation: 'Roestende (niet-RVS) spouwankers zetten uit en beschadigen het metselwerk; dit is een apart gebrek, geen funderingskwestie.',
    },
    {
      id: 'B.5.bloom.match', toetstermCode: 'B.5.7', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk lateitype aan zijn omschrijving.',
      pairs: [
        { left: 'Stalen latei', right: 'Verborgen stalen profiel dat de last draagt' },
        { left: 'Geveldrager', right: 'Stalen hoekprofiel dat het buitenblad ophangt' },
        { left: 'Gemetselde latei (rollaag)', right: 'Zichtbaar metselwerk, vaak met verborgen drager erachter' },
      ],
      explanation: 'Lateien overbruggen een opening; sommige zijn puur constructief, andere vooral esthetisch met een verborgen drager.',
    },
    {
      id: 'B.5.bloom.invul', toetstermCode: 'B.5.5', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de hoogte van één laag metselwerk inclusief de voeg heet de ______.',
      acceptableAnswers: ['lagenmaat'],
      explanation: 'De lagenmaat is de hoogte van steen plus voeg samen.',
    },
    {
      id: 'B.5.bloom.open', toetstermCode: 'B.5.10', type: 'open', bloom: 'Analyseren',
      prompt: 'Je ziet bij een woningopname diagonale, trapsgewijze scheuren die door zowel de stenen als het voegwerk lopen en naar boven toe breder worden. Analyseer wat dit signaal betekent en welk vervolgonderzoek je zou adviseren.',
      acceptableAnswers: [
        'Dit type scheur (diagonaal, trapsgewijs, door steen en voeg, breder naar boven) wijst op zetting/verzakking van (een deel van) de fundering, niet op normale krimp of oppervlakkige schade. Vervolgonderzoek: een bouwkundige/constructeur laten beoordelen, eventueel met scheurmeters de ontwikkeling volgen, en de fundering (bijvoorbeeld via sondering of funderingsonderzoek) laten inspecteren om de oorzaak en de noodzaak van herstel vast te stellen.',
      ],
      explanation: 'Kernpunt: dit scheurpatroon is een constructief signaal (zetting), geen esthetisch mankement — nader onderzoek is nodig.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.bloom.mc', toetstermCode: 'B.6.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Waarom wordt beton gewapend met staal?',
      options: ['Beton is zwak onder trek; staal neemt de trekkrachten over', 'Staal maakt beton lichter', 'Staal versnelt het uitharden van beton', 'Staal geeft beton zijn kleur'],
      correctIndex: 0,
      explanation: 'Beton is druksterk maar trekzwak; de wapening neemt de trekkrachten voor haar rekening.',
    },
    {
      id: 'B.6.bloom.multi', toetstermCode: 'B.6.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij een balkon uit de jaren 60 zie je roestvlekken en afgespat beton met zichtbare wapening. Welke uitspraken zijn juist?',
      options: ['Dit is een teken van betonrot', 'Carbonatatie kan de beschermende werking van het beton hebben aangetast', 'Dit is normale, onschadelijke slijtage waar niets aan gedaan hoeft te worden', 'Nader constructief onderzoek is raadzaam'],
      correctIndices: [0, 1, 3],
      explanation: 'Roestende, uitzettende wapening die het beton afdrukt is betonrot, vaak veroorzaakt door carbonatatie; dit is géén onschuldige slijtage en vraagt onderzoek.',
    },
    {
      id: 'B.6.bloom.match', toetstermCode: 'B.6.5', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk prefab-vloertype aan zijn kenmerk.',
      pairs: [
        { left: 'Kanaalplaatvloer', right: 'Brede platen met langsholtes, licht en groot overspannend' },
        { left: 'Breedplaatvloer', right: 'Dunne prefab plaat als bekisting met ter plaatse gestorte druklaag' },
        { left: 'Ribbenvloer', right: 'Prefab balkjes (ribben) met invulelementen ertussen' },
      ],
      explanation: 'Elk vloertype heeft een eigen opbouw en toepassingsgebied.',
    },
    {
      id: 'B.6.bloom.invul', toetstermCode: 'B.6.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de verwerkbaarheid van vers beton wordt vaak getest met de zetmaatproef, ook wel de kegel van ______ genoemd.',
      acceptableAnswers: ['abrams', 'abraham', 'abrams kegel'],
      explanation: 'De kegel van Abrams meet hoe ver vers beton inzakt: een maat voor de consistentie/verwerkbaarheid.',
    },
    {
      id: 'B.6.bloom.open', toetstermCode: 'B.6.6', type: 'open', bloom: 'Evalueren',
      prompt: 'Een ontwikkelaar overweegt prefab beton in plaats van in het werk gestort beton voor een woningbouwproject met een strakke planning. Beoordeel deze keuze: welke voor- en nadelen spelen mee?',
      acceptableAnswers: [
        'Voordelen van prefab: kortere bouwtijd op locatie (fabrieksmatige, weer-onafhankelijke productie), constante kwaliteit onder gecontroleerde omstandigheden, en minder overlast op de bouwplaats. Nadelen: transport en een hijskraan zijn nodig, er ontstaan naden/voegen tussen elementen (aandachtspunt voor waterdichtheid en geluidsisolatie), en het ontwerp moet vroeg vastliggen (minder flexibiliteit tijdens de bouw). Bij een strakke planning weegt de snelheid vaak zwaar, maar de logistieke eisen (transport, kraancapaciteit) moeten wel haalbaar zijn.',
      ],
      explanation: 'Kernpunt: prefab bespaart bouwtijd en geeft constante kwaliteit, maar vraagt goede logistiek en vroege ontwerpvastlegging.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.bloom.mc', toetstermCode: 'B.7.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk stalen profiel heeft in doorsnede de vorm van een gesloten vierkant of rechthoek?',
      options: ['Een koker', 'Een IPE-profiel', 'Een UNP-profiel', 'Een L-profiel'],
      correctIndex: 0,
      explanation: 'Een koker is een gesloten profiel, torsiestijf. IPE/UNP/L zijn open profielen.',
    },
    {
      id: 'B.7.bloom.multi', toetstermCode: 'B.7.5', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een architect wil een zichtbare stalen kolom toepassen in een gebouw met hoge brandveiligheidseisen. Welke maatregelen zijn hierbij relevant?',
      options: ['Een brandwerende bekleding of coating aanbrengen', 'De kolom onbehandeld laten, want staal is onbrandbaar en verliest nooit sterkte', 'De brandwerendheidsduur afstemmen op de eisen uit het Bbl', 'Verzinken toepassen als brandbescherming'],
      correctIndices: [0, 2],
      explanation: 'Staal verliest bij hoge temperatuur sterkte en moet brandwerend bekleed worden conform de Bbl-eisen. Verzinken beschermt tegen corrosie, niet tegen brand.',
    },
    {
      id: 'B.7.bloom.match', toetstermCode: 'B.7.4', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk verbindingstype aan zijn eigenschap.',
      pairs: [
        { left: 'Boutverbinding', right: 'Snel te maken en weer demontabel' },
        { left: 'Lasverbinding', right: 'Permanent, vraagt vakwerk ter plaatse' },
        { left: 'Klinknagel', right: 'Oudere, permanente verbindingsmethode' },
      ],
      explanation: 'Elk verbindingstype heeft eigen voor- en nadelen qua snelheid, demontabiliteit en toepasbaarheid.',
    },
    {
      id: 'B.7.bloom.invul', toetstermCode: 'B.7.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: staal dat bewust een beschermende roestlaag (patina) vormt en daardoor niet verder corrodeert, heet ______staal.',
      acceptableAnswers: ['corten', 'cortenstaal'],
      explanation: 'Cortenstaal vormt een dichte, hechtende roestlaag die verdere corrosie afremt.',
    },
    {
      id: 'B.7.bloom.open', toetstermCode: 'B.7.4', type: 'open', bloom: 'Toepassen',
      prompt: 'Een staalconstructie moet op de bouwplaats snel gemonteerd worden, en de mogelijkheid om onderdelen later te vervangen is gewenst. Beargumenteer welke verbindingsmethode je adviseert en waarom lassen hier minder geschikt is.',
      acceptableAnswers: [
        'Boutverbindingen zijn hier het meest geschikt: ze zijn snel te monteren op de bouwplaats en blijven demontabel, zodat onderdelen later vervangen kunnen worden. Lassen is minder geschikt omdat het een permanente, niet-demontabele verbinding geeft en vakbekwaam laswerk ter plaatse vraagt (kwaliteitscontrole, weersomstandigheden), wat de montage vertraagt en toekomstige vervanging bemoeilijkt.',
      ],
      explanation: 'Kernpunt: boutverbindingen zijn snel én demontabel; lassen is permanent en trager te realiseren op de bouwplaats.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.bloom.mc', toetstermCode: 'B.8.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk non-ferro metaal vormt in de buitenlucht een beschermende groene patina?',
      options: ['Koper', 'Zink', 'Aluminium', 'Lood'],
      correctIndex: 0,
      explanation: 'Koper vormt een groene patina (kopercarbonaat) die het metaal juist beschermt.',
    },
    {
      id: 'B.8.bloom.multi', toetstermCode: 'B.8.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een aannemer bevestigt een aluminium dakrand met stalen (ijzeren) schroeven in een vochtige omgeving. Welke uitspraken zijn juist?',
      options: ['Er kan galvanische corrosie ontstaan tussen de twee metalen', 'Het aluminium (het onedelere metaal) zal versneld corroderen', 'Dit is een probleemloze, gangbare combinatie', 'RVS-schroeven of een isolerende tussenlaag zijn een betere keuze'],
      correctIndices: [0, 1, 3],
      explanation: 'Twee verschillende metalen in vochtig contact vormen een galvanisch element; het onedelere metaal (aluminium) corrodeert versneld. RVS of isolatie voorkomt dit.',
    },
    {
      id: 'B.8.bloom.match', toetstermCode: 'B.8.4', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke legering aan zijn samenstelling.',
      pairs: [
        { left: 'Messing', right: 'Koper + zink' },
        { left: 'Brons', right: 'Koper + tin' },
        { left: 'RVS', right: 'IJzer + chroom (en nikkel)' },
      ],
      explanation: 'Legeringen combineren metalen om specifieke eigenschappen te krijgen.',
    },
    {
      id: 'B.8.bloom.invul', toetstermCode: 'B.8.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het zeer buigzame, zware non-ferro metaal dat gebruikt wordt voor loketten en slabben bij schoorsteenaansluitingen, heet ______.',
      acceptableAnswers: ['lood'],
      explanation: 'Lood is zeer vervormbaar en waterdicht; toegepast bij aansluitingen van schoorstenen en dakvlakken.',
    },
    {
      id: 'B.8.bloom.open', toetstermCode: 'B.8.1', type: 'open', bloom: 'Toepassen',
      prompt: 'Een architect wil een lichte, corrosiebestendige dakgoot toepassen die tegen uitzetting bestand moet zijn. Beargumenteer een geschikt materiaal en welke constructieve maatregel nodig is.',
      acceptableAnswers: [
        'Zink is een geschikt materiaal: het is licht, redelijk corrosiebestendig en veel toegepast voor dakgoten. Zink heeft echter een relatief grote uitzettingscoëfficiënt, dus moeten er uitzetstukken (roeven/expansievoegen) in de goot worden opgenomen om spanning en scheuren bij temperatuurwisselingen te voorkomen.',
      ],
      explanation: 'Kernpunt: zink is licht en gangbaar voor goten, maar vraagt uitzetvoorzieningen vanwege zijn thermische uitzetting.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.bloom.mc', toetstermCode: 'B.9.3', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke houtsoort behoort tot het naaldhout (zachthout)?',
      options: ['Vuren', 'Eiken', 'Meranti', 'Beuken'],
      correctIndex: 0,
      explanation: 'Vuren en grenen zijn naaldhoutsoorten. Eiken, meranti en beuken zijn loofhout (hardhout).',
    },
    {
      id: 'B.9.bloom.multi', toetstermCode: 'B.9.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Onderin een houten kozijn is het hout zacht, verkleurd en brokkelig. Welke conclusies en vervolgstappen zijn juist?',
      options: ['Dit wijst op houtrot door langdurig vocht', 'Het aangetaste hout moet worden hersteld of vervangen', 'De vochtbron hoeft niet aangepakt te worden', 'De onderliggende oorzaak (vochttoetreding) moet worden weggenomen'],
      correctIndices: [0, 1, 3],
      explanation: 'Zacht, brokkelig hout wijst op houtrot door vocht; herstel zonder de vochtoorzaak weg te nemen lost het probleem niet structureel op.',
    },
    {
      id: 'B.9.bloom.match', toetstermCode: 'B.9.5', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke houtverbinding aan zijn kenmerk.',
      pairs: [
        { left: 'Pen-en-gatverbinding', right: 'Pen in een uitgehakt gat, klassiek in kozijnen' },
        { left: 'Zwaluwstaartverbinding', right: 'Wigvormige pennen die in elkaar grijpen, zeer trekvast' },
        { left: 'Vingerlas', right: 'Kamvormige, in elkaar grijpende verbinding in de lengte' },
      ],
      explanation: 'Elke houtverbinding heeft een eigen toepassingsgebied en sterkte-eigenschap.',
    },
    {
      id: 'B.9.bloom.invul', toetstermCode: 'B.9.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het krimpen en zwellen van hout onder invloed van vocht wordt het ______ van hout genoemd.',
      acceptableAnswers: ['werken'],
      explanation: 'Hout neemt vocht op en staat het af; dat "werken" veroorzaakt kieren en scheuren.',
    },
    {
      id: 'B.9.bloom.open', toetstermCode: 'B.9.6', type: 'open', bloom: 'Toepassen',
      prompt: 'Een aannemer overweegt CLT (kruislaaghout) voor een dragende vloer in houtbouw. Leg uit waarom CLT hier constructief een goede keuze kan zijn.',
      acceptableAnswers: [
        'CLT bestaat uit meerdere, kruislings verlijmde houtlagen. Daardoor is het materiaal sterk en maatvast in twee richtingen (in tegenstelling tot massief hout, dat vooral in de vezelrichting sterk is), wat het geschikt maakt als dragende vloer- of wandplaat in houtbouw. Het is bovendien relatief licht ten opzichte van beton en snel te monteren als prefab element.',
      ],
      explanation: 'Kernpunt: de kruislaagse opbouw geeft CLT sterkte in twee richtingen, wat massief hout niet heeft.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.bloom.mc', toetstermCode: 'B.10.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat is de dagmaat van een kozijn?',
      options: ['De vrije openingsmaat binnenwerks', 'De buitenmaat van het kozijnhout', 'De glasdikte', 'De hoogte van de onderdorpel'],
      correctIndex: 0,
      explanation: 'De dagmaat is de zichtbare vrije opening binnen het kozijn.',
    },
    {
      id: 'B.10.bloom.multi', toetstermCode: 'B.10.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Bij nieuwbouw wordt eerst het metselwerk afgerond en pas later het kozijn in een gereedgemaakte opening geplaatst. Welke uitspraken zijn juist?',
      options: ['Dit is een montagekozijn', 'Er is vaak een stelkozijn nodig', 'Dit is een inmetselkozijn', 'Het kozijn wordt tijdens het metselen zelf ingemetseld'],
      correctIndices: [0, 1],
      explanation: 'Een montagekozijn wordt ná het metselwerk geplaatst, vaak met behulp van een stelkozijn. Een inmetselkozijn wordt juist tijdens het metselen meegenomen.',
    },
    {
      id: 'B.10.bloom.match', toetstermCode: 'B.10.2', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk raamtype aan zijn beweging.',
      pairs: [
        { left: 'Draaikiepraam', right: 'Kan draaien én kiepen' },
        { left: 'Tuimelraam', right: 'Kantelt om een horizontale as in het midden' },
        { left: 'Valraam', right: 'Scharniert onderaan en valt naar binnen' },
        { left: 'Schuifraam', right: 'Beweegt horizontaal of verticaal langs een rail' },
      ],
      explanation: 'Elk raamtype heeft een eigen, herkenbare bewegingsrichting.',
    },
    {
      id: 'B.10.bloom.invul', toetstermCode: 'B.10.6', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: een deur die met een rand over het kozijn heen valt, zodat de naad wordt afgedekt, heet een ______deur.',
      acceptableAnswers: ['opdek', 'opdekdeur'],
      explanation: 'Een opdekdeur dekt de naad met het kozijn af; een stompe deur sluit juist vlak in het kozijnvlak.',
    },
    {
      id: 'B.10.bloom.open', toetstermCode: 'B.10.4', type: 'open', bloom: 'Toepassen',
      prompt: 'Een opdrachtgever wil een houten pui met droge beglazing (rubberprofielen) in plaats van kit. Leg uit wat het praktische verschil is en waarom droge beglazing bij onderhoud vaak de voorkeur krijgt.',
      acceptableAnswers: [
        'Bij droog beglazen wordt het glas met rubberprofielen in het kozijn gehouden; bij nat beglazen (kit/stopverf) wordt de naad met een kit- of stopverfstrook afgedicht. Rubberprofielen zijn eenvoudiger te vervangen bij onderhoud of glasbreuk (het glas is er makkelijker uit te nemen) en verouderen minder snel dan kit, die na verloop van tijd kan uitdrogen, scheuren en opnieuw moet worden aangebracht. Daarom heeft droge beglazing bij onderhoudsgemak vaak de voorkeur.',
      ],
      explanation: 'Kernpunt: droge beglazing (rubber) is onderhoudsvriendelijker en duurzamer dan natte beglazing (kit).',
    },
  ],
  'B.11': [
    {
      id: 'B.11.bloom.mc', toetstermCode: 'B.11.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat is het belangrijkste voordeel van een kunststof kozijn ten opzichte van hout?',
      options: ['Onderhoudsarm, hoeft niet geschilderd te worden', 'Sterker bij brand dan elk ander materiaal', 'Altijd goedkoper dan hout', 'Isoleert per definitie beter dan aluminium'],
      correctIndex: 0,
      explanation: 'Kunststof kozijnen hoeven niet geschilderd te worden en zijn daardoor onderhoudsarm.',
    },
    {
      id: 'B.11.bloom.multi', toetstermCode: 'B.11.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij een aluminium kozijn zonder thermische onderbreking ontstaat aan de binnenzijde condens. Welke conclusies zijn juist?',
      options: ['Aluminium geleidt warmte sterk, waardoor de binnenzijde koud wordt', 'Er is een koudebrug in het kozijnprofiel', 'Dit los je op met een thermisch onderbroken profiel', 'Dit heeft niets te maken met het ontbreken van een thermische onderbreking'],
      correctIndices: [0, 1, 2],
      explanation: 'Zonder thermische onderbreking geleidt het metaal warmte door naar de koude buitenzijde: een koudebrug met condensrisico. Een thermisch onderbroken profiel voorkomt dit.',
    },
    {
      id: 'B.11.bloom.match', toetstermCode: 'B.11.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk kozijnmateriaal aan een kenmerkend voor- of nadeel.',
      pairs: [
        { left: 'Kunststof (PVC)', right: 'Onderhoudsarm, niet te schilderen' },
        { left: 'Aluminium', right: 'Slank en sterk, vraagt thermische onderbreking' },
        { left: 'Staal', right: 'Zeer sterk en slank, geleidt warmte sterk' },
        { left: 'Hout', right: 'Warm ogend, vraagt periodiek onderhoud' },
      ],
      explanation: 'Elk kozijnmateriaal heeft eigen sterke en zwakke punten die de keuze bepalen.',
    },
    {
      id: 'B.11.bloom.invul', toetstermCode: 'B.11.2', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: een kunststof profiel dat de warme en koude zijde van een aluminium kozijn scheidt, heet een thermische ______.',
      acceptableAnswers: ['onderbreking'],
      explanation: 'De thermische onderbreking voorkomt dat warmte via het metaal rechtstreeks naar buiten geleid wordt.',
    },
    {
      id: 'B.11.bloom.open', toetstermCode: 'B.11.1', type: 'open', bloom: 'Evalueren',
      prompt: 'Een opdrachtgever wil voor een monumentaal pand slanke, karakteristieke kozijnprofielen behouden maar toch beter isoleren. Beoordeel welk materiaal daarbij het meest voor de hand ligt en welke afweging hierbij speelt.',
      acceptableAnswers: [
        'Staal (of thermisch onderbroken aluminium) ligt het meest voor de hand: beide materialen laten zeer slanke profielen toe die het historische, fijne aanzicht kunnen behouden, in tegenstelling tot kunststof of hout die dikkere profielen nodig hebben. De afweging is dat staal zonder thermische onderbreking warmte sterk geleidt (kans op koudebrug/condens), dus voor een goede isolatie is een thermisch onderbroken uitvoering nodig — dat kan iets duurder zijn, maar behoudt wel het slanke, monumentale beeld.',
      ],
      explanation: 'Kernpunt: staal/aluminium behouden slanke profielen bij monumentaal werk, mits thermisch onderbroken voor voldoende isolatie.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.bloom.mc', toetstermCode: 'B.12.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke balk vangt bij een trapgat de onderbroken vloerbalken op?',
      options: ['De raveelbalk', 'De strijkbalk', 'De nokbalk', 'De gording'],
      correctIndex: 0,
      explanation: 'De raveelbalk vangt rond een sparing de afgesneden vloerbalken op.',
    },
    {
      id: 'B.12.bloom.multi', toetstermCode: 'B.12.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een kruipruimte is muf, er staat water en de begane-grondvloer voelt vochtig aan. Welke maatregelen zijn hier passend?',
      options: ['De ventilatieroosters controleren en zo nodig vrijmaken', 'De waterbron/het vochtprobleem onderzoeken en aanpakken', 'De kruipruimte volledig luchtdicht afsluiten', 'Niets doen, dit is normaal voor een kruipruimte'],
      correctIndices: [0, 1],
      explanation: 'Ventilatie herstellen en de vochtbron aanpakken zijn de juiste maatregelen; luchtdicht afsluiten verergert het probleem juist.',
    },
    {
      id: 'B.12.bloom.match', toetstermCode: 'B.12.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk onderdeel van een houten balklaag aan zijn functie.',
      pairs: [
        { left: 'Moerbalk', right: 'Zware hoofdbalk waarop kinderbinten rusten' },
        { left: 'Kinderbint', right: 'Lichtere, dragende vloerbalk' },
        { left: 'Raveelbalk', right: 'Vangt balken op rond een sparing' },
      ],
      explanation: 'Een houten balklaag is opgebouwd uit balken met verschillende rollen en dimensies.',
    },
    {
      id: 'B.12.bloom.invul', toetstermCode: 'B.12.4', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: vocht dat via capillaire werking vanuit de bodem omhoog in een muur trekt, heet ______ vocht.',
      acceptableAnswers: ['optrekkend'],
      explanation: 'Optrekkend vocht ontstaat zonder goede vochtkering doordat bodemvocht capillair omhoog trekt.',
    },
    {
      id: 'B.12.bloom.open', toetstermCode: 'B.12.2', type: 'open', bloom: 'Evalueren',
      prompt: 'Een VvE overweegt de eisen aan geluidsisolatie tussen twee appartementen te versoepelen om kosten te besparen. Beoordeel of dit verstandig is, gelet op de functie van de woningscheidende wand.',
      acceptableAnswers: [
        'Dit is niet verstandig: de woningscheidende wand moet zowel geluidsisolatie als brandwerendheid bieden tussen zelfstandige wooneenheden. Versoepeling van de geluidseisen leidt tot meer burenoverlast en mogelijk tot een lagere marktwaarde/verhuurbaarheid van de appartementen, en kan bovendien in strijd zijn met de bouwtechnische eisen (Bbl) voor woningscheidende constructies. Kostenbesparing op dit punt brengt dus zowel juridische als praktische risico\'s met zich mee.',
      ],
      explanation: 'Kernpunt: woningscheidende wanden hebben wettelijke en praktische eisen aan geluid én brand; versoepeling is riskant.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.bloom.mc', toetstermCode: 'B.13.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke dakvorm bestaat uit vier hellende vlakken die in één punt samenkomen?',
      options: ['Tentdak', 'Schilddak', 'Zadeldak', 'Lessenaarsdak'],
      correctIndex: 0,
      explanation: 'Een tentdak heeft vier vlakken die in één punt samenkomen; een schilddak heeft vier vlakken mét een nok.',
    },
    {
      id: 'B.13.bloom.multi', toetstermCode: 'B.13.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een koper twijfelt tussen een keramische en een betonnen dakpan. Welke uitspraken over het verschil zijn juist?',
      options: ['Keramische pannen gaan gemiddeld langer mee', 'Betonpannen zijn doorgaans zwaarder', 'Betonpannen zijn vaak goedkoper', 'Betonpannen zijn gebakken uit klei'],
      correctIndices: [0, 1, 2],
      explanation: 'Keramische pannen zijn gebakken klei met een langere levensduur; betonpannen zijn zwaarder en vaak goedkoper.',
    },
    {
      id: 'B.13.bloom.match', toetstermCode: 'B.13.5', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke dakbedekking aan het dak waar hij het meest bij past.',
      pairs: [
        { left: 'Keramische dakpannen', right: 'Hellend dak' },
        { left: 'Bitumen of EPDM', right: 'Plat dak' },
        { left: 'Leien', right: 'Hellend, vaak monumentaal dak' },
      ],
      explanation: 'De hellingshoek van het dak bepaalt grotendeels welke dakbedekking geschikt is.',
    },
    {
      id: 'B.13.bloom.invul', toetstermCode: 'B.13.3', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: een goot die in de binnenhoek ligt waar twee dakvlakken samenkomen, heet een ______goot.',
      acceptableAnswers: ['kil', 'kilgoot'],
      explanation: 'Een kilgoot ligt in de "kil" tussen twee samenkomende dakvlakken.',
    },
    {
      id: 'B.13.bloom.open', toetstermCode: 'B.13.7', type: 'open', bloom: 'Analyseren',
      prompt: 'Op een zolder zie je na regen lichtplekken en vochtsporen, terwijl de dakpannen van buiten intact lijken. Analyseer wat de mogelijke oorzaken zijn en hoe je dit verder zou onderzoeken.',
      acceptableAnswers: [
        'Mogelijke oorzaken: een verschoven of beschadigde pan die van buiten niet direct opvalt, een lekkende onderliggende folie/dakbeschot, of een falende loodaansluiting bij een schoorsteen of dakdoorvoer. Vervolgonderzoek: bij droog weer de dakpannen en aansluitingen (schoorsteen, dakramen) van dichtbij inspecteren, eventueel vanaf de binnenzijde bij regen de vochtplek volgen naar de bron, en zo nodig een dakdekker laten kijken naar de onderconstructie.',
      ],
      explanation: 'Kernpunt: lekkage bij ogenschijnlijk intacte pannen wijst vaak op verschoven pannen, een lekke onderlaag of een falende aansluiting.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.bloom.mc', toetstermCode: 'B.14.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke trapvorm keert halverwege 180° van richting, vaak via een bordes?',
      options: ['Halfslagtrap (bordestrap)', 'Kwartslagtrap', 'Rechte steektrap', 'Spiltrap'],
      correctIndex: 0,
      explanation: 'Een halfslagtrap keert 180°; een kwartslagtrap draait 90°.',
    },
    {
      id: 'B.14.bloom.multi', toetstermCode: 'B.14.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een trap wordt met dezelfde verdiepingshoogte herontworpen: de optrede wordt groter en de aantrede kleiner. Welke gevolgen zijn juist?',
      options: ['Er zijn minder treden nodig', 'De trap wordt steiler', 'Het ruimtebeslag van de trap neemt af', 'Het comfort van de trap neemt toe'],
      correctIndices: [0, 1, 2],
      explanation: 'Een grotere optrede met kleinere aantrede geeft minder treden, een steilere trap en minder ruimtebeslag — maar minder comfort, niet meer.',
    },
    {
      id: 'B.14.bloom.match', toetstermCode: 'B.14.5', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk lifttype aan zijn aandrijfprincipe.',
      pairs: [
        { left: 'Tractielift', right: 'Kabels met een tegengewicht' },
        { left: 'Hydraulische lift', right: 'Plunjer met oliedruk' },
        { left: 'Roltrap', right: 'Doorlopende ketting met treden' },
      ],
      explanation: 'Elk type verticaal transport werkt via een ander mechanisch principe.',
    },
    {
      id: 'B.14.bloom.invul', toetstermCode: 'B.14.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het verticale hoogteverschil van één traptrede heet de ______.',
      acceptableAnswers: ['optrede'],
      explanation: 'De optrede is de verticale hoogte per trede; de aantrede is het horizontale loopvlak.',
    },
    {
      id: 'B.14.bloom.open', toetstermCode: 'B.14.1', type: 'open', bloom: 'Toepassen',
      prompt: 'In een smalle hal met weinig ruimte moet toch een trap naar de verdieping komen. Beargumenteer welke trapvorm hier passend is en welk nadeel je daarbij accepteert.',
      acceptableAnswers: [
        'Een spiltrap ligt hier voor de hand: hij draait om een centrale spil en neemt daardoor veel minder grondoppervlak in dan een rechte of bordestrap. Het nadeel dat je accepteert is minder comfort: de trap is steiler, de treden zijn aan de binnenzijde smal, en groot meubilair is lastiger naar boven te krijgen.',
      ],
      explanation: 'Kernpunt: een spiltrap bespaart ruimte, maar gaat ten koste van comfort en bruikbaarheid bij verhuizen.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.bloom.mc', toetstermCode: 'B.15.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke kunststof wordt veel gebruikt voor riool- en hemelwaterafvoerbuizen?',
      options: ['PVC', 'Polycarbonaat (PC)', 'Perspex (PMMA)', 'EPS'],
      correctIndex: 0,
      explanation: 'PVC is licht, sterk en goed verlijmbaar — standaard voor afvoerbuizen.',
    },
    {
      id: 'B.15.bloom.multi', toetstermCode: 'B.15.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een leverancier zegt dat een kunststof "thermoplastisch" is. Welke uitspraken hierover zijn juist?',
      options: ['Het materiaal wordt zacht bij verwarmen', 'Het materiaal is opnieuw te vormen/hersmelten', 'Het materiaal blijft na verwarming altijd even hard als daarvoor', 'Het materiaal is nooit recyclebaar'],
      correctIndices: [0, 1],
      explanation: 'Thermoplasten worden zacht bij warmte en zijn hersmeltbaar/recyclebaar — het tegenovergestelde van een thermoharder.',
    },
    {
      id: 'B.15.bloom.match', toetstermCode: 'B.15.2', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elke kunststof aan een typische toepassing.',
      pairs: [
        { left: 'PVC', right: 'Rioolbuizen en kozijnen' },
        { left: 'Polycarbonaat (PC)', right: 'Lichtkoepels, zeer slagvast' },
        { left: 'Perspex (PMMA)', right: 'Doorzichtige plaat, breekbaarder dan PC' },
      ],
      explanation: 'Elke kunststof heeft eigenschappen die hem geschikt maken voor een specifieke toepassing.',
    },
    {
      id: 'B.15.bloom.invul', toetstermCode: 'B.15.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: kunststof die na uitharden niet meer te vervormen of te hersmelten is, heet een thermo______.',
      acceptableAnswers: ['harder', 'thermoharder'],
      explanation: 'Een thermoharder blijft na uitharden onomkeerbaar hard, in tegenstelling tot een thermoplast.',
    },
    {
      id: 'B.15.bloom.open', toetstermCode: 'B.15.2', type: 'open', bloom: 'Toepassen',
      prompt: 'Voor een lichtkoepel op een plat dak moet een doorzichtig materiaal worden gekozen dat bestand is tegen hagel en vallende takken. Beargumenteer welke kunststof geschikt is en waarom perspex hier minder voor de hand ligt.',
      acceptableAnswers: [
        'Polycarbonaat (PC) is hier geschikt: het is helder én zeer slagvast, waardoor het goed bestand is tegen hagel of vallende takken. Perspex (PMMA) is ook doorzichtig, maar aanzienlijk breekbaarder dan polycarbonaat en dus minder geschikt voor een impact-gevoelige toepassing zoals een lichtkoepel.',
      ],
      explanation: 'Kernpunt: polycarbonaat is slagvaster dan perspex en daarom de betere keuze voor impact-gevoelige, doorzichtige toepassingen.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.bloom.mc', toetstermCode: 'B.16.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk isolatiemateriaal is onbrandbaar en daarom geschikt bij brandwerende toepassingen?',
      options: ['Steenwol', 'EPS', 'XPS', 'PUR'],
      correctIndex: 0,
      explanation: 'Steenwol (van gesteente) is onbrandbaar; kunststofschuimen (EPS/XPS/PUR) smelten of branden.',
    },
    {
      id: 'B.16.bloom.multi', toetstermCode: 'B.16.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Voor een omkeerdak wordt isolatie gezocht die bovenop de waterdichte laag komt, in het water en onder druk (grind/tegels). Welke isolatiematerialen zijn hiervoor geschikt?',
      options: ['XPS', 'Foamglas', 'Glaswol', 'Vlasisolatie'],
      correctIndices: [0, 1],
      explanation: 'XPS en foamglas zijn drukvast en nemen geen water op — geschikt voor een omkeerdak. Glaswol en vlas zouden vollopen en inzakken.',
    },
    {
      id: 'B.16.bloom.match', toetstermCode: 'B.16.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk isolatiemateriaal aan een kenmerkende eigenschap.',
      pairs: [
        { left: 'PIR/PUR', right: 'Laagste lambda-waarde, meeste isolatie per cm' },
        { left: 'Steenwol', right: 'Onbrandbaar en hittebestendig' },
        { left: 'Vlas', right: 'Plantaardig (bio-based) materiaal' },
        { left: 'XPS', right: 'Drukvast en waterbestendig' },
      ],
      explanation: 'Elk isolatiemateriaal heeft een eigen sterk punt dat de toepassing bepaalt.',
    },
    {
      id: 'B.16.bloom.invul', toetstermCode: 'B.16.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de warmtegeleidingscoëfficiënt van een isolatiemateriaal wordt aangeduid met de Griekse letter ______ (lambda).',
      acceptableAnswers: ['lambda', 'λ'],
      explanation: 'Lambda (λ) geeft de warmtegeleiding aan: hoe lager, hoe beter het materiaal isoleert.',
    },
    {
      id: 'B.16.bloom.open', toetstermCode: 'B.16.1', type: 'open', bloom: 'Evalueren',
      prompt: 'Een eigenaar wil een bestaande, ongeïsoleerde spouwmuur na-isoleren zonder de gevel open te breken. Beoordeel welke methode en welk materiaal hier passend zijn, en welk risico hierbij speelt.',
      acceptableAnswers: [
        'Na-isolatie van een bestaande spouw gebeurt meestal door isolatiemateriaal (EPS-parels, minerale wolvlokken, of PUR-schuim) via kleine gaatjes in de voegen in de spouw te blazen (inblazen), zonder de gevel te hoeven afbreken. Het risico is dat een vervuilde, natte of onregelmatige spouw (bijvoorbeeld met puinresten) tot een onvolledige vulling of vochtdoorslag/koudebruggen kan leiden als de uitvoering niet zorgvuldig gebeurt; vooraf inspectie van de spouw is daarom belangrijk.',
      ],
      explanation: 'Kernpunt: inblazen is de gangbare na-isolatiemethode; zorgvuldige uitvoering is essentieel om vochtproblemen te voorkomen.',
    },
  ],
}
