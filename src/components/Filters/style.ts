import styled from "styled-components";

export const FiltersStyle = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  button {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding: 10px 20px;
    border-radius: 7px;
    p {
      background-color: transparent;
    }
  }

  .extendsFilter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  .hidden {
    display: none;
  }

  select {
    cursor: pointer;
    width: 50%;
    padding: 5px;
  }

  button {
    cursor: pointer;
  }

  .applyFilters {
    background-color: skyblue;
    text-align: center;
    display: block;
  }

  @media screen and (min-width: 768px){
    .showFiltersMobile {
        display: none;
    }
    .hidden {
        display: flex;
    }

    .extendsFilter {
        margin-bottom: 2rem;
        padding: 0 5%;
        flex-direction: row;
        height: 35px;
        justify-content: flex-start;

        select {
            height: 100%;
            width: 25%;
            max-width: 250px;
        }
        button {
            max-width: 250px;
            width: 25%;
            margin: 0;
        }
    }
  }
`;
