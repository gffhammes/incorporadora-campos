interface IEnterprise {
  logo: string;
  thumb: string;
  image: string;
  banner: string;
  pageTitle: string;
  pageText: string;
  name: string;
  slug: string;
  district: string;
  city: string;
  fullAddress: string;
  area: string;
  bedrooms: string;
  buildingsQty: number
  floorsQty: number;
  apartmentsTotal: number;
  apartmentsPerFloor: number;
  apartmentsOptions: string;
  status: string;
  description: string;
  photos: string[];
  differentials: string[];
  summaryText: string;
  planText?: string;
  plans: { label: string; image: string; }[];
  detailedStatus: {
    infrastructure: number;
    foundation: number;
    masonry: number;
    installations: number;
    coating: number;
  };
  hideSections?: string[],
}

const piazzaSanPietro: IEnterprise = {
  logo: '/vectors/piazza-san-pietro.svg',
  thumb: '/images/piazza-san-pietro/SAN-PIETRO-card-home.png',
  image: '/images/THUMB_SAN_PIETRO_INICIAL_800x800px.png',
  banner: '/images/piazza-san-pietro/BANNER_SAN_PIETRO.jpg',
  pageTitle: 'Inspirado na praça de São Pedro, na cidade do Vaticano:',
  pageText: 'A Piazza San Pietro, localizada no Vaticano aos pés da Basílica de São Pedro, é uma das maiores e mais impressionantes praças do mundo.\n\nInspirado nessa obra-prima, a Campos traz para Joinville o empreendimento Piazza San Pietro.\n\nLocalizado no coração do bairro América, ele traz com todo o conforto e requinte que você e sua família merecem. Veja mais detalhes e permita-se ser surpreendido.',
  name: 'Piazza San Pietro',
  slug: 'piazza-san-pietro',
  district: 'América',
  city: 'Joinville',
  fullAddress: 'Rua João Pessoa 912, América - Joinville/SC',
  area: 'Área privativa de 108 a 126m²',
  bedrooms: '2 ou 3 suítes',
  buildingsQty: 1,
  floorsQty: 8,
  apartmentsTotal: 17,
  apartmentsPerFloor: 3,
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  status: 'Em obras',
  description: `Área privativa de 108 e 126m²\n3 suítes ou 2 suítes e 1 dormitório`,
  photos: [
    '/images/piazza-san-pietro/galeria/APART TIPO 1/Apto_Tipo01_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/APART TIPO 1/Apto_Tipo01_Cam02.jpg',
    '/images/piazza-san-pietro/galeria/APART TIPO 1/Apto_Tipo01_Cam03.jpg',
    '/images/piazza-san-pietro/galeria/APART TIPO 1/Apto_Tipo01_Quarto_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/APART TIPO 1/Quarto_Tipo01_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/APART TIPO 2/Apto_Quarto_Tipo02_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/APART TIPO 2/Apto_Tipo02_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/APART TIPO 2/Apto_Tipo02_Cam02.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/ACADEMIA/Campos_SanPietro_Social_Academia_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/ACADEMIA/Campos_SanPietro_Social_Academia_Cam02.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/BRINQUEDOTECA/Campos_SanPietro_Social_Brinquedoteca_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/ESPAÇO ZEN/Area_Zen_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/ESPAÇO ZEN/Area_Zen_Cam02.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/ESPAÇO ZEN/Espaço_zen_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/HALL DE ENTRADA/Hall_Entrada_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/PISCINA/_CAMPOS_SAN_PIETRO_PISCINA_R02.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/SALÃO DE FESTAS/Area_Festas_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/SALÃO DE FESTAS/Area_Festas_Cam02.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/SALÃO DE FESTAS/Area_Festas_Cam03.jpg',
    '/images/piazza-san-pietro/galeria/ÁREA DE LAZER/SALÃO DE JOGOS/Campos_SanPietro_Social_Jogos_Cam01.jpg',
    '/images/piazza-san-pietro/galeria/FACHADA/Cópia-de-CAMPOS_SAN_PIETRO_FACHADA_FINAL.jpg',
  ],
  differentials: [
    'adult-pool',
    'kids-pool',
    'dry-deck',
    'wet-deck',
    'party-hall',
    'playground',
    'kids-room',
    'zen-lounge',
    'noble-area',
    'playroom',
  ],
  planText: `
    <ul style="list-style-position: inside;">
      <li>Torre única | 8 andares | 17 aptos. | 3 por andar</li>
      <li>7 Aptos. tipo 1 com 126m² privativos | 3 suítes</li>
      <li>10 Aptos. tipo 2 e 3 com 108m² privativos | 2 suítes e 1 dormitório</li>
      <li>1 cobertura plana com 168m² privativos</li>
      <li>1 cobertura plana com 173m² privativos</li>
      <li>Sacada com churrasqueira a carvão</li>
      <li>Duas vagas de garagem</li>
      <li>Ambientes integrados nos apartamentos</li>
      <li>Infraestrutura para sistema de segurança</li>
      <li>Infraestrutura para refrigeração em todos os cômodos</li>
    </ul>
    <br/>
    <strong style="color: #1A47BC;">📅 ENTREGA PREVISTA MAIO 2024</strong>
  `,
  plans: [
    {
      label: 'Apartamento Tipo 1',
      image: '/images/piazza-san-pietro/plantas/PLANTA  APTO TIPO 01.jpg',
    },
    {
      label: 'Apartamento Tipo 2',
      image: '/images/piazza-san-pietro/plantas/PLANTA APTO TIPO 02.jpg',
    },
    {
      label: 'Apartamento Tipo 3',
      image: '/images/piazza-san-pietro/plantas/PLANTA JOÃO PESSOA Tipo AP03.jpg',
    },
    {
      label: 'Planta Geral',
      image: '/images/piazza-san-pietro/plantas/PLANTA TIPO op08.jpg',
    },
  ],
  detailedStatus: {
    infrastructure: 1,
    foundation: .8,
    masonry: 0.1,
    installations: 0,
    coating: 0,
  },
  summaryText: 'Torre única | 8 andares | 17 apartamentos | 02 Coberturas | Ambientes integrados nos apartamentos | Infraestrutura para sistema de segurança | Infraestrutura para refrigeração em todos os cômodos',
}

