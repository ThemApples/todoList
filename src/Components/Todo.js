import React from "react";
import {TiTick} from "react-icons/ti"
import {FaTrash} from "react-icons/fa";

const Todo = ({text,todo,todos,setTodos}) => {
    //Events
    const deleteHandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo);
    }; 

    const completeHandler = () =>{
        console.log(todo);
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{ 
                    ...item, 
                    completed:!item.completed,
                }
            }
            return item;
        }
        ))
    }
    return(
        <div className="todo">
            <li 
            className={`todo-item ${todo.completed ? "Completed" : ""}`}
            >{text}
            </li>

            <button onClick={completeHandler} 
                className="complete-btn">
                <i className="fas fa-check"> <TiTick />
                </i></button>

            <button onClick={deleteHandler} 
                className="trash-btn">
                <i className="fas fa-trash"><FaTrash/>
                </i></button>
        </div>
    ); 
}

export default Todo;