'use client'
import { AiOutlineUser } from 'react-icons/ai'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='w-full text-white sm:pt-[70px] sm:pl-[40%] pl-0 pt-0' id='about'
    >
      {/* tag section */}
      <motion.div
        className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'
        initial={{ x: -300, opacity: 1, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
        exit={{ x: 300, opacity: 0, scale: 0.5 }}
        viewport={{ margin: '-90px 0px' }}
      >
        <AiOutlineUser className="mb-[2px] text-sm" />
        <span className='uppercase font-[250]'>About</span>
      </motion.div>
      {/* title section */}
      <div className=''>
        <h3 className='text-5xl leading-[60px] font-light mb-8'>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-120px 0px' }}
          >
            Every great design begin with
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.7 }}
            viewport={{ margin: '-120px 0px' }}
          >
            an even <span className='text-[#58EA8B]'>better story</span>
          </motion.div>
        </h3>
        <p className='mb-[1rem] leading-8 max-w-[610px] break-all text-base text-[#999999]'>
          <motion.span
            className='block'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.2 }}
            viewport={{ margin: '-120px 0px' }}
          >
            3+ years’ hands-on experience in programming with HTML, CSS, JavaScript/ES6, jQuery, and modern CSS/JavaScript libraries. 2+ years’ professional experience in programming with React.js and Node.js, and 1+ year experience in building website using Shopify with liquid and React.js.
          </motion.span>
          <br />
          <motion.span
            className='block'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-120px 0px' }}
          >
            I have delivered or taken part in developing 8 commercial projects successfully during my professional career, 2  Shopify projects , 2 serverless projects and 4 MERN projects.
          </motion.span>
          <br />
          <motion.span
            className='block'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.4 }}
            viewport={{ margin: '-120px 0px' }}
          >
            I am passionate about technologies and enjoy learning new technologies. Pursue continuous improvement of code quality and build project code in a strictly standardized format. Optimism and can face challenges at work positively. Likes teamwork and enjoys independent problem-solving time.
          </motion.span>
          <br />
          <motion.span
            className='block'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.5 }}
            viewport={{ margin: '-120px 0px' }}
          >
            I&apos;m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
          </motion.span>
        </p>
      </div>
    </div>
  )
}

export default About