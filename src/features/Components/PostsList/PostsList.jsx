import React from 'react'
import './PostsList.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function PostsList({name ,username,postDetails ,likes ,profileUrl}) {
    return (
        <div className="posts-list">
            <div className="posts-dp">
                <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src={profileUrl} alt={username}/>
            </div> 
            <div className="posts-content">
                <div className="post-name">{name}</div>
                <div className="post-username">{username}</div>
                <div className="post-details">{postDetails}</div>
                <div className="like-count">{likes} Likes</div>
                <div className="post-like">
                    <FavoriteBorderIcon/>
                    <div>Like</div>
                </div>
            </div>
        </div>
    )
}

export default PostsList
