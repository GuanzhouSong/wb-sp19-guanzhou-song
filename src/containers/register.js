import React from 'react'
import "./ProfilePage.css"
import userService from "../services/UserService"

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this._isLogin = false;
    this.userService = new userService();
    this.state = {
      user: []
    };
    this.register = this.register.bind(this)
  }

  register() {
    var p1 = document.getElementById("passwordFld").value;
    var p2 = document.getElementById("verifyPasswordFld").value;
    console.log(p1, p2);
    if (p1 != p2) {
      alert("password does not match");
      return;
    }
    var user = {
      username: document.getElementById("usernameFld").value,
      password: p1
    };
    return this.userService.register(user).then(
        e => {
          if (e.status == 200) {
            alert("register successful!");
            window.location.replace("/profile")
          } else {
            alert("username already taken! Try another one");
          }
        }
    );
  }

  redirect() {
    window.location.replace("/login")
  }

  render() {
    return (<div className="container">
      <h1 id="title">Sign Up</h1>
      <form>

        <div className="form-group row">
          <label htmlFor="usernameFld"
                 className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="username" className="form-control" id="usernameFld"
                   placeholder="username"/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="passwordFld"
                 className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="passwordFld"
                   placeholder="password"/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="verifyPasswordFld"
                 className="col-sm-2 col-form-label">Verify Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control"
                   id="verifyPasswordFld" placeholder="password"/>
          </div>
        </div>

        <button id="registerBtn"
                type="button"
                className="btn btn-primary btn-block"
                onClick={this.register}>Sign up
        </button>
        <button id="loginBtn"
                type="button"
                className="btn" onClick={this.redirect}>Login
        </button>

      </form>
    </div>);
  }
}