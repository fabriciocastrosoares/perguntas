import styled from "styled-components";
import certo from "../assets/icone_certo.png";
import errado from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";

export default function Cardrespostas({c, contConcluidos, setContConcluidos, setMostrarPergunta, setImagemInicio, setCorDaPalavra, imagensRodape, setImagensRodape}){

    function responder(event){
        let novoCont = contConcluidos + 1;
        setMostrarPergunta(false);
        setContConcluidos(novoCont);

        const textoBotao = event.target.textContent;
        
        if(textoBotao === "Zap!"){
            setImagemInicio(certo);
            setCorDaPalavra("#2FBE34");
            setImagensRodape([... imagensRodape, certo]);
        }else if(textoBotao === "Quase não lembrei"){
            setImagemInicio(quase);
            setCorDaPalavra("#FF922E");
            setImagensRodape([...imagensRodape, quase]);
        }else{
            setImagemInicio(errado);
            setCorDaPalavra("#FF3030");
            setImagensRodape([...imagensRodape, errado]);
        }
    }

    return(
        <Resposta> 
            <p>{c.answer}</p>
            <Botoes>
                <Vermelho onClick={responder}>Não lembrei</Vermelho>
                <Laranja onClick={responder}>Quase não lembrei</Laranja>
                <Verde onClick={responder}>Zap!</Verde>
            </Botoes>
        </Resposta>
    );
}


const Resposta = styled.li`
    background-color: #feffd3;
    width: 299px;
    height: 131px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 12.5px;
    margin-bottom: 12.5px;
    P{
        font-family: "Recursive", sans-serif;
        font-weight: 700;
        font-size: 16px;
        margin-top: 18px;
        margin-left: 15px;
        color: #333333;
    }
`;
const Botoes = styled.div`
    font-family: "Recursive", sans-serif;
    background-color: #feffd3;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5px;
`;
const Vermelho =styled.button`
    background-color: #FF3030;
    color: white;
    width: 85.17px;
    height: 37.17px;
    border-radius:5px;
    border: none;
    cursor: pointer;
`;
const Laranja =styled.button`
    background-color: #FF922E;
    color: white;
    width: 85.17px;
    height: 37.17px;
    border-radius:5px;
    border: none;
    cursor: pointer;
`;
const Verde =styled.button`
    background-color: #2FBE34;
    color: white;
    width: 85.17px;
    height: 37.17px;
    border-radius:5px;
    border: none;
    cursor: pointer;
`;
