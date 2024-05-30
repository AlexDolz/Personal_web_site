import React, { useState } from 'react';
import s from './Projects.module.css';
import omnifood from './media/omnifood.png';
import forkify from './media/forkify_recipe_app.png';
import online_shop from './media/online_shop.png';
import arcade_game from './media/arcade_game.png';
import portfolio_example from './media/portfolio_example.png';
import bankist_website from './media/bankist_website.png';
import { GiBottomRight3DArrow } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Omnifood website',
    description:
      'Omnifood - never cook again! Food delivery services. A website that helps people save time on cooking at home.',
    link: 'https://alexdolz.github.io/Omnifood-project/',
    githubLink: 'https://github.com/AlexDolz/Omnifood-project',
    imgSrc: omnifood,
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Forkify recipe app',
    description:
      'Forkify - search over 1,000,000 recipes! Discover a world of culinary delights, add your own, and share culinary creations with ease!',
    link: 'https://main--forkify-app-alex.netlify.app/',
    githubLink: 'https://github.com/AlexDolz/Forkify_app-JS',
    imgSrc: forkify,
    technologies: ['HTML', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Portfolio sample',
    description:
      "The portfolio design incorporates a clean and modern layout, making it easy for visitors to navigate and explore John's accomplishments.",
    link: 'https://alexdolz.github.io/Portfolio_ex_REACT/',
    githubLink: 'https://github.com/AlexDolz/Portfolio_ex_REACT',
    imgSrc: portfolio_example,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    libraries: ['React', 'React-dom', 'React-router-dom'],
  },
  {
    title: 'Bankist website sample',
    description:
      'When banking meets minimalist. Bankist website - a simpler banking experience for a simpler life.',
    link: 'https://alexdolz.github.io/Bankist_website_JS/',
    githubLink: 'https://github.com/AlexDolz/Bankist_website_JS',
    imgSrc: bankist_website,
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Arcade game',
    description:
      'Arcade game - run across the street. The game was developed based on arcade games from the 80-90s.',
    link: 'https://alexdolz.github.io/Arcade_game-JS/',
    githubLink: 'https://github.com/AlexDolz/Arcade_game-JS',
    imgSrc: arcade_game,
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Online-shop sample',
    description:
      'Online store - Food online. Imitation of an online store. Website helping people buy food without leaving their homes.',
    link: 'https://alexdolz.github.io/Online_store-JS/',
    githubLink: 'https://github.com/AlexDolz/Online_store-JS',
    imgSrc: online_shop,
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = ({ isDarkMode }) => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: isDarkMode ? 'var(--dark-theme)' : 'var(--light-theme)',
  };
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleProjectHover = (index, isEntering) => {
    setHoveredProjectIndex(isEntering ? index : null);
    const isMobile = window.matchMedia('(any-pointer: coarse)').matches;
    setOverlayVisible(isEntering && isMobile);
  };

  return (
    <div className={s.projects__wrapper}>
      <div className={s.projects__title__container}>
        <h1
          className={s.projects__title}
          style={{
            textShadow: isDarkMode
              ? '-5px -3px 6px var(--dark-theme-shadows)'
              : '-5px -3px 6px var(--light-theme-shadows)',
          }}
        >
          Projects
        </h1>
      </div>
      <AnimatePresence>
        <div className={s.projects__container}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className={`${s.project__item__container} ${
                isDarkMode ? s.darkMode : ''
              }`}
              onMouseEnter={() => handleProjectHover(index, true)}
              onMouseLeave={() => handleProjectHover(index, false)}
            >
              <div className={s.project__img__item__wrapper}>
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className={s.project__img__item}
                />
              </div>
              <div className={s.project__item__texts}>
                <h2
                  className={s.project__item__title}
                  style={{
                    color: isDarkMode ? 'var(--light-color)' : 'black',
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className={s.project__item__description}
                  style={{
                    color: isDarkMode
                      ? 'var(--secondary-light-color)'
                      : '#444444',
                  }}
                >
                  {project.description}
                </p>
                <div className={s.links__wrapper}>
                  <div className={s.link__wrapper}>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={s.website__link}
                    >
                      View website
                      <GiBottomRight3DArrow className={s.link__arrow} />
                    </a>
                  </div>
                  <div className={s.link__wrapper}>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={s.website__link}
                    >
                      Link on GitHub
                      <GiBottomRight3DArrow className={s.link__arrow} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      {hoveredProjectIndex !== null && (
        <div className={s.projects__magnifier__container}>
          {isOverlayVisible && (
            <div
              style={overlayStyle}
              onClick={() => setOverlayVisible(false)}
            />
          )}
          <motion.div
            key={`magnifier-${hoveredProjectIndex}`}
            className={s.projects__magnifier__wrapper}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className={s.img__magnifier__wrapper}>
              <img
                src={projectsData[hoveredProjectIndex].imgSrc}
                alt='magnified'
                className={s.magnified__img}
              />
            </div>
            <div className={s.projects__technologies__libraries}>
              <div className={s.projects__technologies__wrapper}>
                {projectsData[hoveredProjectIndex].technologies.map(
                  (tech, index) => (
                    <div className={s.projects__technology} key={index}>
                      {tech === 'HTML' && (
                        <p className={s.technology__text}>{tech}</p>
                      )}
                      {tech === 'CSS' && (
                        <p className={s.technology__text}>{tech}</p>
                      )}
                      {tech === 'SCSS' && (
                        <p className={s.technology__text}>{tech}</p>
                      )}
                      {tech === 'JavaScript' && (
                        <p className={s.technology__text}>{tech}</p>
                      )}
                    </div>
                  )
                )}
              </div>
              <div className={s.projects__libraries__wrapper}>
                {projectsData[hoveredProjectIndex].libraries &&
                  projectsData[hoveredProjectIndex].libraries.map(
                    (libr, index) => (
                      <div className={s.projects__library} key={index}>
                        {libr === 'React' && (
                          <p className={s.library__text}>{libr}</p>
                        )}
                        {libr === 'React-dom' && (
                          <p className={s.library__text}>{libr}</p>
                        )}
                        {libr === 'React-router-dom' && (
                          <p className={s.library__text}>{libr}</p>
                        )}
                      </div>
                    )
                  )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
