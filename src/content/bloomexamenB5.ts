import type { Question } from '../types/content'

/**
 * Bloom-examen — vijfde golf, sectie B. Nog hoger niveau dan ronde 1-4:
 * uitsluitend Evalueren/Synthese, met meerstaps-redeneervragen die twee of
 * meer begrippen tegelijk combineren en subtiele, bijna-goede afleiders.
 * GEEN open vragen. Nieuwe, niet overlappende feiten t.o.v. alle eerdere
 * bloomexamenB*-bestanden. Origineel geschreven.
 */
export const bloomExamenB5: Record<string, Question[]> = {
  'B.1': [
    {
      id: 'B.1.bloom5.mc', toetstermCode: 'B.1.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een architect kiest voor extra dikke, massieve gevels om zowel de thermische massa (comfort) als de architectonische uitstraling te versterken, maar dit vergroot ook de fundering en dus de bouwkosten. Welke conclusie over de Vitruvius-triade past hier het best?',
      options: [
        'De drie kwaliteiten kunnen elkaar onderling beïnvloeden: een keuze die schoonheid en bruikbaarheid (comfort) versterkt, kan tegelijk gevolgen hebben voor de haalbaarheid via de kosten van de stevigheid (constructie/fundering)',
        'Stevigheid, bruikbaarheid en schoonheid staan altijd volledig los van elkaar zonder enige onderlinge samenhang',
        'Extra gevelmassa heeft nooit invloed op de fundering', 'Kosten zijn nooit een relevante factor bij het afwegen van de triade',
      ],
      correctIndex: 0,
      explanation: 'De triade is geen los rijtje: ontwerpkeuzes voor schoonheid/comfort kunnen via de constructie (stevigheid) doorwerken in de kosten en haalbaarheid — de kwaliteiten hangen in de praktijk samen.',
    },
    {
      id: 'B.1.bloom5.multi', toetstermCode: 'B.1.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Bij de renovatie van een verouderd kantoorgebouw tot woningen blijkt de bestaande draagconstructie (stevigheid) een andere kolomstramien te hebben dan wenselijk voor een prettige woningindeling (bruikbaarheid). Welke conclusies zijn het meest gegrond?',
      options: [
        'Een bestaande stevigheidsoplossing kan de bruikbaarheid van een transformatieproject beperken',
        'Het ontwerpteam moet een afweging maken tussen het behouden van de bestaande constructie en het aanpassen ervan voor een betere indeling',
        'Bruikbaarheid en stevigheid kunnen bij transformaties nooit met elkaar conflicteren',
        'De kolomstramien van een kantoorgebouw is altijd optimaal voor woningbouw',
      ],
      correctIndices: [0, 1],
      explanation: 'Transformatieprojecten laten precies zien hoe stevigheid (bestaande constructie) en bruikbaarheid (gewenste indeling) kunnen botsen, wat een bewuste afweging vergt — niet elk kantoorstramien is zomaar geschikt voor wonen.',
    },
  ],
  'B.2': [
    {
      id: 'B.2.bloom5.mc', toetstermCode: 'B.2.1', type: 'mc', bloom: 'Synthese',
      prompt: 'Bij een woning worden tegelijk klachten gemeld over tocht bij de vloerplinten, een koud vloeroppervlak in de winter, en een lichte muffe geur. Welke combinatie van hoofdopbouw-elementen is het meest waarschijnlijk gezamenlijk betrokken?',
      options: [
        'De begane grondvloer én de kruipruimte-eronder (ventilatie, isolatie, luchtdichtheid)',
        'Uitsluitend het dak, los van de andere klachten',
        'Uitsluitend de gevelkozijnen op de verdieping',
        'Deze klachten hebben nooit een gemeenschappelijke oorzaak',
      ],
      correctIndex: 0,
      explanation: 'Tocht bij plinten, een koude vloer en een muffe geur wijzen gezamenlijk op de begane grondvloer/kruipruimte-combinatie: gebrekkige luchtdichtheid en isolatie, met vaak een ventilatie- of vochtprobleem eronder.',
    },
    {
      id: 'B.2.bloom5.multi', toetstermCode: 'B.2.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een taxateur ziet bij een opname zowel scheurvorming bij de fundering als vochtplekken bij de nok van het dak. Welke conclusies over de hoofdopbouw zijn het meest gegrond?',
      options: [
        'Dit zijn vermoedelijk twee onafhankelijke gebreken in verschillende elementengroepen (fundering vs. dak), die apart beoordeeld moeten worden',
        'Beide gebreken hebben per definitie dezelfde onderliggende oorzaak',
        'De hoofdopbouw bestaat uit afzonderlijke elementengroepen die elk hun eigen faalmechanismen kunnen hebben',
        'Vochtplekken bij de nok zeggen automatisch iets over de kwaliteit van de fundering',
      ],
      correctIndices: [0, 2],
      explanation: 'Fundering en dak zijn afzonderlijke elementengroepen met eigen, doorgaans onafhankelijke faalmechanismen (zetting versus bijvoorbeeld lekkage) — het is onzorgvuldig om zonder nader onderzoek één gezamenlijke oorzaak te veronderstellen.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.bloom5.mc', toetstermCode: 'B.3.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een balk met afmeting 40 × 60 mm wordt vervangen door een balk van 60 × 40 mm (dezelfde oppervlakte, maar liggend gedraaid). Wat gebeurt er met de weerstand tegen doorbuiging (W = 1/6·b·h²), aangenomen dat de belastingsrichting ongewijzigd blijft?',
      options: [
        'De weerstand neemt af, omdat de kleinere afmeting (40 mm) nu de hoogte is in plaats van de grotere (60 mm)',
        'De weerstand blijft exact gelijk, want de oppervlakte is ongewijzigd',
        'De weerstand neemt toe, want de breedte is nu groter',
        'De formule W = 1/6·b·h² is hier niet van toepassing omdat de oppervlakte gelijk blijft',
      ],
      correctIndex: 0,
      explanation: 'Bij 40×60 (h=60): W=1/6×40×60²=24.000; bij 60×40 (h=40): W=1/6×60×40²=16.000 — door de balk "op zijn kant" te leggen (kleinere maat als hoogte) neemt de weerstand tegen doorbuiging juist af, ondanks gelijke oppervlakte.',
    },
    {
      id: 'B.3.bloom5.multi', toetstermCode: 'B.3.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een constructeur berekent zowel de permanente als de variabele belasting op een vloer, en past daarna een veiligheidsmarge toe. Welke conclusies over dit proces zijn het meest gegrond?',
      options: [
        'De veiligheidsmarge compenseert voor onzekerheden in zowel de belastingaannames als het materiaalgedrag',
        'Permanente en variabele belastingen worden apart bepaald omdat ze een verschillend, tijdsafhankelijk karakter hebben',
        'Een veiligheidsmarge is alleen nodig bij variabele belastingen, nooit bij permanente', 'De uiteindelijke rekenwaarde is per definitie gelijk aan de som van beide belastingen zonder enige marge',
      ],
      correctIndices: [0, 1],
      explanation: 'Permanente (constant) en variabele (wisselend) belastingen hebben een verschillend karakter en worden apart bepaald; de veiligheidsmarge (v=3-5) geldt voor de totale berekening, niet uitsluitend voor het variabele deel.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.bloom5.mc', toetstermCode: 'B.4.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een historisch pand op houten paalfundering staat naast een nieuwbouwproject waar bronbemaling wordt toegepast zonder retoursysteem. Enkele maanden later ontstaan scheuren in het historische pand. Welke keten van oorzaak-gevolg is het meest waarschijnlijk?',
      options: [
        'De bemaling verlaagt tijdelijk de grondwaterstand, waardoor de houten paalkoppen boven het (verlaagde) grondwater komen, gaan rotten, en het pand ongelijkmatig verzakt',
        'De scheuren zijn per definitie het gevolg van veroudering van het metselwerk, los van de bemaling',
        'Bemaling heeft nooit invloed op belendende panden op houten paalfundering', 'De scheuren ontstaan doordat de nieuwbouw fysiek tegen het historische pand aan is gebouwd',
      ],
      correctIndex: 0,
      explanation: 'Dit is precies het mechanisme waarom bemaling bij kwetsbare belendingen (zoals houten paalfunderingen) risicovol is: tijdelijke grondwaterverlaging brengt paalkoppen droog te staan, met paalrot en verzakking tot gevolg — vandaar het belang van retourbemaling in zulke situaties.',
    },
    {
      id: 'B.4.bloom5.multi', toetstermCode: 'B.4.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een grondonderzoek combineert een boring (met geroerd monster) en een sondering op dezelfde locatie. Welke conclusies over de meerwaarde van deze combinatie zijn het meest gegrond?',
      options: [
        'De boring geeft inzicht in de daadwerkelijke grondsoort per laag, de sondering geeft een continue indicatie van de weerstand/draagkracht',
        'Beide methoden leveren exact dezelfde informatie, dus de combinatie is overbodig',
        'Samen geven boring en sondering een vollediger beeld dan elke methode afzonderlijk', 'Een sondering vervangt altijd volledig de noodzaak van een boring',
      ],
      correctIndices: [0, 2],
      explanation: 'Boring en sondering zijn complementair: de boring identificeert het materiaal, de sondering meet continu de weerstand — samen geven ze een vollediger beeld dan elke methode los.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.bloom5.mc', toetstermCode: 'B.5.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een spouwmuur toont zowel thermische haarscheurtjes verspreid over de gevel als een geconcentreerde, diagonale scheur bij een hoek van de fundering. Welke conclusie over de te vermoeden oorzaken is het meest zorgvuldig?',
      options: [
        'Dit zijn vermoedelijk twee verschillende mechanismen tegelijk: thermische werking (verspreide haarscheuren) én zetting (de geconcentreerde diagonale scheur bij de fundering)',
        'Beide scheurpatronen hebben altijd dezelfde oorzaak', 'Diagonale scheuren bij een hoek wijzen nooit op funderingsproblemen', 'Thermische scheuren en zettingsscheuren zijn visueel nooit van elkaar te onderscheiden',
      ],
      correctIndex: 0,
      explanation: 'Het scheurpatroon geeft een aanwijzing voor het mechanisme: verspreide, fijne haarscheuren wijzen op thermische werking, terwijl een geconcentreerde diagonale scheur bij een hoek klassiek is voor zetting — het combineren van patronen levert een genuanceerdere diagnose op.',
    },
    {
      id: 'B.5.bloom5.multi', toetstermCode: 'B.5.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een halfsteens buitenspouwblad wordt gekozen tussen een sterkere baksteen met een zwakkere mortel, of een zwakkere baksteen met een sterkere mortel — bij gelijke totale metselwerksterkte. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Een te sterke mortel in combinatie met een zwakkere steen kan bij zetting of vervorming eerder tot scheuren in de steen zelf leiden dan in de voeg',
        'De voeg fungeert vaak als "zwakke schakel" die scheurvorming kan opvangen zonder de stenen zelf te beschadigen',
        'De keuze tussen steen- en mortelsterkte heeft geen enkele invloed op het scheurgedrag van metselwerk',
        'Metselwerksterkte hangt uitsluitend af van de steen, nooit van de mortel',
      ],
      correctIndices: [0, 1],
      explanation: 'Een relatief zwakkere mortel (t.o.v. de steen) kan scheuren "opvangen" in de voeg in plaats van in de steen — een bewuste balans tussen steen- en mortelsterkte is dus relevant voor het scheurgedrag, niet alleen voor de totale sterkte.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.bloom5.mc', toetstermCode: 'B.6.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een betonnen balkon aan de noordzijde (weinig zon, vaak vochtig) vertoont eerder betonrot dan een vergelijkbaar balkon aan de zuidzijde van hetzelfde gebouw. Welke verklaring integreert de relevante factoren het best?',
      options: [
        'De noordzijde blijft langer vochtig (minder uitdroging door zon), wat het carbonatatie-/corrosieproces bij de wapening kan versnellen',
        'Betonrot hangt nooit samen met de gevelrichting of vochtblootstelling',
        'De zuidzijde is per definitie sterker gewapend dan de noordzijde',
        'Alleen de betonsamenstelling bepaalt het risico op betonrot, ongeacht klimaatblootstelling',
      ],
      correctIndex: 0,
      explanation: 'Langdurige vochtigheid (minder uitdroging op het noorden) bevordert het proces dat tot corrosie van de wapening leidt — de gevelrichting is dus wel degelijk relevant naast de betonsamenstelling zelf.',
    },
    {
      id: 'B.6.bloom5.multi', toetstermCode: 'B.6.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een constructeur kiest voor prefab beton bij een project met een zeer krappe bouwplaats en een strakke deadline, ondanks hogere transportkosten. Welke afwegingen liggen hieraan het meest ten grondslag?',
      options: [
        'Prefab verkort de bouwtijd op de (krappe) locatie zelf aanzienlijk', 'De kwaliteit van fabrieksproductie is minder afhankelijk van weersomstandigheden op de bouwplaats', 'Transportkosten wegen in dit geval minder zwaar dan de tijdswinst en beperkte ruimte op locatie', 'Prefab beton heeft nooit hogere transportkosten dan in-situ beton',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Bij een krappe locatie en strakke planning wegen tijdswinst en weersonafhankelijkheid vaak zwaarder dan extra transportkosten — een bewuste, contextafhankelijke afweging in plaats van een absolute regel.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.bloom5.mc', toetstermCode: 'B.7.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een staalskeletgebouw krijgt zowel diagonale windverbanden als brandwerende bekleding om het staal. Welke conclusie beschrijft de samenhang tussen deze twee maatregelen het best?',
      options: [
        'De windverbanden lossen een structureel (stabiliteits)probleem op, terwijl de brandwerende bekleding een heel ander risico (sterkteverlies bij brand) adresseert — het zijn twee onafhankelijke, complementaire maatregelen',
        'Windverbanden en brandwerende bekleding vervullen exact dezelfde functie',
        'Zodra windverbanden zijn toegepast, is brandwerende bekleding overbodig',
        'Brandwerende bekleding vervangt de noodzaak van windverbanden',
      ],
      correctIndex: 0,
      explanation: 'Windverbanden geven horizontale stabiliteit tegen windbelasting; brandwerende bekleding beschermt tegen sterkteverlies bij brand — twee losstaande risico\'s die elk hun eigen maatregel vergen.',
    },
    {
      id: 'B.7.bloom5.multi', toetstermCode: 'B.7.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een overkapping met grote overspanning wordt gekozen tussen hout, staal en beton. Welke overwegingen zijn het meest valide bij deze materiaalkeuze?',
      options: [
        'Staal heeft doorgaans de beste sterkte/gewicht-verhouding voor grote, slanke overspanningen',
        'Beton is zwaarder, wat een zwaardere fundering kan vergen bij dezelfde overspanning',
        'Hout kan bij grote overspanningen speciale (gelamineerde) constructies vergen om voldoende sterkte te bereiken',
        'De materiaalkeuze voor een overspanning heeft nooit gevolgen voor de fundering',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Staal is licht en sterk voor grote overspanningen, beton is zwaar (met funderingsgevolgen), en hout vergt bij grote overspanningen vaak gelamineerde balken — de materiaalkeuze werkt dus door in de hele constructie, inclusief fundering.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.bloom5.mc', toetstermCode: 'B.8.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een dakgoot combineert zink met stalen bevestigingsbeugels, en na enkele jaren wordt versnelde aantasting van het zink bij de contactpunten geconstateerd. Welke maatregel had dit vooraf het meest effectief voorkomen?',
      options: [
        'Een isolerende tussenlaag (bijvoorbeeld kunststof) tussen de twee metalen aanbrengen om direct contact en galvanische corrosie te voorkomen',
        'Extra stalen beugels toevoegen om het contactoppervlak te vergroten',
        'Het zink dikker uitvoeren zonder de materiaalcombinatie te wijzigen',
        'Dit kon niet voorkomen worden, contact tussen metalen is nooit een risico',
      ],
      correctIndex: 0,
      explanation: 'Galvanische corrosie ontstaat door direct contact tussen ongelijke metalen; een isolerende tussenlaag voorkomt dit contact en dus de versnelde aantasting — meer stalen beugels of dikker zink pakken de oorzaak niet aan.',
    },
    {
      id: 'B.8.bloom5.multi', toetstermCode: 'B.8.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een gevelbekleding combineert aluminium platen met koperen sierlijsten. Welke aandachtspunten horen bij deze materiaalcombinatie?',
      options: [
        'Risico op galvanische corrosie bij direct metaalcontact zonder scheiding', 'Verschillende thermische uitzettingscoëfficiënten die bij vaste bevestiging spanning kunnen geven', 'Aluminium en koper hebben altijd exact dezelfde uitzettingscoëfficiënt', 'Beide metalen zijn volledig immuun voor elke vorm van aantasting',
      ],
      correctIndices: [0, 1],
      explanation: 'Naast galvanische corrosie speelt ook thermische uitzetting een rol: verschillende metalen zetten verschillend uit, wat bij starre bevestiging spanningen kan geven — geen van beide metalen is immuun voor aantasting.',
    },
  ],
  'B.9': [
    {
      id: 'B.9.bloom5.mc', toetstermCode: 'B.9.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een houten vloerbalk vertoont zowel zwamaantasting als scheuren die wijzen op overbelasting. Wat is de meest zorgvuldige aanpak?',
      options: [
        'Beide gebreken apart beoordelen: de zwam vraagt om vochtbestrijding en eventuele vervanging van het aangetaste hout, de overbelasting om een constructieve herberekening — met het risico dat ze elkaar onderling verergeren',
        'Alleen de zwam behandelen, want overbelasting is bij hout nooit een reëel risico',
        'Alleen de overbelasting aanpakken, want zwam is altijd oppervlakkig en ongevaarlijk',
        'De twee gebreken hebben per definitie exact dezelfde oorzaak en aanpak',
      ],
      correctIndex: 0,
      explanation: 'Zwamaantasting verzwakt het hout, wat het risico op overbelasting kan vergroten (en omgekeerd kunnen overbelaste, doorbuigende balken vochtophoping bevorderen) — beide gebreken moeten dus apart én in onderlinge samenhang worden beoordeeld.',
    },
    {
      id: 'B.9.bloom5.multi', toetstermCode: 'B.9.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een buitentoepassing zonder onderhoud wordt gekozen tussen onbehandeld, duurzaam tropisch hardhout en thermisch gemodificeerd (verduurzaamd) naaldhout. Welke overwegingen zijn hierbij het meest relevant?',
      options: [
        'Tropisch hardhout heeft van nature een hoge duurzaamheidsklasse, maar roept vaak vragen op over herkomst en duurzame bosbouw',
        'Thermisch gemodificeerd naaldhout kan een duurzamer alternatief zijn met een kleinere ecologische voetafdruk',
        'Beide houtsoorten zijn in alle opzichten volledig gelijkwaardig zonder enig onderscheid',
        'Bij een keuze zonder onderhoud speelt duurzaamheidsklasse (tegen schimmel/aantasting) een reële rol',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Herkomst/duurzaam bosbeheer, ecologische voetafdruk en duurzaamheidsklasse zijn alle drie legitieme overwegingen bij deze keuze — de twee houtsoorten zijn dus niet zomaar gelijkwaardig.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.bloom5.mc', toetstermCode: 'B.10.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een houten kozijn heeft zowel een "ademende" verfopbouw als een correct uitgevoerde waterafvoer bij de dorpel, maar toch ontstaat na enkele jaren houtrot bij de onderregel. Wat is de meest waarschijnlijke, resterende verklaring?',
      options: [
        'Een lokaal gebrek in de detaillering of uitvoering (bijvoorbeeld een kier, beschadigde kitvoeg of ontbrekende druiplijst) dat losstaat van de verfopbouw en waterafvoer op zich',
        'De ademende verfopbouw is de oorzaak van de houtrot', 'Correcte waterafvoer bij de dorpel maakt houtrot elders in het kozijn onmogelijk', 'Dit bewijst dat houten kozijnen nooit duurzaam kunnen zijn',
      ],
      correctIndex: 0,
      explanation: 'Als de "grote" oorzaken (verfopbouw, dorpelafvoer) al correct zijn, ligt de verklaring waarschijnlijk in een lokaal detailleringsgebrek — vochtschade kan op meerdere, onafhankelijke manieren ontstaan.',
    },
    {
      id: 'B.10.bloom5.multi', toetstermCode: 'B.10.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een kozijninspectie combineert visuele controle (verfschade, kieren) met een vochtmeting in het hout. Welke conclusies over deze combinatie van methoden zijn het meest gegrond?',
      options: [
        'Visuele schade is niet altijd een betrouwbare indicator van de daadwerkelijke vochttoestand binnen in het hout',
        'Een vochtmeting kan beginnende rot detecteren vóórdat dit visueel zichtbaar is',
        'Zichtbare verfschade bewijst altijd dat er ook sprake is van houtrot',
        'De combinatie van beide methoden geeft een vollediger, vroegtijdiger beeld dan één methode alleen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Vochtmeting kan problemen detecteren vóór ze zichtbaar worden, en zichtbare schade zegt niet automatisch iets over de interne toestand — de combinatie van methoden is dus waardevoller dan elk apart, en visuele schade is geen bewijs op zich.',
    },
  ],
  'B.11': [
    {
      id: 'B.11.bloom5.mc', toetstermCode: 'B.11.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een opdrachtgever wil kunststof kozijnen (onderhoudsarm) combineren met een grote, structurele glaspui (waarvoor aluminium doorgaans slanker en sterker is). Wat is de meest genuanceerde aanbeveling?',
      options: [
        'Een hybride oplossing overwegen: kunststof voor de reguliere kozijnen en aluminium voor het structurele puigedeelte, om beide wensen te combineren',
        'Altijd volledig kunststof toepassen, ook voor de structurele pui, ongeacht de constructieve consequenties',
        'Altijd volledig aluminium toepassen, ook waar geen structurele eisen gelden',
        'Deze twee wensen (onderhoudsarm en slank/structureel) zijn nooit met elkaar te combineren in één project',
      ],
      correctIndex: 0,
      explanation: 'Materiaalkeuzes hoeven niet uniform te zijn: een gecombineerde aanpak (kunststof waar onderhoudsgemak telt, aluminium waar structurele slankheid nodig is) kan beide wensen het best combineren.',
    },
    {
      id: 'B.11.bloom5.multi', toetstermCode: 'B.11.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Bij de keuze tussen kunststof en aluminium kozijnen voor een project met streng budget spelen meerdere factoren. Welke overwegingen zijn het meest valide?',
      options: [
        'Kunststof is vaak in aanschaf voordeliger dan aluminium bij vergelijkbare afmetingen',
        'Aluminium kan door slankere profielen meer glasoppervlak (en dus meer daglicht/warmtewinst) geven bij dezelfde buitenmaat',
        'Budget is de enige relevante factor, esthetiek en functionaliteit spelen geen rol',
        'De levensduur en het onderhoudsprofiel van beide materialen kunnen de totale (levensduur)kosten beïnvloeden, los van de aanschafprijs',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Aanschafprijs, glasoppervlak/daglicht en levensduurkosten zijn alle drie legitieme, met elkaar samenhangende overwegingen — budget alleen als absolute factor doet geen recht aan de volledige afweging.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.bloom5.mc', toetstermCode: 'B.12.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning heeft een vochtige, slecht geventileerde kruipruimte én een matig geïsoleerde begane grondvloer. De bewoner klaagt zowel over een muffe geur als over hoge stookkosten. Welke maatregel adresseert beide klachten het meest gecombineerd?',
      options: [
        'De kruipruimte isoleren én ventileren in combinatie met vloerisolatie — dit pakt zowel het vochtprobleem als het warmteverlies gelijktijdig aan',
        'Alleen de verwarming verhogen, zonder de kruipruimte aan te pakken', 'Alleen de kruipruimteventilatie verbeteren, zonder naar isolatie te kijken', 'Deze twee klachten hebben per definitie niets met elkaar te maken',
      ],
      correctIndex: 0,
      explanation: 'Een gecombineerde aanpak (ventilatie tegen vocht, isolatie tegen warmteverlies) pakt beide onderliggende problemen tegelijk aan, in plaats van slechts één symptoom te bestrijden.',
    },
    {
      id: 'B.12.bloom5.multi', toetstermCode: 'B.12.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een taxateur vergelijkt een woning met een houten balklaag begane grondvloer met een vergelijkbare woning met een betonnen systeemvloer. Welke conclusies over de verschillen zijn het meest gegrond?',
      options: [
        'De houten vloer vraagt doorgaans meer aandacht voor kruipruimteventilatie om vochtschade te voorkomen',
        'De betonnen vloer is ongevoeliger voor houtrot en zwamaantasting',
        'Beide vloertypen hebben exact dezelfde onderhoudsbehoefte',
        'Het vloertype is nooit relevant bij de beoordeling van een bestaande woning',
      ],
      correctIndices: [0, 1],
      explanation: 'Het vloertype heeft reële gevolgen voor onderhoudsrisico\'s (vocht/houtrot bij hout versus ongevoeligheid bij beton) — relevant voor een zorgvuldige woningbeoordeling.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.bloom5.mc', toetstermCode: 'B.13.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een kapconstructie combineert spatkrachten (door een stijve dakplaat) met thermische lengteveranderingen van een betonnen latei in de gevel eronder. Welke conclusie over het resulterende scheurrisico is het meest genuanceerd?',
      options: [
        'Beide mechanismen kunnen onafhankelijk van elkaar tot scheurvorming leiden, en als ze op dezelfde locatie samenkomen kan het gecombineerde risico groter zijn dan bij elk mechanisme afzonderlijk',
        'Spatkrachten en thermische werking zijn in werkelijkheid hetzelfde fysische mechanisme',
        'Als de kapconstructie geen spatkrachten geeft, is er per definitie ook geen risico op scheuren door de latei',
        'Scheurrisico\'s door dakconstructie en gevelconstructie kunnen elkaar nooit beïnvloeden',
      ],
      correctIndex: 0,
      explanation: 'Spatkrachten (via de muurplaat) en thermische lengteverandering (via de latei) zijn twee onafhankelijke mechanismen die allebei tot scheuren kunnen leiden; als ze samenkomen op dezelfde plek in de gevel, kan het gecombineerde risico toenemen.',
    },
    {
      id: 'B.13.bloom5.multi', toetstermCode: 'B.13.2', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een plat dak boven een druk gebruikte dakterras wordt gekozen tussen EPDM en bitumen, met drukvastheid en levensduur als belangrijkste criteria. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'EPDM heeft doorgaans een langere levensduur en betere UV-bestendigheid dan bitumen',
        'Bij intensief belopen gebruik is een aanvullende, drukvaste beschermlaag boven de dakbedekking vaak nodig, ongeacht het gekozen materiaal',
        'De dakbedekking zelf is bij een belopen dakterras altijd voldoende drukvast zonder extra beschermlaag',
        'Levensduur is het enige relevante criterium, drukvastheid speelt geen rol bij een dakterras',
      ],
      correctIndices: [0, 1],
      explanation: 'EPDM presteert doorgaans beter op levensduur en UV-bestendigheid, maar bij intensief belopen gebruik is vrijwel altijd een aparte, drukvaste beschermlaag (bijvoorbeeld tegels op tegeldragers) nodig — drukvastheid is dus wel degelijk relevant.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.bloom5.mc', toetstermCode: 'B.14.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een trap moet voldoen aan zowel de comfortabele vuistregel (2×optrede + aantrede ≈ 63 cm) als een maximale optredehoogte volgens het Bbl, binnen een beperkte vloeroppervlakte. Wat is de meest genuanceerde aanpak bij een ontwerpconflict?',
      options: [
        'Een afweging maken tussen trapvorm (bijvoorbeeld een kwartslag of spiltrap) en beschikbare ruimte, met de Bbl-eis als harde ondergrens en de vuistregel als comfortrichtlijn',
        'De Bbl-eis altijd negeren als de ruimte krap is', 'De vuistregel is een harde wettelijke eis waar nooit van afgeweken mag worden', 'Ruimtegebrek is nooit een reden om de trapvorm aan te passen',
      ],
      correctIndex: 0,
      explanation: 'De Bbl-eis is een minimale, wettelijke ondergrens; de vuistregel is een comfortrichtlijn. Bij ruimtegebrek is het gangbaar om de trapvórm aan te passen (bijvoorbeeld een kwartslag) zodat aan de wettelijke eis wordt voldaan binnen de beschikbare ruimte.',
    },
    {
      id: 'B.14.bloom5.multi', toetstermCode: 'B.14.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Voor een gebouw met een verdiepingshoogte van 15 meter wordt gekozen tussen een tractielift en een hydraulische lift. Welke conclusies zijn het meest gegrond?',
      options: [
        'Een hydraulische lift is doorgaans minder geschikt voor grote hoogtes vanwege de benodigde cilinderlengte',
        'Een tractielift is voor grotere hoogtes doorgaans de gangbaardere keuze',
        'Beide liftsystemen zijn voor elke hoogte volledig gelijkwaardig',
        'De keuze van het liftsysteem heeft geen enkele relatie met de gebouwhoogte',
      ],
      correctIndices: [0, 1],
      explanation: 'Hydraulische liften zijn praktisch beperkt in hoogte door de benodigde cilinder; bij grotere hoogtes is een tractielift (kabelsysteem) de gangbaardere, praktischer toepasbare keuze.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.bloom5.mc', toetstermCode: 'B.15.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een kunststof onderdeel moet zowel herhaaldelijk lasbaar/repareerbaar zijn als bestand tegen hoge temperaturen zonder blijvend te vervormen. Welke conclusie over de materiaalkeuze is het meest genuanceerd?',
      options: [
        'Deze twee eisen kunnen deels conflicteren: thermoplasten zijn goed lasbaar/herbewerkbaar maar minder temperatuurbestendig qua vormvastheid, thermoharders zijn vormvast bij hitte maar niet opnieuw smeltbaar/lasbaar',
        'Thermoplasten en thermoharders voldoen altijd gelijk goed aan beide eisen',
        'Er bestaat geen enkel verschil in temperatuurgedrag tussen thermoplasten en thermoharders',
        'Lasbaarheid en temperatuurbestendigheid zijn nooit met elkaar in conflict',
      ],
      correctIndex: 0,
      explanation: 'Dit illustreert een klassieke trade-off: thermoplasten zijn herbewerkbaar maar zachter bij hitte, thermoharders zijn hittebestendiger in vormvastheid maar niet opnieuw te smelten — de ontwerper moet hierin een prioriteit kiezen.',
    },
    {
      id: 'B.15.bloom5.multi', toetstermCode: 'B.15.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor ondergrondse leidingen in agressieve grond (bijvoorbeeld met chemische belasting) wordt kunststof overwogen als alternatief voor metaal. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Kunststof is doorgaans beter bestand tegen chemische corrosie dan de meeste metalen',
        'Kunststof kan bij zeer hoge mechanische belasting minder geschikt zijn dan metaal',
        'Kunststof leidingen hebben nooit enige beperking, ongeacht de toepassing',
        'De keuze hangt af van de balans tussen chemische bestendigheid en mechanische belasting',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Kunststof scoort goed op chemische bestendigheid maar minder op zware mechanische belasting — de uiteindelijke keuze is een afweging tussen deze twee aspecten, niet een absolute superioriteit van één materiaal.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.bloom5.mc', toetstermCode: 'B.16.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Voor een dakrenovatie wordt gezocht naar isolatie die tegelijk drukvast (belopen dak), vochtongevoelig (platte dak-risico) en met een lage milieu-impact is. Welke afweging is hierbij het meest realistisch?',
      options: [
        'Geen enkel isolatiemateriaal scoort op alle drie de criteria tegelijk optimaal — een bewuste prioritering tussen drukvastheid, vochtbestendigheid en duurzaamheid is nodig',
        'PIR/PUR scoort automatisch het beste op alle drie de criteria zonder enige trade-off',
        'Milieu-impact is bij isolatiekeuzes altijd irrelevant zolang de technische eisen worden gehaald',
        'Drukvastheid en vochtbestendigheid zijn dezelfde eigenschap en hoeven niet apart beoordeeld te worden',
      ],
      correctIndex: 0,
      explanation: 'Drukvaste, vochtongevoelige materialen zoals PIR/PUR/XPS zijn vaak minder gunstig qua milieu-impact dan bijvoorbeeld minerale wol, die weer minder drukvast is — een reële trade-off die bewuste prioritering vergt.',
    },
    {
      id: 'B.16.bloom5.multi', toetstermCode: 'B.16.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woning krijgt zowel spouwmuurisolatie als dakisolatie in één renovatieproject. Welke conclusies over de onderlinge samenhang van deze maatregelen zijn het meest gegrond?',
      options: [
        'Zonder gelijktijdige aandacht voor ventilatie kan de gecombineerde luchtdichting tot vochtproblemen leiden',
        'De twee isolatiemaatregelen versterken elkaars effect op de totale warmteweerstand van de woning', 'Spouwmuur- en dakisolatie hebben nooit enige relatie met de ventilatiebehoefte', 'Het is nooit nodig om isolatiemaatregelen in samenhang met elkaar te beoordelen',
      ],
      correctIndices: [0, 1],
      explanation: 'Meerdere isolatiemaatregelen tegelijk versterken de totale isolatiewaarde, maar vergroten ook de noodzaak om de ventilatie in samenhang te herzien — geïsoleerde, luchtdichtere schillen vragen om voldoende gecontroleerde ventilatie.',
    },
  ],
}
