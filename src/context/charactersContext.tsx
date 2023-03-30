import { createContext, Dispatch, SetStateAction, useState } from 'react';


export interface ICharactersContext {
  nameInput: string;
  setNameInput: Dispatch<SetStateAction<string>>;
  update: number;
  setUpdate: Dispatch<SetStateAction<number>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  species: string;
  setSpecie: Dispatch<SetStateAction<string>>
}

export const CharactersContext = createContext<ICharactersContext>({} as ICharactersContext);

export function CharactersProvider({ children }: any) {
    const [nameInput, setNameInput] = useState<string>("")
  const [update, setUpdate] = useState<number>(0)
  const [gender, setGender] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const [species, setSpecie] = useState<string>("")
  return (
    <CharactersContext.Provider
      value={{nameInput, setNameInput, update, setUpdate, gender, setGender, status, setStatus, species, setSpecie}}
    >
      {children}
    </CharactersContext.Provider>
  );
}
