import styled from "styled-components";
import party from "../assets/party.png";

export default function BonusRodapeP({cards, contConcluidos, imagensRodape}){
    return(
        <QuantidadeAcertos>
            <Parabens><img src = {party}/><h2>Parabéns!</h2></Parabens>
            <TextoBaixo><h3>Você não esqueceu de nenhum flashcard!</h3></TextoBaixo>
            <p>{contConcluidos}/{cards.length} CONCLUÍDOS</p>
            <ImagensAcerto>{imagensRodape.map((imagens, index) => <img key={index} src = {imagens} alt = "imagens"/>)}</ImagensAcerto>
        </QuantidadeAcertos>
    );
}

const QuantidadeAcertos = styled.div`
    background-color: #ffffff;
    width: 375px;
    height: 171px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
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
        margin-top: 9px;
    }
`;
const ImagensAcerto = styled.div`
    display: flex;
    img{
        width: 23px;
        height: 23px;
        margin-left: 5px;
        margin-bottom: 10px;
    }
`;


const Parabens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    h2{
        font-family: "Recursive", sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.2;
        color: #333333;
    }
    img{
        width: 23px;
        height: 23px;
        margin-right: 12px;
    }
`;
const TextoBaixo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h3{
        width: 222px;
        min-height: 44px;
        font-family: "Recursive", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.2;
        color: #333333;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
    }

`;