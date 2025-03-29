import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './redux/todosSlice';
import { useState } from 'react';

const App = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => dispatch(removeTask(index))} >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
