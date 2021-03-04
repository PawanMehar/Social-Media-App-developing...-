import React from 'react'
import {Link} from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
             <li className="nav-item"><Link to='/signin' className="nav-link">Sign In</Link></li>
             <li className="nav-item"><Link to='/signup' className="nav-link">Singn Up</Link></li>
        </ul>
    )
}

export default SignedOutLinks
