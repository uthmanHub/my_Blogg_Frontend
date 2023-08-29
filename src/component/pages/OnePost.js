import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Ctx } from "../context/AuthContext";
import axios from "axios";
import "./../assets/css/OnePost.css";
import images from "./../assets/images/images";
import Error from "./Error";
import DomPurify from 'dompurify'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const OnePost = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [showError, setShowError] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate()
  const [auth, setAuth] = useContext(Ctx)


  const sanitizeContent = (html) => {
    const sanitizedContent = DomPurify.sanitize(html)
    return { __html: sanitizedContent }
  }

  const getInfo = () => {
    const url =  `https://blogg-61bi.onrender.com/api/v1/posts/${id}`
    // const url = `http://localhost:5050/api/v1/posts/${id}`
    axios.get(url)
    .then((res) => {
      setData(res.data.post);
    })
    .catch(() => {
      setShowError(true); //change to true when done
    });
  }
  
  const handleDelete = (id) => {
    const url = `https://blogg-61bi.onrender.com/api/v1/posts/${id}`
    // const url =  `http://localhost:5050/api/v1/posts/${id}`
    axios.delete(url, { headers: { Authorization:localStorage.getItem('SavedToken') }})
    .then((res) => {
      alert("post deleted");
    })
   .catch((err) => {
      setShowError(true) // set this to true when done
    });
    navigate('/Dashboard')
  };
  
  
  const requestInfo = {
    url: `https://blogg-61bi.onrender.com/api/v1/posts/${id}`,
    // url: `http://localhost:5050/api/v1/posts/${id}`,
    method: "PATCH",
    data: {
      title,
      content
    },
    headers: {
      "Content-type": "Application/json",
      withCredentials: true,
    }
  };

  const handleUpdate = () => {
    setShowEdit(false)
    axios(requestInfo)
    .then(() => {
      getInfo()
    })
   .catch(() => {
     setShowError(true) // this should be set to true when done
    });
  }


  useEffect(() => {
    getInfo()
  }, []);






  return (
    <>
      {showError ? (
        <Error
          message={
            "Oops, something went wrong 🚧 ☁. Pls check your connection and wait a few minutes before you try again "
          }
        />
      ) : !data ? (
        <div class="spinner"></div>
      ) : (
        <div className="onePost">
          <div className="post">
            <div className="header-post">
              <img src={images[6]} alt="" className="post-img"></img>
            </div>
            <h1>{data.title}</h1>
            <p dangerouslySetInnerHTML={sanitizeContent(data.content)}></p>
            <span className="authur">
              written By: <b>{data.author}</b>
            </span>
            <br/>

            {/* button for the crud operation */}
            <div className="update-post">
              <button onClick={() => setShowEdit(true)} style={{display: showEdit? 'none' : '' }} >Update</button>
              <button onClick={() => handleDelete(data._id)} style={{display: auth.role === "admin"? " " : ' '}} >Delete</button>
            </div>

            {/* input text for updating */}
            <div style={{display: showEdit? "" : 'none'}}>
              <input defaultValue={data.title} onChange={(e) => {setTitle(e.target.value)}}  className="edit-title"/>
              <br/>
              <ReactQuill  theme="snow" onChange={(value)=>setContent(value)} className="edit-text" />
              <button onClick={handleUpdate} className="edit-save-btn" >save</button>
            </div>

          </div>

          <div className="ads" >
            <div style={{display:'flex',justifyContent:"center", alignItems:"center", fontSize:"30px", color: 'white', transform: "rotate(-50deg)"}}><p>ads ...</p> </div>
          </div>

        </div>
      )}
    </>
  );
};

export default OnePost;




