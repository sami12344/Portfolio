import React from 'react'
import b from '../styles/Button.module.css'
const Button = ({text}) => {
  return (
    <div className={b.btn}>{text}</div>
  )
}

export default Button