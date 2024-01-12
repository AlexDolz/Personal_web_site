import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import MenuPage from './components/Pages/MenuPage/MenuPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import ProjectsPage from './components/Pages/ProjectsPage/ProjectsPage';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    document.body.style.backgroundImage =
      rootStyles.getPropertyValue('--light-theme');
    document.body.style.color = rootStyles.getPropertyValue('--dark-color');
  }, []);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    document.body.classList.toggle('darkMode', isDarkMode);
    document.body.style.backgroundImage = isDarkMode
      ? rootStyles.getPropertyValue('--dark-theme')
      : rootStyles.getPropertyValue('--light-theme');
    document.body.style.color = isDarkMode
      ? rootStyles.getPropertyValue('--light-color')
      : rootStyles.getPropertyValue('--dark-color');

    const headerIcons = document.querySelectorAll(
      '.Header_menu__social__icon__oWHvW'
    );
    headerIcons.forEach(icon => {
      icon.style.color = isDarkMode
        ? 'var(--light-color)'
        : 'var(--dark-color)';
    });

    const NameH2 = document.querySelector('h2');
    NameH2.style.color = isDarkMode ? '#0ea49d' : '#444444';

    const telNumber = document.querySelector('.Header_menu__phone__nr__cBFu3');
    telNumber.style.color = isDarkMode
      ? 'var(--secondary-light-color)'
      : '#444444';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='main__container'>
      <div className='container'>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<HomePage isDarkMode={isDarkMode} />} />
          <Route
            path='/about'
            element={<AboutPage isDarkMode={isDarkMode} />}
          />
          <Route path='/menu' element={<MenuPage isDarkMode={isDarkMode} />} />
          <Route
            path='/contact'
            element={<ContactPage isDarkMode={isDarkMode} />}
          />
          <Route
            path='/projects'
            element={<ProjectsPage isDarkMode={isDarkMode} />}
          />
        </Routes>
      </main>
      <Footer isHomepage={isHomepage} />
    </div>
  );
};

export default App;
