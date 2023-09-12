"use client";
import  type { SectionName } from '@/lib/types';
import React, {useState, createContext, useContext} from 'react';




type ActiveSectionContextProviderProps = {
    children : React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick : number;
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>;
}

 export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);


export default function ActiveSectionContextProvider({
    children
}: ActiveSectionContextProviderProps) {
    const[activeSection, setActiveSection] = useState<SectionName>("JPA");
     const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    
     // o setTimeOfLastClick foi necessário pra desabilitar temporariamente o hover, visto que estava dando conflito.
      

  return (<ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>{children}</ActiveSectionContext.Provider>);
}



 export function useActiveSectionContext() {
const context = useContext(ActiveSectionContext);

   if(context===null)
   {
    throw new Error(
        "useActionSectionContext must be used within an ActiveSectionContextProvider"
    );
   }
   return context;
}
