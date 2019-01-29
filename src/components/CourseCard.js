import React from 'react'
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseCard = ({course, selectCourse}) => {
  return (
      <div className="card" styles="width: '280rem'">
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.title}</p>
          <Link className="btn btn-primary" onClick={() => selectCourse()}
                to={`/course/edit/${course.id}`}>More...</Link>
        </div>
      </div>

  )
};
export default CourseCard;