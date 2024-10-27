// import React from 'react'
// import { REVIEW } from '../constants'
// import xaviour from '../assets/xaviour.jpeg'
// import customer1 from '../assets/customer1.jpeg'
// import customer2 from '../assets/customer2.jpeg'
// import customer3 from '../assets/customer3.jpeg'
// import customer4 from '../assets/customer4.jpeg'
// import {motion} from 'framer-motion'

// import {TestimonialsData} from '../constants'

// const containerVariants = {
//     hidden:{opacity:0},
//     show:{
//         opacity: 1,
//         transition:{
//             staggerChildren:0.8,
//         }
//     }
// }

// const itemVariants ={
//     hidden:{opacity:0,y: 20},
//     show:{
//         opacity: 1, y:0 , transition:{duration :0.5}
//     }
// }

// const Review = () => {
//     const setting = {
//         dots:true,
//         arrow:false,
//         infinite: true,
//         speed: 500,
//         slidesToScroll: 1,
//         autoplaySpeed: 2000,
//         cssEase: "linear",
//         pauseOnHover: true,
//         pauseOnFocus: true,
//         responsive:[
//         {
//             breakpoint: 10000,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//             },
//         },
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 initialSlide:2,
//             },
//         },
//         {
//             breakpoint: 640,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },


//         ]

//     }

//   return (
//    <section className='container mx-auto mb-8 mt-12' id='review'>
//         <motion.div
//         initial='hidden'
//         whileInView='show'
//         variants={containerVariants}
//         viewport={{once:true}}
//          className='flex flex-col'>
//             <motion.p
//             variants={itemVariants}
//              className='mb-10 text-3xl font-light leading-normal tracking-tighter
//              lg:mx-40 lg:mt-40 lg:text-[3.5rem]'>
//                 {REVIEW.content}
//             </motion.p>
//              <motion.div 
//              variants={itemVariants}
//              className=' flex items-center justify-center gap-6'>
//                 <img src={xaviour} width={80} height={80} alt={REVIEW.name}
//                 className='rounded-full border'/>
//                 <div className='tracking-tighter'>
//                     <h6>{REVIEW.name}</h6>
//                     <p className='text-sm text-neutral-500'>{REVIEW.profession}</p>
//                 </div>
//              </motion.div>

//         </motion.div>
//         <div 
//         className='mt-14 flex flex-col items-center justify-center gap-2 md:flex-row'>
//             {
//                 [customer1, customer2, customer3, customer4].map((customer,index)=>(
//                     < motion.img 
//                     variants={itemVariants}
//                     key={index} src={customer} alt='customer' className='h-[300px]
//                     w-[200px] rounded-br-3xl rounded-tl-3xl object-cover'/>
//                 ))
//             }
//         </div>


//          {/* Testimonial Cards */}
         
            
//    </section>
//   )
// }

// export default Review


import React, { useRef } from 'react';
import { REVIEW } from '../constants';
import xaviour from '../assets/xaviour.jpeg';
import customer1 from '../assets/customer1.jpeg';
import customer2 from '../assets/customer2.jpeg';
import customer3 from '../assets/customer3.jpeg';
import customer4 from '../assets/customer4.jpeg';
import { motion } from 'framer-motion';
import { TestimonialsData } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Review = () => {
  // Ref for scrolling the testimonials container
  const scrollRef = useRef(null);

  // Function to scroll the testimonials
  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300; // Change the value to control the scroll distance

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
      {/* Review content */}
      <motion.div
        
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={itemVariants}
          className="mb-5 text-2xl custom-shadow2 p-4  font-extralight leading-normal tracking-tighter lg:mx-40 lg:mt-24 lg:text-[1.8rem]"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          <img src={xaviour} width={80} height={80} alt={REVIEW.name} className="rounded-full border" />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Customer images */}
      {/* <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            variants={itemVariants}
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </div> */}

      {/* Testimonial Cards with horizontal scroll */}
      <div className="relative mt-10 px-32">
        {/* Left and Right Buttons */}
        <button
          className="absolute left-10 top-1/2 -translate-y-1/2 p-3  bg-transparent border rounded-ee-xl rounded-ss-xl  hover:rounded-3xl"
          onClick={() => scroll('left')}
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-6 px-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {TestimonialsData.map((item) => (
            <div key={item.id} className="min-w-[300px] bg-transparent border border-gray-500 custom-shadow3 
             p-6 rounded-ss-3xl rounded-ee-3xl shadow-lg  hover:border-white ">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.position}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{item.text}</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
            </div>
          ))}
        </div>

        <button
          className="absolute right-10 top-1/2 -translate-y-1/2 p-3 bg-transparent border rounded-se-2xl rounded-es-2xl  hover:rounded-3xl"
          onClick={() => scroll('right')}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Review;
