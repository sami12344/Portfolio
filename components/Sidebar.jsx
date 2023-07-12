import React, { useState } from 'react'
import s from '../styles/Sidebar.module.css'
import {motion} from 'framer-motion'
import Link from 'next/link'
const Sidebar = ({menu,setMenu}) => {
  const [item,setItem] = useState('Home')
  
    
      
        if(!menu){
          return (
            <div className={s.sidebar_container} >
              <div className={s.main_container}>
                <div className={s.menu_items}>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Home')}
                    onClick={() => setMenu(!menu)}
                  >
                    Home
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('About')}
                    onClick={() => setMenu(!menu)}
                  >
                    About
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Skills')}
                    onClick={() => setMenu(!menu)}
                  >
                    Skills
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Experience')}
                    onClick={() => setMenu(!menu)}
                  >
                    Experience
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Work')}
                    onClick={() => setMenu(!menu)}
                  >
                    Work
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Contact')}
                    onClick={() => setMenu(!menu)}
                  >
                    Contact
                  </div>
                </div>{' '}
                <div className={s.about_title}>{item}</div>
              </div>
            </div>
          )
        }
       if(menu){
        return(
           <div className={s.sidebar_container} style={{top:'-100%'}} >
              <div className={s.main_container}>
                <div className={s.menu_items}>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Home')}
                    onClick={() => setMenu(!menu)}
                  >
                    Home
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('About')}
                    onClick={() => setMenu(!menu)}
                  >
                    About
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Skills')}
                    onClick={() => setMenu(!menu)}
                  >
                    Skills
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Experience')}
                    onClick={() => setMenu(!menu)}
                  >
                    Experience
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Work')}
                    onClick={() => setMenu(!menu)}
                  >
                    Work
                  </div>
                  <div
                    className={s.items}
                    onMouseEnter={() => setItem('Contact')}
                    onClick={() => setMenu(!menu)}
                  >
                    Contact
                  </div>
                </div>{' '}
                <div className={s.about_title}>{item}</div>
              </div>
            </div>
          )
       }
    
    
   
}

export default Sidebar

