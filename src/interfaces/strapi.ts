export interface IProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface IImageFormats {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: IProviderMetadata;
}

export interface IImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: IImageFormats;
    small: IImageFormats;
    medium: IImageFormats;
    thumbnail: IImageFormats;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: IProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface IStrapiImage {
  attributes: IImageAttributes;
  id: number;
}

export interface IStrapiGlobals {
  data: {
    id: 1;
    attributes: {
      Endereco: string;
      Telefone: string;
      Email: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  meta: any;
}

export interface IStrapiEnterpriseAddress {
  id: number;
  Rua: string;
  Numero: string;
  Bairro: string;
  Cidade: string;
  UF: string;
}

export interface IStrapiEnterprise {
  id: number;
  attributes: {
    Nome: string;
    Slug: string;
    Area: string;
    Quartos: string;
    QteBlocos: number;
    QteAndares: number;
    QteApartamentos: number;
    Status: TEnterpriseStatus;
    TextoPlanta: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Ordem: number;
    Descricao2: string;
    Descricao1: string;
    StatusGeral: number;
    FotoHome: {
      data: IStrapiImage | null;
    };
    Logo: {
      data: IStrapiImage;
    };
    Banner: {
      data: IStrapiImage | null;
    };
    Thumb: {
      data: IStrapiImage;
    };
    Galeria: {
      data: IStrapiImage[];
    };
    Endereco: IStrapiEnterpriseAddress;
    Seccoes: {
      id: number;
      Menu: boolean;
      Detalhes: boolean;
      Plantas: boolean;
      Contato: boolean;
      Diferenciais: boolean;
      Status: boolean;
      Mapa: boolean;
    };
    StatusDetalhado: {
      id: number;
      Infraestrutura: number;
      Fundacao: number;
      Alvenaria: number;
      Instalacoes: number;
      Revestimentos: number;
    };
    diferenciais: {
      data: IStrapiImage[];
    };
    Plantas: {
      id: number;
      Titulo: string;
      Foto: {
        data: IStrapiImage;
      };
    }[];
    texoAzulPaginaInterna: {
      id: number;
      Descricao1: boolean;
      Descricao2: boolean;
      tamanhoFonte: number;
    };
    CarrosselPrimeiraSessao: {
      data: IStrapiImage[];
    };
    mosaico: {
      imagem4: {
        data: IStrapiImage;
      };
      imagem3: {
        data: IStrapiImage;
      };
      imagem2: {
        data: IStrapiImage;
      };
      imagem1: {
        data: IStrapiImage;
      };
      carrossel: {
        data: IStrapiImage[];
      };
    };
  };
}

export type TEnterpriseStatus = "Em obra" | "Pré lançamento" | "Vendido";

export interface IOurHistorySlide {
  id: number;
  ano: string;
  texto: string;
  foto: {
    data: IStrapiImage | null;
  };
}
