import AddTaskSvg from './addtask.svg';

import './styles.scss';

const AddTask = () => {
  return (
    <div className="task__add">
      <input className="task__add--input" placeholder="What task do you want add?" />
      <button className="task__add--button">
        <img src={AddTaskSvg} alt="Delete" />
      </button>
    </div>
  );
};

export default AddTask;
