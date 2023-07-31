import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTask from '../AddTask';
import Task from '../Task';
import Footer from '../Footer';

import './styles.scss';

uuidv4();

const List = () => {
  const [tasks, setTasks] = React.useState([]);

  const onClickAddTask = (todo) => {
    setTasks([...tasks, { id: uuidv4(), task: todo, isComplited: false, isEditing: false }]);
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
            {tasks.length === 0 && <div>test</div>}
            {tasks.map((task, index) => (
              <Task todo={task} key={index} />
            ))}
          </ul>
          {tasks.length >= 2 && (
            <div>
              <button className="list__button">CLEAR TASKS</button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default List;
