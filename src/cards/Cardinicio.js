import styled from "styled-components";

export default function Cardinicio({i, clicado, imagemInicio, setMostrarPergunta, setClicado, corDaPalavra}){ 

    function exibirPergunta(){
        if(clicado) return;
        setMostrarPergunta(true);
        setClicado(true);
    }
   
    return(
        <Inicio $clicado = {clicado} $corDaPalavra = {corDaPalavra}>
            <p>Pergunta {i + 1}</p>
            <img onClick={exibirPergunta} src={imagemInicio} alt="play" />
        </Inicio>
    );
}

const Inicio = styled.li`
    background-color: #ffffff;
    width: 300px;
    height: 65px;
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
        color: ${(props) => (props.$clicado ? props.$corDaPalavra : "")};
        text-decoration: ${(props) => (props.$clicado ? "line-through" : "")};
    }
    img{
        width: ${(props) => (!props.$clicado ? "20px" : "23px")};
        height: 23px;
        margin-right: 15px;
        cursor: pointer;
        cursor: ${(props) => (props.$clicado ? "default" : "pointer")};
    }

`;
