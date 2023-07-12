import React from 'react'
import Iframe from 'react-iframe'
import m from '../styles/Map.module.css'
export const Map = () => {
  return (
    <div className={m.map_container}>
      <Iframe
      className={m.iframe}
        src='https://my.atlistmaps.com/map/112cda75-54c2-4f11-9e59-44e330579991?share=true'
        allow='geolocation'
        width='110%'
        height='110%'
        frameborder='0'
        scrolling='no'
        allowfullscreen
      ></Iframe>
    </div>
  )
}

