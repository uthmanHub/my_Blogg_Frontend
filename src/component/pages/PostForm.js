import React, { useState } from "react";
import "./../assets/css/PostForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill'



const PostForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate()
       

  const requestInfo = {
    url: 'https://blogg-61bi.onrender.com/api/v1/posts/',
    // url: "http://localhost:5050/api/v1/posts/",
    method : 'POST',
    data: {
      author,
      title,
      content,
      // image
    },
    headers: {
      "Content-type": "Application/json",
      withCredentials: true,
    }
  }

  const createPost =  (e) => {
    e.preventDefault()
    try {
      axios(requestInfo)
      setAuthor('')
      setTitle('')
      setContent('')
      // setImage('')

      alert('Post uploaded successfully')
      
    } catch (error) {
      alert(error.message)
    }
    navigate('/Dashboard')
  }
   
  return (
    <div className="postt">
      <h3>Write a Story today?</h3>
      <form onSubmit={createPost}>
        <input name="authorname" type="text" placeholder="Authur" value={author} onChange={(e) => setAuthor(e.target.value)}  /> 
        <input name="" className="newPost" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}  />   
        <input name="photo" type="file"  id="photo"   />  
        <ReactQuill theme="snow" onChange={(value)=>setContent(value)} className="edit-text" placeholder="write content here" />
        <br/>
        <button type="submit" className="post-data">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
