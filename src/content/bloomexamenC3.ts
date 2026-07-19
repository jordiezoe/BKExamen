import type { Question } from '../types/content'

/**
 * Bloom-examen — derde golf, sectie C. Zwaarder qua niveau dan ronde 1 en 2:
 * vooral Analyseren/Evalueren/Synthese, met casusvragen. Nieuwe, niet
 * overlappende feiten t.o.v. bloomexamenC.ts en bloomexamenC2.ts. Origineel
 * materiaal.
 */
export const bloomExamenC3: Record<string, Question[]> = {
  'C.1': [
    {
      id: 'C.1.bloom3.mc', toetstermCode: 'C.1.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij hevige regenval loopt een kruipruimte regelmatig onder water, terwijl de buurwoning met een vergelijkbare fundering dit probleem niet heeft. Wat is een plausibele verklaring, gerelateerd aan de riolering?',
      options: [
        'De hemelwaterafvoer van deze woning is mogelijk aangesloten op hetzelfde (verstopte of te krap bemeten) systeem, of loopt lokaal anders af',
        'Kruipruimtes staan nooit in verbinding met de riolering',
        'Dit kan nooit met de riolering te maken hebben',
        'De woning heeft per definitie een verkeerd type dakpannen',
      ],
      correctIndex: 0,
      explanation: 'Lokale water- of afvoerproblemen (verstopping, ondermaatse afvoer, foutieve aansluiting) kunnen leiden tot water in de kruipruimte, ook als de buurwoning hier geen last van heeft.',
    },
    {
      id: 'C.1.bloom3.multi', toetstermCode: 'C.1.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voordelen heeft een gescheiden rioolstelsel ten opzichte van een gemengd stelsel?',
      options: [
        'Minder belasting van de rioolwaterzuivering bij hevige regenval',
        'Schoon hemelwater kan direct worden geloosd op oppervlaktewater of infiltreren',
        'Een gescheiden stelsel heeft nooit onderhoud nodig',
        'Minder kans op overstorten van verontreinigd water bij piekbuien',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Door vuil- en hemelwater apart af te voeren wordt de zuivering ontlast, kan schoon regenwater direct worden geloosd of infiltreren, en is er minder kans op overstort van vervuild water — onderhoud blijft echter altijd nodig.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.bloom3.mc', toetstermCode: 'C.2.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een leidingwaterinstallatie staat wekenlang stil (bijvoorbeeld een vakantiewoning) en bij terugkeer wordt bruinig water uit de kraan getapt. Wat is hiervoor de meest waarschijnlijke verklaring?',
      options: [
        'Stilstaand water in de leidingen kan leiden tot afzetting/corrosie in de leiding die loskomt bij hernieuwd gebruik',
        'Het drinkwaterbedrijf heeft de samenstelling van het water veranderd',
        'Dit duidt altijd op een gaslek',
        'Dit is een normaal verschijnsel zonder enige oorzaak',
      ],
      correctIndex: 0,
      explanation: 'Langdurig stilstaand water kan leiden tot corrosie of afzettingen in de leiding; bij hernieuwd gebruik komt dit los en verkleurt het eerst getapte water.',
    },
    {
      id: 'C.2.bloom3.multi', toetstermCode: 'C.2.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen verminderen het risico op legionellagroei in een waterinstallatie?',
      options: [
        'Warm water op voldoende hoge temperatuur houden (rond de 60°C bij de boiler)',
        'Dode leidingeinden (stilstaand water) vermijden',
        'Leidingen juist zo lang mogelijk laten stilstaan zonder doorspoeling',
        'Regelmatige doorstroming van zelden gebruikte tappunten',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Voldoende hoge temperatuur, het vermijden van dode leidingeinden en regelmatige doorstroming beperken legionellagroei; langdurig laten stilstaan werkt juist averechts.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.bloom3.mc', toetstermCode: 'C.3.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een bewoner ruikt een lichte gaslucht bij de gasmeter. Wat is de juiste eerste vervolgstap?',
      options: [
        'Ramen openen, geen open vuur of schakelaars gebruiken en direct de netbeheerder/monteur bellen',
        'Een lucifer aansteken om te controleren waar het lek precies zit',
        'Wachten tot de geur vanzelf verdwijnt',
        'Alleen de gasmeter zelf proberen te repareren',
      ],
      correctIndex: 0,
      explanation: 'Bij gaslucht is de juiste respons: ventileren, geen vonkbronnen (schakelaars, open vuur) gebruiken en direct professionele hulp inschakelen — nooit zelf een vlam gebruiken om te "testen".',
    },
    {
      id: 'C.3.bloom3.multi', toetstermCode: 'C.3.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een gemeente kondigt aan dat een hele wijk de komende jaren van het aardgas afgaat. Welke gevolgen zijn voor bewoners het meest waarschijnlijk?',
      options: [
        'De gasgestookte cv-ketel moet worden vervangen door een alternatief zoals een warmtepomp of aansluiting op een warmtenet',
        'Het elektriciteitsnet moet mogelijk verzwaard worden bij een overstap naar all-electric',
        'De woning heeft daarna automatisch een hoger energielabel, zonder verdere ingrepen',
        'Koken op gas is meestal niet langer mogelijk en vraagt een alternatief zoals inductie',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Van het aardgas af betekent doorgaans een ander verwarmingssysteem, mogelijk een netverzwaring en een ander kooktoestel; het energielabel verbetert niet vanzelf zonder daadwerkelijke ingrepen zoals isolatie.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.bloom3.mc', toetstermCode: 'C.4.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij het aansluiten van een nieuwe warmtepomp en een elektrische auto-oplaadpaal in dezelfde woning schakelt de hoofdzekering regelmatig uit. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'De totale gelijktijdige stroomvraag overschrijdt de capaciteit van de bestaande aansluiting',
        'De warmtepomp en de laadpaal mogen nooit in dezelfde meterkast staan',
        'Dit duidt altijd op een defecte aardlekschakelaar',
        'Dit heeft niets met de elektra-aansluiting te maken',
      ],
      correctIndex: 0,
      explanation: 'Extra grootverbruikers zoals een warmtepomp en laadpaal kunnen de bestaande aansluitcapaciteit overschrijden, met uitval als gevolg — vaak is dan een verzwaring van de aansluiting nodig.',
    },
    {
      id: 'C.4.bloom3.multi', toetstermCode: 'C.4.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke functies heeft een aardlekschakelaar in een elektrische installatie?',
      options: [
        'Het detecteren van lekstroom (bijvoorbeeld door een beschadigde kabel of aanraking)',
        'Het automatisch afschakelen van de groep bij gevaarlijke lekstroom',
        'Het beveiligen tegen kortsluiting op zichzelf, los van lekstroom',
        'Bescherming van personen tegen elektrocutiegevaar',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Een aardlekschakelaar detecteert lekstroom en schakelt de groep af om elektrocutiegevaar te voorkomen; beveiliging tegen kortsluiting is primair de taak van de installatieautomaat (zekering), niet van de aardlekschakelaar.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.bloom3.mc', toetstermCode: 'C.5.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een huiseigenaar overweegt zonnepanelen, maar het dakvlak ligt op het noorden. Wat is de meest realistische verwachting?',
      options: [
        'De opbrengst zal duidelijk lager zijn dan bij een zuidgericht dak, al is enige opbrengst nog mogelijk',
        'De opbrengst is exact gelijk aan een zuidgericht dak',
        'Zonnepanelen werken helemaal niet op een noordgericht dak',
        'De opbrengst wordt juist hoger door minder oververhitting van de panelen',
      ],
      correctIndex: 0,
      explanation: 'Een noordgericht dak ontvangt beduidend minder directe zoninstraling dan een zuidgericht dak, wat de opbrengst merkbaar verlaagt — al leveren de panelen nog altijd iets op via diffuus licht.',
    },
    {
      id: 'C.5.bloom3.multi', toetstermCode: 'C.5.5', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke factoren beïnvloeden de opbrengst van een PV-installatie?',
      options: [
        'De oriëntatie (windrichting) van het dakvlak', 'De hellingshoek van het dak', 'Schaduw van bomen of buurpanden', 'De kleur van de dakpannen onder de panelen',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Oriëntatie, hellingshoek en schaduw zijn bepalend voor de opbrengst; de kleur van de onderliggende dakpannen heeft geen relevante invloed.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.bloom3.mc', toetstermCode: 'C.6.5', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een woning met lagetemperatuurverwarming (vloerverwarming) wordt gekoppeld aan een oude cv-ketel die is ingesteld op een hoge aanvoertemperatuur. Wat is het meest waarschijnlijke gevolg?',
      options: [
        'Een lager rendement en minder comfortabele regeling dan bij een op lage temperatuur afgestemd systeem',
        'Geen enkel effect, temperatuur van de ketel maakt niets uit',
        'De vloerverwarming gaat juist sneller warm worden zonder nadelen',
        'Dit levert altijd een hoger energielabel op',
      ],
      correctIndex: 0,
      explanation: 'Lagetemperatuurverwarming werkt het efficiëntst met een bron die is afgestemd op lage aanvoertemperaturen; een ketel die op hoge temperatuur draait, verlaagt het rendement en de regelbaarheid van het systeem.',
    },
    {
      id: 'C.6.bloom3.multi', toetstermCode: 'C.6.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke uitspraken over een hybride warmtepomp zijn juist?',
      options: [
        'Het combineert een warmtepomp met een (vaak bestaande) cv-ketel',
        'De warmtepomp levert het grootste deel van de warmtevraag, de ketel springt bij op de koudste dagen',
        'Een hybride warmtepomp maakt een gasaansluiting altijd volledig overbodig',
        'Het kan een tussenstap zijn naar volledig all-electric verwarmen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Een hybride warmtepomp combineert beide bronnen, waarbij de ketel alleen bijspringt op koude dagen — de gasaansluiting blijft dus nog nodig, in tegenstelling tot volledig all-electric.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.bloom3.mc', toetstermCode: 'C.7.2', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een kantoorruimte met veel glas en zuidoriëntatie wordt \'s zomers snel te warm, ook met de ramen open. Welke maatregel pakt de oorzaak het meest structureel aan?',
      options: [
        'Buitenzonwering die de zoninstraling al vóór het glas tegenhoudt',
        'Extra kunstverlichting toevoegen',
        'De vloerbedekking vervangen door een donkerder kleur',
        'De plafondhoogte verlagen',
      ],
      correctIndex: 0,
      explanation: 'Buitenzonwering houdt de zonnewarmte al tegen vóórdat deze het glas bereikt en is daarmee veel effectiever dan binnenzonwering of andere maatregelen die niets aan de instraling zelf doen.',
    },
    {
      id: 'C.7.bloom3.multi', toetstermCode: 'C.7.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voordelen heeft warmteterugwinning (WTW) bij mechanische ventilatie?',
      options: [
        'Warmte uit de afgevoerde binnenlucht wordt overgedragen aan de inkomende buitenlucht',
        'Minder stookenergie nodig in de winter dan zonder WTW',
        'WTW zorgt automatisch voor volledige koeling in de zomer',
        'Bijdrage aan een beter energielabel',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'WTW hergebruikt warmte uit afgevoerde lucht, bespaart stookenergie en helpt het energielabel; het is geen koelsysteem en zorgt niet automatisch voor zomerkoeling.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.bloom3.mc', toetstermCode: 'C.8.5', type: 'mc', bloom: 'Analyseren',
      prompt: 'In een appartementengebouw wordt de galerij (vluchtweg) gebruikt om fietsen te stallen. Waarom is dit vanuit brandveiligheid problematisch?',
      options: [
        'Het belemmert een vrije, snelle vluchtroute en kan brandoverslag/brandbare belasting toevoegen',
        'Fietsen zijn onbrandbaar en vormen dus geen enkel risico',
        'Dit is alleen esthetisch een probleem, niet veiligheidstechnisch',
        'Vluchtwegen hoeven volgens het Bbl nooit vrij te blijven',
      ],
      correctIndex: 0,
      explanation: 'Objecten in een vluchtweg belemmeren de doorgang bij een calamiteit en kunnen bovendien zelf brandbare last vormen — het Bbl stelt daarom eisen aan vrije, obstakelvrije vluchtwegen.',
    },
    {
      id: 'C.8.bloom3.multi', toetstermCode: 'C.8.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen dragen bij aan het beperken van branduitbreiding tussen twee woningen in een rijtjeswoning?',
      options: [
        'Een brandwerende scheidingswand tussen de woningen', 'Brandwerende doorvoeren bij leidingen die de wand passeren', 'Zo veel mogelijk openingen in de scheidingswand voor luchtcirculatie', 'Correct gedimensioneerde brandwerendheid van de vloer tussen verdiepingen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Brandwerende scheidingswanden, brandwerende doorvoeren en voldoende brandwerendheid van vloeren beperken branduitbreiding; extra openingen in een scheidingswand doen juist het tegenovergestelde.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.bloom3.mc', toetstermCode: 'C.9.6', type: 'mc', bloom: 'Evalueren',
      prompt: 'Na het extra isoleren en luchtdicht maken van een woning ontstaat meer condens op de ramen dan voorheen. Wat is de meest waarschijnlijke verklaring?',
      options: [
        'De woning is luchtdichter geworden, waardoor de bestaande ventilatie niet meer voldoende vocht afvoert',
        'Isoleren veroorzaakt altijd meer vocht, ongeacht de ventilatie',
        'Dit duidt op een defecte cv-ketel',
        'Condens op ramen heeft nooit met ventilatie te maken',
      ],
      correctIndex: 0,
      explanation: 'Een luchtdichtere schil vermindert de "natuurlijke" ongecontroleerde ventilatie via kieren; als het ventilatiesysteem niet wordt aangepast/opgehoogd, kan vocht minder goed worden afgevoerd en neemt condens toe.',
    },
    {
      id: 'C.9.bloom3.multi', toetstermCode: 'C.9.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke kenmerken horen bij ventilatiesysteem D (gebalanceerde ventilatie)?',
      options: [
        'Zowel toevoer als afvoer gebeurt mechanisch', 'Vaak gecombineerd met warmteterugwinning (WTW)', 'De toevoer gebeurt via natuurlijke roosters in de gevel', 'Kan een hoger wooncomfort geven door filtering en temperatuurbeheersing van de toegevoerde lucht',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Systeem D werkt volledig mechanisch (toe- én afvoer), vaak met WTW en filtering — natuurlijke toevoer via gevelroosters hoort juist bij systeem A of C, niet bij D.',
    },
  ],
  'C.10': [
    {
      id: 'C.10.bloom3.mc', toetstermCode: 'C.10.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een koper hecht veel waarde aan een inbraakveilige woning met het Politiekeurmerk Veilig Wonen (PKVW). Waar moet in elk geval op gelet worden?',
      options: [
        'Of ramen, deuren en hang- en sluitwerk daadwerkelijk aan de PKVW-eisen voldoen, niet alleen de voordeur',
        'Alleen de voordeur hoeft aan de eisen te voldoen, de rest van de woning niet',
        'PKVW zegt alleen iets over de brandveiligheid van de woning',
        'PKVW is een keurmerk voor energiezuinigheid, niet voor inbraakpreventie',
      ],
      correctIndex: 0,
      explanation: 'Het PKVW beoordeelt de hele woningschil (ramen, deuren, hang- en sluitwerk) op inbraakwerendheid — een sterke voordeur alleen is onvoldoende als andere toegangen zwak blijven.',
    },
    {
      id: 'C.10.bloom3.multi', toetstermCode: 'C.10.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke voorzieningen kunnen onderdeel zijn van een domoticasysteem in een woning?',
      options: ['Op afstand bedienbare verlichting', 'Automatische zonwering op basis van zoninstraling', 'Slimme rookmelders met app-notificatie', 'De positie van de fundering'],
      correctIndices: [0, 1, 2],
      explanation: 'Domotica automatiseert en verbindt installaties zoals verlichting, zonwering en rookmelders; de fundering is een bouwkundig element, geen domotica-onderdeel.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.bloom3.mc', toetstermCode: 'C.11.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een woning heeft grote raampartijen op het zuiden en de bewoner klaagt over oververhitting in de zomer, ondanks HR++ beglazing. Welke glaseigenschap is hier het meest relevant om te verbeteren?',
      options: [
        'De ZTA-waarde (zontoetredingsfactor) verlagen, bijvoorbeeld met zonwerend glas',
        'De U-waarde nog verder verlagen',
        'De glasdikte vergroten zonder de coating te wijzigen',
        'Het glas vervangen door enkel glas',
      ],
      correctIndex: 0,
      explanation: 'HR++ glas is vooral geoptimaliseerd voor isolatie (lage U-waarde), niet per se voor het weren van zonnewarmte; een lagere ZTA-waarde (zonwerend glas) pakt oververhitting gerichter aan.',
    },
    {
      id: 'C.11.bloom3.multi', toetstermCode: 'C.11.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'In welke situaties schrijft het Bbl doorgaans veiligheidsglas voor?',
      options: [
        'Bij beglazing dicht bij de vloer in loopdeuren', 'Bij glazen balustrades', 'Bij alle beglazing in een woning, zonder uitzondering', 'Bij glas in vochtige ruimtes zoals een badkamer op een kwetsbare plek',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Veiligheidsglas is voorgeschreven op plekken met verhoogd letselrisico, zoals lage beglazing in deuren, balustrades en kwetsbare plekken in vochtige ruimtes — niet bij alle beglazing zonder onderscheid.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.bloom3.mc', toetstermCode: 'C.12.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een woningeigenaar wil de inbraakwerendheid van de voordeur verbeteren met een beperkt budget. Wat levert doorgaans de grootste verbetering op?',
      options: [
        'Een kerntrekbeveiligde cilinder en een goede sluitplaat toevoegen aan het bestaande slot',
        'Alleen de deurkleur veranderen',
        'De brievenbus vergroten',
        'De deurbel vervangen door een videofoon',
      ],
      correctIndex: 0,
      explanation: 'Kerntrekbeveiliging en een degelijke sluitplaat pakken de zwakke plekken van een standaardslot direct aan en zijn relatief kosteneffectieve verbeteringen.',
    },
    {
      id: 'C.12.bloom3.multi', toetstermCode: 'C.12.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke onderdelen vallen onder "hang- en sluitwerk"?',
      options: ['Scharnieren', 'Cilindersloten', 'Raamuitzetters/-arrangementen', 'De dakgoot'],
      correctIndices: [0, 1, 2],
      explanation: 'Scharnieren, sloten en raamuitzetters horen tot het hang- en sluitwerk; de dakgoot is een dakonderdeel en valt hier niet onder.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.bloom3.mc', toetstermCode: 'C.13.4', type: 'mc', bloom: 'Analyseren',
      prompt: 'Op een gestucte binnenwand ontstaan haarscheurtjes precies op de naden tussen twee gipsplaten. Wat is hiervoor de meest waarschijnlijke verklaring?',
      options: [
        'Onvoldoende of verkeerd uitgevoerde naadafwerking (bijvoorbeeld ontbrekend of te smal wapeningsband)',
        'Een verkeerde kleur stucwerk',
        'Te veel vocht in de buitenlucht',
        'Een defecte cv-installatie',
      ],
      correctIndex: 0,
      explanation: 'Scheurtjes exact op plaatnaden wijzen vrijwel altijd op een gebrekkige naadafwerking (te weinig plamuur, geen of te smal wapeningsband) in plaats van op een probleem met het stucwerk zelf.',
    },
    {
      id: 'C.13.bloom3.multi', toetstermCode: 'C.13.9', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke vloerafwerkingen zijn geschikt in combinatie met vloerverwarming?',
      options: ['Tegels', 'Laminaat met een geschikte warmteweerstand', 'Dikke, hoogpolige tapijten zonder vloerverwarmingskeurmerk', 'Gietvloer'],
      correctIndices: [0, 1, 3],
      explanation: 'Tegels en gietvloeren geleiden warmte goed; geschikt laminaat kan ook, mits de warmteweerstand laag genoeg is. Dikke tapijten zonder geschikt keurmerk isoleren juist tegen de vloerverwarming.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.bloom3.mc', toetstermCode: 'C.14.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een dorpelsteen van hardsteen (arduin) vertoont na jaren buitengebruik weinig slijtage, terwijl een zandstenen ornament op dezelfde gevel duidelijk is aangetast. Wat verklaart dit verschil het beste?',
      options: [
        'Hardsteen is dichter en minder poreus dan de meeste zandsteensoorten en daardoor beter bestand tegen weer en verwering',
        'Zandsteen is altijd sterker dan hardsteen',
        'Het verschil komt uitsluitend door de kleur van de stenen',
        'Alleen hardsteen kan buiten worden toegepast',
      ],
      correctIndex: 0,
      explanation: 'Hardsteen is een dicht, weinig poreus gesteente en daardoor doorgaans veel beter bestand tegen verwering dan de meeste, poreuzere zandsteensoorten.',
    },
    {
      id: 'C.14.bloom3.multi', toetstermCode: 'C.14.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke gesteenten behoren tot de stollingsgesteenten?',
      options: ['Graniet', 'Basalt', 'Zandsteen', 'Kalksteen'],
      correctIndices: [0, 1],
      explanation: 'Graniet en basalt ontstaan uit gestold magma en zijn dus stollingsgesteenten; zandsteen en kalksteen zijn afzettingsgesteenten.',
    },
  ],
}
