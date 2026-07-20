import type { Question } from '../types/content'

/**
 * Bloom-examen — "fouten"-ronde, sectie C. Origineel geschreven oefenvragen
 * over de ONDERWERPEN waarop bij het echte SVMNIVO-oefenexamen fouten
 * werden gemaakt (riolering-onderdelen, legionella/warmtapwater,
 * zonnepanelen Watt-piek, elektrische vloerverwarming, ventilatiesysteem
 * primair/secundair). Geen letterlijke overname van de officiële
 * examenvraag, opties of feedbacktekst — alleen het onderliggende concept
 * is gebruikt om nieuwe vragen te schrijven.
 */
export const bloomExamenFoutenC: Record<string, Question[]> = {
  'C.1': [
    {
      id: 'C.1.fix.mc', toetstermCode: 'C.1.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Welk rioleringsonderdeel ligt BUITEN het gebouw en vormt de verbinding tussen het huisaansluitpunt en het hoofdriool in de straat?',
      options: ['De terreinleiding', 'De standleiding', 'De sifon', 'De ventilatiepijp'],
      correctIndex: 0,
      explanation: 'De terreinleiding ligt buiten het gebouw en verbindt de riolering van het perceel met het hoofdriool; standleiding en sifon horen bij de binnenriolering.',
    },
    {
      id: 'C.1.fix.multi', toetstermCode: 'C.1.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke onderdelen horen tot de BUITENriolering van een woning (dus buiten de gevel, in de grond op het perceel)?',
      options: ['Terreinleiding', 'Ontstoppingsstuk in de grond bij de erfgrens', 'Sifon onder een wastafel', 'Standleiding in de spouw van de woning'],
      correctIndices: [0, 1],
      explanation: 'Terreinleiding en een ontstoppingsstuk in de grond horen tot de buitenriolering; sifon en standleiding bevinden zich binnen de gebouwschil en horen tot de binnenriolering.',
    },
    {
      id: 'C.1.fix.invul', toetstermCode: 'C.1.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het onderdeel waarmee een verstopping in de buitenriolering vanaf maaiveld kan worden opgespoord en verholpen, heet een ______stuk.',
      acceptableAnswers: ['ontstoppings', 'ontstoppingsstuk'],
      explanation: 'Een ontstoppingsstuk geeft toegang tot de rioolleiding zonder te hoeven graven, zodat verstoppingen verholpen kunnen worden.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.fix.mc', toetstermCode: 'C.2.4', type: 'mc', bloom: 'Toepassen',
      prompt: 'Waarom wordt warm tapwater in een opslagvat (boiler) doorgaans op minimaal 60°C gehouden?',
      options: [
        'Om de groei van de legionellabacterie tegen te gaan',
        'Om energie te besparen ten opzichte van een lagere temperatuur',
        'Om te voorkomen dat de leidingen gaan bevriezen',
        'Omdat sanitaire kranen alleen bij die temperatuur goed functioneren',
      ],
      correctIndex: 0,
      explanation: 'Onder de 60°C kan de legionellabacterie zich in stilstaand warm water ontwikkelen — vandaar de norm om opslagwater op minimaal die temperatuur te houden, ook al kost dat juist méér energie dan een lagere temperatuur.',
    },
    {
      id: 'C.2.fix.invul', toetstermCode: 'C.2.4', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de bacterie die zich in lauw, stilstaand warm water kan ontwikkelen en waartegen een minimale opslagtemperatuur van 60°C beschermt, heet de ______bacterie.',
      acceptableAnswers: ['legionella', 'legionellabacterie'],
      explanation: 'De legionellabacterie gedijt bij temperaturen tussen ongeveer 20°C en 50°C; bij 60°C en hoger wordt de groei geremd.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.fix.mc', toetstermCode: 'C.5.3', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat drukt de eenheid "Watt-piek" (Wp) van een zonnepaneel precies uit?',
      options: [
        'Het maximale elektrische vermogen dat het paneel onder gestandaardiseerde, optimale omstandigheden kan leveren',
        'De spanning die het paneel op elk moment levert',
        'De werkelijk behaalde jaaropbrengst van het paneel',
        'De temperatuur waarbij het paneel het beste presteert',
      ],
      correctIndex: 0,
      explanation: 'Watt-piek is een gestandaardiseerde maateenheid voor het maximale vermogen onder ideale testomstandigheden — niet de spanning, niet de werkelijke opbrengst (die weersafhankelijk is) en niet een temperatuur.',
    },
    {
      id: 'C.5.fix.multi', toetstermCode: 'C.5.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke uitspraken over Watt-piek (Wp) bij zonnepanelen zijn juist?',
      options: [
        'Het is een vermogensmaat, geen spanningsmaat',
        'De werkelijke opbrengst in de praktijk wijkt vaak af van de Watt-piek-waarde, door weer en oriëntatie',
        'Watt-piek verandert dagelijks mee met het actuele weer',
        'Watt-piek wordt gemeten onder gestandaardiseerde testomstandigheden, niet onder de actuele weersomstandigheden',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Watt-piek is een vaste, gestandaardiseerde vermogenswaarde van het paneel zelf; de werkelijke opbrengst varieert wél met het weer, maar de Watt-piek-waarde zelf verandert niet dagelijks.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.fix.mc', toetstermCode: 'C.6.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Wat is een reëel voordeel van directe elektrische vloerverwarming ten opzichte van verwarming via een transportmedium zoals water?',
      options: [
        'Er zijn geen leidingen of kanalen nodig om warmte van een centrale bron naar de ruimte te transporteren',
        'De energiekosten zijn structureel lager dan bij een centraal systeem',
        'Het is efficiënter dan een centraal systeem bij het verwarmen van grote ruimtes',
        'Het systeem heeft nooit onderhoud nodig',
      ],
      correctIndex: 0,
      explanation: 'Directe elektrische verwarming wekt de warmte lokaal op, dus is er geen leiding-/kanaalnetwerk nodig; in energiekosten en efficiëntie bij grote ruimtes is een centraal systeem met water of lucht juist vaak voordeliger.',
    },
    {
      id: 'C.6.fix.multi', toetstermCode: 'C.6.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke uitspraken over directe elektrische vloerverwarming (zonder water-/luchtcircuit) zijn juist?',
      options: [
        'De ruimte is er doorgaans sneller mee op temperatuur dan met een systeem dat eerst een heel watercircuit moet opwarmen',
        'Er is geen leidingnetwerk naar een centrale warmtebron nodig',
        'Het is in de regel energiezuiniger dan een centraal systeem bij grote ruimtes',
        'Het is doorgaans efficiënter in kleine, geïsoleerde ruimtes dan in grote ruimtes',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Direct elektrisch verwarmen is snel op temperatuur en leidingloos, en leent zich beter voor kleine ruimtes; voor grote ruimtes is een centraal systeem met water of lucht doorgaans juist energiezuiniger.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.fix.mc', toetstermCode: 'C.9.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een woning heeft een mechanisch aangedreven ventilatie-unit die de hoofdafvoer verzorgt, aangevuld met kleine roosters boven de kozijnen die extra buitenlucht binnenlaten. Hoe worden deze twee onderdelen ten opzichte van elkaar het beste omschreven?',
      options: [
        'De mechanische unit is het primaire systeem, de kozijnroosters zijn een secundaire, aanvullende luchttoevoer',
        'De kozijnroosters zijn het primaire systeem en de mechanische unit is overbodig',
        'Beide zijn even primair en vervangen elkaar volledig',
        'De kozijnroosters verzorgen de hoofdafvoer van de ventilatie',
      ],
      correctIndex: 0,
      explanation: 'Het mechanisch aangedreven systeem regelt de hoofdventilatie (primair); kleine, natuurlijke roosters boven kozijnen zijn een aanvullende, secundaire luchttoevoer die het hoofdsysteem ondersteunt.',
    },
    {
      id: 'C.9.fix.invul', toetstermCode: 'C.9.1', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: bij een ventilatiesysteem dat zowel mechanische onderdelen als kleine, natuurlijke kozijnroosters combineert, wordt de mechanische unit meestal aangeduid als het ______ systeem, en de kozijnroosters als aanvullend/secundair.',
      acceptableAnswers: ['primaire', 'primair'],
      explanation: 'Het primaire systeem draagt de hoofdlast van de ventilatie; secundaire voorzieningen (zoals kleine roosters) vullen dit alleen aan.',
    },
  ],
}
