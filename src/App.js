import React, {useState, useEffect} from "react";
import './styles/main.css'
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";



function App() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("tasks"));
        if (data) {
            setTasks(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }

    const doneTask = (task) => {
        task.isDone = !task.isDone
        setTasks(tasks)
        const updatedTasks = tasks.map((t) => {
            return t;
        });
        setTasks(updatedTasks);
    }

    return (
      <div className='container'>
          <div className="display-4 mb-2">ToDo приложение</div>
          <div className="h4 mb-5">список задач на сегодня</div>
          <TaskList remove={removeTask} done={doneTask} tasks={tasks}/>
          <div className='card bg-light'>
              <div className='card-header'>Добавить новую задачу</div>
              <div className='card-body'>
                  <TaskForm create={createTask}/>
              </div>
          </div>
      </div>
    );
}

export default App;
