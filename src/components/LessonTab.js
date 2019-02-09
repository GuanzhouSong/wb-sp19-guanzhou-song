import React from 'react';

export default class LessonTab
    extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="nav-item"><a className="nav-link active" href="#"
                                    id={this.props.lessonId}
                                    onClick={this.props.selectLesson}
                                    >

          {this.props.lesson.title} &nbsp;

          <span>
                <i id={this.props.lessonId} onClick=
                       {this.props.deleteLesson}
                   className="fa fa-times-circle"></i></span>
        </a>
        </li>

    );
  }
}