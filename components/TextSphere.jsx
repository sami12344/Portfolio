import React, { useEffect, useState } from 'react'

// Importing TagCloud package
import TagCloud from 'TagCloud'

const TextShpere = () => {
 const tagSize = (size)=> {
if(size <=1000){
  return size/4
}
 }
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    if (typeof window !== undefined) {
      setSize(window.innerWidth)
      console.log(size)
    }
  }
  
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  }, [size])
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = [
        `html`,
        'CSS',
        'SASS',
        'JavaScript',
        'React JS',
        'Next JS',
        'Nuxt',
        'Node JS',
        'Babel',
        'Jquery',
        'ES6',
        'GIT',
        'GITHUB',
        'Express JS',
        'Mongo DB',
        'Wordpress',
        'Elementor',
        'Tailwind CSS',
        'Sanity',
        'Bootstrap',
        'Mongoose',
        'Firebase',
        'Next Auth',
        'ES7',
        'Redux',
        'UI / UX',
        'Figma',
      ]

      const options = {
        radius: `${size>=1000? size/5+100 : size/3+120}`,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        keep: true,
      }

      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <>
      <div className='text_shpere'>
        {/* span tag className must be "tagcloud"  */}
        <span className='tagcloud'></span>
      </div>
    </>
  )
}

export default TextShpere
