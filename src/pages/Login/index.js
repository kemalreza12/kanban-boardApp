import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style-login.css'

class Login extends Component {
  render() {
    return (
        <div>
          <div class="row">
            <div class="content-box col">
              <div class="logo"><h1>Kanban Board</h1></div>
              <div class="capt">make your work easy, live your life</div>
            </div>

            <form>
              <h3 class="m-3"><b>Sign In</b></h3>
              {/* <div class="row"> */}
              <div class="mb-3">
                <label>Email address</label>
                <input type="email" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control"/>
              </div>
              {/* </div> */}
              <Link to="/home"><button class="mb-2">Sign In</button></Link>
              <Link to="/register">Create Account</Link>
            </form>
            </div>
        </div>
    )
  }
}

export default Login
