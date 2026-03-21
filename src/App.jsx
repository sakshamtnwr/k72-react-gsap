
import {Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Projects from './pages/Projects';
import Navbar from '../src/components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import Contact from './pages/Contact'



const App = () => {

useEffect(() => {
 
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

}, [])
  return (
    <div>
      <Navbar />
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/agence' element={<Agence  />} />
        <Route path='/projects' element={<Projects  />} />
        <Route path='/contact' element={<Contact  />} />
      </Routes>
    </div>
  );
};

export default App;