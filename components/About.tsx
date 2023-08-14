'use client'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const About = () => {
  return (
    <div className='w-full text-white py-[70px]' id='about'>
      {/* tag section */}
      <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
        <AiOutlineUser className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>About</span>
      </div>
      {/* title section */}
      <div className=''>
        <h3 className='text-5xl leading-[60px] font-light mb-8'>Every great design begin with
          <br />
          an even <span className='text-[#58EA8B]'>better story</span></h3>
        <p className='mb-[1rem] leading-8 max-w-[610px] break-all text-base text-[#999999]'>
          3+ years’ hands-on experience in programming with HTML, CSS, JavaScript/ES6, jQuery, and modern CSS/JavaScript libraries. 2+ years’ professional experience in programming with React.js and Node.js, and 1+ year experience in building website using Shopify with liquid and React.js.
          <br />
          <br />
          I have delivered or taken part in developing 8 commercial projects successfully during my professional career, 2  Shopify projects , 2 serverless projects and 4 MERN projects.
          <br />
          <br />
          I am passionate about technologies and enjoy learning new technologies. Pursue continuous improvement of code quality and build project code in a strictly standardized format. Optimism and can face challenges at work positively. Likes teamwork and enjoys independent problem-solving time.
          <br />
          <br />
          I&apos;m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
        </p>
      </div>
    </div>
  )
}

export default About