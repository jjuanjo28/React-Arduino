import React, { useRef } from "react";
import LEVELS from "../../../models/LEVELS";
import { Task } from "../../../models/Task.class";

const NewTask = ({ add }) => {
  const taskRef = useRef("");
  const prioridadRef = useRef("");

  function newTask(e) {
    e.preventDefault();
    const newT = new Task(
      taskRef.current.value,
      prioridadRef.current.value,
      false
    );
    add(newT);
  }
  return (
    <form onSubmit={newTask} style={{ margin: "10px" }}>
      <input type="text" placeholder="Ingrese la tarea" ref={taskRef} />

      <select ref={prioridadRef} style={{ margin: "10px" }}>
        <option value={LEVELS.LEVELS.normal}>normal</option>
        <option value={LEVELS.LEVELS.importante}>importante</option>
        <option value={LEVELS.LEVELS.blocking}>blocking</option>
      </select>
      <div>
        <input type="submit" value="enviar" style={{ margin: "10px" }} />

        <input type="reset" value="Clear form" />
      </div>
    </form>
  );
};

export default NewTask;
