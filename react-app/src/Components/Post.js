import Comment from "./Comment";
import NewComment from "./NewComment";

const Post = ({ title, body, comments, postId }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comment comments = {comments} />
    <NewComment postId={postId}/>
  </div>
}

export default Post;
