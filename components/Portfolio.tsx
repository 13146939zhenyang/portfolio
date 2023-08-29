'use client'
import React, { lazy } from 'react'
import { TfiLayoutAccordionList } from 'react-icons/tfi'
import { motion } from 'framer-motion'
import { Edgecademy, Edgequant, Jiangren, Air, Rei, Beaver } from '@/public'

const Portfolio = () => {
  return (
    <div 
    className='text-white w-full pt-[10px] sm:pt-[70px] pl-4 pr-4 sm:pl-[40%] flex flex-col'
    id='portfolio'
    >
      <motion.div
        className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white hidden justify-center items-center gap-2 text-xs mb-[58px] sm:flex'
        initial={{ x: -300, opacity: 1, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
        exit={{ x: 300, opacity: 0, scale: 0.5 }}
        viewport={{ margin: '-100px 0px' }}
      >
        <TfiLayoutAccordionList className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Portfolio</span>
      </motion.div>
      <motion.div
        className='w-[130px] h-[30px] border-[1px] border-[#565656] rounded-full text-white sm:hidden justify-center items-center gap-2 text-xs mb-[38px] flex'
        initial={{ x: 30, opacity:0 }}
        whileInView={{ x: 0, opacity:1 }}
        transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
        viewport={{ margin: '0px 0px' }}
      >
        <TfiLayoutAccordionList className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Portfolio</span>
      </motion.div>
      <div className='cursor-default'>
        <motion.h3
          className='block text-2xl sm:text-5xl leading-none sm:leading-[60px] font-light mb-8'
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
          viewport={{ margin: '-100px 0px' }}
        >
          Featured<span className='text-[#58EA8B]'> Projects</span>
        </motion.h3>
      </div>
      {/* project 1 */}
      <div className='mb-8 sm:mb-16'>
        <motion.div
          className='w-full sm:w-[770px] sm:h-[410px] mb-[30px] rounded-[30px] shadow-lg overflow-hidden'
          initial={{ x: -80, y: 80, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
          viewport={{ margin: '-100px 0px' }}
        >
          <picture>
            <img loading='lazy' src={Edgecademy.src} alt="" className='w-full h-full object-fill' />
          </picture>
        </motion.div>
        <a href='https://www.edgecademy.org/' className='text-base sm:text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>Edgecademy - Education Social Media Platform</a>
      </div>
      {/* project 2 & 3 */}
      <div className='mb-8 sm:mb-16 flex flex-row items-center justify-start gap-6 flex-wrap'>
        {/* p2 */}
        <div className=''>
          <motion.div
            className='sm:w-[373px] w-full mb-[30px] rounded-[30px] shadow-lg overflow-hidden'
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}
          >
            <picture>
              <img loading='lazy' src={Edgequant.src} alt="" className='w-full h-full object-cover' />
            </picture>
          </motion.div>
          <a href='https://www.edgequant.com.au/' className='text-base sm:text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>Edge Quant</a>
        </div>
        {/* p3 */}
        <div className=''>
          <motion.div className='sm:w-[373px] w-full mb-[30px] rounded-[30px] shadow-lg overflow-hidden'
            initial={{ x: 80, y: 80, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}>
            <picture>
              <img loading='lazy' src={Rei.src} alt="" className='w-full h-auto object-fill' />
            </picture>
          </motion.div>
          <a href='https://reiizakaya.vercel.app/' className='text-base sm:text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>ReiIzakaya - Japanese Restaurant</a>
        </div>
      </div>
      {/* project 4 */}
      <div className='mb-8 sm:mb-16'>
        <motion.div className='w-full sm:w-[770px] sm:h-[410px] mb-[30px] rounded-[30px] shadow-lg overflow-hidden' initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
          viewport={{ margin: '-100px 0px' }}>
          <picture>
            <img loading='lazy' src={Jiangren.src} alt="" className='w-full h-full object-fill' />
          </picture>
        </motion.div>
        <a href='https://jiangren.com.au/' className='text-base sm:text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>JR Academy - Professional IT Education Company</a>
      </div>
      {/* project 5 & 6 */}
      <div className='mb-8 sm:mb-16 flex flex-row items-center justify-start gap-6 flex-wrap'>
        {/* p5 */}
        <div className=''>
          <motion.div className='w-full sm:w-[373px] mb-[30px] rounded-[30px] shadow-lg overflow-hidden' initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}>
            <picture>
              <img loading='lazy' src={Beaver.src} alt="" className='w-full h-auto object-fill' />
            </picture>
          </motion.div>
          <a href='https://www.beavercapital.com.au/' className='text-base sm:text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>Beaver Capital</a>
        </div>
        {/* p6 */}
        <div className=''>
          <motion.div className='w-full sm:w-[373px] mb-[30px] rounded-[30px] shadow-lg overflow-hidden' initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}>
            <picture>
              <img loading='lazy' src={Air.src} alt="" className='w-full h-auto object-fill' />
            </picture>
          </motion.div>
          <a href='https://airlinking.com.au/' className='text-base sm:text-2xl font-light hover:underline underline-offset-1 cursor-pointer'>AirLinking</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio