import { createStore, combineReducers } from "redux";

// importando o reducer
import paginationReducer from "./modules/pagination/reducer";
import characterReducer from "./modules/characters/reducer"

// combinando os reducers da aplicação, nesse exemplo temos apenas um
const reducers = combineReducers({ pagination: paginationReducer, characters: characterReducer });

// passando os reducers combinados para a store
const store = createStore(reducers);

export default store;
      