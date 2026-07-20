import type { Question } from '../types/content'

/**
 * Bloom-examen — "fouten"-ronde, sectie D. Origineel geschreven oefenvragen
 * over de ONDERWERPEN waarop bij het echte SVMNIVO-oefenexamen fouten
 * werden gemaakt (thermische schil, energielabel-procedure, asbestregels,
 * duurzame maatregelen). Geen letterlijke overname van de officiële
 * examenvraag, opties of feedbacktekst — alleen het onderliggende concept
 * is gebruikt om nieuwe vragen te schrijven.
 */
export const bloomExamenFoutenD: Record<string, Question[]> = {
  'D.3': [
    {
      id: 'D.3.fix.mc', toetstermCode: 'D.3.1', type: 'mc', bloom: 'Analyseren',
      prompt: 'Welke bouwdelen vormen samen de "thermische schil" van een woning — de constructie die de verwarmde binnenruimte scheidt van buiten, de grond of onverwarmde ruimtes?',
      options: [
        'Begane grondvloer, buitengevel en dak',
        'Alleen de buitengevel', 'Alle binnenwanden en verdiepingsvloeren van de woning', 'Alleen het dak en de dakoverstek',
      ],
      correctIndex: 0,
      explanation: 'De thermische schil bestaat uit alle constructiedelen die de verwarmde ruimte scheiden van de "koude" buitenwereld: begane grondvloer (naar de grond), gevel (naar buiten) en dak (naar boven).',
    },
    {
      id: 'D.3.fix.multi', toetstermCode: 'D.3.1', type: 'multi', bloom: 'Analyseren',
      prompt: 'Welke bouwdelen horen NIET tot de thermische schil van een woning?',
      options: [
        'Verdiepingsvloeren tussen twee verwarmde bouwlagen', 'Binnenwanden tussen twee verwarmde ruimtes', 'De dakoverstek (het overstekende deel zonder eigen isolerende functie)', 'De begane grondvloer',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Verdiepingsvloeren en binnenwanden tussen verwarmde ruimtes scheiden geen warm van koud, dus horen niet tot de thermische schil; een dakoverstek is een uitstekend onderdeel zonder zelfstandige isolerende functie. De begane grondvloer hoort júist wél tot de schil.',
    },
    {
      id: 'D.3.fix.invul', toetstermCode: 'D.3.1', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: de constructiedelen die de verwarmde woning scheiden van buiten, de grond en onverwarmde ruimtes, worden samen de thermische ______ van het gebouw genoemd.',
      acceptableAnswers: ['schil'],
      explanation: 'De thermische schil (bouwkundige schil) omvat begane grondvloer, buitengevel en dak.',
    },
  ],
  'D.4': [
    {
      id: 'D.4.fix.mc', toetstermCode: 'D.4.1', type: 'mc', bloom: 'Toepassen',
      prompt: 'Hoe komt een woningeigenaar op de juiste, officiële manier aan een geldig energielabel voor zijn woning?',
      options: [
        'Een erkende energieadviseur inspecteert de woning en registreert het label bij de RVO',
        'De eigenaar vult zelf gegevens uit het taxatierapport in op een overheidswebsite',
        'De makelaar stelt het label zelfstandig vast zonder inspectie',
        'Het label wordt automatisch toegekend op basis van het bouwjaar van de woning',
      ],
      correctIndex: 0,
      explanation: 'Alleen een erkende, gecertificeerde energieadviseur mag na inspectie van de woning het officiële energielabel vaststellen en registreren bij de RVO — een eigenaar of makelaar kan dit niet zelf doen.',
    },
    {
      id: 'D.4.fix.multi', toetstermCode: 'D.4.5', type: 'multi', bloom: 'Toepassen',
      prompt: 'Welke maatregelen dragen daadwerkelijk bij aan een beter energielabel van een woning?',
      options: [
        'Enkelglas vervangen door isolatieglas', 'Een warmteterugwinsysteem (WTW) installeren', 'Een groen dak aanleggen in plaats van een regulier dak', 'Uitsluitend energiezuinige huishoudelijke apparaten aanschaffen',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Isolatieglas, WTW en een groen dak verbeteren de energieprestatie van het gebouw zelf; energiezuinige apparaten verlagen wel het energieverbruik van het huishouden, maar tellen niet mee voor het energielabel van het gebouw.',
    },
    {
      id: 'D.4.fix.mc2', toetstermCode: 'D.4.2', type: 'mc', bloom: 'Toepassen',
      prompt: 'Een particuliere woningeigenaar wil zelf een kleine hoeveelheid asbesthoudend materiaal uit zijn woning verwijderen. Wat geldt hierbij als juiste procedure?',
      options: [
        'Dit mag tot een bepaald maximum oppervlak, mits gemeld bij het Omgevingsloket en het materiaal apart verpakt wordt afgevoerd',
        'Particulieren mogen nooit zelf asbest verwijderen, ongeacht de hoeveelheid',
        'Een melding is alleen verplicht voor bedrijven, niet voor particulieren',
        'Asbest mag gewoon bij het regulier huisvuil worden aangeboden als het maar goed is ingepakt',
      ],
      correctIndex: 0,
      explanation: 'Particulieren mogen tot een bepaald maximum oppervlak zelf asbest verwijderen uit een woonfunctie, mits gemeld bij het Omgevingsloket en het materiaal apart en veilig wordt afgevoerd naar een erkende verwerker — dit geldt voor zowel bedrijven als particulieren.',
    },
    {
      id: 'D.4.fix.invul', toetstermCode: 'D.4.2', type: 'invul', bloom: 'Kennis',
      prompt: 'Vul aan: bij sloop- of renovatiewerkzaamheden aan een gebouw van vóór 1994 is een asbest______rapport verplicht, dat in kaart brengt waar zich asbest in het pand bevindt.',
      acceptableAnswers: ['inventarisatie', 'inventarisatierapport'],
      explanation: 'Een asbestinventarisatierapport is verplicht bij sloop/renovatie van bouwwerken van vóór het asbestverbod (1994), om te weten waar asbest aanwezig is voordat er gewerkt wordt.',
    },
  ],
}
