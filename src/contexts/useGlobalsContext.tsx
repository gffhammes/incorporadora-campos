import { useContext } from "react";
import { GlobalsContext } from "./GlobalsContext";

export const useGlobalsContext = () => useContext(GlobalsContext);
