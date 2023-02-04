import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    let tasks1: Array<TaskType> = [
        { id: 1, title: 'CSS', isDone : true },
        { id: 2, title: 'JS', isDone : true },
        { id: 3, title: 'React', isDone : false }
    ]

    let tasks2: Array<TaskType> = [
        { id: 1, title: 'Interstellar', isDone : true },
        { id: 2, title: 'XXX', isDone : false },
        { id: 3, title: 'Tenet', isDone : true }
    ]

    return (
        <div className="App">
            <Todolist title='what to learn' tasks={tasks1}/>
            <Todolist title='movies' tasks={tasks2}/>
        </div>
    );
}

export default App;
