import headshot from '../assets/headshot_avatar.png';
import { Linkedin, Code, ListMusic } from 'lucide-react';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center mx-auto max-w-4xl p-5'>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-20">
        <div className="flex flex-col items-center basis-">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            Anushka De
          </h1>
          <p className="mt-10 text-md text-center text-neutral-500">
            I'm studying CS at Stanford, working as a software development engineer at Amazon, and passionate about Drake.
          </p>
        </div>
      </div>


      <div className="flex flex-row justify-center items-center mt-10 space-x-4">
        <a href="https://www.linkedin.com/in/anushkadde/" className="py-3 px-4 text-center" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/anushkarde" className="py-3 px-4 text-center" target="_blank">
          <Code />
        </a>
        <a href="https://open.spotify.com/user/au6jf89mzjijs8fu250b6zuvw?si=5b05bea5e4fa4241" className="bg-gradient-to-r from-red-500 to-red-800 text-white py-3 px-4 rounded-md text-center" target="_blank">
          <ListMusic />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
