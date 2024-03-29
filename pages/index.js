import Head from 'next/head'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import ExpSection from '../components/ExpSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import SkillSection from '../components/SkillSection'
import Sidebar from '../components/Sidebar'
import Particlebackground from '../components/Particlebackground'
import { useState } from 'react'

export default function Home() {
   const [menu, setMenu] = useState('false')
  return (
    <>
      <Head>
        <title>Sami Islam | Fullstack Developer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar menu={menu} setMenu={setMenu} />
   <Sidebar menu={menu} setMenu={setMenu} />
      {/* <Particlebackground /> */}
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExpSection />
      <ContactSection /> 
      <Footer />
    </>
  )
}
