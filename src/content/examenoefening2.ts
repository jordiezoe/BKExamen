import type { Question } from '../types/content'

/**
 * Tweede set ORIGINELE examen-stijl vragen (nieuwe invalshoeken t.o.v.
 * examenoefening.ts). Geen kopieën van de officiële oefenexamens; de
 * antwoordsleutels volgen uit de lesstof van de betreffende onderwerpen.
 *
 * Gekoppeld per onderwerp-code; de content-index plakt ze achter de bestaande
 * vragen zodat de examen-engine ze automatisch meeneemt (ook in de modus
 * "Examen-oefening").
 */
export const examenoefening2Vragen: Record<string, Question[]> = {
  // ─────────────── A · Algemeen ───────────────
  'A.1': [
    {
      id: 'A.1.f1',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt: 'Hoe wordt de aanneemsom bij een bouwproject doorgaans betaald?',
      options: [
        'In termijnen, naar rato van de voortgang van het werk',
        'Volledig vooraf, vóór de start van de bouw',
        'Volledig achteraf, pas na de oplevering',
        'Per maand een vast bedrag, ongeacht de voortgang',
      ],
      correctIndex: 0,
      explanation:
        'De aanneemsom wordt in termijnen betaald die meelopen met de voortgang (bv. na fundering, na ruwbouw, na oplevering). Zo betaalt de opdrachtgever voor wat gereed is.',
    },
    {
      id: 'A.1.f2',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat wordt bedoeld met het bouwvlak op een kavel?',
      options: [
        'Het deel van het perceel waarbinnen het hoofdgebouw mag worden gebouwd',
        'De totale oppervlakte van het kadastrale perceel',
        'De verharde oprit naar de woning',
        'De afstand tussen twee woningen',
      ],
      correctIndex: 0,
      explanation:
        'Het bouwvlak is het (in het omgevingsplan aangegeven) gebied waarbinnen het hoofdgebouw moet staan. Buiten het bouwvlak gelden vaak beperktere regels.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.f1',
      toetstermCode: 'A.2.1.6',
      type: 'mc',
      prompt: 'Waarvoor staat de afkorting UAV in het bouwbestek?',
      options: [
        'Uniforme Administratieve Voorwaarden',
        'Uitvoerings- en Aanbestedingsvoorschriften',
        'Universele Afbouw­voorwaarden',
        'Uitgebreide Aannemersverklaring',
      ],
      correctIndex: 0,
      explanation:
        'De UAV (Uniforme Administratieve Voorwaarden) regelen de rechten en plichten van opdrachtgever en aannemer en horen bij het administratieve deel van het bestek.',
    },
    {
      id: 'A.2.1.f2',
      toetstermCode: 'A.2.1.4',
      type: 'mc',
      prompt: 'Waaraan herken je op een plattegrond meestal een dragende wand?',
      options: [
        'Hij is dikker getekend en loopt door tot op de fundering',
        'Hij is altijd van hout',
        'Hij is dunner dan de niet-dragende wanden',
        'Hij staat altijd los van de gevel',
      ],
      correctIndex: 0,
      explanation:
        'Dragende wanden zijn zwaarder uitgevoerd (dikker) en dragen de vloeren/het dak af naar de fundering. Niet-dragende (scheidings)wanden zijn lichter en dunner.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.f1',
      toetstermCode: 'A.2.2.3',
      type: 'mc',
      prompt: 'Een woning heeft nog géén spouwmuur, maar een massieve buitenmuur. Uit welke periode stamt zij het meest waarschijnlijk?',
      options: ['Van vóór circa 1920', 'Uit de jaren 60', 'Uit de jaren 90', 'Van na 2010'],
      correctIndex: 0,
      explanation:
        'De spouwmuur werd vanaf ongeveer 1920–1930 gangbaar. Een massieve (steens) buitenmuur zonder spouw wijst op bouw vóór die tijd.',
    },
    {
      id: 'A.2.2.f2',
      toetstermCode: 'A.2.2.8',
      type: 'mc',
      prompt: 'Wat is kenmerkend voor een tuindorp als stedenbouwkundig concept?',
      options: [
        'Laagbouw met veel groen, tuinen en een dorpse opzet in of bij de stad',
        'Hoogbouw in torenflats rond een centraal plein',
        'Uitsluitend bedrijfsgebouwen',
        'Woningen zonder enige buitenruimte',
      ],
      correctIndex: 0,
      explanation:
        'Een tuindorp (bv. Vreewijk, Betondorp) combineert betaalbare laagbouw met veel groen en tuinen in een dorpse, ruime opzet — een reactie op de dichte 19e-eeuwse stad.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.f1',
      toetstermCode: 'A.3.7',
      type: 'mc',
      prompt: 'Welke ingreep is onder voorwaarden vaak vergunningsvrij?',
      options: [
        'Een dakkapel op het achterdakvlak',
        'Het slopen van een gemeentelijk monument',
        'Het bouwen van een woning in het buitengebied',
        'Het wijzigen van een dragende constructie in een appartement',
      ],
      correctIndex: 0,
      explanation:
        'Een dakkapel op het achterdakvlak kan onder voorwaarden vergunningsvrij zijn. Ingrepen aan monumenten of dragende constructies zijn dat juist niet.',
    },
    {
      id: 'A.3.f2',
      toetstermCode: 'A.3.6',
      type: 'mc',
      prompt: 'Wat regelt de Wet kwaliteitsborging voor het bouwen (Wkb)?',
      options: [
        'Onafhankelijke controle op de bouwtechnische kwaliteit door een kwaliteitsborger',
        'De maximale koopprijs van een woning',
        'De hoogte van de overdrachtsbelasting',
        'De energieprijzen voor huishoudens',
      ],
      correctIndex: 0,
      explanation:
        'De Wkb verplicht dat een onafhankelijke kwaliteitsborger tijdens de bouw de bouwtechnische kwaliteit controleert. De "knip" scheidt dit bouwtechnische deel van het ruimtelijke (vergunnings)deel.',
    },
  ],

  // ─────────────── B · Constructieve opbouw ───────────────
  'B.3': [
    {
      id: 'B.3.f1',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt: 'Onder welke categorie belasting valt het eigen gewicht van een gebouw?',
      options: ['Permanente (blijvende) belasting', 'Variabele belasting', 'Sneeuwbelasting', 'Windbelasting'],
      correctIndex: 0,
      explanation:
        'Het eigen gewicht van de constructie is een permanente (blijvende) belasting. Personen, meubels, sneeuw en wind zijn variabele (veranderlijke) belastingen.',
    },
    {
      id: 'B.3.f2',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt: 'Hoe heet de plaats waar een ligger of balk rust op een steunpunt?',
      options: ['De oplegging', 'De uitkraging', 'De overspanning', 'De trekstang'],
      correctIndex: 0,
      explanation:
        'De oplegging is het steunpunt waarop een ligger rust. De afstand tussen twee opleggingen is de overspanning.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.f1',
      toetstermCode: 'B.4.5',
      type: 'mc',
      prompt: 'Wat betekent "fundering op staal"?',
      options: [
        'Een ondiepe fundering die de last vlak onder het maaiveld op een draagkrachtige laag afdraagt',
        'Een fundering die volledig van staal is gemaakt',
        'Een fundering op stalen heipalen',
        'Een fundering met stalen damwanden',
      ],
      correctIndex: 0,
      explanation:
        'Fundering "op staal" is een ondiepe fundering (stroken of platen) die de belasting vlak onder het maaiveld op een stevige laag brengt. Het woord "staal" verwijst hier níét naar het materiaal.',
    },
    {
      id: 'B.4.f2',
      toetstermCode: 'B.4.7',
      type: 'mc',
      prompt: 'Wat is het doel van bemaling op een bouwplaats?',
      options: [
        'Het grondwaterpeil tijdelijk verlagen zodat droog gebouwd kan worden',
        'De grond permanent verharden',
        'De fundering verwarmen',
        'Het hemelwater opvangen voor hergebruik',
      ],
      correctIndex: 0,
      explanation:
        'Bemaling verlaagt tijdelijk het grondwater, bijvoorbeeld om droog een bouwput of kelder te kunnen maken. Na de bouw wordt de bemaling gestopt.',
    },
    {
      id: 'B.4.f3',
      toetstermCode: 'B.4.13',
      type: 'mc',
      prompt: 'Waaraan moet een kruipruimte voldoen om vochtproblemen te voorkomen?',
      options: [
        'Voldoende geventileerd zijn via roosters in de gevel',
        'Volledig luchtdicht zijn afgesloten',
        'Gevuld zijn met water',
        'Verwarmd worden met radiatoren',
      ],
      correctIndex: 0,
      explanation:
        'Een kruipruimte moet geventileerd zijn (muisdichte roosters) zodat vocht wordt afgevoerd en de begane-grondvloer droog blijft.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.f1',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt: 'Wat is de functie van spouwankers in een spouwmuur?',
      options: [
        'Het binnen- en buitenblad met elkaar verbinden zodat ze samenwerken',
        'De spouw luchtdicht afsluiten',
        'Het water uit de spouw afvoeren',
        'De isolatie op zijn plaats smelten',
      ],
      correctIndex: 0,
      explanation:
        'Spouwankers koppelen het buiten- en binnenblad, zodat windbelasting op het buitenblad wordt overgebracht naar het dragende binnenblad.',
    },
    {
      id: 'B.5.f2',
      toetstermCode: 'B.5.10',
      type: 'mc',
      prompt: 'Wat wijst op een constructief probleem bij metselwerk?',
      options: [
        'Diagonale (trapsgewijze) scheuren door het voegwerk en de stenen',
        'Een lichte verkleuring van de voegen door regen',
        'Aangebrachte stopcontacten in de muur',
        'Een geschilderde gevel',
      ],
      correctIndex: 0,
      explanation:
        'Diagonale, trapsgewijze scheuren duiden vaak op zetting of ongelijke belasting — een constructief signaal. Verkleuring is meestal esthetisch.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.f1',
      toetstermCode: 'B.6.6',
      type: 'multi',
      prompt: 'Wat zijn voordelen van prefab beton ten opzichte van in het werk gestort beton? (meerdere antwoorden juist)',
      options: [
        'Kortere bouwtijd op de bouwplaats',
        'Gecontroleerde kwaliteit onder fabrieksomstandigheden',
        'Minder afhankelijk van het weer tijdens produceren',
        'Geen transport of hijskraan nodig',
      ],
      correctIndices: [0, 1, 2],
      explanation:
        'Prefab elementen worden in de fabriek onder gecontroleerde omstandigheden gemaakt (constante kwaliteit, weer-onafhankelijk) en snel gemonteerd. Ze vragen juist wél transport en een kraan.',
    },
    {
      id: 'B.6.f2',
      toetstermCode: 'B.6.3',
      type: 'mc',
      prompt: 'Waarom is voldoende betondekking op de wapening belangrijk?',
      options: [
        'Zonder voldoende dekking gaat de wapening roesten en spat het beton af (betonrot)',
        'Meer dekking maakt het beton lichter',
        'Dekking bepaalt de kleur van het beton',
        'Dekking versnelt het uitharden',
      ],
      correctIndex: 0,
      explanation:
        'De dekking beschermt de wapening tegen vocht en carbonatatie. Te weinig dekking → roestende, uitzettende wapening → betonrot.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.f1',
      toetstermCode: 'B.7.4',
      type: 'mc',
      prompt: 'Welke staalverbinding is bedoeld om later weer te kunnen demonteren?',
      options: ['Een boutverbinding', 'Een lasverbinding', 'Een gelijmde verbinding', 'Een gietverbinding'],
      correctIndex: 0,
      explanation:
        'Boutverbindingen zijn demontabel: je kunt ze weer losdraaien. Een lasverbinding is permanent.',
    },
    {
      id: 'B.7.f2',
      toetstermCode: 'B.7.2',
      type: 'mc',
      prompt: 'Welk stalen profiel heeft in doorsnede de vorm van de letter I?',
      options: ['Een IPE-profiel', 'Een UNP-profiel', 'Een L-profiel (hoekstaal)', 'Een koker'],
      correctIndex: 0,
      explanation:
        'Een IPE- (of HEA/HEB-)profiel heeft een I-vorm. Een UNP-profiel is U-vormig, een hoekstaal L-vormig.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.f1',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt: 'Waaraan herken je een koperen dakbedekking of goot die al jaren buiten ligt?',
      options: [
        'Aan de groene uitslag (patina) op het oppervlak',
        'Aan de witte poederlaag',
        'Aan het bruine roest',
        'Aan het volledig doorzichtig worden',
      ],
      correctIndex: 0,
      explanation:
        'Koper vormt in de buitenlucht een groene patina (kopercarbonaat). Die laag beschermt het onderliggende koper tegen verdere aantasting.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.f1',
      toetstermCode: 'B.9.4',
      type: 'mc',
      prompt: 'Welk plaatmateriaal bestaat uit meerdere gelijmde fineerlagen met kruislings verlopende houtnerf?',
      options: ['Multiplex', 'Spaanplaat', 'MDF', 'OSB'],
      correctIndex: 0,
      explanation:
        'Multiplex bestaat uit kruislings verlijmde fineerlagen, wat het sterk en maatvast maakt. Spaanplaat/MDF zijn van houtspaanders/vezels; OSB van grove, gerichte spanen.',
    },
    {
      id: 'B.9.f2',
      toetstermCode: 'B.9.1',
      type: 'mc',
      prompt: 'Wat wordt bedoeld met het "werken" van hout?',
      options: [
        'Het krimpen en uitzetten van hout onder invloed van vocht',
        'Het verbranden van hout',
        'Het verlijmen van houtdelen',
        'Het schilderen van hout',
      ],
      correctIndex: 0,
      explanation:
        'Hout neemt vocht op en staat het weer af; daardoor zet het uit en krimpt het ("werken"). Daar moet je bij details en kozijnen rekening mee houden.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.f1',
      toetstermCode: 'B.10.3',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een inmetselkozijn en een montagekozijn?',
      options: [
        'Een inmetselkozijn wordt tijdens het metselen geplaatst; een montagekozijn wordt later in de opening gemonteerd',
        'Een inmetselkozijn is altijd van kunststof',
        'Een montagekozijn heeft nooit glas',
        'Er is geen verschil',
      ],
      correctIndex: 0,
      explanation:
        'Het inmetselkozijn wordt meteen tijdens het metselwerk mee ingemetseld; het montagekozijn wordt naderhand in een gereedgemaakte opening (met stelkozijn) gemonteerd.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.f1',
      toetstermCode: 'B.12.2',
      type: 'mc',
      prompt: 'Wat kenmerkt een woningscheidende wand tussen twee woningen?',
      options: [
        'Er gelden strenge eisen aan geluidsisolatie en brandwerendheid',
        'Hij mag altijd van enkel gipsplaat zijn',
        'Hij hoeft niet te voldoen aan brandwerendheid',
        'Hij is nooit dragend',
      ],
      correctIndex: 0,
      explanation:
        'Een woningscheidende wand moet geluid tussen buren beperken én brand een bepaalde tijd tegenhouden; daarom is hij zwaar (bv. dubbele wand of dik kalkzandsteen) uitgevoerd.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.f1',
      toetstermCode: 'B.13.3',
      type: 'mc',
      prompt: 'Welke goot ligt verdiept in het dakvlak, op de plaats waar twee dakvlakken samenkomen?',
      options: ['De kilgoot', 'De mastgoot', 'De bakgoot', 'De Keulse goot'],
      correctIndex: 0,
      explanation:
        'Een kilgoot ligt in de "kil": de binnenhoek waar twee dakvlakken samenkomen. Mast- en bakgoten liggen langs de dakvoet.',
    },
    {
      id: 'B.13.f2',
      toetstermCode: 'B.13.6',
      type: 'multi',
      prompt: 'Wat zijn voordelen van een groendak? (meerdere antwoorden juist)',
      options: [
        'Het buffert regenwater',
        'Het beschermt de dakbedekking tegen UV en temperatuurwisselingen',
        'Het geeft extra isolatie en verkoeling',
        'Het maakt de dakbedekking overbodig',
      ],
      correctIndices: [0, 1, 2],
      explanation:
        'Een groendak houdt regenwater vast, beschermt de onderliggende dakbedekking en isoleert/verkoelt. De waterdichte dakbedekking blijft wel nodig — die ligt eronder.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.f1',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt: 'Hoe heten samen de horizontale trede en het verticale deel ertussen bij een trap?',
      options: [
        'Aantrede (horizontaal) en optrede (verticaal)',
        'Boom en leuning',
        'Bordes en spil',
        'Nok en gording',
      ],
      correctIndex: 0,
      explanation:
        'De aantrede is het horizontale loopvlak, de optrede het verticale hoogteverschil per trede. Samen bepalen ze het comfort en de steilheid van de trap.',
    },
    {
      id: 'B.14.f2',
      toetstermCode: 'B.14.5',
      type: 'mc',
      prompt: 'Welke liftsoort gebruikt kabels en een tegengewicht om de liftkooi te bewegen?',
      options: ['De tractielift (kabellift)', 'De hydraulische lift', 'De roltrap', 'De goederenlift zonder aandrijving'],
      correctIndex: 0,
      explanation:
        'Een tractielift beweegt de kooi met staalkabels en een tegengewicht over schijven. Een hydraulische lift duwt de kooi omhoog met een plunjer/olie­druk.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.f1',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt: 'Wat is kenmerkend voor een thermoplast?',
      options: [
        'Hij wordt zacht bij verwarmen en is opnieuw te vormen',
        'Hij blijft bij verwarmen altijd keihard',
        'Hij kan niet worden gerecycled',
        'Hij is altijd doorzichtig',
      ],
      correctIndex: 0,
      explanation:
        'Thermoplasten (PE, PVC, PP) worden zacht bij verwarmen en zijn opnieuw vormbaar/recyclebaar. Thermoharders blijven na uitharden hard en zijn niet omvormbaar.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.f1',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt: 'Wat geldt voor de lambda-waarde (λ) van een isolatiemateriaal?',
      options: [
        'Hoe lager de lambda-waarde, hoe beter het materiaal isoleert',
        'Hoe hoger de lambda-waarde, hoe beter het isoleert',
        'De lambda-waarde zegt niets over isolatie',
        'Lambda gaat alleen over geluid',
      ],
      correctIndex: 0,
      explanation:
        'Lambda (λ) is de warmtegeleidingscoëfficiënt: hoe lager, hoe slechter het materiaal warmte geleidt en dus hoe beter het isoleert.',
    },
    {
      id: 'B.16.f2',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Er is maar weinig ruimte beschikbaar en toch is een hoge isolatiewaarde nodig. Welk isolatiemateriaal ligt dan het meest voor de hand?',
      options: [
        'PIR of PUR (hoge isolatiewaarde per cm)',
        'Glaswol',
        'Steenwol',
        'Vlasisolatie',
      ],
      correctIndex: 0,
      explanation:
        'PIR en PUR hebben de laagste lambda-waarde (beste isolatie per cm), dus bij weinig dikte (dun dak, dunne spouw) bereik je daarmee de meeste isolatie. Minerale wol en vlas isoleren minder per cm.',
    },
    {
      id: 'B.16.f3',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Welk isolatiemateriaal kies je op een plek die zowel drukvast als volledig waterdicht moet zijn, bijvoorbeeld onder een vloer of fundering?',
      options: [
        'Foamglas (cellulair glas) of XPS',
        'Glaswol',
        'Steenwol',
        'Vlasisolatie',
      ],
      correctIndex: 0,
      explanation:
        'Foamglas en XPS zijn drukvast en nemen geen water op — geschikt op belaste, vochtige plekken (onder vloeren, onder fundering, omkeerdak). Minerale wol en vlas zouden daar juist vocht opnemen en inzakken.',
    },
    {
      id: 'B.16.f4',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Waarom wordt bij een brandwerende scheiding of rond een rookkanaal juist steenwol toegepast en geen kunststofschuim?',
      options: [
        'Steenwol is onbrandbaar en bestand tegen hoge temperaturen',
        'Steenwol isoleert per cm het beste van alle materialen',
        'Steenwol is volledig waterdicht',
        'Steenwol is het goedkoopste materiaal',
      ],
      correctIndex: 0,
      explanation:
        'Steenwol (uit gesteente) is onbrandbaar en hittebestendig; kunststofschuimen (EPS, PUR) smelten of branden juist. Daarom kiest men steenwol bij brandveiligheid.',
    },
    {
      id: 'B.16.f5',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt: 'Welk isolatiemateriaal is plantaardig (bio-based)?',
      options: ['Vlas', 'EPS', 'XPS', 'PIR'],
      correctIndex: 0,
      explanation:
        'Vlas is een plantaardig (bio-based) isolatiemateriaal, een duurzaam alternatief voor minerale wol en kunststofschuimen (EPS/XPS/PUR/PIR).',
    },
    {
      id: 'B.16.f6',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Een bestaande, ongeïsoleerde spouwmuur wordt na-geïsoleerd zonder de gevel open te breken. Hoe gebeurt dat meestal?',
      options: [
        'Door isolatie (bv. EPS-parels of minerale wolvlokken) in de spouw te blazen',
        'Door XPS-platen op het dak te leggen',
        'Door de binnenmuur te stucen',
        'Door dubbel glas te plaatsen',
      ],
      correctIndex: 0,
      explanation:
        'Spouwmuurisolatie wordt ingeblazen via gaatjes in de voegen: EPS-parels, glas-/steenwolvlokken of PUR-schuim vullen de bestaande spouw — zonder de gevel af te breken.',
    },
  ],

  // ─────────────── C · Afwerking en installaties ───────────────
  'C.1': [
    {
      id: 'C.1.f1',
      toetstermCode: 'C.1.4',
      type: 'mc',
      prompt: 'Waarvoor dient een ontstoppingsstuk in de binnenriolering?',
      options: [
        'Een toegang om de leiding te kunnen doorspuiten of ontstoppen',
        'Het warme water opslaan',
        'De rioollucht verwarmen',
        'Het drinkwater filteren',
      ],
      correctIndex: 0,
      explanation:
        'Een ontstoppingsstuk is een afsluitbare opening waarmee je de rioolleiding kunt inspecteren en doorspuiten bij een verstopping.',
    },
    {
      id: 'C.1.f2',
      toetstermCode: 'C.1.8',
      type: 'mc',
      prompt: 'Hoe bespaart een WTW-douche (douchewater-warmteterugwinning) energie?',
      options: [
        'De warmte van het wegstromende douchewater verwarmt het koude toevoerwater voor',
        'Hij verwarmt de badkamer met een radiator',
        'Hij vangt regenwater op voor de douche',
        'Hij zuivert het afvalwater',
      ],
      correctIndex: 0,
      explanation:
        'In de WTW-douche geeft het warme wegstromende water zijn warmte via een warmtewisselaar af aan het koude toevoerwater. Daardoor hoeft de ketel dat water minder ver op te warmen.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.f1',
      toetstermCode: 'C.2.6',
      type: 'mc',
      prompt: 'Waaraan herken je een oude loden waterleiding?',
      options: [
        'Grijs, zacht metaal dat je met een spijker kunt krassen en dat gebogen loopt',
        'Blank koper met soldeerverbindingen',
        'Wit kunststof met knelkoppelingen',
        'Verzinkt staal met schroefdraad',
      ],
      correctIndex: 0,
      explanation:
        'Loden leidingen zijn grijs, zacht (krasbaar) en vaak in bochten gelegd. Ze vormen een gezondheidsrisico en worden geadviseerd te vervangen.',
    },
    {
      id: 'C.2.f2',
      toetstermCode: 'C.2.5',
      type: 'mc',
      prompt: 'Wat doet een hydrofoor in een waterinstallatie?',
      options: [
        'De waterdruk verhogen wanneer de netdruk te laag is',
        'Het water onthard maken',
        'Legionella doden met UV-licht',
        'Regenwater opslaan',
      ],
      correctIndex: 0,
      explanation:
        'Een hydrofoor (drukverhogingsinstallatie) verhoogt de waterdruk, bijvoorbeeld in hoge gebouwen of bij te lage netdruk.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.f1',
      toetstermCode: 'C.4.4',
      type: 'mc',
      prompt: 'Wat is vaak nodig bij het plaatsen van een laadpaal voor een elektrische auto in een bestaande woning?',
      options: [
        'Een eigen groep en soms verzwaring van de aansluiting',
        'Een grotere gasmeter',
        'Een extra waterleiding',
        'Een nieuwe schoorsteen',
      ],
      correctIndex: 0,
      explanation:
        'Een laadpaal vraagt veel vermogen; daarvoor wordt een aparte groep aangelegd en soms de aansluiting verzwaard.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.f1',
      toetstermCode: 'C.5.3',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een zonnepaneel (PV) en een zonnecollector?',
      options: [
        'Een PV-paneel maakt elektriciteit; een zonnecollector verwarmt water',
        'Beide maken alleen elektriciteit',
        'Beide verwarmen alleen water',
        'Een zonnecollector maakt elektriciteit; een PV-paneel verwarmt water',
      ],
      correctIndex: 0,
      explanation:
        'PV-panelen (fotovoltaïsch) wekken elektriciteit op. Een zonnecollector/zonneboiler verwarmt met de zon het tapwater.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.f1',
      toetstermCode: 'C.6.5',
      type: 'mc',
      prompt: 'Via welke vorm van warmteoverdracht geeft een radiator vooral zijn warmte af aan de ruimte?',
      options: ['Convectie (luchtstroming)', 'Geleiding door de vloer', 'Kernstraling', 'Verdamping'],
      correctIndex: 0,
      explanation:
        'Een radiator verwarmt vooral de langsstromende lucht, die opstijgt en circuleert: convectie. Vloerverwarming en panelen geven relatief méér straling.',
    },
    {
      id: 'C.6.f2',
      toetstermCode: 'C.6.8',
      type: 'mc',
      prompt: 'Welke warmtepomp haalt zijn warmte uit een bodemlus en is doorgaans het efficiëntst?',
      options: [
        'De bodem-/water-water-warmtepomp',
        'De lucht-lucht-warmtepomp',
        'De gasgestookte ketel',
        'De elektrische kachel',
      ],
      correctIndex: 0,
      explanation:
        'Een bodemwarmtepomp gebruikt de constante bodemtemperatuur en is daardoor efficiënt, maar duurder in aanleg (bron/boring). Lucht-warmtepompen zijn goedkoper maar iets minder efficiënt bij kou.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.f1',
      toetstermCode: 'C.8.5',
      type: 'mc',
      prompt: 'Waarvoor staat de afkorting WBDBO bij brandveiligheid?',
      options: [
        'Weerstand tegen BrandDoorslag en BrandOverslag',
        'Wettelijke Basis­eis Duurzame Bouw­objecten',
        'Warmte- en Brand­doorlatendheid Bouw­onderdelen',
        'Waarborg Brand­detectie en Bewaking Objecten',
      ],
      correctIndex: 0,
      explanation:
        'WBDBO is de tijd (in minuten) dat een scheiding brand tegenhoudt: doorslag (dwars door de constructie) én overslag (buitenom via gevel/dak). Het bepaalt de brandwerendheid tussen compartimenten.',
    },
    {
      id: 'C.8.f2',
      toetstermCode: 'C.8.2',
      type: 'mc',
      prompt: 'Waarom mag je een vlam in een pan met hete olie niet met water blussen?',
      options: [
        'Het water verdampt explosief en verspreidt de brandende olie',
        'Water maakt de olie kouder dan nodig',
        'Water lost de olie op',
        'Dat mag juist wel, water is altijd veilig',
      ],
      correctIndex: 0,
      explanation:
        'Water zakt in de hete olie, verdampt explosief en werpt brandende olie omhoog (steekvlam). Doven met een deksel of blusdeken is de juiste aanpak.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.f1',
      toetstermCode: 'C.9.3',
      type: 'mc',
      prompt: 'Wat is een shuntkanaal in een woongebouw?',
      options: [
        'Een collectief afvoerkanaal met per woning een eigen nevenkanaal, zodat lucht niet overslaat naar de buren',
        'Een waterleiding tussen twee woningen',
        'Een elektrische hoofdleiding',
        'Een kanaal alleen voor regenwater',
      ],
      correctIndex: 0,
      explanation:
        'Een shuntkanaal is een gemeenschappelijk ventilatiekanaal waarop elke woning via een eigen nevenkanaal aansluit; dat voorkomt dat lucht/geur naar een andere woning overslaat.',
    },
    {
      id: 'C.9.f2',
      toetstermCode: 'C.9.5',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een afzuigkap met afvoer en een recirculatiekap?',
      options: [
        'De afvoerkap blaast de lucht naar buiten; de recirculatiekap filtert en blaast terug de keuken in',
        'De recirculatiekap voert altijd naar buiten af',
        'Er is geen verschil',
        'De afvoerkap filtert alleen vet',
      ],
      correctIndex: 0,
      explanation:
        'Een afvoerkap voert de kooklucht via een kanaal naar buiten. Een recirculatiekap filtert vet en geur (koolstoffilter) en blaast de lucht terug de ruimte in.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.f1',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt: 'Welk veiligheidsglas blijft na breuk dankzij een kunststoffolie in één geheel hangen?',
      options: ['Gelaagd glas', 'Gehard glas', 'Enkel floatglas', 'Draadglas'],
      correctIndex: 0,
      explanation:
        'Gelaagd glas heeft een taaie folie tussen de glasbladen; bij breuk blijven de scherven aan de folie plakken (letsel- en inbraakwerend). Gehard glas valt juist in stompe korrels uiteen.',
    },
    {
      id: 'C.11.f2',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt: 'Wat doet zonwerend glas?',
      options: [
        'Het weert met een coating een deel van de zonnewarmte (lage ZTA)',
        'Het laat juist zoveel mogelijk warmte binnen',
        'Het houdt geluid tegen maar geen warmte',
        'Het is altijd ondoorzichtig',
      ],
      correctIndex: 0,
      explanation:
        'Zonwerend glas heeft een coating die een deel van de zonnewarmte tegenhoudt (lage zontoetredingsfactor ZTA), waardoor de ruimte in de zomer minder opwarmt.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.f1',
      toetstermCode: 'C.12.1',
      type: 'mc',
      prompt: 'Wat is het voordeel van een meerpuntsluiting op een deur ten opzichte van een enkel slot?',
      options: [
        'De deur sluit op meerdere punten in het kozijn, wat inbraakwerender is',
        'De deur gaat sneller open',
        'Er is geen sleutel meer nodig',
        'De deur wordt lichter',
      ],
      correctIndex: 0,
      explanation:
        'Een meerpuntsluiting vergrendelt de deur op meerdere punten (boven, midden, onder), waardoor die veel moeilijker open te breken is dan met één slot.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.f1',
      toetstermCode: 'C.13.4',
      type: 'mc',
      prompt: 'Wat is stucwerk (pleisterwerk) op een binnenmuur?',
      options: [
        'Een gladde afwerklaag van mortel/gips op de wand',
        'Een laag tegels',
        'Een houten betimmering',
        'Een isolatieplaat',
      ],
      correctIndex: 0,
      explanation:
        'Stucwerk is een dunne, gladde afwerklaag van gips- of kalkmortel waarmee de wand vlak en schilder-/behangklaar wordt gemaakt.',
    },
    {
      id: 'C.13.f2',
      toetstermCode: 'C.13.9',
      type: 'mc',
      prompt: 'Wat kan een oorzaak zijn van loszittende of "holklinkende" wandtegels?',
      options: [
        'Slechte hechting van de tegellijm aan de ondergrond',
        'Een te gladde voeg',
        'Te veel daglicht',
        'Een lage plafondhoogte',
      ],
      correctIndex: 0,
      explanation:
        'Holklinkende tegels wijzen op onvoldoende hechting (holle ruimte achter de tegel) door slechte lijmverdeling of een stoffige/vochtige ondergrond.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.f1',
      toetstermCode: 'C.14.3',
      type: 'mc',
      prompt: 'Hoe noem je een natuursteenoppervlak dat spiegelend glad is gemaakt?',
      options: ['Gepolijst', 'Gezoet', 'Gefrijnd', 'Gebouchardeerd'],
      correctIndex: 0,
      explanation:
        'Een gepolijst oppervlak is spiegelglad en glanzend. Gezoet is mat glad; gefrijnd/gebouchardeerd zijn ruwere, bewerkte oppervlakken.',
    },
  ],

  // ─────────────── D · Kwaliteit, onderhoud, duurzaamheid ───────────────
  'D.1': [
    {
      id: 'D.1.f1',
      toetstermCode: 'D.1.1',
      type: 'mc',
      prompt: 'Wat is een MJOP?',
      options: [
        'Een meerjarenonderhoudsplan dat onderhoud en kosten over meerdere jaren vooruit plant',
        'Een maandelijkse energierekening',
        'Een milieuvergunning',
        'Een makelaarscontract',
      ],
      correctIndex: 0,
      explanation:
        'Een MJOP (meerjarenonderhoudsplan) legt per bouwdeel vast wanneer welk onderhoud nodig is en wat het kost, vaak op basis van een NEN 2767-conditiemeting.',
    },
    {
      id: 'D.1.f2',
      toetstermCode: 'D.1.2',
      type: 'mc',
      prompt: 'Wat betekent conditiescore 1 volgens de NEN 2767-conditiemeting?',
      options: [
        'Uitstekende conditie (nagenoeg nieuw)',
        'Zeer slechte conditie (bijna afgekeurd)',
        'Gemiddelde conditie',
        'De score zegt niets over de staat',
      ],
      correctIndex: 0,
      explanation:
        'De NEN 2767-schaal loopt van 1 (uitstekend, nieuwstaat) tot 6 (zeer slecht). Hoe hoger de score, hoe slechter de conditie.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.f1',
      toetstermCode: 'D.3.9',
      type: 'mc',
      prompt: 'Wat is contactgeluid?',
      options: [
        'Geluid dat via de constructie wordt doorgegeven, zoals lopen of het schuiven van een stoel',
        'Geluid dat alleen via de lucht komt, zoals praten',
        'Geluid van buiten door het raam',
        'Geluid van een radiator',
      ],
      correctIndex: 0,
      explanation:
        'Contactgeluid ontstaat door trillingen die rechtstreeks in de constructie worden ingebracht (voetstappen, meubels schuiven). Luchtgeluid (praten, muziek) verplaatst zich juist door de lucht.',
    },
    {
      id: 'D.3.f2',
      toetstermCode: 'D.3.8',
      type: 'mc',
      prompt: 'Wat geeft de BENG 3-indicator aan?',
      options: [
        'Het aandeel hernieuwbare energie (in %)',
        'De energiebehoefte in kWh/m²',
        'De geluidsisolatie van de gevel',
        'De brandwerendheid van het dak',
      ],
      correctIndex: 0,
      explanation:
        'De drie BENG-indicatoren zijn: BENG 1 (energiebehoefte), BENG 2 (primair fossiel energiegebruik) en BENG 3 (aandeel hernieuwbare energie in %).',
    },
    {
      id: 'D.3.f3',
      toetstermCode: 'D.3.7',
      type: 'mc',
      prompt: 'Wat is een aandachtspunt bij het na-isoleren van een bestaande spouwmuur?',
      options: [
        'Bij verkeerde uitvoering kan vochtdoorslag of koudebrug ontstaan',
        'De woning wordt er kouder van',
        'De energierekening stijgt altijd',
        'Het mag wettelijk niet',
      ],
      correctIndex: 0,
      explanation:
        'Spouwisolatie verhoogt het comfort en verlaagt de energiekosten, maar bij een vervuilde of onregelmatige spouw kan een verkeerde uitvoering leiden tot vochtdoorslag of koudebruggen.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.f1',
      toetstermCode: 'D.4.2',
      type: 'mc',
      prompt: 'Hoe komt een geldig energielabel voor een woning tot stand?',
      options: [
        'Een erkend energieadviseur neemt de woning op en registreert het label',
        'De eigenaar bepaalt het label zelf online zonder controle',
        'De gemeente kent het automatisch toe bij de bouw',
        'Het label volgt uit de WOZ-waarde',
      ],
      correctIndex: 0,
      explanation:
        'Sinds 2021 stelt een erkend energieadviseur het definitieve energielabel op na een opname van de woning; daarna wordt het geregistreerd (RVO).',
    },
    {
      id: 'D.4.f2',
      toetstermCode: 'D.4.6',
      type: 'mc',
      prompt: 'Waar staat de afkorting ESG voor in de vastgoedwereld?',
      options: [
        'Environmental, Social en Governance',
        'Energie, Subsidie en Garantie',
        'ExtraServicekosten Gebouw',
        'Europese Standaard Gebouwen',
      ],
      correctIndex: 0,
      explanation:
        'ESG staat voor Environmental, Social en Governance: criteria waarmee de duurzaamheid en maatschappelijke impact van (vastgoed)beleggingen worden beoordeeld.',
    },
  ],
}
