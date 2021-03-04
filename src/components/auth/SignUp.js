import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
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
            <div className='container form-group w-50 m-auto'>
                <h3 className='text-center mt-3'>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-xs-2 ">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control " id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp

