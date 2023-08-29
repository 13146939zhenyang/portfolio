
import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { Form, Input, Button, ConfigProvider } from 'antd'
import { motion } from 'framer-motion'

const Contact = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#58EA8B',
            colorBorder: '#58EA8B',
            colorPrimaryHover: '#28E98C',
          },
          Input: {
            colorPrimary: '#00000000',
            colorBorder: '#00000000',
            colorPrimaryHover: '#00000000',
            colorWarning: 'black',
            colorWarningBorder: 'black',
            colorWarningOutline: 'black',
            colorWarningBorderHover: 'black',
            boxShadow: 'none',
            boxShadowSecondary: 'none',
            colorTextPlaceholder: '#999999',
            fontSize: 18,
          }
        },
      }}
    >
      <div
        className='text-white w-full pt-[10px] sm:pt-[70px] pl-4 pr-4 sm:pl-[40%] flex flex-col'
        id='contact'
      >
        <motion.div
          className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white hidden justify-center items-center gap-2 text-xs mb-[58px] sm:flex'
          initial={{ x: -300, opacity: 1, scale: 0 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
          exit={{ x: 300, opacity: 0, scale: 0.5 }}
          viewport={{ margin: '-100px 0px' }}
        >
          <BsEnvelope className="mb-[2px] text-sm" />
          <span className='uppercase font-[250]'>Contact</span>
        </motion.div>
        <motion.div
          className='w-[130px] h-[30px] border-[1px] border-[#565656] rounded-full text-white sm:hidden justify-center items-center gap-2 text-xs mb-[38px] flex'
          initial={{ x: 30, opacity:0 }}
          whileInView={{ x: 0, opacity:1 }}
          transition={{ duration: 0.5, type: 'easeInOut', bounce: 0.2, delay: 0.2 }}
          viewport={{ margin: '0px 0px' }}
        >
          <BsEnvelope className="mb-[2px] text-sm" />
          <span className='uppercase font-[250]'>Contact</span>
        </motion.div>
        <div className='cursor-default mb-[20px] sm:mb-[60px] pl-[13px]'>
          <motion.h3
            className='block text-2xl sm:text-5xl leading-none sm:leading-[60px] font-light mb-2 sm:mb-8'
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}
          >
            Let&apos;s Work<span className='text-[#58EA8B]'> Together!</span>
          </motion.h3>
          <motion.a
            href='mailto:zhen.yang.syd@gmail.com'
            className='block text-sm sm:text-2xl mb-[20px] sm:mb-[50px] hover:text-[#58EA8B] transition-all duration-75 ease-in-out'
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ margin: '-100px 0px' }}
          >
            zhen.yang.syd@gmail.com
          </motion.a>
        </div>
        <Form
          name="contact"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='flex flex-col'
        >
          <div className='w-full flex sm:flex-row flex-col mb-0 sm:mb-[34px]'>
            <div className='sm:w-[1/2] w-full'>
              <div className='text-xs pb-[2px] text-white pl-3 uppercase'>Full name <span className='text-[#fc4545]'>*</span></div>
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                <Input className='bg-transparent text-white' placeholder='Your Full Name' />
              </Form.Item>
            </div>
            <div className='sm:w-[1/2] w-full'>
              <div className='text-xs pb-[2px] text-white pl-3 uppercase'>Email <span className='text-[#fc4545]'>*</span></div>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input className='bg-transparent text-white' placeholder='Your email address' />
              </Form.Item>
            </div>
          </div>
          <div className='w-full flex sm:flex-row flex-col mb-[34px]'>
            <div className='sm:w-[1/2] w-full'>
              <div className='text-xs pb-[2px] text-white pl-3 uppercase'>Phone <span className='text-[#fc4545]'>(optional)</span></div>
              <Form.Item
                name="phone"
              >
                <Input className='bg-transparent text-white' placeholder='Your phone number' />
              </Form.Item>
            </div>
            <div className='sm:w-[1/2] w-full'>
              <div className='text-xs pb-[2px] text-white pl-3 uppercase'>Subject <span className='text-[#fc4545]'>*</span></div>
              <Form.Item
                name="subject"
                rules={[{ required: true, message: 'Please input your subject!' }]}
              >
                <Input className='bg-transparent text-white' placeholder='Your subject' />
              </Form.Item>
            </div>
          </div>
          <div className='w-full mb-[34px]'>
            <div className='text-xs pb-[2px] text-white pl-3 uppercase'>Message <span className='text-[#fc4545]'>*</span></div>
            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea className='bg-transparent text-white' placeholder='Write your message here...' />
            </Form.Item>
          </div>
          <Form.Item className='w-screen flex sm:justify-start justify-center'>
            <motion.button className='bg-[#58EA8B] hover:bg-transparent w-[243px] h-[52px] text-base uppercase rounded-full border-[1px] border-[#58EA8B] transition-all duration-150 ease-in-out hover:text-[#58EA8B]'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 8 }}>
              Send Message
            </motion.button>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  )
}

export default Contact