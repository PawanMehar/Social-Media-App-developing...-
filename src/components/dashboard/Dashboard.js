import React, { useContext } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router';
import { compose } from 'redux';
import AuthProvider, { AuthContext } from '../auth/AuthProvider';
import PostList from "../posts/PostList";

const Dashboard = (props) => {
    const{posts} = props
    const {currentUser} = useContext(AuthContext)
    const id = currentUser ? currentUser.uid : 'unknown'
    console.log(currentUser)
    console.log(id)
    if(id=='unknown') return <Redirect to='/signin' />
    return (
        <div className='row'>
            <div className="col-12 col-md-6 mx-auto">
            <PostList posts={posts} />
            </div>
            
        </div>
    )
}

export default Dashboard

// const mapStateToProps = (state)=>{
//     // console.log(state)
//     return{
//         posts: state.post.posts
//     }
// }