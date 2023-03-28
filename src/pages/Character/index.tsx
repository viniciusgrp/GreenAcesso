import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { CharacterStyle } from "./style";
import { FaSkullCrossbones } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { format } from "date-fns";
import { AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { showModal } from "../../store/modules/modal/actions";

export const Character = () => {
  const characterId = useSelector((state: any) => state.characterSelection);
  const [favorite, setFavorite] = useState(false);
  const [created, setCreated] = useState(new Date());
  const dispatch = useDispatch()

  useEffect(() => {
    const favorites = localStorage.getItem("@FAVORITES");

    if (favorites) {
      const ids = JSON.parse(favorites);
      const find = ids.find((elem) => elem === characterId);
      if (find) {
        setFavorite(true);
      } else {
        setFavorite(false)
      }
    }
  }, [characterId]);

  const updateFavorites = () => {
    if (!favorite) {
      const favorites = localStorage.getItem("@FAVORITES");
      if (favorites) {
        const ids = JSON.parse(favorites);
        ids.push(characterId);
        localStorage.setItem("@FAVORITES", JSON.stringify(ids));
        setFavorite(true)
      } else {
        localStorage.setItem("@FAVORITES", JSON.stringify([characterId]));
      }
    } else {
      const favorites = localStorage.getItem("@FAVORITES");
      const ids = JSON.parse(favorites);
      const index = ids.findIndex((id) => id == characterId);
      ids.slice(index, 1);
      localStorage.setItem("@FAVORITES", JSON.stringify(ids));
      setFavorite(false);
    }
  };

  const { data: characters, isLoading } = useQuery(
    ["characterSelect", characterId],
    () => {
      return api.get(`/character/${characterId}`).then((res) => res.data);
    },
    {
      initialData: {},
    }
  );

  console.log(characters);

  useEffect(() => {
    if (characters.created) {
      const created = new Date(characters?.created);
      setCreated(created);
    }
  }, [characters]);

  return (
    <CharacterStyle>
      <main>
        <button onClick={() => dispatch(showModal(false))} className="closeModal">X</button>
        <AiFillHeart
          onClick={() => updateFavorites()}
          className={`favIcon ${favorite ? "red" : "white"}`}
        />
        <img src={characters?.image} alt="" />
        <div className="line">
          <p>Nome</p>
          <span>{characters?.name}</span>
        </div>
        <div className="line">
          <p>Estado</p>
          {characters?.status === "dead" ? (
            <span>
              <FaSkullCrossbones />
            </span>
          ) : (
            <span>
              <BsFillPersonCheckFill />
            </span>
          )}
        </div>
        <div className="line">
          <p>Data de criaçao</p>
          <span>{format(created, "dd/MM/yyyy")}</span>
        </div>
        <div className="line">
          <p>Origem</p>
          <span>{characters?.origin?.name}</span>
        </div>
        <div className="line">
          <p>Espécie</p>
          <span>{characters?.species}</span>
        </div>
        <div className="line">
          <p>Localização</p>
          <span>{characters?.location?.name}</span>
        </div>
        <button>Lista de episódios</button>
      </main>
    </CharacterStyle>
  );
};
