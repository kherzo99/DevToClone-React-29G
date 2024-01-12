import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data);
      });
  }, [id]);
  return (
    <>
      <div key={`post-${post.id}`}>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.postContent}</p>
      </div>
    </>
  );
}
