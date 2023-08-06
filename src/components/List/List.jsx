import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTask from '../AddTask';
import Task from '../Task';
import Footer from '../Footer';

import './styles.scss';
import NoTask from '../NoTask';

uuidv4();

const List = () => {
  const [tasks, setTasks] = React.useState([]);

  const onClickAddTask = (todo) => {
    setTasks([...tasks, { id: uuidv4(), task: todo }]);
  };
  const onClickClearTasks = () => {
    setTasks([]);
  };

  const onClickDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const onClickEditTask = (id) => {
    setTasks(tasks.map((task) => task.id === id));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="list">
          <h1 className="list__title">ADD NEW TASK</h1>
          <div className="list__task-add">
            <AddTask onClickAddTask={onClickAddTask} />
          </div>
          <h2 className="list__title">YOUR TASKS</h2>
          <ul className="list__items">
            {tasks.length === 0 && <NoTask />}
            {tasks.map((task, index) => (
              <Task
                todo={task}
                key={index}
                onClickDeleteTask={onClickDeleteTask}
                onClickEditTask={onClickEditTask}
              />
            ))}
          </ul>
          {tasks.length >= 2 && (
            <div>
              <button className="list__button" onClick={onClickClearTasks}>
                CLEAR TASKS
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default List;
