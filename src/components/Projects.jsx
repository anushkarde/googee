import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const Projects = () => {  
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  
  const menuItems = [
    { 
      id: 'research', 
      title: 'Research', 
      items: [
        {
          company: 'Stanford School of Medicine',
          cardTitle: 'Research Assistant',
          description: 'Imagine generating virtual tissue scans to simulate clinical trials and explore new cancer treatments. Imagination will take you everywhere.'
        }
      ]
    },
  
    { 
      id: 'work',
      title: 'Work',
      items: [
        {
          company: 'Bridgewater',
          cardTitle: 'Investment Engineer Intern',
          description: 'Traded macro on the currencies desk. Never short the S&P or JGBs (even though everything tells you that you should totally short JGBs).'
        },
        {
          company: 'BLNG AI',
          cardTitle: 'AI/ML Intern',
          description: 'I love jewelry. Thought it would be cool to work somewhere trying to generate it.'
        },
        {
          company: 'Amazon',
          cardTitle: 'Software Development Engineer Intern',
          description: '"Hey Alexa, make it faster to move your audio data."'
        },
        {
          company: 'Supermoon Capital',
          cardTitle: 'Investment Analyst Intern',
          description: 'Bet early on teams trying to fix the one thing humans still can’t optimize: sleep.'
        }
      ]
    },
  
    { 
      id: 'projects', 
      title: 'Projects', 
      items: [
        {
          company: 'Stanford Byers Center for Biodesign',
          cardTitle: 'Nourish',
          description: 'Built an iOS app for children with ARFID.'
        },
        {
          company: 'CS130',
          cardTitle: 'Deep Fake Detector',
          description: 'Developed a multimodal CNN-LSTM model for deep fake detection.'
        },
        {
          company: 'HackHarvard',
          cardTitle: 'CiviClick',
          description: 'Vote for your local representative! Wait—who is your local representative?'
        },
        {
          company: 'PixelHacks III',
          cardTitle: 'Elixir',
          description: 'Helped Alzheimer’s patients communicate better using an iOS app. My first ever hackathon!'
        }
      ]
    },
  
    {
      id: 'stanford',
      title: 'Stanford',
      items: [
        {
          company: 'Systems',
          cardTitle: 'Computer Science, B.S.',
          description: "Classes I have really liked: Parallel Computing (CS 149), Computer Networking (CS 144), Compilers (CS 143), Data Structures & Algorithm Design (CS161), Operating Systems (CS111).",
        },
        {
          company: '/math{}',
          cardTitle: 'Mathematics, Minor',
          description: `Just for fun :).`
        },
        {
          company: 'Artifical Intelligence',
          cardTitle: 'Computer Science',
          description: 'Coterminal degree.'
        }
      ]
    }
  ];
  

  const currentItemId = activeItem || hoveredItem;
  const currentItem = menuItems.find(item => item.id === currentItemId);


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

      {currentItem && (
        <div className="fixed right-0 top-0 w-1/2 h-screen flex items-center z-40 pointer-events-none">
          <div className="relative w-4/5 max-w-3xl pointer-events-auto">

            {/* Glow */}
            <div className="absolute inset-0 dark:bg-gray-800 rounded-5xl p-3 blur-2xl bg-gradient-to-tr from-slate-300 to-red-100 dark:from-slate-700 dark:to-red-900 opacity-100"></div>

            {/* CARD CONTAINER */}
            <div className="relative bg-white dark:bg-neutral-900 text-black dark:text-white rounded-5xl p-10 border dark:border-black flex flex-col text-left shadow-xl space-y-8 overflow-y-auto max-h-[80vh]">
              
              {currentItem.items.map((entry, idx) => (
                <div key={idx} className="flex flex-col">

                  {/* company pill */}
                  <div className="flex items-center justify-center border-red-100 bg-red-50 dark:border-red-950 dark:bg-red-900 border h-8 w-fit rounded-2xl text-xs font-semibold text-red-800 dark:text-gray-50 mb-4 px-4 whitespace-nowrap">
                    {entry.company}
                  </div>

                  {/* Title */}
                  <div className="text-xl font-bold mb-2">
                    {entry.cardTitle}
                  </div>

                  {/* Description */}
                  <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {entry.description}
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
        )}


      
    </div>
  );
}

export default Projects;