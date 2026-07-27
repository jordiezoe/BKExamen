import type { Question } from '../types/content'

/**
 * "Zwaarste examen" — sectie B. Zie zwaarExamenA.ts voor de opzet.
 */
export const zwaarExamenB: Record<string, Question[]> = {
  'B.1': [
    {
      id: 'B.1.zwaar1', toetstermCode: 'B.1.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een renovatieplan verhoogt de bruikbaarheid van een woning (grotere, flexibele leefruimte) door een deel van de bestaande draagconstructie te vervangen door een zwaardere stalen ligger, wat de bouwkosten fors verhoogt en het architectonische silhouet van de gevel wijzigt. Welke conclusie over de Vitruvius-triade is hier het meest genuanceerd?',
      options: [
        'De keuze voor meer bruikbaarheid werkt door in zowel stevigheid (nieuwe constructie) als, indirect via kosten en gevelwijziging, in de andere kwaliteiten — de triade functioneert hier als onderling verweven systeem, niet als drie losse keuzes',
        'Bruikbaarheid staat volledig los van stevigheid en schoonheid bij renovaties',
        'Een hogere bruikbaarheid gaat nooit gepaard met een wijziging van de constructie',
        'Kosten zijn nooit een relevante factor binnen de Vitruvius-triade',
      ],
      correctIndex: 0,
      explanation: 'Dit scenario toont expliciet hoe een ingreep gericht op bruikbaarheid, via de constructieve oplossing (stevigheid) en het silhouet (schoonheid), meerdere kwaliteiten tegelijk raakt — de triade is een samenhangend geheel.',
    },
  ],
  'B.2': [
    {
      id: 'B.2.zwaar1', toetstermCode: 'B.2.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij een woningopname worden gelijktijdig scheurvorming bij de fundering, vochtplekken bij de daknok en een verzakte binnendeur geconstateerd. Welke analyse van de hoofdopbouw is het meest zorgvuldig?',
      options: [
        'Dit zijn potentieel drie afzonderlijke gebreken in drie verschillende elementengroepen (fundering, dak, binnenafwerking), die stuk voor stuk nader onderzoek vergen vóórdat een gezamenlijke oorzaak wordt verondersteld',
        'Alle drie de gebreken hebben per definitie exact dezelfde oorzaak',
        'Een verzakte binnendeur bewijst automatisch een funderingsprobleem',
        'Vochtplekken bij de daknok zijn altijd het gevolg van een verzakte fundering',
      ],
      correctIndex: 0,
      explanation: 'De hoofdopbouw bestaat uit onafhankelijke elementengroepen met elk eigen faalmechanismen; het is onzorgvuldig om zonder nader onderzoek automatisch één gezamenlijke oorzaak te veronderstellen, ook al zijn ze gelijktijdig aangetroffen.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.zwaar1', toetstermCode: 'B.3.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een balk met afmeting 50 × 80 mm wordt belast met een kracht die een spanning van 3 N/mm² veroorzaakt in het dwarsvlak. Hoe groot is de kracht (in N)?',
      options: ['12.000 N', '4.000 N', '400 N', '1.500 N'],
      correctIndex: 0,
      explanation: 'A = 50×80 = 4.000 mm². F = σ×A = 3 × 4.000 = 12.000 N.',
    },
    {
      id: 'B.3.zwaar2', toetstermCode: 'B.3.4', type: 'multi', bloom: 'Synthese',
      prompt: 'Twee balken hebben gelijke oppervlakte (2.400 mm²): balk P is 40×60 mm, balk Q is 20×120 mm. Welke conclusies over hun weerstand tegen doorbuiging (W=1/6·b·h²) zijn juist?',
      options: [
        'Balk Q heeft een grotere weerstand tegen doorbuiging dan balk P',
        'W van balk P is 1/6×40×60² = 24.000 mm³',
        'W van balk Q is 1/6×20×120² = 48.000 mm³',
        'Bij gelijke oppervlakte is de weerstand tegen doorbuiging altijd exact gelijk',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Ondanks gelijke oppervlakte geeft de hogere balk (Q) een grotere weerstand tegen doorbuiging (48.000 > 24.000 mm³), omdat h kwadratisch in de formule staat — oppervlakte alleen is dus geen goede voorspeller.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.zwaar1', toetstermCode: 'B.4.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Naast een rij historische panden op houten paalfunderingen wordt een bouwput gerealiseerd met damwanden én bronbemaling zonder retoursysteem. Zes maanden later ontstaan scheve vloeren in de panden. Welke redenering integreert alle gegeven elementen het best?',
      options: [
        'De damwanden beperken grondverplaatsing, maar de bemaling verlaagt de grondwaterstand alsnog onder de belendingen, waardoor paalkoppen droogvallen en gaan rotten — de damwand alleen beschermt dus niet tegen dit specifieke risico',
        'Damwanden voorkomen automatisch elke vorm van zettingsschade bij bemaling',
        'De scheve vloeren hebben zeker niets met de bemaling te maken omdat er damwanden zijn toegepast',
        'Bronbemaling heeft nooit invloed op de grondwaterstand buiten de bouwput',
      ],
      correctIndex: 0,
      explanation: 'Damwanden beperken vooral grondverplaatsing/instabiliteit, maar beschermen niet tegen de verlaging van de grondwaterstand zelf, die zich via de bodem kan uitbreiden — retourbemaling is juist bedoeld om dít specifieke risico te beperken.',
    },
    {
      id: 'B.4.zwaar2', toetstermCode: 'B.4.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een sondering meet op een bepaalde diepte een conusweerstand van 12 MN/m². Welke rekenwaarde voor de draagkracht wordt hieruit met de gangbare veiligheidscoëfficiënt van 4 afgeleid?',
      options: ['3 MN/m²', '48 MN/m²', '12 MN/m²', '8 MN/m²'],
      correctIndex: 0,
      explanation: 'Bij een veiligheidscoëfficiënt van 4 wordt de rekenwaarde bepaald als 12 / 4 = 3 MN/m².',
    },
  ],
  'B.5': [
    {
      id: 'B.5.zwaar1', toetstermCode: 'B.5.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een muur van 1.250 mm hoogte wordt in halfsteens verband gemetseld met een lagenmaat van 62,5 mm. Hoeveel lagen zijn hiervoor nodig, en welk metselverband is voor een halfsteensmuur NIET van toepassing?',
      options: [
        '20 lagen; kruisverband is bij een halfsteensmuur niet gangbaar (dat vergt minimaal een steensmuur)',
        '16 lagen; klezorenverband is bij elke muurdikte toepasbaar',
        '25 lagen; alle verbanden zijn bij elke muurdikte gelijk toepasbaar',
        '20 lagen; halfsteensverband is bij een halfsteensmuur niet mogelijk',
      ],
      correctIndex: 0,
      explanation: '1.250/62,5 = 20 lagen. Kruisverband (met verspringende strekkenlagen) vergt een muurdikte van minimaal één steen en is dus niet toepasbaar bij een halfsteensmuur, die alleen strekken toont.',
    },
    {
      id: 'B.5.zwaar2', toetstermCode: 'B.5.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een spouwmuur toont zowel fijne, verspreide haarscheurtjes over het hele gevelvlak als een enkele, geconcentreerde diagonale scheur bij de hoek boven een kelderraam. Welke conclusies zijn het meest gegrond?',
      options: [
        'De verspreide haarscheuren wijzen eerder op thermische werking van het metselwerk',
        'De diagonale scheur bij de hoek boven het kelderraam wijst eerder op plaatselijke zetting of spanningsconcentratie',
        'Beide scheurpatronen hebben gegarandeerd exact dezelfde oorzaak',
        'Het scheurpatroon (verspreid vs. geconcentreerd/diagonaal) geeft een relevante aanwijzing voor het onderliggende mechanisme',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Het type scheurpatroon is diagnostisch relevant: verspreide, fijne scheuren wijzen op thermische werking, een geconcentreerde diagonale scheur bij een gevelopening op lokale zetting/spanningsconcentratie — twee verschillende mechanismen, niet automatisch dezelfde oorzaak.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.zwaar1', toetstermCode: 'B.6.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een betonnen galerijvloer aan de noordzijde van een flatgebouw vertoont sneller betonrot dan een identieke vloer aan de zuidzijde, ondanks gelijke betonkwaliteit en wapeningsdekking bij aanleg. Welke verklaring integreert de relevante factoren het best?',
      options: [
        'De noordzijde droogt minder snel uit na neerslag, wat de vochtperiode rond de wapening verlengt en het corrosieproces (en daarmee betonrot) kan versnellen, ondanks gelijke uitgangskwaliteit',
        'Betonrot ontstaat uitsluitend door de kwaliteit van het beton bij aanleg, nooit door klimaatblootstelling',
        'De zuidzijde heeft per definitie een andere wapeningsdekking dan de noordzijde',
        'Gevelrichting heeft geen enkele relatie met het optreden van betonrot',
      ],
      correctIndex: 0,
      explanation: 'Bij gelijke uitgangskwaliteit kan de omgevingsblootstelling (langere vochtperiodes op het noorden) alsnog een reëel verschil in het tempo van corrosie/betonrot verklaren — de gevelrichting is dus een legitieme, aanvullende verklarende factor.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.zwaar1', toetstermCode: 'B.7.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een overkapping met een overspanning van 25 meter wordt gekozen tussen een stalen vakwerkligger en een massieve, gewalste stalen ligger van dezelfde hoogte. Welke overweging pleit het sterkst voor de vakwerkligger?',
      options: [
        'Een vakwerkligger heeft bij gelijke hoogte en overspanning doorgaans een gunstiger verhouding tussen eigen gewicht en draagvermogen dan een massieve ligger',
        'Een vakwerkligger is altijd goedkoper in materiaal, ongeacht de overspanning',
        'Een massieve ligger kan nooit een grote overspanning aan',
        'Vakwerkliggers hebben nooit enig nadeel ten opzichte van massieve liggers',
      ],
      correctIndex: 0,
      explanation: 'Bij grote overspanningen geeft een vakwerkconstructie doorgaans een beter verhouding tussen eigen gewicht en draagvermogen dan een massieve ligger van gelijke hoogte — vandaar de veelvuldige toepassing bij grote, lichte overkappingen.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.zwaar1', toetstermCode: 'B.8.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een aluminium gevelbekleding wordt bevestigd met roestvaststalen (RVS) schroeven zonder scheidingslaag. Na enkele jaren wordt lokale putcorrosie in het aluminium rond de schroefkoppen geconstateerd. Wat verklaart dit het best?',
      options: [
        'Galvanische corrosie: RVS is edeler dan aluminium, waardoor het aluminium lokaal versneld corrodeert bij direct contact',
        'RVS-schroeven kunnen nooit enige corrosie bij andere metalen veroorzaken', 'Dit wijst uitsluitend op een productiefout in het aluminium zelf, los van de schroeven', 'Aluminium is per definitie ongevoelig voor elke vorm van corrosie',
      ],
      correctIndex: 0,
      explanation: 'RVS is edeler dan aluminium in de galvanische reeks; direct contact zonder scheidingslaag kan lokale, versnelde corrosie (putcorrosie) van het onedelere aluminium veroorzaken.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.zwaar1', toetstermCode: 'B.9.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een houten kapconstructie combineert actieve zwamaantasting (vochtbron nog aanwezig) met scheuren die wijzen op overbelasting door een extra dakbedekkingslaag die ooit is toegevoegd. Wat is de meest verantwoorde volgorde van aanpak?',
      options: [
        'Eerst de vochtbron wegnemen en de zwam bestrijden, dan pas een constructieve herberekening/versterking uitvoeren — anders blijft nieuw hout na reparatie alsnog kwetsbaar voor herbesmetting',
        'Alleen de overbelasting aanpakken, want zwam is bij een actieve vochtbron nooit relevant',
        'Alleen de zwam bestrijden, overbelasting door extra dakbedekking is nooit een reëel risico',
        'De volgorde van aanpak maakt in de praktijk geen enkel verschil',
      ],
      correctIndex: 0,
      explanation: 'Nieuw of hersteld hout blijft kwetsbaar zolang de vochtbron die de zwam voedt niet is weggenomen; pas na sanering van de oorzaak heeft constructief herstel blijvend effect.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.zwaar1', toetstermCode: 'B.10.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een houten kozijn met correcte "ademende" verfopbouw en correcte waterafvoer bij de dorpel vertoont toch houtrot, uitsluitend geconcentreerd rond de schroeven van het raambeslag. Wat is de meest waarschijnlijke, resterende verklaring?',
      options: [
        'De schroefgaten vormen lokale onderbrekingen in de beschermende verflaag waar vocht direct het hout kan binnendringen, ongeacht de verder correcte opbouw',
        'De ademende verfopbouw is zelf de oorzaak van deze lokale rot', 'Correcte dorpelafvoer maakt elke vorm van lokale houtrot elders onmogelijk', 'Dit bewijst dat het beslag zelf van hout gemaakt moet zijn geweest',
      ],
      correctIndex: 0,
      explanation: 'Doorboringen voor beslag zijn kwetsbare, lokale onderbrekingen van de verflaag; ook bij een verder correcte opbouw en waterafvoer kan hier vocht binnendringen — een gebrek dat losstaat van de grotere systemen.',
    },
  ],
  'B.11': [
    {
      id: 'B.11.zwaar1', toetstermCode: 'B.11.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een hoogbouwproject met grote glaspuien in een kustklimaat (zoutbelasting, wind) wordt gekozen tussen kunststof en aluminium kozijnen. Welke overweging weegt in deze specifieke context het zwaarst voor aluminium?',
      options: [
        'Aluminium combineert de vereiste structurele stijfheid voor grote, windbelaste puien met goede weerstand tegen langdurige weersbelasting, mits juist gecoat tegen zoutcorrosie',
        'Kunststof is in een kustklimaat altijd de enige veilige keuze', 'Zoutbelasting is nooit relevant voor de materiaalkeuze van kozijnen', 'Aluminium heeft in een kustklimaat geen enkel nadeel ten opzichte van kunststof',
      ],
      correctIndex: 0,
      explanation: 'Bij grote, windbelaste puien is structurele stijfheid cruciaal — aluminium biedt dit, en met de juiste coating ook voldoende weerstand tegen zoutcorrosie in een kustklimaat, wat het in deze specifieke context een sterke keuze maakt.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.zwaar1', toetstermCode: 'B.12.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een houten begane grondvloer wordt vervangen door een betonnen systeemvloer, maar de bestaande kruipruimteventilatie wordt ongewijzigd gelaten. Welke conclusie over het resultaat is het meest gegrond?',
      options: [
        'De betonvloer zelf is ongevoelig voor houtrot, maar onvoldoende kruipruimteventilatie kan nog steeds tot vochtophoping en indirecte problemen (zoals optrekkend vocht of schimmelgeur) leiden',
        'Een betonnen vloer maakt kruipruimteventilatie volledig overbodig, ongeacht andere factoren',
        'Vochtproblemen in de kruipruimte kunnen na deze vervanging nooit meer optreden',
        'De vervanging van het vloertype heeft geen enkel effect op de vochthuishouding',
      ],
      correctIndex: 0,
      explanation: 'Beton is zelf ongevoelig voor houtrot, maar de onderliggende kruipruimte kan nog steeds vochtproblemen ontwikkelen die via andere routes (optrekkend vocht, geur, indirecte schade aan andere bouwdelen) de woning beïnvloeden — ventilatie blijft dus relevant.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.zwaar1', toetstermCode: 'B.13.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een kapconstructie met een stijve dakplaat (spatkrachten) staat op een gevel met een vers aangebrachte, nog niet volledig uitgeharde specie in het bovenste deel van het metselwerk. Welke conclusie over het gecombineerde risico is het meest gegrond?',
      options: [
        'De spatkrachten oefenen extra druk uit op precies het deel van de gevel dat nog niet zijn volledige sterkte heeft bereikt, wat het scheurrisico tijdelijk vergroot ten opzichte van volledig uitgeharde specie',
        'Verse specie is altijd sterker dan uitgeharde specie', 'Spatkrachten hebben geen enkele relatie met de sterkte van de specie eronder', 'Dit risico is volledig onafhankelijk van het moment waarop de dakconstructie wordt geplaatst',
      ],
      correctIndex: 0,
      explanation: 'Het combineren van een belastende factor (spatkrachten) met een tijdelijk verzwakte constructie (nog niet uitgeharde specie) vergroot het risico op schade in die specifieke fase van de bouw — timing van de uitvoering is dus relevant.',
    },
    {
      id: 'B.13.zwaar2', toetstermCode: 'B.13.2', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een plat dak boven een intensief belopen gemeenschappelijke dakterras in een appartementencomplex wordt gekozen tussen EPDM met tegeldragers en een gietvloer-systeem. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'EPDM met tegeldragers beschermt de waterdichte laag zelf tegen directe mechanische belasting',
        'Een gietvloer-systeem kan zelf al drukvast en beloopbaar zijn zonder aparte beschermlaag',
        'Beide systemen zijn bij intensief gemeenschappelijk gebruik volledig gelijkwaardig zonder enig verschil',
        'Onderhoud en inspecteerbaarheid van de onderliggende waterdichte laag kunnen tussen beide systemen verschillen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'EPDM met tegeldragers beschermt de folie via een losse, inspecteerbare laag; een gietvloer is zelf drukvast maar minder eenvoudig te inspecteren/vervangen — reële, functionele verschillen tussen beide systemen.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.zwaar1', toetstermCode: 'B.14.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een trap moet een hoogte van 2.800 mm overbruggen met 16 optredes van gelijke hoogte. Wat is de optredehoogte, en welke aantrede volgt hieruit volgens de vuistregel 2×optrede + aantrede ≈ 630 mm?',
      options: [
        '175 mm optrede; 280 mm aantrede', '175 mm optrede; 630 mm aantrede', '200 mm optrede; 230 mm aantrede', '150 mm optrede; 330 mm aantrede',
      ],
      correctIndex: 0,
      explanation: '2.800/16 = 175 mm optrede. Aantrede = 630 − 2×175 = 630 − 350 = 280 mm.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.zwaar1', toetstermCode: 'B.15.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een leidingsysteem dat regelmatig gedemonteerd en herbewerkt moet kunnen worden, maar ook bestand moet zijn tegen langdurige blootstelling aan hoge temperaturen zonder vormverlies, wordt een kunststofkeuze gevraagd. Welke conclusie is het meest realistisch?',
      options: [
        'Geen van beide kunststofgroepen (thermoplast/thermoharder) voldoet volledig aan beide eisen tegelijk — een bewuste prioritering tussen herbewerkbaarheid en hittevormvastheid is nodig, eventueel aangevuld met een metalen alternatief',
        'Thermoplasten voldoen altijd volledig aan beide eisen tegelijk zonder enige beperking',
        'Thermoharders zijn net zo goed te demonteren en herbewerken als thermoplasten',
        'Temperatuurbestendigheid en herbewerkbaarheid zijn nooit met elkaar in conflict bij kunststoffen',
      ],
      correctIndex: 0,
      explanation: 'Dit is een klassieke trade-off tussen thermoplast (herbewerkbaar, minder hittevast in vorm) en thermoharder (hittevast, niet herbewerkbaar) — geen van beide voldoet volledig, dus een prioritering of alternatief materiaal is nodig.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.zwaar1', toetstermCode: 'B.16.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Voor de renovatie van een monumentaal pand wordt isolatie gezocht die tegelijk een minimale dikte heeft (behoud van raamdetaillering), goed vochtregulerend is (monumentale, ademende constructie) en een acceptabele milieu-impact heeft. Welke conclusie is het meest realistisch?',
      options: [
        'Deze drie eisen (dunne dikte, dampopen vochtregulering, lage milieu-impact) zijn zelden alle drie optimaal in één materiaal te combineren — een zorgvuldige, projectspecifieke afweging met eventueel specialistisch isolatieadvies is hier op zijn plaats',
        'Elk isolatiemateriaal voldoet in gelijke mate aan alle drie deze eisen', 'Bij monumenten is isoleren nooit relevant of mogelijk', 'Dampopen materialen zijn per definitie nooit dun genoeg voor monumentale details',
      ],
      correctIndex: 0,
      explanation: 'Dunne, hoogisolerende materialen (zoals PIR) zijn vaak dampdicht, terwijl dampopen materialen (zoals houtvezel) doorgaans dikker zijn — de drie gestelde eisen conflicteren deels, wat een zorgvuldige, projectspecifieke afweging vergt.',
    },
  ],
}
