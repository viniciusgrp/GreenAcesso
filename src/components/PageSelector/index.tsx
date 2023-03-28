import { useDispatch, useSelector } from "react-redux";
import { PageSelectorStyle } from "./style"
import { changePage } from "../../store/modules/pagination/actions.js";

export const PageSelector = () => {
    const page = useSelector((state: any) => state.pagination);

    const charactersList = useSelector((state: any) => state.characters)

    const dispatch = useDispatch();
    
    return (
        <PageSelectorStyle>
            {page > 1 ? (
        <button onClick={() => dispatch(changePage(page - 1))}>
          Página Anterior
        </button>
      ) : <div></div>}
      {page < charactersList.info?.pages && (
        <button onClick={() => dispatch(changePage(page + 1))}>
          Próxima Página
        </button>
      )}
        </PageSelectorStyle>
    )
}