import React from 'react'
import { BsBriefcase } from 'react-icons/bs'

const Resume = () => {
  return (
    <div className='w-full text-white pt-[70px]' id='resume'>
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <BsBriefcase className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>Resume</span>
      </div>
      {/* title section */}
      <div className='cursor-default'>
        <h3 className='text-5xl leading-[60px] font-light mb-8'>Education &<span className='text-[#58EA8B]'> Experience</span></h3>
        <section className='resume-container flex flex-col ml-2'>
          {/* 2023-present */}
          <div className='resume-item relative pl-[74px] pb-[68px] text-[#999999] hover:text-[#28e98c] transition-all duration-[0.3] ease-in-out'>
            <div className='text-base pb-[28px] cursor-default'>2023 - Present</div>
            <h4 className='text-white text-2xl mb-[5px]'>Fullstack Developer</h4>
            <p className='text-[#999999] text-xs mb-[18px]'>BCR</p>
            <h4 className='text-white text-2xl mb-[5px]'>Fullstack Developer</h4>
            <p className='text-[#999999] text-xs'>Edge Ark</p>
          </div>
          {/* 2020-2022 */}
          <div className='resume-item relative pl-[74px] pb-[68px] text-[#999999] hover:text-[#28e98c] transition-all duration-[0.3] ease-in-out'>
            <div className='text-base pb-[28px] cursor-default'>2020-2022</div>
            <h4 className='text-white text-2xl mb-[5px]'>Frontend Developer</h4>
            <p className='text-[#999999] text-xs mb-[18px]'>BCU World</p>
            <h4 className='text-white text-2xl mb-[5px]'>Fullstack Developer</h4>
            <p className='text-[#999999] text-xs'>JR Academy</p>
          </div>
          {/* 2012-2020 */}
          <div className='resume-item relative pl-[74px]  text-[#999999] hover:text-[#28e98c] transition-all duration-[0.3] ease-in-out'>
            <div className='text-base pb-[28px] cursor-default'>2012-2020</div>
            <h4 className='text-white text-2xl mb-[5px]'>Master of Science in Internetworking</h4>
            <p className='text-[#999999] text-xs mb-[18px]'>UTS</p>
            <h4 className='text-white text-2xl mb-[5px]'>Bachelor of Computer science in Gaming</h4>
            <p className='text-[#999999] text-xs'>Macao Polytechnic University</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume