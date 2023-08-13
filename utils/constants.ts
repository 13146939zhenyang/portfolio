import { BsInstagram, BsTwitter, BsLinkedin, BsGithub, BsBriefcase, BsEnvelope } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { LiaShapesSolid } from 'react-icons/lia';
import { TfiLayoutAccordionList } from 'react-icons/tfi'

export const socialMediaLinks = [
    { title: 'Instagram', url: 'https://www.instagram.com/', icon: BsInstagram },
    { title: 'Twitter', url: 'https://twitter.com/', icon: BsTwitter },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/', icon: BsLinkedin },
    { title: 'Github', url: 'https://www.facebook.com/', icon: BsGithub },
]

export const sideNavItems = [
    { title: 'Introduction', id: 'introduction', icon: AiOutlineHome },
    { title: 'About', id: 'about', icon: AiOutlineUser },
    { title: 'Resume', id: 'resume', icon: BsBriefcase },
    { title: 'Skills', id: 'skills', icon: LiaShapesSolid },
    { title: 'Portfolio', id: 'portfolio', icon: TfiLayoutAccordionList },
    { title: 'Contact', id: 'contact', icon: BsEnvelope },
]