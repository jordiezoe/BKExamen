import type { Question } from '../types/content'

/**
 * Bloom-examen — vierde golf, sectie C. Zeer hoog niveau, sterke nadruk op
 * Toepassen/Analyseren/Evalueren, GEEN open vragen (uitsluitend mc, multi,
 * invul, match). Nieuwe, niet overlappende feiten t.o.v. bloomexamenC.ts,
 * C2.ts en C3.ts. Mede geïnspireerd op eigen samenvattingen (gas/water/
 * elektra, installaties) — origineel geschreven.
 */
export const bloomExamenC4: Record<string, Question[]> = {
  'C.1': [
    {
      id: 'C.1.bloom4.mc', toetstermCode: 'C.1.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'In een woning wordt herhaaldelijk een verstopping in de binnenriolering geconstateerd op precies dezelfde plek, telkens na een periode van droogte gevolgd door regen. Wat is een plausibele, terugkerende oorzaak?',
      options: [
        'Wortelgroei van een boom die de leiding op die plek is binnengedrongen',
        'Een te grote buisdiameter op die plek', 'Een te steil afschot van de leiding', 'Een te hoge waterdruk in de riolering',
      ],
      correctIndex: 0,
      explanation: 'Terugkerende verstoppingen op steeds dezelfde plek, gekoppeld aan droog-nat wisselingen, wijzen vaak op wortelgroei die de voeg is binnengedrongen op zoek naar vocht.',
    },
    {
      id: 'C.1.bloom4.multi', toetstermCode: 'C.1.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen verminderen het risico op rioolverstopping door onjuist afschot?',
      options: [
        'De leiding aanleggen met voldoende, consistent afschot richting het hoofdriool', 'Een te gering afschot vermijden waarbij vast materiaal blijft liggen', 'Een leiding zonder enig afschot volledig horizontaal aanleggen', 'Bochten en aftakkingen zo veel mogelijk beperken',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Voldoende en consistent afschot en het beperken van bochten houden de afvoer op gang; een volledig horizontale leiding zonder afschot geeft juist een verhoogd verstoppingsrisico.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.bloom4.mc', toetstermCode: 'C.2.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een monteur wil een waterleidinginstallatie op dichtheid controleren voordat deze in gebruik wordt genomen. Wat is hiervoor de gangbare procedure?',
      options: [
        'Een ingebruiknametest op dichtheid volgens NEN 1006 uitvoeren',
        'Direct de installatie in gebruik nemen zonder enige controle',
        'Alleen visueel controleren of de buizen recht liggen',
        'Wachten tot er een lekkage optreedt en dan pas ingrijpen',
      ],
      correctIndex: 0,
      explanation: 'NEN 1006 (de norm voor drinkwaterinstallaties) schrijft een ingebruiknametest op dichtheid voor, vóórdat een nieuwe installatie in gebruik wordt genomen.',
    },
    {
      id: 'C.2.bloom4.multi', toetstermCode: 'C.2.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een koudwaterleiding is vlak langs een cv-leiding gelegd zonder tussenisolatie, en een deel van het leidingnet heeft een doodlopend stuk. Welke risico\'s ontstaan hierdoor het meest direct?',
      options: [
        'Opwarming van het koude water tot een temperatuur waarbij legionellagroei mogelijk wordt',
        'Stilstaand water in het doodlopende stuk, wat het legionellarisico verder vergroot',
        'Een verlaagde waterdruk in het hele leidingnet', 'Een lagere kans op ketelsteenvorming',
      ],
      correctIndices: [0, 1],
      explanation: 'Opwarming van koud water (door nabijheid van cv-leidingen) en stilstaand water in dode leidingeinden zijn twee klassieke risicofactoren voor legionellagroei.',
    },
    {
      id: 'C.2.bloom4.invul', toetstermCode: 'C.2.3', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: een drukgolf die ontstaat doordat een kraan plotseling wordt dichtgedraaid, wordt een ______ leiding genoemd.',
      acceptableAnswers: ['slaande'],
      explanation: 'Een "slaande leiding" is het bekende klopgeluid door een drukgolf bij het plots sluiten van een kraan; een waterslagdemper kan dit verhelpen.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.bloom4.mc', toetstermCode: 'C.3.3', type: 'mc', bloom: 'Toepassen',
      prompt: 'Bij het keuren van een gasinstallatie wordt een lekverlies vastgesteld dat ruim boven de toegestane norm ligt. Op welke manier wordt zo\'n lekkage vervolgens veilig opgespoord?',
      options: [
        'Met zeepsop op de verbindingen (nooit met een open vlam of aansteker)', 'Met een brandende lucifer langs de leiding', 'Door de installatie meteen weer in gebruik te nemen', 'Door de gasmeter te verwijderen zonder verder onderzoek',
      ],
      correctIndex: 0,
      explanation: 'Lekzoeken gebeurt met zeepsop (opborrelend schuim wijst de lekplek aan); een open vlam is levensgevaarlijk in combinatie met een gaslek.',
    },
    {
      id: 'C.3.bloom4.multi', toetstermCode: 'C.3.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij een gastoestel wordt een gele, wat "roetende" vlam waargenomen in plaats van een blauwe vlam. Welke conclusies zijn hieruit gegrond?',
      options: [
        'Er is sprake van onvolledige verbranding', 'Dit kan wijzen op onvoldoende toevoer van verbrandingslucht', 'Een gele vlam is altijd een teken van optimale verbranding', 'Onvolledige verbranding kan tot verhoogde CO-vorming leiden, wat gevaarlijk is',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Een blauwe vlam duidt op goede verbranding; een gele, roetende vlam wijst op onvolledige verbranding (vaak door te weinig lucht), met een verhoogd risico op gevaarlijk koolmonoxide.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.bloom4.mc', toetstermCode: 'C.4.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een woning krijgt zonnepanelen die gelijkstroom leveren, terwijl huishoudelijke apparaten wisselstroom van 230 V nodig hebben. Welk installatieonderdeel maakt deze omzetting mogelijk?',
      options: ['De omvormer', 'De aardlekschakelaar', 'De hoofdschakelaar', 'De installatieautomaat'],
      correctIndex: 0,
      explanation: 'De omvormer (inverter) zet de gelijkstroom van de zonnepanelen om naar bruikbare 230 V wisselstroom voor het huisnet.',
    },
    {
      id: 'C.4.bloom4.multi', toetstermCode: 'C.4.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning met een 1-fase aansluiting wil overstappen op all-electric verwarmen met een warmtepomp én een laadpaal voor de auto plaatsen. Welke gevolgen zijn hierbij het meest waarschijnlijk?',
      options: [
        'De bestaande aansluitcapaciteit kan ontoereikend blijken voor de extra, gelijktijdige stroomvraag',
        'Een verzwaring naar een 3-fase aansluiting kan nodig zijn',
        'Dit heeft nooit gevolgen voor de bestaande meterkast of aansluiting', 'De netbeheerder speelt hierin geen enkele rol',
      ],
      correctIndices: [0, 1],
      explanation: 'Extra grootverbruikers zoals een warmtepomp en laadpaal vergen vaak meer capaciteit dan de bestaande aansluiting biedt — de netbeheerder is dan nodig voor een verzwaring, vaak naar 3-fase.',
    },
    {
      id: 'C.4.bloom4.invul', toetstermCode: 'C.4.3', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de driefasige elektra-aansluiting met vijf pootjes, gebruikt voor apparaten met een hoger vermogen zoals een elektrisch fornuis, heet een ______-aansluiting.',
      acceptableAnswers: ['perilex'],
      explanation: 'Een perilex-aansluiting levert 400 V krachtstroom voor apparaten die meer vermogen vragen dan een gewoon stopcontact kan leveren.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.bloom4.mc', toetstermCode: 'C.5.2', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een PV-installatie op een plat dak wordt onder een steile hoek opgesteld voor een optimale jaaropbrengst, maar de rijen panelen werpen daardoor slagschaduw op elkaar in de winter. Wat is het meest logische compromis?',
      options: [
        'Een minder steile hellingshoek of grotere onderlinge rijafstand kiezen om schaduwverlies te beperken',
        'De panelen juist nog steiler plaatsen om het probleem te verergeren',
        'Geen enkele aanpassing doen, schaduw heeft geen invloed op de opbrengst',
        'Panelen op het noorden plaatsen om schaduw te vermijden',
      ],
      correctIndex: 0,
      explanation: 'Bij vlakke daken met meerdere paneelrijen is de balans tussen hellingshoek en rijafstand cruciaal om onderlinge slagschaduw (en dus opbrengstverlies) te beperken.',
    },
    {
      id: 'C.5.bloom4.multi', toetstermCode: 'C.5.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke uitspraken over saldering van zonnestroom zijn (voor de gangbare regeling) juist?',
      options: [
        'Zelf opgewekte, aan het net teruggeleverde stroom wordt verrekend met het eigen verbruik',
        'Saldering maakt de terugverdientijd van zonnepanelen doorgaans korter dan zonder saldering',
        'Saldering is een vorm van subsidie die per definitie oneindig blijft bestaan zonder enige aanpassing',
        'Saldering speelt geen rol bij de financiële afweging om zonnepanelen te plaatsen',
      ],
      correctIndices: [0, 1],
      explanation: 'Saldering verrekent teruggeleverde met verbruikte stroom, wat de terugverdientijd verkort; de regeling is echter aan wijzigingen (afbouw) onderhevig, dus niet per definitie blijvend ongewijzigd.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.bloom4.mc', toetstermCode: 'C.6.3', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een woning met vloerverwarming heeft een warmtepomp die is ingesteld op een stooklijn met een relatief lage aanvoertemperatuur. Wat is hiervan het te verwachten voordeel?',
      options: [
        'Een hoger rendement (COP) van de warmtepomp', 'Sneller opwarmen van de ruimte dan bij hoge temperatuur', 'Een hogere piekbelasting op het elektriciteitsnet', 'Minder behoefte aan een correct gedimensioneerde vloerverwarming',
      ],
      correctIndex: 0,
      explanation: 'Warmtepompen werken het efficiëntst (hogere COP) bij een lage aanvoertemperatuur, precies wat lagetemperatuurverwarming zoals vloerverwarming vraagt.',
    },
    {
      id: 'C.6.bloom4.multi', toetstermCode: 'C.6.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning met radiatoren die zijn ontworpen voor hoge temperatuur (bijvoorbeeld 70/50°C) wordt overgezet op een warmtepomp met een lage aanvoertemperatuur. Welke gevolgen zijn het meest waarschijnlijk zonder verdere aanpassing?',
      options: [
        'De bestaande radiatoren leveren onvoldoende warmteafgifte bij de lagere temperatuur', 'Grotere of extra radiatoren kunnen nodig zijn om hetzelfde comfort te behouden', 'De warmteafgifte van radiatoren is volledig onafhankelijk van de aanvoertemperatuur', 'Dit heeft geen enkele invloed op het wooncomfort',
      ],
      correctIndices: [0, 1],
      explanation: 'Radiatoren die voor hoge temperatuur zijn gedimensioneerd, geven bij een lagere aanvoertemperatuur minder warmte af — vaak is opschaling van het radiatoroppervlak nodig bij overstap naar een warmtepomp.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.bloom4.mc', toetstermCode: 'C.7.1', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een kantoorgebouw met veel interne warmtelast (computers, mensen, verlichting) wordt gekozen tussen topkoeling en volledige mechanische koeling. Welke overweging pleit het sterkst voor topkoeling?',
      options: [
        'Topkoeling is zuiniger en volstaat als alleen de piekbelasting op warme dagen een probleem is',
        'Topkoeling biedt exact dezelfde volledige temperatuurregeling als mechanische koeling',
        'Topkoeling is altijd duurder in aanschaf en gebruik dan volledige koeling',
        'Topkoeling vervangt de noodzaak van ventilatie volledig',
      ],
      correctIndex: 0,
      explanation: 'Topkoeling neemt alleen de warmtepiek weg en is daardoor zuiniger dan volledige koeling — een logische keuze als alleen de piekdagen problematisch zijn, niet het hele klimaat.',
    },
    {
      id: 'C.7.bloom4.multi', toetstermCode: 'C.7.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voordelen biedt warmteterugwinning (WTW) in een gebalanceerd ventilatiesysteem?',
      options: [
        'Lager energieverbruik voor verwarming doordat warmte uit afgevoerde lucht wordt hergebruikt', 'Minder tochtgevoel doordat toegevoerde lucht voorverwarmd binnenkomt', 'Volledige vervanging van de noodzaak tot verwarmen in de winter', 'Een bijdrage aan een beter energielabel van de woning',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'WTW bespaart stookenergie, vermindert tocht en verbetert het energielabel; het vervangt de verwarming niet volledig, alleen een deel van de benodigde warmte.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.bloom4.mc', toetstermCode: 'C.8.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'In een portiekflat wordt de enige vluchtroute via het trappenhuis mede gebruikt om fietsen en verhuisdozen op te slaan. Welke conclusie is het meest juist?',
      options: [
        'Dit is een direct brandveiligheidsrisico omdat de vluchtroute belemmerd en potentieel brandbaar belast wordt',
        'Dit is toegestaan zolang de brandweer op de hoogte is', 'Vluchtroutes hoeven volgens het Bbl niet vrij te blijven van obstakels', 'Dit is alleen een esthetisch probleem',
      ],
      correctIndex: 0,
      explanation: 'Objecten in een vluchtroute belemmeren de doorgang bij een calamiteit en vormen bovendien brandbare last — het Bbl stelt eisen aan vrije, obstakelvrije vluchtroutes.',
    },
    {
      id: 'C.8.bloom4.multi', toetstermCode: 'C.8.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voorzieningen dragen bij aan een tijdige ontdekking en melding van brand in een woongebouw?',
      options: ['Rookmelders in elke verblijfsruimte en op vluchtroutes', 'Een brandmeldinstallatie met doormelding (OMS) naar de brandweer bij grotere gebouwen', 'Het volledig ontbreken van compartimentering', 'Regelmatige controle en vervanging van rookmelderbatterijen'],
      correctIndices: [0, 1, 3],
      explanation: 'Rookmelders, een doormeldsysteem en batterijonderhoud dragen bij aan tijdige detectie/melding; het ontbreken van compartimentering vergroot juist het risico op snelle branduitbreiding.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.bloom4.mc', toetstermCode: 'C.9.3', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een woning met ventilatiesysteem C (natuurlijke toevoer, mechanische afvoer) heeft klachten over tocht bij de gevelroosters op koude dagen. Welk alternatief systeem vermindert dit tochtgevoel het meest, zonder de ventilatiecapaciteit op te geven?',
      options: [
        'Systeem D (gebalanceerde ventilatie), waarbij toegevoerde lucht via WTW voorverwarmd binnenkomt',
        'Systeem A (volledig natuurlijk), wat de tocht alleen maar vergroot',
        'Het dichtplakken van alle ventilatieroosters zonder alternatief', 'Een systeem zonder enige luchttoevoer',
      ],
      correctIndex: 0,
      explanation: 'Systeem D voert lucht mechanisch en voorverwarmd (via WTW) aan, wat het koude-tochtgevoel van natuurlijke gevelroosters wegneemt terwijl de ventilatiecapaciteit behouden blijft.',
    },
    {
      id: 'C.9.bloom4.multi', toetstermCode: 'C.9.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een badkamer zonder raam heeft alleen een handmatig te bedienen mechanisch afzuigpunt, dat bewoners zelden inschakelen. Welke gevolgen zijn hierdoor het meest waarschijnlijk?',
      options: [
        'Verhoogd risico op vochtophoping en schimmelvorming', 'Een hogere kans op houtrot bij eventuele houten onderdelen in de ruimte', 'Een verbeterde luchtkwaliteit ondanks het zelden gebruikte afzuigpunt', 'Minder condensvorming op koude oppervlakken dan bij continue afzuiging',
      ],
      correctIndices: [0, 1],
      explanation: 'Een raamloze badkamer met zelden gebruikte afzuiging houdt vocht vast, wat schimmel en (bij hout) rot in de hand werkt — continue of automatische afzuiging zou dit juist beperken.',
    },
  ],
  'C.10': [
    {
      id: 'C.10.bloom4.mc', toetstermCode: 'C.10.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een woningeigenaar wil zijn woning zowel inbraakveiliger maken als voorbereiden op toekomstige elektrische laadbehoefte. Welke combinatie van maatregelen past hier het beste bij?',
      options: [
        'PKVW-gecertificeerd hang- en sluitwerk toepassen én de meterkast/aansluiting laten beoordelen op geschiktheid voor een laadpaal',
        'Alleen een nieuwe voordeur plaatsen zonder verdere maatregelen',
        'Uitsluitend een laadpaal plaatsen zonder naar de beveiliging te kijken',
        'Deze twee wensen hebben geen enkel raakvlak met elkaar',
      ],
      correctIndex: 0,
      explanation: 'Inbraakpreventie (PKVW-hang- en sluitwerk) en elektrische capaciteit (aansluiting/meterkast) zijn twee aparte, maar beide relevante aandachtspunten die goed gecombineerd kunnen worden aangepakt.',
    },
    {
      id: 'C.10.bloom4.multi', toetstermCode: 'C.10.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een domoticasysteem koppelt rookmelders, verlichting en zonwering aan één app. Welke voordelen en aandachtspunten zijn hierbij het meest relevant?',
      options: [
        'Voordeel: snellere melding en gecoördineerde respons bij een calamiteit (bijvoorbeeld verlichting die aangaat bij brandmelding)',
        'Aandachtspunt: afhankelijkheid van een werkende internet-/netwerkverbinding',
        'Domotica maakt reguliere veiligheidsvoorzieningen (zoals rookmelders) overbodig',
        'Domotica heeft geen enkele relatie met woonveiligheid',
      ],
      correctIndices: [0, 1],
      explanation: 'Domotica kan voorzieningen slim combineren voor een snellere respons, maar introduceert ook een afhankelijkheid van connectiviteit; het vervangt basisvoorzieningen als rookmelders niet, maar vult ze aan.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.bloom4.mc', toetstermCode: 'C.11.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Voor een balkondeur op de begane grond, dicht bij de vloer, schrijft het Bbl om veiligheidsredenen een specifiek glastype voor. Welk glastype is dit?',
      options: ['Veiligheidsglas (bijvoorbeeld gehard of gelaagd glas)', 'Enkel floatglas zonder verdere behandeling', 'Draadglas zonder veiligheidscertificering', 'Standaard HR++-glas zonder aanvullende veiligheidseis'],
      correctIndex: 0,
      explanation: 'Beglazing dicht bij de vloer in loopdeuren moet veiligheidsglas zijn (gehard of gelaagd), om verwondingsrisico bij eventuele breuk te beperken.',
    },
    {
      id: 'C.11.bloom4.multi', toetstermCode: 'C.11.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning met veel grote, zuidgerichte ramen heeft HR++-glas, maar de bewoners klagen zowel over warmteverlies in de winter als oververhitting in de zomer. Welke conclusies zijn hier het meest gegrond?',
      options: [
        'HR++ isoleert relatief goed tegen warmteverlies, dus het wintercomfort-probleem ligt mogelijk elders (bijvoorbeeld kieren of een matige installatie)',
        'HR++-glas is niet primair ontworpen om zonnewarmte te weren, dus zonwerend glas of buitenzonwering kan de zomeroverlast beter aanpakken',
        'Eén glassoort kan nooit tegelijk aan isolatie- én zonwerende eisen voldoen, zonwering is dus zinloos',
        'Het probleem ligt uitsluitend aan de oriëntatie en is met geen enkele maatregel te verhelpen',
      ],
      correctIndices: [0, 1],
      explanation: 'HR++ isoleert primair tegen warmteverlies (lage U-waarde), maar heeft geen sterk zonwerend effect (ZTA); voor het zomerprobleem is aanvullende zonwering of zonwerend glas effectiever.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.bloom4.mc', toetstermCode: 'C.12.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Voor de voordeur van een luxere, vrijstaande woning wordt een hoger inbraakwerendheidsniveau gewenst dan bij een gemiddeld rijtjeshuis. Welke SKG-klasse past hier het beste bij?',
      options: ['★★ (twee sterren)', '★ (één ster)', 'Geen enkele SKG-klasse is hierop van toepassing', 'SKG-klasse A alleen'],
      correctIndex: 0,
      explanation: 'SKG ★★ (5 minuten inbraaktijd) is bedoeld voor zwaardere, luxere woningen; ★ (3 minuten) past bij een standaard rijtjeshuis, ★★★ bij bijvoorbeeld bungalows/kantoren.',
    },
    {
      id: 'C.12.bloom4.multi', toetstermCode: 'C.12.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een VvE overweegt voor het hoofdtoegangsslot van een flatgebouw tussen een centraalsluiting en een seriesluiting. Welke uitspraken zijn juist?',
      options: [
        'Bij centraalsluiting kunnen veel verschillende bewonerssleutels hetzelfde hoofdslot openen', 'Bij seriesluiting opent één generale hoofdsleutel alle sloten in het gebouw', 'Seriesluiting is uitsluitend bedoeld voor vluchtdeuren', 'Bij centraalsluiting heeft elke bewoner nog steeds een eigen sleutel voor de eigen woning',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Centraalsluiting: veel sleutels openen één (hoofd)slot, met eigen woningsleutels ernaast; seriesluiting: één hoofdsleutel opent alle sloten. Seriesluiting is niet specifiek voor vluchtdeuren — dat is paniek­sluiting.',
    },
    {
      id: 'C.12.bloom4.invul', toetstermCode: 'C.12.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het slot van een vluchtdeur dat alleen aan de binnenzijde met een simpele handeling te openen is, wordt een ______sluiting genoemd.',
      acceptableAnswers: ['paniek', 'panieksluiting'],
      explanation: 'Panieksluiting (vaak met een P op de plattegrond aangeduid) zorgt dat een vluchtdeur bij nood snel en zonder sleutel geopend kan worden.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.bloom4.mc', toetstermCode: 'C.13.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Op een gestuukte wand ontstaan haarscheurtjes precies langs de naden tussen twee ondergrondmaterialen (bijvoorbeeld gipsplaat naast metselwerk). Wat is hier de meest waarschijnlijke oorzaak?',
      options: [
        'Verschillende krimp-/zetgedrag van de twee ondergronden zonder voldoende wapeningsband op de naad',
        'Een te dikke stuclaag over de hele wand', 'De kleur van het stucwerk', 'Een probleem met de fundering van het hele gebouw',
      ],
      correctIndex: 0,
      explanation: 'Scheuren exact op de overgang tussen twee verschillende ondergronden wijzen op ongelijk zet-/krimpgedrag; een wapeningsband op die naad voorkomt dit doorgaans.',
    },
    {
      id: 'C.13.bloom4.multi', toetstermCode: 'C.13.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Voor een badkamer met vloerverwarming wordt tegelwerk overwogen. Welke uitvoeringseisen zijn hierbij het meest relevant?',
      options: [
        'Een elastische (flexibele) tegellijm gebruiken die de uitzetting van de vloer kan opvangen', 'Voldoende droog- en opwarmtijd aanhouden vóór intensief gebruik', 'Een volledig rigide, niet-flexibele lijm toepassen ongeacht de vloerverwarming', 'Dilatatievoegen in het tegelwerk doorzetten waar nodig',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Elastische lijm, voldoende opwarmtijd en doorgezette dilatatievoegen zijn nodig om loslating door thermische uitzetting te voorkomen; een rigide lijm zonder rekening te houden met vloerverwarming vergroot juist het risico op loslaten.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.bloom4.mc', toetstermCode: 'C.14.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een druk belopen vloer in een winkelpassage wordt gekozen tussen een zachte, poreuze zandsteensoort en een dichte, harde graniet. Welke keuze is het meest passend?',
      options: [
        'Graniet, vanwege de hoge slijtvastheid en lage poreusheid bij intensief gebruik',
        'Zandsteen, omdat poreuze steen altijd beter bestand is tegen slijtage',
        'Beide zijn functioneel volledig gelijkwaardig voor deze toepassing',
        'Geen van beide is geschikt als vloerbedekking',
      ],
      correctIndex: 0,
      explanation: 'Graniet (een hard, dicht stollingsgesteente) is veel slijtvaster en minder poreus dan de meeste zandsteensoorten — beter geschikt voor intensief belopen oppervlakken.',
    },
    {
      id: 'C.14.bloom4.multi', toetstermCode: 'C.14.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke gesteenten behoren tot de metamorfe gesteenten?',
      options: ['Marmer', 'Leisteen', 'Graniet', 'Zandsteen'],
      correctIndices: [0, 1],
      explanation: 'Marmer (uit kalksteen) en leisteen (uit klei/leem) ontstaan door metamorfose van bestaand gesteente; graniet is een stollingsgesteente en zandsteen een afzettingsgesteente.',
    },
  ],
}
