const Projects = () => {    
  return (
    <div className="mt-60 flex flex-col gap-11 justify-center min-h-screen items-center">
        <div className="relative h-44 w-2/3 group">
            <div className="absolute inset-0 dark:bg-gray-800 text-black dark:text-white rounded-5xl p-2 blur-lg bg-gradient-to-tr from-slate-300 to-red-100 dark:from-slate-700 dark:to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Bottom Box */}
            </div>
            <div className="absolute inset-0 bg-white border-2 dark:bg-neutral-900
             text-black dark:text-white rounded-5xl p-2 lex flex-col text-left dark:border-black">
                {/* Top Box */}
                <div className='flex items-center justify-center border-red-100 bg-red-50 dark:border-red-950 dark:bg-red-900 
                border-2 h-4 w-16 rounded-2xl text-xxs font-semibold text-red-800 dark:text-gray-50 mt-6 ml-3 p-2'>
                Amazon
                </div>

                <div className='text-2xl font-bold ml-4 mt-2'>
                Datamaker 2.0
                </div>

                <div className='text-xs ml-4 mt-2 text-md text-gray-400 dark:text-gray-300'>
                Automated Alexa data preparation for ASR model training using Apache Spark and Hudi.
                </div>
            </div>
        </div>


        <div className="relative h-44 w-2/3 group">
            <div className="absolute inset-0 dark:bg-gray-800 text-black dark:text-white rounded-5xl p-2 blur-lg bg-gradient-to-tr from-slate-300 to-red-100 dark:from-slate-700 dark:to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Bottom Box */}
            </div>
            <div className="absolute inset-0 bg-white border-2 dark:bg-neutral-900 text-black dark:text-white 
            rounded-5xl p-2 lex flex-col text-left dark:border-black">
                {/* Top Box */}
                <div className='flex items-center justify-center border-red-100 bg-red-50 dark:border-red-950 dark:bg-red-900 
                border-2 h-4 w-20 rounded-2xl text-xxs font-semibold text-red-800 dark:text-gray-50 mt-6 ml-3 p-2'>
                Healthcare
                </div>

                <div className='text-2xl font-bold ml-4 mt-2'>
                Nourish
                </div>

                <div className='text-xs ml-4 mt-2 text-md text-gray-400 dark:text-gray-300'>
                    iOS app for children with eating disorders built on Stanford Spezi and Apple HealthKit architecture.
                </div>
            </div>
        </div>

        <div className="relative h-44 w-2/3 group">
            <div className="absolute inset-0 dark:bg-gray-800 text-black dark:text-white rounded-5xl p-2 blur-lg bg-gradient-to-tr from-slate-300 to-red-100 dark:from-slate-700 dark:to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Bottom Box */}
            </div>
            <div className="absolute inset-0 bg-white border-2 dark:bg-neutral-900 text-black dark:text-white 
            rounded-5xl p-2 lex flex-col text-left dark:border-black">
                {/* Top Box */}
                <div className='flex items-center justify-center border-red-100 bg-red-50 dark:border-red-950 dark:bg-red-900 
                border-2 h-4 w-16 rounded-2xl text-xxs font-semibold text-red-800 dark:text-gray-50 mt-6 ml-3 p-2'>
                Stanford
                </div>

                <div className='text-2xl font-bold ml-4 mt-2'>
                CS & Math
                </div>

                <div className='text-xs ml-4 mt-2 text-md text-gray-400 dark:text-gray-300'>
                AI Principles, Algorithm Design, NLP, Systems, Differential Equations & Fourier Methods, Discrete Mathematics.
                </div>
            </div>
        </div>

        
    </div>
  );
}

export default Projects;
