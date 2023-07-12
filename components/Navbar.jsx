import Link from 'next/link'
import React, { useState } from 'react'
import n from '../styles/Navbar.module.css'
import { Menu } from './svg'
const Navbar = () => {
  const [menu, setMenu] = useState('false')
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
      <Menu className={n.nav_menu} onClick={toggle} />
     
    </div>
  )
}

export default Navbar
