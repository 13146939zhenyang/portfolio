'use client'
import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
import { Project } from '@/public'
import { motion, useScroll } from 'framer-motion'
import { fadeIn, textVariant } from "@/utils/motion";
import { useRef } from 'react'

const Introduction = ({ wrapper }: any) => {
  const handleClick = () => {
    const element = document.getElementById('portfolio')
    window.scrollTo({ top: element?.offsetTop! - 15 || 0, behavior: 'smooth' })
  }
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
    layoutEffect: false
  });
  return (
    <motion.div
      className='text-white w-full pt-[10px] sm:pt-[70px] pl-4 pr-4 sm:pl-[40%] flex flex-col' id='introduction' ref={ref}
    >
      {/* tag section */}
      <motion.div
        className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white hidden justify-center items-center gap-2 text-xs mb-[58px] sm:flex'
        initial={{ x: -300, opacity: 1, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
        viewport={{ margin: '0px 0px' }}
      >
        <AiOutlineHome className="mb-[2px] text-sm" />
        <motion.span
        >
          Introduce
        </motion.span>
      </motion.div>
      <motion.div
        className='w-[100px] h-[30px] border-[1px] border-[#565656] rounded-full text-white sm:hidden justify-center items-center gap-2 text-xs mb-[38px] flex'
        initial={{ x: 30, opacity:0 }}
        whileInView={{ x: 0, opacity:1 }}
        transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
        viewport={{ margin: '0px 0px' }}
      >
        <AiOutlineHome className="mb-[2px] text-sm" />
        <motion.span
        >
          Introduce
        </motion.span>
      </motion.div>
      {/* title */}
      <motion.div
        className='flex flex-col mb-[43px] text-4xl sm:text-[78px] font-[300] leading-none gap-4 tracking-normal'
      >
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.1 }}
            viewport={{ margin: '-120px 0px' }}
          >
            Say Hi from
          </motion.span>
          <motion.span className='text-[#58EA8B]' initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-120px 0px' }}>{` `}Zhen</motion.span>
        </div>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.5 }}
          viewport={{ margin: '-120px 0px' }}
        >
          WebFlow designer
        </motion.p>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.7 }}
          viewport={{ margin: '-120px 0px' }}
        >
          & Fullstack developer
        </motion.p>
      </motion.div>
      {/* slogan */}
      <p className='w-full flex flex-col text-xs sm:text-base text-[#999999] mb-[31px]'>
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.5 }}
          viewport={{ margin: '-120px 0px' }}
        >
          I design and code beautifully simple things and i love what i do.
        </motion.span>
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.5 }}
          viewport={{ margin: '-120px 0px' }}>
          Just simple like that!
        </motion.span>
      </p>
      {/* ads circle */}
      <motion.div
        className='w-full flex justify-center sm:justify-start sm:pl-[500px]'
        initial={{ x: 30, y: 30, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: 'spring', delay: 0.5 }}
        viewport={{ margin: '-120px 0px' }}
      >
        <div className='flex justify-center items-center sm:w-[175px] sm:h-[175px] w-[95px] h-[95px] rounded-full relative border-[1px] border-[#575757] cursor-pointer hover:border-[#58EA8B] hover:text-[#58EA8B] transition-all duration-150 ease-in-out' onClick={handleClick}>
          <img src={Project.src} alt="projcet" className='m-2 sm:w-[141px] sm:h-[148px] w-[75px] h-[78px] spinner absolute' />
          <BsArrowDown className="text-3xl font-bold animate-bounce" />
        </div>
      </motion.div>
      {/* number of experience and projects */}
      <div className='mt-[30px] sm:mt-[55px] flex flex-row items-center sm:gap-[100px] sm:justify-start justify-evenly'>
        <div className='flex flex-col'>
          <motion.span
            initial={{ x: -55, y: 30, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}
            className='text-[#58EA8B] text-5xl sm:text-[72px] mb-[10px] sm:mb-[38px] leading-none sm:leading-[56px] text-center'
          >
            3+
          </motion.span>
          <motion.span 
          className='uppercase text-xs sm:text-sm mb-[16px] text-[#999999] sm:leading-6 text-center'
            initial={{ x: -55, y: 30, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', delay: 0.3 }}
            viewport={{ margin: '-80px 0px' }}>
            <span className=''>years of</span>
            <br />
            <span>experience</span>
          </motion.span>
        </div>
        <div className='flex flex-col'>
          <motion.span
            className='text-[#58EA8B] text-5xl sm:text-[72px] mb-[10px] sm:mb-[38px] leading-none sm:leading-[56px] text-center'
            initial={{ x: 55, y: 30, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}
          >
            8
          </motion.span>
          <motion.span 
          className='uppercase text-xs sm:text-sm mb-[16px] text-[#999999] sm:leading-6 text-center'
            initial={{ x: 55, y: 30, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', delay: 0.3 }}
            viewport={{ margin: '-80px 0px' }}>
            <span className=''>commercial projects</span>
            <br />
            <span>compeleted</span>
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export default Introduction