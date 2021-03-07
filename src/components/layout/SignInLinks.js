import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import firebase from "../../config/fbConfig";
import { AuthContext } from '../auth/AuthProvider';



const SignInLinks = () => {
    const {currentUser} = useContext(AuthContext)
    const email = currentUser ? currentUser.email : ''
    const SignOut = ()=>{
        console.log('out')
        firebase.auth().signOut()
    }
    return (
      
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><Link to='/create/1' className="nav-link">Create Project</Link></li>
                  <li className="nav-item"><a  className="nav-link signout" onClick={SignOut}>SignOut</a></li>
                  <li className="nav-item mr-3"><Link to='' className="btn  initials">   {email}</Link></li>
              </ul>
        
    )
}

export default SignInLinks
