import type { Question } from '../types/content'

/**
 * Bloom-examen — vijfde golf, sectie C. Nog hoger niveau dan ronde 1-4:
 * uitsluitend Evalueren/Synthese, met meerstaps-redeneervragen die twee of
 * meer begrippen tegelijk combineren en subtiele, bijna-goede afleiders.
 * GEEN open vragen. Nieuwe, niet overlappende feiten t.o.v. alle eerdere
 * bloomexamenC*-bestanden. Origineel geschreven.
 */
export const bloomExamenC5: Record<string, Question[]> = {
  'C.1': [
    {
      id: 'C.1.bloom5.mc', toetstermCode: 'C.1.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een gescheiden rioolstelsel wordt gecombineerd met een wadi voor hemelwaterberging, in een wijk met een hoge grondwaterstand. Welke conclusie over de combinatie is het meest genuanceerd?',
      options: [
        'Bij een hoge grondwaterstand kan de infiltratiecapaciteit van de wadi beperkt zijn, wat aanvullende afvoer- of bergingsmaatregelen nodig kan maken',
        'Een wadi werkt bij elke grondwaterstand exact even goed', 'Een gescheiden stelsel maakt een wadi altijd overbodig', 'De grondwaterstand heeft geen enkele invloed op de werking van een wadi',
      ],
      correctIndex: 0,
      explanation: 'Een wadi werkt via infiltratie in de bodem; bij een hoge grondwaterstand is er minder "ruimte" voor water om weg te zakken, wat de effectiviteit beperkt en aanvullende maatregelen relevant maakt.',
    },
    {
      id: 'C.1.bloom5.multi', toetstermCode: 'C.1.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een gemeente overweegt bestaande gemengde rioolstelsels te vervangen door gescheiden stelsels in verouderde wijken. Welke afwegingen zijn hierbij het meest valide?',
      options: [
        'Gescheiden stelsels verminderen de belasting van de rioolwaterzuivering bij hevige regen',
        'De aanlegkosten van een gescheiden stelsel zijn doorgaans hoger dan het simpelweg laten liggen van een bestaand gemengd stelsel',
        'Bestaande bebouwing kan beperkingen opleveren voor het aanleggen van een volledig gescheiden stelsel',
        'Deze afweging speelt uitsluitend in nieuwbouwwijken, nooit in bestaande wijken',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Milieuvoordeel, hogere aanlegkosten en fysieke beperkingen van bestaande bebouwing zijn alle drie reële overwegingen bij deze afweging — de vraag speelt juist wél in bestaande, verouderde wijken.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.bloom5.mc', toetstermCode: 'C.2.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning combineert een koudwaterleiding vlak langs een cv-leiding met een doodlopend leidingdeel naar een zelden gebruikte buitenkraan. Welke conclusie integreert beide risicofactoren het best?',
      options: [
        'Beide factoren (opwarming door nabijheid van de cv-leiding, en stilstaand water in het dode stuk) werken in dezelfde richting en verhogen het legionellarisico gezamenlijk sterker dan elk afzonderlijk',
        'Deze twee factoren heffen elkaar op, waardoor het legionellarisico per saldo neutraal blijft',
        'Alleen de nabijheid van de cv-leiding is relevant, het dode leidingstuk niet', 'Legionellarisico hangt uitsluitend af van de leidingmaterialen, niet van temperatuur of stilstand',
      ],
      correctIndex: 0,
      explanation: 'Opwarming en stilstand zijn beide erkende risicofactoren voor legionella; wanneer ze samen optreden (zoals hier), versterkt dit het risico eerder dan dat het neutraliseert.',
    },
    {
      id: 'C.2.bloom5.multi', toetstermCode: 'C.2.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een installateur voert bij oplevering zowel een dichtheidstest als een spoeling van de nieuwe waterleidinginstallatie uit. Welke conclusies over het nut van beide stappen zijn het meest gegrond?',
      options: [
        'De dichtheidstest controleert of er geen lekkages in het systeem zijn',
        'Spoelen verwijdert eventuele bouwresten of verontreiniging uit de leidingen vóór ingebruikname',
        'Beide stappen controleren in wezen exact hetzelfde aspect van de installatie',
        'Eén van beide stappen is voldoende en de andere is overbodig',
      ],
      correctIndices: [0, 1],
      explanation: 'Dichtheidstest en spoeling controleren twee verschillende aspecten (lekdichtheid versus waterkwaliteit/reinheid) en zijn dus allebei relevant, niet onderling vervangbaar.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.bloom5.mc', toetstermCode: 'C.3.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een wijk gaat van het aardgas af en kiest voor een collectief warmtenet, terwijl individuele bewoners liever een eigen warmtepomp zouden willen. Welke conclusie over deze spanning is het meest genuanceerd?',
      options: [
        'Een collectieve oplossing kan schaalvoordelen bieden, maar beperkt de individuele keuzevrijheid vergeleken met een eigen warmtepomp per woning',
        'Een warmtenet en een individuele warmtepomp zijn functioneel exact hetzelfde voor de bewoner',
        'Individuele warmtepompen zijn technisch nooit haalbaar in een wijk met een warmtenet',
        'De keuze tussen beide opties heeft geen enkel gevolg voor de bewoner',
      ],
      correctIndex: 0,
      explanation: 'Collectieve en individuele oplossingen kennen elk eigen voor- en nadelen (schaalvoordeel versus keuzevrijheid) — dit is een reële afweging, geen neutrale of onmogelijke keuze.',
    },
    {
      id: 'C.3.bloom5.multi', toetstermCode: 'C.3.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Bij een gaskeuring wordt zowel een te hoog lekverlies als een gele, roetende vlam bij een verbrandingstoestel geconstateerd. Welke conclusies zijn het meest gegrond?',
      options: [
        'Dit zijn twee onafhankelijke gebreken die allebei apart hersteld moeten worden',
        'Het lekverlies wijst op een probleem met de leidingafdichting, de vlamkleur op onvolledige verbranding bij het toestel',
        'Beide symptomen wijzen automatisch op precies dezelfde onderliggende oorzaak',
        'Slechts één van de twee bevindingen vereist daadwerkelijk actie',
      ],
      correctIndices: [0, 1],
      explanation: 'Lekverlies (leidingdichtheid) en een gele vlam (verbrandingskwaliteit van het toestel) zijn twee losstaande gebreken met eigen oorzaken, die allebei aandacht vereisen.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.bloom5.mc', toetstermCode: 'C.4.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning krijgt tegelijk een warmtepomp, een laadpaal én zonnepanelen met omvormer. Welke conclusie over de impact op de elektrische installatie is het meest volledig?',
      options: [
        'Zowel de gelijktijdige stroomvraag (warmtepomp, laadpaal) als de teruglevering (zonnepanelen) kunnen de bestaande aansluiting en groepenkast onder druk zetten, wat een integrale beoordeling vergt in plaats van drie losse checks',
        'Alleen de laadpaal is relevant voor de aansluitcapaciteit, de andere twee installaties spelen geen rol',
        'Zonnepanelen verminderen per definitie de benodigde aansluitcapaciteit tot nul',
        'Deze drie installaties hebben nooit gezamenlijke gevolgen voor de meterkast',
      ],
      correctIndex: 0,
      explanation: 'Warmtepomp en laadpaal verhogen de piekvraag, terwijl zonnepanelen juist teruglevering toevoegen — beide effecten spelen tegelijk een rol bij de beoordeling van de aansluiting en groepenkast, dus een integrale blik is nodig.',
    },
    {
      id: 'C.4.bloom5.multi', toetstermCode: 'C.4.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een elektrotechnisch inspecteur controleert zowel de aardlekschakelaars als de installatieautomaten (zekeringen) in een groepenkast. Welke conclusies over de functie van beide componenten zijn het meest gegrond?',
      options: [
        'Aardlekschakelaars beschermen primair tegen elektrocutiegevaar door lekstroom',
        'Installatieautomaten beschermen primair tegen overbelasting en kortsluiting van de groep',
        'Beide componenten vervullen exact dezelfde beveiligingsfunctie',
        'Eén van beide componenten is in een moderne installatie overbodig',
      ],
      correctIndices: [0, 1],
      explanation: 'Aardlekschakelaars en installatieautomaten beschermen tegen verschillende risico\'s (lekstroom/elektrocutie versus overbelasting/kortsluiting) en zijn beide nodig in een veilige, moderne installatie.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.bloom5.mc', toetstermCode: 'C.5.5', type: 'mc', bloom: 'Synthese',
      prompt: 'Een dakvlak op het zuidwesten met een matige hellingshoek wordt vergeleken met een dakvlak op het zuiden met een optimale hellingshoek, voor de plaatsing van zonnepanelen. Welke conclusie integreert oriëntatie én hellingshoek het best?',
      options: [
        'De uiteindelijke opbrengst hangt af van de combinatie van beide factoren, niet van oriëntatie of hellingshoek afzonderlijk — een net iets minder optimale oriëntatie met een goede hellingshoek kan alsnog een prima opbrengst geven',
        'Alleen de oriëntatie is relevant voor de opbrengst, hellingshoek speelt geen rol',
        'Alleen de hellingshoek is relevant, oriëntatie speelt geen rol',
        'Zuidwest-oriëntatie levert per definitie nooit een bruikbare opbrengst op',
      ],
      correctIndex: 0,
      explanation: 'Opbrengst is een samenspel van oriëntatie én hellingshoek; een zuidwest-dak met een geschikte hellingshoek kan nog altijd een goede opbrengst geven, ook al is zuid met optimale hoek theoretisch beter.',
    },
    {
      id: 'C.5.bloom5.multi', toetstermCode: 'C.5.3', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een woning met beperkt dakoppervlak wordt gekozen tussen PV-panelen (elektriciteit) en een zonneboiler (warm water). Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Een zonneboiler is gericht op warmtapwaterproductie, PV-panelen op elektriciteitsopwekking voor het hele huishouden',
        'Bij beperkt dakoppervlak moet een keuze of verdeling worden gemaakt tussen beide toepassingen',
        'Beide systemen leveren exact hetzelfde eindproduct en zijn dus onderling verwisselbaar',
        'Dakoppervlak is nooit een beperkende factor bij deze keuze',
      ],
      correctIndices: [0, 1],
      explanation: 'PV en zonneboiler dienen verschillende doelen (elektriciteit versus warm water) en concurreren om dezelfde, beperkte dakruimte — een bewuste afweging of verdeling is dan nodig.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.bloom5.mc', toetstermCode: 'C.6.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning behoudt de bestaande, voor hoge temperatuur gedimensioneerde radiatoren, maar krijgt een warmtepomp met lage aanvoertemperatuur voor een beter rendement. Welke conclusie combineert beide aspecten het best?',
      options: [
        'Er ontstaat een spanning tussen een optimaal warmtepomprendement (lage temperatuur) en voldoende warmteafgifte van de bestaande radiatoren (die juist hoge temperatuur nodig hebben) — een compromis of aanpassing van de radiatoren is nodig',
        'Warmtepompen werken bij elke aanvoertemperatuur exact even efficiënt', 'Bestaande radiatoren hebben nooit invloed op de optimale instelling van een warmtepomp', 'Dit probleem doet zich nooit voor bij bestaande bouw',
      ],
      correctIndex: 0,
      explanation: 'Dit is een klassiek spanningsveld bij verduurzaming van bestaande bouw: het rendement van de warmtepomp en de warmteafgifte van bestaande radiatoren trekken in tegengestelde richting, wat vraagt om opschaling van radiatoren of een ander compromis.',
    },
    {
      id: 'C.6.bloom5.multi', toetstermCode: 'C.6.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een hybride warmtepomp wordt gecombineerd met vloerverwarming op de begane grond en radiatoren op de verdieping. Welke conclusies zijn het meest gegrond?',
      options: [
        'De vloerverwarming werkt al bij een relatief lage temperatuur efficiënt samen met de warmtepomp',
        'De radiatoren op de verdieping kunnen bij koude dagen eerder de hulp van de cv-ketel nodig hebben dan de vloerverwarming',
        'Beide afgiftesystemen hebben altijd exact dezelfde optimale aanvoertemperatuur',
        'De keuze voor een hybride systeem heeft geen enkel verband met de afgiftesystemen in huis',
      ],
      correctIndices: [0, 1],
      explanation: 'Vloerverwarming werkt van nature al bij lage temperatuur efficiënt; radiatoren hebben vaak een hogere temperatuur nodig, wat de bijstook van de ketel eerder nodig kan maken bij koude dagen.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.bloom5.mc', toetstermCode: 'C.7.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een gebalanceerd ventilatiesysteem met WTW wordt gecombineerd met topkoeling voor warme zomerdagen. Welke conclusie over de samenhang tussen beide systemen is het meest volledig?',
      options: [
        'WTW is primair gericht op winterse warmteterugwinning, topkoeling op het wegnemen van zomerse warmtepieken — ze vullen elkaar aan zonder elkaar te vervangen',
        'WTW en topkoeling vervullen exact dezelfde functie op verschillende momenten van het jaar',
        'Topkoeling maakt WTW in de winter overbodig',
        'Deze twee systemen kunnen nooit in hetzelfde gebouw worden gecombineerd',
      ],
      correctIndex: 0,
      explanation: 'WTW en topkoeling adresseren verschillende seizoensgebonden problemen (winterwarmteverlies versus zomerpiekwarmte) en zijn complementair, niet onderling vervangend.',
    },
    {
      id: 'C.7.bloom5.multi', toetstermCode: 'C.7.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een kantoorruimte met veel interne warmtelast wordt gekozen tussen buitenzonwering en volledige mechanische koeling. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Buitenzonwering pakt de instraling aan de bron aan, vóórdat deze het glas bereikt',
        'Volledige koeling kan noodzakelijk zijn als de interne warmtelast (apparatuur, mensen) op zichzelf al te hoog is, los van zoninstraling',
        'Buitenzonwering lost per definitie alle vormen van interne warmteoverlast op',
        'De keuze hangt af van of de warmtelast vooral van zoninstraling komt of van interne bronnen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Buitenzonwering is effectief tegen zoninstraling maar doet niets aan interne warmtebronnen (apparatuur, mensen) — de juiste maatregel hangt af van de dominante oorzaak van de warmtelast.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.bloom5.mc', toetstermCode: 'C.8.5', type: 'mc', bloom: 'Synthese',
      prompt: 'Een appartementengebouw combineert compartimentering per bouwlaag met een enkele, gedeelde vluchttrap. Welke conclusie over de brandveiligheidsstrategie is het meest genuanceerd?',
      options: [
        'Compartimentering vertraagt branduitbreiding tussen lagen, maar de enkele vluchttrap blijft een kwetsbaar knelpunt als deze zelf door rook/vuur wordt bereikt',
        'Eén vluchttrap is bij elk gebouw net zo veilig als meerdere vluchttrappen', 'Compartimentering maakt een vluchttrap volledig overbodig', 'Deze twee maatregelen hebben geen enkele onderlinge samenhang',
      ],
      correctIndex: 0,
      explanation: 'Compartimentering en vluchtwegen zijn complementaire maar losse veiligheidslagen: goede compartimentering vertraagt uitbreiding, maar als de enige vluchtroute zelf wordt aangetast, blijft er een kwetsbaarheid — vandaar dat bij grotere gebouwen vaak meerdere onafhankelijke vluchtroutes worden geëist.',
    },
    {
      id: 'C.8.bloom5.multi', toetstermCode: 'C.8.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een brandcompartiment wordt doorboord door meerdere ongeblokkeerde leidingdoorvoeren voor water, elektra en ventilatie. Welke conclusies over het brandveiligheidsrisico zijn het meest gegrond?',
      options: [
        'Onbeschermde doorvoeren kunnen de brandwerendheid van de scheidingsconstructie lokaal tenietdoen',
        'Brandwerende manchetten of kitvoegen rond de doorvoeren kunnen dit risico beperken',
        'Leidingdoorvoeren hebben nooit invloed op de brandwerendheid van een compartiment',
        'Alleen elektradoorvoeren zijn relevant voor brandveiligheid, water- en ventilatiedoorvoeren niet',
      ],
      correctIndices: [0, 1],
      explanation: 'Elke onbeschermde doorvoer (ongeacht het type leiding) kan een zwakke plek vormen in een brandscheiding; brandwerende afdichting van al die doorvoeren is nodig om de bedoelde brandwerendheid te behouden.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.bloom5.mc', toetstermCode: 'C.9.6', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning wordt luchtdichter gemaakt (isolatie) zonder de ventilatiecapaciteit aan te passen, wat leidt tot meer condens én een hogere CO₂-concentratie \'s nachts in de slaapkamer. Welke conclusie combineert beide symptomen het best?',
      options: [
        'Beide symptomen wijzen op dezelfde onderliggende oorzaak: de ventilatie is niet meegegroeid met de verbeterde luchtdichtheid van de woning',
        'Condens en een hoge CO₂-concentratie hebben altijd volledig verschillende, ongerelateerde oorzaken',
        'Alleen de CO₂-concentratie hangt samen met luchtdichtheid, condens niet',
        'Dit duidt op een defect aan de verwarmingsinstallatie, niet op ventilatie',
      ],
      correctIndex: 0,
      explanation: 'Beide symptomen (condens én hoge CO₂) wijzen op onvoldoende luchtverversing na het luchtdichter maken van de woning — een klassiek gevolg van isoleren zonder de ventilatie mee op te schalen.',
    },
    {
      id: 'C.9.bloom5.multi', toetstermCode: 'C.9.2', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een diepe renovatie waarbij de woning zeer luchtdicht wordt gemaakt, wordt gekozen tussen ventilatiesysteem C en D. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Systeem D (met WTW) beperkt het energieverlies dat anders door mechanische afzuiging (systeem C) zou optreden',
        'Bij een zeer luchtdichte schil is de natuurlijke toevoer van systeem C minder goed te garanderen dan bij systeem D',
        'Systeem C en D presteren bij een zeer luchtdichte woning altijd exact gelijk', 'Ventilatiesysteem is bij een diepe renovatie een irrelevante keuze',
      ],
      correctIndices: [0, 1],
      explanation: 'Bij een zeer luchtdichte schil is de natuurlijke toevoer van systeem C minder betrouwbaar, en WTW bij systeem D beperkt het energieverlies van de mechanische afvoer — daarom wordt bij diepe renovaties vaak voor systeem D gekozen.',
    },
  ],
  'C.10': [
    {
      id: 'C.10.bloom5.mc', toetstermCode: 'C.10.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning combineert PKVW-gecertificeerd hang- en sluitwerk met een domoticasysteem dat deuren op afstand kan ontgrendelen via een app. Welke conclusie over de totale beveiliging is het meest genuanceerd?',
      options: [
        'De fysieke inbraakwerendheid (PKVW) en de digitale toegangsbeveiliging (domotica/app) zijn twee verschillende risicolagen die allebei aandacht verdienen — een zwakke digitale beveiliging kan de fysieke maatregelen ondermijnen',
        'PKVW-hang- en sluitwerk maakt digitale beveiliging volledig overbodig',
        'Een domoticasysteem kan nooit een negatief effect hebben op de veiligheid van een woning',
        'Fysieke en digitale beveiliging zijn in de praktijk exact hetzelfde vraagstuk',
      ],
      correctIndex: 0,
      explanation: 'Fysieke inbraakwerendheid beschermt tegen fysiek forceren, maar een kwetsbare app/verbinding kan een nieuw, digitaal aanvalspad openen — beide lagen moeten dus in samenhang worden beoordeeld.',
    },
    {
      id: 'C.10.bloom5.multi', toetstermCode: 'C.10.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een VvE overweegt een gedeeld domoticasysteem voor verlichting, toegang en laadpalen in de parkeergarage. Welke conclusies over deze gedeelde aanpak zijn het meest gegrond?',
      options: [
        'Een storing in het gedeelde systeem kan gevolgen hebben voor meerdere functies tegelijk (verlichting, toegang, laadpalen)',
        'Een gedeeld systeem kan schaalvoordelen bieden ten opzichte van losse, individuele systemen',
        'Gedeelde systemen hebben nooit enig gezamenlijk faalrisico',
        'Toegang, verlichting en laadpalen hebben in een gedeeld systeem geen enkele onderlinge afhankelijkheid',
      ],
      correctIndices: [0, 1],
      explanation: 'Een gedeeld systeem kan efficiënter zijn, maar creëert ook een gezamenlijk faalrisico: als het systeem uitvalt, raken mogelijk meerdere functies tegelijk getroffen.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.bloom5.mc', toetstermCode: 'C.11.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een zuidgevel met groot glasoppervlak combineert HR++-glas (isolatie) met de wens voor maximale passieve zonnewarmte in de winter én minimale oververhitting in de zomer. Welke conclusie integreert deze doelen het best?',
      options: [
        'Dit vergt een afweging tussen ZTA (zonwerendheid) en lichttoetreding/warmtewinst — een vast compromis in het glas zelf, eventueel aangevuld met seizoensgebonden buitenzonwering, is vaak nodig',
        'HR++-glas lost dit vraagstuk volledig op zonder enige aanvullende maatregel', 'Winterwarmtewinst en zomeroververhitting zijn nooit met elkaar in conflict', 'Alleen de U-waarde van het glas is relevant voor dit vraagstuk',
      ],
      correctIndex: 0,
      explanation: 'Meer zoninstraling toelaten (voor winterwinst) botst met het beperken van zomerse oververhitting — vaste glaseigenschappen (ZTA) vormen hierin een compromis, en seizoensgebonden zonwering kan dit verder verfijnen.',
    },
    {
      id: 'C.11.bloom5.multi', toetstermCode: 'C.11.1', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een monumentaal pand met originele glas-in-loodramen wordt gekozen tussen behoud van het originele glas (met achterzetbeglazing voor isolatie) of volledige vervanging door modern isolatieglas. Welke overwegingen zijn het meest valide?',
      options: [
        'Achterzetbeglazing kan een deel van het isolatievoordeel geven zonder het monumentale karakter te verliezen',
        'Volledige vervanging geeft doorgaans de beste isolatiewaarde, maar kan ten koste gaan van monumentale waarde',
        'Monumentale waarde speelt nooit een rol bij deze afweging', 'Achterzetbeglazing heeft nooit enig isolerend effect',
      ],
      correctIndices: [0, 1],
      explanation: 'Achterzetbeglazing is een compromis tussen behoud en isolatie; volledige vervanging isoleert beter maar kan de monumentale waarde aantasten — een reële, veelvoorkomende afweging bij monumenten.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.bloom5.mc', toetstermCode: 'C.12.1', type: 'mc', bloom: 'Synthese',
      prompt: 'Een voordeur krijgt SKG ★★★-hang- en sluitwerk, maar de kozijnaansluiting met de gevel is constructief zwak uitgevoerd. Welke conclusie over de totale inbraakwerendheid is het meest genuanceerd?',
      options: [
        'De totale inbraakwerendheid van een deurpartij is zo sterk als de zwakste schakel — een sterk slot met een zwakke kozijnaansluiting biedt per saldo minder bescherming dan het slot alleen doet vermoeden',
        'Het SKG ★★★-slot garandeert altijd de volledige inbraakwerendheid van de deurpartij, ongeacht de kozijnaansluiting',
        'De kozijnaansluiting heeft geen enkele invloed op de inbraakwerendheid van een deur',
        'Inbraakwerendheid wordt uitsluitend door het slot zelf bepaald',
      ],
      correctIndex: 0,
      explanation: 'Een deurbeveiligingssysteem is een keten van onderdelen (slot, sluitplaat, kozijn, kozijnverankering); de zwakste schakel bepaalt de daadwerkelijke weerstand, ook al is het slot zelf zeer zwaar gecertificeerd.',
    },
    {
      id: 'C.12.bloom5.multi', toetstermCode: 'C.12.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een woningcorporatie kiest voor seriesluiting in een appartementencomplex, met aanvullend een panieksluiting op de nooduitgangen. Welke conclusies zijn het meest gegrond?',
      options: [
        'Seriesluiting vergemakkelijkt onderhoud en toegang voor beheerders via één hoofdsleutel',
        'Panieksluiting op nooduitgangen staat los van het seriesluitingssysteem en dient een ander doel (snelle ontvluchting)',
        'Seriesluiting en panieksluiting vervullen exact dezelfde functie',
        'Nooduitgangen mogen bij seriesluiting nooit een aparte sluiting hebben',
      ],
      correctIndices: [0, 1],
      explanation: 'Seriesluiting dient het dagelijkse beheer (één hoofdsleutel voor alle sloten); panieksluiting dient de vluchtveiligheid — twee verschillende doelen die naast elkaar kunnen bestaan in hetzelfde gebouw.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.bloom5.mc', toetstermCode: 'C.13.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een badkamer met vloerverwarming krijgt tegelijk grootformaat tegels en een niet-flexibele, oude-stijl tegellijm. Welke conclusie over het te verwachten resultaat is het meest gegrond?',
      options: [
        'De combinatie van grote tegels (meer uitzettingsoppervlak) met een onflexibele lijm en vloerverwarming (temperatuurschommelingen) vergroot het risico op loslating aanzienlijk',
        'Grootformaat tegels zijn juist ongevoelig voor lijmkeuze', 'Vloerverwarming heeft geen enkel effect op de tegelbevestiging', 'Een niet-flexibele lijm is altijd een veilige keuze, ongeacht de tegelgrootte of vloerverwarming',
      ],
      correctIndex: 0,
      explanation: 'Grote tegels zetten over hun oppervlak meer uit, en vloerverwarming veroorzaakt temperatuurschommelingen — zonder flexibele lijm die deze bewegingen kan opvangen, is het risico op loslating aanzienlijk groter.',
    },
    {
      id: 'C.13.bloom5.multi', toetstermCode: 'C.13.9', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een druk belopen bedrijfsvloer wordt gekozen tussen een gietvloer en pvc-vloerbedekking. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Een gietvloer is naadloos en kan daardoor eenvoudiger schoon te houden zijn bij intensief gebruik',
        'Pvc-vloerbedekking kan bij lokale schade eenvoudiger plaatselijk worden vervangen dan een gietvloer',
        'Beide vloertypen zijn in alle situaties functioneel identiek', 'De keuze tussen beide vloertypen heeft nooit gevolgen voor onderhoud of reparatie',
      ],
      correctIndices: [0, 1],
      explanation: 'Een naadloze gietvloer is hygiënischer/makkelijker schoon te houden, terwijl pvc-vloerbedekking (in banen of tegels) juist eenvoudiger lokaal te repareren is — een reële trade-off tussen deze twee eigenschappen.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.bloom5.mc', toetstermCode: 'C.14.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Voor een gevelbekleding in een streek met veel vorst-dooiwisselingen wordt gekozen tussen een poreuze zandsteen en een dichte hardsteen. Welke conclusie integreert poreusheid en klimaat het best?',
      options: [
        'Een poreuze steen kan water opnemen dat bij vorst uitzet, wat het risico op vorstschade (afschilfering) vergroot — hardsteen is hier doorgaans beter bestand tegen',
        'Poreusheid van een gesteente heeft geen enkele relatie met vorstgevoeligheid', 'Zandsteen is in elk klimaat een gelijkwaardig alternatief voor hardsteen', 'Vorst-dooiwisselingen zijn nooit relevant voor de materiaalkeuze van gevelbekleding',
      ],
      correctIndex: 0,
      explanation: 'Poreuze steensoorten nemen makkelijker vocht op, dat bij bevriezing uitzet en het steenoppervlak kan doen afschilferen (vorstschade) — een dichte, weinig poreuze steen zoals hardsteen is hier beter tegen bestand.',
    },
    {
      id: 'C.14.bloom5.multi', toetstermCode: 'C.14.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij de keuze van natuursteen voor een druk belopen buitentrap spelen slijtvastheid, slipweerstand en poreusheid een rol. Welke conclusies zijn het meest gegrond?',
      options: [
        'Een gepolijste, gladde steen kan esthetisch aantrekkelijk zijn maar bij regen een verhoogd slipgevaar geven',
        'Slijtvastheid alleen is onvoldoende als criterium; slipweerstand is voor een buitentrap minstens zo relevant',
        'Poreusheid is bij een buitentrap volledig irrelevant, alleen slijtvastheid telt',
        'Alle natuursteensoorten hebben exact dezelfde slipweerstand ongeacht de afwerking',
      ],
      correctIndices: [0, 1],
      explanation: 'Voor een belopen buitentrap zijn zowel slijtvastheid als slipweerstand relevant — een gepolijste afwerking kan de slipweerstand juist verminderen, ondanks een aantrekkelijk uiterlijk.',
    },
  ],
}
