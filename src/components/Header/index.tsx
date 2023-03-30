import { HeaderStyle } from "./style";
import Logo from "../../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../context/charactersContext";
import { Filters } from "../Filters";

export const Header = () => {
  const { setNameInput, update, setUpdate } =
    useContext<any>(CharactersContext);
  const [input, setInput] = useState("");
  return (
    <HeaderStyle>
      <div className="upHeader">
        <img src={Logo} alt="" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNameInput(input);
            setUpdate(update + 1);
          }}
        >
          <input
            type="text"
            id="name"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pesquise um personagem!"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <Filters />
    </HeaderStyle>
  );
};
