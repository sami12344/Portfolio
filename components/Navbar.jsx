import Link from 'next/link'
import React, { useState } from 'react'
import n from '../styles/Navbar.module.css'
import { Close, Menu } from './svg'
const Navbar = ({menu, setMenu}) => {

function toggle(){
  setMenu(!menu)
  console.log(menu);
}
// if(menu){
//   return(
//     <div className={n.menu_container}>

//     </div>
//   )
// }
  return (
    <div className={n.nav_container}>
      <div className={n.container} onClick={toggle}>
        {menu ? (
          <Menu className={n.nav_menu} />
        ) : (
          <Close className={n.nav_menu} />
        )}
      </div>
    </div>
  )
}

export default Navbar
