import styled from "styled-components";

export const CharacterStyle = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0px;
  bottom: 0px;
  margin: auto auto;
  color: white;
  max-width: 400px;
  height: fit-content;
  z-index: 100;

  main {
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid lime;
    padding: 10px 3%;
    max-width: 470px;

    .closeModal {
      position: absolute;
      top: 5%;
      left: 10px;
      background-color: red;
      border-radius: 50%;
      border: none;
      height: 50px;
      font-size: 22px;
      cursor: pointer;
    }

    .red {
      fill: red;
    }
    .favIcon {
      position: absolute;
      top: 5%;
      right: 5%;
      font-size: 50px;
      cursor: pointer;
    }

    img {
      max-width: 100%;
      border-radius: 50%;
      border: 5px solid #00b5cc;
      margin-bottom: 1rem;
    }

    .line {
      padding: 0 3%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 1rem;
      background-color: transparent;

      p {
        background-color: transparent;
        width: 100%;
      }

      span {
        background-color: transparent;
        width: 100%;
        text-align: end;
      }
    }
    button {
      background-color: #b2df28;
      color: black;
      padding: 10px 20px;
      border: none;
      margin-bottom: 1rem;
    }
  }
`;
