'use client'
import { useState } from 'react'
import { Introduction, About, Contact, DeveloperCard, Portfolio, Resume, Skills, SideNav } from '@/components'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Drawer, ConfigProvider } from 'antd'
import { sideNavItems, socialMediaLinks } from '@/utils/constants'

export default function Home() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [selected, setSelected] = useState<string>('introduction')
  const handleClick = (value: string) => {
    setSelected(value)
    onClose()
    const element = document.getElementById(`${value}`)
    if (value === 'introduction') {
      window.scrollTo({ top: element?.offsetTop! || 0, behavior: 'smooth' })
    }
    else {
      window.scrollTo({ top: element?.offsetTop! + 10 || 0, behavior: 'smooth' })
    }
  }
  return (
    <ConfigProvider
      theme={
        {
          components: {
            Drawer: {
              colorBgElevated: '#191919',
              paddingLG: 0,
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
        <Drawer title="" closable={false} placement="right" onClose={onClose} open={open} width={345}>
          <div className='w-full flex flex-col items-center'>
            <div className='w-[159px] h-[360px] mt-[50px]'>
              <p className='text-[#999999] block mb-[16px] text-lg'>Menu</p>
              {/* nav items */}
              <ul className='mb-[30px] py-[24px] flex flex-col gap-[20px]'>
                {sideNavItems.map((item, index) => (
                  <li key={item.id} className=' flex flex-row items-center gap-[10px]' onClick={() => handleClick(item.id)}>
                    <item.icon className={`${selected === item.id ? 'text-[#58EA8B]' : 'text-[#999999]'} w-[18px] h-[18px] cursor-pointer hover:text-[#58EA8B] transition-all ease-in-out ${item.id === 'introduction' ? 'mb-[3px]' : ''}`} />
                    <span className={`text-xs  cursor-pointer transition-all  ease-in-out ${selected === item.id ? 'text-white' : 'text-[#999999]'}`}>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* social */}
            <div className='w-[159px] h-[410px]'>
              <p className='text-[#999999] block mb-[16px] text-lg'>Social</p>
              <div className='flex flex-row gap-5'>
                {socialMediaLinks.map((item,key)=>(
                  <item.icon key={key} className='w-[15px] h-[15px] cursor-pointer text-[#999999] transition-all ease-in-out' onClick={() => window.open(item.url)} />
                ))}</div>
            </div>
          </div>
        </Drawer>
      </main>

    </ConfigProvider> 
  )
}