const piazzaDelMare: IEnterprise = {
  logo: '/images/DEL_MARE.png',
  thumb: '/images/piazza-del-mare/del-mare-card-home.png',
  image: '/images/PREDIO_DEL_MARE_NOTURNO.png',
  banner: '/images/piazza-del-mare/BANNER_DEL_MARE.jpg',
  name: 'Piazza Del Mare',
  slug: 'piazza-del-mare',
  district: 'Itacolomi',
  city: 'Balneário Piçarras',
  fullAddress: 'Rua 2.900 (Nonato Costa), 79, Itacolomi - Balneário Piçarras',
  area: 'Área privativa de 99 a 123m²',
  bedrooms: '1 suíte e 2 demi-suítes ou 3 suítes',
  buildingsQty: 1,
  floorsQty: 19,
  apartmentsTotal: 45,
  apartmentsPerFloor: 3,
  status: 'Pré Lançamento',
  description: `Área privativa de 99 a 123 m²\n3 suítes ou 1 suíte e 2 demi-suítes`,
  pageTitle: 'INSPIRADO NA PRAÇA DEL MARE, EM RODI GARGANICO:',
  pageText: 'Rodi Garganico é um pequeno vilarejo italiano cercado de paisagens exuberantes da praia e da natureza. E foi inspirado em paisagens de tirar o fôlego, que o Piazza Del Mare foi projetado.\n\nO mar de Balneário Piçarras foi emoldurado em uma vista única, que pode ser apreciada de dentro do seu próprio apartamento.\n\nE até mesmo o Zico, nosso eterno camisa 10, resolveu descer para Santa Catarina e fazer deste belo empreendimento, a sua próxima jogada.',
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  planText: `
    <ul style="list-style-position: inside;">
      <li>Torre única / 19 andares / 45 apartamentos / 3 por andar</li>
      <li>Plantas tipo 1: 123,96m² privativos</li>
      <li>Plantas tipo 2: 99,90m² privativos</li>
      <li>Plantas tipo 3: 99,98m² privativos</li>
      <li>Espaço gourmet no apartamento</li>
      <li>Sacada com churrasqueira a carvão</li>
      <li>Ambientes integrados nos apartamentos</li>  
      <li>Opção de segunda vaga de garagem</li>
      <li>Infraestrutura para sistema de segurança</li>
      <li>2 elevadores</li>
    </ul>
    <br/>
    <strong style="color: #1A47BC;">📅 ENTREGA PREVISTA DEZEMBRO 2025</strong>
  `,
  photos: [
    '/images/piazza-del-mare/galeria/ACADEMIA/ACADEMIA__001__PIAZZA-DEL-MARE__CAMPOS.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 1/DORMITORIO__APART-TIPO-001__PIAZZA-DEL-MARE__001.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 1/DORMITORIO__APART-TIPO-001__PIAZZA-DEL-MARE__002.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 1/LIVING__APART-TIPO-001__PIAZZA-DEL-MARE__001.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 1/LIVING__APART-TIPO-001__PIAZZA-DEL-MARE__002.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 1/LIVING__APART-TIPO-001__PIAZZA-DEL-MARE__003.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 1/LIVING__APART-TIPO-001__PIAZZA-DEL-MARE__004.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 2/LIVING__APART-TIPO-002__PIAZZA-DEL-MARE__001.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 2/LIVING__APART-TIPO-002__PIAZZA-DEL-MARE__002.jpg',
    '/images/piazza-del-mare/galeria/APTO TIPO 2/LIVING__APART-TIPO-002__PIAZZA-DEL-MARE__003.jpg',
    '/images/piazza-del-mare/galeria/BRINQUEDOTECA/BRINQUEDOTECA__001__PIAZZA-DEL-MARE__CAMPOS.jpg',
    '/images/piazza-del-mare/galeria/FACHADA/TORRE_FRONTAL-001---PIAZZA-DEL-MARE-UNK-sem-estátua.jpg',
    '/images/piazza-del-mare/galeria/FACHADA/WhatsApp Image 2022-03-07 at 16.19.37.jpeg',
    '/images/piazza-del-mare/galeria/LOUNGE - ROOFTOP/LOUNGE__001__PIAZZA-DEL-MARE__CAMPOS.jpg',
    '/images/piazza-del-mare/galeria/LOUNGE - ROOFTOP/LOUNGE__002__PIAZZA-DEL-MARE__CAMPOS.jpg',
    '/images/piazza-del-mare/galeria/LOUNGE - ROOFTOP/LOUNGE__003__PIAZZA-DEL-MARE__CAMPOS.jpg',
    '/images/piazza-del-mare/galeria/LOUNGE - ROOFTOP/PISCINA__001__PIAZZA-DEL-MARE__CAMPOS.jpg',
    '/images/piazza-del-mare/galeria/SALAO DE FESTAS/SALAO-DE-FESTAS__001__PIAZZA-DEL-MARE__CAMPOS.jpg',
  ],
  differentials: [
    'rooftop',
    'pool',
    'wet-deck',
    'external-lounge',
    'fireplace-lounge',
    'party-hall',
    'gym',
    'kids-room',
    'sea-view',
    'beach-area',
  ],
  plans: [
    {
      label: 'Planta geral Tipo - Com áreas',
      image: '/images/piazza-del-mare/plantas/Planta-geral-Tipo---Com-áreas.png',
    },
    {
      label: 'Planta geral Tipo',
      image: '/images/piazza-del-mare/plantas/Planta--geral-tipo.png',
    },
    {
      label: 'Planta Rooftop',
      image: '/images/piazza-del-mare/plantas/planta_rooftop.png',
    },
    {
      label: 'Planta Tipo 1 - Com áreas',
      image: '/images/piazza-del-mare/plantas/planta_tipo_1_comareas.png',
    },
    {
      label: 'Planta Tipo 1',
      image: '/images/piazza-del-mare/plantas/planta_tipo1.png',
    },
    {
      label: 'Planta Tipo 2 - Com áreas',
      image: '/images/piazza-del-mare/plantas/planta_tipo_2_comareas.png',
    },
    {
      label: 'Planta Tipo 2',
      image: '/images/piazza-del-mare/plantas/planta_tipo_2.png',
    },
    {
      label: 'Planta Tipo 3 - Com áreas',
      image: '/images/piazza-del-mare/plantas/planta_tipo_3_comareas.png',
    },
    {
      label: 'Planta Tipo 3',
      image: '/images/piazza-del-mare/plantas/planta_tipo_3.png',
    },
  ],
  detailedStatus: {
    infrastructure: 0,
    foundation: 0,
    masonry: 0,
    installations: 0,
    coating: 0,
  },
  summaryText: 'Torre única | 19 andares | 45 apartamentos | Opção de segunda vaga de garagem | Infraestrutura para sistema de segurança | 2 elevadores',
}

