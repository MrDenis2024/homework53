const AddTaskForm = () => {

  return (
    <form className='taskForm'>
      <input type="text" className='inputTask' placeholder='Введите новую задачу' />
      <button type='submit' className='formBtn'>Добавить</button>
    </form>
  );
};

export default AddTaskForm;