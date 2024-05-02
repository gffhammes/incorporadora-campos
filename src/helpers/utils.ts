import { BannerImage } from "../interfaces/strapiLocal";

export const getNewImageUrl = (
  strapiImageObject: { data: BannerImage | null } | string
): string => {
  const bannerUrl =
    typeof strapiImageObject === "string"
      ? strapiImageObject
      : strapiImageObject.data?.attributes.url;

  return bannerUrl || "";
};
