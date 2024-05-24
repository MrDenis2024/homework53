import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import React, {ChangeEvent, useState} from 'react';


const App = () => {
  const [tasks, setTasks] = useState([
    {task: 'Посмотреть видео урока', id: '1'},
    {task: 'Сделать домашнее задание', id: '2'},
    {task: 'Сходить в магазин', id: '3'},
  ]);
  const [currentTask, setCurrentTask] = useState('');

  const taskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  const addTask = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
      const newTask = {
        id: Math.random().toString(),
        task: currentTask.trim()
      };
      setTasks((prevState) => {
        return [...prevState, newTask];
      });
      setCurrentTask('');
  };


  const removeTask = (id: string) => {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="main">
      <AddTaskForm onCurrentTask={currentTask} onTaskChange={(event) => taskChange(event)} onNewTask={(event) => addTask(event)} />
      <div className='tasks'>
        {tasks.map((task) => (
          <Task key={task.id} textTask={task.task} onRemove={() => removeTask(task.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;
