import React from 'react';

import DoneSvg from './done.svg';
import EditSvg from './edit.svg';
import DeleteSvg from './delete.svg';

import './styles.scss';

const Task = ({ todo, onClickDeleteTask }) => {
  const [isComplited, setIsComplited] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  const inputRef = React.useRef();

  const onClickDoneTask = () => {
    setIsComplited((current) => !current);
  };
  const onsClickEditTask = () => {
    setIsEditing((current) => !current);
  };

  return (
    <div className="task">
      <input
        ref={inputRef}
        type="text"
        className={isComplited ? 'task__text done' : 'task__text'}
        value={todo.task}
        onChange={(event) => event.target.value}
        disabled={!isEditing}
      />

      <div className="task__buttons">
        <button className="task__button" onClick={onClickDoneTask}>
          <img src={DoneSvg} alt="Done" />
        </button>
        <button className="task__button" onClick={onsClickEditTask}>
          <img src={EditSvg} alt="Edit" />
        </button>
        <button className="task__button" onClick={() => onClickDeleteTask(todo.id)}>
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
