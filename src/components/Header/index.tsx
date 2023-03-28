import { HeaderStyle } from "./style"
import Logo from '../../img/logo.png'
import {FaSearch} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { caracterList } from "../../store/modules/characters/actions.js";
import { useEffect, useState } from "react";
import api from "../../services/api";

export const Header = () => {
    const [valueInput, setValueInput] = useState<string>("")
    const [characters, setCharacters] = useState<object>({})

    const dispatch = useDispatch();

    const page = useSelector((state: any) => state.pagination);

    const getCharacters = async () => {
        const { data: characters } = await api.get("/character/", {
            params: {
                name: valueInput
            }
        })
          setCharacters(characters)
    }

    useEffect(() => {
        dispatch(caracterList(characters));
        console.log(valueInput)
      }, [characters]);
    
    
    return(
        <HeaderStyle>
            <img src={Logo} alt="" />
            <form onSubmit={(e) => {
                e.preventDefault()
                getCharacters()
            }}>
            <input type="text" id="name" onChange={(e) => setValueInput(e.target.value)} placeholder="Pesquise um personagem!"/>
            <button type="submit"><FaSearch/></button>
            </form>
        </HeaderStyle>
    )
}