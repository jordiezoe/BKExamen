import type { Question } from '../types/content'

/**
 * Symbolen in bouwtekeningen (BL.9 t/m BL.12) — overhoring van de
 * gestandaardiseerde renvooi-symbolen die op Nederlandse bouw- en
 * installatietekeningen worden gebruikt (deuren, ramen, materialen,
 * elektra, sanitair, verwarming, ventilatie, trap en algemene aanduidingen).
 * De vragen en uitleg zijn origineel geschreven; de symbolen zelf zijn
 * zelfgetekend (zie components/SymbolIcon.tsx) op basis van de generieke,
 * gestandaardiseerde tekenconventie — geen overname van een specifieke bron.
 */
export const symbolenExamTopics: Record<string, Question[]> = {
  'BL.9': [
    {
      id: 'BL.9.q1', toetstermCode: 'BL.9.1', type: 'mc', symbol: 'deur-enkel',
      prompt: 'Bekijk het symbool hiernaast. Welk deurtype stelt dit voor op een plattegrond?',
      options: ['Enkele draaideur', 'Schuifdeur', 'Vouwdeur', 'Tourniquet (draaideur rond)'],
      correctIndex: 0,
      explanation: 'De rechte lijn is het deurblad, de gebogen (gestippelde) lijn erbij toont de kwartcirkel die het deurblad beschrijft bij het opendraaien.',
    },
    {
      id: 'BL.9.q2', toetstermCode: 'BL.9.1', type: 'mc', symbol: 'deur-dubbel',
      prompt: 'En dit symbool — welk deurtype is dit?',
      options: ['Dubbele draaideuren', 'Twee losse enkele deuren naast elkaar', 'Schuifdeur met twee panelen', 'Vouwdeur'],
      correctIndex: 0,
      explanation: 'Twee deurbladen die elk vanuit het midden naar hun eigen kant opendraaien: dubbele draaideuren, zoals bijvoorbeeld bij een openslaande tuindeur.',
    },
    {
      id: 'BL.9.q3', toetstermCode: 'BL.9.2', type: 'mc', symbol: 'raam-draai',
      prompt: 'Dit raamsymbool toont een rechthoek met twee lijnen die vanuit de bovenhoek en onderhoek van één zijde samenkomen in de tegenoverliggende hoek. Welk raamtype is dit?',
      options: ['Draairaam', 'Vast raam', 'Schuifraam', 'Tuimelraam'],
      correctIndex: 0,
      explanation: 'De twee lijnen die samenkomen in één punt vormen de "driehoek" die aangeeft om welke verticale as het raam draait — het scharnier zit aan de andere kant, waar de lijnen samenkomen.',
    },
    {
      id: 'BL.9.q4', toetstermCode: 'BL.9.2', type: 'mc', symbol: 'raam-draaikiep',
      prompt: 'Dit symbool lijkt op het draairaam, maar heeft er een extra gestippelde driehoek bovenaan bij. Welk raamtype geeft dit aan?',
      options: ['Draaikiepraam (kan zowel draaien als kiepen)', 'Vast raam', 'Klapraam dat alleen kan kiepen', 'Schuifraam'],
      correctIndex: 0,
      explanation: 'Een draaikiepraam combineert twee bewegingen: het kan als draairaam opzij opendraaien, of via het bovenscharnier "kiepen" (naar binnen kantelen). Op tekening wordt dit met twee driehoeksymbolen tegelijk aangegeven.',
    },
    {
      id: 'BL.9.q5', toetstermCode: 'BL.9.2', type: 'invul',
      prompt: 'Vul aan: bij raamsymbolen met een driehoek geeft een DOORGETROKKEN lijn meestal aan dat het raam naar ______ opendraait, en een gestippelde lijn dat het naar binnen draait.',
      acceptableAnswers: ['buiten'],
      explanation: 'De gangbare conventie is: volle lijn = naar buiten draaiend, stippellijn = naar binnen draaiend.',
    },
    {
      id: 'BL.9.q6', toetstermCode: 'BL.9.1', type: 'match',
      prompt: 'Koppel elke omschrijving van een deursymbool aan het juiste deurtype.',
      pairs: [
        { left: 'Deurblad met een pijl evenwijdig aan de wand, zonder draaiboog', right: 'Schuifdeur' },
        { left: 'Recht deurblad met een kwartcirkelboog vanaf het scharnierpunt', right: 'Enkele draaideur' },
        { left: 'Twee deurbladen die allebei vanuit het midden naar hun eigen kant draaien', right: 'Dubbele draaideur' },
        { left: 'Twee driehoekige panelen die als een harmonica tegen elkaar in vouwen', right: 'Vouwdeur' },
      ],
      explanation: 'Elk deursymbool laat direct zien hoe de deur beweegt: schuivend, draaiend om één punt, of vouwend.',
    },
    {
      id: 'BL.9.q7', toetstermCode: 'BL.9.1', type: 'open',
      prompt: 'Waarom is het voor een makelaar of taxateur handig om op een plattegrond direct te kunnen zien in welke richting een deur opendraait, bijvoorbeeld bij een kleine badkamer?',
      acceptableAnswers: [
        'De draairichting van een deur bepaalt hoeveel vrije (bruikbare) ruimte er in de kamer overblijft en of meubels of sanitair niet in de weg staan van de deurzwaai. Bij een kleine ruimte kan een verkeerd om draaiende deur de bruikbaarheid flink beperken, wat relevant is bij het beoordelen van de indeling en courantheid van een woning.',
      ],
      explanation: 'De deurzwaai (het kwartcirkelsymbool) laat zien welk deel van de vloer "geblokkeerd" wordt zodra de deur open staat — belangrijk voor de indelingsbeoordeling.',
    },
  ],

  'BL.10': [
    {
      id: 'BL.10.q1', toetstermCode: 'BL.10.1', type: 'mc', symbol: 'metselwerk',
      prompt: 'Welk materiaal stelt deze arcering met kleine, verspringende blokjes voor?',
      options: ['Metselwerk (baksteen)', 'Gewapend beton', 'Isolatiemateriaal', 'Kalkzandsteen'],
      correctIndex: 0,
      explanation: 'De verspringende, "gestapelde" blokjespatroon verwijst naar het metselverband van bakstenen.',
    },
    {
      id: 'BL.10.q2', toetstermCode: 'BL.10.1', type: 'mc', symbol: 'isolatie',
      prompt: 'En deze zigzag-arcering (een rij driehoekjes op een rij)?',
      options: ['Isolatiemateriaal', 'Gewapend beton', 'Natuursteen', 'Kalkzandsteen'],
      correctIndex: 0,
      explanation: 'De zigzag- of "trapezium"-arcering is de gangbare renvooi-aanduiding voor isolatiemateriaal, vaak te zien tussen twee spouwbladen.',
    },
    {
      id: 'BL.10.q3', toetstermCode: 'BL.10.1', type: 'mc', symbol: 'beton-gewapend',
      prompt: 'Dit symbool combineert een diagonale arcering met een gebogen zigzaglijn erin. Welk materiaal is dit?',
      options: ['Gewapend beton', 'Ongewapend (stort)beton', 'Metselwerk', 'Lichte scheidingswand'],
      correctIndex: 0,
      explanation: 'De diagonale arcering staat voor beton; de zigzaglijn erin symboliseert de wapeningsstaven — samen dus gewápend beton.',
    },
    {
      id: 'BL.10.q4', toetstermCode: 'BL.10.1', type: 'mc', symbol: 'kalkzandsteen',
      prompt: 'Welk materiaal geeft deze arcering van fijne, gelijkmatig verdeelde puntjes meestal aan?',
      options: ['Kalkzandsteen', 'Natuursteen', 'Isolatiemateriaal', 'Hout'],
      correctIndex: 0,
      explanation: 'Een fijne, regelmatige puntenarcering ("gestippeld") wordt vaak gebruikt voor kalkzandsteen, ter onderscheid van de bakstenen arcering van metselwerk.',
    },
    {
      id: 'BL.10.q5', toetstermCode: 'BL.10.2', type: 'invul',
      prompt: 'Vul aan: een wandsymbool dat bestaat uit twee dunne lijnen met een lichte, ijle vulling ertussen, geeft meestal een niet-dragende, ______ scheidingswand aan.',
      acceptableAnswers: ['lichte'],
      explanation: 'Lichte scheidingswanden (zoals gipsplaat op een metal-stud-frame) worden dunner en "lichter" getekend dan een dragende, steenachtige wand.',
    },
    {
      id: 'BL.10.q6', toetstermCode: 'BL.10.1', type: 'match',
      prompt: 'Koppel elke arcering-omschrijving aan het bijbehorende materiaal.',
      pairs: [
        { left: 'Effen, grijs gevuld vlak', right: 'Beton' },
        { left: 'Kruis- of zigzagarcering van driehoekjes', right: 'Isolatie' },
        { left: 'Verspringende, gestapelde blokjes', right: 'Metselwerk (baksteen)' },
        { left: 'Fijne, regelmatige puntjes', right: 'Kalkzandsteen' },
      ],
      explanation: 'Elke arcering is een vaste, herkenbare notatie voor één materiaalgroep — zo hoeft niet elk vlak apart met tekst benoemd te worden.',
    },
    {
      id: 'BL.10.q7', toetstermCode: 'BL.10.2', type: 'mc',
      prompt: 'Waarom gebruiken bouwtekeningen voor elk materiaal een vaste, herkenbare arcering in plaats van steeds een tekstlabel bij elk vlak te zetten?',
      options: [
        'Om de tekening overzichtelijk en snel "leesbaar" te houden, ook zonder dat elk vlak apart benoemd wordt',
        'Omdat tekst op een tekening wettelijk verboden is',
        'Omdat arceringen sneller te printen zijn dan tekst',
        'Om te voorkomen dat de aannemer de tekening kan kopiëren',
      ],
      correctIndex: 0,
      explanation: 'Vaste arceringen werken als een soort beeldtaal: wie de renvooi kent, herkent het materiaal in één oogopslag, zonder dat de tekening vol tekst komt te staan.',
    },
    {
      id: 'BL.10.q8', toetstermCode: 'BL.10.2', type: 'open',
      prompt: 'Je ziet op een doorsnede een buitenwand die van buiten naar binnen bestaat uit: een metselwerk-arcering, een isolatiearcering, en weer een metselwerk- of kalkzandsteen-arcering. Wat kun je uit deze opbouw afleiden over het type wand?',
      acceptableAnswers: [
        'Dit is een spouwmuur met isolatie: een buitenblad van baksteen, een geïsoleerde spouw, en een binnenblad (dragend) van baksteen of kalkzandsteen. Deze gelaagde opbouw met isolatie in het midden is de gangbare manier om een geïsoleerde, dubbelbladige buitengevel te herkennen op een doorsnede.',
      ],
      explanation: 'De volgorde buitenblad – isolatie – binnenblad is precies de klassieke opbouw van een geïsoleerde spouwmuur.',
    },
  ],

  'BL.11': [
    {
      id: 'BL.11.q1', toetstermCode: 'BL.11.1', type: 'mc', symbol: 'elektra-schakelaar',
      prompt: 'Welk installatieonderdeel stelt dit elektrasymbool voor (cirkel met een kort lijntje en een gestippelde leiding)?',
      options: ['Schakelaar', 'Wandcontactdoos', 'Rookmelder', 'Aansluitpunt verlichting'],
      correctIndex: 0,
      explanation: 'Een schakelaar wordt op elektratekeningen vaak als een kleine cirkel met een kort schuin streepje weergegeven, verbonden met een (gestippelde) leiding naar het te schakelen punt.',
    },
    {
      id: 'BL.11.q2', toetstermCode: 'BL.11.1', type: 'mc', symbol: 'elektra-wcd',
      prompt: 'En dit symbool (cirkel met twee korte streepjes naar binnen)?',
      options: ['Wandcontactdoos (stopcontact)', 'Lichtpunt', 'Schakelaar', 'Rookmelder'],
      correctIndex: 0,
      explanation: 'De twee streepjes in de cirkel verwijzen naar de contactpennen van een stopcontact — de wandcontactdoos (wcd).',
    },
    {
      id: 'BL.11.q3', toetstermCode: 'BL.11.1', type: 'mc', symbol: 'elektra-lichtpunt-plafond',
      prompt: 'Welk installatieonderdeel geeft een cirkel met een kruis erin meestal aan?',
      options: ['Een lichtpunt (aansluitpunt verlichting) aan het plafond', 'Een wandcontactdoos', 'Een rookmelder', 'Een schakelaar'],
      correctIndex: 0,
      explanation: 'Een cirkel met een kruis erin is de gangbare aanduiding voor een plafond-lichtpunt (aansluitpunt voor een verlichtingsarmatuur).',
    },
    {
      id: 'BL.11.q4', toetstermCode: 'BL.11.2', type: 'invul',
      prompt: 'Vul aan: bij elektrasymbolen voor een aansluitpunt geeft een GEVULDE (dichte) bol vaak aan dat het punt al ______ is, terwijl een open bol nog onbedraad is.',
      acceptableAnswers: ['bedraad'],
      explanation: 'Dit is een gangbaar onderscheid in installatietekeningen: dicht = bedraad/bekabeld, open = (nog) onbedraad.',
    },
    {
      id: 'BL.11.q5', toetstermCode: 'BL.11.3', type: 'mc', symbol: 'verwarming-radiator',
      prompt: 'Welk verwarmingsonderdeel stelt dit symbool (rechthoek met verticale ribbels) voor?',
      options: ['Radiator', 'Cv-ketel', 'Vloerverwarmingsverdeler', 'Thermostaat'],
      correctIndex: 0,
      explanation: 'De verticale ribbels binnen de rechthoek verbeelden de lamellen van een radiator.',
    },
    {
      id: 'BL.11.q6', toetstermCode: 'BL.11.3', type: 'mc', symbol: 'verwarming-vloerverwarming',
      prompt: 'Dit symbool toont een kronkelende (slangvormige) lijn binnen een vlak. Welk verwarmingssysteem geeft dit weer?',
      options: ['Vloerverwarming', 'Radiator', 'Cv-ketel', 'Warmtepomp buitenunit'],
      correctIndex: 0,
      explanation: 'De kronkelende lijn stelt de verwarmingsslang voor die in lussen door de vloer loopt — het herkenningsteken van vloerverwarming op een installatietekening.',
    },
    {
      id: 'BL.11.q7', toetstermCode: 'BL.11.4', type: 'mc', symbol: 'ventilatie-afzuigpunt',
      prompt: 'Wat geeft dit ventilatiesymbool (cirkel met kruis en een pijl die van de cirkel af wijst) aan?',
      options: [
        'Een afzuigpunt: hier wordt lucht uit de ruimte afgevoerd',
        'Een toevoerpunt: hier komt verse lucht de ruimte in',
        'Een rookmelder',
        'Een schakelaar voor de ventilatie',
      ],
      correctIndex: 0,
      explanation: 'De pijl die van het symbool áf wijst, geeft de richting van de luchtstroom aan: lucht verlaat de ruimte via dit punt — dus een afzuigpunt.',
    },
    {
      id: 'BL.11.q8', toetstermCode: 'BL.11.1', type: 'match',
      prompt: 'Koppel elke installatie-afkorting aan de juiste betekenis.',
      pairs: [
        { left: 'mv', right: 'Mechanische ventilatie' },
        { left: 'wcd', right: 'Wandcontactdoos' },
        { left: 'hwa', right: 'Hemelwaterafvoer' },
        { left: 'cv', right: 'Centrale verwarming' },
      ],
      explanation: 'Deze afkortingen kom je vrijwel op elke Nederlandse installatietekening tegen, meestal in of naast het symbool zelf.',
    },
    {
      id: 'BL.11.q9', toetstermCode: 'BL.11.1', type: 'open',
      prompt: 'Leg uit waarom het herkennen van elektra- en installatiesymbolen op een tekening nuttig kan zijn voor een makelaar tijdens een bezichtiging of taxatie.',
      acceptableAnswers: [
        'Door installatiesymbolen te herkennen kan een makelaar zonder de tekening letterlijk te hoeven "vertalen" snel zien waar bijvoorbeeld stopcontacten, verwarming of ventilatiepunten gepland zijn, of een woning goed voorzien is van deze voorzieningen, en of de installatie overeenkomt met wat er in werkelijkheid aanwezig is — nuttig bij het beoordelen van de kwaliteit en compleetheid van een woning.',
      ],
      explanation: 'Installatietekeningen laten in één oogopslag zien wat er (gepland) aanwezig is; symbolen herkennen voorkomt dat een makelaar dit moet gokken of navragen.',
    },
  ],

  'BL.12': [
    {
      id: 'BL.12.q1', toetstermCode: 'BL.12.1', type: 'mc', symbol: 'sanitair-wc',
      prompt: 'Welk sanitair toestel stelt dit symbool (ovale kom met een rechthoekig reservoir erachter) voor?',
      options: ['Toilet (wc)', 'Wastafel', 'Bidet', 'Douchebak'],
      correctIndex: 0,
      explanation: 'De ovale pot met het rechthoekige spoelreservoir erachter is de klassieke bovenaanzicht-weergave van een toilet.',
    },
    {
      id: 'BL.12.q2', toetstermCode: 'BL.12.1', type: 'mc', symbol: 'sanitair-douche',
      prompt: 'En dit symbool (vierkant met een diagonale gestippelde lijn en een stip in het midden)?',
      options: ['Douche(bak)', 'Bad', 'Wastafel', 'Wc'],
      correctIndex: 0,
      explanation: 'Het vierkant is de douchebak, de stip in het midden is de afvoer(put); de diagonale lijn geeft vaak het (optionele) afschot naar de afvoer aan.',
    },
    {
      id: 'BL.12.q3', toetstermCode: 'BL.12.1', type: 'mc', symbol: 'sanitair-bad',
      prompt: 'Welk sanitair toestel geeft deze langwerpige, afgeronde vorm (een rechthoek in een rechthoek) weer?',
      options: ['Bad/badkuip', 'Douchebak', 'Wastafel', 'Wc'],
      correctIndex: 0,
      explanation: 'De langwerpige, afgeronde buitenvorm met een iets kleinere binnenvorm stelt de kuip en de rand van een ligbad voor.',
    },
    {
      id: 'BL.12.q4', toetstermCode: 'BL.12.2', type: 'mc', symbol: 'trap-pijl',
      prompt: 'Wat geeft de pijl bij dit trapsymbool op een plattegrond aan?',
      options: [
        'De looprichting omhoog, naar de volgende bouwlaag',
        'De draairichting van de voordeur',
        'De noordrichting van het gebouw',
        'De afvoerrichting van het hemelwater',
      ],
      correctIndex: 0,
      explanation: 'Bij een trapsymbool wijst de pijl altijd de richting aan waarin je omhóóg loopt (naar de volgende, hogere bouwlaag).',
    },
    {
      id: 'BL.12.q5', toetstermCode: 'BL.12.3', type: 'mc', symbol: 'noordpijl',
      prompt: 'Waar staat dit symbool (een pijl in een cirkel met een N) op elke plattegrond en situatietekening voor?',
      options: ['Het noorden — de oriëntatie van de tekening', 'Het peil (referentiehoogte)', 'De hemelwaterafvoer', 'De trapopgang'],
      correctIndex: 0,
      explanation: 'De noordpijl geeft aan hoe de tekening ten opzichte van het noorden is georiënteerd — belangrijk om bijvoorbeeld de bezonning van een woning te kunnen beoordelen.',
    },
    {
      id: 'BL.12.q6', toetstermCode: 'BL.12.4', type: 'mc', symbol: 'peil',
      prompt: 'Wat geeft dit symbool (een driehoek op een horizontale lijn, met de letter P) aan?',
      options: [
        'Het peil: het afgesproken referentieniveau (nulpunt) waaraan andere hoogtematen worden gerelateerd',
        'De exacte hoogte boven NAP van het gebouw',
        'De dikte van de begane grondvloer',
        'De noordrichting van de tekening',
      ],
      correctIndex: 0,
      explanation: 'Dit driehoeksymbool met een P is de gangbare aanduiding van het peil — het projectgebonden nulpunt waar hoogtematen als "+ P" naar verwijzen.',
    },
    {
      id: 'BL.12.q7', toetstermCode: 'BL.12.5', type: 'invul',
      prompt: 'Vul aan: het symbool voor een hemelwaterafvoer wordt op tekening meestal afgekort met de letters ______.',
      acceptableAnswers: ['hwa'],
      explanation: 'HWA staat voor hemelwaterafvoer — de leiding die regenwater van dak en verharding afvoert.',
    },
    {
      id: 'BL.12.q8', toetstermCode: 'BL.12.2', type: 'open',
      prompt: 'Op de plattegrond van de begane grond zie je bij een trap een pijl die naar boven wijst; op de plattegrond van de verdieping zie je bij diezelfde trap juist een pijl die naar beneden wijst. Waarom is dat logisch, en waarom is het belangrijk om de pijlrichting goed te lezen?',
      acceptableAnswers: [
        'Op de begane grond geeft de pijl de richting omhóóg (naar de verdieping) aan, en op de verdieping geeft de pijl bij dezelfde trap de richting omláág (terug naar de begane grond) aan — beide pijlen beschrijven dezelfde trap, maar vanuit het perspectief van de bouwlaag waar je op staat. Het is belangrijk om dit goed te lezen omdat je anders een trap kunt verwarren met bijvoorbeeld een vlizotrap naar een zolder, of de looprichting en het aantal treden verkeerd inschat.',
      ],
      explanation: 'Trapsymbolen worden altijd getekend vanuit het perspectief van de bouwlaag: de pijl toont steeds de richting waarin je van díe verdieping af omhoog loopt.',
    },
  ],
}
