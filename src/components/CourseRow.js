import React from 'react'
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseRow = ({course, deleteCourse}) => {
  return (
      <tr>
        <td>
          <i class="fa fa-book"></i>
        </td>
        <td>
          <Link to={`/course/edit/${course.id}`}>
            {course.title}
          </Link>
        </td>
        <td>
          <div className="d-none d-sm-block">me</div>
        </td>
        <td>
          <div className="d-none d-sm-block">Today</div>
        </td>
        <td>

          <a className="no-decorate d-inline" href="#" onClick={() =>
              deleteCourse(course.id)
          }> <i
              className="fa fa-trash-o pr-4"></i></a>
        </td>
      </tr>
  )
};
export default CourseRow;