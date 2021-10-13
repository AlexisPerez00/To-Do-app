import React, { useContext, useState, useEffect } from 'react'
import TaskContext from '../context/TaskContext'
// import { v4 as uuidv4 } from 'uuid';
import nextId from "react-id-generator";

import "../styles/Form.css"
const Form = () => {
    const [task, setTask] = useState("")
    const [status, setStatus] = useState(false)
    const {handleSubmit} = useContext(TaskContext)

//     let lastId = 0;

// const NewId = (prefix='id') => {
//     lastId++;
//     return `${prefix}${lastId}`;
// }
    useEffect(() => {
            setTask("")
    }, [handleSubmit])
    return (
        <div>
            <form>
                <input placeholder="Make a task" tupe="text" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button className="form-button" onClick={() => handleSubmit(task, nextId(), status, setStatus)} >Create Task</button>
            </form>
        </div>
    )
}

export default Form
