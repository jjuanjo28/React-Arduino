import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task';


const TaskComponent = ({task}) => {


    return (
        <tr>
        <td>{task.task}</td>
        <td>{task.description}</td>
        <td>{task.level}</td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task)
};


export default TaskComponent;
