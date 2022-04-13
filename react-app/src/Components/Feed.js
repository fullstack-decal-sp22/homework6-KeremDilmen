import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import {useEffect, useState} from "react";
import axios from "axios";
import NewComment from "./NewComment";

const Feed = () => {
  const [post, setPost] = useState();

  const getPostsData = () => {
    axios
      .get('http://localhost:3002/posts')
      .then((post) => setPost(post.data))
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        post?.map(post =>
          <Post title={post.title} body={post.body} key={post.id} comments={post.comments} newcomments={post.newcomments}/>
        )
      }

      <NewPost/>
    </div>
  )

}


export default Feed;
