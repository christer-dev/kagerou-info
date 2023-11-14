import React from 'react'
import { useEffect, useState } from 'react';
import 'animate.css'
import kagerou from '../kagerou.png';

export const Hero = () => {
    const [valueIndex, setValueIndex] = useState(0);
    const values = ['Artifacts.', 'Bosses.', 'Characters.', 
                'Consumables.', 'Elements.', 'Nations.', 'Weapons.'];

    useEffect(() => {
        // Function to update the value index after a set time
        const interval = setInterval(() => {
            setValueIndex((prevIndex) => (prevIndex + 1) % values.length);
        }, 2000); // Set time in milliseconds (e.g., 2000ms = 2 seconds)
        
        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
        }, [values.length]);
    

    return (
        <div className='text-white'>
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
            <img src={kagerou} className='w-[300px]' alt='icon' />
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-genshin'>
              Kagerou.Info
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold py-8'>
                Compact information you need on <br/><span className='animate__animated animate__fadeInUp animate__slow animate__infinite	infinite inline-block text-primary'>{values[valueIndex]}</span>
              </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Kagerou is the shorter word of Kageroumaru, a canine bushin found in Inazuma.</p>
            <button className='bg-[#f2f0d8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
          </div>
        </div>
      );
}
