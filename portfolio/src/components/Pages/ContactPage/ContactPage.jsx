import React from 'react';
import s from './ContactPage.module.css';
import Contact from '../../Contact/Contact';

const ContactPage = ({ isDarkMode }) => {
  return (
    <div className={s.contact__page}>
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
};

export default ContactPage;
