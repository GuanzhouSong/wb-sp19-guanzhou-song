import React from 'react';
import {Link} from 'react-router-dom'

export default class TopicTab
    extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li className="nav-item">
          <a className="nav-link active" href="#">
          <Link
              to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>
            {this.props.topic.title}
          </Link>

          <span>
                <i onClick=
                       {() => {
                         if (window.confirm(
                             `Delete Topic ${this.props.topic.title}?`)) {
                           this.props.deleteTopic(
                               this.props.topic.id)
                         }
                       }}
                   className="fa fa-times-circle"></i></span>

        </a></li>

    );
  }
}