import React from 'react'
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseCard = ({course, selectCourse, deleteCourse}) => {
  return (
      <div className="container p-0 col-sm-12 col-md-4 col-lg-2 h-100">
        <div className="card" styles="width: '280rem'">
          <img className="card-img-top"
               src="https://picsum.photos/300/200"/>
          <div className="card-body">
            <Link onClick={() => selectCourse()}
                  to={`/course/edit/${course.id}`}>
              <h5 className="card-title">{course.title}</h5>
            </Link>
            <p className="card-text">{course.title}</p>
            <Link className="btn btn-primary" onClick={() => selectCourse()}
                  to={`/course/edit/${course.id}`}>More...</Link>
            <a className="btn btn-primary"
               onClick={() => deleteCourse(course.id)}>Delete</a>
          </div>
        </div>
      </div>

  )
};
export default CourseCard;