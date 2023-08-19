'use client'
import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { Form, Input, Button, ConfigProvider } from 'antd'

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
            boxShadow: 'none',
          }
        },
      }}
    >
      <div className='w-full h-screen text-white pt-[70px]' id='contact'>
        <div className='w-[136px] h-[35px] border-[1px] border-[#565656] rounded-full text-white flex justify-center items-center gap-2 text-xs mb-[58px]'>
          <BsEnvelope className="mb-[2px] text-sm" />
          <span className='uppercase font-[250]'>Contact</span>
        </div>
        <div className='cursor-default'>
          <h3 className='text-5xl leading-[60px] font-light mb-8'>Let's Work<span className='text-[#58EA8B]'> Together!</span></h3>
          <a href='mailto:zhen.yang.syd@gmail.com' className='text-2xl mb-[50px] hover:text-[#58EA8B] transition-all duration-75 ease-in-out'>zhen.yang.syd@gmail.com</a>
        </div>
        <Form
          name="contact"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input className='bg-transparent text-white' />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className='bg-transparent text-white ' />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your phone!' }]}
          >
            <Input className='bg-transparent text-white ' />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[{ required: true, message: 'Please input your subject!' }]}
          >
            <Input className='bg-transparent text-white ' />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea className='bg-transparent text-white' />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className='bg-[#58EA8B] hover:bg-transparent w-[243px] h-[52px] text-base uppercase rounded-full'>
              Send Message
            </Button>
          </Form.Item>
        </Form>
        <div className='flex flex-col'>
          <div className='flex flex-row flex-wrap'>
            {/* Full name */}
            <div className='px-[12px] text-base text-[#999999] md:w-[1/2] w-full '>
              <div className='mb-[34px] flex flex-col w-full'>
              </div>
            </div>
            {/* Email */}
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Contact