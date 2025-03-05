import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Company from './components/Pages/Company';
import Newproject from './components/Pages/Newproject';
import Projects from './components/Pages/Projects';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<Newproject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
