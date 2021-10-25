import { useContext } from "react";
import { BreakpointContext } from "../contexts/BreakpointContext";


export const useBreakpoint = () => {
  return useContext(BreakpointContext);
};