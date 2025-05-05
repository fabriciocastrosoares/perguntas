import styled from "styled-components";

export default function Rodape({cards, contConcluidos}){
    return(
        <QuantidadeAcertos>
            <p>{contConcluidos}/{cards.length} CONCLUÍDOS</p>
        </QuantidadeAcertos>
    );
}

const QuantidadeAcertos = styled.div`
    background-color: #ffffff;
    width: 375px;
    height: 70px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -4px 6px 0px  #0000000D;
    position: absolute;
    bottom: 0;
    p{
        width: 150px;
        height: 22px;
        font-family: "Recursive", sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`