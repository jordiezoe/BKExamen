import type { Question } from '../types/content'

/**
 * "Zwaarste examen" — sectie A. Een volledig nieuw, vast samengesteld
 * BT1-2-examen op NLQF6-niveau: dezelfde blok-/toetstermverdeling als de
 * echte SVMNIVO-proeftoets, maar met uitsluitend zeer zware, originele
 * meerkeuze-/meerantwoordvragen (Analyseren t/m Synthese). Losstaand van
 * alle eerdere content in deze app — geen enkele feitelijke overlap.
 */
export const zwaarExamenA: Record<string, Question[]> = {
  'A.1': [
    {
      id: 'A.1.zwaar1', toetstermCode: 'A.1.2', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een opdrachtgever kiest voor een geïntegreerd contract (design & construct) om ontwerp- en uitvoeringsrisico bij één partij te leggen, maar wil tegelijk via een onafhankelijke toetsende partij de esthetische kwaliteit bewaken zonder het risico terug te halen. Welke constructie past hier het best?',
      options: [
        'Een esthetisch supervisor/kwaliteitsbewaker met adviserende bevoegdheid, zonder doorzettingsmacht in het contract met de D&C-aannemer',
        'De opdrachtgever neemt de esthetische toetsing volledig zelf terug in het contract, waardoor het geïntegreerde risico feitelijk weer wordt opgesplitst',
        'Een geïntegreerd contract sluit elke vorm van esthetische kwaliteitsbewaking per definitie uit',
        'De D&C-aannemer wordt verplicht de opdrachtgever formeel doorzettingsmacht te geven over esthetische keuzes',
      ],
      correctIndex: 0,
      explanation: 'Een adviserende supervisor bewaakt kwaliteit zonder de contractuele risicoverdeling (en daarmee de kern van het D&C-principe) te ondermijnen; zodra de opdrachtgever doorzettingsmacht terugkrijgt, verschuift het risico feitelijk weer terug.',
    },
    {
      id: 'A.1.zwaar2', toetstermCode: 'A.1.4', type: 'multi', bloom: 'Synthese',
      prompt: 'Een bouwbegroting toont een overschrijding die volledig verklaard wordt door meerwerk, terwijl de directe bouwkosten en de bijkomende kosten beide binnen budget zijn gebleven. Welke conclusies zijn hieruit het meest gegrond?',
      options: [
        'De oorspronkelijke raming van directe en bijkomende kosten was kennelijk realistisch',
        'Het meerwerk is een aparte kostencategorie die los van de kwaliteit van de oorspronkelijke begroting kan ontstaan (bijvoorbeeld door wensen tijdens de bouw)',
        'Een overschrijding door meerwerk bewijst automatisch dat de oorspronkelijke begroting ondeugdelijk was',
        'Meerwerk kan, ondanks dat de rest van de begroting klopte, alsnog tot een substantiële overschrijding van het totaalbudget leiden',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Meerwerk is per definitie niet in de oorspronkelijke raming voorzien en zegt dus niets over de kwaliteit ervan; het kan niettemin de totale kostenoverschrijding volledig verklaren, ook als de rest van de begroting accuraat was.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.zwaar1', toetstermCode: 'A.2.1.5', type: 'mc', bloom: 'Synthese',
      prompt: 'Een bestek, een bestektekening (1:100) en een detailtekening (1:5) van dezelfde kozijnaansluiting spreken elkaar op drie punten subtiel tegen. De uitvoerder heeft slechts tijd om één informatiebron als uitgangspunt te nemen voor een eerste werkbespreking, maar moet zorgvuldig blijven handelen. Wat is de meest professionele aanpak?',
      options: [
        'Alle drie de tegenstrijdigheden expliciet agenderen bij de directie vóór de werkbespreking, ongeacht welke bron als uitgangspunt wordt genomen',
        'Automatisch de detailtekening als enige waarheid aannemen omdat deze de kleinste schaal heeft',
        'De tegenstrijdigheden zelf oplossen op basis van vakkennis, zonder ruggenspraak',
        'Wachten met elke actie tot alle documenten opnieuw zijn uitgegeven',
      ],
      correctIndex: 0,
      explanation: 'Ongeacht welke bron praktisch als uitgangspunt dient voor de bespreking, blijft de waarschuwingsplicht bij tegenstrijdigheden onverkort gelden: alle geconstateerde tegenstrijdigheden moeten worden gemeld, niet stilzwijgend opgelost of genegeerd.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.zwaar1', toetstermCode: 'A.2.2.9', type: 'mc', bloom: 'Analyseren',
      prompt: 'Een woning heeft een strak, ornamentloos volume met plat dak en stalen vensters, maar de gevel is opgetrokken in handvorm-baksteen met een organisch, welvend metselverband rond de entree. Welke conclusie doet het meest recht aan deze combinatie van kenmerken?',
      options: [
        'Het volume en de vensters wijzen op functionalistische invloeden, terwijl het metselwerk rond de entree eerder een ambachtelijke, expressieve invloed verraadt — een menging van stromingen',
        'De combinatie is onmogelijk en wijst op een foutieve waarneming',
        'Handvorm-baksteen komt uitsluitend voor bij zuiver functionalistische gebouwen',
        'Een plat dak sluit per definitie elke vorm van ambachtelijk metselwerk uit',
      ],
      correctIndex: 0,
      explanation: 'Architectuurkenmerken van verschillende stromingen kunnen in één gebouw samenkomen; het strakke volume wijst op functionalisme, het expressieve metselwerk op een meer ambachtelijke/organische invloed — een hybride lezing is hier het meest gegrond.',
    },
    {
      id: 'A.2.2.zwaar2', toetstermCode: 'A.2.2.1', type: 'mc', bloom: 'Evalueren',
      prompt: 'Bij het stedenbouwkundig ontwerp van een nieuwe woonwijk moet worden gekozen tussen een verkaveling met veel gesloten bouwblokken (compact, beschut) of een meer open, groene verkaveling met vrijstaande woningen. De gemeente wil zowel energiezuinig bouwen als voldoende sociale levendigheid stimuleren. Welke conclusie weegt deze twee doelen het meest zorgvuldig?',
      options: [
        'Gesloten bouwblokken hebben doorgaans minder buitenmuren per woning (energetisch gunstiger) én een compactere opzet die sociale interactie kan bevorderen, wat beide gemeentelijke doelen dient',
        'Open verkaveling dient per definitie beide doelen beter dan gesloten bebouwing',
        'Energiezuinigheid en sociale levendigheid hebben geen enkele relatie met de verkavelingsvorm',
        'Alleen de woninggrootte bepaalt de energieprestatie, verkaveling is irrelevant',
      ],
      correctIndex: 0,
      explanation: 'Compacte, gesloten verkaveling vermindert het aantal buitenmuren per woning (minder warmteverlies) én brengt bewoners dichter bij elkaar, wat beide gemeentelijke doelen — energiezuinigheid én sociale levendigheid — tegelijk kan dienen.',
    },
  ],
  'A.3': [
    {
      id: 'A.3.zwaar1', toetstermCode: 'A.3.6', type: 'multi', bloom: 'Synthese',
      prompt: 'Een eigenaar wil in één project een dakkapel plaatsen (mogelijk vergunningsvrij), een dragende wand verwijderen (vergt constructieve toetsing) én een monumentaal onderdeel van de gevel wijzigen (vergt omgevingsvergunning voor het monumentaal aspect). Welke conclusies over de te doorlopen toetsing zijn het meest gegrond?',
      options: [
        'Elke ingreep kent een eigen toetsingsgrond en kan een andere vergunningsstatus hebben, ook al vinden ze in hetzelfde project plaats',
        'Zodra één onderdeel vergunningsvrij is, geldt dat automatisch voor het hele project',
        'De monumentale status van de gevel kan een aparte omgevingsvergunning vereisen, los van de vergunningsvrije status van de dakkapel',
        'Het verwijderen van de dragende wand kan een aparte, constructieve toetsing vergen die losstaat van de vergunningsvrije aspecten',
      ],
      correctIndices: [0, 2, 3],
      explanation: 'Elke ingreep heeft een eigen toetsingsgrond (vergunningsvrije regeling, constructieve veiligheid, monumentenbescherming) — de vergunningsvrije status van één onderdeel zegt niets over de andere onderdelen van hetzelfde project.',
    },
  ],
}
