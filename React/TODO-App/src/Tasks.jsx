import React, {useState} from "react";
import styles from './Tasks.module.css';

function Tasks() {

    // Get date in YYYY-MM-DD format for react date input
    const current_date = new Date().toISOString().split('T')[0];

    // Get time in HH:MM format 
    const current_time = new Date().toTimeString().slice(0, 5);

    const [isFormValid, setIsFormValid] = useState(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Groceries',
            date: current_date,
            time: current_time,
            priority: 3,
            complete: false,
        },
        {
            id: 2,
            text: 'Laundry',
            date: current_date,
            time: current_time,
            priority: 2,
            complete: false,
        },
        {
            id: 3,
            text: 'Cooking',
            date: current_date,
            time: current_time,
            priority: 3,
            complete: true,
        },
    ]);

    const [newTask, setNewTask] = useState({
        text: '',
        date: current_date,
        time: current_time,
        priority: 1,
        complete: false,
    });

    const handleAdd = () => {
        
        if (newTask.text.trim() === '' || newTask.date === '' || newTask.time === '') {
            setIsFormValid(false);
            return;
        }
        else {
            setIsFormValid(true);
        }

        const task = {
            id: tasks.length + 1,
            text: newTask.text,
            date: newTask.date,
            time: newTask.time,
            priority: newTask.priority,
            complete: false,
        };     
        setTasks(prevTasks => [...prevTasks, task]);
    }

    const handleDelete = (index) => {
        const newTasks = tasks.filter( task => task.id !== index );
        setTasks(prevTasks => newTasks);
    }

    const handleComplete = (index) => {
        const newTasks = tasks.map( task => {
            if (task.id === index) {
                task.complete = !task.complete;
            }
            return task;
        });
        setTasks(prevTasks => newTasks);
    }

    return (
        <>
            {
                tasks.map( task => {
                    return (
                        // If task is complete cross the text out
                        <div key={task.id} className={styles.task}>
                            <input type="checkbox" 
                                checked={task.complete} value={task.complete}
                                onChange={() => handleComplete(task.id)}/>

                            <div className={ task.complete ? 
                                styles['task-text'] + ' ' + styles['task-complete'] : 
                                styles['task-text']}>
                                <h3>
                                    {task.text}
                                </h3>
                                <p>
                                    {/* {task.date.toLocaleString('default', { month: 'long' })} {task.date.getDate()}, {task.date.getFullYear()}  */}
                                    {task.date} 
                                    &nbsp; at &nbsp; 
                                    {task.time.toString()}
                                </p>
                            
                                </div>
                            
                            <button className={styles['task-btn-accent']} 
                                onClick={ () => handleDelete(task.id) }>
                                Delete
                            </button>
                        </div>
                    );
                })
            }
            
            <button style={ {margin: '16px'} } className={styles['task-btn-warn']} onClick={ () => setTasks([]) }>
                Clear All
            </button>

            <div className="task-form">

                <input type="text" placeholder="Add Task" 
                    className={styles['task-input']} 
                    value={newTask.text}
                    onChange={ (e) => setNewTask({ ...newTask, text: e.target.value }) }/>

                <input type="date" 
                    className={styles['task-input']} 
                    value={newTask.date}
                    onChange={ (e) => setNewTask({ ...newTask, date: e.target.value }) }/>

                <input type="time" 
                    className={styles['task-input']}
                    value={newTask.time}
                    onChange={ (e) => setNewTask({ ...newTask, time: e.target.value }) }/>

                <select className={styles['task-input']}
                    value={newTask.priority}
                    onChange={ (e) => setNewTask({ ...newTask, priority: e.target.value }) }>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>

                {/* If form is not valid, show message */}
                { !isFormValid && <p className={styles['task-form-error-msg']}>Please fill all fields</p> }

                <button style={ {margin: '16px'} }
                    className={styles['task-btn-primary']}
                    onClick={handleAdd}>
                    Add Task
                </button>
            </div>


        </>
    );
}

export default Tasks;
