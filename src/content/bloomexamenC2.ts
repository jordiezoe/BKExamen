import type { Question } from '../types/content'

/**
 * Bloom-examen — tweede golf, sectie C. Nieuwe invalshoeken t.o.v.
 * bloomexamenC.ts (geen overlap in specifieke feiten). Origineel materiaal.
 */
export const bloomExamenC2: Record<string, Question[]> = {
  'C.1': [
    {
      id: 'C.1.bloom2.mc', toetstermCode: 'C.1.1', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat is de functie van een wadi in het kader van hemelwaterafvoer?',
      options: ['Regenwater bergen en laten infiltreren in de bodem', 'Vuilwater zuiveren', 'Drinkwater opslaan', 'Gasleidingen beschermen'],
      correctIndex: 0,
      explanation: 'Een wadi is een laagte die hemelwater tijdelijk bergt en laat infiltreren — passend bij een gescheiden rioolstelsel en klimaatadaptatie.',
    },
    {
      id: 'C.1.bloom2.multi', toetstermCode: 'C.1.7', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke van de volgende zijn sanitaire toestellen die op de riolering worden aangesloten?',
      options: ['Closet', 'Wastafel', 'Groepenkast', 'Douchebak'],
      correctIndices: [0, 1, 3],
      explanation: 'Closet, wastafel en douchebak lozen op de riolering; de groepenkast is een elektrisch installatieonderdeel.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.bloom2.mc', toetstermCode: 'C.2.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Waar bevindt zich doorgaans de watermeter van een woning?',
      options: ['In de meterkast, bij de wateraansluiting', 'Op zolder bij de cv-ketel', 'In de kruipruimte onder de badkamer', 'Buiten bij het riool'],
      correctIndex: 0,
      explanation: 'De watermeter zit bij de hoofdafsluiter in de meterkast.',
    },
    {
      id: 'C.2.bloom2.multi', toetstermCode: 'C.2.2', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke toestellen kunnen warm tapwater leveren?',
      options: ['Combiketel', 'Boiler', 'Geiser (doorstroomtoestel)', 'Hydrofoor'],
      correctIndices: [0, 1, 2],
      explanation: 'Combiketel, boiler en geiser leveren warm water; een hydrofoor verhoogt alleen de druk.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.bloom2.mc', toetstermCode: 'C.3.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat is de functie van een toestelkraan bij een gasleiding?',
      options: ['Eén specifiek gastoestel apart kunnen afsluiten', 'De gasdruk van het hele net regelen', 'Het gasverbruik meten', 'De rookgasafvoer regelen'],
      correctIndex: 0,
      explanation: 'Een toestelkraan sluit alleen dat ene toestel af, bijvoorbeeld voor onderhoud, zonder de rest van de woning zonder gas te zetten.',
    },
    {
      id: 'C.3.bloom2.multi', toetstermCode: 'C.3.3', type: 'multi', bloom: 'Begrip',
      prompt: 'Welke voorzieningen horen vaak bij een woning die volledig gasloos (all-electric) is gemaakt?',
      options: ['Warmtepomp', 'Inductiekookplaat', 'Gasgestookte cv-ketel', 'Verzwaarde elektrische aansluiting'],
      correctIndices: [0, 1, 3],
      explanation: 'Warmtepomp, inductiekoken en een verzwaarde aansluiting horen bij all-electric; een gasketel is precies wat wordt vervangen.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.bloom2.mc', toetstermCode: 'C.4.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke norm regelt de veiligheidseisen aan elektrische laagspanningsinstallaties in Nederlandse gebouwen?',
      options: ['NEN 1010', 'NEN 2580', 'NEN 2767', 'NEN 1006'],
      correctIndex: 0,
      explanation: 'NEN 1010 gaat over veilige elektrische laagspanningsinstallaties.',
    },
    {
      id: 'C.4.bloom2.multi', toetstermCode: 'C.4.2', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke onderdelen bevinden zich doorgaans in een groepenkast?',
      options: ['Aardlekschakelaar(s)', 'Installatieautomaten (stoppen)', 'De watermeter', 'De hoofdschakelaar'],
      correctIndices: [0, 1, 3],
      explanation: 'Aardlekschakelaar, installatieautomaten en hoofdschakelaar horen bij de groepenkast; de watermeter is een apart, waterleidinggerelateerd onderdeel.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.bloom2.mc', toetstermCode: 'C.5.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke stroomsoort leveren PV-panelen rechtstreeks?',
      options: ['Gelijkstroom (DC)', 'Wisselstroom (AC)', 'Krachtstroom', 'Statische stroom'],
      correctIndex: 0,
      explanation: 'Panelen leveren gelijkstroom; de omvormer zet dit om naar bruikbare wisselstroom.',
    },
    {
      id: 'C.5.bloom2.multi', toetstermCode: 'C.5.3', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke systemen wekken thermische energie (warmte) op uit zonlicht, in plaats van elektriciteit?',
      options: ['Zonneboiler', 'Zonnecollector', 'PV-paneel', 'Fotovoltaïsch paneel'],
      correctIndices: [0, 1],
      explanation: 'Zonneboiler en zonnecollector verwarmen water; PV/fotovoltaïsche panelen wekken juist elektriciteit op.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.bloom2.mc', toetstermCode: 'C.6.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Hoe heet een verwarmingsvorm die per ruimte apart verwarmt, zoals met een gaskachel?',
      options: ['Lokale verwarming', 'Centrale verwarming', 'Laagtemperatuurverwarming', 'Warmtenetverwarming'],
      correctIndex: 0,
      explanation: 'Lokale verwarming verwarmt per ruimte; centrale verwarming verwarmt het hele huis vanuit één bron.',
    },
    {
      id: 'C.6.bloom2.multi', toetstermCode: 'C.6.8', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke bronnen kan een warmtepomp gebruiken om warmte aan te onttrekken?',
      options: ['Buitenlucht', 'De bodem', 'Grondwater', 'Aardgas'],
      correctIndices: [0, 1, 2],
      explanation: 'Lucht, bodem en grondwater zijn warmtebronnen voor een warmtepomp; aardgas is juist een fossiele brandstof, geen warmtepompbron.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.bloom2.mc', toetstermCode: 'C.7.1', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat is het verschil tussen een gecombineerd klimaatsysteem en een losse radiator?',
      options: ['Het gecombineerde systeem kan via luchtbehandeling verwarmen, koelen en ventileren; een radiator kan alleen verwarmen', 'Een radiator kan ook koelen', 'Er is geen verschil', 'Een gecombineerd systeem kan alleen ventileren'],
      correctIndex: 0,
      explanation: 'Een gecombineerd luchtbehandelingssysteem is functioneel breder dan een losse radiator, die alleen verwarmt.',
    },
    {
      id: 'C.7.bloom2.multi', toetstermCode: 'C.7.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke uitspraken over topkoeling zijn juist?',
      options: ['Het neemt alleen de ergste warmtepiek weg', 'Het is zuiniger dan volledige airconditioning', 'Het conditioneert de ruimte volledig tot een setpoint', 'Het wordt vaak in Nederlandse woningen toegepast'],
      correctIndices: [0, 1, 3],
      explanation: 'Topkoeling neemt alleen de piek weg en is zuiniger dan volledige airco; het conditioneert dus juist NIET volledig.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.bloom2.mc', toetstermCode: 'C.8.4', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat doet een OMS (doormeldsysteem) bij een brandmeldinstallatie?',
      options: ['Automatisch de brandweer alarmeren bij detectie', 'De sprinkler vullen met water', 'De vluchtwegverlichting inschakelen', 'De lift naar de begane grond sturen'],
      correctIndex: 0,
      explanation: 'Een OMS meldt een brandmelding automatisch door aan de brandweer.',
    },
    {
      id: 'C.8.bloom2.multi', toetstermCode: 'C.8.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke typen rookmelders bestaan er?',
      options: ['Optische rookmelder', 'Ionisatiemelder', 'Thermische (warmte)melder', 'Hydrofoormelder'],
      correctIndices: [0, 1, 2],
      explanation: 'Optisch, ionisatie en thermisch zijn bestaande rookmeldertypen; een "hydrofoormelder" bestaat niet.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.bloom2.mc', toetstermCode: 'C.9.4', type: 'mc', bloom: 'Begrip',
      prompt: 'Waarom stelt het Bbl minimum-eisen aan ventilatiecapaciteit in woningen?',
      options: ['Om vocht, CO₂ en verontreinigde lucht af te voeren voor een gezond binnenklimaat', 'Om de woning te verwarmen', 'Om geluid van buiten te weren', 'Om inbraak te voorkomen'],
      correctIndex: 0,
      explanation: 'Voldoende ventilatie is nodig voor een gezond binnenklimaat; te weinig ventilatie geeft vocht- en schimmelproblemen.',
    },
    {
      id: 'C.9.bloom2.multi', toetstermCode: 'C.9.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Bij welke ventilatiesystemen is de toevoer natuurlijk (via roosters, zonder ventilator)?',
      options: ['Systeem A', 'Systeem C', 'Systeem B', 'Systeem D'],
      correctIndices: [0, 1],
      explanation: 'Systeem A (volledig natuurlijk) en systeem C (natuurlijke toevoer) hebben beide een natuurlijke toevoer; B en D hebben mechanische toevoer.',
    },
  ],
  'C.10': [
    {
      id: 'C.10.bloom2.mc', toetstermCode: 'C.10.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk medium biedt de hoogste en meest stabiele internetsnelheid?',
      options: ['Glasvezel', 'Coax/koper', 'WiFi zonder bekabeling', 'Een oude telefoonlijn'],
      correctIndex: 0,
      explanation: 'Glasvezel (data via licht) is sneller en stabieler dan koperen of coaxiale verbindingen.',
    },
    {
      id: 'C.10.bloom2.multi', toetstermCode: 'C.10.3', type: 'multi', bloom: 'Begrip',
      prompt: 'Welke installaties kunnen onderdeel zijn van een domoticasysteem?',
      options: ['Verlichting', 'Zonwering', 'Beveiliging', 'De fundering'],
      correctIndices: [0, 1, 2],
      explanation: 'Domotica automatiseert verlichting, zonwering en beveiliging; de fundering is geen installatie die met domotica wordt aangestuurd.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.bloom2.mc', toetstermCode: 'C.11.2', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat geeft de ZTA-waarde van glas aan?',
      options: ['Hoeveel zonnewarmte er door het glas naar binnen komt', 'De isolatiewaarde tegen warmteverlies', 'De geluidsisolatie van het glas', 'De sterkte van het glas'],
      correctIndex: 0,
      explanation: 'ZTA (zontoetredingsfactor) geeft aan hoeveel zonnewarmte binnenkomt; lager = minder opwarming door de zon.',
    },
    {
      id: 'C.11.bloom2.multi', toetstermCode: 'C.11.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke glassoorten zijn vormen van isolerend (HR-)glas?',
      options: ['HR++', 'HR+++ (triple)', 'Enkel floatglas', 'Draadglas'],
      correctIndices: [0, 1],
      explanation: 'HR++ en HR+++ zijn isolerende meervoudige beglazing; enkel glas en draadglas isoleren nauwelijks.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.bloom2.mc', toetstermCode: 'C.12.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Hoeveel sterren kent het SKG-keurmerk voor inbraakwerendheid maximaal?',
      options: ['3', '1', '5', '10'],
      correctIndex: 0,
      explanation: 'Het SKG-keurmerk kent 1 tot 3 sterren; meer sterren betekent inbraakwerender.',
    },
    {
      id: 'C.12.bloom2.multi', toetstermCode: 'C.12.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke onderdelen dragen bij aan de inbraakwerendheid van een voordeur?',
      options: ['Een meerpuntsluiting', 'Een kerntrekbeveiligde cilinder', 'Een stevige sluitplaat in het kozijn', 'Alleen de kleur van de deur'],
      correctIndices: [0, 1, 2],
      explanation: 'Meerpuntsluiting, kerntrekbeveiliging en sluitplaat dragen bij aan inbraakwerendheid; de kleur van de deur heeft daar geen invloed op.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.bloom2.mc', toetstermCode: 'C.13.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke wandafwerking bestaat uit bedrukte of gestructureerde rollen die op de muur worden gelijmd?',
      options: ['Behang', 'Stucwerk', 'Tegelwerk', 'Schilderwerk'],
      correctIndex: 0,
      explanation: 'Behang wordt als rollen op de wand gelijmd; stucwerk is een gespachtelde/gladde pleisterlaag.',
    },
    {
      id: 'C.13.bloom2.multi', toetstermCode: 'C.13.8', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke van de volgende zijn soorten vloerafwerking?',
      options: ['Parketvloer', 'Pvc-vloer', 'Gietvloer', 'Stucwerk'],
      correctIndices: [0, 1, 2],
      explanation: 'Parket, pvc-vloer en gietvloer zijn vloerafwerkingen; stucwerk is een wandafwerking.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.bloom2.mc', toetstermCode: 'C.14.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Tot welke hoofdgroep behoort zandsteen?',
      options: ['Afzettingsgesteente (sediment)', 'Stollingsgesteente', 'Metamorf gesteente', 'Kunststeen'],
      correctIndex: 0,
      explanation: 'Zandsteen ontstaat door bezinking en verkitting van zandkorrels: afzettingsgesteente.',
    },
    {
      id: 'C.14.bloom2.multi', toetstermCode: 'C.14.2', type: 'multi', bloom: 'Kennis',
      prompt: 'Waarvoor wordt hardsteen (Belgisch hardsteen) vaak toegepast in de bouw?',
      options: ['Vensterbanken', 'Traptreden', 'Dorpels', 'Isolatiemateriaal'],
      correctIndices: [0, 1, 2],
      explanation: 'Hardsteen is slijtvast en wordt gebruikt voor vensterbanken, traptreden en dorpels — niet als isolatiemateriaal.',
    },
  ],
}
