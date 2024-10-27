

import React, { useState } from 'react';
import DishCard from './DishCard';
import { DISHES } from '../constants';

const Dishes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const dishesPerPage = 8; // Number of dishes to show per page

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Function to handle search input clearing on Enter key press
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchTerm(''); // Clear the search input when Enter is pressed
    }
  };

  // Function to filter dishes based on category
  const handleFilterChange = (category) => {
    setSelectedFilter(category);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  // Filtering the dishes based on search and filter
  const filteredDishes = DISHES.filter((dish) => {
    const matchesSearch = dish.title.toLowerCase().includes(searchTerm);
    const matchesFilter = selectedFilter === 'All' || dish.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  const indexOfLastDish = currentPage * dishesPerPage;
  const indexOfFirstDish = indexOfLastDish - dishesPerPage;
  const currentDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);
  const totalPages = Math.ceil(filteredDishes.length / dishesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className='container mx-auto py-16 m-4 shadow-lg rounded-lg p-6' id='dishes'>
      <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
      Tasteful Temptations
      </h2>
    <div >
      {/* Search Bar */}
      <div className='mb-6 text-center'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyDown}
          placeholder='Search dishes...'
          className='w-1/2 p-3 rounded-3xl border bg-transparent text-white '
        />
      </div>

      {/* Filter Buttons */}
      <div className='mb-6 flex justify-center space-x-4'>
        {['All', 'Veg', 'Non-Veg', 'Seafood', 'Indian', 'Dessert'].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`p-2 rounded-2xl font-extralight w-36 custom-shadow2  ${selectedFilter === category ? 'bg-purple-500 text-white ' : 'bg-transparent'}`}
          >
            {category}
          </button>
        ))}
      </div>

      </div>

      {/* Dishes Grid */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-4 mx-6 p-8 '>
        {currentDishes.length > 0 ? (
          currentDishes.map((dish, index) => (
            <DishCard key={index} project={dish} />
          ))
        ) : (
          <p className='text-center col-span-4'>No dishes found</p>
        )}
      </div>

      {/* Pagination */}
      <div className='flex justify-center space-x-2 mt-6'>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-2 rounded-3xl w-10 h-10  ${currentPage === index + 1 ? 'bg-purple-500 text-white' : 'bg-gray-900'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Dishes;
