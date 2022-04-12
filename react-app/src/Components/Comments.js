import axios from "axios";
import {useState} from "react";

const Comment = (postId) => {
    const [comment, setComment] = useState();

    const data = {
        "comment" : comment
    }

    const onSubmit = () => {
        axios
            .post('http://localhost:3002/post/${postId}/comment', data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    return <div>
    <div>
      <input type="text" placeholder="ID" value={comment} onChange={e => setId(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
  </div>
}

export default Comments;