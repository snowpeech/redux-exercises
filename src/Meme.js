import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./Meme.css"

const Meme = ()=>{
    const top = useSelector(store => store.top);
    const bottom = useSelector(store => store.bottom);
    const image_Url = useSelector(store => store.image_Url);
//component pulling values from store's state
    const dispatch = useDispatch();
    const deleteMeme = ()=>{
        dispatch({type:"DELETE_MEME"})
    }

    return(<div className="Meme" onClick={deleteMeme}>
    <div className="Meme-text" id="top">{top}</div>
    {image_Url ? <img src={image_Url} alt="meme image"/> : ""}
    <div className="Meme-text" id="bottom">{bottom}</div>
    </div>)
}

export default Meme;

/* id:display >> class:meme >>class:meme-text border top
                            >>class none.image
                            >> class: meme-text border btm */