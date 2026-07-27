import type { Question } from '../types/content'

/**
 * "Zwaarste examen" — sectie C. Zie zwaarExamenA.ts voor de opzet.
 */
export const zwaarExamenC: Record<string, Question[]> = {
  'C.1': [
    {
      id: 'C.1.zwaar1', toetstermCode: 'C.1.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een gescheiden rioolstelsel wordt in een wijk met hoge grondwaterstand gecombineerd met infiltratiekratten voor hemelwater. Na een periode van aanhoudende regen treedt lokale wateroverlast op, terwijl de riolering zelf niet overbelast is. Welke conclusie integreert deze gegevens het best?',
      options: [
        'Bij een hoge grondwaterstand is de infiltratiecapaciteit van de kratten beperkt, waardoor het systeem zijn bergingsfunctie niet volledig kan waarmaken, ook al functioneert de rioolafvoer zelf naar behoren',
        'Als de riolering niet overbelast is, kan wateroverlast nooit gerelateerd zijn aan het hemelwatersysteem',
        'Infiltratiekratten werken bij elke grondwaterstand exact even effectief', 'Wateroverlast bewijst automatisch een defect aan de rioolbuizen zelf',
      ],
      correctIndex: 0,
      explanation: 'Infiltratie werkt via het wegzakken van water in de bodem; bij een hoge grondwaterstand is er beperkte "ruimte" voor infiltratie, wat tot lokale overlast kan leiden zonder dat de rioolafvoer zelf faalt.',
    },
  ],
  'C.2': [
    {
      id: 'C.2.zwaar1', toetstermCode: 'C.2.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een woningcorporatie ontdekt bij meerdere complexen tegelijk een verhoogd legionellarisico, veroorzaakt door een combinatie van te lage boilertemperatuur én dode leidingeinden bij zelden gebruikte appartementen. Welke maatregel pakt beide oorzaken het meest gecombineerd aan?',
      options: [
        'De boilertemperatuur verhogen naar het voorgeschreven niveau én een periodiek doorspoelprotocol voor zelden gebruikte tappunten invoeren',
        'Alleen de boilertemperatuur aanpassen, want dode leidingeinden zijn nooit een reëel risico',
        'Alleen de leidingen doorspoelen, zonder de boilertemperatuur aan te passen',
        'Deze twee factoren kunnen nooit gelijktijdig om een gecombineerde aanpak vragen',
      ],
      correctIndex: 0,
      explanation: 'Temperatuur en stilstand zijn twee onafhankelijke risicofactoren voor legionella; een volledige aanpak vereist het corrigeren van beide, niet slechts één van de twee.',
    },
  ],
  'C.3': [
    {
      id: 'C.3.zwaar1', toetstermCode: 'C.3.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een wijk met overwegend monumentale, moeilijk te isoleren woningen moet van het aardgas af. Individuele warmtepompen zijn technisch beperkt haalbaar door de matige isolatie. Welke oplossingsrichting sluit het best aan bij deze specifieke context?',
      options: [
        'Een collectief warmtenet (bijvoorbeeld met een hogere aanvoertemperatuur), dat minder afhankelijk is van een uitstekende woningisolatie dan een individuele lagetemperatuur-warmtepomp',
        'Elke woning verplicht overschakelen op een individuele lagetemperatuur-warmtepomp, ongeacht de isolatiegraad',
        'De monumentale status maakt elke vorm van aardgasvrij verwarmen onmogelijk',
        'Isolatie is bij deze keuze volledig irrelevant',
      ],
      correctIndex: 0,
      explanation: 'Een warmtenet kan met hogere temperaturen werken en is daardoor minder afhankelijk van een zeer goede woningisolatie dan een individuele warmtepomp — een passende oplossing voor moeilijk te isoleren, monumentale woningen.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.zwaar1', toetstermCode: 'C.4.4', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een woning heeft een 3×25A aansluiting. Een warmtepomp trekt gemiddeld 12A per fase en een laadpaal 16A op één fase, gelijktijdig met overig huishoudelijk verbruik van gemiddeld 5A op diezelfde fase. Wat is het meest waarschijnlijke gevolg zonder load balancing?',
      options: [
        'Op de fase met laadpaal, warmtepomp en huishoudelijk verbruik samen kan de 25A-grens worden overschreden, met uitval van die groep tot gevolg',
        'De aansluiting heeft altijd voldoende capaciteit, ongeacht de opgetelde belasting',
        'Alleen de warmtepomp kan ooit tot overbelasting leiden, de laadpaal nooit',
        'Load balancing is bij een 3-fase aansluiting nooit relevant',
      ],
      correctIndex: 0,
      explanation: '12A (warmtepomp) + 16A (laadpaal) + 5A (huishoudelijk) = 33A op één fase, ruim boven de 25A-grens — zonder load balancing (die de laadpaal bijvoorbeeld tijdelijk terugregelt) is uitval waarschijnlijk.',
    },
    {
      id: 'C.4.zwaar2', toetstermCode: 'C.4.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een elektra-inspecteur vindt bij een woning zowel een verouderde, niet-selectieve aardlekschakelaar (beveiligt de hele installatie in één keer) als installatieautomaten die niet zijn afgestemd op de aangesloten apparatuur. Welke conclusies zijn het meest gegrond?',
      options: [
        'Een niet-selectieve aardlekschakelaar kan bij een lekstroom op één groep de gehele installatie onnodig laten uitvallen',
        'Verkeerd afgestemde installatieautomaten kunnen leiden tot te late of te vroege uitschakeling bij overbelasting',
        'Beide gebreken beschermen in werkelijkheid tegen exact hetzelfde risico, dus één ervan verhelpen is voldoende',
        'Deze twee bevindingen wijzen op twee onafhankelijke tekortkomingen in de veiligheid van de installatie',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Selectiviteit van aardlekschakelaars en correcte dimensionering van installatieautomaten zijn twee losse aspecten van elektrische veiligheid; beide gebreken zijn onafhankelijk relevant en vergen aparte correctie.',
    },
  ],
  'C.5': [
    {
      id: 'C.5.zwaar1', toetstermCode: 'C.5.5', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een plat dak met meerdere rijen zonnepanelen wordt de hellingshoek verhoogd voor een betere jaaropbrengst per paneel, maar dit vergroot de onderlinge rijafstand die nodig is om slagschaduw te voorkomen — waardoor per saldo minder panelen op het dak passen. Welke conclusie is het meest genuanceerd?',
      options: [
        'De optimale hellingshoek voor een individueel paneel is niet per definitie de hellingshoek die de hoogste totale dakopbrengst geeft — een integrale afweging tussen hellingshoek, rijafstand en paneelaantal is nodig',
        'Een hogere hellingshoek geeft altijd de hoogste totale dakopbrengst, ongeacht het aantal panelen',
        'Rijafstand en hellingshoek hebben geen enkele onderlinge relatie', 'Slagschaduw is nooit een relevante factor bij het ontwerp van een PV-installatie',
      ],
      correctIndex: 0,
      explanation: 'Dit illustreert een klassiek optimalisatievraagstuk: de beste hellingshoek per paneel is niet automatisch de beste keuze voor de totale dakopbrengst, omdat een grotere rijafstand het aantal panelen beperkt.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.zwaar1', toetstermCode: 'C.6.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning behoudt bestaande hogetemperatuur-radiatoren, krijgt een warmtepomp én isoleert gelijktijdig de gevel fors. Welke conclusie over de gecombineerde impact op de warmtebalans is het meest volledig?',
      options: [
        'Betere isolatie verlaagt de warmtevraag, wat de kans vergroot dat de bestaande radiatoren, ook bij lagere aanvoertemperatuur, alsnog voldoende warmte kunnen afgeven voor het gewenste comfort',
        'Isolatie heeft geen enkele invloed op de haalbaarheid van een lagere aanvoertemperatuur bij bestaande radiatoren',
        'De warmtepomp kan door isolatie nooit op een lagere aanvoertemperatuur werken',
        'Radiatorgrootte en isolatiegraad hebben geen enkele onderlinge samenhang',
      ],
      correctIndex: 0,
      explanation: 'Een lagere warmtevraag door isolatie compenseert deels de lagere warmteafgifte van radiatoren bij een lagere aanvoertemperatuur — de drie maatregelen (radiatoren, warmtepomp, isolatie) beïnvloeden elkaar dus wederzijds.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.zwaar1', toetstermCode: 'C.7.1', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een kantoorgebouw combineert veel interne warmtelast (serverruimte) met een grote, zuidgerichte glaspui. Voor de serverruimte wordt losstaande koeling toegepast, voor de kantoorruimte buitenzonwering. Welke conclusie over deze aanpak is het meest gegrond?',
      options: [
        'De twee maatregelen zijn passend afgestemd op hun eigen, dominante warmtebron: interne apparatuurwarmte (koeling) versus zoninstraling (zonwering)',
        'Buitenzonwering had ook de serverruimte afdoende kunnen koelen', 'Losstaande koeling is voor de hele kantoorruimte de enige juiste oplossing', 'De keuze van maatregel hangt nooit af van de bron van de warmtelast',
      ],
      correctIndex: 0,
      explanation: 'Interne warmtelast (apparatuur) en zoninstraling zijn verschillende warmtebronnen die elk hun eigen, passende maatregel vragen — de gekozen aanpak sluit hier goed op aan.',
    },
  ],
  'C.8': [
    {
      id: 'C.8.zwaar1', toetstermCode: 'C.8.5', type: 'mc', bloom: 'Synthese',
      prompt: 'Een verzorgingstehuis combineert goede compartimentering per afdeling met een brandmeldinstallatie met doormelding (OMS), maar de bewoners zijn merendeels slecht zelfredzaam. Welke conclusie over de resterende brandveiligheidsopgave is het meest volledig?',
      options: [
        'Ondanks compartimentering en snelle alarmering blijft de daadwerkelijke ontruimingstijd van slecht zelfredzame bewoners een aanvullend aandachtspunt dat organisatorische maatregelen (zoals horizontale ontruiming, extra personeel) vergt',
        'Compartimentering en doormelding maken elke aanvullende maatregel voor zelfredzaamheid overbodig',
        'Zelfredzaamheid van bewoners is nooit relevant voor de brandveiligheidsstrategie van een gebouw',
        'Een brandmeldinstallatie met doormelding lost het probleem van beperkte zelfredzaamheid volledig op',
      ],
      correctIndex: 0,
      explanation: 'Bouwkundige (compartimentering) en installatietechnische (OMS) maatregelen alleen zijn onvoldoende als de gebruikers zelf niet snel kunnen vluchten — organisatorische maatregelen zoals horizontale ontruiming blijven dan noodzakelijk.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.zwaar1', toetstermCode: 'C.9.6', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning wordt zowel luchtdichter gemaakt als voorzien van een grotere warmtepomp met bijbehorend hoger elektrisch verbruik, zonder de ventilatiecapaciteit aan te passen. Naast condens ontstaat ook een merkbaar hogere CO₂-concentratie. Welke conclusie combineert deze bevindingen het meest volledig?',
      options: [
        'De luchtdichting is de gemeenschappelijke onderliggende oorzaak van beide symptomen; de warmtepompkeuze staat hier grotendeels los van, want die beïnvloedt niet direct de luchtverversing',
        'De warmtepomp is de enige oorzaak van beide symptomen', 'Condens en CO₂-concentratie hebben nooit een gemeenschappelijke oorzaak', 'Ventilatie is bij deze combinatie van maatregelen nooit relevant',
      ],
      correctIndex: 0,
      explanation: 'Luchtdichting zonder aanpassing van de ventilatie is de kern van het probleem voor beide symptomen; de warmtepompkeuze zelf beïnvloedt de luchtverversing niet rechtstreeks en is in dit opzicht minder relevant.',
    },
  ],
  'C.10': [
    {
      id: 'C.10.zwaar1', toetstermCode: 'C.10.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een woningeigenaar wil zowel PKVW-inbraakwerendheid als een domoticasysteem met op afstand bedienbare sloten. Een veiligheidsadviseur wijst op het risico dat een digitale kwetsbaarheid de fysieke maatregelen kan ondermijnen. Welke conclusie is het meest zorgvuldig?',
      options: [
        'Naast fysieke certificering is ook de beveiliging van de digitale laag (software-updates, sterke authenticatie) relevant voor de totale weerstand tegen inbraak',
        'PKVW-certificering maakt digitale kwetsbaarheden irrelevant voor de totale veiligheid',
        'Domotica kan nooit een negatief effect hebben op de fysieke inbraakwerendheid',
        'Digitale en fysieke beveiliging zijn twee volledig gescheiden vraagstukken zonder enige onderlinge invloed',
      ],
      correctIndex: 0,
      explanation: 'Een digitaal kwetsbaar systeem kan een fysiek sterk slot omzeilen via de digitale ontgrendeling — de totale veiligheid hangt dus af van zowel de fysieke als de digitale laag, niet van één van beide alleen.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.zwaar1', toetstermCode: 'C.11.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een zuidgevel combineert triple-glas (zeer lage U-waarde) met een lage ZTA-waarde (sterk zonwerend), in een klimaat met koude winters én warme zomers. Welke conclusie over het jaarrond-comfort is het meest genuanceerd?',
      options: [
        'De lage ZTA beperkt ook de gewenste, gratis passieve zonnewarmte in de winter, wat een grotere afhankelijkheid van actieve verwarming in de winter tot gevolg kan hebben — een zomer-winter trade-off die zorgvuldige afweging vergt',
        'Triple-glas met lage ZTA is in elk klimaat zonder enig nadeel de optimale keuze', 'ZTA is alleen relevant in de zomer en heeft geen enkel effect in de winter', 'Een lage U-waarde maakt de ZTA-waarde volledig irrelevant',
      ],
      correctIndex: 0,
      explanation: 'Een lage ZTA-waarde weert weliswaar zomerse oververhitting, maar beperkt ook de welkome passieve zonnewinst in de winter — bij een klimaat met uitgesproken winters én zomers is dit een reële trade-off, geen eenduidig voordeel.',
    },
  ],
  'C.12': [
    {
      id: 'C.12.zwaar1', toetstermCode: 'C.12.1', type: 'mc', bloom: 'Synthese',
      prompt: 'Een voordeur combineert SKG ★★★-hang- en sluitwerk met een kozijn dat volgens een verouderde detaillering (zonder versterkte sponning) in de gevel is verankerd. Welke conclusie over de daadwerkelijke inbraakwerendheid is het meest gegrond?',
      options: [
        'De totale weerstand wordt beperkt door de zwakste schakel in de keten (slot, sluitplaat, kozijn, verankering) — een verouderde kozijndetaillering kan het effect van een zwaar gecertificeerd slot grotendeels tenietdoen',
        'Het SKG ★★★-certificaat garandeert de volledige weerstand van de deurpartij, ongeacht de kozijndetaillering',
        'Kozijndetaillering heeft geen enkele invloed op de inbraakwerendheid van een deur',
        'Verouderde detaillering kan nooit een negatief effect hebben als het slot zelf zwaar genoeg gecertificeerd is',
      ],
      correctIndex: 0,
      explanation: 'Inbraakwerendheid is een keten-eigenschap; een zwakke schakel (hier de kozijnverankering) beperkt de effectieve weerstand van de hele deurpartij, ongeacht hoe zwaar het slot zelf gecertificeerd is.',
    },
  ],
  'C.13': [
    {
      id: 'C.13.zwaar1', toetstermCode: 'C.13.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een badkamer met vloerverwarming combineert grootformaat tegels, een niet-flexibele oude tegellijm én een dilatatievoeg in de onderliggende dekvloer die niet is doorgezet in het tegelwerk. Welke conclusie over het risico op schade is het meest volledig?',
      options: [
        'Drie afzonderlijke risicofactoren (thermische beweging door vloerverwarming, onvoldoende flexibiliteit van de lijm, en een niet-doorgezette dilatatievoeg) versterken elkaar, wat het risico op scheuren of loslating aanzienlijk groter maakt dan bij elke factor afzonderlijk',
        'Alleen de tegelgrootte is relevant voor het schaderisico, de andere factoren doen er niet toe', 'Een niet-doorgezette dilatatievoeg heeft geen enkel effect als de lijm maar sterk genoeg is', 'Deze drie factoren hebben geen enkele onderlinge samenhang',
      ],
      correctIndex: 0,
      explanation: 'Elke factor afzonderlijk vergroot het risico op scheurvorming, en in combinatie versterken ze elkaar — een compleet risicobeeld vereist het beoordelen van alle drie de factoren samen, niet één ervan geïsoleerd.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.zwaar1', toetstermCode: 'C.14.3', type: 'mc', bloom: 'Evalueren',
      prompt: 'Voor een gevelrestauratie van een monument met verweerde zandstenen ornamenten wordt gekozen tussen volledige vervanging door nieuwe zandsteen of chemische consolidatie (verharding) van het bestaande, verweerde oppervlak. Welke overweging pleit het sterkst voor consolidatie?',
      options: [
        'Consolidatie behoudt het originele, historische materiaal en de bijbehorende monumentale waarde, mits de verwering nog niet te ver is gevorderd',
        'Consolidatie geeft altijd een sterker eindresultaat dan volledige vervanging', 'Vervanging is in alle gevallen goedkoper dan consolidatie', 'Monumentale waarde is bij deze keuze nooit een relevante factor',
      ],
      correctIndex: 0,
      explanation: 'Consolidatie is precies bedoeld om origineel materiaal (en dus monumentale authenticiteit) te behouden waar dit nog mogelijk is; bij te ver gevorderde verwering is vervanging echter alsnog nodig — de keuze hangt af van de mate van verwering.',
    },
  ],
}
