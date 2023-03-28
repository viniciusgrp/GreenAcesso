import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { CharactersList } from "../../components/CharactersList";
import { Header } from "../../components/Header";
import { PageSelector } from "../../components/PageSelector";
import api from "../../services/api";
import { HomeStyle } from "./style";
import {caracterList} from "../../store/modules/characters/actions"
import { Character } from "../Character";

export const Home = () => {
  const dispatch = useDispatch();

  const characterId = useSelector((state: any) => state.characterSelection);

  const page = useSelector((state: any) => state.pagination);

  const showModal = useSelector((state: any) => state.modal)

  const pageSelection = useSelector((state: any) => state.pageSelection);

  const { data: characters, isLoading } = useQuery(
    ["characters", page],
    () => {
      return api
        .get("/character", {
          params: { page: page },
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
        {showModal && characterId && <Character/>}
      </main>
    </HomeStyle>
  );
};
