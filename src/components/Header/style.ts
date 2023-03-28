import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;

  img {
    max-width: 300px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;

    input {
        padding: 5px 10px;
        height: 100%;
        width: 70%;
    }

    button {
        height: 100%;
        padding: 15px;
        color: white;
        background-color: #00b5cc;
        border: 1px solid black;
    }
  }
`;
