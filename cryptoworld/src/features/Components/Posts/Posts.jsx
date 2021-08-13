import React from 'react'
import AddPosts from '../AddPosts/AddPosts'
import PostsList from '../PostsList/PostsList'
import './Posts.css'

function Posts() {
    return (
        <div className="posts">
            <AddPosts/>
            <PostsList/>
            <PostsList/>
            <PostsList/>
        </div>
    )
}

export default Posts
