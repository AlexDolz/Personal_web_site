import React from 'react';
import s from './AboutPage.module.css';
import About from '../../About/About';

const AboutPage = ({ isDarkMode }) => {
  return (
    <div className={s.about__page}>
      <About isDarkMode={isDarkMode} />
    </div>
  );
};

export default AboutPage;
