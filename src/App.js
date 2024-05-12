import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContent from './components/HeaderContent';
import FooterContent from './components/FooterContent';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Router>
          <HeaderContent/>
          <Routes>
              <Route path="Home" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Services" element={<Services />} />
              <Route path="*" element={<Home />} />
          </Routes>
          <FooterContent/>
      </Router>
    </>
  );
}

export default App;
