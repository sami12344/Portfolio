import React from 'react'
import Tilt from 'react-parallax-tilt'
import a from '../styles/AboutStyles.module.css'
import HeadTitle from './HeadTitle'
const AboutSection = () => {
  return (
    <div className={a.about_container}>
      <div className={a.main_container}>
        <div className={a.about_title}>
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>

          <span>m</span>
          <span>e</span>
        </div>
        <div className={a.container}>
          <div className={a.img_container}>
            <img src='/heroImage.png' alt='' className={a.about_img} />
          </div>
          <div className={a.desc_container}>
            <Tilt
              className={a.tilt}
              tiltAngleYInitial={5}
              glareEnable={true}
              glareMaxOpacity={0.7}
              glareColor='#ffffff'
              glarePosition='all'
              glareBorderRadius='16px'
            >
              <div className={a.glass_container}>
                <div className={a.desc_title_container}>
                  <h3 className={a.desc_title}>
                    
                    <HeadTitle text={`Me Myself and I`} />
                  </h3>
                </div>
                <div className={a.text_container}>
                  <p className={a.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Donec orci congue in
                    magnis sit amet. Imperdiet elementum venenatis leo tortor
                    feugiat justo non rhoncus. Neque euismod nunc turpis est a
                    sapien fermentum risus ut.
                  </p>

                  <p className={a.paragraph}>
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

                  <p className={a.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Donec orci congue in
                    magnis sit amet. Imperdiet elementum venenatis leo tortor
                    feugiat justo non{' '}
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
