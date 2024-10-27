import React from 'react';
import about from '../assets/about.jpeg';
import { ABOUT } from '../constants';

import { motion } from 'framer-motion';
import { SlideLeft2 } from '../constants';
import { GiNoodles } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { GiWineBottle } from "react-icons/gi";
import { PiChefHatBold } from "react-icons/pi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";


// Equipment data array
const EquipmentData = [
  {
    id: 1,
    title: "Private Dining & Events",
    desc: "Elevate your special moments with exclusive dining spaces tailored to perfection.",
    icon: <GiNoodles />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Signature Dishes",
    desc: "Indulge in our chef’s masterpieces, featuring authentic flavors crafted with passion.",
    link: "/",
    icon: <CiBowlNoodles />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Farm-to-Table Experience",
    desc: "Savor the freshness of locally sourced, seasonal ingredients in every bite.",
    link: "/",
    icon: <GiFullPizza />
    ,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Wine & Beverage Pairing",
    desc: "Experience expertly curated wine and cocktail pairings for every dish.",
    link: "/",
    icon: <GiWineBottle />,
    delay: 1.3,
  },
  {
    id: 5,
    title: "Chef's Specials",
    desc: "Delight in our ever-changing seasonal dishes, prepared with creative flair.",
    link: "/",
    icon: <PiChefHatBold />,
    delay: 1.6,
  },

  {
    id: 5,
    title: "Culinary Workshops",
    desc: "Learn the art of cooking with our expert-led classes, perfect for food enthusiasts.",
    link: "/",
    icon: <GiForkKnifeSpoon />,
    delay: 1.9,
  },
  {
    id: 5,
    title: "Outdoor Dining",
    desc: "Dine under the stars with our elegant al fresco seating, perfect for a cozy evening.",
    link: "/",
    icon: <MdOutlineDinnerDining />,
    delay: 2.2,
  },
];

const About = () => {
  return (
    <section className='container mx-auto p-10' id='about'>
      {/* Section for About Us */}
      <div className='flex flex-wrap items-center justify-center mb-12'>
        <div className='w-full lg:w-1/2'>
          <img src={about} className='rounded-3xl lg:-rotate-3 mt-8 mx-auto scale-90' alt="About Us"/>
        </div>
        <div className='w-full lg:w-1/2 px-4  mx-auto'>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-center  text-3xl lg:text-6xl  tracking-tighter'>
            {ABOUT.header}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='h-2 w-60 mt-2 bg-rose-300 mx-auto lg:-rotate-3 mb-6'>
          </motion.div>

          <motion.p 
            className='text-center text-lg lg:max-w-xl mx-auto leading-relaxed tracking-tight'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            {ABOUT.content}
          </motion.p>
        </div>
      </div>

      {/* Section for What We Offer */}

      <div className='container py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6 font-playfair'>
            <div className='space-y-4 p-6'>
                <h1 className='text-3xl md:text-4xl font-semibold'>What We Offer For You</h1>
                <p className='text-gray-500'>Experience exceptional dining with curated flavors and a welcoming atmosphere tailored to your delight.</p>
            </div>
            {
                EquipmentData.map((item) => (
                    <motion.div
                     variants={SlideLeft2(item.delay)}
                     initial="hidden"
                     whileInView="visible"
                  
                     key={item.id} className='  space-y-4 p-6 bg-red-400 hover:bg-red-500 rounded-xl 
                    hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
                        <div className='text-4xl'>{item.icon}</div>
                        <p className='text-2xl font-semibold'>{item.title}</p>
                        <p className='text-gray-900'>{item.desc}</p>
                    </motion.div>
                ))
            }
        </div>
       </div>

     
    </section>
  );
};

export default About;
