import React from 'react'
import "./ProfilePage.css"
import userService from "../services/UserService"
import {Redirect} from 'react-router';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this._isLogin = false;
    this.userService = new userService();
    this.state = {
      user: []
    };
    this.signin = this.signin.bind(this)
  }

  componentDidMount() {
  }

  getProfile() {
    return this.userService.getProfile().then(
        user => {
          this.setState({user: user})
        }
    );
  }

  handleChangeUsername = (e) => {
    var username = e.target.value;
    this.setState({username: username});
    console.log(this.state.username)

  };

  handleChangePassword = (e) => {
    var password = e.target.value;
    this.setState({password: password});
    console.log(this.state.password)
  };

  signin() {
    this.userService.login({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    }).then((e) => {
      if (e.status == 200) {
        this._isLogin = true;
      } else {
        this._isLogin = false;
        alert("Wrong username or password, please try again");
      }
    }).then(() => {
      this.render();
      console.log(this._isLogin);
      if (this._isLogin) {
        window.location.replace("/profile")
      }
    });

  }

  render() {
    if (!this._isLogin) {
      return (<div className="container-fluid">
        <h1>Login</h1>
        <form>
          <div className="form-group row">
            <label htmlFor="username"
                   className="col-sm-10">
              Username
            </label>
            <div className="col-sm-8">
              <input className="form-control align-middle"
                     placeholder="Bob"
                     id="username" onChange={this.handleChangeUsername}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password"
                   className="col-sm-10">
              Password
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     type="password"
                     placeholder="!@#$QWERzxc"
                     id="password" onChange={this.handleChangePassword}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-8">
              <button className="btn btn-primary col-sm-12"
                      type="button" onClick={this.signin}>
                Sign in
              </button>
            </div>
          </div>
          <div className="col-sm-8">
            <a href="#" style={{float: 'left'}}>Forgot Password?</a>
            <a href="/register"
               style={{float: 'right'}}>Sign
              up</a>
          </div>
        </form>
      </div>)
    } else {
      return (
          <Redirect to="/profile"></Redirect>
      )
    }

  }
}