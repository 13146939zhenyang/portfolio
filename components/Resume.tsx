import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <div className='w-full text-white pt-[70px] pl-[40%]' id='resume'>
      <motion.div
        className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'
        initial={{ x: -300, opacity: 1, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
        exit={{ x: 300, opacity: 0, scale: 0.5 }}
        viewport={{ margin: '70px 0px' }}
      >
        <BsBriefcase className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Resume</span>
      </motion.div>
      {/* title section */}
      <div className='cursor-default'>
        <motion.h3
          className='block text-5xl leading-[60px] font-light mb-8'
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
          viewport={{ margin: '50px 0px' }}
        >
          Education &<span className='text-[#58EA8B]'> Experience</span>
        </motion.h3>
        <section className='resume-container flex flex-col ml-2'>
          {/* 2023-present */}
          <motion.div
            className='resume-item relative pl-[74px] pb-[68px] text-[#999999] hover:text-[#28e98c] transition-all duration-[0.3] ease-in-out'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'easeInOut', delay: 0.2 }}
            viewport={{ margin: '-80px 0px' }}
          >
            <div className='text-base pb-[28px] cursor-default'>2023 - Present</div>
            <h4 className='text-white text-2xl mb-[5px]'>Fullstack Developer</h4>
            <p className='text-[#999999] text-xs mb-[18px]'>BCR</p>
            <h4 className='text-white text-2xl mb-[5px]'>Fullstack Developer</h4>
            <p className='text-[#999999] text-xs'>Edge Ark</p>
          </motion.div>
          {/* 2020-2022 */}
          <motion.div
            className='resume-item relative pl-[74px] pb-[68px] text-[#999999] hover:text-[#28e98c] transition-all duration-[0.3] ease-in-out'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'easeInOut', delay: 0.2 }}
            viewport={{ margin: '-80px 0px' }}
          >
            <div className='text-base pb-[28px] cursor-default'>2020-2022</div>
            <h4 className='text-white text-2xl mb-[5px]'>Frontend Developer</h4>
            <p className='text-[#999999] text-xs mb-[18px]'>BCU World</p>
            <h4 className='text-white text-2xl mb-[5px]'>Fullstack Developer</h4>
            <p className='text-[#999999] text-xs'>JR Academy</p>
          </motion.div>
          {/* 2012-2020 */}
          <motion.div
            className='resume-item relative pl-[74px]  text-[#999999] hover:text-[#28e98c] transition-all duration-[0.3] ease-in-out'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'easeInOut', delay: 0.2 }}
            viewport={{ margin: '-80px 0px' }}
          >
            <div className='text-base pb-[28px] cursor-default'>2012-2020</div>
            <h4 className='text-white text-2xl mb-[5px]'>Master of Science in Internetworking</h4>
            <p className='text-[#999999] text-xs mb-[18px]'>UTS</p>
            <h4 className='text-white text-2xl mb-[5px]'>Bachelor of Computer science in Gaming</h4>
            <p className='text-[#999999] text-xs'>Macao Polytechnic University</p>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default Resume