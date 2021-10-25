import { createContext, ReactNode, useEffect, useState } from "react";

type BreakpointContextType = {
  device: Device | undefined;
}

type Device = 'mobile' | 'tablet' | 'desktop';

type BreakpointProviderProps = {
  children: ReactNode;
};

export const BreakpointContext = createContext( {} as BreakpointContextType);

export function BreakpointContextProvider({children}: BreakpointProviderProps) {
  const [device, setDevice] = useState<Device>(
    deviceCurrent()
  );

  function deviceCurrent(): Device{
    const widthScreen = window.innerWidth;
    if(widthScreen >= 800)  return 'desktop'

    else if (widthScreen < 800 && widthScreen >= 600) return 'tablet'
  
    else return 'mobile';
  }

  useEffect(() => {
    const listener = () => { setDevice(deviceCurrent) };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return (
    <BreakpointContext.Provider value={{device}}>
      {children}
    </BreakpointContext.Provider>
  )
  
}