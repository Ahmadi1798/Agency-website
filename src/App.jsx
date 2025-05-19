import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
