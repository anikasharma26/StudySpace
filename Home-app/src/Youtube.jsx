import React,{useState} from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import'./Youtube.css';

function Youtube(){
const[link,setLink] = useState(" ")
const navigate = useNavigate();

function handleInputchange(event){
    setLink(event.target.value)
};

function handleSearch(){
    const encodedUrl = encodeURIComponent(link);
    navigate(`/video/${encodedUrl}`);
};

function handleTodo(){
    navigate('./Todo');
};

return(
    <div className="top">
        <button className="todo" onClick={handleTodo}>Todo List</button>
        <div className="search">
            <input type="text" 
            placeholder="Paste the youtube link here..."
            value={link}
            onChange={handleInputchange}
            />
        <button onClick ={handleSearch}>Search</button>
        </div>
    </div>
);
}
export default Youtube