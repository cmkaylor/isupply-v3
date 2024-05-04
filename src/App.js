import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContent from './components/HeaderContent';
import FooterContent from './components/FooterContent';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
          <HeaderContent/>
          <Routes>
              <Route path="Home" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="*" element={<Home />} />
          </Routes>
          <FooterContent/>
      </Router>
    </>
  );
}

export default App;
