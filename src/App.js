import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/vs" element={<Home/>} />
          <Route exact path="/vs/About" element={<About/>} />
          <Route exact path="/vs/Skills" element={<Skills/>} />
          <Route exact path="/vs/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
