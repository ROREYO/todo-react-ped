import React from 'react';

import AddTaskSvg from './addtask.svg';

import './styles.scss';

const AddTask = ({ onClickAddTask }) => {
  const [valueTask, setValueTask] = React.useState('');
  const inputRef = React.useRef()

  const onSubmitAddTask = (event) => {
    event.preventDefault();

    if (!valueTask) {
      return;
    }

    onClickAddTask(valueTask.replace(/\s+/g, ' ').replace(/^\s|\s$/g, ''));
    setValueTask('');
    inputRef.current.focus()
  };
  return (
    <form className="task__add" onSubmit={onSubmitAddTask}>
      <input
        ref={inputRef}
        type="text"
        className="task__add--input"
        placeholder="What task do you want add?"
        value={valueTask}
        onChange={(event) => setValueTask(event.target.value)}
      />
      <button className="task__add--button">
        <img src={AddTaskSvg} alt="Delete" />
      </button>
    </form>
  );
};

export default AddTask;
