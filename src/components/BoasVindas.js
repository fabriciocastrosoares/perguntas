import styled from "styled-components";
import logo from "../assets/logo.png";


export default function BoasVindas({setEntrar}){

    return(
        <TelaInicial>
            <img src = {logo} alt = "logo" />
            <h1>Perguntas</h1>
            <BotaoEntrar onClick={() => setEntrar(true)}>Iniciar Perguntas!</BotaoEntrar>
        </TelaInicial>
    );
}

const TelaInicial = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 136px;
        height: 161px;
        margin-top: 148px;
    }
    h1{
        width: 257px;
        height: 59px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        font-family: "Righteous", sans-serif;
        font-weight: 400;
        font-size: 36px;
        margin-top: 13px;
    }
`;
const BotaoEntrar = styled.button`
    background-color: #ffffff;
    width: 246px;
    height: 54px;
    color: #D70900;
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    border-radius: 5px;
    border: 1px solid #D70900;
    
    margin-top: 30px;
    cursor: pointer;
    &:hover{
        background-color:rgb(253, 171, 166);
        box-shadow: 0 4px 4px 0 #0000000D;
    }
`;