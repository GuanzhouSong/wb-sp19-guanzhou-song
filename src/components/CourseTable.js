import React from 'react';
import CourseRow from "./CourseRow";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './CourseTable.css';
import CourseService from "../services/CourseService";

export default class CourseTable extends React.Component {
  constructor() {
    super();

    this.courseService = new CourseService();
    this.state = {
      courses: [],
      course: {
        title: "new Course"
      }
    }
  }

  componentDidMount = () => {
    this.findAllCourses();
  };

  findAllCourses = () => {
    this.courseService.findAllCourses().then(
        courses => this.setState(
            {courses: courses})
    )

  };

  deleteCourse = courseId =>
      this.courseService.deleteCourse(courseId).then(() =>
          this.findAllCourses()
      );

  createCourse = () =>
      this.courseService
      .createCourse(this.state.course).then(() =>
          this.findAllCourses());

  handleChange = e => {
    this.setState({
      course: {
        title: e.target.value
      }
    })
  };

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
                     placeholder="New Course Title"
                     onChange={this.handleChange}
              />
              <div className="col-1">
                <a className="btn btn-danger" href="#"
                   onClick={this.createCourse}>
                  <i className="fa fa-plus"></i>
                </a>
              </div>
              <div className="col-1">
                <a className="btn btn-warning" href="/login">
                  <i className="fa fa-user-circle"></i>
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
                <a className="no-text-decoration d-inline" href="/">
                  <i
                      className="fa fa-th pr-4"></i>
                </a> <a className="no-decorate d-inline" href="#"> <i
                  className="fa fa-sort pr-4"></i></a>
              </th>
            </tr>
            </thead>
            <tbody>
            {this.state.courses.map((course, idx) =>
                <CourseRow key={idx} course={course}
                           deleteCourse={this.deleteCourse}/>
            )}
            </tbody>
          </table>
        </div>
    )
  }
}