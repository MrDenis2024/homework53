import React from 'react';

interface Props {
  textTask: string;
  onRemove: React.MouseEventHandler;
}
const Task: React.FC<Props> = ({textTask, onRemove}) => {
  return (
    <div className='task'>
      <p>{textTask}</p>
      <button className='btn taskBtn' onClick={onRemove}>Удалить</button>
    </div>
  );
};

export default Task;