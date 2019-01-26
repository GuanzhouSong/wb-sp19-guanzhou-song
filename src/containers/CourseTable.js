import React from 'react';
import CourseRow from "../components/CourseRow";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../containers/CourseTable.css';

export default class CourseTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid ">
          <nav className="navbar navbar-default navbarBlue navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse"
                   id="example-navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">iOS</a></li>
                </ul>
              </div>
              <div className="navbar-header headerWhite d-none d-sm-block">
                Course Manager
              </div>
              <div>
                <form className=" navbar-form divForm">
                  <div className="form-group col-10">
                    <input className="form-control "
                           placeholder="New Course Title" type="text"/>
                  </div>
                </form>
              </div>
              <div>
                <a class="btn  btn-danger" href="#">
                  <i class="fa fa-plus-circle"> New</i>
                </a>
              </div>
            </div>
          </nav>

          <table className="table">
            <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>
                <div className="d-none d-sm-block ">Owned by</div>
              </th>
              <th>
                <div className="d-none d-sm-block">last Modified</div>
              </th>
              <th>
                <a className="no-text-decoration d-inline" href="/course/Grid">
                  <i
                      className="fa fa-th pr-4"></i>
                </a> <a className="no-decorate d-inline" href="#"> <i
                  className="fa fa-sort pr-4"></i></a>
              </th>
            </tr>
            </thead>
            <tbody>
            {this.props.courses.map((course) =>
                <CourseRow course={course}/>
            )}
            </tbody>
          </table>
        </div>
    )
  }
}