import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Aeroporto } from './Pages/Aeroporto'
import { Home } from './Pages/Home'
import './App.css'
import { AeroportoVer } from './Pages/AeroportoVer'
import { AeroportoNovo } from './Pages/AeroportoNovo'
import { AeroportoEditar } from './Pages/AeroportoEditar'
import { Passageiro } from './Pages/Passageiro'
import { PassageiroVer } from './Pages/PassageiroVer'
import { PassageiroNovo } from './Pages/PassageiroNovo'
import { PassageiroEditar } from './Pages/PassageiroEditar'

function App() {
  
  return (
    <div>
       <div className='menu'>
        <a className='ahome' href='/home'>Home</a>  
        <a href='/aeroporto'>Aeroportos</a>
        <a href="/passageiro">Passageiros</a>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />

            {/* rotas para aeroporto */}
            <Route path='/aeroporto' element={<Aeroporto />} />
            <Route path='/aeroporto/:id' element={<AeroportoVer />} />
            <Route path='/aeroporto-criar' element={<AeroportoNovo />} />
            <Route path='/aeroporto-alterar/:id' element={<AeroportoEditar />} />

            {/* rotas para passageiros */}
            <Route path='/passageiro' element= {<Passageiro />}/>
            <Route path='/passageiro/:id' element={<PassageiroVer />} />
            <Route path='/passageiro-criar' element={<PassageiroNovo />} />
            <Route path='/passageiro-alterar/:id' element={<PassageiroEditar />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
