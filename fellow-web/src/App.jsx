import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './Components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Programs from './Components/Programs';
import Events from './Components/Events.jsx'
import Teams from './Components/Team.jsx'
import Join from './Components/Join.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="programs" element={<Programs />} />
      <Route path="event" element={<Events />} />
      <Route path="teams" element={<Teams />} />
      <Route path="join" element={<Join />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
