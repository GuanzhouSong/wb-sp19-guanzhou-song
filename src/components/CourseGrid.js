import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseCard from '../components/CourseCard'
import CourseService from "../services/CourseService";

export default class CourseGrid extends React.Component {
  constructor() {
    super();
    this.courseService = new CourseService();
    this.state = {
      courses: []
    }
  }

  componentDidMount = () =>
      this.findAllCourses();

  findAllCourses = () => {
    var courses = this.courseService.findAllCourses();
    this.setState(
        {courses: courses})
  };

  deleteCourse = courseId =>
      this.courseService.deleteCourse(courseId);

  createCourse = () =>
      this.courseService
      .createCourse(this.state.course).then(() =>
          this.findAllCourses());


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
              <th>Recent Document</th>
              <th>
                <div className="d-none d-sm-block ">Owned by me</div>
              </th>
              <th>
              </th>
              <th>
                <a className="no-text-decoration d-inline" href="/table">
                  <i
                      className="fa fa-reorder pr-4"></i>
                </a> <a className="no-decorate d-inline" href="#"> <i
                  className="fa fa-sort pr-4"></i></a>
              </th>
            </tr>
            </thead>
          </table>
          <div className="card-deck">
            {this.state.courses.map((course, key) =>
                <CourseCard course={course} key={key}
                            deleteCourse={this.deleteCourse}/>)}
          </div>
        </div>
    )
  }
}


