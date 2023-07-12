import React from 'react'
import s from '../styles/Sidebar.module.css'
const Sidebar = () => {
  return (
    <div className={s.container}>
      <div className={s.main_container}>
        <div className={s.menu_container}>
          <div className={s.menu_items}>
            <div className={s.items}>Home</div>
            <div className={s.items}>About</div>
            <div className={s.items}>Skills</div>
            <div className={s.items}>Experience</div>
            <div className={s.items}>Work</div>
            <div className={s.items}>Contact</div>
          </div>{' '}
          <div className={s.title_container}>
            <div className={s.title}><span> About</span></div>
          </div>
        </div>{' '}
      </div>
    </div>
  )
}

export default Sidebar
