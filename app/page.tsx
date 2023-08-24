'use client'
import { Introduction, About, Contact, DeveloperCard, Portfolio, Resume, Skills, SideNav } from '@/components'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className='w-full h-full relative'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-30'>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='bg-[#1f1f1f] absolute top-0 left-0 w-full h-full bg-opacity-80 -z-20'>
      </div>
      <div className='h-full flex items-center absolute z-50 md:ml-5'>
        <DeveloperCard />
      </div>
      <div className='h-full overflow-scroll w-full pl-[40%] z-50'>
        <Introduction />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: 'easeInOut'
          }}
        >
          <About />
        </motion.div>
        <Resume />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <div className='absolute h-full right-[70px] top-0 flex items-center z-50'>
        <SideNav />
      </div>
    </main>
  )
}
