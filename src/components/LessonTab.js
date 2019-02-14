import React from 'react';
import {Link} from 'react-router-dom'

export default class LessonTab
    extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li className="nav-item"><a className="nav-link active" href="#">
          <Link
              to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
            {this.props.lesson.title}
          </Link>

          <span>
                <i onClick=
                       {() => {
                         if (window.confirm(
                             `Delete lesson ${this.props.lesson.title}?`)) {
                           console.log(this.props.lesson.id);
                           this.props.deleteLesson(
                               this.props.lesson.id)
                         }
                       }}
                   className="fa fa-times-circle"></i></span>

        </a></li>

    );
  }
}