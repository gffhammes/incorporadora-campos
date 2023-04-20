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
