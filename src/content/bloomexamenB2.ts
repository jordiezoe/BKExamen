import type { Question } from '../types/content'

/**
 * Bloom-examen — tweede golf, sectie B. Nieuwe invalshoeken t.o.v.
 * bloomexamenB.ts (geen overlap in specifieke feiten). Origineel materiaal.
 */
export const bloomExamenB2: Record<string, Question[]> = {
  'B.1': [
    {
      id: 'B.1.bloom2.mc', toetstermCode: 'B.1.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een gebouw is stevig en bruikbaar, maar door de betonnen, kille uitstraling vinden veel bezoekers het lelijk. Welke Vitruvius-kwaliteit staat hier ter discussie?',
      options: ['Venustas (schoonheid)', 'Firmitas (stevigheid)', 'Utilitas (bruikbaarheid)', 'Geen van de drie'],
      correctIndex: 0,
      explanation: 'Schoonheid (venustas) is subjectief, maar hier is expliciet de esthetische waardering in het geding, niet de stevigheid of bruikbaarheid.',
    },
    {
      id: 'B.1.bloom2.multi', toetstermCode: 'B.1.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke uitspraken over de Vitruvius-triade zijn juist?',
      options: ['De drie kwaliteiten zijn firmitas, utilitas en venustas', 'Ze zijn van de Romeinse architect/ingenieur Vitruvius afkomstig', 'Ze gelden alleen voor moderne gebouwen', 'Ze worden nog steeds als basis voor bouwkundige kwaliteit gebruikt'],
      correctIndices: [0, 1, 3],
      explanation: 'De triade van Vitruvius (Romeinse oudheid) wordt nog steeds toegepast als basis voor bouwkundige kwaliteit, niet alleen bij moderne gebouwen.',
    },
  ],
  'B.2': [
    {
      id: 'B.2.bloom2.mc', toetstermCode: 'B.2.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Bij een woningopname vind je gebreken aan zowel het stucwerk als de cv-ketel. Tot welke twee elementengroepen horen deze?',
      options: ['Afwerking en installaties', 'Opbouw en dak', 'Fundering en kelder', 'Dak en afwerking'],
      correctIndex: 0,
      explanation: 'Stucwerk hoort bij afwerking, de cv-ketel bij installaties — twee verschillende elementengroepen.',
    },
    {
      id: 'B.2.bloom2.multi', toetstermCode: 'B.2.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke van de volgende bouwdelen horen tot de elementengroep "installaties"?',
      options: ['De groepenkast', 'De waterleiding', 'De verdiepingsvloer', 'De ventilatiekanalen'],
      correctIndices: [0, 1, 3],
      explanation: 'Groepenkast, waterleiding en ventilatiekanalen zijn installaties; de verdiepingsvloer hoort bij de opbouw.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.bloom2.mc', toetstermCode: 'B.3.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een dakconstructie moet zowel het eigen gewicht als sneeuwbelasting dragen. Hoe worden deze twee belastingen in de sterkteleer geclassificeerd?',
      options: ['Permanent (eigen gewicht) en variabel (sneeuw)', 'Beide permanent', 'Beide variabel', 'Permanent (sneeuw) en variabel (eigen gewicht)'],
      correctIndex: 0,
      explanation: 'Eigen gewicht is er altijd (permanent); sneeuw is er niet altijd en varieert in hoeveelheid (variabele belasting).',
    },
    {
      id: 'B.3.bloom2.multi', toetstermCode: 'B.3.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij een vrij opgelegde balk die doorbuigt onder belasting, welke uitspraken over het krachtenspel zijn juist?',
      options: ['Onderin de balk treedt trek op', 'Bovenin de balk treedt druk op', 'In het hart (neutrale lijn) is de spanning nul', 'Boven en onder treedt precies dezelfde kracht op'],
      correctIndices: [0, 1, 2],
      explanation: 'Bij een vrij opgelegde, doorbuigende balk: trek onder, druk boven, nul in het hart — dit is het klassieke krachtenpatroon.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.bloom2.mc', toetstermCode: 'B.4.1', type: 'mc', bloom: 'Begrip',
      prompt: 'Welke grondsoort komt van oorsprong vooral voor in het rivierengebied en de kuststreek van West-Nederland?',
      options: ['Klei', 'Keileem', 'Grind', 'Löss'],
      correctIndex: 0,
      explanation: 'Klei is kenmerkend voor het rivieren- en kustgebied van West-Nederland; keileem komt vooral in het noorden/oosten voor.',
    },
    {
      id: 'B.4.bloom2.multi', toetstermCode: 'B.4.7', type: 'multi', bloom: 'Begrip',
      prompt: 'Welke voorzieningen worden gebruikt om een bouwput droog te houden of grond te keren?',
      options: ['Bemaling', 'Damwanden', 'Sondering', 'Grondwerkers/ontgraving'],
      correctIndices: [0, 1],
      explanation: 'Bemaling (grondwater verlagen) en damwanden (grond keren) houden een bouwput droog en stabiel. Sondering is onderzoek, geen uitvoeringsmaatregel.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.bloom2.mc', toetstermCode: 'B.5.4', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat is het gangbare Nederlandse baksteenformaat?',
      options: ['Het Waalformaat', 'Het Vlaamse formaat', 'Het Deltaformaat', 'Het IJsselformaat'],
      correctIndex: 0,
      explanation: 'Het Waalformaat is het meest gangbare Nederlandse baksteenformaat.',
    },
    {
      id: 'B.5.bloom2.multi', toetstermCode: 'B.5.6', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke metselverbanden bestaan uit een mengvorm van koppen en strekken binnen dezelfde laag?',
      options: ['Vlaams verband', 'Klezorenverband', 'Halfsteensverband', 'Koppenverband'],
      correctIndices: [0, 1],
      explanation: 'Vlaams verband en klezorenverband combineren koppen en strekken binnen één laag; halfsteens en koppenverband zijn juist eenduidig.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.bloom2.mc', toetstermCode: 'B.6.3', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat gebeurt er tijdens carbonatatie van beton?',
      options: ['CO₂ uit de lucht verlaagt de pH van het beton, waardoor de wapening zijn bescherming verliest', 'Het beton wordt sterker naarmate het ouder wordt zonder enig risico', 'Het beton absorbeert extra water en zwelt op', 'De wapening zet chemisch om in aluminium'],
      correctIndex: 0,
      explanation: 'Carbonatatie verlaagt de pH van het beton door CO₂-opname, waardoor de beschermende passiveringslaag om de wapening verdwijnt — de eerste stap naar betonrot.',
    },
    {
      id: 'B.6.bloom2.multi', toetstermCode: 'B.6.9', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke voordelen heeft prefab beton ten opzichte van in het werk gestort beton?',
      options: ['Kortere bouwtijd op de bouwplaats', 'Constante kwaliteit onder fabrieksomstandigheden', 'Geen transport of hijskraan nodig', 'Minder weersafhankelijk tijdens productie'],
      correctIndices: [0, 1, 3],
      explanation: 'Prefab bespaart bouwtijd, geeft constante kwaliteit en is weersonafhankelijk in productie — maar vraagt wél transport en een kraan.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.bloom2.mc', toetstermCode: 'B.7.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke staalsoort wordt gebruikt wanneer complexe, gegoten vormen nodig zijn (zoals bepaalde verbindingsstukken)?',
      options: ['Gietstaal', 'Betonstaal', 'RVS', 'Constructiestaal (gewalst)'],
      correctIndex: 0,
      explanation: 'Gietstaal wordt in een gietvorm gegoten voor complexe vormen; constructiestaal wordt juist gewalst tot standaardprofielen.',
    },
    {
      id: 'B.7.bloom2.multi', toetstermCode: 'B.7.3', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke stalen constructie-onderdelen zijn ontworpen om leidingen erdoorheen te laten lopen zonder aan sterkte in te boeten?',
      options: ['De raatligger', 'Het HEA-profiel', 'De QTH-ligger', 'Het UNP-profiel'],
      correctIndices: [0, 2],
      explanation: 'Raatliggers en QTH-liggers hebben openingen in het lijf waar leidingen doorheen kunnen; HEA/UNP zijn gesloten profielen zonder die openingen.',
    },
  ],
  'B.8': [
    {
      id: 'B.8.bloom2.mc', toetstermCode: 'B.8.4', type: 'mc', bloom: 'Kennis',
      prompt: 'Van welke twee metalen is messing een legering?',
      options: ['Koper en zink', 'Koper en tin', 'Aluminium en magnesium', 'IJzer en nikkel'],
      correctIndex: 0,
      explanation: 'Messing bestaat uit koper en zink; brons uit koper en tin.',
    },
    {
      id: 'B.8.bloom2.multi', toetstermCode: 'B.8.1', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke van de volgende metalen behoren tot de non-ferro metalen (bevatten geen ijzer)?',
      options: ['Aluminium', 'Zink', 'Koper', 'Constructiestaal'],
      correctIndices: [0, 1, 2],
      explanation: 'Aluminium, zink en koper zijn non-ferro (ijzervrij); constructiestaal is juist ijzerhoudend (ferro).',
    },
  ],
  'B.9': [
    {
      id: 'B.9.bloom2.mc', toetstermCode: 'B.9.3', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke van de volgende houtsoorten is loofhout (hardhout)?',
      options: ['Meranti', 'Vuren', 'Grenen', 'Douglas'],
      correctIndex: 0,
      explanation: 'Meranti is een tropische loofhoutsoort (hardhout); vuren, grenen en douglas zijn naaldhout (zachthout).',
    },
    {
      id: 'B.9.bloom2.multi', toetstermCode: 'B.9.4', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke plaatmaterialen op houtbasis bestaan uit houtspaanders of -vezels in plaats van fineerlagen?',
      options: ['Spaanplaat', 'MDF', 'Multiplex', 'OSB'],
      correctIndices: [0, 1, 3],
      explanation: 'Spaanplaat, MDF en OSB bestaan uit spaanders/vezels; multiplex is juist opgebouwd uit kruislings verlijmde fineerlagen.',
    },
  ],
  'B.10': [
    {
      id: 'B.10.bloom2.mc', toetstermCode: 'B.10.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke maat wordt gemeten tot in de sponning waar het raam of de deur invalt?',
      options: ['De sponningmaat', 'De dagmaat', 'De buitenwerkse maat', 'De glasmaat zonder instand'],
      correctIndex: 0,
      explanation: 'De sponningmaat wordt tot in de sponning gemeten; de dagmaat is de zichtbare vrije opening.',
    },
    {
      id: 'B.10.bloom2.multi', toetstermCode: 'B.10.5', type: 'multi', bloom: 'Begrip',
      prompt: 'Welke onderdelen zijn nodig om een houten kozijn tegen vochtschade te beschermen?',
      options: ['Een waterhol/afwatering in de onderdorpel', 'Voldoende afschot naar buiten', 'Een volledig vlak, zonder enige afwatering ontworpen dorpel', 'Regelmatig onderhoud/schilderwerk'],
      correctIndices: [0, 1, 3],
      explanation: 'Waterafvoer, afschot en onderhoud beschermen het kozijn tegen vocht; een vlakke dorpel zonder afwatering houdt water juist vast.',
    },
  ],
  'B.11': [
    {
      id: 'B.11.bloom2.mc', toetstermCode: 'B.11.1', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat is een nadeel van kunststof kozijnen ten opzichte van hout op de langere termijn?',
      options: ['Minder gemakkelijk lokaal te repareren en minder duurzaam te recyclen', 'Ze roesten', 'Ze moeten jaarlijks geschilderd worden', 'Ze zijn niet leverbaar in kleuren'],
      correctIndex: 0,
      explanation: 'Kunststof is onderhoudsarm maar lastiger te repareren en minder gemakkelijk te recyclen dan hout.',
    },
    {
      id: 'B.11.bloom2.multi', toetstermCode: 'B.11.2', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke materialen worden vaak gecombineerd met een thermische onderbreking om koudebruggen te voorkomen?',
      options: ['Aluminium kozijnprofielen', 'Stalen kozijnprofielen', 'PVC-kozijnprofielen (van zichzelf al isolerend)', 'Massief houten kozijnprofielen'],
      correctIndices: [0, 1],
      explanation: 'Aluminium en staal geleiden warmte sterk en vragen daarom een thermische onderbreking; PVC en hout isoleren van zichzelf al beter.',
    },
  ],
  'B.12': [
    {
      id: 'B.12.bloom2.mc', toetstermCode: 'B.12.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Hoe heet de zware hoofdbalk waarop de lichtere kinderbinten van een houten balklaag rusten?',
      options: ['De moerbalk', 'De strijkbalk', 'De raveelbalk', 'De gording'],
      correctIndex: 0,
      explanation: 'De moerbalk draagt de kinderbinten; de raveelbalk vangt juist balken op rond een sparing.',
    },
    {
      id: 'B.12.bloom2.multi', toetstermCode: 'B.12.4', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke bouwfysische eisen gelden voor een woningscheidende wand?',
      options: ['Geluidsisolatie', 'Brandwerendheid', 'Daglichttoetreding', 'Zonwering'],
      correctIndices: [0, 1],
      explanation: 'Een woningscheidende wand moet geluid en brand beperken; daglicht en zonwering zijn geen eisen die aan déze wand worden gesteld.',
    },
  ],
  'B.13': [
    {
      id: 'B.13.bloom2.mc', toetstermCode: 'B.13.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke dakvorm heeft vier hellende vlakken mét een nok (in tegenstelling tot een tentdak)?',
      options: ['Het schilddak', 'Het zadeldak', 'Het lessenaarsdak', 'Het sheddak'],
      correctIndex: 0,
      explanation: 'Een schilddak heeft vier vlakken met een nok; een tentdak heeft vier vlakken die in één punt samenkomen zonder nok.',
    },
    {
      id: 'B.13.bloom2.multi', toetstermCode: 'B.13.6', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke voordelen heeft een groendak?',
      options: ['Buffert regenwater', 'Beschermt de onderliggende dakbedekking tegen UV', 'Geeft extra isolatie', 'Maakt de onderliggende waterdichte laag overbodig'],
      correctIndices: [0, 1, 2],
      explanation: 'Een groendak buffert water, beschermt en isoleert; de waterdichte laag eronder blijft echter wél nodig.',
    },
  ],
  'B.14': [
    {
      id: 'B.14.bloom2.mc', toetstermCode: 'B.14.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke trap draait 90° van richting?',
      options: ['De kwartslagtrap', 'De halfslagtrap', 'De rechte steektrap', 'De spiltrap'],
      correctIndex: 0,
      explanation: 'Een kwartslagtrap draait 90°; een halfslagtrap draait 180°.',
    },
    {
      id: 'B.14.bloom2.multi', toetstermCode: 'B.14.6', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke vormen van verticaal transport in gebouwen bestaan er naast een gewone trap?',
      options: ['Lift', 'Roltrap', 'Hellingbaan', 'Vlizotrap voor dagelijks intensief gebruik'],
      correctIndices: [0, 1, 2],
      explanation: 'Lift, roltrap en hellingbaan zijn volwaardige alternatieven; een vlizotrap is juist niet geschikt voor dagelijks intensief gebruik.',
    },
  ],
  'B.15': [
    {
      id: 'B.15.bloom2.mc', toetstermCode: 'B.15.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welke kunststof wordt veel toegepast voor flexibele water- en gasleidingen (op rol leverbaar)?',
      options: ['Polyetheen (PE)', 'PVC hard', 'Polycarbonaat (PC)', 'Perspex (PMMA)'],
      correctIndex: 0,
      explanation: 'PE is taai en flexibel, geschikt voor leidingen op rol; PVC is juist star.',
    },
    {
      id: 'B.15.bloom2.multi', toetstermCode: 'B.15.1', type: 'multi', bloom: 'Begrip',
      prompt: 'Wat kenmerkt een thermoharder, in tegenstelling tot een thermoplast?',
      options: ['Blijft na uitharden onomkeerbaar hard', 'Is na verwarmen niet opnieuw te vormen', 'Wordt bij verwarmen zacht en hersmeltbaar', 'Is altijd flexibeler dan een thermoplast'],
      correctIndices: [0, 1],
      explanation: 'Thermoharders zijn na uitharden blijvend hard en niet hersmeltbaar — het tegenovergestelde van een thermoplast.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.bloom2.mc', toetstermCode: 'B.16.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Welk isolatiemateriaal is gemaakt van cellulair (opgeschuimd) glas?',
      options: ['Foamglas', 'Glaswol', 'EPS', 'Vlas'],
      correctIndex: 0,
      explanation: 'Foamglas bestaat uit cellulair glas, volledig waterdicht en drukvast.',
    },
    {
      id: 'B.16.bloom2.multi', toetstermCode: 'B.16.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Voor een dak met weinig ruimte tussen de sporen, waar toch een hoge isolatiewaarde vereist is, welke materialen zijn het meest doelmatig?',
      options: ['PIR', 'PUR', 'Vlasisolatie', 'Glaswol'],
      correctIndices: [0, 1],
      explanation: 'PIR en PUR hebben de laagste lambda-waarde (meeste isolatie per cm), ideaal bij weinig beschikbare ruimte.',
    },
  ],
}
