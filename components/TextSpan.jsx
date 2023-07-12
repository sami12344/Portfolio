import React, { useState } from 'react'
import {motion, useAnimationControls} from 'framer-motion'
const TextSpan = ({children}) => {
 const controls = useAnimationControls()
 const [isPlaying, setIsPlaying] = useState(false)

 const rubberBand = () => {
  controls.start({
    transform: [
      'scale3d(1,1,1)',
      'scale3d(2,.44,1)',
      'scale3d(.75,2,1)',
      'scale3d(2.5,.85,1)',
      'scale3d(.9,1.05,1)',
      'scale3d(1,1,1)',
  
    ],
    transition:{
     times:[0,0.4,0.6,0.7,0.8,0.9]
    }
  })
  setIsPlaying(true)
 }
  return (
    <motion.span
      
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubberBand()
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  )
}

export default TextSpan