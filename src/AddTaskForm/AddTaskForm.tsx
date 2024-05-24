import React from 'react';

interface Props {
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  onNewTask: React.ChangeEventHandler<HTMLFormElement>;
  onCurrentTask: string;
}

const AddTaskForm: React.FC<Props> = ({onCurrentTask, onTaskChange, onNewTask}) => {

  return (
    <form className='taskForm' onSubmit={onNewTask} >
      <input type="text" className='inputTask' placeholder='Введите новую задачу' name='task' value={onCurrentTask} onChange={onTaskChange} />
      <button type='submit' className='btn formBtn'>Добавить</button>
    </form>
  );
};

export default AddTaskForm;