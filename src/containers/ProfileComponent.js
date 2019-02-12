import React from 'react'
import "./ProfilePage.css"

export default class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    this.props.getProfile().then(
        user => {
          this.setState({user: user.user})
        }
    );
  }

  handleChangeFistName = (e) => {
    var user = this.state.user;
    var item = e.target.getAttribute("id");
    user[item] = e.target.value;
    this.setState({user: user});
    console.log(this.state.user)
  };

  render() {
    return (<div className="container-fluid">
      <h1>Register</h1>
      <form>

        <div className="form-group row">
          <div className="col-sm-8">
            <div className="form-control center" id="message"
                 style={{'text-align': 'center'}}>
              Profile Update Success
            </div>
          </div>
        </div>

        <div>
          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="usernameFld">
              Username

            </label>
            <div className="col-sm-8">
              <input className="form-control align-middle"
                     id="usernameFld" value={this.state.user.username}
                     placeholder="Alice" readOnly/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="phone">
              First Name
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     id="firstName" Value={this.state.user.firstName}
                     placeholder="firstname"
                     onChange={this.handleChangeFistName}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="lastName">
              Last Name
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     id="lastName" value={this.state.user.lastName}
                     placeholder="last name"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="phone">
              Phone Number
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     id="phone" value={this.state.user.phoneNumber}
                     placeholder="(555)123-4321"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-10"
                   htmlFor="email">
              Email
            </label>
            <div className="col-sm-8">
              <input className="form-control"
                     id="email" value={this.state.user.email}
                     placeholder="Alice@gmail.com"
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
                        id="update" type="button">
                  Update
                </button>
              </div>
            </div>
          </a>
        </div>

        <a href="/index.html">
          <div className="form-group row">
            <div className="col-sm-8">
              <button className="btn btn-primary-2 col-sm-12"
                      id="logout" type="button">
                Log Out
              </button>
            </div>
          </div>
        </a>
      </form>
    </div>)
  }
}