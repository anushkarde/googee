import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="hover:card-wrapper h-screen w-5/6 lg:w-10/12 rounded-5xl shadow-lg">
        <div className="card-content relative bg-white flex flex-col">
          <div className="flex flex-row w-full h-full">

            <div className="flex flex-col p-6">
              <div class="grid grid-cols-4 gap-4">
                <div>01</div>
                <div>09</div>
              </div>
            </div>

            <div className="flex flex-col mt-72 fixed left-1/2">
              <h1 className="text-3xl font-bold text-shadow-lg">Anushka De</h1>
              <p className="mt-9 text-md font-light fixed">
                Computer Science @ 
                <span className="bg-gradient-to-r font-bold from-red-800 to-red-700 text-transparent bg-clip-text">
                  {" "}Stanford
                </span>
              </p>
              <div className="mt-8 text-sm text-slate-400 flex justify-center" style={{ marginLeft: '-0.75rem' }}>
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
  );
};

export default Hero;
