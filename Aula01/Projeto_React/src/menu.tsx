import { useState } from "react";
import { Home } from "./Pages/Home";
import { SaibaMais } from "./Pages/SaibaMais";
import logo from "../src/assets/logo.png";

export function Menu() {
    const [opcao, setOpcao] = useState<number>(1);
    
    const pageMenu = () => {
        setOpcao(1);
    };
    const pageSaibamais = () => {
        setOpcao(2);
    };
    
    const verificaQualPagina = () => {
        if (opcao == 1) {
            return <Home />;
        } else if (opcao == 2) {
            return <SaibaMais />;
        } 
    };
    return (
      <body>
        <header className="topo">
          <a onClick={pageMenu}>
            <img src={logo} alt="" />
          </a>
          <a onClick={pageSaibamais}>Saiba mais</a>
        </header>
        {verificaQualPagina()}
      </body>
    );
}