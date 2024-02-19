import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/Task.class";

const TaskComponent = ({ task, erase, change,changePriority }) => {
  function verifyState(task) {
    if (task.estado) {
      return (
        <i className="bi bi-calendar-check-fill" style={{ color: "green" }}></i>
      );
    } else {
      return <i className="bi bi-calendar" style={{ color: "red" }}></i>;
    }
  }
  function verifyPriority(task) {
    switch (task.prioridad) {
        case "blocking":
            return(
                <span className="badge text-bg-dark">Blocking</span>
            );
        case "normal":
            return(
                <span className="badge text-bg-info">Normal</span>
            ); 
        case "importante":
            return(
                <span className="badge text-bg-danger">importante</span>
            );
        default:
            break;
    }
   }

   
  return (
    <tr>
      <td>{task.tarea}</td>
      <td onClick={changePriority} >{verifyPriority(task)}</td>
      <td onClick={change}>{verifyState(task)}</td>
      <td onClick={erase}><i className="bi bi-trash3"></i></td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
