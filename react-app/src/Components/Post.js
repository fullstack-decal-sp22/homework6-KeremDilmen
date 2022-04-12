import Comments from "./Comments";

const Post = ({ title, body, postId, comments }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments comment = {postId} />
  </div>
}

export default Post;
