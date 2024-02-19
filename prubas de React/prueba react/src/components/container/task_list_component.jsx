import React, { useState } from "react";
import { Task } from "../../models/Task.class";
import TaskComponent from "../pure/task_component";
import LEVELS from "../../models/LEVELS.js";
import NewTask from "../pure/forms/newTask";

const TaskListComponent = () => {
  const tareaUno = new Task("comprar tomate", LEVELS.LEVELS.blocking, false);
  const tareaDos = new Task("Vender tomate", LEVELS.LEVELS.normal, true);
  const tareaTres = new Task(
    "Pasear al perro",
    LEVELS.LEVELS.importante,
    false
  );

  const [taskList, setTaskList] = useState([tareaUno, tareaDos, tareaTres]);

  function deleteTask(task) {
    const index = taskList.indexOf(task)
    const tempTaskList = [...taskList]
    tempTaskList.splice(index,1)
    setTaskList(tempTaskList)
  }
  function changeState(task) {
    const index = taskList.indexOf(task)
    const tempTaskList = [...taskList] 
    tempTaskList[index].estado = !tempTaskList[index].estado
    setTaskList(tempTaskList)
  }
 function newPriority(task) {
   const index = taskList.indexOf(task)
   const tempTaskList = [...taskList]
  switch (tempTaskList[index].prioridad) {
    case "blocking":
      tempTaskList[index].prioridad = "normal"
      break;
      case "normal":
        tempTaskList[index].prioridad = "importante"
        break;
       case "importante":
          tempTaskList[index].prioridad = "blocking"
          break;
  
    default:
      break;
  }
  setTaskList(tempTaskList)
 }
 function newTask(task) {
  setTaskList([...taskList,task])
 }
  return (
    <div>
      <h2 style={{ textAlign: "center", fontWeight: "bold", color:"blue" }}>
        Listado de Tareas
      </h2>
      <table>
        <tbody>
          <tr>
            <th>Tarea</th>
            <th>Nivel</th>
            <th>Estado</th>
          </tr>

          {taskList.map((task,id) => {
            return <TaskComponent 
            task={task}
            key={id}
            erase={()=>deleteTask(task)}
            change={()=>changeState(task)}
            changePriority=  {()=>newPriority(task)}
            ></TaskComponent>;
          })}
        </tbody>
      </table>
      <NewTask add={newTask}></NewTask>
    </div>
  );
};

export default TaskListComponent;
