import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../containers/CourseTable.css';
import CourseCard from '../components/CourseCard'

export default class CourseGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid ">
          <nav className="navbar navbar-default navbarBlue navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header headerWhite d-none d-sm-block">
                Course Manager
              </div>
              <div>
                <form className=" navbar-form divForm">
                  <div className="form-group">
                    <input className="form-control"
                           placeholder="New Course Title" type="text"/>
                  </div>
                </form>
              </div>
              <div>
                <a className="btn  btn-danger" href="#">
                  <i className="fa fa-plus-circle"> New</i>
                </a>
              </div>
            </div>
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
                <a className="no-text-decoration d-inline" href="/course/Table">
                  <i
                      className="fa fa-reorder pr-4"></i>
                </a> <a className="no-decorate d-inline" href="#"> <i
                  className="fa fa-sort pr-4"></i></a>
              </th>
            </tr>
            </thead>
          </table>
          <div className="card-deck">
            {this.props.courses.map((course, key) =>
                <CourseCard course={course}
                            key={key}/>)}
          </div>
        </div>
    )
  }
}


