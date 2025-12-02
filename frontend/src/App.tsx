
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateMatch from './pages/CreateMatch'
import Fixture from './pages/Fixtures'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CreateMatch />}></Route>
        <Route path='/fixtures' element={<Fixture />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
