import { useContext } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import SingleTask from '../components/SingleTask'
import "../styles/Home.css"
import TaskContext from '../context/TaskContext'
const Home = () => {
    const {list} = useContext(TaskContext)
    const {filterAll} = useContext(TaskContext)
    const {filterDelete} = useContext(TaskContext)



    return ( 
        <div className='container'>
            <Header/>

            <div>
                <Form />
            </div>
                <br />
                <hr />
                <button className="filterAll" onClick={() => filterAll()}>Todos</button>
                <button className="filterDelete" onClick={() => filterDelete()}>Borrados</button>
                    <div className="allcards">
                        {
                            list?.length > 0 ? (
                                list.map((item, index) => (
                                    <SingleTask key={index} task={item.task} id={item.id} statusTask={item.statusTask}/>
                                ))
                            ): <h1>no hay tareas pendientes!</h1>
                        }
                    </div>
        </div>
     );
}

export default Home
