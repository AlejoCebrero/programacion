import React, { useState } from 'react';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject: Task = {
        id: Date.now(),
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Agregar tareas</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className={task.completed ? 'completed' : ''}>{task.description}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
