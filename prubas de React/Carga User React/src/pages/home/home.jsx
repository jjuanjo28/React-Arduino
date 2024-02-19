import React from 'react';
import TaskListComponent from '../../components/container/task_list_component';
import {useNavigate} from "react-router-dom"
const Home = ({task}) => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Soy Home</h1>

            <button onClick={()=> navigate("taskList")}>Task List</button>
            </div>
    );
}

export default Home;
