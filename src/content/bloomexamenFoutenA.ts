import type { Question } from '../types/content'

/**
 * Bloom-examen — "fouten"-ronde, sectie A. Origineel geschreven oefenvragen
 * over de ONDERWERPEN waarop bij het echte SVMNIVO-oefenexamen fouten
 * werden gemaakt (bouwmethode-keuze bij verbouw). Geen letterlijke
 * overname van de officiële examenvraag, opties of feedbacktekst — alleen
 * het onderliggende concept is gebruikt om nieuwe vragen te schrijven.
 */
export const bloomExamenFoutenA: Record<string, Question[]> = {
  'A.2.2': [
    {
      id: 'A.2.2.fix.mc', toetstermCode: 'A.2.2.3', type: 'mc', bloom: 'Evalueren',
      prompt: 'Een tussenwoning in een dicht bebouwde straat wordt uitgebreid. De bewoners willen zo min mogelijk overlast (trillingen, verkeer, hijswerk) voor de buren tijdens de bouw, en de doorlooptijd is minder belangrijk. Welke bouwmethode past hier het beste bij?',
      options: [
        'Traditionele (steenachtige) bouw, ondanks de langere bouwtijd',
        'Prefab houtskeletbouw, vanwege het vele hijswerk met een kraan',
        'Gietbouw met ter plaatse gestort beton, vanwege het benodigde vrachtverkeer',
        'Elke bouwmethode geeft evenveel overlast, de keuze maakt niets uit',
      ],
      correctIndex: 0,
      explanation: 'Traditionele bouw duurt langer, maar geeft in een dichte, kwetsbare omgeving vaak de minste overlast: geen zwaar hijswerk (zoals bij prefab) en geen intensief stortverkeer (zoals bij gietbouw).',
    },
    {
      id: 'A.2.2.fix.multi', toetstermCode: 'A.2.2.3', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke vormen van overlast horen typisch bij welke bouwmethode? Selecteer de juiste koppelingen.',
      options: [
        'Prefab/elementenbouw brengt vaak hijswerk met een kraan met zich mee',
        'Gietbouw (in-situ beton) brengt vaak veel vrachtverkeer voor betonstort met zich mee',
        'Traditionele steenachtige bouw is de snelste methode van de drie',
        'Traditionele steenachtige bouw duurt doorgaans langer dan prefab of gietbouw',
      ],
      correctIndices: [0, 1, 3],
      explanation: 'Prefab vraagt hijswerk, gietbouw vraagt stortverkeer, en traditionele bouw is juist de langzaamste van de drie methoden — niet de snelste.',
    },
  ],
}
