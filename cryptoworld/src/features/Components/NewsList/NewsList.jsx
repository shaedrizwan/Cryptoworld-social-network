import React from 'react'
import {v4 as uuid} from 'uuid'
import "./NewsList.css"

function NewsList({heading,link,date}) {
    return (
        <div key={uuid}>
            <div className="news-heading">{heading}</div>
            <div className="news-subcontainer">
            <a href={link} className="news-link" target="_blank" rel="noreferrer">Read more</a>
            <div className="news-date">{date}</div>
            </div>
        </div>
    )
}

export default NewsList
