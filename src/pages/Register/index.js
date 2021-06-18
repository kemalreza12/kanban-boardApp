import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style-register.css'

class Register extends Component {
    render() {
        return (
            <div>
                <form>
                  <h3 class="m-3"><b>Create Account</b></h3>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                  </div>
                  <button class="m-2">Sign Up</button>
                  <Link to="/" class="mb-3">Sign In</Link>
                </form>
            </div>
        )
    }
}

export default Register
