import React from 'react'
import './styles.css'
import User from '../../Components/User'
const Login = () => {
    return(
        <>
            <nav>
                <h2>Quem está assistindo a <strong>netflix?</strong></h2>
            </nav>
            <div className="userList">
                <User name="teste"/>
                <User name="teste"/>
                <User name="teste"/>
                <User name="teste"/>
            </div>
        </>
    )
}
export default Login