import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Aeroporto } from './Pages/Aeroporto'
import { Home } from './Pages/Home'
import './App.css'

function App() {
  
  return (
    <div>
       <div className='menu'>
        <a href='/home'>Home</a>  
        <a href='/aeroporto'>Aeroportos</a>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/aeroporto' element={<Aeroporto />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
