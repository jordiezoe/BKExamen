import type { Question } from '../types/content'

/**
 * Beeldvragen — herkennings­vragen bij een afbeelding, zoals de echte proeftoets
 * ("Hoe heet de dakvorm in de afbeelding?"). Er wordt uitsluitend gebruik
 * gemaakt van eigen tekeningen/foto's die al in de app aanwezig zijn
 * (public/figs); geen materiaal van internet. Antwoordsleutels volgen uit de
 * bestandsnaam/inhoud van de gebruikte afbeelding.
 *
 * Gekoppeld per onderwerp-code; de content-index plakt ze achter de bestaande
 * vragen zodat de examen-engine ze automatisch meeneemt.
 */
const CAP = 'Bekijk de afbeelding bij deze vraag.'

function dakvraag(id: string, src: string, correct: string): Question {
  const pool = ['zadeldak', 'lessenaarsdak', 'schilddak', 'tentdak', 'mansardekap', 'sheddak', 'wolfsdak']
  const distractors = pool.filter((o) => o !== correct).slice(0, 3)
  return {
    id,
    toetstermCode: 'B.13.dak',
    type: 'mc',
    prompt: 'Hoe heet de dakvorm die in de afbeelding is weergegeven?',
    image: { src, caption: CAP, width: 'md' },
    options: [correct, ...distractors],
    correctIndex: 0,
    explanation: `De weergegeven dakvorm is een ${correct}.`,
  }
}

function verbandvraag(id: string, src: string, correct: string): Question {
  const pool = ['halfsteensverband', 'kruisverband', 'staand verband', 'Vlaams verband', 'koppenverband']
  const distractors = pool.filter((o) => o !== correct).slice(0, 3)
  return {
    id,
    toetstermCode: 'B.5.verband',
    type: 'mc',
    prompt: 'Welk metselverband is in de afbeelding te zien?',
    image: { src, caption: CAP, width: 'md' },
    options: [correct, ...distractors],
    correctIndex: 0,
    explanation: `Dit is een ${correct}.`,
  }
}

function boogvraag(id: string, src: string, correct: string): Question {
  const pool = ['rondboog', 'segmentboog', 'spitsboog', 'ellipsboog']
  const distractors = pool.filter((o) => o !== correct).slice(0, 3)
  return {
    id,
    toetstermCode: 'B.5.boog',
    type: 'mc',
    prompt: 'Welke boogvorm is boven de opening in de afbeelding toegepast?',
    image: { src, caption: CAP, width: 'md' },
    options: [correct, ...distractors],
    correctIndex: 0,
    explanation: `De boogvorm is een ${correct}.`,
  }
}

function stijlvraag(id: string, src: string, correct: string, uitleg: string): Question {
  const pool = [
    'Amsterdamse School',
    'De Stijl',
    'Jugendstil',
    'Functionalisme (Nieuwe Bouwen)',
    'Art Deco',
    'Postmodernisme',
  ]
  const distractors = pool.filter((o) => o !== correct).slice(0, 3)
  return {
    id,
    toetstermCode: 'A.2.2.stijl',
    type: 'mc',
    prompt: 'Welke architectuurstroming herken je in het afgebeelde gebouw?',
    image: { src, caption: CAP, width: 'lg' },
    options: [correct, ...distractors],
    correctIndex: 0,
    explanation: uitleg,
  }
}

const FV = '/figs/vragen'
const F5 = '/figs/B_5'
const F13 = '/figs/B_13'
const F22 = '/figs/A_2_2'

