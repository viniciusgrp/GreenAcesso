import styled from "styled-components";

export const HomeStyle = styled.div`
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .backRickMorty {
    width: 500px;
    z-index: -5;
    position: fixed;
    bottom: 0;
    left: 1%;
    display: none;
  }
  .backRickMorty2 {
    width: 500px;
    z-index: -5;
    position: fixed;
    bottom: -10px;
    right: -5%;
    display: none;
  }

  @media screen and (min-width: 850px){
    .backRickMorty {
      display: block;
    }
    .backRickMorty2 {
      display: block;
    }
  }
`;