const piazzaDellaLiberta: IEnterprise = {
  hideSections: ['planOptions', 'contact'],
  logo: null,
  thumb: '/images/piazza-della-liberta/LIBERTA-card-home.png',
  image: '/images/dellaliberta_800x800px.png',
  banner: '/images/piazza-della-liberta/Cópia-de-008_Salão_de_Festas_002.webp',
  name: 'Piazza Della Libertá',
  slug: 'piazza-della-liberta',
  district: 'Costa e Silva',
  city: 'Joinville',
  fullAddress: 'Rua Carlos Willy Boehm 738, Costa e Silva - Joinville / SC',
  area: 'Área privativa de 94 a 97m²',
  bedrooms: '2 suítes e 1 dormitório',
  buildingsQty: 1,
  floorsQty: 8,
  apartmentsTotal: 23,
  apartmentsPerFloor: 3,
  status: '100% vendido',
  description: `Área privativa de 94 a 97m²\n2 suítes e 1 dormitório`,
  pageTitle: 'INSPIRADO NA PRAÇA DELLA LIBERTÁ, DE FLORENÇA:',
  pageText: 'A Piazza della Libertá foi construída no século 19, no extremo norte do centro histórico de Florença.\n\nEla fez parte das obras para produzir o Viali di Circonvallazione, um projeto que criou grandes praças, das quais se ramificam vias largas que circundam o centro da cidade\n\nSua arquitetura burguesa e cheia de história, inspirou a criação do residencial Piazza della Libertá\n\n',
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  photos: [      
    '/images/piazza-della-liberta/Cópia de Vista Pe direito.webp',
    '/images/piazza-della-liberta/Cópia-de-006_Hall_Entrada_001.webp',
    '/images/piazza-della-liberta/Cópia-de-008_Salão_de_Festas_002.webp',
    '/images/piazza-della-liberta/Cópia-de-009_Piscina_Externa_02.webp',
    '/images/piazza-della-liberta/Cópia-de-010_Piscina_externa_03.webp',
    '/images/piazza-della-liberta/Cópia-de-011_Externa_Frontal_Noturna_003_Final.webp',
    '/images/piazza-della-liberta/Cópia-de-011_Piscina_Externa_01.webp',
    '/images/piazza-della-liberta/Cópia-de-Salão_Festas_001.webp',
    '/images/piazza-della-liberta/Cópia-de-Salão_Festas_002.webp',
    '/images/piazza-della-liberta/Cópia-de-Salão_Festas_003.webp',
    '/images/piazza-della-liberta/Cópia-de-Vista-Frontal.webp',
  ],
  differentials: [
    'grill',
    'gourmet-lounge',
    'pool',
    'party-hall',
    'decorated-hall',
  ],
  plans: [
  ],
  detailedStatus: {
    infrastructure: 1,
    foundation: 1,
    masonry: 1,
    installations: 1,
    coating: 1,
  },
  summaryText: 'Torre única | 8 andares | 23 apartamentos',
}

