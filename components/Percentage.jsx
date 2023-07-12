import React ,{ useState, useEffect } from 'react'
import p from '../styles/Parcentage.module.css'
const Percentage = () => {
  const values = {
    start:0,
    end:90,
    speed:100
  }
    const [value, setValue] = useState(0)

   useEffect(()=>{
if(value < values.end ){
  setTimeout(()=> setValue(prev => prev+=2), values.speed)
}
   },[value])
  return (
    <div className={p.container}>
<div className={p.circular_progress} style={{
  background: `conic-gradient(#000 ${value*3.6}deg, #ededed 0deg)`
}}>
  <span className={p.progress_value}>{value}%</span>
</div>
<span className={p.text}>HTML & CSS</span>
    </div>
  )
}

export default Percentage