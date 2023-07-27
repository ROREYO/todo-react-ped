import React from 'react';

import DoneSvg from './done.svg';
import EditSvg from './edit.svg';
import DeleteSvg from './delete.svg';

import './styles.scss';

const Task = () => {
  return (
    <div className="task">
      <input
        className="task__text"
        value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur quod ut eligendi
        quia nihil nam rerum suscipit, facere commodi quos velit dicta fuga modi, provident optio
        accusamus veniam corrupti?"
        disabled
      />

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
