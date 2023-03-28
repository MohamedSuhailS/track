import axios from "axios";
import React, { useRef } from 'react';
export default function App() {
  const [posts, setPost] = React.useState(0);
  const form = useRef();
  const sendPost = (e) => {
    e.preventDefault();
    let pass = form.current.password.value.length ;
    if(pass > 5){
      sendPost("password valid")
    axios.post('http://localhost:3001/posts', {
      username: form.current.username.value,
      password: form.current.password.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  }



  // React.useEffect(() => {
   
  // }, []);


  return (
    <div>
     <form ref={form} onSubmit={sendPost}>
      <label>Username</label>
      <input type="text" name="username" />
      <label>Password</label>
      <input type="text" name="password" />
      <input type="submit" value="Send" />
    </form>
    <>{posts}</>
    </div>
  );
}