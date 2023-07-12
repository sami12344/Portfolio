import Link from 'next/link'
import React from 'react'
import f from '../styles/Footer.module.css'
import { Facebook, Github, Instagram, LinkedIn, Twitter, WhatsApp } from './svg'

const Footer = () => {
  return (
    <footer className={f.footer}>
      <div className={f.footer_row}>
        <div className={f.footer_col}>
          <img src='/logo.png' className={f.logo} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            explicabo minima debitis et reprehenderit consequatur dolorum
            ratione, quas, ut placeat labore mollitia{' '}
          </p>
        </div>
        <div className={f.footer_col}>
          <h3>
            office{' '}
            <div className={f.underline}>
              <span></span>
            </div>
          </h3>
          <p>7/5, Block #C, Lalmatia</p>
          <p>Lalmatia, Mohammadpur</p>
          <p>Dhaka, Bangladesh</p>
          <p className={f.email_id}>freelancersami16203@gmail.com</p>
          <h4>+880 1741466378</h4>
        </div>
        <div className={f.footer_col}>
          <h3>
            Links{' '}
            <div className={f.underline}>
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Services</a>
            </li>
            <li>
              <a href=''>About Us</a>
            </li>
            <li>
              <a href=''>Features</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
        <div className={f.footer_col}>
          <h3>
            Newsletter{' '}
            <div className={f.underline}>
              <span></span>
            </div>
          </h3>
          <form action=''>
            <input type='email' placeholder='Enter Your Email Id' required />
            <button type='submit'></button>
          </form>
          <div className={f.social_icons}>
            <Link
              href={'https://www.facebook.com/samiislam16203'}
              target='_blank'
            >
              {' '}
              <Facebook className={f.fab} />
            </Link>
            <Link
              href={'https://www.instagram.com/sami._.islam/'}
              target='_blank'
            >
              <Instagram className={f.fab} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/sami-islam-427020218/'}
              target='_blank'
            >
              <LinkedIn className={f.fab} />
            </Link>
            <Link href={'https://github.com/sami12344'} target='_blank'>
              <Github className={f.fab} />
            </Link>

            <Link href={'https://twitter.com/Sami89047551'} target="_blank"><Twitter className={f.fab} /></Link>
            
            <WhatsApp className={f.fab} />
          </div>
        </div>
      </div>
      <hr className={f.hr} />
      <p className={f.copyright}> Copyright © 2021 By Sami Islam</p>
    </footer>
  )
}

export default Footer
