import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Aeroporto } from './Pages/Aeroporto'
import { Home } from './Pages/Home'
import './App.css'
import { AeroportoVer } from './Pages/AeroportoVer'

function App() {
  
  return (
    <div>
       <div className='menu'>
        <a className='ahome' href='/home'>Home</a>  
        <a href='/aeroporto'>Aeroportos</a>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/aeroporto' element={<Aeroporto />} />
            <Route path='/aeroporto/:id' element={<AeroportoVer />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
