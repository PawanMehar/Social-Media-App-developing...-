import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email : '',
        password : ''
    }
    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className=' container w-50 m-auto'>
                <h3 className='text-center mt-3'>Sign In</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        )
    }
}

export default SignIn

