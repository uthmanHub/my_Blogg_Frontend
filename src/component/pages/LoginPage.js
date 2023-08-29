import { useContext, useState } from "react";
import axios from "axios";
import "./../assets/css/LoginPage.css";
import { Ctx } from "./../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
// import { useAuth } from "../utills/auth";

const LoginPage = () => {
  const [auth, setAuth] = useContext(Ctx);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const trackEmail = (e) => {
    setEmail(e.target.value);
  };

  const trackPassword = (e) => {
    setPassword(e.target.value);
  };

  const requestInfo = {
    url: 'https://blogg-61bi.onrender.com/api/v1/users/login',
    // url: "http://localhost:5050/api/v1/users/login",
    method: "POST",
    data: {
      email,
      password,
    },
    headers: {
      "Content-type": "Application/json",
      withCredentials: true,
    }
  };

  // const auth = useAuth()

  const handleSubmit =  (e) => {
    e.preventDefault();
    axios(requestInfo)
    .then(response => {
      console.log(response)
      const name = response.data.name;
      const role = response.data.role;
      let token = response.data.token;
      localStorage.setItem("SavedToken", 'Bearer ' + token);
      localStorage.setItem("userName", name);
      localStorage.setItem("userRole", role);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      setAuth({token,name, role})
      navigate('/Dashboard')
    })
    .catch(()=>{
      setError(true)
    })
    
  };

 
  return (
    <>
      {error ? <Error message={"Oops, invalid details. Check your details and try again"}/>
      :     
        <div className="login">
          <div className="signin">
            <h1>Login </h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={trackEmail}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={trackPassword}
                required
              />
              <button className="login-btn" type="submit">
                login
              </button>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default LoginPage;
