
import ContainerLogo from "./components/ContainerLogo";
import cards from "./cards";
import BoasVindas from "./components/BoasVindas";
import { useState } from "react";

export default function App() {
  const [entrar, setEntrar] = useState(false);
  return(
  <>
    {!entrar 
      ?
        (<BoasVindas setEntrar = {setEntrar}/>)
          :
              (<ContainerLogo cards = {cards}/>)}
  </>  
  );
}


