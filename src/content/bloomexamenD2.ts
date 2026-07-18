import type { Question } from '../types/content'

/**
 * Bloom-examen — tweede golf, sectie D. Nieuwe invalshoeken t.o.v.
 * bloomexamenD.ts (geen overlap in specifieke feiten). Origineel materiaal.
 */
export const bloomExamenD2: Record<string, Question[]> = {
  'D.1': [
    {
      id: 'D.1.bloom2.mc', toetstermCode: 'D.1.1', type: 'mc', bloom: 'Begrip',
      prompt: 'Waarom is het voor een taxateur/makelaar belangrijk om bouwtechnische gebreken te herkennen, ook al is hij geen bouwkundig expert?',
      options: ['Om potentiële risico\'s tijdig te signaleren en door te verwijzen naar een specialist', 'Omdat hij zelf de reparatie moet uitvoeren', 'Omdat dit wettelijk verplicht is bij elke woningverkoop', 'Omdat gebreken de WOZ-waarde direct wettelijk vastleggen'],
      correctIndex: 0,
      explanation: 'Basiskennis stelt de makelaar in staat signalen te herkennen en tijdig een specialist (bouwkundig inspecteur) in te schakelen.',
    },
    {
      id: 'D.1.bloom2.multi', toetstermCode: 'D.1.3', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke zaken worden doorgaans opgenomen in een bouwkundig keuringsrapport?',
      options: ['Staat van het dak', 'Vochtplekken en scheurvorming', 'De achterstallige hypotheekrente', 'Staat van installaties'],
      correctIndices: [0, 1, 3],
      explanation: 'Dak, vocht/scheuren en installaties horen in een bouwkundig rapport; de hypotheekrente is een financieel, geen bouwkundig gegeven.',
    },
  ],
  'D.2': [
    {
      id: 'D.2.bloom2.mc', toetstermCode: 'D.2.1', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat beschrijft de Nederlandse norm NEN 2767 primair?',
      options: ['Een methodiek voor het objectief vaststellen van de conditie van bouw- en installatiedelen', 'De energieprestatie van een gebouw', 'De brandwerendheid van scheidingsconstructies', 'De maatvoering van trappen'],
      correctIndex: 0,
      explanation: 'NEN 2767 is de conditiemetingsmethodiek (score 1 t/m 6) om bouw- en installatiedelen objectief te beoordelen.',
    },
    {
      id: 'D.2.bloom2.multi', toetstermCode: 'D.2.1', type: 'multi', bloom: 'Toepassen',
      prompt: 'Een bouwdeel krijgt bij een NEN 2767-conditiemeting score 5. Welke conclusies zijn juist?',
      options: ['Het bouwdeel verkeert in zeer slechte staat', 'Vervanging of ingrijpend herstel is op korte termijn nodig', 'Het bouwdeel is als nieuw', 'Er is sprake van ernstige, functieverlies veroorzakende gebreken'],
      correctIndices: [0, 1, 3],
      explanation: 'Score 5 (op een schaal van 1=uitstekend tot 6=zeer slecht) duidt op zeer slechte staat met functieverlies; score 1 zou "als nieuw" betekenen.',
    },
  ],
  'D.3': [
    {
      id: 'D.3.bloom2.mc', toetstermCode: 'D.3.4', type: 'mc', bloom: 'Begrip',
      prompt: 'Wat is een koudebrug?',
      options: ['Een plek in de constructie waar warmte makkelijker naar buiten ontsnapt dan elders', 'Een metalen verbinding tussen twee stalen liggers', 'Een deel van de fundering onder het maaiveld', 'Een luchtspouw die niet geventileerd is'],
      correctIndex: 0,
      explanation: 'Een koudebrug is een zwakke schakel in de isolatie waar warmte sneller weglekt, vaak zichtbaar als condensplek of schimmel.',
    },
    {
      id: 'D.3.bloom2.multi', toetstermCode: 'D.3.6', type: 'multi', bloom: 'Analyseren',
      prompt: 'In een slaapkamer met slechte ventilatie ontstaat zwarte schimmel in de hoeken bij het plafond. Welke oorzaken zijn hier plausibel?',
      options: ['Onvoldoende ventilatie waardoor vochtige lucht blijft hangen', 'Een koudebrug op die plek', 'Te veel zoninstraling door groot glasoppervlak', 'Condensatie van waterdamp tegen een koud oppervlak'],
      correctIndices: [0, 1, 3],
      explanation: 'Schimmel in hoeken bij het plafond wijst klassiek op een combinatie van onvoldoende ventilatie, een koudebrug en condensatie; te veel zon zou eerder droogte dan schimmel geven.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.bloom2.mc', toetstermCode: 'D.4.2', type: 'mc', bloom: 'Kennis',
      prompt: 'Wat geeft de milieuprestatie-eis MPG bij nieuwbouwwoningen aan?',
      options: ['De milieubelasting van de gebruikte bouwmaterialen over de levenscyclus', 'De energieprestatie van de woning', 'De akoestische kwaliteit van de gevel', 'De waterdichtheid van het dak'],
      correctIndex: 0,
      explanation: 'De MPG (MilieuPrestatie Gebouwen) drukt de milieu-impact van materialen over de levensduur uit in een score; hoe lager, hoe duurzamer.',
    },
    {
      id: 'D.4.bloom2.multi', toetstermCode: 'D.4.5', type: 'multi', bloom: 'Kennis',
      prompt: 'Welke maatregelen dragen bij aan een lagere milieu-impact (duurzamer bouwen)?',
      options: ['Hergebruik van bouwmaterialen (circulariteit)', 'Toepassen van biobased materialen zoals hout', 'Zo veel mogelijk nieuwe grondstoffen gebruiken', 'Materialen demontabel detailleren'],
      correctIndices: [0, 1, 3],
      explanation: 'Hergebruik, biobased materialen en demontabel bouwen verlagen de milieu-impact; het maximaliseren van nieuwe grondstoffen doet het tegenovergestelde.',
    },
  ],
}
