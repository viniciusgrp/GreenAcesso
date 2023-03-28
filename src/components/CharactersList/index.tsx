import { useSelector } from "react-redux"
import { CharacterListStyle } from "./style"

export const CharactersList = () => {
    const charactersList = useSelector((state: any) => state.characters)
    return (
        <CharacterListStyle>      
        {charactersList.results?.map((character) => (
          <li>
            <div className="characterPhoto">
              <img src={character.image} alt="" />
            </div>
            <p>{character.name}</p>
          </li>
        ))}
        </CharacterListStyle>
    )
}