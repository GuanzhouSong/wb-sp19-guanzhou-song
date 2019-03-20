import React from 'react';

export default class TopicTab
    extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li className={"nav-item" + this.props.self ? " active" : " "}
            onClick={() => {
              this.props.setSelected(this.props.topicId)
            }}>
          <a className="nav-link"
             href={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}
          >
            {this.props.topic.title}
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
