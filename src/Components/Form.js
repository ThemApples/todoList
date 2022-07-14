import React from "react";
import App from "../App";

const Form = ({setInputText, todos, setTodos,inputText,setStatus}) => {
    //Javascript function/code
    const inputTextHandler = (e) =>{
      console.log(e.target.value);
      setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos,{text:inputText,completed:false,id:Math.random()*1000}
      ])
      setInputText("");
    }

    const statusHandler = (e) =>{
      setStatus(e.target.value);
    };

    return(
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick = {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option onClick = {statusHandler} value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;