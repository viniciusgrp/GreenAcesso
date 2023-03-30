import { useDispatch, useSelector } from "react-redux";
import { PageSelectorStyle } from "./style";
import { changePage } from "../../store/modules/pagination/actions.js";
import { useEffect, useState } from "react";

export const PageSelector = () => {
  const page = useSelector((state: any) => state.pagination);

  const characters = useSelector((state: any) => state.characters);

  console.log(characters);

  const charactersList = useSelector((state: any) => state.characters);

  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  const dispatch = useDispatch();

  function getPagesEnumeration() {
    if (characters?.info?.pages) {
      if (page <= characters.info?.pages - 2 && page > 3) {
        const start = page - 2;
        const pages = [];
        for (let i = start; i <= page + 2; i++) {
          pages.push(i);
        }
        setPages(pages);
      } else if (page >= characters.info.pages - 2 && characters.info.pages > 5) {
        const pages = [];
        for (
          let i = characters.info.pages - 5;
          i <= characters.info.pages;
          i++
        ) {
          pages.push(i);
        }
        setPages(pages);
      } else {
        setPages([1, 2, 3, 4, 5]);
      }
    }
  }

  useEffect(() => {
    getPagesEnumeration();
  }, [page, characters]);

  return (
    <PageSelectorStyle>
      {page > 1 ? (
        <button onClick={() => dispatch(changePage(page - 1))}>
          Página Anterior
        </button>
      ) : (
        <div></div>
      )}
      <div className="numberPagesdiv">
        {pages.map((pageNumber) => (
          <button
            className={`numberPage ${pageNumber === page && "selected"}`}
            onClick={() => dispatch(changePage(pageNumber))}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      {page < charactersList.info?.pages && (
        <button onClick={() => dispatch(changePage(page + 1))}>
          Próxima Página
        </button>
      )}
    </PageSelectorStyle>
  );
};
