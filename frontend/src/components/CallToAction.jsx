import React from 'react'
import { motion } from "motion/react";
import { assets } from '../assets/assets';

const CallToAction = () => {
  return (
    <div>
                <div className='flex flex-col md:flex-row items-stretch justify-between gap-7'>
                        <motion.div
                                     whileHover={{scale: 1.05}}
                                                 className="bg-[#FDF5F1] flex flex-col md:flex-row gap-5 items-center justify-between p-4 rounded-2xl md:w-1/2 h-full md:min-h-[320px]"
                                     >
                                <div className='flex flex-col gap-3 flex-1'>
                    <h1 className='text-primary text-2xl font-bold uppercas'>
                     Healthy Organic Fruits
                    </h1>
                    <h2 className='text-2xl font-semibold text-secondary'>
                     Get the Flat 20% Offer
                    </h2>
                    <button className="px-6 py-3 bg-secondary text-white hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer">
                     View all items
                    </button>
                </div>
                <img src={assets.organic_fruits} alt="" className='w-40 md:w-45 lg:w-auto lg:max-w-[60%] h-full object-contain' />

            </motion.div>
                        <motion.div
                                     whileHover={{scale: 1.05}}
                                                 className="bg-[#EFF9FC] flex flex-col md:flex-row gap-5 items-center justify-between p-4 rounded-2xl md:w-1/2 h-full md:min-h-[320px]"
                                     >
                             <div className='flex flex-col gap-3 flex-1'>
                    <h1 className='text-primary text-2xl font-bold uppercas'>
                     Get 10% Flat Offer On
                    </h1>
                    <h2 className='text-2xl font-semibold text-secondary'>
                     Fresh Organic Veggitables
                    </h2>
                    <button className="px-6 py-3 bg-secondary text-white hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer">
                     View all items
                    </button>
                </div>
                <img src={assets.organic_vegetables} alt="" className='w-40 md:w-45 lg:w-auto lg:max-w-[60%] h-full object-contain' />

            </motion.div>
        </div>
    </div>
  )
}

export default CallToAction