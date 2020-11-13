import React,{useState} from "react";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ()=>{
    const INITIAL_STATE={todo:""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const addTodo = (text)=>{
        let todo={text, id:uuidv4()}        
        dispatch({type:"ADD_TODO", payload:{todo}})
    }
    
    const handleChange=(evt)=>{
        const {name,value} = evt.target;
        setFormData(formData => ({...formData, [name]:value}));
    }

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const {todo}=formData;
        addTodo(todo);
        setFormData(INITIAL_STATE);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="todo">To Do:  </label>
            <input type="text" name="todo" value={formData.todo} onChange={handleChange}/>
            </div>
            <button>+ task</button>
        </form>
    )
}

export default NewTodoForm;