import type { Question } from '../types/content'

/**
 * Bloom-examen — vijfde golf, sectie A. Nog hoger niveau dan ronde 1-4:
 * uitsluitend Evalueren/Synthese, met meerstaps-redeneervragen die twee of
 * meer begrippen tegelijk combineren en subtiele, bijna-goede afleiders.
 * GEEN open vragen. Nieuwe, niet overlappende feiten t.o.v. alle eerdere
 * bloomexamenA*-bestanden. Origineel geschreven.
 */
export const bloomExamenA5: Record<string, Question[]> = {
  'A.1': [
    {
      id: 'A.1.bloom5.mc', toetstermCode: 'A.1.2', type: 'mc', bloom: 'Synthese',
      prompt: 'Een opdrachtgever kiest voor een turnkeyovereenkomst mét een apart bouwteam voor het installatiedeel, omdat hij op dat vlak veel eigen expertise wil inbrengen. Wat is de meest waarschijnlijke consequentie van deze combinatie?',
      options: [
        'De aannemer draagt voor het bouwkundige deel het volledige risico en de coördinatie, terwijl voor installaties gedeelde verantwoordelijkheid en meer overleg gelden — een hybride risicoverdeling',
        'Een turnkeyovereenkomst sluit een bouwteam voor een deelgebied per definitie uit',
        'De opdrachtgever draagt bij een turnkeyovereenkomst altijd het volledige risico, ongeacht het bouwteam',
        'Deze combinatie is functioneel identiek aan een volledige bouwteamovereenkomst',
      ],
      correctIndex: 0,
      explanation: 'Turnkey legt normaliter alle risico en coördinatie bij één partij; door voor installaties toch een bouwteam te vormen, ontstaat een hybride situatie met gedeelde zeggenschap op dat deelgebied, terwijl de rest bij de turnkeyaannemer blijft.',
    },
    {
      id: 'A.1.bloom5.multi', toetstermCode: 'A.1.4', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een projectontwikkelaar start de bouw pas als 70% van de woningen op tekening verkocht is, en calculeert de bouwkostenraming inclusief een risico-opslag voor meerwerk. Welke conclusies over deze aanpak zijn het meest gegrond?',
      options: [
        'Het verkooppercentage-criterium beperkt het financiële risico van de ontwikkelaar bij tegenvallende verkoop',
        'Een risico-opslag in de begroting compenseert voor onzekerheden die pas tijdens de uitvoering blijken',
        'Deze aanpak garandeert dat er nooit meerwerk zal optreden',
        'Het verkooppercentage heeft geen enkele relatie met het financieringsrisico van het project',
      ],
      correctIndices: [0, 1],
      explanation: 'Het verkoopdrempel-criterium en de risico-opslag zijn allebei risicobeperkende maatregelen — vooraf verkoop zekerstellen én vooraf financiële marge inbouwen; geen van beide garandeert dat er geen meerwerk optreedt.',
    },
  ],
  'A.2.1': [
    {
      id: 'A.2.1.bloom5.mc', toetstermCode: 'A.2.1.5', type: 'mc', bloom: 'Synthese',
      prompt: 'Een detailtekening (schaal 1:5) van een kozijnaansluiting spreekt op één punt de bestektekst tegen, terwijl de bijbehorende doorsnede (schaal 1:100) weer overeenkomt met de bestektekst. Wat is de meest zorgvuldige conclusie?',
      options: [
        'De tegenstrijdigheid moet gemeld worden aan de directie, ongeacht welke tekening "toevallig" overeenkomt met het bestek — schaal of toeval bepaalt niet automatisch welk stuk leidend is',
        'De detailtekening is per definitie leidend omdat deze de kleinste schaal (grootste verkleining) heeft',
        'Omdat de doorsnede overeenkomt met het bestek, hoeft er niets gemeld te worden',
        'Bij twijfel geldt altijd de tekening met de hoogste schaalgetal-waarde als leidend',
      ],
      correctIndex: 0,
      explanation: 'De waarschuwingsplicht bij tegenstrijdigheden geldt onafhankelijk van welk document toevallig overeenkomt met een ander stuk — een zorgvuldige uitvoerder meldt de tegenstrijdigheid altijd, in plaats van zelf te concluderen welk stuk "wint".',
    },
    {
      id: 'A.2.1.bloom5.multi', toetstermCode: 'A.2.1.2', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een kandidaat krijgt alleen een bestektekst en een detailtekening (schaal 1:5) van een dakrand, zonder plattegrond of doorsnede. Welke informatie kan hij hieruit NIET betrouwbaar afleiden?',
      options: [
        'De exacte plaats van de dakrand ten opzichte van de rest van het gebouw',
        'De precieze materiaalopbouw van de dakrand zelf',
        'De totale nokhoogte van het gebouw',
        'De aansluitdetails tussen de genoemde materialen op die specifieke plek',
      ],
      correctIndices: [0, 2],
      explanation: 'Een detail toont de opbouw en aansluiting van één specifiek punt tot in detail, maar zonder plattegrond/doorsnede ontbreekt de context van de positie in het gebouw en de totale hoogtematen.',
    },
  ],
  'A.2.2': [
    {
      id: 'A.2.2.bloom5.mc', toetstermCode: 'A.2.2.4', type: 'mc', bloom: 'Synthese',
      prompt: 'Een woning combineert een symmetrische, ornamentloze voorgevel in baksteen met opvallend expressief, asymmetrisch metselwerk rond de entree en een sterk gearticuleerd dakoverstek. Welke conclusie over de stijlkarakterisering is het meest genuanceerd?',
      options: [
        'Dit wijst eerder op een individuele, hybride ontwerpkeuze dan op een zuiver in te delen stroming — meerdere invloeden (bijvoorbeeld sober functionalisme én expressief handwerk) kunnen in één ontwerp samenkomen',
        'Dit moet per definitie zuiver Amsterdamse School zijn, want die stroming gebruikt baksteen',
        'Symmetrie en asymmetrie kunnen nooit in hetzelfde ontwerp voorkomen',
        'De aanwezigheid van baksteen bepaalt de stijl volledig, ongeacht vorm of detaillering',
      ],
      correctIndex: 0,
      explanation: 'Architectuurstromingen zijn analytische categorieën; een concreet gebouw combineert vaak elementen uit verschillende invloeden. Het materiaal (baksteen) alleen bepaalt de stijl niet — vorm, ornamentiek en compositie doen dat mede.',
    },
    {
      id: 'A.2.2.bloom5.multi', toetstermCode: 'A.2.2.9', type: 'multi', bloom: 'Evalueren',
      prompt: 'Een taxateur beoordeelt twee vergelijkbare woningen: één in een gesloten, dichte stedenbouwkundige verkaveling en één in een ruime, groene, open verkaveling. Welke overwegingen zijn bij het vergelijken van woongenot het meest valide?',
      options: [
        'De open verkaveling biedt doorgaans meer privacy en groen, maar mogelijk minder beschutting en sociale levendigheid',
        'De gesloten verkaveling geeft vaak meer beschutting en nabijheid van voorzieningen, maar kan minder privacy en groen bieden',
        'Stedenbouwkundige verkaveling is nooit relevant voor de taxatiewaarde van een woning',
        'Beide verkavelingstypen zijn in alle opzichten functioneel identiek',
      ],
      correctIndices: [0, 1],
      explanation: 'Beide verkavelingsvormen hebben eigen voor- en nadelen die het woongenot (en dus indirect de waardering) beïnvloeden — het is een afweging, geen eenduidig "beter of slechter".',
    },
  ],
  'A.3': [
    {
      id: 'A.3.bloom5.mc', toetstermCode: 'A.3.6', type: 'mc', bloom: 'Synthese',
      prompt: 'Een eigenaar wil een vergunningsvrije aanbouw realiseren, maar het perceel ligt zowel in een beschermd dorpsgezicht als binnen de maximale oppervlaktegrens voor vergunningsvrij bouwen. Wat is de meest volledige conclusie?',
      options: [
        'Ook al valt de aanbouw binnen de oppervlaktegrens, de status van beschermd dorpsgezicht kan alsnog een aanvullende vergunningsplicht met zich meebrengen',
        'Binnen de oppervlaktegrens is een aanbouw altijd volledig vergunningsvrij, ongeacht andere beschermingsstatussen',
        'Beschermd dorpsgezicht en vergunningsvrij bouwen sluiten elkaar per definitie volledig uit, dus bouwen is hier nooit mogelijk',
        'De oppervlaktegrens is de enige relevante toets voor vergunningsvrij bouwen',
      ],
      correctIndex: 0,
      explanation: 'Vergunningsvrij bouwen wordt getoetst aan de landelijke maten, maar aanvullende lokale beschermingsregimes zoals een beschermd dorpsgezicht kunnen alsnog een vergunningplicht opleggen — de oppervlaktegrens is dus niet de enige relevante toets.',
    },
    {
      id: 'A.3.bloom5.multi', toetstermCode: 'A.3.4', type: 'multi', bloom: 'Analyseren',
      prompt: 'Een eigenaar wil zowel een dragende wand verwijderen als de gevel wijzigen voor een groter raam, in één verbouwing. Welke uitspraken over de te doorlopen toetsing zijn het meest gegrond?',
      options: [
        'Beide ingrepen kunnen elk hun eigen toetsingsgrond hebben (constructieve veiligheid resp. welstand/vergunningplicht) en moeten daarom apart worden beoordeeld',
        'Zodra één van de twee ingrepen vergunningsvrij is, geldt dat automatisch ook voor de andere',
        'Het verwijderen van een dragende wand raakt primair de constructieve veiligheid, ongeacht of de gevel ook wijzigt',
        'Een gecombineerde verbouwing wordt nooit als twee aparte ingrepen beoordeeld',
      ],
      correctIndices: [0, 2],
      explanation: 'Elke ingreep heeft een eigen toetsingsgrond (constructie vs. uiterlijk/vergunningplicht) en de vergunningsvrije status van de ene ingreep zegt niets over de andere — ze moeten apart beoordeeld worden, ook al vinden ze in hetzelfde project plaats.',
    },
  ],
}
