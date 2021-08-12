import React from 'react'
import { Posts, Sidebar } from '../../Components'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <Sidebar/>
            <Posts/>
            <div className="widgets">widgets</div>
            {/* sidebar */}
            {/* posts */}
            {/* widgets */}
        </div>
    )
}

export default Home
