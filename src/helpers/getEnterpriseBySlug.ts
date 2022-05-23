import { enterprises } from "../assets/enterprises";

export const getEnterpriseBySlug = (slug: string | string[]) => {
  return enterprises.find(enterprise => enterprise.slug === slug);
}