'use client'
import { useState } from 'react'
import { Introduction, About, Contact, DeveloperCard, Portfolio, Resume, Skills, SideNav } from '@/components'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Drawer, ConfigProvider } from 'antd'

export default function Home() {
  const { scrollY } = useScroll()
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <ConfigProvider
      theme={
        {
          components: {
            Drawer: {
              colorBgElevated: '#191919',
            }
          },
        }
      }
    >
      <main className='w-full h-full relative overflow-x-clip' id="container">
        <div
          className='fixed top-[30px] right-[30px] z-50 sm:hidden w-[55px] h-[55px] rounded-full flex flex-col border-[1px] border-[#575757] gap-[4px] cursor-pointer bg-[#1f1f1f] justify-center items-center '
          onClick={showDrawer}
        >
          <span className='w-[20px] h-[2px] bg-white'></span>
          <span className='w-[20px] h-[2px] bg-white'></span>
        </div>
        <div className='fixed top-0 left-0 w-full h-full -z-30'>
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/water.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='bg-[#1f1f1f] fixed top-0 left-0 w-full h-full bg-opacity-80 -z-20'>
        </div>
        <div className='sm:h-full h-screen flex sm:justify-start justify-center items-center sm:fixed z-10 md:ml-5'>
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
        <Drawer title="" closable={false} placement="right" onClose={onClose} open={open} width={300}>
          <p className='text-[#999999]'>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </main>

    </ConfigProvider>
  )
}