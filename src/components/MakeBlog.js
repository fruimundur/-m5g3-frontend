import { useState } from "react";

const MakeBlog = ({buttonClick, id})=>{

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  
  return (
    <div>
      Make a blog:<br/>
      Title:<input value={title} onChange={e=>setTitle(e.target.value)} type="text"></input><br/>
      Main text:<textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
      <button onClick={()=>buttonClick(text, title, id)}>Submit blog</button>
    </div>
  )
}
export default MakeBlog;