const piazzaSanCarlo: IEnterprise = {
  hideSections: ['planOptions', 'contact'],
  logo: null,
  thumb: '/images/piazza-san-carlo/piazzasancarlo-card-home.png',
  image: '/images/PREDIO_SAN_CARLO.png',
  banner: '/images/piazza-san-carlo/piazza-san-carlo-salao-de-festas.png',
  name: 'Piazza San Carlo', 
  slug: 'piazza-san-carlo',
  district: 'Costa e Silva',
  city: 'Joinville',
  fullAddress: 'Rua Senador Nilo Coelho 120, Costa e Silva - Joinville/SC',
  area: 'Área privativa de 39 a 143m²',
  bedrooms: '1 suíte com 1, 2 ou 3 dormitórios',
  buildingsQty: 1,
  floorsQty: 5,
  apartmentsTotal: 17,
  apartmentsPerFloor: 3,
  status: '100% vendido',
  description: `Área privativa de 39 a 122m²\n1 suíte com 1, 2 ou 3 dormitórios`,
  pageTitle: 'INSPIRADO NA PRAÇA SAN CARLO, DE TURIM:',
  pageText: 'Projetada por Carlo di Castellamonte em meados do século 17, a Piazza San Carlo é uma das principais e mais bonitas praças de Turim, na Itália.\n\nSan Carlo é rodeada por edifícios soberbos e possui proporções perfeitas, típicas do estilo barroco. É um lugar para passear e viver momentos inesquecíveis.\n\nE também, o local que inspirou o nosso residencial, Piazza San Carlo.',
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  photos: [
    '/images/piazza-san-carlo/piazza-san-carlo-salao-de-festas.png',
    '/images/piazza-san-carlo/san_carlo_academia.png',
    '/images/piazza-san-carlo/piazza-san-carlo-salao-de-festas.png',
    '/images/piazza-san-carlo/san_carlo_academia.png',
  ],
  differentials: [
    'grill',
    'party-hall',
    'garage',
    'storage',
    'balcony',
  ],
  plans: [
  ],
  detailedStatus: {
    infrastructure: 1,
    foundation: 1,
    masonry: 1,
    installations: 1,
    coating: 1,
  },
  summaryText: 'Torre única | 5 andares | 17 apartamentos',
}

