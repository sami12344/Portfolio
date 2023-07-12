import React from 'react'
import Tilt from 'react-parallax-tilt'

import s from '../styles/SkillStyle.module.css'

import dynamic from 'next/dynamic'
import HeadTitle from './HeadTitle'
const TextShpere = dynamic(() => import('./TextSphere'), { ssr: false })
const SkillSection = () => {
  return (
    <div className={s.skill_container}>
      <div className={s.main_container}>
        <div className={s.skill_title}>
          Skills
        </div>
        <div className={s.container}>
          <div className={s.desc_container}>
            <Tilt
              className={s.tilt}
              tiltAngleXInitial={10}
              glareEnable={true}
              glareMaxOpacity={0.7}
              glareColor='#ffffff'
              glarePosition='all'
              glareBorderRadius='16px'
            >
              <div className={s.glass_container}>
                <div className={s.desc_title_container}>
                  <h3 className={s.desc_title}>
                    {' '}
                    <HeadTitle text={`Skills`} className={s.title} />{' '}
                    <HeadTitle text={` & `} className={s.title} />{' '}
                    <HeadTitle text={`Experience`} className={s.title} />
                  </h3>
                </div>
                <div className={s.text_container}>
                  <p className={s.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Donec orci congue in
                    magnis sit amet. Imperdiet elementum venenatis leo tortor
                    feugiat justo non rhoncus. Neque euismod nunc turpis est a
                    sapien fermentum risus ut.
                  </p>

                  <p className={s.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Donec orci congue in
                    magnis sit amet. Imperdiet elementum venenatis leo tortor
                    feugiat justo non rhoncus. Neque euismod nunc turpis est a
                    sapien fermentum risus ut. Semper purus in sagittis eget.
                    Augue semper condimentum Lorem ipsum dolor sit amet
                    consectetur. Donec orci congue in magnis sit amet. Imperdiet
                    elementum venenatis leo tortor feugiat justo non rhoncus.
                    Neque euismod nunc turpis est a sapien fermentum risus ut.
                    Semper purus in sagittis eget. Augue semper condimentum
                  </p>

                  <p className={s.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Donec orci congue in
                    magnis sit amet. Imperdiet elementum venenatis leo tortor
                    feugiat justo non{' '}
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
          <div className={s.tagcloud}>
            <TextShpere />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection