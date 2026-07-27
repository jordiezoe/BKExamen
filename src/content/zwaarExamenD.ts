import type { Question } from '../types/content'

/**
 * "Zwaarste examen" — sectie D. Zie zwaarExamenA.ts voor de opzet. Dit blok
 * is in de echte proeftoets casusgericht — vandaar iets uitgebreidere
 * scenario's per vraag, net als in het echte examen.
 */
export const zwaarExamenD: Record<string, Question[]> = {
  'D.1': [
    {
      id: 'D.1.zwaar1', toetstermCode: 'D.1.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een VvE laat een MJOP opstellen op basis van NEN 2767-conditiemetingen, maar de opsteller rondt bewust alle conditiescores naar boven af "om paniek te voorkomen". Welke conclusie over de betrouwbaarheid van dit MJOP is het meest gegrond?',
      options: [
        'Het MJOP onderschat structureel de werkelijke onderhoudsbehoefte, wat op termijn tot onvoldoende reservering en onverwachte kosten kan leiden',
        'Naar boven afronden heeft geen enkel effect op de betrouwbaarheid van de planning',
        'Een MJOP is per definitie altijd betrouwbaar, ongeacht hoe de scores zijn bepaald',
        'Afronding naar boven leidt juist tot een te voorzichtige, te dure planning',
      ],
      correctIndex: 0,
      explanation: 'Bewust te gunstige (naar boven afgeronde) scores geven een te rooskleurig beeld van de conditie, wat leidt tot onderreservering — het tegenovergestelde van een te voorzichtige planning.',
    },
    {
      id: 'D.1.zwaar2', toetstermCode: 'D.1.2', type: 'multi', bloom: 'Synthese',
      prompt: 'Een VvE-bestuur overweegt het MJOP te herzien om ook de kosten van verduurzaming (isolatie, warmtepomp) mee te nemen, naast de reguliere NEN 2767-onderhoudsposten. Welke conclusies over deze herziening zijn het meest gegrond?',
      options: [
        'Verduurzamingsmaatregelen vergen doorgaans investeringen die niet uit een reguliere conditiemeting naar voren komen',
        'Een geïntegreerd MJOP geeft de VvE een vollediger beeld van de totale toekomstige investeringsbehoefte',
        'Verduurzaming en regulier onderhoud kunnen bij de uitvoering (bijvoorbeeld gelijktijdige gevelwerkzaamheden) elkaar overlappen, wat kansen voor combinatie biedt',
        'Verduurzaming hoort nooit thuis in een MJOP, dat uitsluitend over achterstallig onderhoud mag gaan',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Verduurzaming valt buiten een zuivere conditiemeting maar is wel degelijk relevant voor de totale investeringsplanning van een VvE, en kan bovendien praktisch gecombineerd worden met regulier onderhoud (bijvoorbeeld gevelwerk).',
    },
    {
      id: 'D.1.zwaar3', toetstermCode: 'D.1.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een MJOP voorspelt voor jaar 12 een grote, kostbare gevelrenovatie, maar een tussentijdse conditiemeting in jaar 8 laat zien dat de gevel sneller veroudert dan aangenomen. Wat is de meest verantwoorde reactie van het VvE-bestuur?',
      options: [
        'Het MJOP tussentijds bijstellen op basis van de nieuwe conditiemeting, ook al wijkt dit af van de oorspronkelijke planning',
        'Vasthouden aan het oorspronkelijke jaartal, ongeacht nieuwe metingen',
        'De nieuwe conditiemeting negeren omdat een MJOP na vaststelling nooit meer wijzigt',
        'Direct alle reserveringen voor andere bouwdelen stopzetten ten gunste van de gevel',
      ],
      correctIndex: 0,
      explanation: 'Een MJOP is een dynamisch instrument dat op basis van actuele conditiemetingen moet worden bijgesteld — vasthouden aan een verouderde planning ondanks nieuwe informatie is niet verantwoord.',
    },
    {
      id: 'D.1.zwaar4', toetstermCode: 'D.1.3', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een VvE vergelijkt twee reserveringsstrategieën voor het MJOP: een lineaire spaarmethode (elk jaar hetzelfde bedrag) of een methode die aansluit bij de daadwerkelijke uitgavenpiek per jaar. Welke conclusie over de lineaire methode is het meest gegrond?',
      options: [
        'De lineaire methode is eenvoudiger en voorspelbaarder voor bewoners, maar kan tijdelijk tot een te lage of te hoge reservepositie leiden ten opzichte van de daadwerkelijke uitgaven in een specifiek jaar',
        'De lineaire methode sluit altijd exact aan bij de daadwerkelijke jaarlijkse uitgaven',
        'Reserveringsmethode heeft geen enkele invloed op de financiële positie van de VvE',
        'Een lineaire methode is in alle opzichten superieur aan elke andere methode',
      ],
      correctIndex: 0,
      explanation: 'Een lineaire spaarmethode is voorspelbaar maar volgt niet noodzakelijk de daadwerkelijke, vaak ongelijkmatige verdeling van grote uitgaven over de jaren — een reëel afwegingspunt tussen eenvoud en nauwkeurigheid.',
    },
  ],
  'D.2': [
    {
      id: 'D.2.zwaar1', toetstermCode: 'D.2.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Bij een opname van een jaren-30-woning worden gelijktijdig geconstateerd: haarscheurtjes in het gestucte plafond, een lichte muffe geur in de kruipruimte, en klemmende ramen op de eerste verdieping. De koper vraagt of dit één probleem is. Wat is het meest zorgvuldige antwoord?',
      options: [
        'Dit kunnen drie afzonderlijke, veelvoorkomende ouderdomsverschijnselen zijn die stuk voor stuk beoordeeld moeten worden — gezamenlijk voorkomen bewijst geen gemeenschappelijke oorzaak, al is nader onderzoek (bijvoorbeeld naar zettingsgedrag) verstandig om dit uit te sluiten',
        'Dit is gegarandeerd één en hetzelfde funderingsprobleem', 'Klemmende ramen hebben nooit iets te maken met stucwerk of kruipruimtes', 'Een muffe geur in de kruipruimte is altijd onschuldig en behoeft geen nader onderzoek',
      ],
      correctIndex: 0,
      explanation: 'Elk symptoom kan een eigen, veelvoorkomende verklaring hebben (stucwerkkrimp, kruipruimteventilatie, houtwerkzwelling); zonder nader onderzoek is een gezamenlijke oorzaak (zoals zetting) niet bewezen, maar ook niet uit te sluiten — vandaar het advies tot nader onderzoek.',
    },
    {
      id: 'D.2.zwaar2', toetstermCode: 'D.2.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een taxateur moet bij een korte bezichtiging prioriteren welke bouwdelen het eerst worden gecontroleerd op gebreken. Welke volgorde is het meest verdedigbaar vanuit risico-overwegingen?',
      options: [
        'Eerst constructieve/veiligheidsrisico\'s (fundering, dragende delen, brandveiligheid), dan bouwfysische risico\'s (vocht, isolatie), dan esthetische afwerking',
        'Altijd eerst de esthetische afwerking, want die is het meest zichtbaar', 'De volgorde van controle is irrelevant zolang alles uiteindelijk wordt bekeken', 'Altijd eerst de tuin en buitenruimte, ongeacht de bouwkundige staat van de woning zelf',
      ],
      correctIndex: 0,
      explanation: 'Een risicogebaseerde prioritering begint bij zaken die de veiligheid of structurele integriteit raken, vóór bouwfysische en ten slotte esthetische aspecten — dit is de meest verdedigbare volgorde bij beperkte tijd.',
    },
    {
      id: 'D.2.zwaar3', toetstermCode: 'D.2.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij twee identieke rijtjeswoningen is bij nummer 12 een scheefstand van 1:150 gemeten en bij nummer 14 een scheefstand van 1:400, beide op houten paalfunderingen uit dezelfde bouwperiode. Welke conclusie is het meest gegrond?',
      options: [
        'Ondanks gelijke bouwperiode en funderingstype kan de daadwerkelijke conditie van de fundering per pand sterk verschillen, bijvoorbeeld door lokale verschillen in grondwaterstand of belasting',
        'Beide woningen hebben gegarandeerd exact dezelfde funderingsconditie omdat ze identiek zijn gebouwd', 'Scheefstand zegt nooit iets over de funderingsconditie', 'Een verschil in scheefstand tussen buurpanden is onmogelijk bij gelijke bouwperiode',
      ],
      correctIndex: 0,
      explanation: 'Gelijke bouwperiode en funderingstype garanderen geen gelijke huidige conditie — lokale factoren (grondwaterstand, belasting, bodemsamenstelling) kunnen per pand verschillen en tot uiteenlopende scheefstand leiden.',
    },
    {
      id: 'D.2.zwaar4', toetstermCode: 'D.2.3', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke signalen bij een visuele gevelinspectie wijzen het meest direct op een mogelijk urgent, veiligheidsgerelateerd gebrek (in plaats van een cosmetisch gebrek)?',
      options: [
        'Losse of uitstekende stenen die met de hand bewegen', 'Een scheur die zich zichtbaar over meerdere lagen metselwerk verticaal voortzet en verder open staat dan een haarscheurtje', 'Een lichte verkleuring van het voegwerk zonder verdere afwijkingen', 'Vochtvlekken die na regen zichtbaar zijn maar bij droog weer weer verdwijnen',
      ],
      correctIndices: [0, 1],
      explanation: 'Losse stenen (vallend gevaar) en een doorgaande, open scheur over meerdere lagen zijn signalen van mogelijk urgente, structurele problemen; lichte verkleuring en tijdelijke vochtvlekken zijn doorgaans minder urgent.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.zwaar1', toetstermCode: 'D.3.5', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning combineert tekenen van optrekkend vocht onderaan de gevel met condensvorming op de ramen én een muffe geur op de begane grond. De bewoner heeft recent extra tochtstrips aangebracht bij alle ramen en deuren. Welke conclusie integreert alle gegevens het best?',
      options: [
        'De tochtstrips hebben de natuurlijke luchtverversing verder beperkt, wat de raamcondens en muffe geur kan verergeren; het optrekkend vocht is hier vermoedelijk een apart, ongerelateerd mechanisme (capillaire werking vanuit de fundering)',
        'Alle drie de symptomen zijn uitsluitend het gevolg van de tochtstrips', 'Optrekkend vocht wordt altijd veroorzaakt door tochtstrips bij ramen', 'Deze drie symptomen kunnen onmogelijk gelijktijdig voorkomen',
      ],
      correctIndex: 0,
      explanation: 'Tochtstrips verminderen ongecontroleerde ventilatie, wat raamcondens en een muffe geur kan verergeren; optrekkend vocht is een apart, capillair mechanisme vanuit de fundering dat hier los van staat, ook al treden de symptomen gelijktijdig op.',
    },
    {
      id: 'D.3.zwaar2', toetstermCode: 'D.3.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een bestaande spouwmuur heeft een Rc-waarde van 0,8 m²K/W. Na naisolatie van de spouw stijgt dit naar 2,3 m²K/W. Wat betekent deze verandering het meest correct?',
      options: [
        'De warmteweerstand van de constructie is toegenomen, wat duidt op minder warmteverlies door die wand',
        'De warmteweerstand is afgenomen, wat duidt op meer warmteverlies', 'De Rc-waarde zegt niets over de isolatiekwaliteit van een constructie', 'Een hogere Rc-waarde betekent een dunnere constructie',
      ],
      correctIndex: 0,
      explanation: 'De Rc-waarde is de warmteweerstand: hoe hoger, hoe beter de isolatie en hoe minder warmteverlies door dat bouwdeel — de stijging van 0,8 naar 2,3 m²K/W wijst op een duidelijke isolatieverbetering.',
    },
    {
      id: 'D.3.zwaar3', toetstermCode: 'D.3.6', type: 'multi', bloom: 'Analyseren',
      prompt: 'In een slaapkamer met een koudebrug bij de raamdorpel wordt \'s winters zwarte schimmel geconstateerd, precies op de plek van de koudebrug. Welke conclusies zijn hieruit het meest gegrond?',
      options: [
        'De lage oppervlaktetemperatuur bij de koudebrug verhoogt lokaal de relatieve luchtvochtigheid tot boven het punt waarop condensatie en schimmelgroei optreden',
        'Schimmel op precies die locatie is puur toeval en staat los van de koudebrug',
        'Het verbeteren van de lokale isolatie bij de koudebrug kan het risico op herhaling verminderen',
        'Koudebruggen hebben nooit een relatie met relatieve luchtvochtigheid',
      ],
      correctIndices: [0, 2],
      explanation: 'Een koudebrug verlaagt de lokale oppervlaktetemperatuur, wat de relatieve vochtigheid daar verhoogt tot condensatie en schimmelgroei optreden — juist op die locatie, dus geen toeval; lokale isolatieverbetering pakt de oorzaak aan.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.zwaar1', toetstermCode: 'D.4.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Twee vergelijkbare woningen behalen hetzelfde energielabel A, maar woning 1 bereikte dit vooral via zware isolatie en woning 2 vooral via een grote hoeveelheid zonnepanelen zonder extra isolatie. Bij een koude, donkere winterweek zonder zoninstraling presteren beide woningen merkbaar verschillend qua comfort. Welke conclusie is het meest gegrond?',
      options: [
        'Woning 1 behoudt vermoedelijk een stabieler comfort in deze omstandigheden, omdat isolatie het warmteverlies structureel beperkt, terwijl de opwekkingsbijdrage van zonnepanelen bij weinig zon (en dus bij woning 2) wegvalt',
        'Beide woningen presteren in alle omstandigheden exact gelijk omdat het energielabel gelijk is', 'Zonnepanelen zijn qua wintercomfort altijd superieur aan isolatie', 'Het energielabel garandeert gelijk comfort onder alle weersomstandigheden',
      ],
      correctIndex: 0,
      explanation: 'Het energielabel is een jaargemiddelde score en zegt niets over prestaties in specifieke omstandigheden; isolatie werkt structureel (ook zonder zon), terwijl de bijdrage van zonnepanelen wegvalt bij weinig zoninstraling — vandaar het verwachte comfortverschil in deze winterweek.',
    },
    {
      id: 'D.4.zwaar3', toetstermCode: 'D.4.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een gemeente vergelijkt de MPG-score van twee ontwerpen voor hetzelfde gebouw: ontwerp 1 gebruikt veel beton en staal met een lange levensduur, ontwerp 2 gebruikt lichte, biobased materialen met een kortere levensduur die vaker vervangen moeten worden. Welke conclusie over de vergelijking is het meest genuanceerd?',
      options: [
        'De MPG kijkt naar de milieu-impact over de gehele levenscyclus, dus vaker vervangen (ontwerp 2) kan het aanvankelijke milieuvoordeel van biobased materialen deels tenietdoen — een zuivere levenscyclusvergelijking is nodig om te bepalen welk ontwerp per saldo beter scoort',
        'Biobased materialen scoren per definitie altijd beter op MPG, ongeacht vervangingsfrequentie',
        'Beton en staal scoren per definitie altijd beter op MPG vanwege hun lange levensduur',
        'Levensduur is bij een MPG-berekening irrelevant, alleen het materiaal bij aanleg telt',
      ],
      correctIndex: 0,
      explanation: 'De MPG rekent over de hele levenscyclus, inclusief eventuele vervanging — een materiaal met een kortere levensduur dat vaker vervangen moet worden, kan zijn aanvankelijke milieuvoordeel dus (deels) verliezen; een volledige levenscyclusvergelijking is nodig voor een eerlijke uitspraak.',
    },
    {
      id: 'D.4.zwaar2', toetstermCode: 'D.4.5', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een projectontwikkelaar overweegt tussen volledig nieuwe, biobased bouwmaterialen of het hergebruiken van gedemonteerde materialen uit een naastgelegen sloopproject, voor dezelfde nieuwbouw. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Hergebruikte materialen kunnen kwaliteitsvariatie vertonen die extra keuring of bewerking vergt',
        'Biobased materialen leggen tijdens hun groei CO₂ vast, wat een ander soort milieuvoordeel is dan het voorkomen van nieuwe productie bij hergebruik',
        'Beide strategieën volgen exact dezelfde milieulogica en zijn dus volledig inwisselbaar',
        'De keuze kan afhangen van beschikbaarheid, kwaliteit en logistiek van het sloopmateriaal versus de biobased aanvoer',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Hergebruik en biobased bouwen zijn twee verschillende (niet inwisselbare) duurzaamheidsstrategieën met eigen risico\'s (kwaliteitsvariatie bij hergebruik) en voordelen (CO₂-vastlegging bij biobased) — de praktische keuze hangt af van beschikbaarheid en kwaliteit.',
    },
  ],
}