const piazzaSanMarco: IEnterprise = {
  hideSections: ['details','planOptions', 'contact'],
  logo: null,
  thumb: '/images/piazza-san-marco/SAN-MARCO-card-home.png',
  image: '/images/SanMarco_800x800px.png',
  banner: '/images/SanMarco_800x800px.png',
  name: 'Piazza San Marco',
  slug: 'piazza-san-marco',
  district: 'Costa e Silva',
  city: 'Joinville',
  fullAddress: 'Rua Professor Humberto Rohden 241, Costa e Silva - Joinville/SC',
  area: 'Área privativa de 38 a 117m²',
  bedrooms: '1 suíte com 1 ou 2 dormitórios',
  buildingsQty: 1,
  floorsQty: 5,
  apartmentsTotal: 14,
  apartmentsPerFloor: 3,
  status: '100% vendido',
  description: `Área privativa de 38 a 135m²\n1 suíte com 1 ou 2 dormitórios`,
  pageTitle: 'INSPIRADO NA PRAÇA SAN MARCO, DE VENEZA:',
  pageText: 'A praça de San Marco, construída no século IX, está localizada no coração de Veneza, juntamente com os edifícios mais representativos da cidade.\n\nEla não só é uma das mais bonitas da Itália, como também uma das mais bonitas do mundo. Napoleão a definiu como “o salão mais bonito da Europa”.\n\nA Piazza San Marco, foi a grande inspiração para a construção deste residencial.',
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  photos: [
  ],
  differentials: [
    'grill',
    'party-hall',
    'playground',
    'decorated-hall',
    'garage',
  ],
  plans: [
  ],
  detailedStatus: {
    infrastructure: 1,
    foundation: 1,
    masonry: 1,
    installations: 1,
    coating: 1,
  },
  summaryText: 'Torre única | 5 andares | 14 apartamentos',
}

const piazzaSanMarcoPraia: IEnterprise = {
  hideSections: ['menu', 'details','planOptions', 'contact', 'differentials', 'status', 'maps'],
  logo: null,
  thumb: '/images/piazza-san-marco-praia/piazza-san-marco-praia.jpg',
  image: '/images/piazza-san-marco-praia/piazza-san-marco-praia.jpg',
  banner: '/images/piazza-san-marco-praia/piazza-san-marco-praia.jpg',
  name: 'Piazza San Marco Praia',
  slug: 'piazza-san-marco-praia',
  district: 'Costa e Silva',
  city: 'Itajuba',
  fullAddress: 'Rua Professor Humberto Rohden 241, Costa e Silva - Joinville/SC',
  area: 'Área privativa de 150 a 180m²',
  bedrooms: '1 suíte com 1 ou 2 dormitórios',
  buildingsQty: 1,
  floorsQty: 5,
  apartmentsTotal: 14,
  apartmentsPerFloor: 3,
  status: 'Pré Lançamento',
  description: `Área privativa de 150 a 180m²\n1 suíte com 1 ou 2 dormitórios`,
  pageTitle: 'A BELEZA DO MAR VISTA DO SEU LAR!',
  pageText: 'Frente mar - Torre Única\n\nPlantas de 150m² a 180m² privativos\n\n2 ou 3 vagas de garagem',
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  photos: [
  ],
  differentials: [
    'grill',
    'party-hall',
    'playground',
    'decorated-hall',
    'garage',
  ],
  plans: [
  ],
  detailedStatus: {
    infrastructure: 1,
    foundation: 1,
    masonry: 1,
    installations: 1,
    coating: 1,
  },
  summaryText: 'Torre única | 5 andares | 14 apartamentos',
}

