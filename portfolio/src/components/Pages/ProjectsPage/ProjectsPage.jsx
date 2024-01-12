import React from 'react';
import s from './ProjectsPage.module.css';
import Projects from '../../Projects/Projects';

const ProjectsPage = ({ isDarkMode }) => {
  return (
    <div className={s.projects__page}>
      <Projects isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProjectsPage;
