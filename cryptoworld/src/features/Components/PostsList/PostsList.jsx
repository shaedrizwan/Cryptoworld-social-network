import React from 'react'
import './PostsList.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function PostsList() {
    return (
        <div className="posts-list">
            <div className="posts-dp">
                <img style={{maxWidth:"50px",borderRadius:"50%"}} src="riz-pp.jpg" alt="riz"/>
            </div>
            <div className="posts-content">
                <div className="post-name">Shahid Rizwan</div>
                <div className="post-username">@riz.eth</div>
                <div className="post-details">What a great time to be alive here in this country</div>
                <div className="like-count">21 Likes</div>
                <div className="post-like">
                    <FavoriteBorderIcon/>
                    <div>Like</div>
                </div>
            </div>
        </div>
    )
}

export default PostsList
