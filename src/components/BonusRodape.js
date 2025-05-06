import styled from "styled-components";
import party from "../assets/party.png";

export default function BonusRodape(){
    return(
        <>
            <Parabens><img src = {party}/><p>Parabéns!</p></Parabens>
            <TextoBaixo><p>Você não esqueceu de nenhum flashcard!</p></TextoBaixo>
        </>
    );
}

const Parabens = styled.div`
    width: 116px;
    height: auto;
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextoBaixo = styled.div`
    height: 44px;

    p{
        height: 44px;
        width: 222px;
        text-align: center;  
    }

`;