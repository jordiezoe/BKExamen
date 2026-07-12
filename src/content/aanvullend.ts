import type { Question } from '../types/content'

/**
 * Aanvullende examen-vragen in SVMNIVO/TestVision-toon, geschreven voor
 * toetstermen die in de bestaande bank dun bezet waren (A.3.2, B.4.3, B.4.11)
 * en voor de lichtste onderwerpen (B.1, B.2, C.7). Antwoordsleutels zijn
 * afgeleid uit de lesstof van de betreffende onderwerpen.
 *
 * Gekoppeld per onderwerp-code; de content-index plakt ze achter de
 * bestaande vragen zodat de examen-engine ze automatisch meeneemt.
 */
export const aanvullendeVragen: Record<string, Question[]> = {
  'A.3': [
    {
      id: 'A.3.x1',
      toetstermCode: 'A.3.2',
      type: 'mc',
      prompt:
        'Welke oppervlaktemaat vermeldt een makelaar volgens NEN 2580 in de woningadvertentie?',
      options: [
        'De bruto vloeroppervlakte (BVO)',
        'De gebruiksoppervlakte (GBO)',
        'Het verhuurbaar vloeroppervlak (VVO)',
        'De netto-inhoud in m³',
      ],
      correctIndex: 1,
      explanation:
        'De gebruiksoppervlakte (GBO) is de feitelijk bruikbare oppervlakte binnen de wanden en is dé maat die makelaars in advertenties vermelden. BVO wordt aan de buitenzijde gemeten; VVO geldt voor commercieel vastgoed.',
    },
    {
      id: 'A.3.x2',
      toetstermCode: 'A.3.2',
      type: 'mc',
      prompt:
        'Vanaf welke plafondhoogte telt een ruimte onder een schuine kap volgens de BBMI mee als woonoppervlakte?',
      options: ['1,00 m', '1,30 m', '1,50 m', '2,10 m'],
      correctIndex: 2,
      explanation:
        'De BBMI (Branchebrede Meetinstructie) rekent het deel van een ruimte met een plafondhoogte van 1,50 m of hoger mee als gebruiksoppervlakte wonen. Het lagere deel onder de schuine kap telt niet mee.',
    },
    {
      id: 'A.3.x3',
      toetstermCode: 'A.3.2',
      type: 'mc',
      prompt: 'Hoe wordt een garage of vrijstaande schuur in de BBMI-opgave behandeld?',
      options: [
        'Meegeteld bij de gebruiksoppervlakte wonen',
        'Apart vermeld als overige inpandige ruimte of externe berging',
        'Volledig buiten beschouwing gelaten',
        'Meegeteld voor de helft van de oppervlakte',
      ],
      correctIndex: 1,
      explanation:
        'Onverwarmde ruimten zoals een garage worden apart opgegeven als "overige inpandige ruimte"; een vrijstaande schuur als "externe berging". Ze tellen niet mee bij de woonoppervlakte, maar worden wel apart vermeld.',
    },
    {
      id: 'A.3.x4',
      toetstermCode: 'A.3.2',
      type: 'mc',
      prompt: 'Wat regelt het omgevingsplan onder de Omgevingswet?',
      options: [
        'Alleen de welstandseisen van de gemeente',
        'De regels voor de fysieke leefomgeving die vroeger in het bestemmingsplan en losse verordeningen stonden',
        'Uitsluitend de landelijke milieunormen',
        'De kadastrale grenzen van percelen',
      ],
      correctIndex: 1,
      explanation:
        'Het omgevingsplan bundelt per gemeente de regels voor de fysieke leefomgeving die eerder verspreid stonden over het bestemmingsplan en tientallen gemeentelijke verordeningen.',
    },
  ],
  'B.4': [
    {
      id: 'B.4.x1',
      toetstermCode: 'B.4.3',
      type: 'mc',
      prompt:
        'Met welk grondonderzoek wordt de draagkracht van de ondergrond bepaald door een stalen conus in de grond te drukken?',
      options: ['Een boring', 'Een sondering (CPT)', 'Een pulsboring', 'Een zettingsmeting'],
      correctIndex: 1,
      explanation:
        'Bij een sondering (Cone Penetration Test) wordt een stalen meetconus met kracht de grond in geduwd. De gemeten conusweerstand geeft aan hoe stevig de bodem op welke diepte is — de basis voor de funderingskeuze.',
    },
    {
      id: 'B.4.x2',
      toetstermCode: 'B.4.3',
      type: 'mc',
      prompt: 'Wat is het resultaat van een sondering?',
      options: [
        'Een boorstaat met grondmonsters',
        'Een sondeerdiagram met de weerstand tegen de diepte',
        'Een kadastrale kaart',
        'Een energielabel',
      ],
      correctIndex: 1,
      explanation:
        'Een sondering levert een sondeerdiagram op waarop de conus- en wrijvingsweerstand tegen de diepte zijn uitgezet. Een boorstaat hoort bij een boring.',
    },
    {
      id: 'B.4.x3',
      toetstermCode: 'B.4.11',
      type: 'mc',
      prompt:
        'Waarom wordt naast een sondering vaak ook een boring uitgevoerd?',
      options: [
        'Om de conusweerstand nauwkeuriger te meten',
        'Om grondmonsters omhoog te halen en de grondlagen (klei/veen/zand) visueel te beoordelen',
        'Om het grondwaterpeil te verlagen',
        'Om de damwand te plaatsen',
      ],
      correctIndex: 1,
      explanation:
        'Een boring haalt grondmonsters naar boven, zodat de samenstelling van de lagen visueel te beoordelen is (boorstaat). Een sondering meet vooral de stevigheid; de twee vullen elkaar aan.',
    },
    {
      id: 'B.4.x4',
      toetstermCode: 'B.4.11',
      type: 'multi',
      prompt: 'Welke gegevens leveren grondonderzoeken op? (meerdere antwoorden juist)',
      options: [
        'De conusweerstand op verschillende dieptes',
        'De opbouw van de grondlagen',
        'De marktwaarde van de woning',
        'De draagkracht van de ondergrond',
      ],
      correctIndices: [0, 1, 3],
      explanation:
        'Grondonderzoek (sondering + boring) geeft de conusweerstand, de laagopbouw en daarmee de draagkracht van de ondergrond. De marktwaarde volgt niet uit grondonderzoek.',
    },
  ],
  'B.1': [
    {
      id: 'B.1.x1',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Volgens Vitruvius moet een gebouw aan drie kwaliteiten voldoen. Welke rij noemt ze correct?',
      options: [
        'Stevigheid, bruikbaarheid en schoonheid',
        'Snelheid, prijs en duurzaamheid',
        'Isolatie, ventilatie en verlichting',
        'Fundering, opbouw en dak',
      ],
      correctIndex: 0,
      explanation:
        'Vitruvius benoemde firmitas (stevigheid/duurzaamheid), utilitas (bruikbaarheid) en venustas (schoonheid). Deze drie-eenheid geldt nog steeds als basis voor bouwkundige kwaliteit.',
    },
    {
      id: 'B.1.x2',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Een woning is prachtig vormgegeven maar de fundering verzakt. Aan welke Vitruvius-kwaliteit schiet het gebouw tekort?',
      options: ['Schoonheid (venustas)', 'Bruikbaarheid (utilitas)', 'Stevigheid (firmitas)', 'Geen enkele'],
      correctIndex: 2,
      explanation:
        'Een verzakkende fundering is een gebrek aan stevigheid/duurzaamheid (firmitas). De schoonheid (venustas) is immers in orde.',
    },
  ],
  'B.2': [
    {
      id: 'B.2.x1',
      toetstermCode: 'B.2.1',
      type: 'multi',
      prompt:
        'Welke van de volgende onderdelen behoren tot de elementengroepen van de hoofdopbouw? (meerdere antwoorden juist)',
      options: ['Fundering', 'Draagconstructie/opbouw', 'Dak', 'Het straatmeubilair'],
      correctIndices: [0, 1, 2],
      explanation:
        'De hoofdopbouw bestaat uit de elementengroepen fundering, opbouw (draagconstructie), dak, kelder, afwerking en installaties. Straatmeubilair hoort daar niet bij.',
    },
    {
      id: 'B.2.x2',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Welke elementengroep brengt de belastingen van het gebouw over naar de draagkrachtige ondergrond?',
      options: ['Het dak', 'De fundering', 'De afwerking', 'De installaties'],
      correctIndex: 1,
      explanation:
        'De fundering draagt de belastingen van het hele gebouw over naar de stevige grondlaag. Het dak sluit het gebouw bovenaan af; afwerking en installaties dragen niet constructief.',
    },
  ],
  'C.7': [
    {
      id: 'C.7.x1',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt:
        'Wat houdt "topkoeling" als klimaatbeheersingssysteem in?',
      options: [
        'Volledige koeling van de hele woning tot een instelbare temperatuur',
        'Beperkte koeling die alleen de piek (toplast) van de warmte wegneemt',
        'Koeling door natuurlijke ventilatie via roosters',
        'Verwarmen én koelen met één gasketel',
      ],
      correctIndex: 1,
      explanation:
        'Topkoeling neemt alleen de bovenste warmtelast weg — het haalt de scherpe kantjes van de warmte af zonder de ruimte volledig te conditioneren zoals een echte airconditioning dat doet.',
    },
    {
      id: 'C.7.x2',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt:
        'Welk systeem verzorgt zowel verwarmen als koelen via de behandeling van lucht?',
      options: [
        'Een gecombineerd luchtbehandelingssysteem',
        'Een losse radiator',
        'Een open haard',
        'Een enkel ventilatierooster',
      ],
      correctIndex: 0,
      explanation:
        'Een gecombineerd systeem met luchtbehandeling kan de lucht zowel verwarmen als koelen (en vaak ventileren). Een radiator of open haard kan alleen verwarmen.',
    },
  ],
}
