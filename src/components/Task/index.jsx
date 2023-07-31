import React from 'react';

import DoneSvg from './done.svg';
import EditSvg from './edit.svg';
import DeleteSvg from './delete.svg';

import './styles.scss';

const Task = ({ todo }) => {
  return (
    <div className="task">
      <input className="task__text" value={todo.task} disabled />

      <div className="task__buttons">
        <button className="task__button">
          <img src={DoneSvg} alt="Done" />
        </button>
        <button className="task__button">
          <img src={EditSvg} alt="Edit" />
        </button>
        <button className="task__button">
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
