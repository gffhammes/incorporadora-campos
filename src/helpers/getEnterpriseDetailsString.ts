import { getEnterpriseBySlug } from "./getEnterpriseBySlug";

export const getEnterpriseDetailsString = (slug: string | string[]) => {
  const enterprise = getEnterpriseBySlug(slug);
  const towerQuantityText = enterprise.buildingsQty === 1 ? 'Torre única' : `${enterprise.buildingsQty} torre`;
  const details = `${towerQuantityText} | ${enterprise.floorsQty} andares | ${enterprise.apartmentsTotal} apartamentos`;
  return details;
}