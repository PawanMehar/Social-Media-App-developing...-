import React from 'react'
import {Link} from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to='/' className="nav-link">Sign Out</Link></li>
            <li className="nav-item"><Link to='/create/1' className="nav-link">Create Post</Link></li>
            <li className="nav-item"><Link to='' className="btn btn-dark initials">PM</Link></li>
        </ul>
    )
}

export default SignInLinks
