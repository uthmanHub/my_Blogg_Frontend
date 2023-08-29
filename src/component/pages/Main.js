import React, { useState, useEffect } from "react";
import "./../assets/css/Main.css";
import axios from "axios";
import images from "../assets/images/images";
import DomPurify from 'dompurify'
import { Link } from "react-router-dom";
import Error from "./Error";

const Main = () => {
  const [data, setData] = useState();
  const [showError, setShowError] = useState(false);
  
  const getData = () => {
    const url = 'https://blogg-61bi.onrender.com/api/v1/posts/';
    // const url = "http://localhost:5050/api/v1/posts/";
      axios.get(url)
      .then((res) => {
        setData(res.data.data.post);
      })

    .catch (error => {
      setShowError(true)
      console.log(error.message);
    } )     
  };
  
  const sanitizeContent = (html) => {
    const sanitizedContent = DomPurify.sanitize(html)
    return { __html: sanitizedContent }
  }

  useEffect(() => {
    getData();
  }, []);


  
  
  return (
    <div className="main">
      {showError?  <Error message={'Pls check your internet connection and try again'}/> :
      !data ? (         
        <div class="spinner"></div> )
        : (
          data.map(({ _id, title, author, image, content, publishedAt }) => {
            return (
              <div key={_id} className="card">
              <div className="content">
                <div className="pic">
                  <img src={images[6]} alt="" />
                </div>
              </div>
              <h2>{title}</h2>
              <h4 className="content" dangerouslySetInnerHTML={sanitizeContent(content.length > 25 ? content.slice(0, 65) + "..." : content)}/>
              <div className="action">
                <span className="authur-info">
                  By: <b>{author}</b>{" "}
                </span>
          
                 <Link to={`${_id}`}>
                  <button> Read now</button>{" "}
                </Link> 
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Main;
