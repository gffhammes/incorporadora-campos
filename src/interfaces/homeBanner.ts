import { IEnterpriseAttributes } from "./strapiLocal";

export interface IHomeBannerItem {
  id: number;
  attributes: {
    Texto: string;
    TextoBotao: string;
    empreendimento: {
      data: { id: number; attributes: Partial<IEnterpriseAttributes> };
    };
  };
}

export type THomeBanners = IHomeBannerItem[];
