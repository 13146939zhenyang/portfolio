'use client'
import { useRef, useEffect, useState } from 'react'
import { Introduction, About, Contact, DeveloperCard, Portfolio, Resume, Skills, SideNav } from '@/components'

export default function Home() {
  return (
    <main className='w-full h-full relative'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='bg-[#1f1f1f] bg-opacity-80 backdrop-filter backdrop-blur-sm w-full h-full absolute top-0 left-0 z-20'>
        <div className='w-full h-full flex flex-row flex-wrap relative px-5 overflow-hidden justify-between'>
          <div className='h-full flex items-center'>
            <DeveloperCard />
          </div>
          <div className='h-full overflow-scroll w-[calc(80vw-520px)] min-w-[700px] lg:mr-[9%] mr-0' id='container'>
            <Introduction />
            <About />
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
