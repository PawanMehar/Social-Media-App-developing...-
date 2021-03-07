import React, { useContext } from 'react'
import SignInLinks from './SignInLinks'
import SignedOutLinks from './SignedOutLinks'
import { AuthContext } from '../auth/AuthProvider'

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)
    const links = currentUser ? <SignInLinks /> : <SignedOutLinks />
    return (
     <nav className="navbar navbar-expand-md bg-info navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
         <a href="/" className="brand-logo float-left text-light text-decoration-none">Project-Times</a>
         <div class="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ml-auto">
             {links}
         </ul>
         </div>
     </nav>       
    )
}
export default Navbar