import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const Projects = () => {  
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const menuItems = [
    { 
      id: 'research', 
      title: 'Research', 
      company: 'Stanford School of Medicine', 
      cardTitle: 'Research Assistant',
      description: 'Benchmarked ViTs and foundation models for cell-type annotation in spatial proteomics imaging using TensorFlow and Docker.' 
    },
    { 
      id: 'bridgewater', 
      title: 'Investment Engineer', 
      company: 'Bridgewater', 
      cardTitle: 'Investment Engineer',
      description: 'Built a real-time global trade-flow indicator to drive FX signals and strategy. Developed a systematic 2Y bond strategy across 45 countries.' 
    },
    { 
      id: 'blng', 
      title: 'AI/ML Intern', 
      company: 'BLNG AI', 
      cardTitle: 'AI/ML Intern',
      description: 'Fine-tuned diffusion models using ComfyUI workflows for photorealistic jewelry generation and enhanced data pipelines.' 
    },
    { 
      id: 'amazon', 
      title: 'Datamaker 2.0', 
      company: 'Amazon', 
      cardTitle: 'Datamaker 2.0',
      description: 'Automated Alexa data preparation for ASR model training using Apache Spark and Hudi.' 
    },
    { 
      id: 'biodesign', 
      title: 'Nourish', 
      company: 'Stanford Byers Center for Biodesign', 
      cardTitle: 'Nourish',
      description: 'iOS app for children with eating disorders built on Stanford Spezi and Apple HealthKit architecture.' 
    },
    { 
      id: 'stanford', 
      title: 'CS & Math', 
      company: 'Stanford', 
      cardTitle: 'CS & Math',
      description: 'AI Principles, Algorithm Design, NLP, Systems, Differential Equations & Fourier Methods, Discrete Mathematics.' 
    }
  ];

  return (
    <div className="mt-60 flex pb-96">
      <div className="w-5/6 flex flex-col items-start justify-center px-8">
        <div className="w-full max-w-md space-y-0">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && (
                <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>
              )}
              
              <ScrollAnimation animateIn="fadeIn" delay={index * 100}>
                <div
                  className="relative w-full group cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="absolute -inset-2 dark:bg-gray-800 text-black dark:text-white blur-2xl bg-gradient-to-tr from-slate-300 to-red-100 dark:from-slate-700 dark:to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative py-6 px-4 flex flex-row items-center text-black dark:text-white">
                    <div className='text-lg font-bold'>
                      {item.title}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </React.Fragment>
          ))}
        </div>
      </div>

      {hoveredItem && (
        <div className="fixed right-0 top-0 w-1/2 h-screen flex items-center justify-center px-8 z-40">
            <div className="relative group">
              <div className="absolute inset-0 dark:bg-gray-800 text-black dark:text-white rounded-5xl p-2 blur-lg bg-gradient-to-tr from-slate-300 to-red-100 dark:from-slate-700 dark:to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-white border-2 dark:bg-neutral-900 text-black dark:text-white rounded-5xl p-8 flex flex-col text-left dark:border-black min-h-80">
                <div className='flex items-center justify-center border-red-100 bg-red-50 dark:border-red-950 dark:bg-red-900 border-2 h-8 w-fit rounded-2xl text-xs font-semibold text-red-800 dark:text-gray-50 mb-6 px-4 py-2 whitespace-nowrap'>
                  {menuItems.find(item => item.id === hoveredItem)?.company}
                </div>
                
                <div className='text-3xl font-bold mb-4'>
                  {menuItems.find(item => item.id === hoveredItem)?.cardTitle}
                </div>
                
                <div className='text-sm text-gray-400 dark:text-gray-300 leading-relaxed'>
                  {menuItems.find(item => item.id === hoveredItem)?.description}
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Projects;