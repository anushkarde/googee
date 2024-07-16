import Hero from './components/Hero';
import aiPic from './assets/ai_pic.svg';


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
    <div className="fun min-h-screen">
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="hover:card-wrapper h-screen w-11/12 rounded-5xl shadow-2xl dark:shadow-gray-600 dark:bg-gray-800">
            <div className="card-content flex flex-col dark:text-white transition-colors duration-200">
              <div id="toggle" onClick={toggleDarkMode}>
                <div className="indicator"></div>
              </div>
              <div className="flex flex-col md:flex-row w-full h-full">
              
              {/* PIC */}
              <div className="flex justify-center md:justify-left">
                <img src={aiPic} alt="AI" className="mt-10 md:mt-36 w-5/6 h-5/6 md:w-4/6 md:h-4/6 object-contain rounded-lg " />
              </div>



                <div className="flex flex-col -mt-5 md:mt-72 md:fixed left-1/2">
                  <h1 className="text-2xl md:text-3xl ml-9 md:ml-0 font-bold text-shadow-lg text-black dark:text-white transition-colors duration-50">Anushka De</h1>
                  <p className="md:mt-10 text-sm md:text-md font-light md:fixed text-gray-500 dark:text-gray-300 ml-9 md:ml-0">
                    Computer Science @
                    <span className="bg-gradient-to-r font-bold from-red-800 to-red-700 dark:from-red-600 dark:to-red-600 text-transparent bg-clip-text transition-colors duration-200">
                      {" "}Stanford
                    </span>
                  </p>
                  <div className="mt-2 md:mt-8 text-xs lg:text-sm text-gray-400 dark:text-gray-300 flex md:justify-center ml-6 md:-ml-3">
                    <a href="https://www.linkedin.com/in/anushkadde/" className="relative transition duration-300 ease-in-out hover:bg-gradient-to-r from-red-800 to-red-700 hover:text-white px-3 py-1 rounded-full" target="_blank">
                      <span className="hover:text-white">LinkedIn</span>
                    </a>
                    <a href="https://github.com/anushkarde" className="relative transition duration-300 ease-in-out hover:bg-gradient-to-r from-red-800 to-red-700 hover:text-white px-3 py-1 rounded-full" target="_blank">
                      <span className="hover:text-white">Github</span>
                    </a>
                    <a href="https://x.com/anushkadde?s=11&t=wpaXb_1GZsuHLUm4dwJJiA" className="relative transition duration-300 ease-in-out hover:bg-gradient-to-r from-red-800 to-red-700 hover:text-white px-3 py-1 rounded-full" target="_blank">
                      <span className="hover:text-white">Twitter</span>
                    </a>
                    <a href="https://open.spotify.com/user/au6jf89mzjijs8fu250b6zuvw?si=5b05bea5e4fa4241" className="relative transition duration-300 ease-in-out hover:bg-gradient-to-r from-red-800 to-red-700 hover:text-white px-3 py-1 rounded-full" target="_blank">
                      <span className="hover:text-white">Spotify</span>
                    </a>
                  </div>
                </div>
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App