import Hero from './components/Hero';
import React, { useState, useEffect } from 'react';
import './index.css';


const App = () => {

  return (
    <div className="fun min-h-screen">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
        </div>

    </div>
  )
}

export default App