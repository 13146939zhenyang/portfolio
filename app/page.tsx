'use client'
import { useRef, useEffect, useState } from 'react'
import { Introduction, About, Contact, DeveloperCard, Portfolio, Resume, Skills, SideNav } from '@/components'
import {motion} from 'framer-motion'

export default function Home() {
  const scrollRef = useRef(null)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }
  return (
    <main className='w-full h-full relative'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='bg-[#1f1f1f] bg-opacity-80 backdrop-filter backdrop-blur-sm w-full h-full absolute top-0 left-0 z-20'>
        <div className='w-full h-full flex flex-row flex-wrap relative px-5 overflow-hidden justify-between'>
          <div className='h-full flex items-center absolute'>
            <DeveloperCard />
          </div>
          <div className='h-full overflow-scroll w-full pl-[40%]' id='container' ref={scrollRef}>
            <Introduction />
            <motion.div
              // initial="hidden"
              // whileInView="visible"
              variants={container}
              viewport={{ once: false, amount: 0.8, root: scrollRef }}
              >
              <About />
            </motion.div>
            <Resume />
            <Skills />
            <Portfolio />
            <Contact />
          </div>
          <div className='absolute h-full right-[70px] flex items-center'>
            <SideNav />
          </div>
        </div>
      </div>
    </main>
  )
}
