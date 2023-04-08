import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Luuk';

function App() {
  return (
    <Router>
      <div id="top" className="App">
        <Navbar className="sticky"></Navbar>
        <Routes>
          <Route exact path="/vs" element={<Home/>} />
          <Route exact path="/vs/About" element={<About/>} />
          <Route exact path="/vs/Experience" element={<Experience/>} />
          <Route exact path="/vs/Luuk" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
