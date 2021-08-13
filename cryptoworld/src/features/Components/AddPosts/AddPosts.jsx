import React from 'react'
import { useState } from 'react'
import './AddPosts.css'

function AddPosts() {
    const [data,setData] = useState('')
    return (
        <div className="add-posts">
            <div className="post-title">What's on your Mind?</div>
            <input className="post-input" type="text" value={data} onChange={(e)=>setData(e.target.value)} placeholder="Share to the community"/>
            <button className="post-submit" onClick={()=>console.log(data)}>Post</button>
        </div>
    )
}

export default AddPosts
