import React, {useContext, useState } from 'react'
import { Redirect } from 'react-router';
import firebase from "../../config/fbConfig";
import { AuthContext } from '../auth/AuthProvider';
import { v4 as uuidv4 } from 'uuid';

const CreatePost = (props)=> {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const {currentUser} = useContext(AuthContext)
    const id = currentUser ? currentUser.uid : 'unknown'
    const email = currentUser? currentUser.email : ''
    const Id = uuidv4()
    console.log(Id)

     const handleSubmit = (e)=>{
        e.preventDefault()
        if(!title) return
        const ref = firebase.firestore().collection('projects')
        ref.doc(Id).set({title,content,owner:id,email,Id:Id})
        .catch((err)=>{console.log(err)})
        props.history.push('/')
    }
    if(id=='unknown') return <Redirect to='/signin' />
    console.log(props)
    return (
                <div className="form-group-text w-50 mx-auto"  >
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-center mt-3 mb-3'>Create New Project</h3>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" 
                            onChange={(e=>setTitle(e.target.value))}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Project Content</label>
                            <textarea className="form-control" rows='1' id="content" 
                            onChange={(e=>setContent(e.target.value))}></textarea>
                        </div>
                        <button  className="btn btn-primary mt-3" >Create</button>
                    </form>
                </div>
        )
    
}


export default CreatePost
