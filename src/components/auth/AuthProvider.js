import firebase from "../../config/fbConfig";
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user)
        })
    }, [])
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
            
    )
}

export default AuthProvider
