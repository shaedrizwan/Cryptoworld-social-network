import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import NewsList from '../NewsList/NewsList'
import "./NewsWidget.css"
import axios from 'axios'

function NewsWidget() {
    const [news,setNews] = useState({})
    console.log(news)

    useEffect(()=>{
        (
            async function(){
                const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_84168f76358ae5085d5ea62107246e41adf&q=cryptocurrency')
                setNews(response.results)
            } 
        )()
    },[])

    return (
        <div className="news-widget">
            <div className="news-title">Trending News</div>
            {/* {news && news.map(({title,link,pubDate}) =>{
                return <NewsList heading={title} link={link} date={pubDate} />
            })} */}
        </div>
    )
}

export default NewsWidget