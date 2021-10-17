import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import "../styles/SingleTask.css"


const SingleTask = ({ task, id, statusTask }) => {
  const { handleDelete } = useContext(TaskContext);
  const { handleComplete } = useContext(TaskContext);
  
  return (
    <div className="card-content">
      <h3 className={!statusTask ? "text-complete" : "text-delete"}>{task}</h3>
      <button onClick={() => handleComplete(id)} className={!statusTask ? "btn-complete" : "btn-marked"}>
        {!statusTask ? "COMPLETAR" : "DESMARCAR"}
      </button>
      <button onClick={() => handleDelete(task, id)} className="btn-delete">
        ELIMINAR
      </button>
    </div>
  );
};

export default SingleTask
