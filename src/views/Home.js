import { useContext } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import SingleTask from '../components/SingleTask'
import "../styles/Home.css"
import TaskContext from '../context/TaskContext'
const Home = () => {
    const {list} = useContext(TaskContext)
    const {filterAll} = useContext(TaskContext);
    const {filterDelete} = useContext(TaskContext)
    return (
        <div className="container">
            <Header/>
            <div>
                <Form/>
            </div>
            <div className="main">
                <button onClick={() => filterAll()}>Show All</button>
                <button onClick={() => filterDelete()}>Show Deleted</button>
                
                {list?.length > 0 ? (
                    list.map((item, index) => (
                        <SingleTask
                            key= {index}
                            text= {item.task}
                            id= {item.id}
                            statusTask= {item.statusTask}
                        />
                    ))
                    ):
                        <h2>You don't have any tasks</h2>
                }
            </div>
            
        </div>
    )
}

export default Home
