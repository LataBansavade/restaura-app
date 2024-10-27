

import React from 'react';
import {motion} from 'framer-motion'

const DishCard = ({ project }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push('★'); // Full star
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push('☆'); // Half star
      } else {
        stars.push('☆'); // Empty star
      }
    }
    return stars.join('');
  };

  return (
    <motion.div  whileHover={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(255, 105, 180, 0.3)" }}
    transition={{ duration: 0.2 }}
 

    className='shadow-md rounded-lg overflow-hidden custom-shadow relative group'>
      <img
        src={project.image}
        alt={project.title}
        className='rounded-3xl p-3 transition-opacity duration-300 group-hover:opacity-30'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <h3 className='mb-2 text-2xl font-medium text-white'>
          {project.title}
        </h3>
        <p className='text-sm text-white mb-2 '>{project.description}</p>
        <div className='flex items-center justify-between'>
          <p className='text-lg font-semibold text-white mx-5'>{project.price}</p>
          <div>
            <span className='text-yellow-500'>{renderStars(project.rating)}</span>
            <span className='ml-2 text-sm text-gray-200'>({project.rating})</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
