import React from 'react'
import "./ProfilePage.css"
import userService from "../services/UserService"

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.userService = new userService();
    this.state = {
      user: []
    };
    this.logOut = this.logOut.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile().then(
        e => {
          if (e.status == 200) {
            e.json().then(res => {
              this.setState({
                user: res
              })
            })
          } else {
            alert("get profile failed")
          }
        }
    );
  }

  handleChange = (e) => {
    var user = this.state.user;
    var key = e.target.placeholder;
    console.log(e.target);
    user[key] = e.target.value;
    this.setState({user: user});
    console.log(user)
  };

  handleChangeRole = (e) => {
    var user = this.state.user;
    user["role"] = e.target.value;
    this.setState({user: user});
    console.log(user)
  };

  updateProfile() {
    this.userService
    .updateProfile(this.state.user.id, this.state.user)
    .then(e => {
      if (e.status == 200) {
        alert("update success!");
        window.location.reload()
      } else {
        alert("update failed!");
      }
    })
  }

  logOut = () => {
    this.userService.logOut();
    alert("Log out successful");
    window.location.replace("/")
  };

  render() {
    return (<div className="container-fluid">
      <h1>Register</h1>
      <form>

        <div>
          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="usernameFld">
              Username

            </label>
            <div className="col-sm-8">
              <input className="form-control align-middle"
                     id="usernameFld"
                     onChange={this.handleChange}
                     value={this.state.user.username}
                     placeholder="username" readOnly/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="phone">
              First Name
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     id="firstNameFld"
                     Value={this.state.user.firstName}
                     placeholder="firstName"
                     onChange={this.handleChange}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="lastName">
              Last Name
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     id="lastName"
                     onChange={this.handleChange}
                     value={this.state.user.lastName}
                     placeholder="lastName"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="phone">
              Phone Number
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     onChange={this.handleChange}
                     id="phone"
                     value={this.state.user.phoneNumber}
                     placeholder="phoneNumber"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="email">
              Email
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     onChange={this.handleChange}
                     id="email"
                     value={this.state.user.email}
                     placeholder="email"
                     type="email"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="role">
              Role
            </label>
            <div className="col-sm-8">
              <select className="form-control" id="role"
                      placeholder="role"
                      onChange={this.handleChangeRole}
                      value={this.state.user.role}>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
                <option selected value="ADMIN">Admin</option>
              </select>
            </div>
          </div>

          <a href="#">
            <div className="form-group row">
              <div className="col-sm-8">
                <button className="btn btn-primary-1 col-sm-12"
                        id="update" type="button" onClick={this.updateProfile}>
                  Update
                </button>
              </div>
            </div>
          </a>
        </div>

        <a href="#">
          <div className="form-group row">
            <div className="col-sm-8">
              <button className="btn btn-primary-2 col-sm-12"
                      id="logout" type="button" onClick={this.logOut}>
                Log Out
              </button>
            </div>
          </div>
        </a>
      </form>
    </div>)
  }
}