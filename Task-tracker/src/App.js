import './App.css';
import React, { useEffect } from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from "./components/Header";
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
    const name = 'Becaye'
    const isBecaye = true

    const [showTaskForm, setShowTaskForm] = useState(false)

    /**
     * Fetch tasks from the backend
     */
    useEffect(() => {
        const getTasks = async () => {
            const taskData = await fetchTasks()
            setTasks(taskData)
        }

        getTasks()
    }, [])

    /**
     * Fecth the tasks from `db.json` 
     */
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }


    /**
     * Fecth a task from `db.json` 
     */
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    // Tasks global state: tasks is the array and setTasks is for updating the tasks
    // Task have been deplaced to db.json
    const [tasks, setTasks] = useState([])

    /**
     * Add a new task
     */
    const addTask = async (task) => {

        const res = await fetch(`http://localhost:5000/tasks/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        // res.json() returns the added task
        const data = await res.json()
        setTasks([...tasks, data])
    }

    /**
     * Delete task
     */
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter(task => task.id !== id))
    }

    /**
     * Toggle task's reminder
     * Toggle the reminder property of the task that was clicked.
     */
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })

        // res.json() returns the updated task
        const data = await res.json()
        console.log(data);
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        )
    }

    // App.js content

    return (
        <Router>
            <div className="container">

                <Header onAdd={() => setShowTaskForm(!showTaskForm)}
                    showForm={showTaskForm} buttonText='Remove' />

                <Routes>
                    
                    {/* Home route: shows the tasks list */}
                    <Route path="/" element={
                        <>
                            {/* Show task form if showTaskForm is true */}
                            {showTaskForm && <AddTask onAdd={addTask} />}

                            {
                                tasks.length > 0 ?
                                    <Tasks tasks={tasks} 
                                    onToggle={toggleReminder}
                                    onDelete={deleteTask} /> :
                                    'No task to show'
                            }
                        </>
                    } />
                 
                    {/* About route */}
                    <Route path="/about" element={<About />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}


// Class Notation
// class App extends React.Component {
//     render() {
//         return <h1>Hello form a class</h1>
//     }
// }


export default App;
