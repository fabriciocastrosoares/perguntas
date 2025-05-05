import play from "../assets/seta_play.png";
import { useState } from "react";
import Cardinicio from "../cards/Cardinicio";
import CardPerguntas from "../cards/Cardperguntas";
import Cardrespostas from "../cards/Cardrespostas";


export default function Carta({c, i, contConcluidos, setContConcluidos}){
    
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    const [mostrarResposta, setMostrarResposta] = useState(false);
    const [clicado, setClicado] = useState(false);
    const [imagemInicio, setImagemInicio] = useState(play);

    return(
        <>
            {!mostrarPergunta ? (
               <Cardinicio clicado = {clicado} imagemInicio = {imagemInicio}
                            setMostrarPergunta = {setMostrarPergunta}
                            setClicado = {setClicado} i = {i}/>)
                    : 
                        (!mostrarResposta ?
                            (<CardPerguntas c = {c} setMostrarPergunta = {setMostrarPergunta} setMostrarResposta = {setMostrarResposta}/>)
                                :
                                    (<Cardrespostas c ={c} contConcluidos = {contConcluidos} setContConcluidos = {setContConcluidos} 
                                                    setMostrarPergunta = {setMostrarPergunta}setImagemInicio = {setImagemInicio}/>)
            )}
        </>
    );
}
