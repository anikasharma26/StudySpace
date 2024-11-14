import React,{useState} from 'react'
import'./Todo.css';

function Todo(){

    const[tasks,setTask] = useState([]);
    const[newTask,setNewTask] = useState("");

function handleInputChange(event){
    setNewTask(event.target.value);
}

function addTask(){
    if(newTask.trim() !==""){
        setTask([...tasks,newTask]);
        setNewTask(" ");
    }
}

function deleteTask(index){
    setTask(tasks.filter((_,i) => i!== index));
}

function moveTaskUp(index){
    if(index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
        setTask(updatedTask);
    }
}

function moveTaskDown(index){
    if(index < tasks.length-1){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
        setTask(updatedTask);
    }
}

return(

    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
            placeholder='Enter a Task....'
            value={newTask}
            onChange={handleInputChange}></input>
            <button onClick={addTask}>Done</button>
        </div>
        <ol>
            {tasks.map((task,index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() =>deleteTask(index)}>❌</button>
                    <button className="delete-button" onClick={() =>moveTaskUp(index)}>⬆️</button>
                    <button className="delete-button" onClick={() =>moveTaskDown(index)}>⬇️</button>
                </li>)}
        </ol>
    </div>
);

}
export default Todo