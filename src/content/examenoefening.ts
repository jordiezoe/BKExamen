import type { Question } from '../types/content'

/**
 * Grote set ORIGINELE examen-stijl vragen, geschreven in de toon en vraagvormen
 * van de SVMNIVO-proeftoets (BT1 kennen/herkennen; BT2-casus "welk … is het meest
 * geschikt?" en meervoudige "wat zijn voordelen van…"). Dit zijn géén kopieën van
 * de officiële oefenexamens — de vragen zijn nieuw geformuleerd en de antwoord-
 * sleutels zijn afgeleid uit de lesstof van de betreffende onderwerpen.
 *
 * Gekoppeld per onderwerp-code; de content-index plakt ze achter de bestaande
 * vragen zodat de examen-engine ze automatisch meeneemt.
 */
export const examenoefeningVragen: Record<string, Question[]> = {
  // ─────────────── A · Algemeen ───────────────
  'A.1': [
    {
      id: 'A.1.e1',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt: 'Wat gebeurt er in de exploitatiefase van een gebouw?',
      options: [
        'Het gebouw wordt ontworpen en getekend',
        'Het gebouw wordt gebouwd',
        'Het gebouw wordt gebruikt, beheerd en onderhouden',
        'De omgevingsvergunning wordt aangevraagd',
      ],
      correctIndex: 2,
      explanation:
        'De exploitatiefase is de gebruiksfase: het gebouw is opgeleverd en wordt gebruikt, beheerd en onderhouden. Ontwerp en vergunning horen bij eerdere fases.',
    },
    {
      id: 'A.1.e2',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat is de rooilijn?',
      options: [
        'De denkbeeldige lijn waarlangs de voorgevels van gebouwen moeten worden geplaatst',
        'De grens van het kadastrale perceel',
        'De lijn waarop de nok van het dak ligt',
        'De hoogtelijn van het maaiveld',
      ],
      correctIndex: 0,
      explanation:
        'De rooilijn is de (in het omgevingsplan vastgelegde) lijn waarlangs de voorgevel moet staan. De perceelsgrens en het peil zijn iets anders.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.e1',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Op welke schaal wordt een plattegrond van een woning doorgaans getekend?',
      options: ['1:5', '1:100', '1:1000', '2:1'],
      correctIndex: 1,
      explanation:
        'Plattegronden staan meestal op 1:100 (of 1:50). Details gaan op 1:5 of 1:10; een situatietekening op 1:500 of 1:1000.',
    },
    {
      id: 'A.2.1.e2',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Op een bouwtekening zie je bij een wand een arcering van schuine, evenwijdige strepen. Welk materiaal geeft dit aan?',
      options: ['Baksteen (metselwerk)', 'Gewapend beton', 'Isolatie', 'Hout in de lengte'],
      correctIndex: 0,
      explanation:
        'Schuine evenwijdige strepen staan voor baksteen/metselwerk. Gewapend beton = stippels + driehoekjes met diagonale lijnen; isolatie heeft een eigen "wolk"- of kruisarcering.',
    },
    {
      id: 'A.2.1.e3',
      toetstermCode: 'A.2.1.5',
      type: 'mc',
      prompt: 'In het bestek staat iets anders vermeld dan op de bijbehorende bouwtekening. Wat geldt volgens de gangbare regel?',
      options: [
        'Het bestek gaat vóór de tekening',
        'De tekening gaat altijd voor het bestek',
        'De aannemer mag zelf kiezen',
        'De goedkoopste oplossing geldt',
      ],
      correctIndex: 0,
      explanation:
        'Bij tegenstrijdigheid tussen bestek en tekening gaat volgens de gangbare regel het bestek vóór de tekening. In de praktijk overlegt de aannemer dit met de opdrachtgever/directie.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.e1',
      toetstermCode: 'A.2.2.2',
      type: 'mc',
      prompt: 'Hoe noem je een woning aan het einde van een rij, die aan één zijde vastzit aan de buurwoning en aan de andere zijde vrij is?',
      options: ['Hoekwoning', 'Tussenwoning', 'Vrijstaande woning', 'Twee-onder-een-kapwoning'],
      correctIndex: 0,
      explanation:
        'Een hoekwoning staat aan het einde van een rij (één gemeenschappelijke muur). Een tussenwoning heeft aan beide zijden buren; twee-onder-een-kap zijn twee losse woningen tegen elkaar.',
    },
    {
      id: 'A.2.2.e2',
      toetstermCode: 'A.2.2.4',
      type: 'mc',
      prompt: 'Welke bouwstijl uit het begin van de 20e eeuw kenmerkt zich door expressief, plastisch metselwerk met golvende gevels en veel siermetselwerk?',
      options: ['De Amsterdamse School', 'De Nieuwe Zakelijkheid', 'Het Neoclassicisme', 'Het Brutalisme'],
      correctIndex: 0,
      explanation:
        'De Amsterdamse School (ca. 1910–1930) staat bekend om expressief, beeldend baksteenwerk. De Nieuwe Zakelijkheid is juist strak en functioneel.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.e1',
      toetstermCode: 'A.3.1',
      type: 'mc',
      prompt: 'Wat vervangt het oude Bouwbesluit 2012 onder de Omgevingswet?',
      options: [
        'Het Besluit bouwwerken leefomgeving (Bbl)',
        'Het omgevingsplan',
        'De Woningwet',
        'De UAV 2012',
      ],
      correctIndex: 0,
      explanation:
        'De bouwtechnische eisen staan sinds de Omgevingswet in het Besluit bouwwerken leefomgeving (Bbl). Het omgevingsplan gaat over de ruimtelijke regels van de gemeente.',
    },
    {
      id: 'A.3.e2',
      toetstermCode: 'A.3.6',
      type: 'mc',
      prompt: 'Onder welke gevolgklasse van de Wet kwaliteitsborging (Wkb) valt een eenvoudige eengezinswoning?',
      options: ['Gevolgklasse 1', 'Gevolgklasse 2', 'Gevolgklasse 3', 'Gevolgklasse 0'],
      correctIndex: 0,
      explanation:
        'Eenvoudige bouwwerken zoals eengezinswoningen vallen onder gevolgklasse 1 — de klasse waarmee de Wkb-kwaliteitsborging is gestart. Klasse 2 en 3 zijn complexer/risicovoller.',
    },
  ],

  // ─────────────── B · Constructieve opbouw ───────────────
  'B.1': [
    {
      id: 'B.1.e1',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt: 'Een monumentaal pand is fraai en stevig, maar de indeling maakt het nauwelijks bruikbaar als woning. Aan welke Vitruvius-kwaliteit ontbreekt het?',
      options: ['Utilitas (bruikbaarheid)', 'Firmitas (stevigheid)', 'Venustas (schoonheid)', 'Aan geen enkele'],
      correctIndex: 0,
      explanation:
        'Stevigheid (firmitas) en schoonheid (venustas) zijn hier in orde; het schort aan de bruikbaarheid (utilitas).',
    },
  ],
  'B.2': [
    {
      id: 'B.2.e1',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt: 'Tot welke elementengroep van de hoofdopbouw behoort een spouwmuur (buitengevel)?',
      options: ['De opbouw (draagconstructie/gevel)', 'De fundering', 'Het dak', 'De installaties'],
      correctIndex: 0,
      explanation:
        'De gevel/spouwmuur hoort bij de opbouw (de bovengrondse draagconstructie en omhulling). Fundering, dak en installaties zijn aparte elementengroepen.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.e1',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt: 'Beton is sterk onder druk maar zwak onder trek. Waar in een vrij opgelegde betonnen vloer wordt de wapening daarom vooral aangebracht?',
      options: [
        'Aan de onderzijde (de trekzone)',
        'Aan de bovenzijde (de drukzone)',
        'Precies in het midden van de doorsnede',
        'Gelijkmatig over de hele hoogte verdeeld',
      ],
      correctIndex: 0,
      explanation:
        'Bij een vrij opgelegde vloer treedt de trek onderin op; daar komt de (trek)wapening. Boven de steunpunten (bij doorgaande vloeren) juist bovenin.',
    },
    {
      id: 'B.3.e2',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt: 'Hoe heet een constructiedeel dat maar aan één zijde is ondersteund, zoals een balkon dat uit de gevel steekt?',
      options: ['Een uitkraging (console)', 'Een overspanning', 'Een oplegging', 'Een trekstang'],
      correctIndex: 0,
      explanation:
        'Een aan één zijde ingeklemd, uitstekend deel heet een uitkraging of console. Een overspanning ligt juist op twee steunpunten.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.e1',
      toetstermCode: 'B.4.2',
      type: 'mc',
      prompt: 'Welke grondsoort in Nederland is het meest samendrukbaar en zettingsgevoelig, waardoor bebouwing kan verzakken?',
      options: ['Veen', 'Zand', 'Grind', 'Keileem'],
      correctIndex: 0,
      explanation:
        'Veen is licht en houdt veel water vast; het is sterk samendrukbaar en zettingsgevoelig. Zand en grind zijn juist goed draagkrachtig.',
    },
    {
      id: 'B.4.e2',
      toetstermCode: 'B.4.6',
      type: 'mc',
      prompt: 'Bij een paalfundering in slappe grond zakt de omringende grond mee en "trekt" aan de paal. Hoe heet dit verschijnsel dat de paal extra belast?',
      options: ['Negatieve kleef', 'Opwaartse waterdruk', 'Kwel', 'Zetting van de fundering op staal'],
      correctIndex: 0,
      explanation:
        'Meezakkende grond wrijft langs de paal naar beneden: negatieve kleef. Dit geeft een extra neerwaartse belasting op de paal.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.e1',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt: 'Uit welke onderdelen bestaat een spouwmuur, van buiten naar binnen?',
      options: [
        'Buitenblad – spouw met isolatie – binnenblad',
        'Binnenblad – pleisterwerk – buitenblad',
        'Eén enkel metselwerkblad met stuclaag',
        'Twee betonnen bladen zonder tussenruimte',
      ],
      correctIndex: 0,
      explanation:
        'Een spouwmuur bestaat uit een buitenblad, een (geïsoleerde) spouw en een binnenblad. De spouw voorkomt doorslaand vocht en biedt ruimte voor isolatie.',
    },
    {
      id: 'B.5.e2',
      toetstermCode: 'B.5.3',
      type: 'mc',
      prompt: 'Bij welk metselverband bestaat elke laag afwisselend uit koppen en strekken?',
      options: ['Vlaams verband', 'Halfsteensverband', 'Staand verband', 'Koppenverband'],
      correctIndex: 0,
      explanation:
        'In het Vlaams verband wisselen binnen dezelfde laag koppen en strekken elkaar af. Halfsteensverband bestaat alleen uit strekken, koppenverband alleen uit koppen.',
    },
    {
      id: 'B.5.e3',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt: 'Wat is de functie van een latei boven een raam- of deuropening in metselwerk?',
      options: [
        'Het metselwerk boven de opening dragen en de last naar de zijkanten afvoeren',
        'De opening luchtdicht afsluiten',
        'Het raam laten scharnieren',
        'De gevel isoleren',
      ],
      correctIndex: 0,
      explanation:
        'Een latei overbrugt de opening en draagt het bovenliggende metselwerk; de belasting wordt naar de penanten (zijkanten) geleid.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.e1',
      toetstermCode: 'B.6.2',
      type: 'mc',
      prompt: 'Wat is de belangrijkste functie van de betondekking (de betonlaag over de wapening)?',
      options: [
        'De wapening beschermen tegen corrosie en brand',
        'Het beton lichter maken',
        'De kleur van het beton bepalen',
        'De druksterkte van het beton verlagen',
      ],
      correctIndex: 0,
      explanation:
        'De dekking beschermt het staal tegen roest (corrosie) en tegen de hitte bij brand. Te weinig dekking leidt tot betonrot.',
    },
    {
      id: 'B.6.e2',
      toetstermCode: 'B.6.4',
      type: 'mc',
      prompt: 'Door indringend vocht en carbonatatie gaat de wapening roesten, zet uit en spat het beton eraf. Hoe heet dit schadebeeld?',
      options: ['Betonrot', 'Craquelé', 'Grindnest', 'Uitbloei'],
      correctIndex: 0,
      explanation:
        'Roestende, uitzettende wapening die het beton doet afspatten heet betonrot. Craquelé is fijne haarscheurtjes; een grindnest is een holte door slecht verdicht beton.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.e1',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt: 'Staal verliest bij brand snel zijn sterkte. Welke maatregel beschermt een stalen kolom hiertegen?',
      options: [
        'Een brandwerende bekleding of coating aanbrengen',
        'Het staal verzinken',
        'Het staal polijsten',
        'Een dunner profiel kiezen',
      ],
      correctIndex: 0,
      explanation:
        'Rond de ~500 °C verliest staal veel sterkte; een brandwerende bekleding (plaat of opschuimende coating) vertraagt de opwarming. Verzinken beschermt tegen corrosie, niet tegen brand.',
    },
    {
      id: 'B.7.e2',
      toetstermCode: 'B.7.1',
      type: 'mc',
      prompt: 'Waarom vormt zich bij cortenstaal bewust een roestlaag op het oppervlak?',
      options: [
        'De vaste roestlaag beschermt het onderliggende staal tegen verdere corrosie',
        'Om het staal goedkoper te maken',
        'Om het gewicht te verlagen',
        'Om het staal brandwerend te maken',
      ],
      correctIndex: 0,
      explanation:
        'Bij cortenstaal vormt zich een dichte, hechtende roestlaag die als beschermlaag werkt en verdere aantasting afremt.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.e1',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt: 'Welk non-ferro metaal wordt veel gebruikt voor dakgoten en hemelwaterafvoeren en zet sterk uit bij temperatuurwisselingen (uitzetstukken nodig)?',
      options: ['Zink', 'Lood', 'Koper', 'Tin'],
      correctIndex: 0,
      explanation:
        'Zink is licht, goedkoop en goed verwerkbaar en wordt veel voor goten en hwa gebruikt. Het zet sterk uit, dus zijn uitzetstukken/roeven nodig.',
    },
    {
      id: 'B.8.e2',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt: 'Welk zacht, goed vervormbaar non-ferro metaal wordt gebruikt voor loodslabben bij aansluitingen van dakvlakken en schoorstenen?',
      options: ['Lood', 'Zink', 'Aluminium', 'Koper'],
      correctIndex: 0,
      explanation:
        'Lood is zeer buigzaam en waterdicht en wordt daarom gebruikt voor loketten/slabben rond dakdoorbrekingen en aansluitingen.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.e1',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt: 'Vuren en grenen zijn voorbeelden van welk type hout?',
      options: ['Naaldhout (zachthout)', 'Loofhout (hardhout)', 'Plaatmateriaal', 'Tropisch hardhout'],
      correctIndex: 0,
      explanation:
        'Vuren en grenen zijn naaldhoutsoorten (zachthout). Eiken en meranti zijn loofhout (hardhout).',
    },
    {
      id: 'B.9.e2',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt: 'Wat is de belangrijkste oorzaak van houtrot (zwamaantasting) in bijvoorbeeld kozijnen?',
      options: [
        'Langdurige aanwezigheid van vocht',
        'Te droge binnenlucht',
        'Blootstelling aan zonlicht',
        'Contact met beton',
      ],
      correctIndex: 0,
      explanation:
        'Schimmels/zwammen die hout aantasten hebben vocht nodig. Vooral aan de onderzijde van kozijnen, waar water blijft staan, ontstaat houtrot.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.e1',
      toetstermCode: 'B.10.1',
      type: 'mc',
      prompt: 'Wat wordt bedoeld met de dagmaat van een kozijn?',
      options: [
        'De vrije openingsmaat binnenwerks (de "dag")',
        'De buitenmaat van het kozijnhout',
        'De hoogte van de onderdorpel',
        'De dikte van het glas',
      ],
      correctIndex: 0,
      explanation:
        'De dagmaat is de vrije openingsmaat binnen het kozijn. De sponningmaat wordt gemeten tot in de sponning waar het raam of de deur invalt.',
    },
    {
      id: 'B.10.e2',
      toetstermCode: 'B.10.6',
      type: 'mc',
      prompt: 'Wat kenmerkt een opdekdeur ten opzichte van een stompe deur?',
      options: [
        'De deur valt met een sponningrand over het kozijn heen',
        'De deur sluit helemaal vlak in het kozijn',
        'De deur heeft geen scharnieren nodig',
        'De deur is altijd van glas',
      ],
      correctIndex: 0,
      explanation:
        'Een opdekdeur heeft een rand die over het kozijn valt (dekt het naadje af). Een stompe deur valt vlak binnen het kozijnvlak.',
    },
  ],
  'B.11': [
    {
      id: 'B.11.e1',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt: 'Wat is een belangrijk voordeel van een kunststof (PVC) kozijn ten opzichte van een houten kozijn?',
      options: [
        'Het is vrijwel onderhoudsvrij en hoeft niet geschilderd te worden',
        'Het is sterker bij brand',
        'Het is altijd goedkoper dan elk ander materiaal',
        'Het isoleert beter dan welk ander materiaal ook',
      ],
      correctIndex: 0,
      explanation:
        'Kunststof kozijnen hoeven niet geschilderd te worden en zijn daardoor onderhoudsarm. Hout vraagt periodiek schilderwerk.',
    },
    {
      id: 'B.11.e2',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt: 'Aluminium geleidt warmte goed. Welke maatregel voorkomt koudebruggen en condens bij een aluminium kozijn?',
      options: [
        'Een thermische onderbreking (kunststof profiel tussen binnen- en buitenzijde)',
        'Het kozijn dikker maken',
        'Het kozijn schilderen',
        'Er enkel glas in plaatsen',
      ],
      correctIndex: 0,
      explanation:
        'Een thermisch onderbroken profiel scheidt de warme en koude zijde van het aluminium, waardoor koudebrug en condens worden voorkomen.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.e1',
      toetstermCode: 'B.12.2',
      type: 'mc',
      prompt: 'Welke balk wordt om een sparing (bijvoorbeeld een trapgat of schoorsteen) heen aangebracht om de onderbroken vloerbalken op te vangen?',
      options: ['De raveelbalk', 'De strijkbalk', 'De nokbalk', 'De gording'],
      correctIndex: 0,
      explanation:
        'Rond een opening in de vloer draagt de raveelbalk de afgesneden vloerbalken. Een strijkbalk ligt juist tegen/langs de muur.',
    },
    {
      id: 'B.12.e2',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt: 'Waarom moet een kruipruimte onder een woning geventileerd zijn?',
      options: [
        'Om vochtophoping en daarmee schimmel en houtrot in de begane-grondvloer te voorkomen',
        'Om de fundering te koelen',
        'Om geluid van buren te dempen',
        'Om ongedierte aan te trekken',
      ],
      correctIndex: 0,
      explanation:
        'Ventilatie voert vocht af, zodat de vloer droog blijft en schimmel/houtrot geen kans krijgt. Daarom zitten er muisdichte ventilatieroosters in de gevel.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.e1',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Hoe heet een dak dat uit één schuin vlak bestaat en aan de ene zijde hoger is dan de andere?',
      options: ['Lessenaarsdak', 'Zadeldak', 'Schilddak', 'Tentdak'],
      correctIndex: 0,
      explanation:
        'Eén hellend vlak = lessenaarsdak. Een zadeldak heeft twee schuine vlakken; een schilddak vier; een tentdak vier vlakken die in één punt samenkomen.',
    },
    {
      id: 'B.13.e2',
      toetstermCode: 'B.13.2',
      type: 'mc',
      prompt: 'Hoe liggen de gordingen in een gordingenkap ten opzichte van de spanten?',
      options: [
        'Horizontaal, dwars op de spanten',
        'Verticaal langs de spanten',
        'Diagonaal over de spanten',
        'Er zijn geen gordingen in een gordingenkap',
      ],
      correctIndex: 0,
      explanation:
        'Gordingen liggen horizontaal, dwars op de spanten, en dragen de dakbedekking/het beschot. Bij een sporenkap ontbreken de gordingen.',
    },
    {
      id: 'B.13.e3',
      toetstermCode: 'B.13.5',
      type: 'multi',
      prompt: 'Welke materialen worden gebruikt als dakbedekking op een plat dak? (meerdere antwoorden juist)',
      options: ['Bitumen (dakleer)', 'EPDM (rubberfolie)', 'Kunststof folie (PVC/TPO)', 'Keramische dakpannen'],
      correctIndices: [0, 1, 2],
      explanation:
        'Platte daken worden waterdicht gemaakt met bitumen, EPDM of kunststoffolie. Keramische dakpannen horen bij hellende daken.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.e1',
      toetstermCode: 'B.14.1',
      type: 'mc',
      prompt: 'Hoe heet een trap die halverwege 180° van richting verandert via een bordes of draaitreden?',
      options: ['Halfslagtrap (bordestrap)', 'Rechte steektrap', 'Spiltrap', 'Kwartslagtrap'],
      correctIndex: 0,
      explanation:
        'Bij een halfslagtrap keert de looprichting 180° om. Een kwartslagtrap draait 90°; een rechte steektrap loopt in één rechte lijn.',
    },
    {
      id: 'B.14.e2',
      toetstermCode: 'B.14.3',
      type: 'mc',
      prompt: 'Je vergroot bij een trap de optrede (de hoogte per trede) bij gelijkblijvende verdiepingshoogte. Wat is het gevolg?',
      options: [
        'Er zijn minder treden nodig en de trap wordt steiler en korter',
        'De trap wordt langer en flauwer',
        'Er verandert niets aan het ruimtebeslag',
        'De trap wordt automatisch breder',
      ],
      correctIndex: 0,
      explanation:
        'Grotere optreden betekent minder treden om dezelfde hoogte te overbruggen: steiler en minder ruimtebeslag, maar minder comfortabel.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.e1',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt: 'Welke kunststof wordt veel gebruikt voor rioolbuizen en hemelwaterafvoeren?',
      options: ['PVC (polyvinylchloride)', 'PMMA (perspex)', 'PC (polycarbonaat)', 'EPS (piepschuim)'],
      correctIndex: 0,
      explanation:
        'PVC is stevig, licht en goed verlijmbaar en wordt veel voor riolerings- en hwa-buizen gebruikt. PMMA en PC zijn doorzichtige plaatmaterialen.',
    },
    {
      id: 'B.15.e2',
      toetstermCode: 'B.15.2',
      type: 'mc',
      prompt: 'Welk doorzichtig, zeer slagvast plaatmateriaal wordt toegepast voor lichtkoepels en overkappingen?',
      options: ['Polycarbonaat (PC)', 'PVC', 'Polyetheen (PE)', 'Bitumen'],
      correctIndex: 0,
      explanation:
        'Polycarbonaat is helder en zeer slagvast en daarom geschikt voor lichtkoepels en overkappingen. Perspex (PMMA) is ook doorzichtig maar breekbaarder.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.e1',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt: 'Een aannemer zoekt isolatie die drukvast en vochtbestendig is, om te gebruiken onder een dekvloer en op een omkeerdak. Welk materiaal is het meest geschikt?',
      options: [
        'Geëxtrudeerd polystyreen (XPS)',
        'Glaswol',
        'Steenwol',
        'Vlasisolatie',
      ],
      correctIndex: 0,
      explanation:
        'XPS is dicht, drukvast en neemt nauwelijks water op — ideaal onder vloeren en op een omkeerdak. Minerale wol (glas-/steenwol) is niet drukvast en neemt vocht op.',
    },
    {
      id: 'B.16.e2',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt: 'Welke eigenschap maakt steenwol bij uitstek geschikt als brandwerende isolatie?',
      options: [
        'Het is onbrandbaar en bestand tegen hoge temperaturen',
        'Het is volledig drukvast',
        'Het is doorzichtig',
        'Het neemt geen enkel geluid op',
      ],
      correctIndex: 0,
      explanation:
        'Steenwol is van gesteente gemaakt, onbrandbaar en hittebestendig; daarom wordt het als brandwerende isolatie toegepast. Het isoleert bovendien geluid.',
    },
  ],

  // ─────────────── C · Afwerking en installaties ───────────────
  'C.1': [
    {
      id: 'C.1.e1',
      toetstermCode: 'C.1.2',
      type: 'mc',
      prompt: 'Wat is het kenmerk van een gescheiden rioolstelsel?',
      options: [
        'Vuilwater en regenwater worden via aparte buizen afgevoerd',
        'Al het afvalwater gaat door één gezamenlijke buis',
        'Regenwater wordt binnen de woning opgevangen',
        'Er is helemaal geen riolering aanwezig',
      ],
      correctIndex: 0,
      explanation:
        'Een gescheiden stelsel voert vuilwater (naar de zuivering) en schoon regenwater (naar oppervlaktewater/infiltratie) apart af. Bij een gemengd stelsel gaat alles samen.',
    },
    {
      id: 'C.1.e2',
      toetstermCode: 'C.1.7',
      type: 'mc',
      prompt: 'Wat is de functie van een stankafsluiter (sifon) onder een wastafel of gootsteen?',
      options: [
        'Een waterslot vormen dat rioollucht tegenhoudt',
        'Het water verwarmen',
        'Het water filteren',
        'De afvoer sneller laten leeglopen',
      ],
      correctIndex: 0,
      explanation:
        'De sifon houdt door een waterslotje de stank uit het riool tegen. Droogstaan (bv. lang niet gebruikt) laat de geur juist door.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.e1',
      toetstermCode: 'C.2.2',
      type: 'mc',
      prompt: 'Welk toestel levert zowel warm tapwater als warm water voor de verwarming?',
      options: ['Een combiketel', 'Een losse boiler', 'Een geiser', 'Een WTW-douche'],
      correctIndex: 0,
      explanation:
        'Een combiketel verzorgt zowel de cv (verwarming) als het warme tapwater. Een boiler of geiser levert alleen warm tapwater.',
    },
    {
      id: 'C.2.e2',
      toetstermCode: 'C.2.7',
      type: 'mc',
      prompt: 'Bij welke omstandigheid is het risico op legionella in een warmwaterinstallatie het grootst?',
      options: [
        'Stilstaand, lauwwarm water van ongeveer 25–50 °C',
        'Stromend water van 70 °C',
        'Koud water onder 10 °C',
        'Water dat onder hoge druk staat',
      ],
      correctIndex: 0,
      explanation:
        'De legionellabacterie groeit het best in stilstaand water tussen circa 25 en 50 °C. Daarom houdt men warm water ≥ 60 °C en spoelt men leidingen door.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.e1',
      toetstermCode: 'C.3.1',
      type: 'mc',
      prompt: 'Waar zit doorgaans de hoofdgaskraan waarmee de gastoevoer naar de woning kan worden afgesloten?',
      options: [
        'Bij de gasmeter in de meterkast',
        'In de badkamer',
        'Bij de cv-ketel op zolder',
        'Buiten midden op straat',
      ],
      correctIndex: 0,
      explanation:
        'De hoofdgaskraan zit bij de gasmeter in de meterkast; daarmee sluit je in één keer de gastoevoer af.',
    },
    {
      id: 'C.3.e2',
      toetstermCode: 'C.3.3',
      type: 'mc',
      prompt: 'Een woning gaat "van het gas af" en wordt volledig elektrisch. Welke aanpassing is daarbij vaak nodig?',
      options: [
        'Verzwaring van de elektrische aansluiting en de groepenkast',
        'Een grotere gasmeter plaatsen',
        'Een extra schoorsteen bouwen',
        'Dikkere waterleidingen aanleggen',
      ],
      correctIndex: 0,
      explanation:
        'Elektrisch koken, een warmtepomp en soms laden van een auto vragen meer vermogen; daarom is verzwaring van aansluiting en groepenkast vaak nodig.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.e1',
      toetstermCode: 'C.4.2',
      type: 'mc',
      prompt: 'Welk onderdeel in de groepenkast schakelt de stroom direct uit bij een aardlek en beschermt zo tegen elektrocutie?',
      options: [
        'De aardlekschakelaar',
        'De kWh-meter',
        'De hoofdschakelaar',
        'De installatieautomaat tegen overbelasting',
      ],
      correctIndex: 0,
      explanation:
        'De aardlekschakelaar merkt een lekstroom (bv. via een persoon) en schakelt razendsnel uit. De installatieautomaat beschermt juist tegen overbelasting/kortsluiting.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.e1',
      toetstermCode: 'C.5.1',
      type: 'mc',
      prompt: 'Zonnepanelen leveren gelijkstroom (DC). Welk onderdeel zet dit om naar wisselstroom (AC) voor de woning en het net?',
      options: ['De omvormer (inverter)', 'De accu', 'De groepenkast', 'De optimizer'],
      correctIndex: 0,
      explanation:
        'De omvormer zet de door de panelen opgewekte gelijkstroom om in wisselstroom die het net en de apparaten gebruiken.',
    },
    {
      id: 'C.5.e2',
      toetstermCode: 'C.5.2',
      type: 'mc',
      prompt: 'Wat geeft het wattpiek (Wp) van een zonnepaneel aan?',
      options: [
        'Het maximale vermogen onder standaard testomstandigheden',
        'De jaarlijkse opbrengst in kWh',
        'Het gewicht van het paneel',
        'De terugverdientijd in jaren',
      ],
      correctIndex: 0,
      explanation:
        'Wattpiek is het piekvermogen dat een paneel levert onder gestandaardiseerde testcondities. De werkelijke jaaropbrengst hangt af van ligging, oriëntatie en weer.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.e1',
      toetstermCode: 'C.6.2',
      type: 'mc',
      prompt: 'Vloerverwarming werkt met relatief laag verwarmingswater. Onder welk systeem valt dit?',
      options: [
        'Laagtemperatuurverwarming (LTV)',
        'Hoogtemperatuurverwarming (HTV)',
        'Lokale verwarming',
        'Stralingsverwarming met open haard',
      ],
      correctIndex: 0,
      explanation:
        'Vloer- en wandverwarming werken op lage aanvoertemperatuur (LTV) en passen goed bij een warmtepomp. Radiatoren met een ketel werken vaak op hoge temperatuur (HTV).',
    },
    {
      id: 'C.6.e2',
      toetstermCode: 'C.6.7',
      type: 'mc',
      prompt: 'Waarom is een HR-ketel zuiniger dan een oude VR-ketel?',
      options: [
        'Hij benut ook de warmte uit de waterdamp in de rookgassen (condensatie)',
        'Hij verbruikt helemaal geen gas',
        'Hij werkt op zonne-energie',
        'Hij heeft geen rookgasafvoer nodig',
      ],
      correctIndex: 0,
      explanation:
        'Een HR (hoogrendement)-ketel condenseert de waterdamp in de rookgassen en wint zo extra warmte terug — daardoor een hoger rendement dan een VR-ketel.',
    },
    {
      id: 'C.6.e3',
      toetstermCode: 'C.6.9',
      type: 'multi',
      prompt: 'Wat zijn voordelen van een warmtepomp ten opzichte van een gasketel? (meerdere antwoorden juist)',
      options: [
        'Er is geen aardgas nodig',
        'Sommige types kunnen ook koelen',
        'Werkt efficiënt met lagetemperatuur-afgifte zoals vloerverwarming',
        'Stoot ter plaatse CO₂ uit door verbranding',
      ],
      correctIndices: [0, 1, 2],
      explanation:
        'Een warmtepomp is gasloos, kan (bij sommige types) koelen en werkt efficiënt met LTV. Hij verbrandt niets ter plaatse en stoot daar dus geen CO₂ uit.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.e1',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een airconditioning en topkoeling?',
      options: [
        'Airco koelt volledig tot een ingestelde temperatuur; topkoeling neemt alleen de warmtepiek weg',
        'Topkoeling koelt juist sterker dan airco',
        'Ze zijn precies hetzelfde',
        'Airco kan alleen verwarmen, niet koelen',
      ],
      correctIndex: 0,
      explanation:
        'Een airco conditioneert de ruimte volledig tot een setpoint; topkoeling neemt alleen de bovenste warmtelast weg en is dus lichter uitgevoerd.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.e1',
      toetstermCode: 'C.8.1',
      type: 'mc',
      prompt: 'Welk type rookmelder reageert op de verstrooiing van licht door rookdeeltjes en is in woningen het meest gangbaar?',
      options: [
        'De optische rookmelder',
        'De ionisatiemelder',
        'De thermische (warmte)melder',
        'De koolmonoxidemelder',
      ],
      correctIndex: 0,
      explanation:
        'De optische rookmelder detecteert rook via lichtverstrooiing en is de standaard in woningen. Een thermische melder reageert op temperatuur, een CO-melder op koolmonoxide.',
    },
    {
      id: 'C.8.e2',
      toetstermCode: 'C.8.5',
      type: 'mc',
      prompt: 'Wat is het doel van brandcompartimentering in een gebouw?',
      options: [
        'Brand en rook gedurende een bepaalde tijd binnen een deel van het gebouw houden',
        'De brand sneller laten uitbranden',
        'De vluchtweg korter maken',
        'Rookmelders overbodig maken',
      ],
      correctIndex: 0,
      explanation:
        'Compartimentering begrenst brand en rook een bepaalde tijd tot één compartiment (WBDBO), zodat mensen kunnen vluchten en de brandweer kan ingrijpen.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.e1',
      toetstermCode: 'C.9.1',
      type: 'mc',
      prompt: 'Welk ventilatiesysteem heeft natuurlijke toevoer via roosters en mechanische afvoer via een ventilator, en komt in Nederlandse woningen het meest voor?',
      options: [
        'Systeem C',
        'Systeem A (volledig natuurlijk)',
        'Systeem B (mechanische toevoer, natuurlijke afvoer)',
        'Systeem D (gebalanceerd met WTW)',
      ],
      correctIndex: 0,
      explanation:
        'Systeem C: natuurlijke toevoer (roosters) + mechanische afvoer (box). Het is het meest toegepaste systeem in Nederlandse woningen.',
    },
    {
      id: 'C.9.e2',
      toetstermCode: 'C.9.2',
      type: 'mc',
      prompt: 'Wat is het belangrijkste voordeel van gebalanceerde ventilatie (systeem D) met warmteterugwinning?',
      options: [
        'De warmte uit de afgevoerde lucht verwarmt de verse toevoerlucht voor',
        'Er is helemaal geen ventilator nodig',
        'Het werkt zonder kanalen',
        'Het koelt de woning in de zomer volledig',
      ],
      correctIndex: 0,
      explanation:
        'In de WTW-unit geeft de warme afvoerlucht zijn warmte af aan de koude verse lucht: minder warmteverlies en dus energiewinst.',
    },
  ],
  'C.10': [
    {
      id: 'C.10.e1',
      toetstermCode: 'C.10.1',
      type: 'mc',
      prompt: 'Waar staat het keurmerk PKVW voor?',
      options: [
        'Politiekeurmerk Veilig Wonen (inbraakpreventie)',
        'Een energielabel voor woningen',
        'Een brandveiligheidskeurmerk',
        'Een geluidsnorm voor gevels',
      ],
      correctIndex: 0,
      explanation:
        'Het Politiekeurmerk Veilig Wonen stelt eisen aan hang- en sluitwerk, verlichting en indeling om inbraak te voorkomen.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.e1',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt: 'Wat is "HR++"-glas?',
      options: [
        'Hoogrendement isolerend dubbel glas met een coating en gasvulling in de spouw',
        'Enkel glas',
        'Gehard veiligheidsglas',
        'Brandwerend glas',
      ],
      correctIndex: 0,
      explanation:
        'HR++-glas is dubbel glas met een onzichtbare metaalcoating en edelgas (argon) in de spouw; dat isoleert veel beter dan gewoon dubbel glas.',
    },
    {
      id: 'C.11.e2',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt: 'Wat geldt voor de Ug-waarde (warmtedoorgangscoëfficiënt) van glas?',
      options: [
        'Hoe lager de Ug-waarde, hoe beter het glas isoleert',
        'Hoe hoger de Ug-waarde, hoe beter het glas isoleert',
        'De Ug-waarde zegt niets over isolatie',
        'De Ug-waarde gaat alleen over geluid',
      ],
      correctIndex: 0,
      explanation:
        'De U-waarde geeft het warmteverlies aan: hoe lager, hoe minder warmte er doorheen gaat en hoe beter de isolatie. (Bij de Rc-waarde is het juist andersom.)',
    },
  ],
  'C.12': [
    {
      id: 'C.12.e1',
      toetstermCode: 'C.12.1',
      type: 'mc',
      prompt: 'Welk keurmerk met sterren geeft de inbraakwerendheid van hang- en sluitwerk aan?',
      options: [
        'Het SKG-sterrenkeurmerk',
        'Het KOMO-keurmerk',
        'Het CE-teken',
        'Het FSC-keurmerk',
      ],
      correctIndex: 0,
      explanation:
        'Het SKG-keurmerk (één tot drie sterren) geeft de inbraakwerendheid van sloten en beslag aan. Meer sterren = inbraakwerender.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.e1',
      toetstermCode: 'C.13.2',
      type: 'mc',
      prompt: 'Wat is de juiste opbouw van een verfsysteem op nieuw, kaal hout?',
      options: [
        'Grondverf → voorlak → aflak',
        'Aflak → grondverf → voorlak',
        'Voorlak → aflak → grondverf',
        'Alleen een laag aflak',
      ],
      correctIndex: 0,
      explanation:
        'Eerst grondverf (hecht en dringt in het hout), dan voorlak (vult en bouwt op), tot slot de aflak (dekkende, beschermende toplaag).',
    },
    {
      id: 'C.13.e2',
      toetstermCode: 'C.13.6',
      type: 'mc',
      prompt: 'Waar geeft de "Rutschwerte" (R-waarde, bijvoorbeeld R10) van een vloertegel iets over?',
      options: [
        'De mate van stroefheid / antislip',
        'De hardheid van de tegel',
        'De kleurechtheid',
        'De waterdichtheid',
      ],
      correctIndex: 0,
      explanation:
        'De Rutschwerte (R9–R13) geeft de antislipklasse aan: hoe hoger het getal, hoe stroever de tegel — belangrijk in natte ruimten.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.e1',
      toetstermCode: 'C.14.1',
      type: 'mc',
      prompt: 'Tot welke hoofdgroep natuursteen behoort graniet?',
      options: ['Stollingsgesteente', 'Sedimentgesteente', 'Metamorf gesteente', 'Kunststeen'],
      correctIndex: 0,
      explanation:
        'Graniet ontstaat uit gestold magma en is dus stollingsgesteente. Zandsteen/kalksteen zijn sediment; marmer en leisteen zijn metamorf.',
    },
    {
      id: 'C.14.e2',
      toetstermCode: 'C.14.2',
      type: 'mc',
      prompt: 'Marmer en leisteen ontstaan door hoge druk en temperatuur uit bestaand gesteente. Tot welke groep behoren ze?',
      options: ['Metamorf gesteente', 'Stollingsgesteente', 'Sedimentgesteente', 'Kunststeen'],
      correctIndex: 0,
      explanation:
        'Metamorf ("omgevormd") gesteente ontstaat als bestaand gesteente onder druk en hitte verandert — zoals kalksteen tot marmer en klei tot leisteen.',
    },
  ],

  // ─────────────── D · Kwaliteit, onderhoud, duurzaamheid ───────────────
  'D.1': [
    {
      id: 'D.1.e1',
      toetstermCode: 'D.1.2',
      type: 'mc',
      prompt: 'Welke norm wordt gebruikt om de bouwkundige conditie van gebouwonderdelen objectief te scoren (conditie 1 t/m 6) voor een MJOP?',
      options: ['NEN 2767', 'NEN 2580', 'NEN 1010', 'NEN 1006'],
      correctIndex: 0,
      explanation:
        'NEN 2767 (conditiemeting) scoort de staat van onderdelen op een schaal van 1 (uitstekend) tot 6 (zeer slecht). NEN 2580 gaat over oppervlaktes.',
    },
    {
      id: 'D.1.e2',
      toetstermCode: 'D.1.4',
      type: 'mc',
      prompt: 'Wat is planmatig (preventief) onderhoud?',
      options: [
        'Vooraf gepland onderhoud om gebreken te voorkomen',
        'Onderhoud pas nadat iets kapot is gegaan',
        'Onderhoud dat nooit hoeft plaats te vinden',
        'Sloop gevolgd door nieuwbouw',
      ],
      correctIndex: 0,
      explanation:
        'Planmatig/preventief onderhoud wordt op basis van een MJOP vooraf ingepland om gebreken te voorkomen. Correctief onderhoud volgt pas ná een gebrek.',
    },
  ],
  'D.2': [
    {
      id: 'D.2.e1',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt: 'Bij een woningopname zie je afbladderende verf, houtrot onder in de kozijnen en openstaande naden. Wat is de meest logische conclusie?',
      options: [
        'Het schilder- en houtwerk is toe aan herstel en onderhoud',
        'De fundering is verzakt',
        'Het glas is niet isolerend',
        'De woning is niet vergund',
      ],
      correctIndex: 0,
      explanation:
        'Afbladderende verf, houtrot en open naden wijzen op achterstallig schilder-/houtwerk. Dat is een onderhoudskwestie, geen funderings- of vergunningsprobleem.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.e1',
      toetstermCode: 'D.3.5',
      type: 'mc',
      prompt: 'Wat geeft de Rc-waarde van een dak, gevel of vloer aan?',
      options: [
        'De warmteweerstand van de constructie — hoe hoger, hoe beter geïsoleerd',
        'De geluidsisolatie',
        'De brandwerendheid',
        'De draagkracht',
      ],
      correctIndex: 0,
      explanation:
        'De Rc-waarde is de warmteweerstand van een dichte constructie: hoe hoger, hoe beter de isolatie. Het Bbl stelt minimale Rc-eisen aan nieuwbouw.',
    },
    {
      id: 'D.3.e2',
      toetstermCode: 'D.3.3',
      type: 'mc',
      prompt: 'Aan welke zijde van de isolatie hoort in een goed geïsoleerde constructie de dampremmende folie?',
      options: [
        'Aan de warme (binnen)zijde',
        'Aan de koude (buiten)zijde',
        'Precies in het midden van de isolatie',
        'Dat maakt geen verschil',
      ],
      correctIndex: 0,
      explanation:
        'De dampremmende laag hoort aan de warme binnenzijde, zodat vochtige binnenlucht niet in de constructie condenseert. "Damp remmen aan de warme kant."',
    },
    {
      id: 'D.3.e3',
      toetstermCode: 'D.3.4',
      type: 'mc',
      prompt: 'Wat is een koudebrug (thermische brug) in een constructie?',
      options: [
        'Een plek met minder isolatie waar veel warmte weglekt en condens kan ontstaan',
        'Een brug over koud water',
        'Een koelinstallatie in de gevel',
        'Een type plat dak',
      ],
      correctIndex: 0,
      explanation:
        'Bij een koudebrug (bv. een doorlopende betonvloer naar een balkon) lekt warmte weg en kan aan de binnenzijde condens en schimmel ontstaan.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.e1',
      toetstermCode: 'D.4.2',
      type: 'mc',
      prompt: 'Welke energielabels vormen de uiterste waarden op de schaal voor woningen?',
      options: [
        'A (zeer zuinig) tot en met G (zeer onzuinig)',
        'Van 1 tot 10',
        'Rood tot groen zonder letters',
        'A tot en met D',
      ],
      correctIndex: 0,
      explanation:
        'De energielabelschaal loopt van A (zeer zuinig, tegenwoordig tot A++++) tot G (zeer onzuinig). Het label is verplicht bij verkoop en verhuur.',
    },
    {
      id: 'D.4.e2',
      toetstermCode: 'D.4.8',
      type: 'mc',
      prompt: 'Aan welke eis moeten de meeste kantoorgebouwen sinds 2023 voldoen?',
      options: [
        'Minimaal energielabel C',
        'Minimaal energielabel A',
        'Volledig gasloos zijn',
        'Zonnepanelen op het dak hebben',
      ],
      correctIndex: 0,
      explanation:
        'Sinds 2023 geldt voor de meeste kantoren (vanaf 100 m²) de verplichting van minimaal energielabel C; anders mag het pand niet als kantoor worden gebruikt.',
    },
    {
      id: 'D.4.e3',
      toetstermCode: 'D.4.3',
      type: 'mc',
      prompt: 'Wat betekent circulair bouwen?',
      options: [
        'Bouwen met herbruikbare materialen en zo min mogelijk afval, gericht op hergebruik',
        'Uitsluitend ronde gebouwen ontwerpen',
        'Alleen met beton bouwen',
        'Zo goedkoop mogelijk bouwen',
      ],
      correctIndex: 0,
      explanation:
        'Circulair bouwen richt zich op hergebruik van materialen en het voorkomen van afval, zodat grondstoffen in de kringloop blijven (bv. remontabel/demontabel bouwen).',
    },
  ],
}
