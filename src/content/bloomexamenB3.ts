import type { Question } from '../types/content'

/**
 * Bloom-examen — derde golf, sectie B. Zwaarder qua niveau dan ronde 1 en 2:
 * vooral Analyseren/Evalueren/Synthese, met casusvragen. Nieuwe, niet
 * overlappende feiten t.o.v. bloomexamenB.ts en bloomexamenB2.ts. Origineel
 * materiaal.
 */
export const bloomExamenB3: Record<string, Question[]> = {
  'B.1': [
    {
      id: 'B.1.bloom3.mc', toetstermCode: 'B.1.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een monumentaal pand wordt inwendig grondig gerenoveerd naar moderne maatstaven, maar de karakteristieke gevel blijft ongewijzigd. Welke Vitruvius-kwaliteit is hier het meest doelbewust "beschermd" gebleven?',
      options: ['Schoonheid (venustas)', 'Stevigheid (firmitas)', 'Bruikbaarheid (utilitas)', 'Duurzaamheid (geen Vitruvius-term)'],
      correctIndex: 0,
      explanation: 'Het behoud van de karakteristieke gevel bij inwendige modernisering is typisch gericht op het behouden van de esthetische/monumentale waarde: schoonheid.',
    },
    {
      id: 'B.1.bloom3.multi', toetstermCode: 'B.1.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een kantoorgebouw wordt getransformeerd tot woningen. Welke aspecten vallen het meest onder "bruikbaarheid" bij deze transformatie?',
      options: [
        'Of de plattegrond logische, leefbare woonruimtes oplevert',
        'Of de bestaande draagconstructie de nieuwe indeling toelaat',
        'Of het aantal en de positie van sanitaire aansluitpunten voor woningen voldoet',
        'Of de gevel er esthetisch aantrekkelijk uitziet',
      ],
      correctIndices: [0, 2],
      explanation: 'Bruikbaarheid gaat over de functionele geschiktheid (indeling, aansluitpunten); de draagconstructie raakt vooral stevigheid, en de esthetiek raakt schoonheid.',
    },
  ],
  'B.2': [
    {
      id: 'B.2.bloom3.mc', toetstermCode: 'B.2.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij een woningopname wordt scheurvorming gevonden op de overgang tussen de fundering en de begane grondvloer. Tot welke twee elementengroepen van de hoofdopbouw heeft dit gebrek het meest direct betrekking?',
      options: ['Fundering en draagconstructie', 'Dak en gevel', 'Installaties en afwerking', 'Kelder en dak'],
      correctIndex: 0,
      explanation: 'Scheurvorming op de overgang fundering–vloer wijst op een probleem in of tussen de fundering en de draagconstructie, bijvoorbeeld door zetting.',
    },
    {
      id: 'B.2.bloom3.multi', toetstermCode: 'B.2.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een taxateur wil bij een opname systematisch alle hoofdelementen van een woning nalopen. In welke volgorde doorloopt hij logischerwijs de hoofdopbouw van onder naar boven?',
      options: ['Fundering', 'Draagconstructie (wanden/vloeren)', 'Dak', 'Installaties (los element, niet gebonden aan één laag)'],
      correctIndices: [0, 1, 2],
      explanation: 'De hoofdopbouw van een gebouw volgt van onder naar boven: fundering, draagconstructie, en dan het dak; installaties lopen dwars door alle lagen heen en volgen niet één vaste positie in die volgorde.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.bloom3.mc', toetstermCode: 'B.3.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een houten balk doorbuigt merkbaar in het midden van de overspanning zonder zichtbare breuk. Welke krachtswerking is hier het meest kenmerkend aan het werk?',
      options: ['Buiging', 'Zuivere trek', 'Zuivere druk', 'Afschuiving'],
      correctIndex: 0,
      explanation: 'Doorbuiging in het midden van een overspannen balk is het klassieke gevolg van buiging: de onderzijde van de balk wordt op trek belast, de bovenzijde op druk.',
    },
    {
      id: 'B.3.bloom3.multi', toetstermCode: 'B.3.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke van de volgende belastingen op een gebouw zijn typisch VARIABEL (niet permanent)?',
      options: ['Sneeuwbelasting op het dak', 'Het eigen gewicht van de draagconstructie', 'Windbelasting op de gevel', 'Personenbelasting (levende last) in een kantoorruimte'],
      correctIndices: [0, 2, 3],
      explanation: 'Sneeuw, wind en personenbelasting wisselen in de tijd en zijn dus variabele belastingen; het eigen gewicht van de constructie is juist de klassieke permanente belasting.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.bloom3.mc', toetstermCode: 'B.4.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een woning op een paalfundering in een veengebied vertoont scheve vloeren en klemmende deuren, terwijl de buurwoning op dezelfde straat (met een andere fundering) hier geen last van heeft. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Paalrot of verzakking van de fundering door bijvoorbeeld een wisselende grondwaterstand',
        'Een verkeerd gekozen dakbedekking',
        'Een te hoge isolatiewaarde van de gevel',
        'Een verkeerd type beglazing',
      ],
      correctIndex: 0,
      explanation: 'Scheve vloeren en klemmende deuren bij een paalfundering in veengrond wijzen klassiek op paalrot of verzakking, vaak veroorzaakt door een wisselende grondwaterstand die houten palen laat verrotten.',
    },
    {
      id: 'B.4.bloom3.multi', toetstermCode: 'B.4.2', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een bouwer overweegt tussen een fundering op staal en een paalfundering voor een nieuwbouwwoning op een slappe veenbodem. Welke overwegingen pleiten voor een paalfundering?',
      options: [
        'De draagkrachtige zandlaag ligt op grote diepte',
        'De bovengrond is slap en zakkingsgevoelig',
        'Een fundering op staal is per definitie sterker dan een paalfundering',
        'Palen kunnen de belasting doorgeleiden naar een dieper gelegen, wel draagkrachtige laag',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Bij een diep gelegen draagkrachtige laag en een slappe bovengrond is een paalfundering de logische keuze; een fundering op staal is niet per definitie sterker, dat hangt af van de ondergrond.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.bloom3.mc', toetstermCode: 'B.5.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een gemetselde gevel vertoont fijne, verticale haarscheurtjes verspreid over het hele gevelvlak, vooral bij temperatuurwisselingen. Wat is hiervoor de meest waarschijnlijke verklaring?',
      options: [
        'Thermische werking (uitzetten en krimpen van het metselwerk)',
        'Een verzakte fundering onder het midden van de gevel',
        'Een verkeerd toegepast metselverband',
        'Achterstallig voegwerk uit alleen de onderste lagen',
      ],
      correctIndex: 0,
      explanation: 'Fijne, verspreide haarscheurtjes die samenhangen met temperatuurwisselingen wijzen op thermische werking van het metselwerk, in tegenstelling tot geconcentreerde scheuren die eerder op zetting wijzen.',
    },
    {
      id: 'B.5.bloom3.multi', toetstermCode: 'B.5.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke factoren bepalen mede de sterkte van metselwerk?',
      options: ['De sterkteklasse van de baksteen', 'De sterkteklasse van de mortel', 'Het gekozen metselverband (esthetisch patroon)', 'De kleur van de voeg'],
      correctIndices: [0, 1],
      explanation: 'De sterkte van metselwerk wordt vooral bepaald door de sterkteklassen van steen en mortel; het verband en de voegkleur zijn primair esthetische keuzes.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.bloom3.mc', toetstermCode: 'B.6.2', type: 'mc', bloom: 'Analyseren',
      prompt: 'Op het betonoppervlak van een balkon zijn roestvlekken zichtbaar en op enkele plekken brokkelt het beton af, waarbij de wapening zichtbaar wordt. Wat is hier het meest waarschijnlijk aan de hand?',
      options: [
        'Betonrot: de wapening is gaan roesten (vaak door carbonatatie of chloriden) en de roest heeft het beton doen afspatten',
        'Het beton is nooit uitgehard',
        'Er is te veel wapening toegepast',
        'De betonsterkteklasse was te hoog gekozen',
      ],
      correctIndex: 0,
      explanation: 'Roestvlekken met afbrokkelend beton en zichtbare wapening zijn het klassieke beeld van betonrot: de roestende wapening zet uit en drukt het beton los.',
    },
    {
      id: 'B.6.bloom3.multi', toetstermCode: 'B.6.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voordelen heeft prefab beton ten opzichte van in het werk gestort (in-situ) beton?',
      options: [
        'Betere kwaliteitscontrole omdat de productie onder gecontroleerde fabrieksomstandigheden gebeurt',
        'Kortere bouwtijd op de bouwplaats zelf',
        'Volledig weersonafhankelijke productie',
        'Prefab beton heeft nooit transport of hijswerk nodig',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Prefab beton wordt onder gecontroleerde omstandigheden gemaakt (kwaliteit, weersonafhankelijkheid) en versnelt de bouw op locatie; transport en hijswerk zijn juist wél nodig en een aandachtspunt.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.bloom3.mc', toetstermCode: 'B.7.3', type: 'mc', bloom: 'Evalueren',
      prompt: 'Bij een brand in een kantoorpand met een onbeschermde stalen draagconstructie zakt het dak relatief snel in. Wat verklaart dit gedrag het beste?',
      options: [
        'Staal verliest bij hoge temperaturen snel een groot deel van zijn sterkte en stijfheid',
        'Staal is onbrandbaar en dus per definitie het veiligste materiaal bij brand',
        'Staal zet bij verhitting juist krimpen, wat instorting voorkomt',
        'Staal heeft geen enkele relatie met brandveiligheid',
      ],
      correctIndex: 0,
      explanation: 'Staal is onbrandbaar, maar verliest bij hoge temperaturen snel sterkte en stijfheid — daarom wordt constructiestaal in gebouwen vaak brandwerend bekleed of behandeld.',
    },
    {
      id: 'B.7.bloom3.multi', toetstermCode: 'B.7.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke uitspraken over constructiestaal zijn juist?',
      options: [
        'Staal heeft een hoge sterkte in verhouding tot zijn gewicht',
        'Staal is gevoelig voor corrosie zonder afdoende bescherming',
        'Staal kan zowel op trek als op druk goed presteren',
        'Staal wordt in de bouw uitsluitend gebruikt voor kozijnen',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Staal combineert een hoge sterkte/gewicht-verhouding met goede trek- én drukeigenschappen, maar vraagt bescherming tegen corrosie; het wordt breed toegepast, niet alleen in kozijnen.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.bloom3.mc', toetstermCode: 'B.8.2', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een koperen dakgoot vertoont na jaren een groenige verkleuring. Wat is hiervoor de meest waarschijnlijke verklaring?',
      options: [
        'Patinavorming: een beschermende oxidelaag die op koper ontstaat door weersinvloeden',
        'Roestvorming, zoals bij staal',
        'Een teken dat het koper op korte termijn zal doorroesten',
        'Schimmelgroei op het metaaloppervlak',
      ],
      correctIndex: 0,
      explanation: 'De bekende groene laag op koper is patina — een beschermende oxidelaag, geen teken van achteruitgang zoals roest bij staal.',
    },
    {
      id: 'B.8.bloom3.multi', toetstermCode: 'B.8.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke non-ferro metalen worden in de bouw vaak toegepast voor dakbedekking of gootwerk?',
      options: ['Zink', 'Koper', 'Lood', 'Constructiestaal'],
      correctIndices: [0, 1, 2],
      explanation: 'Zink, koper en lood zijn klassieke non-ferro metalen voor dakbedekking/gootwerk; constructiestaal is een ferrometaal en wordt hier normaliter niet voor gebruikt.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.bloom3.mc', toetstermCode: 'B.9.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'In een vochtige kruipruimte wordt op de houten balklaag een wit, watten-achtig schimmelweefsel gevonden, met een kenmerkende paddenstoelvormige uitgroei. Waar wijst dit het sterkst op?',
      options: ['Aantasting door de (echte) huiszwam', 'Gewone houtworm', 'Blauwverkleuring van het hout (esthetisch, niet aantastend)', 'Normale houtnerf'],
      correctIndex: 0,
      explanation: 'Wit, watten-achtig schimmelweefsel met paddenstoelvorming is kenmerkend voor de huiszwam, een houtaantastende schimmel die in vochtige, slecht geventileerde ruimtes gedijt.',
    },
    {
      id: 'B.9.bloom3.multi', toetstermCode: 'B.9.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke eigenschappen gelden doorgaans voor naaldhout ten opzichte van loofhout?',
      options: ['Sneller groeiend', 'Meestal minder duurzaam (van nature) zonder verduurzaming', 'Doorgaans lichter van gewicht', 'Altijd duurder dan loofhout'],
      correctIndices: [0, 1, 2],
      explanation: 'Naaldhout groeit over het algemeen sneller, is lichter en van nature vaak minder duurzaam dan de meeste loofhoutsoorten; de prijsverhouding hangt af van de specifieke soort, dus "altijd duurder" klopt niet.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.bloom3.mc', toetstermCode: 'B.10.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij een houten kozijn is de verf aan de onderzijde van de raamdorpel aan het bladderen en voelt het hout daar zacht aan. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Vochtindringing en beginnend houtrot, vaak doordat water zich daar verzamelt en het hout niet snel genoeg droogt',
        'Normale houtnerf, geen gebrek',
        'Een te dikke verflaag zonder onderliggend probleem',
        'UV-verkleuring zonder vochtschade',
      ],
      correctIndex: 0,
      explanation: 'Bladderende verf gecombineerd met zacht aanvoelend hout aan de onderzijde van een dorpel is een klassiek signaal van vochtindringing en beginnende houtrot.',
    },
    {
      id: 'B.10.bloom3.multi', toetstermCode: 'B.10.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke onderhoudsmaatregelen verlengen de levensduur van een houten kozijn het meest effectief?',
      options: [
        'Regelmatig herschilderen/beitsen om het hout te beschermen',
        'Zorgen voor goede waterafvoer (afschot) bij dorpels',
        'Het kozijn nooit meer schilderen na plaatsing',
        'Kieren en beschadigingen tijdig herstellen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Periodiek onderhoud, goede waterafvoer en tijdig herstel van beschadigingen beschermen het hout tegen vocht; nooit meer schilderen versnelt juist de aantasting.',
    },
  ],
  'B.11': [
    {
      id: 'B.11.bloom3.mc', toetstermCode: 'B.11.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een opdrachtgever kiest voor kunststof kozijnen vanwege lage onderhoudsbehoefte. Welke overweging is hierbij het meest terecht?',
      options: [
        'Kunststof kozijnen hoeven inderdaad niet geschilderd te worden, maar zijn minder makkelijk te repareren bij lokale schade dan hout',
        'Kunststof kozijnen roesten net als stalen kozijnen',
        'Kunststof kozijnen hebben altijd een slechtere isolatiewaarde dan hout',
        'Kunststof kozijnen kunnen niet in kleur worden uitgevoerd',
      ],
      correctIndex: 0,
      explanation: 'Kunststof kozijnen zijn onderhoudsarm (geen schilderwerk), maar lokale schade is lastiger te herstellen dan bij hout, waar je een stuk kunt bijwerken of vervangen.',
    },
    {
      id: 'B.11.bloom3.multi', toetstermCode: 'B.11.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke uitspraken over aluminium kozijnen zijn juist?',
      options: [
        'Aluminium kozijnen hebben van zichzelf een relatief hoge warmtegeleiding, waardoor een thermische onderbreking nodig is voor goede isolatie',
        'Aluminium kozijnen zijn licht van gewicht in verhouding tot hun sterkte',
        'Aluminium kozijnen roesten net als staal',
        'Aluminium kozijnen worden vaak toegepast bij grote glaspuien vanwege de slanke profielen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Aluminium geleidt warmte snel (vandaar de thermische onderbreking), is licht en sterk, en leent zich door slanke profielen goed voor grote puien; het roest niet zoals staal, maar kan wel oxideren/corroderen op een andere manier.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.bloom3.mc', toetstermCode: 'B.12.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'In een kruipruimte met onvoldoende ventilatieopeningen wordt een hoge relatieve luchtvochtigheid en een muffe geur gemeten. Welk risico hangt hier het meest direct mee samen?',
      options: [
        'Aantasting van de houten vloerbalken door vocht en schimmel/zwam',
        'Verminderde daglichttoetreding in de woning',
        'Een te hoge geluidsisolatie tussen verdiepingen',
        'Verkleuring van het buitenschilderwerk',
      ],
      correctIndex: 0,
      explanation: 'Onvoldoende kruipruimteventilatie leidt tot vochtophoping, wat een directe bedreiging vormt voor houten balklagen (schimmel, houtrot, zwam).',
    },
    {
      id: 'B.12.bloom3.multi', toetstermCode: 'B.12.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke vloertypen worden in Nederlandse woningbouw veelvuldig toegepast als begane grondvloer?',
      options: ['Houten balklaag', 'Betonnen systeemvloer (bijvoorbeeld kanaalplaat)', 'Breedplaatvloer', 'Rieten dakbedekking'],
      correctIndices: [0, 1, 2],
      explanation: 'Houten balklagen, systeemvloeren en breedplaatvloeren zijn gangbare begane grondvloertypen; riet is een dakbedekkingsmateriaal, geen vloertype.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.bloom3.mc', toetstermCode: 'B.13.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Op een plat dak met bitumineuze dakbedekking wordt op meerdere plekken plasvorming geconstateerd, ook enkele dagen na regenval. Wat is hier het meest waarschijnlijk aan de hand?',
      options: [
        'Onvoldoende afschot van het dakvlak richting de afvoeren',
        'De dakbedekking is te dik aangebracht',
        'Er is te veel isolatie toegepast onder de dakbedekking',
        'De dakrand is te hoog uitgevoerd',
      ],
      correctIndex: 0,
      explanation: 'Blijvende plasvorming op een plat dak wijst meestal op onvoldoende afschot: het water kan niet goed naar de afvoerpunten stromen.',
    },
    {
      id: 'B.13.bloom3.multi', toetstermCode: 'B.13.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voordelen heeft EPDM als platte-dakbedekking ten opzichte van bitumen?',
      options: [
        'Langere levensduur bij correcte toepassing',
        'Minder gevoelig voor UV-veroudering',
        'Kan in grotere banen zonder veel naden worden aangebracht',
        'Is per definitie goedkoper in aanschaf dan bitumen',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'EPDM staat bekend om een lange levensduur, goede UV-bestendigheid en de mogelijkheid om in grote, naadarme banen te werken; de prijsverhouding met bitumen hangt af van project en markt.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.bloom3.mc', toetstermCode: 'B.14.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een trap heeft een optrede van 18 cm en een aantrede van 27 cm. Volgens de vuistregel (2 × optrede + aantrede ≈ 63 cm) — is dit een comfortabele trapverhouding?',
      options: [
        'Ja, 2×18+27 = 63 cm, precies binnen de comfortabele vuistregel',
        'Nee, dit is veel te steil',
        'Nee, dit is veel te flauw',
        'De vuistregel is hier niet op toe te passen',
      ],
      correctIndex: 0,
      explanation: '2 × 18 + 27 = 63 cm — dit valt precies binnen de gangbare vuistregel voor een comfortabele, veilige trap.',
    },
    {
      id: 'B.14.bloom3.multi', toetstermCode: 'B.14.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke uitspraken over liften in woongebouwen zijn juist?',
      options: [
        'Een hydraulische lift heeft doorgaans geen (hoge) machinekamer boven de schacht nodig',
        'Een tractielift (kabellift) werkt met een elektromotor die kabels over een katrol beweegt',
        'Liften vallen nooit onder enige keuringsplicht',
        'Bij gebouwen boven een bepaalde hoogte is een lift vanuit het Bbl vaak verplicht voor toegankelijkheid',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Hydraulische liften werken zonder hoge machinekamer, tractieliften gebruiken kabels over een katrolsysteem, en het Bbl stelt eisen aan toegankelijkheid (vaak inclusief lift) vanaf een bepaalde bouwhoogte; liften zijn wél keuringsplichtig.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.bloom3.mc', toetstermCode: 'B.15.2', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een kunststof onderdeel wordt bij verhitting zacht en vervormbaar, en kan daarna weer worden afgekoeld tot een nieuwe, vaste vorm. Tot welke kunststofgroep behoort dit materiaal?',
      options: ['Thermoplast', 'Thermoharder', 'Elastomeer zonder vormgeheugen', 'Composiet zonder kunststofmatrix'],
      correctIndex: 0,
      explanation: 'Het kenmerk van een thermoplast is dat het bij verhitting zacht/vervormbaar wordt en na afkoeling weer uithardt in een nieuwe vorm — een thermoharder kan dit niet.',
    },
    {
      id: 'B.15.bloom3.multi', toetstermCode: 'B.15.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Waar worden kunststoffen in de bouw veelvuldig voor toegepast?',
      options: ['Leidingwerk (bijvoorbeeld pvc-afvoerbuizen)', 'Kozijnprofielen', 'Dakbedekking (bijvoorbeeld EPDM of pvc-folie)', 'Constructieve draagbalken in zware skeletbouw'],
      correctIndices: [0, 1, 2],
      explanation: 'Kunststoffen worden veel toegepast in leidingwerk, kozijnen en dakbedekking; voor zware constructieve draagbalken worden ze in de regel niet gebruikt.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.bloom3.mc', toetstermCode: 'B.16.3', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een vochtige kruipruimte wordt gezocht naar een isolatiemateriaal dat vochtongevoelig is en niet snel water opneemt. Welke keuze past hier het beste bij?',
      options: [
        'PIR/PUR-platen (gesloten celstructuur, weinig vochtopname)',
        'Minerale wol zonder enige bescherming',
        'Loszittend cellulose-isolatie zonder folie',
        'Open-cel isolatiedeken zonder waterkerende laag',
      ],
      correctIndex: 0,
      explanation: 'PIR/PUR heeft een gesloten celstructuur en neemt daardoor veel minder vocht op dan de andere genoemde opties — belangrijk in een vochtgevoelige omgeving zoals een kruipruimte.',
    },
    {
      id: 'B.16.bloom3.multi', toetstermCode: 'B.16.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke isolatiematerialen zijn minerale (anorganische) isolatiematerialen?',
      options: ['Steenwol', 'Glaswol', 'EPS (geëxpandeerd polystyreen)', 'PUR-schuim'],
      correctIndices: [0, 1],
      explanation: 'Steenwol en glaswol zijn minerale isolatiematerialen; EPS en PUR zijn kunststof (organische) isolatiematerialen.',
    },
  ],
}