export const beeldVragen: Record<string, Question[]> = {
  'B.13': [
    dakvraag('B.13.img1', `${FV}/dak-zadel.svg`, 'zadeldak'),
    dakvraag('B.13.img2', `${FV}/dak-lessenaar.svg`, 'lessenaarsdak'),
    dakvraag('B.13.img3', `${FV}/dak-schild.svg`, 'schilddak'),
    dakvraag('B.13.img4', `${FV}/dak-tent.svg`, 'tentdak'),
    dakvraag('B.13.img5', `${FV}/dak-mansarde.svg`, 'mansardekap'),
    dakvraag('B.13.img6', `${FV}/dak-shed.svg`, 'sheddak'),
    dakvraag('B.13.img7', `${FV}/dak-wolfseinden.svg`, 'wolfsdak'),
    {
      id: 'B.13.img8',
      toetstermCode: 'B.13.kap',
      type: 'mc',
      prompt: 'Welke kapconstructie is in de afbeelding weergegeven?',
      image: { src: `${F13}/sporenkap.jpg`, caption: CAP, width: 'md' },
      options: ['Sporenkap', 'Gordingenkap', 'Vakwerkligger', 'Sheddak'],
      correctIndex: 0,
      explanation:
        'Een sporenkap bestaat uit paren sporen (dakbenen) zonder horizontale gordingen; de sporen dragen samen het dakvlak.',
    },
    {
      id: 'B.13.img9',
      toetstermCode: 'B.13.kap',
      type: 'mc',
      prompt: 'Welke kapconstructie is in de afbeelding weergegeven?',
      image: { src: `${F13}/gordingenkap.jpg`, caption: CAP, width: 'md' },
      options: ['Gordingenkap', 'Sporenkap', 'Tentdak', 'Mansardekap'],
      correctIndex: 0,
      explanation:
        'Bij een gordingenkap dragen horizontale gordingen (op spanten of muren) de dakbedekking; herkenbaar aan de horizontale liggers.',
    },
  ],
  'B.5': [
    verbandvraag('B.5.img1', `${FV}/verband-halfsteens.svg`, 'halfsteensverband'),
    verbandvraag('B.5.img2', `${FV}/verband-kruis.svg`, 'kruisverband'),
    verbandvraag('B.5.img3', `${FV}/verband-staand.svg`, 'staand verband'),
    verbandvraag('B.5.img4', `${FV}/verband-vlaams.svg`, 'Vlaams verband'),
    verbandvraag('B.5.img5', `${FV}/verband-koppen.svg`, 'koppenverband'),
    boogvraag('B.5.img6', `${F5}/rondboog.jpg`, 'rondboog'),
    boogvraag('B.5.img7', `${F5}/spitsboog.jpg`, 'spitsboog'),
    boogvraag('B.5.img8', `${F5}/segmentboog.jpg`, 'segmentboog'),
  ],
  'A.2.2': [
    stijlvraag(
      'A.2.2.img1',
      `${F22}/amsterdamse-school.jpg`,
      'Amsterdamse School',
      'De Amsterdamse School (ca. 1910–1930) is te herkennen aan het expressieve, plastische baksteenwerk met golvende gevels en siermetselwerk.',
    ),
    stijlvraag(
      'A.2.2.img2',
      `${F22}/de-stijl-schroderhuis.jpg`,
      'De Stijl',
      'De Stijl (o.a. het Rietveld Schröderhuis) kenmerkt zich door abstracte, rechthoekige vlakken en primaire kleuren (rood, geel, blauw) met wit en zwart.',
    ),
    stijlvraag(
      'A.2.2.img3',
      `${F22}/jugendstil.jpg`,
      'Jugendstil',
      'De Jugendstil (art nouveau, rond 1900) is te herkennen aan sierlijke, organische lijnen en florale decoraties.',
    ),
    stijlvraag(
      'A.2.2.img4',
      `${F22}/functionalisme-vannelle.jpg`,
      'Functionalisme (Nieuwe Bouwen)',
      'Het Functionalisme / Nieuwe Bouwen (o.a. de Van Nellefabriek) is strak en zakelijk: veel glas, staal en beton, platte daken en "vorm volgt functie".',
    ),
  ],
  'C.9': [
    {
      id: 'C.9.img1',
      toetstermCode: 'C.9.vent',
      type: 'mc',
      prompt: 'Welk ventilatiesysteem is op de doorsnedetekening weergegeven?',
      image: { src: `${FV}/ventilatie-c-vraag.svg`, caption: CAP, width: 'md' },
      options: [
        'Systeem C (natuurlijke toevoer, mechanische afvoer)',
        'Systeem A (volledig natuurlijk)',
        'Systeem B (mechanische toevoer, natuurlijke afvoer)',
        'Systeem D (gebalanceerd met WTW)',
      ],
      correctIndex: 0,
      explanation:
        'Te zien: natuurlijke toevoer via gevelroosters (blauw) en mechanische afvoer via een ventilatorbox op het dak (rood). Dat is systeem C.',
    },
    {
      id: 'C.9.img2',
      toetstermCode: 'C.9.vent',
      type: 'mc',
      prompt: 'Welk ventilatiesysteem is op de doorsnedetekening weergegeven?',
      image: { src: `${FV}/ventilatie-d-vraag.svg`, caption: CAP, width: 'md' },
      options: [
        'Systeem D (gebalanceerd met warmteterugwinning)',
        'Systeem C (natuurlijke toevoer, mechanische afvoer)',
        'Systeem A (volledig natuurlijk)',
        'Systeem B (mechanische toevoer, natuurlijke afvoer)',
      ],
      correctIndex: 0,
      explanation:
        'Te zien: een WTW-unit met warmtewisselaar en zowel mechanische toevoer (blauw) als afvoer (rood) via kanalen. Dat is systeem D (gebalanceerd met warmteterugwinning).',
    },
  ],
}
