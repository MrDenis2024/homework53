import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

const App = () => {


  return (
    <div className="main">
      <AddTaskForm/>
      <div className='tasks'>
        <Task task={''}/>
      </div>
    </div>
  );
};

export default App;
