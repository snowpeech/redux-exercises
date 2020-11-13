const INITIAL_STATE = {top:"",bottom:"",image_Url:""};

function memeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE":
      const {top,bottom,image_Url}=action.payload;        
      return { ...state, top,bottom,image_Url };
    
    case "DELETE_MEME":
      // const {top,bottom,image_Url}=action.payload;        
      return {INITIAL_STATE};

    default:
      return state;
  }
}

export default memeReducer;