import React, {useState} from 'react';
import cross from '../img/cross.svg';
import tick from '../img/tick.svg';

const TaskItem = (props) => {

    const [style, setStyle] = useState(props.task.isDone ? 'task-title task-title--done' : 'task-title')
    function changeStyle() {
        props.done(props.task)
        props.task.isDone ? setStyle('task-title task-title--done') : setStyle('task-title')
    }

    return (
        <li className="list-group-item d-flex justify-content-between task-item">
            <span className={style}>{props.task.text}</span>
            <div className="task-item__buttons">
                <button onClick={changeStyle} type="button" data-action="done" className="btn-action">
                    <img src={tick} alt='' width="18" height="18"/>
                </button>
                <button onClick={() => props.remove(props.task)} type="button" data-action="delete" className="btn-action">
                    <img src={cross} alt='' width="18" height="18"/>
                </button>
            </div>
        </li>
    );
};

export default TaskItem;