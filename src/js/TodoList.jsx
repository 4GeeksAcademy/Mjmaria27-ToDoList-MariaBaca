import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
    style={{
      maxWidth: 400,
      margin: '30px auto',
      fontFamily: "'Montserrat', sans-serif",

    }}
  > 
    <h2>TO DO LIST</h2>
      <input
        type="text"
        placeholder="Añadir tarea y presiona Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '1rem',
          boxSizing: 'border-box',
        }}
        autoFocus
      />

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {tasks.map((task, index) => (
          <TaskItem key={index} text={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>

      <p style={{ color: '#777', fontStyle: 'italic', textAlign: 'left', marginTop: 20 }}>
        {tasks.length === 0
          ? 'No hay tareas, añadir tareas'
          : `${tasks.length} ${tasks.length === 1 ? 'item' : 'items'} left`}
      </p>
    </div>
  );
}

function TaskItem({ text, onDelete }) {
  const [hover, setHover] = React.useState(false);

  return (
    <li
      style={{
        position: 'relative',
        padding: '10px 40px 10px 10px',
        borderBottom: '1px solid #ddd',
        cursor: 'default',
        userSelect: 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
      {hover && (
        <button
          onClick={onDelete}
          title="Eliminar tarea"
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            color: '#cc0000',
            cursor: 'pointer',
          }}
        >
          ×
        </button>
      )}
    </li>
  );
}
