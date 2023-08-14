import { BsBootstrap, BsInstagram, BsTwitter, BsLinkedin, BsGithub, BsBriefcase, BsEnvelope, BsArrowsAngleContract, BsGit, BsStripe } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineHtml5, AiOutlineUser, AiOutlineAntDesign, AiFillGithub, AiOutlineHighlight } from 'react-icons/ai';
import { LiaShapesSolid, LiaNode } from 'react-icons/lia';
import { TfiLayoutAccordionList } from 'react-icons/tfi'
import { DiJavascript1, DiSass, DiMaterializecss, DiDocker, DiResponsive, DiScrum } from 'react-icons/di'
import { SiThreedotjs, SiTypescript, SiNextdotjs, SiPug, SiExpress, SiKoa, SiKeystone, SiMysql, SiRedis, SiBabel, SiLodash, SiEslint, SiWebpack, SiAxios, SiGooglemaps, SiJenkins, SiJsonwebtokens, SiReduxsaga, SiStyledcomponents, SiSwiper } from 'react-icons/si'
import { BiLogoJquery, BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoMongodb, BiLogoGraphql, BiLogoAws, BiCookie, BiLogoRedux, BiSolidAdjustAlt, BiSolidComponent } from 'react-icons/bi'
import { IoLogoBitbucket, IoLogoVercel } from 'react-icons/io5'
import { TbBrandGoogleMaps, TbBrandRedux, TbBrandSocketIo, TbCircleLetterS } from 'react-icons/tb'
import { FiFramer } from 'react-icons/fi'
import { FaScrewdriver, FaJira, FaCloudflare } from 'react-icons/fa'
import { LuWebhook } from 'react-icons/lu'
import { GiBearFace, GiHook, GiQuillInk } from 'react-icons/gi'
import { MdEnhancedEncryption } from 'react-icons/md'
import { RiReactjsLine } from 'react-icons/ri'

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

export const skills = [
    { title: 'HTML5', icon: AiOutlineHtml5 },
    { title: 'Javascript', icon: DiJavascript1 },
    { title: 'Typescript', icon: SiTypescript },
    { title: 'JQuery', icon: BiLogoJquery },
    { title: 'Css3', icon: BiLogoCss3 },
    { title: 'SASS/LESS', icon: DiSass },
    { title: 'Tailwind.css', icon: BiLogoTailwindCss },
    { title: 'React.js', icon: BiLogoReact },
    { title: 'Next.js', icon: SiNextdotjs },
    { title: 'pug.js', icon: SiPug },
    { title: 'Express.js', icon: SiExpress },
    { title: 'Koa.js', icon: SiKoa },
    { title: 'Node.js', icon: LiaNode },
    { title: 'Keystone.js', icon: SiKeystone },
    { title: 'MySQL', icon: SiMysql },
    { title: 'MongoDB', icon: BiLogoMongodb },
    { title: 'GraphQL', icon: BiLogoGraphql },
    { title: 'Redis', icon: SiRedis },
    { title: 'Vercel', icon: IoLogoVercel },
    { title: 'Sanity.io', icon: TbCircleLetterS },
    { title: 'Babel', icon: SiBabel },
    { title: 'Lodash', icon: SiLodash },
    { title: 'Eslint', icon: SiEslint },
    { title: 'Webpack', icon: SiWebpack },
    { title: 'AWS S3/EC2/Route53/API gatway/Lambda/DynamoDB', icon: BiLogoAws },
    { title: 'Framer', icon: FiFramer },
    { title: 'Three.js/fiber/drei', icon: SiThreedotjs },
    { title: 'Antd', icon: AiOutlineAntDesign },
    { title: 'Material UI', icon: DiMaterializecss },
    { title: 'BootStrap', icon: BsBootstrap },
    { title: 'Git', icon: BsGit },
    { title: 'GitHub', icon: AiFillGithub },
    { title: 'Bitbucket', icon: IoLogoBitbucket },
    { title: 'Jira kanban/Confluence', icon: FaJira },
    { title: 'Webhook', icon: LuWebhook },
    { title: 'Websocket', icon: TbBrandSocketIo },
    { title: 'Websocket.io', icon: TbBrandSocketIo },
    { title: 'axios', icon: SiAxios },
    { title: 'react-hook', icon: GiHook },
    { title: 'zustand', icon: GiBearFace },
    { title: 'redux', icon: BiLogoRedux },
    { title: 'redux-saga', icon: SiReduxsaga },
    { title: 'redux-thunk', icon: TbBrandRedux },
    { title: 'Trulioo', icon: TbBrandGoogleMaps },
    { title: 'google-map', icon: SiGooglemaps },
    { title: 'swiper.js', icon: SiSwiper },
    { title: 'strip.js', icon: BsStripe },
    { title: 'cloudflare stream', icon: FaCloudflare },
    { title: 'crypto.js', icon: MdEnhancedEncryption },
    { title: 'jsonwebtoken', icon: SiJsonwebtokens },
    { title: 'js-cookie', icon: BiCookie },
    { title: 'react-use', icon: RiReactjsLine },
    { title: 'react-quill', icon: GiQuillInk },
    { title: 'Web component', icon: BiSolidComponent },
    { title: 'styled component', icon: SiStyledcomponents },
    { title: 'Responsive Design', icon: DiResponsive },
    { title: 'TDD', icon: FaScrewdriver },
    { title: 'BDD', icon: BsArrowsAngleContract },
    { title: 'Jenkins', icon: SiJenkins },
    { title: 'Docker', icon: DiDocker },
    { title: 'Agile', icon: AiOutlineHighlight },
    { title: 'Scrum', icon: DiScrum },
    { title: 'SOLID', icon: BiSolidAdjustAlt },
]