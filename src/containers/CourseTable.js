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
          <nav
              className="navbar navbar-expand navbar-dark bg-primary static-top">

            <a className="navbar-brand pb-0 pt-0 d-none d-sm-inline" href="#">
              <i className="fa fa-bars pr-3"></i> Course Manager
            </a>
            <form className="form-inline w-100">
              <input className="form-control col-10" type="search"
                     placeholder="New Course Title"/>
              <div className="col-2">
                <a className="btn btn-danger" href="#">
                  <i className="fa fa-plus"></i>
                </a>
              </div>
            </form>
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