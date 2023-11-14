import { useState, useEffect } from "react";
import React from 'react';

const API_URL = 'https://genshin.jmp.blue';

export const Nations = () => {
const [nations, setNations] = useState([]);

const getNations = async () => {
  try {
    const response = await fetch(`${API_URL}/nations/`);
    const nationsData = await response.json();
    console.log(nationsData);

    const nationDetailsData = await Promise.all(
      nationsData.map(async (nation) => {
        const nationDetails = await getNationDetails(nation);
        return nationDetails;
      })
    );

    setNations(nationDetailsData);

  } 
  catch (error) {
    console.log("Error fetching Characters:", error);

  }
};

const getNationDetails = async (nations) => {
  const detailsResponse = await fetch(`${API_URL}/nations/${nations}`);
  const detailsData = await detailsResponse.json();

  const imageResponse = await fetch(`${API_URL}/nations/${nations}/icon`);

  let imageData; // Define the imageData variable

  if (imageResponse.status === 404) {
    // If the image is not found, use the alternative URL
    const alternativeImageResponse = "https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png";

    if (!alternativeImageResponse.ok) {
      console.log("Error")
    }

    imageData = await alternativeImageResponse; // Update the imageData for the alternative image
  } else {
    imageData = await imageResponse.url; // Use the regular imageData
  }
  console.log(imageData);

  return { ...detailsData, icon: imageData };
};

useEffect(() => {
  getNations('');
}, []);

    return (
        <div className='w-full py-[3rem] px-4 bg-white'>
            <h1 className='py-5 md:text-5xl sm:text-6xl text-4xl font-bold md:py-10 font-genshin text-center'>Nations</h1>
            <div className='max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8'>
                {nations.length > 0 ? (
                nations.map((nation) => (
                <div key={nation.name} className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={nation.icon} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>{nation.name}</h2>

                    <div className='flex justify-center items-center'>
                        <p className='mr-auto'>Element:</p>
                        <p
                        className={
                            nation.element === 'Anemo'
                            ? 'text-2xl font-bold text-green-300'
                            : nation.element === 'Cryo'
                            ? 'text-2xl font-bold text-blue-400'
                            : nation.element === 'Dendro'
                            ? 'text-2xl font-bold text-green-600'
                            : nation.element === 'Electro'
                            ? 'text-2xl font-bold text-violet-500'
                            : nation.element === 'Geo'
                            ? 'text-2xl font-bold text-yellow-500'
                            : nation.element === 'Hydro'
                            ? 'text-2xl font-bold text-blue-700'
                            : nation.element === 'Pyro'
                            ? 'text-2xl font-bold text-red-600'
                            : ''
                        }
                        >
                        {nation.element}
                        </p>
                    </div>
                    
                    <div className='flex justify-center items-center'>
                        <p className='mr-auto'>Archon:</p>
                        <p className='py-2 border-b'>{nation.archon}</p>
                    </div>
                    
                    <div className='flex justify-center items-center'>
                        <p className='mr-auto'>Government:</p>
                        <p className='py-2 border-b'>{nation.controllingEntity}</p>
                    </div>

                </div>
                ))
            ) : (
                <div className='empty'>
                <h2>No Nations Found!</h2>
                </div>
            )}
            </div>
        </div>


      );
}
