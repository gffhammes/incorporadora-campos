import { TEnterpriseStatus } from "./strapi";

export interface BannerImage {
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

export type TNewBannerImage = { data: BannerImage } | string;
export type TNewBannerImageArray = { data: BannerImage[] | string[] | null };

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

interface Mosaico {
  id: number;
  imagem1: TNewBannerImage;
  imagem2: TNewBannerImage;
  imagem3: TNewBannerImage;
  imagem4: TNewBannerImage;
  carrossel: TNewBannerImageArray;
}

export interface IEnterpriseAttributes {
  Nome: string;
  Slug: string;
  Area: string;
  Quartos: string;
  QteBlocos: number;
  QteAndares: number;
  QteApartamentos: number;
  Status: TEnterpriseStatus;
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
  Logo: TNewBannerImage | null;
  Banner: TNewBannerImage;
  Thumb: { data: BannerImage };
  Galeria: { data: BannerImage[] | null };
  Endereco: Address;
  Seccoes: Sections;
  StatusDetalhado: DetailedStatus;
  diferenciais: { data: any[] };
  Plantas: any[];
  texoAzulPaginaInterna: TextBlueInnerPage;
  CarrosselPrimeiraSessao: TNewBannerImageArray;
  mosaico: null | Mosaico;
  FotoHome: { data: BannerImage };
  redirectLink?: string;
}

export interface IEnterprise {
  id: number;
  attributes: IEnterpriseAttributes;
}
