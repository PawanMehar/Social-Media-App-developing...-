import React, { Component, useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import firebase from "../../config/fbConfig";
import { AuthContext } from './AuthProvider';

const SignUp = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser)
    

    useEffect(() => {
        console.log(email)
        console.log(password)
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(err=>{
            console.log(err)
        })
        
    }
     if(currentUser) return <Redirect to='/signin' />
    
    return (
             <div className='container form-group w-50 m-auto'>
                <h3 className='text-center mt-3'>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    {/* <div className="form-group col-xs-2 ">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control " id="firstName" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={handleChange}/>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" 
                        onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" 
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}


export default SignUp

