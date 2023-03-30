import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { CharactersList } from "../../components/CharactersList";
import { Header } from "../../components/Header";
import { PageSelector } from "../../components/PageSelector";
import api from "../../services/api";
import { HomeStyle } from "./style";
import { caracterList } from "../../store/modules/characters/actions";
import { Character } from "../../components/Character";
import { CharactersContext, ICharactersContext } from "../../context/charactersContext";
import RickMorty from "../../img/rickmorty.png"
import RickMorty2 from "../../img/rickmorty2.png"

export const Home = () => {
  const dispatch = useDispatch();

  const {nameInput: name, update, gender, status, species} = useContext<ICharactersContext>(CharactersContext)

  const characterId = useSelector((state: any) => state.characterSelection);

  const page = useSelector((state: any) => state.pagination);

  const showModal = useSelector((state: any) => state.modal);

  const { data: characters, isLoading } = useQuery(
    ["characters", page, update],
    () => {
      return api
        .get("/character", {
          params: { page: page, name, gender, status, species },
        })
        .then((res) => res.data);
    },
    {
      initialData: {},
    }
  );

  useEffect(() => {
    dispatch(caracterList(characters));
    console.log(characters);
  }, [characters]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <HomeStyle>
      <Header />
      <main>
        <img src={RickMorty} className="backRickMorty" />
        <img src={RickMorty2} className="backRickMorty2" />
        <CharactersList />
        <PageSelector />
        {showModal && characterId && <Character />}
      </main>
    </HomeStyle>
  );
};
