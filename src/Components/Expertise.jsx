import React from 'react'
import { CUSINES } from '../constants'
import {motion} from 'framer-motion'
import { SlideUp } from '../constants'


import chef1 from '../assets/male-chef.jpg'
import chef2 from '../assets/male-cook.jpg'
import chef3 from '../assets/portrait-man.jpg'
import chef4 from '../assets/women-chef-1.jpg'
import chef5 from '../assets/women-chef-2.jpg'
import chef6 from '../assets/women-chef-3.jpg'
import chef7 from '../assets/man2-chef.jpg'
import chef8 from '../assets/main-chef.jpg'
import chef9 from '../assets/chef-red.jpg'

const containerVariants={
    hidden:{opacity: 0},
    show:{
        opacity: 1,
        transition: {
            straggerChildren: 1
        }
    }
}

const itemVariants={
    hidden:{opacity: 0 , y: 20},
    show:{opacity:1 , y:0, transition:{duration:0.8}}
}


const teamMembers = [
    {
      name: "John Doe",
      position: "Head Chef",
      description: "With over 20 years of culinary experience, John brings creativity and precision to every dish.",
      image: chef3, // Replace with actual image paths
    },
    {
      name: "Jane Smith",
      position: "Sous Chef",
      description: "Jane's passion for fresh, local ingredients shines through in his culinary creations.",
      image: chef2,
    },
    {
      name: "Emily White",
      position: "Pastry Chef",
      description: "Emily crafts decadent desserts that provide the perfect finish to your meal.",
      image: chef4,
    },
    {
        name: "Michael Johnson",
        position: "Grill Master",
        description: "Michael specializes in grilled perfection, bringing smoky flavors to life with his techniques.",
        image: chef1,
      },
      {
        name: "Sophie Turner",
        position: "Nutritionist",
        description: "Sophie ensures our dishes are not only delicious but also nutritious, crafting healthy options for all.",
        image: chef5,
      },
      {
        name: "James Brown",
        position: "Line Cook",
        description: "James is known for his speed and precision, ensuring every order is executed flawlessly.",
        image: chef7,
      },
      {
        name: "Olivia Green",
        position: "Event Coordinator",
        description: "Olivia creates memorable dining experiences, from intimate dinners to grand celebrations.",
        image: chef6,
      },
      {
        name: "David Wilson",
        position: "Sous Chef",
        description: "David’s innovative approach and creativity make every dish an exciting experience.",
        image:chef9,
      },

    // Add more team members as needed
  ];
const Expertise = () => {
  return (
    
  <section>
             
        <h2 className='mt-28  mb-10 text-center tracking-tighter lg:text-4xl text-4xl font-semibold'>Our Expertise</h2>
        <motion.div 
            initial='hidden'
            whileInView='show'
            variants={containerVariants}
        className='container mx-auto px-4'>
            {
                CUSINES.map((cusine,index)=>(
                  <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-center border-b-4 border-dotted 
                  border-neutral-700/40 py-2">
                  <div className="flex-shrink-0 text-xl mb-4 sm:mb-0 sm:mr-6">
                    {cusine.number}
                  </div>
                  
                  <div className="flex-shrink-0 w-full sm:w-1/3">
                    <img
                      src={cusine.image}
                      alt={cusine.title}
                      className="h-48 w-48 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-3xl mx-auto sm:ml-10"
                    />
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl uppercase tracking-tighter text-rose-300">
                      {cusine.title}
                    </h3>
                    <p className="mt-4 text-lg sm:text-base font-light tracking-tighter">
                      {cusine.description}
                    </p>
                  </div>
                </motion.div>
                
                ))
            }
        </motion.div>

    <section className="container mx-auto  scale-90 " id="team">
      <h2 className="text-center text-4xl font-semibold mt-2">The Experts : Heart of Our Kitchen ❤️</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-8  mx-auto ">
        {teamMembers.map((member, index) => (
          <div 
         
          key={index} className="bg-transparent scale-90 custom-shadow2 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-95">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-3/4  object-cover "
            />
            <div className="p-6 text-center ">
              <h3 className="text-2xl font-medium">{member.name}</h3>
              <p className="text-lg text-gray-300">{member.position}</p>
              <p className="mt-1 text-gray-500 font-light mb-2 mx-auto ">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </section>

  )
}   

export default Expertise