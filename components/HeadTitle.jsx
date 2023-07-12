import React from 'react'
import TextSpan from './TextSpan'

const HeadTitle = ({text}) => {
 const  sentence = text.split("")

  return (
    <div>
     {sentence.map((letter,index)=>{
      return(
       <TextSpan key={index}>
        {letter === " " ? "\u00A0": letter}
       </TextSpan>
      )
     })}
    </div>
  )
}

export default HeadTitle