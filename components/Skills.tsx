'use client'
import React from 'react'
import { LiaShapesSolid } from 'react-icons/lia'
import { skills } from '@/utils/constants'

const Skills = () => {
    return (
        <div className='w-full text-white pt-[70px]' id='skills'>
            <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
                <LiaShapesSolid className="mb-[2px] text-sm" />
                <span className='uppercase font-[250]'>Skills</span>
            </div>
            <div className='cursor-default'>
                <h3 className='text-5xl leading-[60px] font-light mb-8'>My<span className='text-[#58EA8B]'> TechStack</span></h3>
            </div>
            <div className='w-full flex flex-row flex-wrap gap-5'>
                {skills.map((skill, index) => (
                    // <div key={index} className='w-[calc(50%-10px)] h-[calc(50%-10px)] bg-[#1f1f1f] rounded-3xl flex flex-col justify-center items-center gap-2 p-5'>
                    //     <skill.icon className='text-[#58EA8B] text-6xl' />
                    //     <span className='text-[#999999] text-lg'>{skill.title}</span>
                    // </div>
                    <div key={index} className='w-[100px] h-[100px] border-[2px] border-[#999999] hover:border-[#58EA8B] hover:bg-[#1f1f1f] rounded-3xl flex flex-col justify-center items-center gap-2 p-1 cursor-pointer transition-all duration-[0.3] ease-in-out text-[#999999] hover:text-white'>
                        <skill.icon className='text-[#58EA8B] text-3xl' />
                        <span className='text-sm text-center'>{skill.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills