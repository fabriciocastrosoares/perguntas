import styled from "styled-components";
import Carta from "./Carta";


export default function Cartas({cards, contConcluidos, setContConcluidos, imagensRodape, setImagensRodape}){ 
    return(
        <ContainerPerguntas>
            {cards.map((c, i) => 
                <Carta 
                    key = {i}
                    i = {i}
                    c ={c}
                    contConcluidos = {contConcluidos}
                    setContConcluidos = {setContConcluidos}
                    imagensRodape = {imagensRodape}
                    setImagensRodape = {setImagensRodape}/>
                    )}
        </ContainerPerguntas>
    );
}

const ContainerPerguntas = styled.ul`
    width: 300px;
    background-color: FB6B6B;
    overflow-y: auto;
    overflow-x: hidden;

`
