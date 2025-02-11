import React from 'react'
import { Link } from 'react-router';
import "../App.css"

const Home = () => {
    return <div className='homecontainer'>
        <h1>Home</h1>
        <Link to="/proposal">Go To Proposal</Link>
        <Link to="/promise">Go To Promise</Link>
    </div>
}
export default Home;