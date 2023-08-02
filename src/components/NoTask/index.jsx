import React from 'react';

import NoTaskSvg from './NoTask.svg'

import './styles.scss';

const NoTask = () => {
  return (
    <div className="no-task">
      <img className='no-task__img' src={NoTaskSvg} alt="" />
      <h3 className='no-task__text'>All your tasks will be here. Add it soon!</h3>
    </div>
  );
};

export default NoTask;
