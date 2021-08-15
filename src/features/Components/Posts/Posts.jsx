import React,{useEffect} from 'react'
import AddPosts from '../AddPosts/AddPosts'
import PostsList from '../PostsList/PostsList'
import {useSelector,useDispatch} from 'react-redux'
import './Posts.css'
import { loadPosts } from '../../Pages/Post/postsSlice'

function Posts() {

    const dispatch = useDispatch()
    const {status,posts,error} = useSelector(state =>state.post)

    
    useEffect(()=>{
        if(status === "idle"){
            dispatch(loadPosts())
        }
    },[status,dispatch])
    
    return (
        <div className="posts">
            <AddPosts/>
            {status === "loading" && <div>Posts loading</div>}
            {status === "error" && <div>Some error in loading: {error}</div>}
            {status ==="fulfilled" && posts.map(({post,name,username,profilePicture,likes,_id}) =>{
                return <div key={_id}><PostsList name={name} username={username} postDetails={post} likes={likes.length} profileUrl={profilePicture}/></div>
            })}
        </div>
    )
}

export default Posts
