import React, { useState, useCallback } from 'react';

const initialTasks = [
  { id: 1, name: 'Oil Change', status: 'Pending' },
  { id: 2, name: 'Filter Replacement', status: 'Completed' },
  { id: 3, name: 'Belt Adjustment', status: 'Pending' },
  { id: 4, name: 'Calibration', status: 'Completed' },
];

const MaintenanceSchedule = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filterStatus, setFilterStatus] = useState('All');
  const [taskName, setTaskName] = useState('');

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const addTask = () => {
    if (taskName) {
      const newTask = {
        id: tasks.length + 1,
        name: taskName,
        status: 'Pending',
      };
      setTasks([...tasks, newTask]);
      setTaskName(''); // Clear input after adding
    }
  };

  const filterTasks = useCallback(() => {
    if (filterStatus === 'All') {
      return tasks;
    }
    return tasks.filter(task => task.status === filterStatus);
  }, [filterStatus, tasks]); // Re-create the function only when filterStatus or tasks change

  const filteredTasks = filterTasks();

  return (
    <div>
      <h1>Maintenance Schedule</h1>
      <label htmlFor="filter">Filter by Status: </label>
      <select id="filter" value={filterStatus} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <div>
        <input
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
          placeholder="New Task Name"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.name} - Status: {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceSchedule;
