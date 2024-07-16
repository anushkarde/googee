import Hero from './components/Hero';
import React, { useState, useEffect } from 'react';
import './index.css';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="fun min-h-screen">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          {/* <div id="toggle" onClick={toggleDarkMode}>
            <div className="indicator"></div>
          </div> */}
          <Hero />
        </div>
      </div>

    </div>
  )
}

export default App