import { useState } from "react";
import MakeBlog from "./components/MakeBlog";
import ViewBlog from "./components/ViewBlog";

const App = () => {
  const [route, setRoute] = useState("makeBlog");

  const submitBlog = (text,title)=>{
    const bodyData = {
      title,
      text
    }
    fetch(
      "http://localhost:5002/m/blog",
      {
        method:"POST",
        body: JSON.stringify(bodyData),
        headers:{ 'content-type':'application/json', 'accept':'application/json' } 
      }
    )
      .then((r)=>r.json())
      .then(console.log);
  }
  
  return (
    <div>
      <button onClick={()=>setRoute("makeBlog")}>Create blog</button>
      <button onClick={()=>setRoute("viewBlog")}>View blog</button>
      {route==="makeBlog" && <MakeBlog buttonClick={submitBlog}/> }
      {route==="viewBlog" && <ViewBlog/> }
    </div>
  )
}
export default App;