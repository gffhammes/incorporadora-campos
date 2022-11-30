import { createContext } from "react";
import { IData } from "./GlobalsContextProvider";

interface IGlobalsContextProps {
  data: IData;
}

const initialValues: IGlobalsContextProps = {
  data: {
    phone: "",
    address: "",
    email: "",
  },
};

export const GlobalsContext =
  createContext<IGlobalsContextProps>(initialValues);
