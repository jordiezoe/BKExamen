import type { Question } from '../types/content'

/**
 * Bloom-examen — vierde golf, sectie B. Zeer hoog niveau, sterke nadruk op
 * Toepassen/Analyseren/Evalueren, GEEN open vragen (uitsluitend mc, multi,
 * invul, match). Nieuwe, niet overlappende feiten t.o.v. bloomexamenB.ts,
 * B2.ts en B3.ts. Mede geïnspireerd op eigen samenvattingen (sterkteleer,
 * grondwerk/funderingen, metselwerken) — origineel geschreven.
 */
export const bloomExamenB4: Record<string, Question[]> = {
  'B.1': [
    {
      id: 'B.1.bloom4.mc', toetstermCode: 'B.1.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een nieuwbouwwoning voldoet aan alle bouwtechnische eisen (stevigheid) en heeft een prijswinnend ontwerp (schoonheid), maar de trap is zo steil dat bewoners hem als onprettig ervaren. Welke Vitruvius-kwaliteit schiet hier tekort?',
      options: ['Bruikbaarheid (utilitas)', 'Stevigheid (firmitas)', 'Schoonheid (venustas)', 'Duurzaamheid'],
      correctIndex: 0,
      explanation: 'Een te steile trap raakt het functionele gebruiksgemak van het gebouw — dat is bruikbaarheid, ongeacht dat stevigheid en schoonheid wel op orde zijn.',
    },
    {
      id: 'B.1.bloom4.multi', toetstermCode: 'B.1.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij de renovatie van een monument wordt de oorspronkelijke, karakteristieke gevel gerestaureerd, terwijl inwendig een volledig nieuwe, functionele indeling en constructie worden gerealiseerd. Welke conclusies zijn juist?',
      options: [
        'Schoonheid krijgt hier prioriteit aan de buitenzijde van het gebouw',
        'Bruikbaarheid en stevigheid worden vooral inwendig vernieuwd',
        'Bij monumentenrenovatie speelt de Vitruvius-triade geen enkele rol',
        'De drie kwaliteiten kunnen in verschillende mate en op verschillende plekken in één project worden nagestreefd',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'De triade hoeft niet overal in gelijke mate te gelden: hier ligt de nadruk op schoonheid aan de buitenkant en bruikbaarheid/stevigheid aan de binnenkant — de triade blijft dus wel degelijk relevant.',
    },
    {
      id: 'B.1.bloom4.invul', toetstermCode: 'B.1.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de Latijnse term van Vitruvius voor "stevigheid" is firmitas, voor "schoonheid" is dat venustas, en voor "bruikbaarheid" is dat ______.',
      acceptableAnswers: ['utilitas'],
      explanation: 'De drie Vitruvius-termen zijn firmitas (stevigheid), utilitas (bruikbaarheid) en venustas (schoonheid).',
    },
  ],
  'B.2': [
    {
      id: 'B.2.bloom4.mc', toetstermCode: 'B.2.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een taxateur moet snel inschatten welk hoofdonderdeel van de hoofdopbouw verantwoordelijk is voor geluidsoverlast tussen twee naast elkaar gelegen appartementen. Welk element controleert hij het eerst?',
      options: [
        'De woningscheidende (bouw)muur tussen de appartementen',
        'De dakconstructie',
        'De fundering',
        'De buitenkozijnen aan de straatzijde',
      ],
      correctIndex: 0,
      explanation: 'Geluidsoverlast tussen naastgelegen woningen wijst primair naar de woningscheidende wand, die aan geluidsisolatie-eisen moet voldoen; de andere onderdelen zijn hier minder relevant.',
    },
    {
      id: 'B.2.bloom4.multi', toetstermCode: 'B.2.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een ondiepe fundering laat scheuren zien, terwijl de bovenliggende draagconstructie zelf intact is. Welke conclusies zijn hieruit het meest gegrond?',
      options: [
        'Het probleem ligt vermoedelijk in de fundering of de ondergrond, niet in de bovenbouw',
        'De hoofdopbouw van een gebouw is een gelaagd systeem waarbij een gebrek in één laag niet per se de andere lagen aantast',
        'Scheuren in de fundering hebben nooit gevolgen voor de rest van het gebouw',
        'Dit duidt op een probleem met de dakconstructie',
      ],
      correctIndices: [0, 1],
      explanation: 'Scheuren specifiek in de fundering, met een intacte bovenbouw, wijzen op een probleem in die laag (bijvoorbeeld zetting) — de hoofdopbouw is gelaagd, dus een gebrek is niet automatisch overal zichtbaar.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.bloom4.mc', toetstermCode: 'B.3.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Op een oppervlak van 20 × 30 mm werkt een kracht van 1.200 N. Wat is de spanning in dat vlak?',
      options: ['2 N/mm²', '20 N/mm²', '0,2 N/mm²', '200 N/mm²'],
      correctIndex: 0,
      explanation: 'σ = F/A = 1.200 N / (20 × 30 mm²) = 1.200/600 = 2 N/mm².',
    },
    {
      id: 'B.3.bloom4.multi', toetstermCode: 'B.3.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een balk wordt vervangen door een balk met dezelfde breedte maar het dubbele van de hoogte. Welke uitspraken over de weerstand tegen doorbuiging zijn juist, gebruikmakend van W = 1/6·b·h²?',
      options: [
        'De weerstand tegen doorbuiging wordt vier keer zo groot',
        'De weerstand tegen doorbuiging wordt slechts twee keer zo groot',
        'De hoogte van een balk telt zwaarder mee voor de sterkte dan de breedte',
        'Verdubbeling van de breedte zou hetzelfde effect geven als verdubbeling van de hoogte',
      ],
      correctIndices: [0, 2],
      explanation: 'Omdat h kwadratisch in de formule staat, geeft een verdubbeling van de hoogte een viermaal grotere weerstand tegen doorbuiging, terwijl verdubbeling van de breedte slechts een verdubbeling geeft — hoogte telt dus zwaarder.',
    },
    {
      id: 'B.3.bloom4.invul', toetstermCode: 'B.3.5', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: bij funderingsberekeningen wordt op basis van een sondering slechts 1/3 tot 1/4 van de gemeten conusweerstand aangehouden — dit heet de veiligheids______.',
      acceptableAnswers: ['coëfficiënt'],
      explanation: 'De veiligheidscoëfficiënt (doorgaans 3 à 4) zorgt voor een ruime marge tussen de gemeten grondweerstand en de daadwerkelijk toegepaste rekenwaarde.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.bloom4.mc', toetstermCode: 'B.4.3', type: 'mc', bloom: 'Toepassen',
      prompt: 'Vlak naast een nieuwe bouwput met bronbemaling staat een monumentaal pand op houten paalfundering. Welke maatregel is het meest passend om extra zetting van dat pand te voorkomen?',
      options: [
        'Een retourbemaling toepassen, die het opgepompte grondwater teruggeeft aan hetzelfde watervoerende pakket',
        'De bemaling zonder enige aanpassing gewoon laten doorwerken',
        'De bemalingsvergunning overslaan, want die is bij monumenten niet nodig',
        'De houten paalfundering tijdelijk droogleggen',
      ],
      correctIndex: 0,
      explanation: 'Retourbemaling wordt juist toegepast bij kwetsbare belendingen (zoals monumentale bebouwing) om ongewenste extra zetting door verlaging van de grondwaterstand te voorkomen.',
    },
    {
      id: 'B.4.bloom4.multi', toetstermCode: 'B.4.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een grondonderzoek toont een sondeergrafiek met een sterk oplopende conusweerstand vanaf ongeveer 6,5 m diepte. Welke conclusies zijn hieruit gegrond?',
      options: [
        'Vanaf die diepte bevindt zich vermoedelijk een goed draagkrachtige laag (bijvoorbeeld zand of grind)',
        'Een paalfundering die tot die diepte reikt, kan hier profijt van hebben',
        'De bovenliggende lagen zijn per definitie net zo draagkrachtig',
        'De conusweerstand zegt niets over de draagkracht van de grond',
      ],
      correctIndices: [0, 1],
      explanation: 'Een sterk oplopende conusweerstand duidt op een toename van de draagkracht — een klassiek signaal om palen tot die diepte door te zetten; dit zegt niets over de (mogelijk slappere) bovenliggende lagen.',
    },
    {
      id: 'B.4.bloom4.invul', toetstermCode: 'B.4.4', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: vóór mechanisch graafwerk is een melding bij het Kadaster verplicht om de ligging van kabels en leidingen te achterhalen — dit heet een ______melding.',
      acceptableAnswers: ['klic', 'klic-melding'],
      explanation: 'Een KLIC-melding (Kabels en Leidingen Informatiecentrum) is verplicht vóór mechanisch graafwerk om schade aan ondergrondse infrastructuur te voorkomen.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.bloom4.mc', toetstermCode: 'B.5.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een muur van 1.000 mm hoogte moet in halfsteens metselwerk worden opgetrokken met een lagenmaat van 62,5 mm. Hoeveel lagen steen zijn hiervoor nodig?',
      options: ['16 lagen', '10 lagen', '20 lagen', '8 lagen'],
      correctIndex: 0,
      explanation: '1.000 mm / 62,5 mm per laag = 16 lagen — precies de gangbare vuistregel voor Nederlands metselwerk.',
    },
    {
      id: 'B.5.bloom4.multi', toetstermCode: 'B.5.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij een gemetselde spouwmuur wordt tijdens de bouw mortelpuin in de spouw achtergelaten en worden de spouwankers niet volgens de voorgeschreven dichtheid per m² aangebracht. Welke risico\'s ontstaan hierdoor het meest direct?',
      options: [
        'Vochtbruggen tussen buiten- en binnenspouwblad via het achtergebleven puin',
        'Onvoldoende stabiliteit van de spouwmuur door te weinig spouwankers',
        'Een hogere geluidsisolatie dan bij een correct uitgevoerde spouwmuur',
        'Verminderde thermische isolatie doordat vocht de isolatiewaarde van eventuele spouwisolatie verlaagt',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Achtergebleven mortelpuin kan vocht overbrengen (vochtbrug), te weinig spouwankers verzwakt de stabiliteit, en vocht in de spouw verlaagt de isolatiewaarde — geluidsisolatie wordt hier niet beter van.',
    },
    {
      id: 'B.5.bloom4.match', toetstermCode: 'B.5.1', type: 'match', bloom: 'Kennis',
      prompt: 'Koppel elk metselwerkbegrip aan de juiste omschrijving.',
      pairs: [
        { left: 'Lintvoeg', right: 'De horizontale voeg tussen twee lagen stenen' },
        { left: 'Stootvoeg', right: 'De verticale voeg tussen twee stenen in dezelfde laag' },
        { left: 'Koppenmaat', right: 'De gemiddelde breedte van de steen plus de stootvoeg' },
        { left: 'Strekkenmaat', right: 'De gemiddelde lengte van de steen plus de stootvoeg' },
      ],
      explanation: 'Deze vier begrippen vormen de basis van de metselwerkmaatvoering en komen letterlijk terug in bestek en tekeningen.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.bloom4.mc', toetstermCode: 'B.6.3', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een balkonplaat van gewapend beton krijgt onvoldoende betondekking op de wapening. Welk gebrek treedt hierdoor het meest waarschijnlijk sneller op?',
      options: ['Betonrot (corrosie van de wapening met afspattend beton)', 'Krimp van het beton tijdens uitharding', 'Een te hoge druksterkte van het beton', 'Verkleuring van het beton door UV-licht'],
      correctIndex: 0,
      explanation: 'Een te dunne betondekking laat vocht en lucht sneller bij de wapening komen, wat corrosie (roest) versnelt — de roestende wapening zet uit en drukt het beton los: betonrot.',
    },
    {
      id: 'B.6.bloom4.multi', toetstermCode: 'B.6.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen verminderen het risico op betonrot in een constructie die aan weer en wind is blootgesteld?',
      options: [
        'Voldoende betondekking op de wapening aanhouden', 'Beton goed verdichten tijdens het storten om holtes te voorkomen', 'De wapening met opzet dicht aan het oppervlak plaatsen voor extra stevigheid', 'Beton met de juiste milieuklasse toepassen voor de blootstellingscondities',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Voldoende dekking, goede verdichting en de juiste milieuklasse bepermen indringing van vocht/chloriden bij de wapening; wapening juist dicht aan het oppervlak plaatsen vergroot het risico op betonrot.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.bloom4.mc', toetstermCode: 'B.7.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Voor een utiliteitsgebouw met een grote, kolomvrije overspanning en veel glas wordt gekozen voor een staalskeletconstructie met diagonale windverbanden. Waarom zijn die windverbanden hier functioneel noodzakelijk?',
      options: [
        'Ze zorgen voor de horizontale stabiliteit van het skelet, die anders bij grote, open overspanningen zou ontbreken',
        'Ze verhogen alleen de brandwerendheid van het staal',
        'Ze zijn uitsluitend decoratief bedoeld',
        'Ze vervangen de fundering van het gebouw',
      ],
      correctIndex: 0,
      explanation: 'Diagonale windverbanden voorkomen dat een open staalskelet (zonder stijve wanden) horizontaal vervormt onder windbelasting — ze geven de stabiliteit die massieve wanden bij stapelbouw van nature bieden.',
    },
    {
      id: 'B.7.bloom4.multi', toetstermCode: 'B.7.3', type: 'multi', bloom: 'Evalueren',
      prompt: 'Bij een fabriekshal in staalskeletbouw wordt overwogen om het staal onbekleed te laten voor een industriële uitstraling. Welke afwegingen zijn hierbij het meest terecht?',
      options: [
        'Onbekleed staal verliest bij brand relatief snel sterkte, wat de brandveiligheid onder druk zet',
        'Bekleding met brandwerend materiaal kan nodig zijn afhankelijk van de gebruiksfunctie en gevolgklasse',
        'Staal heeft nooit enige relatie met brandveiligheid',
        'De esthetische wens (industriële uitstraling) kan botsen met de brandveiligheidseisen uit het Bbl',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Onbekleed staal is brandgevoelig qua sterkteverlies; afhankelijk van de gebruiksfunctie kan brandwerende bekleding verplicht zijn, wat kan botsen met de esthetische wens voor zichtbaar staal.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.bloom4.mc', toetstermCode: 'B.8.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een zinken dakgoot wordt direct in contact gebracht met koperen bevestigingsmiddelen. Wat is het meest waarschijnlijke risico op de langere termijn?',
      options: [
        'Galvanische corrosie: het onedelere metaal (zink) tast versneld aan door contact met het edelere metaal (koper)',
        'Geen enkel risico, metalen beïnvloeden elkaar nooit',
        'Het zink wordt juist sterker door het contact met koper',
        'Dit leidt uitsluitend tot een esthetisch probleem, geen functioneel risico',
      ],
      correctIndex: 0,
      explanation: 'Contact tussen ongelijke metalen (zoals zink en koper) kan galvanische corrosie veroorzaken, waarbij het onedelere metaal versneld wordt aangetast — een reëel functioneel risico voor de levensduur van de goot.',
    },
    {
      id: 'B.8.bloom4.multi', toetstermCode: 'B.8.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke eigenschappen maken aluminium een geschikt materiaal voor kozijnprofielen?',
      options: ['Corrosiebestendig zonder extra bescherming (natuurlijke oxidelaag)', 'Licht van gewicht', 'Goed te extruderen tot slanke profielen', 'Van nature een uitstekende warmte-isolator zonder thermische onderbreking'],
      correctIndices: [0, 1, 2],
      explanation: 'Aluminium is licht, corrosiebestendig en goed vormbaar tot slanke profielen; het geleidt warmte juist snel, vandaar de noodzaak van een thermische onderbreking voor goede isolatie.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.bloom4.mc', toetstermCode: 'B.9.3', type: 'mc', bloom: 'Toepassen',
      prompt: 'Voor een buiten toegepaste gevelbekleding zonder verduurzamingsbehandeling wordt gezocht naar een houtsoort met van nature hoge duurzaamheid tegen schimmel en insecten. Welke keuze past hier het beste bij?',
      options: [
        'Een tropische hardhoutsoort met een hoge natuurlijke duurzaamheidsklasse',
        'Onbehandeld vurenhout (een naaldhoutsoort met lage natuurlijke duurzaamheid)',
        'Spaanplaat', 'Multiplex zonder buitenlijm',
      ],
      correctIndex: 0,
      explanation: 'Van de genoemde opties heeft duurzaam tropisch hardhout de hoogste natuurlijke duurzaamheidsklasse en is daardoor het meest geschikt voor onbehandelde buitentoepassing.',
    },
    {
      id: 'B.9.bloom4.multi', toetstermCode: 'B.9.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een houten kapconstructie op zolder vertoont fijne boorgaatjes met houtmeel eronder. Welke conclusies zijn het meest gegrond?',
      options: [
        'Dit wijst op aantasting door een houtboordend insect zoals de houtworm', 'Nader onderzoek naar de omvang en of de aantasting nog actief is, is aan te raden', 'Dit is altijd onschuldig en vergt nooit een vervolgactie', 'Dit duidt eerder op vochtschade dan op insectenaantasting',
      ],
      correctIndices: [0, 1],
      explanation: 'Fijne boorgaatjes met houtmeel (boormeel) zijn een klassiek signaal van houtboordende insecten; vervolgonderzoek naar omvang en activiteit is dan verstandig, in plaats van het gebrek te negeren.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.bloom4.mc', toetstermCode: 'B.10.2', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een houten kozijn is aan de binnenzijde afgewerkt met een dampdichte verflaag, terwijl de buitenzijde open (dampdoorlatend) is geschilderd. Wat is het meest waarschijnlijke risico?',
      options: [
        'Vocht dat van binnenuit in het hout trekt, kan er via de buitenzijde makkelijker weer uit — dit is juist een gunstige, "ademende" opbouw',
        'Vocht van binnenuit kan niet ontsnappen en zal zich in het hout ophopen, met houtrot als gevolg',
        'De verfkeuze heeft geen enkele invloed op de vochthuishouding van het hout',
        'Dit leidt altijd tot direct zichtbare schade binnen een week',
      ],
      correctIndex: 0,
      explanation: 'Een "ademende" opbouw (binnen dampremmend/dicht, buiten dampopen) laat vocht dat er toch inkomt weer naar buiten ontsnappen — de omgekeerde opbouw (buiten dicht) zou juist vocht opsluiten en tot rot leiden.',
    },
    {
      id: 'B.10.bloom4.multi', toetstermCode: 'B.10.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke onderdelen van een houten kozijn zijn het meest gevoelig voor vochtschade en verdienen daarom extra aandacht bij onderhoud?',
      options: ['De onderdorpel (waterafvoer van regenwater)', 'Voegen en kitranden rond het glas', 'Het bovendorpel-gedeelte zonder waterbelasting', 'Aansluitingen met het metselwerk'],
      correctIndices: [0, 1, 3],
      explanation: 'Dorpels, kitvoegen en muuraansluitingen zijn de plekken waar water het langst blijft staan of kan binnendringen; het onbelaste bovendorpel-gedeelte is doorgaans veel minder kwetsbaar.',
    },
  ],
  'B.11': [
    {
      id: 'B.11.bloom4.mc', toetstermCode: 'B.11.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een gebouw met grote glaspuien op de begane grond wordt gekozen tussen kunststof en aluminium kozijnprofielen. Welke overweging pleit het sterkst voor aluminium in deze situatie?',
      options: [
        'Aluminium profielen kunnen slanker worden uitgevoerd bij gelijke sterkte, wat meer glasoppervlak en daglicht geeft',
        'Aluminium heeft altijd een betere isolatiewaarde dan kunststof',
        'Aluminium is per definitie goedkoper dan kunststof',
        'Aluminium vereist nooit onderhoud',
      ],
      correctIndex: 0,
      explanation: 'Aluminium is sterker per doorsnede en laat daardoor slankere profielen toe dan kunststof — bij grote glaspuien betekent dit meer glas en minder profiel, dus meer daglicht.',
    },
    {
      id: 'B.11.bloom4.multi', toetstermCode: 'B.11.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke uitspraken over kunststof kozijnen zijn juist?',
      options: [
        'Ze zijn van nature onderhoudsarm (geen schilderwerk nodig)', 'Ze worden vaak met stalen of aluminium verstevigingsprofielen inwendig versterkt', 'Ze roesten net als staal', 'Ze kunnen in verschillende kleuren/coatings worden uitgevoerd',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Kunststof kozijnen zijn onderhoudsarm, worden vaak inwendig verstevigd met metalen profielen, en zijn in kleur leverbaar; kunststof roest niet, dat is een staaleigenschap.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.bloom4.mc', toetstermCode: 'B.12.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Onder een houten begane grondvloer wordt een slecht geventileerde, vochtige kruipruimte aangetroffen met een muffe lucht in de woonkamer erboven. Welke maatregel pakt de kern van het probleem het meest direct aan?',
      options: [
        'De kruipruimteventilatie verbeteren (extra of grotere ventilatieopeningen)',
        'Alleen de vloerbedekking in de woonkamer vervangen',
        'De verwarming in de woonkamer verhogen',
        'Extra kunstverlichting in de kruipruimte plaatsen',
      ],
      correctIndex: 0,
      explanation: 'Een muffe geur die vanuit een vochtige, slecht geventileerde kruipruimte optrekt, wordt het meest fundamenteel aangepakt door de kruipruimteventilatie te verbeteren — niet door symptomen in de woonkamer te bestrijden.',
    },
    {
      id: 'B.12.bloom4.multi', toetstermCode: 'B.12.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voordelen heeft een betonnen begane grondvloer (bijvoorbeeld een systeemvloer) ten opzichte van een houten balklaag?',
      options: [
        'Minder gevoelig voor houtrot en zwam bij een vochtige kruipruimte', 'Doorgaans een hogere massa, wat kan bijdragen aan geluidsisolatie', 'Altijd volledig onderhoudsvrij zonder enige uitzondering', 'Geen ventilatie van de kruipruimte ooit nodig',
      ],
      correctIndices: [0, 1],
      explanation: 'Beton is ongevoelig voor houtrot/zwam en heeft meer massa (beter voor geluidsisolatie); "altijd volledig onderhoudsvrij" en "nooit ventilatie nodig" zijn te absolute uitspraken om juist te zijn.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.bloom4.mc', toetstermCode: 'B.13.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij een kapconstructie met een stijve dakplaat drukken de spantbenen de muurplaat naar buiten, met horizontale scheuren in het metselwerk tot gevolg. Welke krachtswerking veroorzaakt dit?',
      options: ['Spatkrachten', 'Zuivere trekkrachten in de muur zelf', 'Wringing van de dakplaat', 'Knik van de spantbenen'],
      correctIndex: 0,
      explanation: 'Spatkrachten ontstaan doordat het eigen gewicht, wind en sneeuw op het dak de spantbenen naar buiten laten drukken tegen de muurplaat — een stijve dakplaat kan dit effect versterken.',
    },
    {
      id: 'B.13.bloom4.multi', toetstermCode: 'B.13.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen beperken het risico op spatkracht-gerelateerde scheurvorming in metselwerk onder een kapconstructie?',
      options: [
        'Een zolderbalklaag die de spantvoeten met elkaar verbindt', 'Stalen trekstangen of houten trekplaten tussen de spantbenen', 'Een zo stijf mogelijke dakplaat zonder enige trekverbinding', 'Voldoende verankering van de muurplaat aan de onderliggende constructie',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Trekverbindingen (balklaag, trekstangen/-platen) en goede verankering nemen de horizontale component van de spatkracht op; een stijve dakplaat zonder trekverbinding verergert het probleem juist.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.bloom4.mc', toetstermCode: 'B.14.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een trap krijgt een optrede van 20 cm en volgens de vuistregel 2× optrede + aantrede ≈ 63 cm moet de aantrede dan ongeveer zijn:',
      options: ['23 cm', '30 cm', '43 cm', '10 cm'],
      correctIndex: 0,
      explanation: '63 − 2×20 = 63 − 40 = 23 cm — dit geeft de comfortabele aantrede bij deze optredehoogte.',
    },
    {
      id: 'B.14.bloom4.multi', toetstermCode: 'B.14.3', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een woning met beperkte vloeroppervlakte wordt een spiltrap overwogen in plaats van een rechte steektrap. Welke afwegingen zijn hierbij het meest terecht?',
      options: [
        'Een spiltrap neemt minder vloeroppervlak in beslag', 'Een spiltrap is vaak minder comfortabel bij het dragen van grote spullen (zoals meubels)', 'Een spiltrap is per definitie veiliger dan een steektrap', 'De keuze hangt af van de balans tussen ruimtebesparing en dagelijks gebruiksgemak',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Spiltrappen besparen ruimte maar zijn minder praktisch bij verhuizen/dragen van grote objecten — de keuze is een afweging tussen ruimte en gebruiksgemak, niet een kwestie van veiligheid per definitie.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.bloom4.mc', toetstermCode: 'B.15.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een kunststof leidingdeel wordt bij een reparatie verhit om het te lassen, waarna het niet meer terugvervormt naar een eerdere staat. Tot welke kunststofgroep behoort dit materiaal het meest waarschijnlijk?',
      options: ['Thermoharder', 'Thermoplast', 'Elastomeer met vormgeheugen', 'Biobased kunststof zonder chemische verharding'],
      correctIndex: 0,
      explanation: 'Een thermoharder hardt bij verhitting onomkeerbaar uit — in tegenstelling tot een thermoplast, die telkens opnieuw kan worden verzacht en vervormd.',
    },
    {
      id: 'B.15.bloom4.multi', toetstermCode: 'B.15.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke eigenschappen maken pvc geschikt voor rioolbuizen?',
      options: ['Corrosiebestendig (geen roest)', 'Relatief licht van gewicht, wat de verwerking vergemakkelijkt', 'Goed lasbaar/verlijmbaar voor waterdichte verbindingen', 'Van nature drukbestendig als constructief draagmateriaal voor zware belastingen'],
      correctIndices: [0, 1, 2],
      explanation: 'Pvc is corrosiebestendig, licht en goed te verbinden — ideaal voor rioolbuizen; het is geen constructief draagmateriaal voor zware belastingen.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.bloom4.mc', toetstermCode: 'B.16.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Voor de spouw van een bestaande, nog ongeïsoleerde spouwmuur wordt gezocht naar isolatiemateriaal dat goed via kleine boorgaten kan worden ingeblazen. Welke eigenschap is hiervoor het belangrijkst?',
      options: [
        'Het materiaal moet los genoeg zijn om als korrels of vlokken door een slang te worden ingeblazen',
        'Het materiaal moet uit stijve, vooraf op maat gezaagde platen bestaan',
        'Het materiaal moet uitsluitend in dakisolatie worden toegepast',
        'Het materiaal moet volledig ondoorlatend zijn voor lucht en waterdamp tegelijk',
      ],
      correctIndex: 0,
      explanation: 'Naisolatie van een bestaande spouw gebeurt met losse korrels of vlokken (bijvoorbeeld glaswolvlokken of parels) die via boorgaten worden ingeblazen — starre platen zijn hiervoor ongeschikt.',
    },
    {
      id: 'B.16.bloom4.multi', toetstermCode: 'B.16.3', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor de isolatie van een plat dak dat ook belopen wordt (bijvoorbeeld een dakterras) is drukvastheid een belangrijke eis. Welke materialen komen hiervoor het meest in aanmerking?',
      options: ['PIR/PUR-platen', 'XPS (geëxtrudeerd polystyreen)', 'Losse glaswolvlokken zonder drukvaste toplaag', 'Zachte, niet-drukvaste isolatiedeken'],
      correctIndices: [0, 1],
      explanation: 'PIR/PUR en XPS zijn relatief drukvaste platen, geschikt onder belopen daken; losse vlokken en zachte dekens missen de benodigde drukvastheid voor een belast dakoppervlak.',
    },
  ],
}
