import React, { useContext, useState, useEffect } from 'react'
import TaskContext from '../context/TaskContext'
import nextId from "react-id-generator";

import "../styles/Form.css"
const Form = () => {
    const [task, setTask] = useState("")
    const [status, setStatus] = useState(false)
    const {handleSubmit} = useContext(TaskContext)


    useEffect(() => {
            setTask("")
    }, [handleSubmit])
    return (
        <div>
            <form>
                <input placeholder="Make a task" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button type="button" className="form-button" onClick={() => handleSubmit(task, nextId(), status, setStatus)} >Create Task</button>
            </form>
        </div>
    )
}

export default Form
