import { createContext, ReactNode, useEffect, useState } from 'react';

export const CharactersContext = createContext({});

export function CharactersProvider({ children }: any) {
    const [nameInput, setNameInput] = useState<any>("")
  const [update, setUpdate] = useState(0)
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")
  const [species, setSpecie] = useState("")
  return (
    <CharactersContext.Provider
      value={{nameInput, setNameInput, update, setUpdate, gender, setGender, status, setStatus, species, setSpecie}}
    >
      {children}
    </CharactersContext.Provider>
  );
}
