import axios from "axios";
import { useState } from "react";

const NewComment=(postId)=>{
    const [comment, setComment]=useState();
    

    const onSubmit=()=>{
       
       axios.post(`http://localhost:3002/post/${postId['postId']}/comment`,{"NewComment": comment})
       .then((response=>{
           console.log(response);
       }))
       .catch((error)=>console.log(error));
    }


    return <div>
        <div>
        <input type="text" placeholder="Comment" value={comment} onChange={e=>setComment(e.target.value)}/>
        </div>
        <button onClick={onSubmit} style={{marginTop:'4px'}}>Submit</button>
        
    </div>
}

export default NewComment;