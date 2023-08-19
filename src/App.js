
import './App.css';
import { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollUp from './components/scrollUp/ScrollUp';
import Navbar from './navbar/Navbar';
import Home from './pages/home/Home';
import SecNavbar from './navbar/SecNavbar';
export const ThemeContext = createContext(null);
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <SecNavbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Home />} />
        </Routes>
      </AnimatePresence>
      <ScrollUp />
    </div >
  );
}

export default App;
