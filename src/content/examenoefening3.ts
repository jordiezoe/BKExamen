import type { Question } from '../types/content'

/**
 * "Super-moeilijke" vragen: subtiele, vaak verwarde onderscheidingen en casussen
 * met dicht bij elkaar liggende afleiders. Geen kopieën van de officiële
 * oefenexamens; antwoordsleutels volgen uit de lesstof.
 */
export const examenoefening3Vragen: Record<string, Question[]> = {
  'A.3': [
    {
      id: 'A.3.h1',
      toetstermCode: 'A.3.2',
      type: 'mc',
      prompt:
        'Een makelaar meet volgens NEN 2580 aan de buitenzijde van de scheidingsconstructies, dus inclusief de muren. Welke maat is dit?',
      options: [
        'De bruto vloeroppervlakte (BVO)',
        'De gebruiksoppervlakte (GBO)',
        'De netto vloeroppervlakte (NVO)',
        'Het verhuurbaar vloeroppervlak (VVO)',
      ],
      correctIndex: 0,
      explanation:
        'BVO wordt aan de buitenzijde gemeten (inclusief muren). GBO en NVO worden binnenwerks gemeten; VVO is een commerciële maat exclusief technische en verticale verkeersruimten.',
    },
  ],
  'B.3': [
    {
      id: 'B.3.h1',
      toetstermCode: 'B.3.1',
      type: 'multi',
      prompt: 'Welke van de onderstaande belastingen zijn permanente (blijvende) belastingen? (meerdere juist)',
      options: [
        'Het eigen gewicht van de draagconstructie',
        'Het gewicht van de dakbedekking en afwerkvloeren',
        'Sneeuw op het dak',
        'Personen en meubels',
      ],
      correctIndices: [0, 1],
      explanation:
        'Permanent = altijd aanwezig: eigen gewicht van constructie én van vaste onderdelen (dakbedekking, afwerkvloeren). Sneeuw, wind, personen en meubels zijn variabele (veranderlijke) belastingen.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.h1',
      toetstermCode: 'B.4.6',
      type: 'mc',
      prompt:
        'Rond een heipaal in slappe grond zakt de grondlaag na verloop van tijd verder in dan de paal. Wat is het gevolg voor de paal?',
      options: [
        'De grond hangt aan de paal en geeft een extra neerwaartse belasting (negatieve kleef)',
        'De paal wordt omhoog geduwd door waterdruk',
        'De paal draagt juist minder doordat de grond meehelpt',
        'Er gebeurt niets; kleef speelt alleen bij funderen op staal',
      ],
      correctIndex: 0,
      explanation:
        'Meezakkende grond wrijft naar beneden langs de paal: negatieve kleef. Dat is een extra last die je bij de paalberekening moet meenemen — het draagt dus niet mee, maar belast juist.',
    },
  ],
  'B.5': [
    {
      id: 'B.5.h1',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt:
        'Welk blad van een spouwmuur is doorgaans het dragende deel dat de vloeren en het dak afdraagt?',
      options: [
        'Het binnenblad',
        'Het buitenblad',
        'Beide bladen dragen evenveel',
        'De spouw zelf draagt de belasting',
      ],
      correctIndex: 0,
      explanation:
        'Het binnenblad (vaak kalkzandsteen of beton) is dragend; het buitenblad (metselwerk) is vooral weer- en zichtwerk. Spouwankers koppelen ze zodat windbelasting op het buitenblad wordt overgebracht.',
    },
  ],
  'B.6': [
    {
      id: 'B.6.h1',
      toetstermCode: 'B.6.4',
      type: 'mc',
      prompt:
        'Wat is de juiste volgorde van het proces dat tot betonrot leidt?',
      options: [
        'CO₂ dringt in → zuurgraad daalt (carbonatatie) → wapening verliest bescherming en roest → uitzetting spat het beton af',
        'Wapening roest eerst → beton wordt zuur → CO₂ ontsnapt → beton krimpt',
        'Beton krimpt → grindnesten ontstaan → wapening zakt uit',
        'Water bevriest in het beton → craquelé → wapening lost op',
      ],
      correctIndex: 0,
      explanation:
        'Door carbonatatie (CO₂ + vocht) daalt de pH van het beton, waardoor de beschermende passiveringslaag om de wapening verdwijnt. Het staal gaat roesten, zet uit en drukt de betondekking eraf.',
    },
  ],
  'C.9': [
    {
      id: 'C.9.h1',
      toetstermCode: 'C.9.1',
      type: 'mc',
      prompt:
        'Een woning heeft gevelroosters voor de luchttoevoer én een mechanische afzuigbox voor de afvoer. Welk ventilatiesysteem is dit?',
      options: [
        'Systeem C (natuurlijke toevoer, mechanische afvoer)',
        'Systeem B (mechanische toevoer, natuurlijke afvoer)',
        'Systeem A (natuurlijke toe- en afvoer)',
        'Systeem D (gebalanceerd met WTW)',
      ],
      correctIndex: 0,
      explanation:
        'Let op de veelgemaakte verwisseling: bij systeem C is de tóévoer natuurlijk (roosters) en de áfvoer mechanisch (box). Bij systeem B is het precies andersom.',
    },
  ],
  'C.6': [
    {
      id: 'C.6.h1',
      toetstermCode: 'C.6.5',
      type: 'mc',
      prompt:
        'Een klant zegt dat zijn radiator "vooral met straling" verwarmt. Klopt dat, en zo nee, wat is het wél?',
      options: [
        'Niet helemaal: een radiator verwarmt vooral via convectie (opwarmende, circulerende lucht)',
        'Ja, een radiator verwarmt vrijwel uitsluitend via straling',
        'Nee, een radiator verwarmt vooral via geleiding door de vloer',
        'Nee, een radiator verwarmt vooral door verdamping',
      ],
      correctIndex: 0,
      explanation:
        'Ondanks de naam "radiator" (= straler) geeft hij zijn warmte vooral via convectie af: de lucht langs de ribben warmt op, stijgt en circuleert. Vloerverwarming en stralingspanelen geven relatief méér straling.',
    },
  ],
  'C.11': [
    {
      id: 'C.11.h1',
      toetstermCode: 'C.11.1',
      type: 'multi',
      prompt: 'Welke glassoorten worden tot het veiligheidsglas gerekend? (meerdere juist)',
      options: [
        'Gelaagd glas (met folie tussen de bladen)',
        'Gehard glas (thermisch versterkt)',
        'Enkel floatglas',
        'HR++-isolatieglas',
      ],
      correctIndices: [0, 1],
      explanation:
        'Veiligheidsglas = gelaagd glas (scherven blijven aan de folie plakken) én gehard glas (breekt in stompe korrels). HR++ zegt iets over isolatie, niet over veiligheid; enkel floatglas is juist gevaarlijk bij breuk.',
    },
    {
      id: 'C.11.h2',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt:
        'Twee ramen: raam 1 heeft glas met Ug = 1,1 W/m²K, raam 2 met Ug = 0,7 W/m²K. Welk raam isoleert beter en hoe heet dat laatste glas waarschijnlijk?',
      options: [
        'Raam 2 isoleert beter; dat is waarschijnlijk triple glas (HR+++)',
        'Raam 1 isoleert beter; dat is triple glas',
        'Beide isoleren gelijk; de Ug-waarde zegt niets',
        'Raam 2 isoleert slechter omdat de waarde lager is',
      ],
      correctIndex: 0,
      explanation:
        'Bij de U-waarde geldt: hoe lager, hoe beter de isolatie. 0,7 hoort bij triple glas (HR+++); 1,1 bij goed dubbelglas (HR++). Let op: bij Rc is het juist andersom (hoger = beter).',
    },
  ],
  'D.3': [
    {
      id: 'D.3.h1',
      toetstermCode: 'D.3.5',
      type: 'mc',
      prompt:
        'Koppel correct: welke grootheid zegt iets over de warmteweerstand van een dichte constructie (waarbij hóger beter is)?',
      options: [
        'De Rc-waarde',
        'De U-waarde',
        'De lambda-waarde (λ)',
        'De ZTA-waarde',
      ],
      correctIndex: 0,
      explanation:
        'Rc = warmteweerstand van een dichte constructie (hoger = beter). U = warmtedoorgang van bv. glas/kozijn (lager = beter). λ = warmtegeleiding van een materiaal (lager = beter). ZTA gaat over zonwering.',
    },
    {
      id: 'D.3.h2',
      toetstermCode: 'D.3.3',
      type: 'mc',
      prompt:
        'Waarom hoort de dampremmende folie aan de wárme (binnen)zijde van de isolatie en niet aan de koude buitenzijde?',
      options: [
        'Zo wordt voorkomen dat vochtige binnenlucht ín de constructie doordringt en daar tegen de koude zijde condenseert',
        'Zo kan regenwater beter naar buiten weglopen',
        'Omdat folie aan de koude zijde bevriest en scheurt',
        'Het maakt niet uit; het is puur een montagekeuze',
      ],
      correctIndex: 0,
      explanation:
        'Warme binnenlucht bevat veel waterdamp. De dampremmer aan de warme zijde houdt die damp tegen, zodat hij niet dieper in de constructie tot bij de koude zijde komt en daar condenseert (met vocht/schimmel tot gevolg).',
    },
  ],
  'D.1': [
    {
      id: 'D.1.h1',
      toetstermCode: 'D.1.2',
      type: 'mc',
      prompt:
        'Een bouwdeel krijgt in de NEN 2767-conditiemeting score 5. Wat betekent dat?',
      options: [
        'Een slechte conditie (dicht bij afgekeurd)',
        'Een vrijwel nieuwe, uitstekende conditie',
        'Een gemiddelde, redelijke conditie',
        'Dat het bouwdeel niet te beoordelen is',
      ],
      correctIndex: 0,
      explanation:
        'De NEN 2767-schaal loopt van 1 (uitstekend, nieuwstaat) tot 6 (zeer slecht). Score 5 is dus slecht — bijna aan vervanging toe. Let op de richting: een hóger cijfer is juist slechter.',
    },
  ],
}
