import React, { useState } from 'react'
import './styles.css'

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    console.log("Add task clicked");
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: input,
      completed: false
    }
    setTasks([...tasks, newTask]);
    setInput("");

  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const handleTaggleTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) => 
      (task.id === id)
        ? { ...task, completed: !task.completed }
        : task,
      ),
    );
  }

  return (
    <>
      <div className='text-center p-4 space-y-4'>
        <h1 className='text-2xl items-center' > Todo List</h1>
        <p> Add tasks, mark them done, filter, and see counts.</p>
        <div className='space-x-2'>
          <input
            className='h-10 w-70 border border-black m-5 p-2'
            type="text"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='bg-blue-500 text-white w-20 h-10'
            onClick={() => handleAddTask()}
          >
            Add
          </button>
        </div>
        <div className='space-x-2'>
          <button className='bg-blue-500 text-white w-20 h-10'>All</button>
          <button className='bg-blue-500 text-white w-20 h-10'>Active</button>
          <button className='bg-blue-500 text-white w-23 h-10 border border-amber-600'>Completed</button>
        </div>
        <div className='text-center p-4 space-y-4 border border-black h-60 w-96 ml-auto mr-auto'>
          <ul >
            {tasks.map((task) =>
              <li key={task.id} >
                <span className='flex items-center space-x-10'>
                  <input 
                  type='checkbox'
                    checked={task.completed}
                    className='m-2'
                    onChange={() => handleTaggleTaskCompleted(task.id)}
                  />
                  <span
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  >
                    {task.title} - {task.completed ? "Done" : "Pending"}
                  </span>
                  <button className='bg-red-500 text-white w-25 h-7'
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </span>
              </li>)}
          </ul>
        </div>
        <div>
          <span>Total: {tasks.length}</span>
          <span>Completed: {tasks.length} </span>
        </div>
      </div>
    </>
  )
}

export default TodoApp