import { useDispatch, useSelector } from "react-redux";
import { CharacterListStyle } from "./style";
import { characterSelect } from "../../store/modules/characterSelection/actions";
import { showModal } from "../../store/modules/modal/actions";
import { useNavigate } from "react-router-dom";

export const CharactersList = () => {
  const charactersList = useSelector((state: any) => state.characters);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const selectCharacter = (id: number) => {
    dispatch(characterSelect(id));
    navigate("/character");
  };

  return (
    <CharacterListStyle>
      {charactersList.results?.map((character: any) => (
        <li
          onClick={() => {
            selectCharacter(character.id);
            dispatch(showModal(true));
          }}
          key={character.id}
        >
          <div className="characterPhoto">
            <img src={character.image} alt="" />
          </div>
          <p>{character.name}</p>
        </li>
      ))}
    </CharacterListStyle>
  );
};
