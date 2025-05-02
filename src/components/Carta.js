import styled from "styled-components";
import play from "../assets/seta_play.png";
import { useState } from "react";


export default function Carta({i}){
    
    const [mostrarPergunta, setMostrarpergunta] = useState(false);
    function exibirPergunta(){
        console.log("aaaa");
        setMostrarpergunta(true);
    } 

    
    return(
        <Pergunta $mostrarPergunta = {mostrarPergunta}>
            <p>Pergunta {i+1}</p>
            <img onClick={exibirPergunta} src={play} alt="play"/>
        </Pergunta>
    )
}



const Pergunta = styled.div`
    background-color: ${(props) => !props.$mostrarPergunta ? "#FFFFFF" : "#feffd3" };
    width: 300px;
    height: ${(props) => !props.$mostrarPergunta ? "65px" : "131px"};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12.5px;
    margin-bottom: 12.5px;
    P{
        font-family: "Recursive", sans-serif;
        font-weight: 700;
        font-size: 16px;
        margin-left: 15px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 23px;
        margin-right: 15px;
        cursor: pointer;
    }

`