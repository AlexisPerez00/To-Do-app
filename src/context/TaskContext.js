import React, { createContext, useState } from 'react'

const TaskContext = createContext()

const TaskProvider = ({children}) => {
    const [allTask, setAllTask] = useState([])
    const [list, setList] = useState([])
    const [taskDelete, setTaskDelete] = useState([])

    const handleSubmit = (task, id, statusTask) => {
        setAllTask(list)
        if(task === "") {
            alert("Por favor escriba una tarea")
        }
        else(
            setList(...list, {task, id, statusTask })
            
        )
     }


     const handleComplete = (id) => {
         setList([...list.map(task => task.id === id ? task.statusTask === false ?{...task, statusTask: true} : {...task, statusTask: false} : task)])
        console.log(list)
        }

     const handleDelete = (task, id) => {
         setTaskDelete([...taskDelete, {task, id}])
         setList(list.filter(task => task.id !== id))
     }

     const filterAll = () => {
         setList(allTask)
     }
    
     const filterDelete = () => {
         setList(taskDelete)
     }

     const data = {list, handleSubmit, handleComplete, handleDelete, filterAll, filterDelete }
   
     return (
        <TaskContext.Provider value={data}>
            {children}
        </TaskContext.Provider>
    )
}

export {TaskProvider}
export default TaskContext
