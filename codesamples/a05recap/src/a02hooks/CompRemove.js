import React, { useState } from 'react';

const TaskInputForm = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(task);
        setTask('');
    };
	
	useEffect(() => {
        return () => {
            console.log("component removed");
        };
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button type="submit">Submit</button>
        </form>
    );
};

const TaskList = ({ tasks }) => (
    <ul>
        {tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
    </ul>
);

const CompRemove = () => {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(true);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setShowForm(false); // Remove Task Input Form after adding a task
    };

    return (
        <div>
            {showForm && <TaskInputForm onAddTask={addTask} />}
            <TaskList tasks={tasks} />
        </div>
    );
};

export default CompRemove;
