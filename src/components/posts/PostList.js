import React,{useState,useEffect} from 'react'
import PostSummary from "./PostSummary";
import firebase from "../../config/fbConfig";


const PostList = () => {
  const [posts,setPosts] = useState([])
    const ref = firebase.firestore().collection('projects')
    console.log(ref)

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
  return (
    posts.map(post=>{
      return(
        <div className="card text-center m-3">
                  <div className="card-body">
                      <h5 className="card-title text-center">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                      <p className="card-text text-right"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
        </div>
      )
    })
  )
}
export default PostList
