import styled from "styled-components";
import virar from "../assets/seta_virar.png";

export default function CardPerguntas({c, setMostrarResposta}){ 
        return(
            <Pergunta>
                <p>{c.question}</p>
                <img onClick={() => setMostrarResposta(true)} src={virar} alt="virar"/>
            </Pergunta>
        );
    }


const Pergunta = styled.li`
    background-color: #feffd3;
    width: 299px;
    height: 131px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-top: 12.5px;
    margin-bottom: 12.5px;
    P{
        font-family: "Recursive", sans-serif;
        font-weight: 700;
        font-size: 16px;
        margin-left: 15px;
        margin-top: 18px;
        color: #333333;
    }
    img{
        width: 30px;
        height: 20px;
        margin-top: 105px;
        margin-right: 15px;
        cursor: pointer;
    }
`;