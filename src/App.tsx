import {
    RouterProvider,
  } from "react-router-dom";
import { CharactersProvider } from "./context/charactersContext";
import { Router } from "./router";

function App() {
  return (
    <CharactersProvider>
        <RouterProvider router={Router}/>
    </CharactersProvider>
  );
}

export default App;
