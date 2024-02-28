import { useRouter } from "next/router";
import { useMemo } from "react";
import { useGlobalsContext } from "../contexts/useGlobalsContext";
import { enterprises } from "../data/enterprises";

export const useWhatsappLink = () => {
  const { data: globalData } = useGlobalsContext();
  const { asPath: currentPath } = useRouter();
  let text: string;

  const whatsappNumber = `55${globalData.phone
    .replaceAll(" ", "")
    .replaceAll("-", "")}`;

  const enterpriseName = useMemo(() => {
    const slugArray = currentPath.split("/");

    if (slugArray.length !== 3) {
      return;
    }

    const enterpriseSlug = slugArray.pop();

    const enterpriseName = enterprises.find(
      (enterprise) => enterprise.attributes.Slug === enterpriseSlug
    )?.attributes.Nome;

    return enterpriseName;
  }, [currentPath]);

  if (enterpriseName) {
    text = `Olá! Vim pelo site e gostaria de mais informações sobre o empreendimento ${enterpriseName}!`;
  } else {
    text = "Olá! Vim pelo site e gostaria de mais informações!";
  }

  const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURI(
    text
  )}&app_absent=0`;
  return url;
};
