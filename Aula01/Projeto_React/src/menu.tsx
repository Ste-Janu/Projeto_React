import { Home } from "./Pages/Home";
import { SaibaMais } from "./Pages/SaibaMais";
import logo from "../src/assets/logo.png";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


interface MenuProps {
  path?: string;
}

export function Menu(props: MenuProps) {

  return (
    <body>
        <Router>
      <header className="topo">
        <a href='/home'>
          <img src={logo} alt="" />
        </a>
        <a href='/saibamais'>Saiba mais</a>
        </header>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/saibamais' element={<SaibaMais />} />
          </Routes>
        </Router>
      
    </body>
  );
}