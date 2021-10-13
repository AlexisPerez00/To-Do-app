import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const SingleTask = ({task, id, statusTask}) => {
    const {handleDelete} = useContext(TaskContext);
    const {handleComplete} = useContext(TaskContext);

    return (
        <div className="task-content">
            
      <h3 className={!statusTask ? "text-complete" : "text-delete"}>{task}</h3>

      <button onClick={() => handleComplete(id)} className={!statusTask ? "btn-complete" : "btn-marked"}>
        {!statusTask ? "Completar" : "desmarcar"}
      </button>

      <button onClick={() => handleDelete(task, id)} className="btn-delete">
        borrar
      </button>

    </div>
    )
}

export default SingleTask
