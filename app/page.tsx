'use client'
import { useRef } from 'react'
import { Introduction, About, Contact, DeveloperCard, Portfolio, Resume, Skills, SideNav } from '@/components'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

export default function Home() {
  const { scrollY } = useScroll()

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
  return (
    <main className='w-screen h-screen relative'>
      <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-30'>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='bg-[#1f1f1f] fixed top-0 left-0 w-full h-full bg-opacity-80 -z-20'>
      </div>
      <div className='h-full flex items-center fixed z-50 md:ml-5'>
        <DeveloperCard />
      </div>
      <div className='fixed h-full right-[70px] top-0 flex items-center z-50'>
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