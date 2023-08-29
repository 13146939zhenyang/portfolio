'use client'
import { useEffect } from 'react'
import { Introduction, About, Contact, DeveloperCard, Portfolio, Resume, Skills, SideNav } from '@/components'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

export default function Home() {
  const { scrollY } = useScroll()
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
  return (
    <main className='w-full h-full relative overflow-x-clip' id="container">
      <div className='fixed top-0 left-0 w-full h-full -z-30'>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='bg-[#1f1f1f] fixed top-0 left-0 w-full h-full bg-opacity-80 -z-20'>
      </div>
      <div className='w-full sm:h-full h-screen flex sm:justify-start justify-center items-center sm:fixed z-10 md:ml-5'>
        <DeveloperCard />
      </div>
      <div className='hidden fixed h-full right-[70px] top-0 sm:flex items-center z-50'>
        <SideNav />
      </div>
      <Introduction />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  )
}