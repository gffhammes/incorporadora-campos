import {
  PropsWithChildren,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { GlobalsContext } from "./GlobalsContext";
import { IStrapiGlobals } from "../interfaces/strapi";

export interface IData {
  phone: string;
  email: string;
  address: string;
}

export const GlobalsContextProvider = ({
  children,
}: PropsWithChildren<any>) => {
  const [data, setData] = useState<IStrapiGlobals | null>(null);
  const running = useRef(false);

  const getData = useCallback(async () => {
    const { API_URL } = process.env;

    if (running.current || !!data) return;
    running.current = true;

    try {
      const res = await fetch(`${API_URL}/api/global`);

      const data = await res.json();

      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      running.current = false;
    }
  }, [data]);

  useEffect(() => {
    getData();
  }, [getData]);

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
