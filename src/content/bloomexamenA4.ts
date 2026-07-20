import type { Question } from '../types/content'

/**
 * Bloom-examen — vierde golf, sectie A. Zeer hoog niveau, sterke nadruk op
 * Toepassen/Analyseren/Evalueren, GEEN open vragen (uitsluitend mc, multi,
 * invul, match). Nieuwe, niet overlappende feiten t.o.v. bloomexamenA.ts,
 * A2.ts en A3.ts. Geïnspireerd op eigen samenvattingen (bouwproces,
 * bestek/tekeningen, regelgeving) — origineel geschreven.
 */
export const bloomExamenA4: Record<string, Question[]> = {
  'A.1': [
    {
      id: 'A.1.bloom4.mc', toetstermCode: 'A.1.3', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een aannemer wordt via een openbare aanbesteding gezocht en de opdrachtgever laat de technische toetsing van het ontwerp voortaan door een onafhankelijke kwaliteitsborger uitvoeren (in plaats van de gemeente). In welke fase van het bouwproces en onder welk regime past dit?',
      options: [
        'De prijsvormingsfase, onder de Wkb (Wet kwaliteitsborging voor het bouwen)',
        'De initiatieffase, onder de Omgevingswet zonder kwaliteitsborger',
        'De exploitatiefase, onder de UAV 2012',
        'De sloopfase, onder het Bbl',
      ],
      correctIndex: 0,
      explanation: 'Het zoeken van een aannemer hoort bij de prijsvormingsfase; de onafhankelijke kwaliteitsborger die toetst aan het Bbl is een kenmerk van de Wkb, die de gemeentelijke technische toets vervangt.',
    },
    {
      id: 'A.1.bloom4.multi', toetstermCode: 'A.1.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een bouwbord bij een project vermeldt naast de opdrachtgever ook een aparte "architect en adviseurs"-rubriek met een constructeur en een installatieadviseur. Welke conclusies zijn hieruit gegrond?',
      options: [
        'Het ontwerp is complex genoeg om specialistische kennis (constructie, installaties) apart te laten adviseren',
        'De opdrachtgever heeft zelf voldoende bouwkundige deskundigheid en heeft daarom geen adviseurs nodig',
        'De architect coördineert het ontwerp, maar laat specifieke deelgebieden over aan gespecialiseerde adviseurs',
        'Een bouwbord vermeldt nooit de betrokken adviseurs',
      ],
      correctIndices: [0, 2],
      explanation: 'Aparte constructeurs en installatieadviseurs wijzen op een bouwteam waarin specialistische kennis is ingehuurd; de architect blijft doorgaans de ontwerpcoördinator. Opdrachtgevers zijn juist meestal niet zelf bouwkundig deskundig, vandaar de adviseurs.',
    },
    {
      id: 'A.1.bloom4.invul', toetstermCode: 'A.1.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het instrument waarmee de aannemer per bouwonderdeel toont in welke volgorde, met welk materieel en in welke tijdsduur het werk wordt uitgevoerd, heet een ______schema.',
      acceptableAnswers: ['balken'],
      explanation: 'Een balkenschema (ook wel bouwplanning) toont per onderdeel de geplande tijdsduur als een horizontale balk, zodat de volgorde en overlap van werkzaamheden in één oogopslag zichtbaar zijn.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.bloom4.mc', toetstermCode: 'A.2.1.4', type: 'mc', bloom: 'Toepassen',
      prompt: 'Op een omgevingsvergunningaanvraag ontbreekt de noordpijl op de situatietekening. Welk gevolg heeft dit het meest waarschijnlijk?',
      options: [
        'De tekening is onvolledig, want een noordpijl is een verplicht onderdeel van een situatietekening',
        'Dit heeft geen enkel gevolg, de noordpijl is puur decoratief',
        'De vergunning wordt automatisch toegekend zonder verdere toetsing',
        'Dit betekent dat het gebouw geen fundering nodig heeft',
      ],
      correctIndex: 0,
      explanation: 'Een situatietekening bij een omgevingsvergunningaanvraag moet onder meer perceelgrenzen, gevelrooilijnen, schaal én de noordpijl bevatten — zonder noordpijl is de tekening onvolledig.',
    },
    {
      id: 'A.2.1.bloom4.multi', toetstermCode: 'A.2.1.6', type: 'multi', bloom: 'Analyseren',
      prompt: 'Op een bouwkostenbegroting wordt een post "CAR-verzekering" en een post "leges omgevingsvergunning" apart van de directe bouwkosten vermeld. Waarom is deze indeling logisch?',
      options: [
        'Beide posten zijn geen kosten van het fysieke bouwwerk zelf, maar bijkomende kosten die met het project samenhangen',
        'De CAR-verzekering en leges horen bij de technische bepalingen van het bestek',
        'Directe bouwkosten omvatten alleen materiaal- en arbeidskosten van het bouwwerk zelf',
        'Deze posten zijn per definitie hoger dan de directe bouwkosten',
      ],
      correctIndices: [0, 2],
      explanation: 'Directe bouwkosten betreffen het fysieke bouwwerk (materiaal, arbeid); verzekeringen en leges zijn bijkomende kosten die er los van staan, ook al horen ze wel bij het totale bouwbudget.',
    },
    {
      id: 'A.2.1.bloom4.invul', toetstermCode: 'A.2.1.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: het openbare register waarin alle onroerende goederen en zakelijke rechten (zoals hypotheken en erfpachtrecht) worden vastgelegd, heet het ______.',
      acceptableAnswers: ['kadaster'],
      explanation: 'Het Kadaster registreert eigendom en andere zakelijke rechten op onroerend goed en is tegen betaling voor iedereen raadpleegbaar.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.bloom4.mc', toetstermCode: 'A.2.2.7', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een opdrachtgever wil bouwen met houtskeletbouw (HSB) vanwege de korte bouwtijd en droge werkwijze, maar de woning komt in een vochtig kustklimaat te staan. Welke overweging is hier het meest terecht?',
      options: [
        'HSB is in Nederland relatief onderhoudsgevoelig in een vochtig klimaat, dus een goede vochtwerende detaillering is extra belangrijk',
        'HSB is volledig ongevoelig voor vocht, dus dit is geen aandachtspunt',
        'HSB kan nooit in Nederland worden toegepast',
        'Vochtgevoeligheid van de constructiemethode is nooit relevant voor de locatiekeuze',
      ],
      correctIndex: 0,
      explanation: 'Houtskeletbouw is licht en snel te bouwen, maar in het vochtige Nederlandse klimaat relatief onderhoudsgevoelig — bij een kustlocatie is zorgvuldige vochtwerende detaillering dus extra belangrijk.',
    },
    {
      id: 'A.2.2.bloom4.multi', toetstermCode: 'A.2.2.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke bouwmethoden lenen zich het best voor een project met een zeer korte bouwtijd op de bouwplaats zelf?',
      options: ['Prefab/elementenbouw', 'Houtskeletbouw (HSB)', 'Traditionele stapelbouw (steen-op-steen)', 'Gietbouw met herbruikbare bekisting'],
      correctIndices: [0, 1],
      explanation: 'Prefab-elementen en HSB worden grotendeels in de fabriek voorbereid en snel gemonteerd; traditionele stapelbouw is juist arbeidsintensief en tijdrovend op de bouwplaats.',
    },
    {
      id: 'A.2.2.bloom4.invul', toetstermCode: 'A.2.2.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: bij een omgevingsvergunningaanvraag wordt de ligging van het bouwperceel getoond op een tekening met kadastrale aanduiding, gevelrooilijnen en noordpijl — dit heet de ______tekening.',
      acceptableAnswers: ['situatie', 'situatietekening'],
      explanation: 'De situatietekening toont het perceel ten opzichte van straat, buren en omgeving, met kadastrale gegevens en oriëntatie.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.bloom4.mc', toetstermCode: 'A.3.3', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een gemeente wil voor een eenvoudig bouwwerk (gevolgklasse 1) de technische toetsing aan het Bbl niet meer zelf uitvoeren. Wie neemt deze toetsende rol sinds de invoering van de Wkb over?',
      options: [
        'Een onafhankelijke kwaliteitsborger',
        'De architect van het project zelf',
        'De aannemer die het werk uitvoert',
        'De makelaar die de woning verkoopt',
      ],
      correctIndex: 0,
      explanation: 'Onder de Wkb toetst een onafhankelijke kwaliteitsborger de technische kwaliteit aan het Bbl, in plaats van de gemeente — vooralsnog alleen voor gevolgklasse 1 (eenvoudige bouwwerken).',
    },
    {
      id: 'A.3.bloom4.multi', toetstermCode: 'A.3.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke wetten zijn sinds 1 januari 2024 gebundeld in de Omgevingswet?',
      options: ['De Wet algemene bepalingen omgevingsrecht (Wabo)', 'De Wet ruimtelijke ordening (Wro)', 'De Waterwet', 'De Wet op de huurtoeslag'],
      correctIndices: [0, 1, 2],
      explanation: 'De Omgevingswet bundelt onder meer de Wabo, Wro en Waterwet (en meer) tot één regeling voor de fysieke leefomgeving; de huurtoeslag valt hier volledig buiten.',
    },
    {
      id: 'A.3.bloom4.invul', toetstermCode: 'A.3.5', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de instantie die namens de gemeente bouwplannen toetst aan het omgevingsplan, het Bbl en de bouwverordening, heet Bouw- en ______toezicht.',
      acceptableAnswers: ['woningtoezicht', 'woning'],
      explanation: 'Bouw- en woningtoezicht (BWT) is de gemeentelijke instantie die bouwplannen toetst en adviseert over vergunningverlening.',
    },
  ],
}
