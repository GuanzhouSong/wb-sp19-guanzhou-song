import React from 'react';

export default class LessonTab
    extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="nav-item"><a className="nav-link active" href="#"
                                    id={this.props.id}
                                    onClick={this.props.selectTopic}>
          {this.props.topic.title}
          <span>
                <i onClick=
                       {() => {
                         if (window.confirm('Delete?')) {
                           this.props.deleteLesson(
                               this.props.topic.id)
                         }
                       }}
                   className="fa fa-times-circle"></i></span>

        </a></li>

    );
  }
}