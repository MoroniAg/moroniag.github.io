import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/Template/Template';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Technologies from './components/Technologies/Technologies';
import ContactMe from './components/ContactMe/ContactMe';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
