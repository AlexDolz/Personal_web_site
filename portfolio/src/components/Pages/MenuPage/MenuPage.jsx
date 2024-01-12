import React from 'react';
import s from './MenuPage.module.css';
import Menu from '../../Menu/Menu';

const MenuPage = ({ isDarkMode }) => {
  return (
    <div className={s.menu__page}>
      <Menu isDarkMode={isDarkMode} />
    </div>
  );
};

export default MenuPage;
