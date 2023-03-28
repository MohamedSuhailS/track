import axios from "axios";
import React, { useRef } from 'react';
const baseURL = "http://localhost:8080/posts";

export default function Post() {
  const [post, setPost] = React.useState(null);
  const form = useRef();
  const sendPost = (e) => {
    e.preventDefault();
    axios
    .post(baseURL, {
      title:  form.current.title.value,
      author:  form.current.author.value
    })
    .then((response) => {
      setPost(response.data);
    });
  }


  return (
    <div>
     <form ref={form} onSubmit={sendPost}>
      <label>Title</label>
      <input type="text" name="title" />
      <label>Author</label>
      <input type="text" name="author" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}