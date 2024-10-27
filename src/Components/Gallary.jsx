


import React from 'react';
import food1 from '../assets/food-1.jpg'
import food2 from '../assets/food-2.jpg'
import food3 from '../assets/food-3.jpg'
import food4 from '../assets/food-4.jpg'
import food5 from '../assets/food-5.jpg'
import food6 from '../assets/food-6.jpg'
import food7 from '../assets/food-7.jpg'
import food8 from '../assets/food-8.jpg'
import food9 from '../assets/food-9.jpg'
import food10 from '../assets/food-10.jpg'
import food11 from '../assets/food-11.jpg'
import food12 from '../assets/food-12.jpg'
import food13 from '../assets/food-13.jpg'
import food14 from '../assets/food-14.jpg'
import food15 from '../assets/food-15.jpg'
import food16 from '../assets/food-16.jpg'
import food17 from '../assets/food-17.jpg'
import food18 from '../assets/food-18.jpg'
import food19 from '../assets/food-19.jpg'
import food20 from '../assets/food-20.jpg'
import food21 from '../assets/food-21.jpg'
import food22 from '../assets/food-22.jpg'
import food23 from '../assets/food-23.jpg'
import food24 from '../assets/food-24.jpg'
import food25 from '../assets/food-25.jpg'
import food26 from '../assets/food-26.jpg'
import food27 from '../assets/food-27.jpg'
import food28 from '../assets/food-28.jpg'
import food29 from '../assets/food-29.jpg'
import food30 from '../assets/food-30.jpg'
import food31 from '../assets/food-31.jpg'
import food32 from '../assets/food-32.jpg'
import food33 from '../assets/food-33.jpg'

import {motion} from 'framer-motion'

const Gallary = () => {
  // Array of image URLs for your hotel
  const images = [
      food1,
      food3,
      food4,
      food9,
      food10,
      food11,
      food12,
      food13,
      food31,
      food14,
      food15,
      food16,
      food17,
      food18,
      food32,
      food19,
      food20,
      food21,
      food22,
      food23,
      food24,
      food33,
      food25,
      food26,
      food27,
      food28,
      food29,
      food30,
      food2,
      food5,
      food6,
      food8
      


  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mt-14 mb-14 text-purple-400 hover:text-red-200">
        Our Flavorful Moments...  <span className='font-extralight text-purple-400'>
        "Savor the moments, cherish the flavors."</span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <motion.img
              
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
        
              src={image}
              alt={`Hotel image ${index + 1}`}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;

