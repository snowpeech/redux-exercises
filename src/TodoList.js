import React from 'react';
import {useDispatch,useSelector} from 'react-redux'

const TodoList =()=>{
    //lists todos. allows button to delete todo
    const dispatch = useDispatch();
    const todos = useSelector(store=> store.todos);
    
    const deleteTodo=(id)=>{
        dispatch({type:"DELETE_TODO",payload:{id}});
    }
    const resetTodos=()=>{
        dispatch({type:"RESET_TODOS"});
    }
    
    return(<>
    <h2>To Do List:</h2>
    <ul>
        {todos? todos.map(todo =>
            <li key={todo.id}><button onClick={()=>deleteTodo(todo.id)}>X</button>  |  {todo.text}  </li>) : ""}
    </ul>
    {todos ? <button onClick={resetTodos}>Clear Todo List</button> :""}
    </>)

}

export default TodoList;