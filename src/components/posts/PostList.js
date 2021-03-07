import React,{useState,useEffect, useContext} from 'react'
import PostSummary from "./PostSummary";
import firebase from "../../config/fbConfig";
import { AuthContext } from '../auth/AuthProvider';


const PostList = () => {
  const [posts,setPosts] = useState([])
    const ref = firebase.firestore().collection('projects')
    const {currentUser} = useContext(AuthContext)
    const email = currentUser ? currentUser.email : ''
    function getProjects(){
        ref.onSnapshot((querySnapshot)=>{
            const items = []
            querySnapshot.forEach((doc)=>{
                items.push(doc.data())
            })
            setPosts(items)
        })
    }
    useEffect(() => {
        getProjects()
    }, [])
    const deletePost = (post)=>{
      ref.doc(post.Id).delete().catch(err=>{console.log(err)})
      console.log(post)
    }
  return (
    posts.map(post=>{
      return(
        <div className="card text-center m-3" key={post.id}>
                  <div className="card-body">
                    <a className='float-right'onClick={()=>deletePost(post)}>X</a>
                    <h5 className="card-title text-center">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <p className="card-text text-right"><small className="text-muted">posted by {post.email}</small></p>
                  </div>
        </div>
      )
    })
  )
}
export default PostList
