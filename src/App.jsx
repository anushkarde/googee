import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './index.css';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HomePage />
        <Skills />
        <Workflow />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}

export default App