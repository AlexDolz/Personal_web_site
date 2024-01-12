import React from 'react';
import s from './Footer.module.css';

const Footer = ({ isHomepage }) => {
  return (
    <div
      className={
        isHomepage ? `${s.footer__wrapper__homepage}` : `${s.footer__wrapper}`
      }
    >
      <p className={s.footer__text}>
        Designed and developed by Aleksej Dolznikov | 2023{' '}
        <span className={s.footer__r}>&#169;</span>
      </p>
    </div>
  );
};

export default Footer;
