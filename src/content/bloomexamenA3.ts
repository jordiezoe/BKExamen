import type { Question } from '../types/content'

/**
 * Bloom-examen — derde golf, sectie A. Zwaarder qua niveau dan ronde 1 en 2:
 * vooral Analyseren/Evalueren/Synthese, met casusvragen. Nieuwe, niet
 * overlappende feiten t.o.v. bloomexamenA.ts en bloomexamenA2.ts. Origineel
 * materiaal.
 */
export const bloomExamenA3: Record<string, Question[]> = {
  'A.1': [
    {
      id: 'A.1.bloom3.mc', toetstermCode: 'A.1.2', type: 'mc', bloom: 'Analyseren',
      prompt: 'Tijdens de bouw blijkt de aannemer structureel achter te lopen op de planning door onderbezetting. De opdrachtgever wil weten wie hierop aan te spreken is en wat de consequenties kunnen zijn. Welke conclusie is het meest gegrond?',
      options: [
        'De aannemer is contractueel verantwoordelijk voor de voortgang en kan bij verwijtbare vertraging een contractuele boete (korting) verschuldigd zijn',
        'De architect is altijd verantwoordelijk voor de voortgang van de bouwplaats',
        'Vertraging is nooit voor rekening van de aannemer, omdat de opdrachtgever het risico draagt',
        'Alleen de constructeur kan hierop worden aangesproken',
      ],
      correctIndex: 0,
      explanation: 'De aannemer is verantwoordelijk voor de uitvoering binnen de afgesproken termijn; bij verwijtbare vertraging kan een boetebeding (korting per dag) uit de overeenkomst van toepassing zijn.',
    },
    {
      id: 'A.1.bloom3.multi', toetstermCode: 'A.1.4', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een begroting wijkt na oplevering flink af van de raming: de directe bouwkosten kwamen nagenoeg overeen, maar de eindafrekening is toch veel hoger uitgevallen. Welke verklaringen zijn plausibel?',
      options: [
        'Er is tijdens de bouw veel meerwerk opgedragen dat niet in de oorspronkelijke raming zat',
        'De bijkomende kosten (zoals leges, advieskosten of rente) waren in de eerste raming te optimistisch ingeschat',
        'De grondprijs is na de koopovereenkomst van de bouwgrond alsnog gestegen en doorberekend',
        'Directe bouwkosten zijn per definitie nooit een deel van de eindafrekening',
      ],
      correctIndices: [0, 1],
      explanation: 'Als de directe bouwkosten kloppen maar de eindafrekening toch hoger uitvalt, ligt de verklaring meestal bij meerwerk en/of te laag ingeschatte bijkomende kosten — niet bij de directe kosten zelf.',
    },
    {
      id: 'A.1.bloom3.invul', toetstermCode: 'A.1.1', type: 'invul', bloom: 'Begrip',
      prompt: 'Vul aan: de partij die namens de opdrachtgever toezicht houdt op de bouwplaats en de kwaliteit van de uitvoering bewaakt, wordt de ______voering genoemd.',
      acceptableAnswers: ['directie', 'directievoering'],
      explanation: 'Directievoering is het toezicht namens de opdrachtgever op de uitvoering, vaak belegd bij de architect of een aparte toezichthouder.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.bloom3.mc', toetstermCode: 'A.2.1.5', type: 'mc', bloom: 'Analyseren',
      prompt: 'Op een werktekening staat een maat die afwijkt van dezelfde maat op de bijbehorende bestektekst. Wat is volgens de gangbare praktijk het meest verstandige om te doen?',
      options: [
        'De tegenstrijdigheid melden bij de directie/architect en om verduidelijking vragen voordat je verder werkt',
        'Altijd de tekening als leidend beschouwen zonder te melden',
        'Altijd het bestek als leidend beschouwen zonder te melden',
        'Zelf een gemiddelde van de twee maten aanhouden',
      ],
      correctIndex: 0,
      explanation: 'Bij tegenstrijdigheden tussen bestek en tekening geldt een waarschuwingsplicht: eerst melden en verduidelijking vragen, nooit zelf stilzwijgend kiezen.',
    },
    {
      id: 'A.2.1.bloom3.multi', toetstermCode: 'A.2.1.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Je krijgt alleen een plattegrond op schaal 1:100 te zien, zonder doorsnede. Welke informatie kun je hieruit NIET betrouwbaar afleiden?',
      options: [
        'De verdiepingshoogte van de begane grond',
        'De indeling van de ruimtes op die bouwlaag',
        'De dakhelling en nokhoogte',
        'De globale oppervlakte van de kamers',
      ],
      correctIndices: [0, 2],
      explanation: 'Een plattegrond toont het horizontale beeld (indeling, oppervlaktes); hoogte-informatie zoals verdiepingshoogte, dakhelling en nokhoogte staat op een doorsnede, niet op de plattegrond.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.bloom3.mc', toetstermCode: 'A.2.2.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een woning heeft een strakke, kubistische vorm, een plat dak, grote glasvlakken en witgepleisterde gevels zonder ornament. Tot welke stroming behoort deze woning het meest waarschijnlijk?',
      options: ['Functionalisme / Nieuwe Bouwen', 'Neogotiek', 'Art Nouveau', 'Amsterdamse School'],
      correctIndex: 0,
      explanation: 'Kubistische vormen, platte daken, grote glasvlakken en het ontbreken van ornament zijn kenmerkend voor het Functionalisme (Nieuwe Bouwen), in tegenstelling tot de rijk versierde Amsterdamse School of neogotiek.',
    },
    {
      id: 'A.2.2.bloom3.multi', toetstermCode: 'A.2.2.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een koper twijfelt tussen een woning in een gesloten bouwblok in de stad en een vrijstaande woning in een groene, open verkaveling. Welke afwegingen zijn hier terecht relevant?',
      options: [
        'Een gesloten bouwblok biedt doorgaans meer beschutting tegen wind en geluid van de straat',
        'Een vrijstaande woning biedt meer privacy aan alle gevelzijden',
        'Stedenbouwkundige verkaveling heeft geen enkele invloed op woongenot',
        'Een vrijstaande woning heeft doorgaans meer buitenmuren, wat kan leiden tot meer warmteverlies',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Verkavelingsvorm beïnvloedt beschutting, privacy en het aantal buitenmuren (en dus het warmteverlies) — stedenbouwkundige opzet is dus wel degelijk relevant voor woongenot en energieprestatie.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.bloom3.mc', toetstermCode: 'A.3.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een eigenaar wil een dragende binnenmuur verwijderen om twee kamers samen te voegen. Welke conclusie is het meest juist?',
      options: [
        'Dit raakt de constructieve veiligheid en vergt in de regel een vergunning en een deugdelijke constructieve oplossing (bijvoorbeeld een stalen ligger)',
        'Dit is altijd vergunningsvrij omdat het een interne verbouwing betreft',
        'Dit mag nooit, ongeacht de constructieve oplossing',
        'Dit valt buiten het Bbl omdat het om bestaande bouw gaat',
      ],
      correctIndex: 0,
      explanation: 'Het verwijderen van een dragende wand raakt de constructieve veiligheid van het gebouw en is bouwkundig/vergunningtechnisch een ander verhaal dan het slopen van een niet-dragende wand.',
    },
    {
      id: 'A.3.bloom3.multi', toetstermCode: 'A.3.6', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een aanbouw valt volgens de eigenaar onder de vergunningsvrije regels, maar de gemeente stelt dat een vergunning nodig is. Welke factoren kunnen die conclusie van de gemeente verklaren?',
      options: [
        'De aanbouw overschrijdt de maximale oppervlakte of hoogte die voor vergunningsvrij bouwen geldt',
        'Het perceel ligt in een beschermd stads- of dorpsgezicht met aanvullende regels',
        'Vergunningsvrij bouwen bestaat helemaal niet in Nederland',
        'De gemeente kan nooit een aanvullende eis stellen bovenop de landelijke regels',
      ],
      correctIndices: [0, 1],
      explanation: 'Vergunningsvrij bouwen is aan strikte maten gebonden en kan bovendien worden ingeperkt door lokale regels, zoals bescherming van een stads- of dorpsgezicht — de gemeente kan dan alsnog een vergunning eisen.',
    },
  ],
}
