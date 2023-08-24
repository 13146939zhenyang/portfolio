import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
import { Project } from '@/public'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn, textVariant } from "@/utils/motion";

const Introduction = () => {
  const handleClick = () => {
    const element = document.getElementById('portfolio')
    const container = document.getElementById('container');
    container?.scrollTo({ top: element?.offsetTop! + 10 || 0, behavior: 'smooth' })
  }
  return (
    <motion.div
      className='text-white h-screen w-full pt-[70px]' id='introduction'
    >
      {/* tag section */}
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <AiOutlineHome className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Introduce</span>
      </div>
      {/* title */}
      <motion.div className='flex flex-col mb-[43px] text-[78px] font-[300] leading-none gap-4 tracking-normal' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={
        {
          delay: 0.5,
          duration: 0.5,
          ease: 'easeInOut'
        }
      }>
        <h1 className=''>Say Hi from <span className='text-[#58EA8B]'>Zhen</span></h1>
        <motion.p variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}>WebFlow designer</motion.p>
        <motion.p variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}>& Fullstack developer</motion.p>
      </motion.div>
      {/* slogan */}
      <p className='w-full flex flex-col text-base text-[#999999] mb-[31px]'>
        <span>I design and code beautifully simple things and i love what i do.</span>
        <span>Just simple like that!</span>
      </p>
      {/* ads circle */}
      <div className='w-full flex justify-start pl-[500px]'>
        <div className='flex justify-center items-center w-[175px] h-[175px] rounded-full relative border-[1px] border-[#575757] cursor-pointer hover:border-[#58EA8B] hover:text-[#58EA8B] transition-all duration-150 ease-in-out' onClick={handleClick}>
          <img src={Project.src} alt="projcet" className='m-2 w-[141px] h-[148px] spinner absolute' />
          <BsArrowDown className="text-3xl font-bold animate-bounce" />
        </div>
      </div>
      {/* number of experience and projects */}
      <div className='mt-[55px] flex flex-row items-center gap-[100px]'>
        <div className='flex flex-col'>
          <span className='text-[#58EA8B] text-[72px] mb-[38px] leading-[56px]'>3+</span>
          <span className='uppercase text-sm mb-[16px] text-[#999999] leading-6'>
            <span className=''>years of</span>
            <br />
            <span>experience</span>
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-[#58EA8B] text-[72px] mb-[38px] leading-[56px]'>8</span>
          <span className='uppercase text-sm mb-[16px] text-[#999999] leading-6'>
            <span className=''>commercial projects</span>
            <br />
            <span>compeleted</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default Introduction
{/* <AnimatePresence>
{
  selectSection === 'news' && (
    <motion.div
      initial={{ x: '-200%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
      exit={{ x: '-200%' }}
      className='h-[1000px]'
    >
      <News />
    </motion.div>
  )
}
</AnimatePresence > */}