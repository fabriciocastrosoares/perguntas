import styled from "styled-components";
import play from "../assets/seta_play.png";

import Carta from "./Carta";


export default function Cartas({cards}){
    console.log(cards);
  

    return(
        
        <ContainerPerguntas>
            {cards.map((c, i) => 
                <Carta 
                    key = {i}
                    i = {i}/>)}
        </ContainerPerguntas>
    );
}

const ContainerPerguntas = styled.div`
    width: 300px;
    background-color: FB6B6B;
    overflow-y: auto;
    overflow-x: hidden;

`
