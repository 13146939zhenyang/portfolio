'use client'
import React from 'react'
import { TfiLayoutAccordionList } from 'react-icons/tfi'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <div className='w-screen text-white pt-[70px] pl-[40%]' id='portfolio'>
      <motion.div
        className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'
        initial={{ x: -300, opacity: 1, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
        exit={{ x: 300, opacity: 0, scale: 0.5 }}
        viewport={{ margin: '-100px 0px' }}
      >
        <TfiLayoutAccordionList className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Portfolio</span>
      </motion.div>
      <div className='cursor-default'>
        <motion.h3
          className='block text-5xl leading-[60px] font-light mb-8'
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
          viewport={{ margin: '-100px 0px' }}
        >
          Featured<span className='text-[#58EA8B]'> Projects</span>
        </motion.h3>
      </div>
      {/* project 1 */}
      <div className='mb-16'>
        <div className='w-[770px] h-[410px] mb-[30px] rounded-[30px] shadow-lg '></div>
        <a href='https://www.edgecademy.org/' className='text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>Edgecademy - Education Social Media Platform</a>
      </div>
      {/* project 2 & 3 */}
      <div className='mb-16 flex flex-row items-center justify-start gap-6'>
        {/* p2 */}
        <div className=''>
          <div className='w-[373px] h-[410px] mb-[30px] rounded-[30px] shadow-lg'></div>
          <a href='https://www.edgequant.com.au/' className='text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>Edge Quant</a>
        </div>
        {/* p3 */}
        <div className=''>
          <div className='w-[373px] h-[410px] mb-[30px] rounded-[30px] shadow-lg'></div>
          <a href='https://reiizakaya.vercel.app/' className='text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>ReiIzakaya - Japanese Restaurant</a>
        </div>
      </div>
      {/* project 4 */}
      <div className='mb-16'>
        <div className='w-[770px] h-[410px] mb-[30px] rounded-[30px] shadow-lg'></div>
        <a href='https://jiangren.com.au/' className='text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>JR Academy - Professional IT Education Company</a>
      </div>
      {/* project 5 & 6 */}
      <div className='mb-16 flex flex-row items-center justify-start gap-6'>
        {/* p5 */}
        <div className=''>
          <div className='w-[373px] h-[410px] mb-[30px] rounded-[30px] shadow-lg'></div>
          <a href='https://www.beavercapital.com.au/' className='text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>Beaver Capital</a>
        </div>
        {/* p6 */}
        <div className=''>
          <div className='w-[373px] h-[410px] mb-[30px] rounded-[30px] shadow-lg'></div>
          <a href='https://airlinking.com.au/' className='text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>AirLinking</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio