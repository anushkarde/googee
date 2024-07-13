import React from 'react';

export const Name = () => {
  return (
    <div className="flex flex-col mt-72 fixed left-1/2">
        <h1 className="text-3xl font-bold text-shadow-lg ">Anushka De</h1>
        <p className="mt-9 text-lg font-light fixed">Computer Science @ 
        <span className="bg-gradient-to-r font-bold from-red-800 to-red-700 text-transparent bg-clip-text">
            {" "}Stanford
        </span>
        </p>
        <div className="mt-8 -ml-2 text-sm text-slate-400 flex justify-center space-x-4">
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
  );
};

export default Name;
