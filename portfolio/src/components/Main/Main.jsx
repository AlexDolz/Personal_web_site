import React from 'react';
import s from './Main.module.css';
import WelcomeText from '../WelcomeText/WelcomeText';
import main_img from './media/main_img6.png';
import { FcVideoProjector } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Main = ({ isDarkMode }) => {
  return (
    <main className={s.main}>
      <div className={s.main__img__wrapper}>
        <img
          src={main_img}
          alt='abstraction'
          className={s.main__img}
          style={{
            filter: isDarkMode
              ? 'invert(53%) sepia(10%) saturate(335%) hue-rotate(48deg) brightness(140%) contrast(63%)'
              : '',
          }}
        />
      </div>
      <div className={s.about__wrapper}>
        <WelcomeText isDarkMode={isDarkMode} />
        <p className={s.about__text}>
          My name is
          <span className={s.about__text__span}> Aleksej Dolznikov</span>, I'm a
          front-end web developer with a love for turning ideas into interactive
          and visually appealing web experiences, based in Frankfurt am Main,
          Germany.
        </p>
        <div className={s.about__submenu}>
          <NavLink to={'/projects'}>
            <div className={s.projects__wrapper}>
              <FcVideoProjector className={s.projects__icon} />
              <p
                className={s.projects__text}
                style={{
                  color: isDarkMode
                    ? 'var(--light-color)'
                    : 'var(--dark-color)',
                }}
              >
                See my projects
              </p>
            </div>
          </NavLink>
          <NavLink to={'/about'}>
            <div className={s.about__me__wrapper}>
              <FcAbout className={s.about__me__icon} />
              <p
                className={s.about__me__text}
                style={{
                  color: isDarkMode
                    ? 'var(--light-color)'
                    : 'var(--dark-color)',
                }}
              >
                More about me
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Main;
