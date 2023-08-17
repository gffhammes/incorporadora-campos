import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGlobalsContext } from "../contexts/useGlobalsContext";

export const useWhatsappLink = () => {
  const { data: globalData } = useGlobalsContext();
  const { asPath: currentPath } = useRouter();
  const { API_URL } = process.env;
  const [data, setData] = useState<any>(null);
  let text: string;

  const whatsappNumber = `55${globalData.phone
    .replaceAll(" ", "")
    .replaceAll("-", "")}`;

  useEffect(() => {
    const slugArray = currentPath.split("/");

    if (slugArray.length !== 3) {
      setData(null);
      return;
    }

    const enterpriseName = slugArray.pop();

    fetch(`${API_URL}/api/empreendimentos?filters[Slug][$eq]=${enterpriseName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data[0]);
      });
  }, [API_URL, currentPath]);

  if (data) {
    text = `Olá! Vim pelo site e gostaria de mais informações sobre o empreendimento ${data.attributes.Nome}!`;
  } else {
    text = "Olá! Vim pelo site e gostaria de mais informações!";
  }

  const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURI(
    text
  )}&app_absent=0`;
  return url;
};
