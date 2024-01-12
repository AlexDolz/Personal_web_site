import React from 'react';
import s from './Menu.module.css';
import menu_img from './media/menu_img.png';
import { NavLink } from 'react-router-dom';

const Menu = ({ isDarkMode }) => {
  const changeColorByTheme = {
    color: isDarkMode ? 'var(--light-color)' : 'var(--dark-color)',
  };
  return (
    <div>
      <div className={s.menu__img__wrapper}>
        <img src={menu_img} alt='abstraction' className={s.menu__img} />
      </div>
      <div className={s.menu__wrapper}>
        <ul className={s.menu__list}>
          <li className={s.menu__list__item}>
            <NavLink to={'/'}>
              <span className={s.box} style={changeColorByTheme}>
                Home
              </span>
            </NavLink>
          </li>
          <li className={s.menu__list__item}>
            <NavLink to={'/projects'}>
              <span className={s.box} style={changeColorByTheme}>
                Projects
              </span>
            </NavLink>
          </li>
          <li className={s.menu__list__item}>
            <NavLink to={'/about'}>
              <span className={s.box} style={changeColorByTheme}>
                About
              </span>
            </NavLink>
          </li>
          <li className={s.menu__list__item}>
            <NavLink to={'/contact'}>
              <span className={s.box} style={changeColorByTheme}>
                Contacts
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
