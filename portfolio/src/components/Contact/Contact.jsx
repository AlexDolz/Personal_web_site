import React from 'react';
import s from './Contact.module.css';
import call_me from './media/call_me.png';
import contact_me from './media/contact_me.png';
import contact2 from './media/contact2.png';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { LiaViber } from 'react-icons/lia';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const Contact = ({ isDarkMode }) => {
  const openWhatsApp = event => {
    event.preventDefault();
    const phoneNumber = +4915163205807;
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
  };

  const openViber = event => {
    event.preventDefault();
    const phoneNumber = +4915163205807;

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.open(`viber://chat?number=${phoneNumber}`);
    } else {
      alert('Please open Viber on your mobile device.');
      window.open(`https://www.viber.com`);
    }
  };

  const openTelegram = event => {
    event.preventDefault();
    const username = 'telalexx';
    window.open(`https://t.me/${username}`);
  };

  const githubLink = 'https://github.com/AlexDolz';
  const linkedInLink =
    'https://www.linkedin.com/in/aleksej-dolznikov-58a300276';

  return (
    <div>
      <div className={s.contact__main__wrapper}>
        <div className={s.contact__img2__wrapper}>
          <img
            src={contact_me}
            alt='contact_me_text'
            className={s.contact__img2}
          />
        </div>
        <div className={s.contact__wrapper}>
          <div className={s.contact__icon__text__wrapper}>
            <a className={s.email} href='mailto:aleksejdolznikov3@gmail.com'>
              <MdEmail
                className={`${s.contact__icon} ${s.contact__icon__email}`}
                style={{
                  fill: isDarkMode ? 'var(--light-color)' : 'var(--dark-color)',
                }}
              />
              <p
                className={s.contact__text}
                style={{ color: isDarkMode ? '#cddac2' : 'black' }}
              >
                aleksejdolznikov3@gmail.com
              </p>
            </a>
          </div>
          <div className={s.contact__icon__text__wrapper}>
            <button onClick={openWhatsApp} className={s.contact__button}>
              <BiLogoWhatsapp
                className={`${s.contact__icon} ${s.contact__icon__whatsapp}`}
              />
            </button>
            <button onClick={openViber} className={s.contact__button}>
              <LiaViber
                className={`${s.contact__icon} ${s.contact__icon__viber}`}
              />
            </button>
            <p
              className={s.contact__text}
              style={{ color: isDarkMode ? '#cddac2' : 'black' }}
            >
              + 49 1516 320 5807
            </p>
          </div>
          <div className={s.contact__icon__text__wrapper}>
            <button onClick={openTelegram} className={s.contact__button}>
              <BiLogoTelegram
                className={`${s.contact__icon} ${s.contact__icon__telegram}`}
              />
            </button>
            <p
              className={s.contact__text}
              style={{ color: isDarkMode ? '#cddac2' : 'black' }}
            >
              @ telalexx
            </p>
          </div>
          <div className={s.contact__icon__wrapper}>
            <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className={s.social__link}
            >
              <BiLogoGithub
                className={`${s.contact__icon} ${s.contact__icon__github}`}
                style={{ fill: isDarkMode ? '#cddac2' : 'black' }}
              />
            </a>
            <a
              href={linkedInLink}
              target='_blank'
              rel='noopener noreferrer'
              className={s.social__link}
            >
              <BiLogoLinkedinSquare
                className={`${s.contact__icon} ${s.contact__icon__linkedin} `}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={s.contact__img__wrapper}>
        <img src={call_me} alt='call_me_img' className={s.contact__img} />
      </div>
      <div className={s.contact__img3__wrapper}>
        <img src={contact2} alt='contacts icons' className={s.contact__img3} />
      </div>
    </div>
  );
};

export default Contact;
