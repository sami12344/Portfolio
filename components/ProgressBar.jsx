import React, { useEffect, useState } from 'react'
import p from '../styles/ProgressBar.module.css'
const ProgressBar = ({ title, color, value }) => {
  const [filled, setFilled] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  // const [pageYoffset, setPageYoffset] = useState(window.pageYOffset)
  // const checkPageYoffset = () => {
  //   if (typeof window !== undefined) {
  //     setPageYoffset(window.pageYOffset)
  //     if (pageYoffset >= 2000) {
  //       setIsRunning(true)
  //       console.log(isRunning)
  //     }
  //   }
  // }

  useEffect(() => {
    // window.addEventListener('scroll', checkPageYoffset)
    if (filled < value && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 100)
    }
    // return () => {

    //   window.removeEventListener('scroll', checkPageYoffset)
    // }
  }, [filled, isRunning])
  return (
    <div className={p.container}>
      <div className={p.text}>
        <div className={p.title}>
          <span>{title}</span>
        </div>
        <div className={p.percent}>
          {filled}
          <span>%</span>
        </div>
      </div>
      <div className={p.progressbar}>
        <div
          style={{
            height: '100%',
            width: `${filled}%`,
            backgroundColor: `${color}`,
            transition: ' all 0.5s linear',
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
