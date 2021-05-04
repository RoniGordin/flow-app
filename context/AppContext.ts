import { createContext, useContext } from 'react';


export type AppContextType = {
    currentOrder: { id: string, location?: any } | undefined;
    setCurrentOrder: (order: any) => void;
}

export const AppContext = createContext<AppContextType>({ currentOrder: undefined, setCurrentOrder: order => console.warn('no theme provider') });