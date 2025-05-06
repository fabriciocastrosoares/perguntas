import play from "../assets/seta_play.png";
import { useState } from "react";
import Cardinicio from "../cards/Cardinicio";
import CardPerguntas from "../cards/Cardperguntas";
import Cardrespostas from "../cards/Cardrespostas";


export default function Carta({c, i, contConcluidos, setContConcluidos, imagensRodape, setImagensRodape}){
    
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    const [mostrarResposta, setMostrarResposta] = useState(false);
    const [clicado, setClicado] = useState(false);
    const [imagemInicio, setImagemInicio] = useState(play);
    const [corDaPalavra, setCorDaPalavra] = useState("#333333");

    return(
        <>
            {!mostrarPergunta ? (
               <Cardinicio clicado = {clicado} imagemInicio = {imagemInicio}
                            setMostrarPergunta = {setMostrarPergunta}
                            setClicado = {setClicado} i = {i}
                            corDaPalavra = {corDaPalavra}/>)
                    : 
                        (!mostrarResposta ?
                            (<CardPerguntas c = {c} setMostrarResposta = {setMostrarResposta}/>)
                                :
                                    (<Cardrespostas c ={c} contConcluidos = {contConcluidos} setContConcluidos = {setContConcluidos} 
                                                    setMostrarPergunta = {setMostrarPergunta}setImagemInicio = {setImagemInicio}
                                                    setCorDaPalavra = {setCorDaPalavra} setImagensRodape = {setImagensRodape}
                                                    imagensRodape = {imagensRodape}/>)
            )}
        </>
    );
}
