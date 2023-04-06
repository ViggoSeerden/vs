import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div id="top" className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/vs" element={<Home/>} />
          <Route exact path="/vs/Luuk" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
