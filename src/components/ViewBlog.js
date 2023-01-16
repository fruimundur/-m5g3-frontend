import { useEffect, useState } from 'react';
import MakeBlog from './MakeBlog';

export default ()=> {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setshowForm] = useState({})
  useEffect(()=>{
    const getData = async ()=>{
      const response = await fetch('https://m5g3-backend-8h1pcjxz9-fruimundur.vercel.app/');
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }
    getData();
  },[])
  
  function updateBlog(text, title, _id) {
    const bodyData = {
      title,
      text
    }
    fetch(
      "http://localhost:5002/m/blog/"+_id,
      {
        method:"PUT",
        body: JSON.stringify(bodyData),
        headers:{ 'content-type':'application/json', 'accept':'application/json' } 
      }
    )
      .then((r)=>r.json())
      .then(console.log);
  }

  function deleteBlog(_id) {
    fetch(
      "http://localhost:5002/m/blog/"+_id,
      {
        method:"DELETE"
      }
    )
      .then((r)=>r.json())
      .then(console.log);
  }

  return (
    <>
      <br></br><p>Blog overview</p>
      { blogs.map((blog)=>{
        return (
        <div key={blog._id}>
        <h1>{blog.title}</h1>
        <img src={blog.picture_url}></img>
        <p>{blog.text}</p>
        <button onClick={() => setshowForm({...showForm,[blog._id]:!showForm[blog._id]})}>Update blog</button>
        {showForm[blog._id]?<MakeBlog buttonClick={updateBlog} id={blog._id}/>:null}
        <button onClick={() => deleteBlog(blog._id)}>Delete blog</button>
        </div>
      ) } ) }
    </>
  )
}