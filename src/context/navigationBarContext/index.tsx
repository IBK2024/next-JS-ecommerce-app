'use client';
import data from '@/data';
import {type Dispatch, type ReactNode, type SetStateAction, createContext, useState} from 'react';

// !Navigation bar context value type
interface NavigationBarContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  navigationBarLinks: {
    title: string;
    href: string;
  }[];
}

// !Navigation bar context
export const NavigationBarContext = createContext<NavigationBarContextValue>({
  isOpen: false,
  setIsOpen: () => {
    // !Default value
  },
  navigationBarLinks: [],
});

// !Navigation bar context provider props
interface NavigationBarContextProviderProps {
  children: ReactNode;
}

// !Navigation bar context provider
export default function NavigationBarContextProvider({children}: NavigationBarContextProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigationBarLinks = data.navbarLinks;

  return <NavigationBarContext.Provider value={{isOpen, setIsOpen, navigationBarLinks}}>{children}</NavigationBarContext.Provider>;
}
