import React from 'react';

interface Props {
  task: string;
}
const Task: React.FC<Props> = ({task}) => {
  return (
    <div className='task'>
      <p>{task}</p>
      <button className='btn taskBtn'>Удалить</button>
    </div>
  );
};

export default Task;