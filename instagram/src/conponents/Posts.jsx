import "./Posts.css";
import { useState } from "react";

function Posts(props){

    const [hasUserLiked, setHasUserLiked] = useState(false);


    return (
    <>
    <div className = "post">
        <img src = {props.name}/>
    </div>

    </>
)
}

export default Posts;