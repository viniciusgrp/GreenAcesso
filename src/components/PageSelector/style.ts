import styled from "styled-components";

export const PageSelectorStyle = styled.div`
  margin: 2rem auto;
  width: 80%;
  max-width: 700px;
  gap: 1rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .numberPagesdiv {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .selected {
      background-color: red;
    }
  }

  button {
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    max-width: 50%;
    background-color: #00b5cc;
    cursor: pointer;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    .numberPagesdiv {
      width: 50%;
    }

    button {
      max-width: none;
    }
  }
`;
