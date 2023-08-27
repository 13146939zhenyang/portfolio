'use client'
import React from 'react'
import { Avatar } from '@/public'
import { BsEnvelope } from 'react-icons/bs'
import { socialMediaLinks } from '@/utils/constants'
import { Logo } from '@/components'
import { motion } from "framer-motion";

const DeveloperCard = () => {
  return (
    <div className='text-white border-[1px] border-[#565656] rounded-3xl p-[50px] text-base flex flex-col'>
      {/* title section */}
      <div className='w-full flex flex-row justify-between items-center mb-[30px]'>
        <div className='text-5xl font-semibold'>
          <div className='relative'>
            <span>Zhen</span>
            <div className='absolute -top-[10px] -right-[35px]'>
              <Logo />
            </div>
          </div>
        </div>

        <p className='w-[140px] flex flex-col leading-none text-sm gap-2 text-right'>
          <span className='w-full'>Fullstack Developer</span>
          <span>& Web Developer</span>
        </p>
      </div>
      {/* avatar section */}
      <div className='w-[298px] h-[251px] bg-right bg-[length:360px_270px] grayscale mb-[56px] mx-auto rounded-3xl' style={{ backgroundImage: `url(${Avatar.src})` }}></div>
      {/* name/location section */}
      <div className='flex flex-col gap-1 mb-[30px] text-center text-2xl font-[300]'>
        <h2 className='mb-[8px]'>zhen.yang.syd@gmail.com</h2>
        <h2>Based in Sydney, AUS</h2>
      </div>
      {/* privicy */}
      <div className='mb-[25px] p-0 text-sm text-[#999999] text-center'>© 2022 Zhen. All Rights Reserved</div>
      {/* social link */}
      <div className='w-full flex flex-row justify-center gap-3 mb-[30px]'>
        {socialMediaLinks.map((link, index) => (
          //   <motion.div
          //   animate={{
          //     scale: [1, 2, 2, 1, 1],
          //     rotate: [0, 0, 180, 180, 0],
          //     borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          //   }}
          //   transition={{
          //     duration: 2,
          //     ease: "easeInOut",
          //     times: [0, 0.2, 0.5, 0.8, 1],
          //     repeat: Infinity,
          //     repeatDelay: 1
          //   }}
          //   className="w-[220px] h-[220px] bg-white"
          // ></motion.div>
          <motion.a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='w-[50px] h-[50px] rounded-full text-[#999999] border-[2px] border-[#565656] flex items-center justify-center hover:text-[#58EA8B] hover:border-[#58EA8B] transition-all duration-150 ease-in-out'
            // animate={{
            //   scale: [1, 1.2, 1.2, 1, 1],
            //   rotate: [0, 0, 180, 180, 0],
            //   borderRadius: ["30%", "30%", "50%", "50%", "30%"]
            // }}
            // transition={{
            //   duration: 1,
            //   ease: "easeInOut",
            //   times: [0, 0.5, 0.5, 0.8, 1.5],
            //   repeat: Infinity,
            //   repeatDelay: index * 2
            // }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <link.icon />
          </motion.a>
        ))}
      </div>
      {/* Hire me button */}
      <div className='w-full flex flex-row justify-center gap-1'>
        <motion.button
          className='bg-[#58EA8B] w-full rounded-full text-black flex items-center justify-center gap-2 py-3 border-[1px] hover:text-[#58EA8B] border-[#58EA8B] hover:bg-transparent transition-all duration-150 ease-in-out box'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 8 }}
        >

          <BsEnvelope />HIRE ME!
        </motion.button>
      </div>
    </div>
  )
}

export default DeveloperCard