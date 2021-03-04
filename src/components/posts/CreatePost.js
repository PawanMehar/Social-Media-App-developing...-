import React, { Component } from 'react'
import firebase from "../../config/fbConfig";


class CreatePost extends Component {
    state = {
        title : '',
        content : ''
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const ref = firebase.firestore().collection('projects')
        ref.doc().set(this.state).catch((err)=>{console.log(err)})
    }
    render() {
        return (
                <div className="form-group-text w-50 mx-auto"  >
                    <form onSubmit={this.handleSubmit}>
                        <h3 className='text-center mt-3 mb-3'>Create New Post</h3>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Project Content</label>
                            <textarea className="form-control" rows='1' id="content" onChange={this.handleChange}></textarea>
                        </div>
                        <button  className="btn btn-primary mt-3" >Create</button>
                    </form>
                </div>
        )
    }
}


export default CreatePost

// const mapStateToProps = (state)=>{
//     return{
//         posts: state.post.posts
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         createProject:(project)=>  dispatch(createProject(project))
//     }
// }