const bolshoiBrasil: IEnterprise = {
  hideSections: ['menu', 'details','planOptions', 'contact', 'differentials', 'status', 'maps'],
  logo: null,
  thumb: '/images/bolshoi-brasil/edificiobolshoibrasil_800x800px.png',
  image: '/images/bolshoi-brasil/edificiobolshoibrasil_800x800px.png',
  banner: '/images/bolshoi-brasil/capa_bailarina.png',
  name: 'Bolshoi Brasil',
  slug: 'bolshoi-brasil',
  district: 'América',
  city: 'Joinville',
  fullAddress: 'Rua Pará, 276 - América - Joinville/SC',
  area: 'Área privativa de 178 a 360m²',
  bedrooms: '1 suíte com 1 ou 2 dormitórios',
  buildingsQty: 1,
  floorsQty: 5,
  apartmentsTotal: 14,
  apartmentsPerFloor: 3,
  status: 'Pré Lançamento',
  description: `Plantas de 178m² privativos\nDuas coberturas com 360m² privativos`,
  pageTitle: 'INSPIRADO NA PRAÇA SAN MARCO, DE VENEZA:',
  pageText: 'A praça de San Marco, construída no século IX, está localizada no coração de Veneza, juntamente com os edifícios mais representativos da cidade.\n\nEla não só é uma das mais bonitas da Itália, como também uma das mais bonitas do mundo. Napoleão a definiu como “o salão mais bonito da Europa”.\n\nA Piazza San Marco, foi a grande inspiração para a construção deste residencial.',
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  photos: [
  ],
  differentials: [
    'grill',
    'party-hall',
    'playground',
    'decorated-hall',
    'garage',
  ],
  plans: [
  ],
  detailedStatus: {
    infrastructure: 1,
    foundation: 1,
    masonry: 1,
    installations: 1,
    coating: 1,
  },
  summaryText: 'Torre única | 5 andares | 14 apartamentos',
}

const piazzaDiSpagna: IEnterprise = {
  hideSections: ['menu', 'details','planOptions', 'contact', 'differentials', 'status', 'maps'],
  logo: null,
  thumb: '/images/piazza-di-spagna/piazza-di-spagna.jpg',
  image: '/images/piazza-di-spagna/piazza-di-spagna.jpg',
  banner: '/images/piazza-di-spagna/piazza-di-spagna.jpg',
  name: 'Piazza Di Spagna',
  slug: 'piazza-di-spagna',
  district: 'América',
  city: 'Joinville',
  fullAddress: 'Rua Visconde de Mauá - América - Joinville/SC',
  area: 'Área privativa de 110 a 125m²',
  bedrooms: '1 suíte com 1 ou 2 dormitórios',
  buildingsQty: 1,
  floorsQty: 5,
  apartmentsTotal: 14,
  apartmentsPerFloor: 3,
  status: 'Pré Lançamento',
  description: `Plantas de 110 a 125m²`,
  pageTitle: 'Inspirada na Piazza di Spagna, no coração de Roma',  
  pageText: 'A Praça di Spagna é um famoso símbolo de Roma, foi fundada em 1585 pelo pontífice Sisto V.\n\nEla possui um charme natural e une história e beleza!\n\nAguarde.',
  apartmentsOptions: 'Apartamentos com opções de 3 e 2 suítes',
  photos: [
  ],
  differentials: [
    'grill',
    'party-hall',
    'playground',
    'decorated-hall',
    'garage',
  ],
  plans: [
  ],
  detailedStatus: {
    infrastructure: 1,
    foundation: 1,
    masonry: 1,
    installations: 1,
    coating: 1,
  },
  summaryText: 'Torre única | 5 andares | 14 apartamentos',
}

export const enterprises:IEnterprise [] = [
  piazzaSanPietro,
  piazzaDelMare,
  piazzaDellaLiberta,
  piazzaSanCarlo,
  piazzaSanMarco,
  piazzaSanMarcoPraia,
  bolshoiBrasil,
  piazzaDiSpagna,
]