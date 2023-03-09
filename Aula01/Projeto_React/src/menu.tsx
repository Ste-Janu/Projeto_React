import { useState } from "react";
import { Home } from "./Pages/Home";
import { SaibaMais } from "./Pages/SaibaMais";
import  logo  from "../src/assets/logo.png"

export function Menu() {
    const [opcao, setOpcao] = useState<number>(1);
    
    
    
    const verificaQualPagina = () => {
      
      return opcao == 1 ?
        <Home setOpcao={setOpcao}/>:
        <SaibaMais /> 
    };
    return (
      <body>
        <header className="topo">
          <a onClick={()=>setOpcao(1)}>
            <img src={logo} alt="" />
          </a>
          <a onClick={()=>setOpcao(2)}>Saiba mais</a>
        </header>
        {verificaQualPagina()}
      </body>
    );
}