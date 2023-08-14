'use client'
import React from 'react'
import { BsEnvelope } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-full h-screen text-white pt-[70px]' id='contact'>
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <BsEnvelope className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Contact</span>
      </div>
    </div>
  )
}

export default Contact