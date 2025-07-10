import { BannerImage } from "../interfaces/strapiLocal";

export const getNewImageUrl = (
  strapiImageObject: { data: BannerImage | null } | string | null
): string => {
  if (!strapiImageObject) return "";

  const bannerUrl =
    typeof strapiImageObject === "string"
      ? strapiImageObject
      : strapiImageObject.data?.attributes.url;

  return bannerUrl || "";
};
