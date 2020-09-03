import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const User = ({ name }) => {
    return(
        <div className="container">
            <Link to="/home"><div className="userAvatar"></div></Link>
            <Link to="/home"><p>{name}</p></Link>
        </div>
    )
}
export default User