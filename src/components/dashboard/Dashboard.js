import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PostList from "../posts/PostList";

const Dashboard = (props) => {
    const{posts} = props
    return (
        <div className='row'>
            <div className="col-12 col-md-6">
            <PostList posts={posts} />
            </div>
            <div className="col-12 col-md-5">
                my name is pawan
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