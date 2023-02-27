import React from 'react';
import leaf from "../img/leaf.svg";
import TaskItem from "./TaskItem";

const TaskList = ({tasks, remove, done}) => {
    return (
        <div className="card mb-4">
            <ul id="tasksList" className="list-group list-group-flush">
                {tasks.length > 0
                    ?
                    tasks.map(task => <TaskItem remove={remove} done={done} task={task} key={task.id}/>)
                    :
                    <li id="emptyList" className="list-group-item empty-list">
                        <img src={leaf} alt='Empty' width="48" className="mt-3"/>
                        <div className="empty-list__title">Список дел пуст</div>
                    </li>
                }
            </ul>
        </div>
    );
};

export default TaskList;