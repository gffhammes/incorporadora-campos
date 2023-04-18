import { PropsWithChildren } from "react";
import { GlobalsContext } from "./GlobalsContext";
import { useFetch } from "../hooks/useFetch";

export interface IData {
  phone: string;
  email: string;
  address: string;
}

export const GlobalsContextProvider = ({
  children,
}: PropsWithChildren<any>) => {
  const { data } = useFetch<any>("/api/global");

  const phone = data?.data.attributes.Telefone ?? "";
  const email = data?.data.attributes.Email ?? "";
  const address = data?.data.attributes.Endereco ?? "";

  const dataToUse = {
    phone,
    email,
    address,
  };

  const value = {
    data: dataToUse,
  };

  return (
    <GlobalsContext.Provider value={value}>{children}</GlobalsContext.Provider>
  );
};
