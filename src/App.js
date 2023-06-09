import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import BlogIndexPage from './pages/BlogIndex';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/blog" element={<BlogIndexPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
