import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './Components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
