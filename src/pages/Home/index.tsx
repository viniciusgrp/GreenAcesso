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
import { CharactersContext } from "../../context/charactersContext";
import { Filters } from "../../components/Filters";

export const Home = () => {
  const dispatch = useDispatch();

  const {nameInput: name, update, gender, status, species} = useContext<any>(CharactersContext)

  const characterId = useSelector((state: any) => state.characterSelection);

  const page = useSelector((state: any) => state.pagination);

  const showModal = useSelector((state: any) => state.modal);

  const params = {page}

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
        
        <CharactersList />
        <PageSelector />
        {showModal && characterId && <Character />}
      </main>
    </HomeStyle>
  );
};
