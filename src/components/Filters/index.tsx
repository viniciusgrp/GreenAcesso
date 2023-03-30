import { FiltersStyle } from "./style";
import { BsFilterRight } from "react-icons/bs";
import { useContext, useState } from "react";
import { CharactersContext } from "../../context/charactersContext";
import { changePage } from "../../store/modules/pagination/actions";
import { useDispatch } from "react-redux";

export const Filters = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const { update, setUpdate, setGender, setStatus, setSpecie } =
    useContext<any>(CharactersContext);
  const [selectGender, setSelectGender] = useState<string>("");
  const [selectStatus, setSelectStatus] = useState<string>("");
  const [selectSpecie, setSelectSpecie] = useState<string>("");

  const sendFilters = () => {
    setGender(selectGender);
      setStatus(selectStatus);
      setSpecie(selectSpecie)
  };

  const dispatch = useDispatch();

  return (
    <FiltersStyle>
      <button
        className="showFiltersMobile"
        onClick={() => setShowFilters(!showFilters)}
      >
        <p>Filtros</p>
        <BsFilterRight />
      </button>
      <div className={`extendsFilter ${showFilters ? "enable" : "hidden"}`}>
        <select
          onChange={(e) => setSelectStatus(e.target.value)}
          name="status"
          id="status"
        >
          <option value="" disabled selected hidden>
            Status
          </option>
          <option value="">Qualquer</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
        <select
          onChange={(e) => setSelectGender(e.target.value)}
          name="gender"
          id="gender"
        >
          <option value="" disabled selected hidden>
            Gênero
          </option>
          <option value="">Qualquer</option>
          <option value="male">Homem</option>
          <option value="female">Mulher</option>
          <option value="genderless">Sem gênero</option>
          <option value="unknown">Desconhecido</option>
              </select>
              <select onChange={(e) => setSelectSpecie(e.target.value)} name="species" id="species">
              <option value="" disabled selected hidden>
            Espécie
          </option>
                  <option value="human">Humano</option>
                  <option value="alien">Alienigena</option>
                  <option value="Poopybutthole">Poopybutthole</option>
                  <option value="Mythological Creature">Criatura Mitológica</option>
                  <option value="Humanoid">Humanóide</option>
                  <option value="Robot">Robô</option>
                  <option value="Cronenberg">Cronenberg</option>
                  <option value="Disease">Doença</option>
                  <option value="unknown">Desconhecida</option>
              </select>
              <button
                  onClick={() => {
                      setSelectGender("")
                      setSelectStatus("")
                      setSelectSpecie("")
                sendFilters();
                dispatch(changePage(1));
                setUpdate(update + 1);
                  }}
              >Limpar Filtros</button>
        <button
          onClick={() => {
            sendFilters();
            dispatch(changePage(1));
            setUpdate(update + 1);
          }}
          className="applyFilters"
        >
          Aplicar Filtros
        </button>
      </div>
    </FiltersStyle>
  );
};
