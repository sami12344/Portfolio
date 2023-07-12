import React, { useEffect, useState } from 'react'
import p from '../styles/Progress.module.css'

import Tilt from 'react-parallax-tilt'

const Progress = ({text, end}) => {
    const values = {
      start: 0,
      end,
      speed: 100,
    }
    const [value, setValue] = useState(0)

    useEffect(() => {
      if (value < values.end) {
        setTimeout(() => setValue((prev) => (prev += 2)), values.speed)
      }
    }, [value])
  return (
   
      <div className={p.card}> <Tilt
      className={p.box}
      tiltAngleYInitial={0}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor='#000'
      glarePosition='all'
      glareBorderRadius='10px'
    >
        <div className={p.ntg}>
          <div>
            <div className={p.percent}>
              <svg>
                <circle cx='70' cy='70' r='70'></circle>
                <circle
                  cx='70'
                  cy='70'
                  r='70'
                  style={{
                    strokeDashoffset: `${440 - (440 * value) / 100}px`,
                  }}
                ></circle>
              </svg>
              <div className={p.number}>
                <h2>
                  {value}
                  <span>%</span>
                </h2>
              </div>
            </div>
          </div>
        </div>    </Tilt>
        <div className={p.text}>{text}</div>
      </div>

  )
}

export default Progress