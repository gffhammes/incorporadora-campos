import { IEnterprise, IEnterpriseAttributes } from "./strapiLocal";

export interface IHomeBannerItem {
  id: number;
  attributes: {
    Texto: string;
    TextoBotao: string;
    empreendimento: IEnterprise;
  };
}

export type THomeBanners = IHomeBannerItem[];
