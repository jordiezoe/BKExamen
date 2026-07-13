import type { Question } from '../types/content'

/**
 * Materiaal-/materieel-herkenningsvragen ("wat is dit?"), zoals de echte
 * proeftoets af en toe een foto toont en vraagt wat je ziet.
 *
 * De foto's komen van Wikimedia Commons (vrij gelicentieerd, met bron­vermelding
 * in public/figs/fotos/CREDITS.md en public/figs/materiaal/CREDITS.md). Elke foto
 * is vooraf visueel gecontroleerd zodat de antwoordsleutel klopt. De categorieën
 * hebben een eigen toetstermcode zodat ze betrouwbaar in de trekking komen.
 */
const CAP = 'Bekijk de foto bij deze vraag.'
const FOTO = '/figs/fotos'
const MAT = '/figs/materiaal'

export const beeldVragen2: Record<string, Question[]> = {
  'B.5': [
    {
      id: 'B.5.mat1',
      toetstermCode: 'B.5.mat-baksteen',
      type: 'mc',
      prompt: 'Welk bouwmateriaal is op de foto te zien?',
      image: { src: `${MAT}/baksteen.jpg`, caption: CAP, width: 'md' },
      options: ['Baksteen (metselwerk)', 'Kalkzandsteen', 'Beton', 'Natuursteen'],
      correctIndex: 0,
      explanation:
        'Dit is metselwerk van gebakken baksteen: rode, gebakken stenen met voegen. Kalkzandsteen is licht/wit; beton en natuursteen hebben een ander uiterlijk.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.mat1',
      toetstermCode: 'B.6.mat-wapening',
      type: 'mc',
      prompt: 'Welk materiaal is op de foto te zien?',
      image: { src: `${FOTO}/betonwapening.jpg`, caption: CAP, width: 'md' },
      options: ['Wapeningsstaal (betonstaal)', 'Koperen leidingen', 'Aluminium profielen', 'Gietijzeren buizen'],
      correctIndex: 0,
      explanation:
        'Dit zijn geribbelde wapeningsstaven (betonstaal). De ribbels zorgen voor hechting met het beton en nemen de trekkrachten op.',
    },
  ],
  'B.7': [
    {
      id: 'B.7.mat1',
      toetstermCode: 'B.7.mat-spant',
      type: 'mc',
      prompt: 'Welke constructie is op de foto te zien?',
      image: { src: `${FOTO}/stalen-spant.jpg`, caption: CAP, width: 'md' },
      options: ['Een stalen vakwerkligger/-spant', 'Een houten spant', 'Een betonnen ligger', 'Een gemetselde boog'],
      correctIndex: 0,
      explanation:
        'Een vakwerk van stalen staven (driehoeken) die samen een lichte, sterke ligger of spant vormen — herkenbaar aan de open, driehoekige opbouw.',
    },
  ],
  'B.16': [
    {
      id: 'B.16.mat1',
      toetstermCode: 'B.16.mat-eps',
      type: 'mc',
      prompt: 'Welk isolatiemateriaal is op de foto te zien?',
      image: { src: `${MAT}/eps-isolatie.jpg`, caption: CAP, width: 'md' },
      options: [
        'EPS (geëxpandeerd polystyreen / piepschuim)',
        'Steenwol',
        'Glaswol',
        'Houtvezelisolatie',
      ],
      correctIndex: 0,
      explanation:
        'EPS bestaat uit aan elkaar gebakken schuimbolletjes (piepschuim); de grijze variant bevat grafiet en isoleert iets beter. Minerale wol (steen-/glaswol) heeft een vezelige structuur.',
    },
    {
      id: 'B.16.mat2',
      toetstermCode: 'B.16.mat-steenwol',
      type: 'mc',
      prompt: 'Welk isolatiemateriaal wordt op deze gevel aangebracht?',
      image: { src: `${FOTO}/steenwol-isolatie.jpg`, caption: CAP, width: 'md' },
      options: ['Steenwol (minerale wol)', 'EPS-platen', 'XPS-platen', 'PUR-schuim'],
      correctIndex: 0,
      explanation:
        'De donkere, vezelige platen zijn steenwol (minerale wol): onbrandbaar en dampopen, hier als gevelisolatie aangebracht. EPS/XPS zijn juist gladde kunststofplaten.',
    },
  ],
  'C.1': [
    {
      id: 'C.1.mat1',
      toetstermCode: 'C.1.mat-sanitair',
      type: 'mc',
      prompt: 'Welk sanitair toestel is op de foto te zien?',
      image: { src: `${MAT}/wastafel.jpg`, caption: CAP, width: 'md' },
      options: ['Een wastafel', 'Een closet (wc)', 'Een douchebak', 'Een gootsteen in de keuken'],
      correctIndex: 0,
      explanation:
        'Een keramische wastafel met kraan, doorgaans in de badkamer of het toilet. Herkenbaar aan de ondiepe kom met overloop en één tapkraan.',
    },
  ],
  'C.4': [
    {
      id: 'C.4.mat1',
      toetstermCode: 'C.4.mat-groepenkast',
      type: 'mc',
      prompt: 'Welk onderdeel van de installatie is op de foto te zien?',
      image: { src: `${FOTO}/groepenkast.jpg`, caption: CAP, width: 'md' },
      options: [
        'De groepenkast (verdeelinrichting)',
        'De cv-ketel',
        'De watermeter',
        'De omvormer van zonnepanelen',
      ],
      correctIndex: 0,
      explanation:
        'De groepenkast verdeelt de elektriciteit over de groepen en bevat de aardlekschakelaar(s) en installatieautomaten (stoppen).',
    },
  ],
  'C.5': [
    {
      id: 'C.5.mat1',
      toetstermCode: 'C.5.mat-pv',
      type: 'mc',
      prompt: 'Wat is er op het dak in de foto aangebracht?',
      image: { src: `${FOTO}/zonnepanelen-dak.jpg`, caption: CAP, width: 'md' },
      options: ['Zonnepanelen (PV-panelen)', 'Dakramen', 'Zinken dakbedekking', 'Zonweringschermen'],
      correctIndex: 0,
      explanation:
        'Dit zijn fotovoltaïsche zonnepanelen (PV): donkere, glazen panelen die zonlicht omzetten in elektriciteit.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.mat1',
      toetstermCode: 'C.6.mat-ketel',
      type: 'mc',
      prompt: 'Welk verwarmingstoestel is op de foto te zien?',
      image: { src: `${FOTO}/hr-ketel.jpg`, caption: CAP, width: 'md' },
      options: ['Een cv-ketel (hr-ketel)', 'Een warmtepomp', 'Een boiler zonder verwarming', 'Een groepenkast'],
      correctIndex: 0,
      explanation:
        'Een wandgemonteerde cv-ketel (hoogrendement) die verwarming en warm tapwater verzorgt, met aansluitingen voor gas, water en de rookgasafvoer.',
    },
    {
      id: 'C.6.mat2',
      toetstermCode: 'C.6.mat-warmtepomp',
      type: 'mc',
      prompt: 'Welk apparaat is op de foto te zien?',
      image: { src: `${FOTO}/warmtepomp-buitenunit.jpg`, caption: CAP, width: 'md' },
      options: [
        'De buitenunit van een (lucht)warmtepomp',
        'Een cv-ketel',
        'Een groepenkast',
        'Een zonnecollector',
      ],
      correctIndex: 0,
      explanation:
        'De buitenunit van een lucht-warmtepomp met ventilator; die onttrekt warmte aan de buitenlucht voor verwarming en warm water.',
    },
  ],
  'C.14': [
    {
      id: 'C.14.mat1',
      toetstermCode: 'C.14.mat-leisteen',
      type: 'mc',
      prompt: 'Welke natuursteensoort is op de foto te zien?',
      image: { src: `${MAT}/leisteen.jpg`, caption: CAP, width: 'md' },
      options: ['Leisteen', 'Marmer', 'Graniet', 'Zandsteen'],
      correctIndex: 0,
      explanation:
        'Leisteen is een donkergrijs, in dunne platen splijtbaar metamorf gesteente — veel gebruikt voor dakbedekking (leien). Marmer is licht en geaderd; graniet korrelig en hard.',
    },
  ],
  'A.1': [
    {
      id: 'A.1.mat1',
      toetstermCode: 'A.1.mat-kraan',
      type: 'mc',
      prompt: 'Welk stuk bouwmaterieel is op de foto te zien?',
      image: { src: `${MAT}/torenkraan.jpg`, caption: CAP, width: 'md' },
      options: ['Een torenkraan (hijskraan)', 'Een heistelling', 'Een betonpomp', 'Een graafmachine'],
      correctIndex: 0,
      explanation:
        'Een torenkraan met een verticale mast en horizontale giek van vakwerkstaal; hij hijst materiaal omhoog op de bouwplaats.',
    },
  ],
}
