
import './App.css';
import { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollUp from './components/scrollUp/ScrollUp';
export const ThemeContext = createContext(null);
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          
        </Routes>
      </AnimatePresence>
      <ScrollUp />
    </div >
  );
}

export default App;
