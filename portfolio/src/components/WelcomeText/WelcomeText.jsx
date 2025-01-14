import React, { useEffect, useState } from 'react';
import s from './WelcomeText.module.css';
import styled, { keyframes } from 'styled-components';

const drawAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
`;

const AnimatedH1 = styled.h1`
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  padding-left: 4px;
  white-space: nowrap;
  letter-spacing: 0.02em;
  margin: 0 auto;
  animation: ${drawAnimation} 1s linear 1s both;
  font-weight: 400;

  @media (min-width: 2635px) {
    font-size: 100px;
  }
  @media (min-width: 3105px) {
    font-size: 120px;
  }
  @media (min-width: 3680px) {
    font-size: 140px;
  }
  @media (max-width: 980px) {
    font-size: 70px;
  }
  @media (max-width: 870px) {
    font-size: 65px;
  }
  @media (max-width: 766px) {
    font-size: 60px;
  }
  @media (max-width: 690px) {
    font-size: 50px;
  }
  @media (max-width: 616px) {
    font-size: 45px;
  }
  @media (max-width: 546px) {
    font-size: 42px;
  }
  @media (max-width: 510px) {
    font-size: 40px;
  }
  @media (max-width: 455px) {
    font-size: 36px;
  }
  @media (max-width: 410px) {
    font-size: 32px;
  }
  @media (max-width: 350px) {
    font-size: 30px;
  }
`;

const WelcomeText = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={s.text__wrapper}
      style={{
        textShadow: isDarkMode
          ? '-2.5px 0px 3px var(--dark-theme-shadows)'
          : '-2.5px 0px 3px var(--light-theme-shadows)',
      }}
    >
      <AnimatedH1>{isVisible && 'Welcome'}</AnimatedH1>
    </div>
  );
};

export default WelcomeText;
