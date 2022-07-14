import React, { useState } from 'react';
import './App.css';

//Import Components
import Form from "./Components/Form";
import TodoList from './Components/TodoList';

function App() {
  
  const [inputText,setInputText] = useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
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
      setStatus = {setStatus}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
