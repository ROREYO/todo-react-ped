import AddTask from '../AddTask';
import Task from '../Task';
import Footer from '../Footer';

import './styles.scss';

const List = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="list">
          <h1 className="list__title">ADD NEW TASK</h1>
          <div className="list__task-add">
            <AddTask />
          </div>
          <h2 className="list__title">YOUR TASKS</h2>
          <ul className="list__items">
            <Task />
          </ul>
          <div>
            <button className="list__button">CLEAR TASKS</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default List;
