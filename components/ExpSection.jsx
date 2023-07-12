import React from 'react'
import Tilt from 'react-parallax-tilt'
import dynamic from 'next/dynamic'
import s from '../styles/Exp.module.css'
import Progress from './Progress'
const ProgressBar = dynamic(() => import('./ProgressBar'), { ssr: false })
const SkillSection = () => {
  return (
    <div className={s.skill_container}>
      <div className={s.main_container}>
        <div className={s.skill_title}>
          <span>E</span>
          <span>x</span>
          <span>p</span>
        </div>
        <div className={s.container}>
          <div className={s.desc_container}>
            <Tilt
              className={s.tilt}
              tiltAngleYInitial={0.1}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor='#eee'
              glarePosition='all'
              glareBorderRadius='1px'
            >
              <div className={s.progressBar}>
                <ProgressBar title={`Front-end`} color={`green`} value={90} />
                <ProgressBar title={`Back-end`} color={`yellow`} value={75} />
                <ProgressBar title={`Database`} color={`red`} value={56} />
                <ProgressBar title={`UI /UX`} color={`#D26CD5`} value={95} />
              </div>
            </Tilt>
          </div>
          <div className={s.circular_progressbar_container}>
            <Progress text={`communication`} end={95} />
            <Progress text={`Team Work`} end={55} />
            <Progress text={`Prject Management`} end={86} />
            <Progress text={`Creativity`} end={60} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
