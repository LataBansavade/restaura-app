import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Softdrinks.css';
import restauracan from '../../assets/restaura-can.png';

const Softdrinks = () => {
  const [active, setActive] = useState(0);
  const [leftMockup, setLeftMockup] = useState(0);
  const carouselRef = useRef(null);
  const mockupRef = useRef(null);
  const itemCount = 3; // Total number of items (you can dynamically count them as well)
  const leftEachItem = 100 / (itemCount - 1); // For setting the mockup position
  let refreshInterval;

  useEffect(() => {
    // Automatically move the carousel every 3 seconds
    refreshInterval = setInterval(() => handleNextClick(), 3000);

    return () => clearInterval(refreshInterval); // Cleanup interval on component unmount
  }, [active]);

  const handleNextClick = () => {
    setActive((prevActive) => (prevActive >= itemCount - 1 ? 0 : prevActive + 1));
    setLeftMockup((prevLeft) => prevLeft + leftEachItem);
  };

  const handlePrevClick = () => {
    setActive((prevActive) => (prevActive <= 0 ? itemCount - 1 : prevActive - 1));
    setLeftMockup((prevLeft) => prevLeft - leftEachItem);
  };

  useEffect(() => {
    const listItems = carouselRef.current.querySelectorAll('.item');
    const oldActiveItem = carouselRef.current.querySelector('.item.active');
    const hiddenOld = carouselRef.current.querySelector('.item.hidden');

    // Remove "hidden" from the previously hidden item
    if (hiddenOld) hiddenOld.classList.remove('hidden');

    // Remove "active" from the previous active item and add "hidden"
    oldActiveItem.classList.remove('active');
    oldActiveItem.classList.add('hidden');

    // Add "active" to the new active item
    listItems[active].classList.add('active');

    // Adjust the mockup background position
    if (mockupRef.current) {
      mockupRef.current.style.setProperty('--left', `${leftMockup}%`);
    }

    // Clear and reset the interval after every manual click
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => handleNextClick(), 2000);

    return () => clearInterval(refreshInterval);
  }, [active, leftMockup]);

  return (
    <div className=''>
      <div className='h-screen flex justify-center items-center text-center bg-orange-500 overflow-hidden '>
        <div className='canTitle flex items-center justify-between p-52 w-full z-30'>
          <h1 className='uppercase text-[9vw] font-bold  text-red-50'>Chill</h1>
          <h1 className='uppercase text-[9vw] font-bold text-red-50'>Buzz</h1>
        </div>

        {/* Add shake animation to the restauracan image using framer-motion */}
        <motion.img
          src={restauracan}
          alt="img"
          width={300}
          className="z-40 absolute"
          animate={{
            rotate: [0, -4, 4, -4, 0], // Subtle rotation
          }}
          transition={{
            duration: 2, // Slower animation
            repeat: Infinity, // Repeat indefinitely
            ease: 'easeInOut', // Smooth easing
          }}
        />

        <div className='absolute z-20 overflow-hidden flex'>
          {/* <img src="img/fruit_strawberry.png" width={1800} className='  '/> */}
          <img src="img/fruit_orange.png" width={1800} className='  '/>
          {/* <img src="img/leaves.png" width={200} className=' ml-60 mb '/> */}
        </div>

      </div>
      
      <div className='h-screen overflow-hidden'>
        <div className="carousel" ref={carouselRef}>
          <div className="list">
            <div className="item active" style={{ '--background': '#EA3D41' }}>
              <div className="content">Strawberry</div>
              <img src="img/fruit_strawberry.png" className="fruit" alt="Strawberry" />
            </div>
            <div className="item" style={{ '--background': '#2D5643' }}>
              <div className="content">Avocado</div>
              <img src="img/fruit_avocado.png" className="fruit" alt="Avocado" />
            </div>
            <div className="item hidden" style={{ '--background': '#E7A043' }}>
              <div className="content">Orange</div>
              <img src="img/fruit_orange.png" className="fruit" alt="Orange" />
            </div>
          </div>
          <div className="leaves"></div>
          <div className="mockup" ref={mockupRef}></div>
          <div className="shadow"></div>
          <div className="arrow">
            <button id="prev" onClick={handlePrevClick}>
              &lt;
            </button>
            <button id="next" onClick={handleNextClick}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Softdrinks;
