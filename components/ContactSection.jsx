import React from 'react'
import c from '../styles/Contact.module.css'
import { Map } from './Map'
const ContactSection = () => {
  return (
    <div className={c.contact_section}>
      <div className={c.main_container}>
        <div className={c.contact_container}>
          <div className={c.contact_form}>
            <div className={c.text_container}>
              <div className={c.contact_title}>Get In Touch</div>
              <div className={c.contact_paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                asperiores placeat nihil ratione eum inventore! Ab velit
                dignissimos nisi eum reiciendis. Aspernatur dignissimos
                provident veniam ipsam hic deleniti in ut accusamus incidunt?
               
              </div>
            </div>
            <form className={c.main_form_container}>
              <div className={c.form_name_email}>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <div className={c.from_in_txt}>
                <input type='text' placeholder='Subject' />
                <textarea
                  placeholder='Message...'
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                ></textarea>
                <input className={c.contact_button} type='button' value='Submit' />
              </div>
            </form>
          </div>
        </div>
        <div className={c.map_container}>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
