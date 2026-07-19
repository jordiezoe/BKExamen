import type { Question } from '../types/content'

/**
 * Bloom-examen — derde golf, sectie D. Zwaarder qua niveau dan ronde 1 en 2:
 * vooral Analyseren/Evalueren/Synthese, met casusvragen. Nieuwe, niet
 * overlappende feiten t.o.v. bloomexamenD.ts en bloomexamenD2.ts. Origineel
 * materiaal.
 */
export const bloomExamenD3: Record<string, Question[]> = {
  'D.1': [
    {
      id: 'D.1.bloom3.mc', toetstermCode: 'D.1.4', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een VvE moet kiezen tussen een MJOP dat alleen op basis van leeftijd van bouwdelen is opgesteld, of een MJOP gebaseerd op een NEN 2767-conditiemeting. Welke keuze geeft doorgaans het meest betrouwbare beeld?',
      options: [
        'Het MJOP op basis van conditiemeting, omdat dit de daadwerkelijke staat beoordeelt in plaats van alleen de leeftijd',
        'Beide geven altijd exact hetzelfde resultaat',
        'Het MJOP op leeftijd, omdat conditiemetingen subjectief zijn',
        'Geen van beide is bruikbaar voor onderhoudsplanning',
      ],
      correctIndex: 0,
      explanation: 'Een conditiemeting beoordeelt de daadwerkelijke, actuele staat van een bouwdeel, terwijl leeftijd alleen een indicatie geeft — twee identiek oude onderdelen kunnen in heel verschillende conditie verkeren.',
    },
    {
      id: 'D.1.bloom3.multi', toetstermCode: 'D.1.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke elementen horen typisch in een Meerjarenonderhoudsplan (MJOP)?',
      options: [
        'Een overzicht van bouwdelen met hun geschatte resterende levensduur', 'Een planning van onderhoudsmomenten over meerdere jaren', 'Een kostenraming per onderhoudsmaatregel', 'De persoonlijke hypotheekgegevens van individuele bewoners',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Een MJOP bevat een overzicht van bouwdelen, een meerjarenplanning en kostenramingen; persoonlijke hypotheekgegevens van bewoners horen daar niet in thuis.',
    },
  ],
  'D.2': [
    {
      id: 'D.2.bloom3.mc', toetstermCode: 'D.2.3', type: 'mc', bloom: 'Analyseren',
      prompt: 'Bij een opname wordt een gevel met opbollend en loszittend voegwerk aangetroffen, waarbij op enkele plekken stenen los in de hand komen. Welke prioriteit past hierbij het beste?',
      options: [
        'Hoge prioriteit: dit is een veiligheidsrisico (vallend gevaar) en vraagt op korte termijn herstel',
        'Lage prioriteit: dit is puur esthetisch en kan tot de eerstvolgende cyclus wachten',
        'Dit hoeft nooit te worden gemeld, voegwerk verslijt altijd zo',
        'Alleen relevant als de gevel op het noorden ligt',
      ],
      correctIndex: 0,
      explanation: 'Losraken van stenen of voegwerk is een direct veiligheidsrisico (vallend gevaar) en verdient daarom hoge prioriteit in plaats van te wachten op een reguliere onderhoudscyclus.',
    },
    {
      id: 'D.2.bloom3.multi', toetstermCode: 'D.2.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke signalen bij een dakinspectie wijzen op mogelijke gebreken die om vervolgonderzoek vragen?',
      options: [
        'Verzakte of golvende dakbedekking', 'Vochtplekken op het binnenplafond direct onder het dak', 'Loszittende of verschoven dakpannen', 'Een dakvlak dat er strak en vlak uitziet zonder afwijkingen',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Verzakking, vochtplekken en losse pannen zijn signalen die vervolgonderzoek rechtvaardigen; een strak en vlak dakvlak zonder afwijkingen is juist geen signaal van een gebrek.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.bloom3.mc', toetstermCode: 'D.3.5', type: 'mc', bloom: 'Analyseren',
      prompt: 'In een oude woning zonder spouwmuur wordt onderaan de binnenmuren vochtige, afbladderende verf en zoutuitslag geconstateerd, terwijl het dak in goede staat is. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Optrekkend vocht via capillaire werking vanuit de fundering, bij ontbreken van een goede vochtwerende laag',
        'Condensatie tegen het dakvlak', 'Een lekkage in de dakgoot', 'Een defect aan de mechanische ventilatie op zolder',
      ],
      correctIndex: 0,
      explanation: 'Vochtige, afbladderende verf en zoutuitslag onderaan muren (met een goed dak) zijn klassieke signalen van optrekkend vocht, vaak door het ontbreken of falen van een vochtwerende laag in de fundering.',
    },
    {
      id: 'D.3.bloom3.multi', toetstermCode: 'D.3.2', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen verlagen de Rc-waarde-gerelateerde warmteverliezen van een bestaande spouwmuur het meest effectief?',
      options: [
        'Naisolatie van de spouw (bijvoorbeeld met ingeblazen isolatiekorrels)', 'Het dichtzetten van alle ventilatieroosters zonder alternatief', 'Het aanbrengen van gevelisolatie aan de buitenzijde', 'Het verwijderen van bestaande isolatie zonder vervanging',
      ],
      correctIndices: [0, 2],
      explanation: 'Naisolatie van de spouw en buitengevelisolatie verlagen het warmteverlies; het zomaar dichtzetten van ventilatie of verwijderen van isolatie verhoogt juist risico\'s (vocht) of het warmteverlies.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.bloom3.mc', toetstermCode: 'D.4.3', type: 'mc', bloom: 'Evalueren',
      prompt: 'Twee vergelijkbare woningen hebben hetzelfde energielabel, maar de ene heeft een warmtepomp en de andere een cv-ketel met veel extra zonnepanelen. Wat is de meest juiste conclusie?',
      options: [
        'Een gelijk energielabel kan via verschillende routes (opwekking, isolatie, systeemkeuze) worden behaald — het label alleen zegt niet welke techniek is toegepast',
        'Beide woningen hebben identieke installaties',
        'Een energielabel kan nooit gelijk zijn als de installaties verschillen',
        'Zonnepanelen tellen nooit mee in de energielabelberekening',
      ],
      correctIndex: 0,
      explanation: 'Het energielabel is een resultaatscore die via verschillende combinaties van isolatie, opwekking en systeemkeuze bereikt kan worden — gelijk label betekent dus niet per se gelijke techniek.',
    },
    {
      id: 'D.4.bloom3.multi', toetstermCode: 'D.4.4', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen dragen bij aan circulair bouwen?',
      options: [
        'Materialen demontabel detailleren zodat ze later hergebruikt kunnen worden', 'Een materialenpaspoort bijhouden van toegepaste bouwmaterialen', 'Bouwmaterialen zo veel mogelijk onlosmakelijk aan elkaar lijmen', 'Voorrang geven aan hergebruikte of biobased materialen',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Demontabel bouwen, materialenpaspoorten en hergebruikte/biobased materialen ondersteunen circulariteit; onlosmakelijk lijmen maakt toekomstig hergebruik juist onmogelijk.',
    },
  ],
}
