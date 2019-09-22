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
      courses: [],
      course: {
        id: 0,
        cpType: "N/A",
        inUse: false,
        description:""
      }
    }
  }

  componentDidMount = () =>
      this.findAllCourses();

  findAllCourses = () => {
    this.courseService.findAllCourses().then(
        courses => this.setState(
            {courses: courses})
    )

  };

  useCoupon = (id)=>{
    this.courseService.useCoupon(id).then(
        res=>{
          this.findAllCourses();
        }

    );
    window.location.reload();
  }



  render() {
    return (
        <div className="container-fluid ">
          <nav
              className="navbar navbar-expand navbar-dark bg-primary static-top">
            <a className="navbar-brand pb-0 pt-0 d-none d-sm-inline" href="#">
              <i className="fa fa-bars pr-3"></i> Guanzhou Coupon Management System
            </a>

          </nav>

          <table className="table">
            <thead>
            <tr>
              <th></th>
              <th>
                <div className="d-none d-sm-block float-right"></div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </th>
              <th>
                <div
                    className="d-none d-sm-block float-right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              </th>
              <th>
              </th>
              <th>
                {/*<a className="no-text-decoration d-inline" href="/table">*/}
                {/*  <i*/}
                {/*      className="fa fa-reorder pr-4"></i>*/}
                {/*</a> <a className="no-decorate d-inline" href="#"> <i*/}
                {/*  className="fa fa-sort pr-4"></i></a>*/}
              </th>
            </tr>
            </thead>
          </table>
          <div className="card-deck">{this.state.courses.length==0?<div>没有券╮(￣▽￣)╭"</div>:
              this.state.courses.map((course) =>
                    <CourseCard course={course} useCoupon={this.useCoupon}/>)
          }

          </div>
        </div>
    )
  }
}


