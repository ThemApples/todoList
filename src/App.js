import React, { useState,useEffect } from 'react';
import './App.css';

//Import Components
import Form from "./Components/Form";
import TodoList from './Components/TodoList';

function App() {
  //States
  const [inputText,setInputText] = useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Use Effect
  useEffect(() =>{
    
    filterHandler();
  },[todos,status]);
  //function
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Jimmy Todo List</h1>
      </header>
      <Form  
      inputText = {inputText}
      todos={todos} 
      setTodos= {setTodos}
      setInputText = {setInputText}
      setStatus = {setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filterTodos = {filteredTodos}/>
    </div>
  );
}

export default App;
