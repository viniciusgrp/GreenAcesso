import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import api from "./services/api";
import { changePage } from "./store/modules/pagination/actions.js";
import { caracterList } from "./store/modules/characters/actions.js"
import { CharactersList } from "./components/CharactersList";
import { PageSelector } from "./components/PageSelector";
import { AppStyle } from "./style";

function App() {
  const dispatch = useDispatch();

  const page = useSelector((state: any) => state.pagination);

  const charactersList = useSelector((state: any) => state.characters)

  const { data: characters, isLoading } = useQuery(
    ["characters", page],
    () => {
      return api
        .get("/character", {
          params: { page: page },
        })
        .then((res) => res.data);
    }, {
      initialData: {}
    }
  );

  useEffect(() => {
    console.log(characters);
    dispatch(caracterList(characters))
  }, [characters]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <AppStyle>
      <CharactersList/>
      <PageSelector/>
    </AppStyle>
  );
}

export default App;
