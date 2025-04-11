import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './Components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars />
      <Routes>
        <Route path="" element="" />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
