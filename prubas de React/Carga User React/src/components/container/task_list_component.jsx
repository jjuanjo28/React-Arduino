import React, {useState}from 'react';
import { LEVEL } from '../../models/LEVEL.enum';
import { Task } from '../../models/task';
import CreateTaskComponent from '../pure/forms/create_task_component';
import TaskComponent from '../pure/task_component';

const TaskListComponent = ({task}) => {
    const taskUno = new Task("comprar", "Bananas", LEVEL.URGENT)
    const taskDos = new Task("comprar", "Papas", LEVEL.BLOCKING)
  
    const [newTaskList, setNewTaskList] = useState([taskUno,taskDos])

   function createTask(task) {
    return setNewTaskList([...newTaskList, task])
    
   }

    return (
        <div>
            <h1>TASK LIST</h1>
            <table className='table'>

             <thead>
             <tr>
      <th scope="col">Task</th>
      <th scope="col">Description</th>
      <th scope="col">Level</th>
    </tr>
             </thead>
             <tbody>
                
             {newTaskList.map((task,index)=>{
                return(
                    <TaskComponent
                     task={task}
                     key={index}
                    ></TaskComponent>
                )
               })}
           </tbody>
           <CreateTaskComponent add={createTask}></CreateTaskComponent>
            </table>
          
          </div>
    );
}

export default TaskListComponent;
