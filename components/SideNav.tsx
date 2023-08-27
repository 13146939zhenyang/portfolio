'use client'
import React, { useState, useEffect, useRef } from 'react'
import { sideNavItems } from '@/utils/constants'
import { Tooltip } from 'antd'

const SideNav = () => {
    const [selected, setSelected] = useState<string>('introduction')
    const headerRef = useRef<HTMLDivElement>(null)
    const handleClick = (value: string) => {
        setSelected(value)
        const element = document.getElementById(`${value}`)
        if (value === 'introduction') {
            window.scrollTo({ top: element?.offsetTop! - 70 || 0, behavior: 'smooth' })
        }
        else {
            window.scrollTo({ top: element?.offsetTop! + 10 || 0, behavior: 'smooth' })
        }
    }
    const [scrolled, setScrolled] = useState<boolean>(false)
    // detect the scroll position, and change the selected navbar
    useEffect(() => {
        const container = document.getElementById('container');
        const handleScroll = () => {
            const introduction = document.getElementById('introduction')
            const about = document.getElementById('about')
            const resume = document.getElementById('resume')
            const skills = document.getElementById('skills')
            const portfolio = document.getElementById('portfolio')
            const contact = document.getElementById('contact')
            if (window.scrollY > 0) {
                setScrolled(true)
            }
            else {
                setSelected('introduction')
                setScrolled(false)
            }
            if (window.scrollY > about?.offsetTop! - 100) {
                setSelected('about')
            }
            if (window.scrollY > resume?.offsetTop! - 100) {
                setSelected('resume')
            }
            if (window.scrollY > skills?.offsetTop! - 100) {
                setSelected('skills')
            }
            if (window.scrollY > portfolio?.offsetTop! - 100) {
                setSelected('portfolio')
            }
            if (window.scrollY > portfolio?.offsetTop! + 200) {
                setSelected('contact')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className='border-[1px] border-[#575757] bg-[#1f1f1f] rounded-[30px] flex flex-col py-[24px] gap-[20px] z-20 w-[55px]'>
            {sideNavItems.map((item, index) => (
                <Tooltip placement="left" title={item.title} key={item.id} className='z-50' color='#404042' destroyTooltipOnHide={true} overlayClassName='px-4 py-2 text-xs' arrow={false}>
                    <item.icon className={`${selected === item.id ? 'text-[#58EA8B]' : 'text-[#999999]'} w-[18px] h-[18px] mx-auto cursor-pointer hover:text-[#58EA8B] transition-all  ease-in-out`} onClick={() => handleClick(item.id)} />
                </Tooltip>
            ))}
        </div>
    )
}

export default SideNav