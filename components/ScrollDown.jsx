import React from 'react'
import s from '../styles/ScrollDown.module.css'
import { Facebook, Github, Instagram, LinkedIn, Mouse, Twitter, WhatsApp } from './svg'
import Link from 'next/link'
const ScrollDown = () => {
  
  return (
    <div className={s.container}>
     <div className={s.scrollDown}>
      <span>Scroll Down{`--->`}</span>
     </div>
     <div className={s.scrollIcon}>
      <Mouse />
     </div>
       <div className={s.socialIcons}>
      <Link href={'https://www.facebook.com/samiislam16203'} target='_blank'>
        {' '}
        <Facebook className={s.fab} />
      </Link>
      <Link href={'https://www.instagram.com/sami._.islam/'} target='_blank'>
        <Instagram className={s.fab} />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/sami-islam-427020218/'}
        target='_blank'
      >
        <LinkedIn className={s.fab} />
      </Link>
      <Link href={'https://github.com/sami12344'} target='_blank'>
        <Github className={s.fab} />
      </Link>

      <Link href={'https://twitter.com/Sami89047551'} target='_blank'>
        <Twitter className={s.fab} />
      </Link>
      </div>
    </div>
  )
}

export default ScrollDown
