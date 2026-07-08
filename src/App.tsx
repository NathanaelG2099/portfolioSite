import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./components/global.css";
import './App.css'
import Topbar from './components/Topbar'
import Home from './components/Home'
import Apps from './components/Apps'
import Models from './components/Models';
import Websites from './components/Websites';


function App() {

  return (
    <Router>
        <Topbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apps" element={<Apps />} />
          <Route path="/Models" element={<Models />} />
          <Route path="/Websites" element={<Websites />} />
        </Routes>

      


      
    </Router>
  )
}

export default App
