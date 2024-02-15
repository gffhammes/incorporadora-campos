interface BannerImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small?: ImageFormat;
      medium?: ImageFormat;
      large?: ImageFormat;
      thumbnail?: ImageFormat;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

interface Address {
  id: number;
  Rua: string;
  Numero: string;
  Bairro: string;
  Cidade: string;
  UF: string;
}

interface Sections {
  id: number;
  Menu: boolean;
  Detalhes: boolean;
  Plantas: boolean;
  Contato: boolean;
  Diferenciais: boolean;
  Status: boolean;
  Mapa: boolean;
}

interface DetailedStatus {
  id: number;
  ProjetosEAprovacoes: number;
  Fundacao: number;
  Estrutura: number;
  Alvenaria: number;
  Instalacoes: number;
  Acabamentos: number;
}

interface TextBlueInnerPage {
  id: number;
  Descricao1: boolean;
  Descricao2: boolean;
  tamanhoFonte: number;
}

interface CarouselFirstSession {
  data: BannerImage[];
}

export interface IEnterpriseAttributes {
  Nome: string;
  Slug: string;
  Area: string;
  Quartos: string;
  QteBlocos: number;
  QteAndares: number;
  QteApartamentos: number;
  Status: string;
  TextoPlanta: string | null;
  TituloPagina: string;
  TextoPagina: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Ordem: number;
  Descricao2: string;
  Descricao1: string;
  StatusGeral: number;
  Logo: { data: BannerImage | null };
  Banner: { data: BannerImage };
  Thumb: { data: BannerImage };
  Galeria: { data: BannerImage[] | null };
  Endereco: Address;
  Seccoes: Sections;
  StatusDetalhado: DetailedStatus;
  diferenciais: { data: any[] };
  Plantas: any[];
  texoAzulPaginaInterna: TextBlueInnerPage;
  CarrosselPrimeiraSessao: CarouselFirstSession;
  mosaico: null;
}

export interface IEnterprise {
  id: number;
  attributes: IEnterpriseAttributes;
}
