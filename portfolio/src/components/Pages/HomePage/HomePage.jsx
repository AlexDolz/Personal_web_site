import React from 'react';
import s from './HomePage.module.css';
import Main from '../../Main/Main';

const HomePage = ({ isDarkMode }) => {
  return (
    <div>
      <Main isDarkMode={isDarkMode} />
    </div>
  );
};

export default HomePage;
