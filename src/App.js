import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      <h1 className='text-3xl font-bold'>Hello World!</h1>
    </div>
  );
}

export default App;
