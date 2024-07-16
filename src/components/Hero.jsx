import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  

  return ( 
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="hover:card-wrapper h-screen w-11/12 rounded-5xl shadow-2xl dark:shadow-gray-600 dark:bg-gray-800">
        <div className="card-content flex flex-col dark:text-white transition-colors duration-200">
          <div id="toggle" onClick={toggleDarkMode}>
            <div className="indicator"></div>
          </div>
          <div className="flex flex-row w-full h-full">

            <div className="flex flex-col p-6">
              
            </div>

            <div className="flex flex-col mt-40 md:mt-72 md:fixed left-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-shadow-lg dark:text-white transition-colors duration-50">Anushka De</h1>
              <p className="md:mt-10 text-sm md:text-md font-light md:fixed dark:text-gray-300">
                Computer Science @ 
                <span className="bg-gradient-to-r font-bold from-red-800 to-red-700 dark:from-red-600 dark:to-red-600 text-transparent bg-clip-text transition-colors duration-200">
                  {" "}Stanford
                </span>
              </p>
              <div className="mt-2 md:mt-8 text-xs lg:text-sm text-gray-400 dark:text-gray-300 flex justify-center" style={{ marginLeft: '-0.75rem' }}>
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


      {/* <div className="card-wrapper h-screen w-11/12 rounded-5xl shadow-lg">
        
      </div> */}
    </div>
  );
};

export default Hero;
