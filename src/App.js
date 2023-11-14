import { useState, useEffect } from 'react';
import './App.css';
import './Genshin Impact Font.ttf';
import { Hero } from './components/Hero';
import { Nations } from './components/Nations';
import { Navbar } from './components/Navbar';

const API_URL = 'https://genshin.jmp.blue';


function App() {

  return (
    <div className='bg-[#1e1f21]'>
      <Navbar />
      <Hero />
      <Nations />
    </div>
  );
}

export default App;
