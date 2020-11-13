import React,{useState} from "react";
import {useDispatch} from "react-redux";

const Form = ()=>{
    const INITIAL_STATE={top:"",bottom:"",image_Url:""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const makeMeme = (top,bottom,image_Url)=>{

        dispatch({type:"UPDATE", payload:{top,bottom,image_Url}})
        console.log("the batch:",{type:"UPDATE", payload:{top,bottom,image_Url}})
    }
    
    const handleChange=(evt)=>{
        const {name,value} = evt.target;
        setFormData(formData => ({...formData, [name]:value}));
    }

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const {top, bottom, image_Url}=formData;
        makeMeme(top,bottom,image_Url);
        setFormData(INITIAL_STATE);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" name="top" value={formData.top} placeholder="Top Text" onChange={handleChange}/>
            </div>
            <div>
            <input type="text" name="bottom" value={formData.bottom} placeholder="Bottom Text" onChange={handleChange}/>
            </div>
            <div>
            <input type="text" name="image_Url" value={formData.image_Url} placeholder="Image URL" onChange={handleChange}/>
            </div>

            <button>Make Meme!</button>
        </form>
    )
}

export default Form;