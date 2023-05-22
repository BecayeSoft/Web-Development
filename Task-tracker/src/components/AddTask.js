import { useState } from "react";

// A task form to add a new task

const AddTask = ({ onAdd }) => {
    // states (component properties)
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    // Method called when user click on "Save task"
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a title for your task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            {/* Task text */}
            <div className='form-control'>
                <label>Task</label>
                <input type="text" 
                placeholder="Add Task"
                value={text}
                onChange={ (e) => { setText(e.target.value) } } />
            </div>

            {/* Task day & time */}
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" 
                placeholder="Add Day & Time"
                value={day}
                onChange={ (e) => { setDay(e.target.value) } } />
            </div>

            {/* Task reminder  */}
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" 
                checked={reminder}
                value={reminder}
                onChange={ (e) => { setReminder(e.currentTarget.checked) } } />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
}

export default AddTask;