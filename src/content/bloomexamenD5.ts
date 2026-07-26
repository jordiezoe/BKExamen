import type { Question } from '../types/content'

/**
 * Bloom-examen — vijfde golf, sectie D. Nog hoger niveau dan ronde 1-4:
 * uitsluitend Evalueren/Synthese, met meerstaps-redeneervragen die twee of
 * meer begrippen tegelijk combineren en subtiele, bijna-goede afleiders.
 * GEEN open vragen. Nieuwe, niet overlappende feiten t.o.v. alle eerdere
 * bloomexamenD*-bestanden. Origineel geschreven.
 */
export const bloomExamenD5: Record<string, Question[]> = {
  'D.1': [
    {
      id: 'D.1.bloom5.mc', toetstermCode: 'D.1.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een VvE gebruikt een MJOP dat uitsluitend op NEN 2767-conditiemeting is gebaseerd, zonder rekening te houden met geplande verduurzamingsmaatregelen (isolatie, warmtepomp). Welke conclusie over de volledigheid van dit MJOP is het meest gegrond?',
      options: [
        'Het MJOP geeft een goed beeld van de huidige technische staat, maar mist de toekomstige investeringsbehoefte die uit verduurzamingsambities voortvloeit',
        'Een conditiemeting maakt elke aanvullende planning voor verduurzaming overbodig',
        'Verduurzaming heeft nooit gevolgen voor een onderhoudsplanning', 'Een MJOP moet uitsluitend technische conditie bevatten en nooit ambities voor de toekomst',
      ],
      correctIndex: 0,
      explanation: 'NEN 2767 beoordeelt de huidige conditie van bouwdelen, maar zegt niets over toekomstige, gewenste ingrepen zoals verduurzaming — een volledig MJOP combineert beide perspectieven.',
    },
    {
      id: 'D.1.bloom5.multi', toetstermCode: 'D.1.2', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een VvE moet kiezen tussen jaarlijks kleine onderhoudsbudgetten reserveren of periodiek een groter bedrag ineens innen voor grote ingrepen (zoals gevelrenovatie). Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Gespreid reserveren voorkomt een plotselinge, hoge financiële last voor bewoners',
        'Periodiek groot innen kan beter aansluiten bij de daadwerkelijke, onregelmatige timing van grote ingrepen',
        'De financieringswijze van onderhoud heeft geen enkele invloed op de bewoners', 'Er bestaat maar één juiste manier om onderhoud te financieren, ongeacht de situatie',
      ],
      correctIndices: [0, 1],
      explanation: 'Beide financieringsstrategieën hebben eigen voor- en nadelen (voorspelbaarheid versus aansluiting bij daadwerkelijke uitgaven) — de keuze is een bewuste afweging, geen universeel juiste aanpak.',
    },
  ],
  'D.2': [
    {
      id: 'D.2.bloom5.mc', toetstermCode: 'D.2.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Bij een opname worden zowel losse voegen in de gevel als vochtplekken op het binnenplafond onder het dak geconstateerd. Welke conclusie over de prioritering van herstel is het meest genuanceerd?',
      options: [
        'Beide gebreken moeten apart worden beoordeeld op risico en urgentie — losse voegen (vallend gevaar) kunnen urgenter zijn dan vochtplekken, ook al lijkt het laatste zichtbaar ernstiger',
        'Vochtplekken zijn altijd urgenter dan losse voegen, ongeacht de omstandigheden',
        'Beide gebreken hebben altijd exact dezelfde prioriteit', 'Alleen het gebrek dat het meest zichtbaar is, verdient aandacht',
      ],
      correctIndex: 0,
      explanation: 'Prioritering hoort gebaseerd te zijn op risico (bijvoorbeeld vallend gevaar bij losse voegen) en niet simpelweg op zichtbaarheid — een grondige beoordeling kijkt naar de aard van elk gebrek afzonderlijk.',
    },
    {
      id: 'D.2.bloom5.multi', toetstermCode: 'D.2.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Bij de beoordeling van een dak worden zowel verzakte dakbedekking als loszittende dakpannen aangetroffen. Welke conclusies over de onderlinge samenhang zijn het meest gegrond?',
      options: [
        'Beide gebreken kunnen onafhankelijk van elkaar ontstaan, maar ook een gemeenschappelijke oorzaak hebben (bijvoorbeeld een verzakte onderconstructie)',
        'Nader onderzoek naar de onderliggende dakconstructie kan nodig zijn om de relatie tussen beide gebreken vast te stellen',
        'Deze twee gebreken hebben per definitie altijd exact dezelfde oorzaak',
        'Verzakte dakbedekking en loszittende pannen zijn nooit met elkaar verbonden',
      ],
      correctIndices: [0, 1],
      explanation: 'Zonder nader onderzoek is niet met zekerheid te zeggen of beide gebreken een gemeenschappelijke oorzaak hebben (bijvoorbeeld constructieve verzakking) of onafhankelijk zijn ontstaan — vervolgonderzoek is dan aangewezen.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.bloom5.mc', toetstermCode: 'D.3.5', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning combineert tekenen van optrekkend vocht onderaan de muren met condensvorming op de ramen. Welke conclusie over de onderlinge relatie tussen beide verschijnselen is het meest zorgvuldig?',
      options: [
        'Dit zijn vermoedelijk twee onafhankelijke vochtmechanismen (capillaire opstijging vanuit de fundering versus binnenluchtvocht dat tegen koud glas condenseert) die elk hun eigen aanpak vergen',
        'Optrekkend vocht en raamcondens hebben altijd exact dezelfde oorzaak en oplossing',
        'Als het raamcondens wordt opgelost, verdwijnt het optrekkend vocht automatisch mee',
        'Deze twee verschijnselen kunnen nooit tegelijk in dezelfde woning voorkomen',
      ],
      correctIndex: 0,
      explanation: 'Optrekkend vocht (capillaire werking vanuit de fundering) en raamcondens (binnenluchtvocht tegen een koud oppervlak) zijn twee verschillende mechanismen die toevallig tegelijk kunnen voorkomen, maar elk hun eigen diagnose en aanpak vergen.',
    },
    {
      id: 'D.3.bloom5.multi', toetstermCode: 'D.3.2', type: 'multi', bloom: 'Evalueren',
      prompt: 'Voor een bestaande spouwmuur zonder isolatie wordt gekozen tussen naisolatie van de spouw of buitengevelisolatie. Welke overwegingen zijn hierbij het meest valide?',
      options: [
        'Naisolatie is vaak goedkoper en minder ingrijpend, maar de isolatiedikte is beperkt tot de bestaande spouwbreedte',
        'Buitengevelisolatie kan een dikkere isolatielaag en dus een hogere Rc-waarde bieden, maar is ingrijpender en verandert het gevelaanzicht',
        'Beide opties geven altijd exact dezelfde isolatiewaarde', 'De keuze tussen beide opties heeft geen enkele esthetische consequentie',
      ],
      correctIndices: [0, 1],
      explanation: 'Naisolatie is beperkt tot de bestaande spouwbreedte maar minder ingrijpend; buitengevelisolatie kan dikker en dus isolerender zijn, maar wijzigt het gevelbeeld en is kostbaarder — een reële trade-off.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.bloom5.mc', toetstermCode: 'D.4.3', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning combineert een goed energielabel (dankzij een warmtepomp en zonnepanelen) met bouwmaterialen die een hoge milieu-impact hebben gehad tijdens productie (hoge MPG-score). Welke conclusie over de totale duurzaamheid is het meest genuanceerd?',
      options: [
        'Energielabel en MPG meten verschillende aspecten van duurzaamheid (gebruiksfase-energie versus materiaal-levenscyclus) — een goed energielabel zegt dus niet automatisch iets over een lage milieu-impact van de gebruikte materialen',
        'Een goed energielabel garandeert altijd ook een lage MPG-score',
        'MPG en energielabel meten precies hetzelfde en zijn dus onderling inwisselbaar',
        'Materiaalkeuze heeft geen enkele relatie met de totale duurzaamheid van een gebouw',
      ],
      correctIndex: 0,
      explanation: 'Het energielabel richt zich op het energieverbruik tijdens gebruik, de MPG op de milieu-impact van de gebruikte materialen over hun levenscyclus — twee aparte assen van duurzaamheid die niet automatisch samenvallen.',
    },
    {
      id: 'D.4.bloom5.multi', toetstermCode: 'D.4.5', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een renovatieproject combineert hergebruikte, gedemonteerde bouwmaterialen met nieuwe, biobased materialen. Welke conclusies over de duurzaamheidsstrategie zijn het meest gegrond?',
      options: [
        'Hergebruik voorkomt de milieu-impact van nieuwe productie voor dat specifieke materiaal',
        'Biobased materialen kunnen CO₂ vastleggen die tijdens de groei is opgenomen',
        'Beide strategieën volgen exact dezelfde onderliggende milieulogica zonder enig verschil',
        'Hergebruik en biobased bouwen kunnen elkaar goed aanvullen binnen één circulair ontwerp',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Hergebruik en biobased bouwen zijn twee verschillende (maar complementaire) strategieën binnen circulair bouwen: de één voorkomt nieuwe productie, de ander legt CO₂ vast — samen kunnen ze een sterke duurzaamheidsstrategie vormen.',
    },
  ],
}
