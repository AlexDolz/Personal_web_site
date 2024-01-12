import React from 'react';
import s from './About.module.css';
import about_img from './media/about_img.png';
import about_img2 from './media/about_img2.png';
import resume_eng from './media/Resume eng.pdf';
import resume_de from './media/Resume de.pdf';

const About = ({ isDarkMode }) => {
  return (
    <div>
      <div className='container'>
        <div className={s.about__wrapper}>
          <div className={s.about__text__wrapper}>
            <div
              className={s.vertical__line}
              style={{ borderLeft: isDarkMode ? '4.5px solid #cddac2' : '' }}
            >
              <p className={s.about__text}>
                Hey, my name is
                <span className={s.about__text__highlight}>
                  {' '}
                  Aleksej Dolznikov{' '}
                </span>
                , I'm a front-end web developer. My journey in the world of web
                development began with self-directed learning, and as I dived
                into this fascinating arena, I discovered my passion for
                bringing people's ideas to life through web development. This
                discovery has evolved into a fulfilling professional career.
                <br />
                <br />
                The tech industry is ever-changing, and I thrive on staying
                ahead of the curve. I am always on the lookout for opportunities
                to expand my skill set, whether it's by attending workshops,
                taking online courses, or contributing to open-source projects.
                Continuous learning is not just a part of my job - it's a
                passion that drives me to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
          <div className={s.about__img__wrapper}>
            <img src={about_img} alt='coding laptop' className={s.about__img} />
          </div>
        </div>
        <div className={s.about__btn__wrapper}>
          <a href={resume_eng} target='_blank' rel='noopener noreferrer'>
            <button className={s.about__btn}>View resume ENG</button>
          </a>
          <a href={resume_de} target='_blank' rel='noopener noreferrer'>
            <button className={s.about__btn}>View resume DE</button>
          </a>
        </div>
      </div>
      <div className={s.about__img__wrapper2}>
        <img src={about_img2} alt='coding guy' className={s.about__img2} />
      </div>
    </div>
  );
};

export default About;
