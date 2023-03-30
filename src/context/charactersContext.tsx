import { createContext, ReactNode, useEffect, useState } from 'react';

export const CharactersContext = createContext({});

export function CharactersProvider({ children }: any) {
    const [nameInput, setNameInput] = useState<any>("")
    const [update, setUpdate] = useState(0)
  return (
    <CharactersContext.Provider
      value={{nameInput, setNameInput, update, setUpdate}}
    >
      {children}
    </CharactersContext.Provider>
  );
}
