import styled from "styled-components";
import logo from "../assets/logo.png";
import Rodape from "../components/Rodape";
import Cartas from "./Cartas";


export default function ContainerLogo({cards}){
    
    return(
        <>
            <ContainerPrincipal>
                <LogoNome>
                    <img src={logo} alt="logo" />
                    <h1>Perguntas</h1>
                </LogoNome>
                <Cartas cards = {cards}/>
            
                <Rodape cards = {cards}/>
            </ContainerPrincipal>
        </>
    );
}

const ContainerPrincipal = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FB6B6B ;
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 1px  solid #DBDBDB;
    position: relative;
    padding-top: 42px;
    padding-bottom: 70px;
`
const LogoNome = styled.div`
    width: 255.61px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: 52px;
        height: 60px;
    }
    h1{
        width: 203.17px;
        height: 44px;
        color: #FFFFFF;
        font-family: "Righteous", sans-serif;
        font-weight: 400;
        font-size: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        }
    
`
