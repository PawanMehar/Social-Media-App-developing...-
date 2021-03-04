import React from 'react'
import SignInLinks from './SignInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
     <nav className="navbar navbar-expand-sm bg-info navbar-dark">
         <a href="/" className="brand-logo float-left text-light text-decoration-none">Gossip Gang</a>
         <ul className="navbar-nav ml-auto">
             <SignedOutLinks />
             <SignInLinks />
         </ul>
     </nav>       
    )
}

export default Navbar