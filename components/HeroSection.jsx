import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect'
import h from '../styles/HeroStyles.module.css'
import Button from './Button'
import HeadTitle from './HeadTitle'
import { Facebook, Github, Instagram, LinkedIn, Mouse, Twitter } from './svg'

const HeroSection = () => {
  return (
    <div className={h.container} >
      <div className={h.main_container}>
        <div className={h.title}>
          <HeadTitle text={`Hi`} /> <HeadTitle text={`I'm Sami`} />{' '}
          <div className={h.typewriter}>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'UI / UX Designer',
                  'Mern Stack Developer',
                  'Web Developer',
                  'Web Designer',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={h.buttons}>
            <Button text={'Contact Me'} />
            {/* <Button text={'Contact Me'} /> */}
          </div>
        </div>
        <div className={h.social_media}>
          <Link
            href={'https://www.facebook.com/samiislam16203'}
            target='_blank'
          >
            {' '}
            <Facebook className={h.fab} />
          </Link>
          <Link
            href={'https://www.instagram.com/sami._.islam/'}
            target='_blank'
          >
            <Instagram className={h.fab} />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/sami-islam-427020218/'}
            target='_blank'
          >
            <LinkedIn className={h.fab} />
          </Link>
          <Link href={'https://github.com/sami12344'} target='_blank'>
            <Github className={h.fab} />
          </Link>

          <Link href={'https://twitter.com/Sami89047551'} target='_blank'>
            <Twitter className={h.fab} />
          </Link>
        </div>
      </div>
    
    </div>
  )
}

export default HeroSection
