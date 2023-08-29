import { Route, Routes, Navigate } from "react-router-dom";
import PostForm from "./component/pages/PostForm";
import Main from "./component/pages/Main";
import About from "./component/pages/About";
import Layout from "./component/pages/Layout";
import OnePost from "./component/pages/OnePost";
import TogglePage from "./component/entry/TogglePage";
import CtxProvider from "./component/context/AuthContext";




function App() {
  
  return (

    <CtxProvider>
      <Routes>
        <Route path="/" element={<TogglePage/>} />

        <Route path='/Dashboard' element={<Layout/>} > 
          <Route index element={<Main/>} />
          <Route path=":id" element={<OnePost/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="post" element={<PostForm/>}/>
          <Route path="*" element={<Navigate to={<Main/>} />}/>
        </Route>
      </Routes>        
     </CtxProvider>
  );
}

export default App;


//   /Dashboard ==> main element
//    /id ==> Onepost



























{/* <Route path="/" element={<Layout/>}>
  <Route index element={<Main/>}/>
  {/* <Route path="/dashboard" element={<Main/>}/> }
  
</Route> */}