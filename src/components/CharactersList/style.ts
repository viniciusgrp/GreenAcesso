import styled from "styled-components";

export const CharacterListStyle = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    li {
        width: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 10px 0;
        background-color: rgba(255,255,255,0.2);
        border-radius: 12px;
        color: #00B5CC;
        height: auto;

        .characterPhoto {
            display: flex;
            justify-content: center;
            padding: 3% 5%;
            background-color: transparent;

            img {
                max-width: 100%;
                border-radius: 50%;
                border: 5px solid #B2DF28;
            }
        }

        p {
            font-size: 30px;
            font-weight: 600;
            background-color: transparent;
            min-height: 3rem;
        }
    }

    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        li {
            width: 40%;
        }
    }

    @media screen and (min-width: 1100px){
        li {
            max-width: 350px;
        }
    }
`