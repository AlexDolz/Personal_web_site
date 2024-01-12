import s from './Header.module.css';
import header_logo from './media/header_logo_D.png';
import personal_img from './media/hd-face-cartoon.jpg';
import { BsMoonStarsFill } from 'react-icons/bs';
import { PiPhoneOutgoingDuotone } from 'react-icons/pi';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ImCross } from 'react-icons/im';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isCross, setIsCross] = useState(false);
  const location = useLocation();

  const handleIconClick = () => {
    setIsCross(prevIsCross => !prevIsCross);
  };

  const springProps = useSpring({
    transform: `rotate(${isCross ? 90 : 0}deg)`,
    config: { duration: 150 },
  });
  const springProps2 = useSpring({
    transform: `rotate(${isDarkMode ? 90 : 0}deg)`,
    config: { duration: 150 },
  });

  useEffect(() => {
    if (location.pathname !== '/menu') {
      setIsCross(false);
    }
  }, [location.pathname]);

  const githubLink = 'https://github.com/AlexDolz';
  const linkedInLink =
    'https://www.linkedin.com/in/aleksej-dolznikov-58a300276';

  return (
    <header className={`${s.header} ${isDarkMode ? s.darkMode : ''}`}>
      <div className={s.logo__wrapper}>
        <NavLink to={'/'}>
          <div className={s.personal__img__wrapper}>
            <img
              src={personal_img}
              alt='personal_img'
              className={s.personal__img}
            />
          </div>
        </NavLink>
        <NavLink to={'/'}>
          <div className={s.header__logo__wrapper}>
            <h3>Aleksej</h3>
            <div className={s.name__wrapper}>
              <img
                src={header_logo}
                alt='logo'
                className={s.header__logo}
                loading='lazy'
              />
              <h2>olznikov</h2>
            </div>
          </div>
        </NavLink>
        <div className={s.menu__phone__wrapper}>
          <PiPhoneOutgoingDuotone className={s.menu__phone__icon} />
          <p className={s.menu__phone__nr}>+49 1516 320 5807</p>
        </div>
      </div>
      <div className={s.menu__wrapper}>
        <a
          className={s.menu__social__link}
          href={githubLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithubAlt className={s.menu__social__icon} />
        </a>
        <a
          className={s.menu__social__link}
          href={linkedInLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedinIn className={s.menu__social__icon} />
        </a>
        <animated.div style={springProps2}>
          {isDarkMode ? (
            <HiSun
              title='Switch to light theme'
              className={s.menu__mode__icon}
              onClick={toggleDarkMode}
              style={{ color: isDarkMode ? '#cddac2' : '' }}
            />
          ) : (
            <BsMoonStarsFill
              title='Switch to dark theme'
              className={s.menu__mode__icon}
              onClick={toggleDarkMode}
            />
          )}
        </animated.div>
        <animated.div
          className={s.menu__icon}
          style={springProps}
          onClick={handleIconClick}
        >
          <NavLink
            to={isCross ? '/' : '/menu'}
            style={{
              color: isCross ? '#0ea49d' : isDarkMode ? '#cddac2' : '#444444',
            }}
          >
            {isCross ? <ImCross /> : <BsGrid3X3Gap />}
          </NavLink>
        </animated.div>
      </div>
    </header>
  );
};

export default Header;
