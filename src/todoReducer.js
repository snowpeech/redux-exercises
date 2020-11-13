const INITIAL_STATE = {todos:[]};

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      // const {top,bottom,image_Url}=action.payload; 
      const {todo} = action.payload;
      
      return { ...state, todos:[...state.todos,todo]};
    
    case "DELETE_TODO":
      
      const {id} = action.payload
      let filteredTodos = state.todos.filter(todo => todo.id !== id)
      return {...state, todos:filteredTodos};

    case "RESET_TODOS": 
      return {INITIAL_STATE};

    default:
      return state;
  }
}

export default todoReducer;