import React from 'react';

export default class TopicTab
    extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="nav-item"><a className="nav-link active" href="#"
                                    id={this.props.topicId}
                                    onClick={this.props.selectTopic}
        >

          {this.props.topic.title} &nbsp;

          <span>
                <i id={this.props.topicId} onClick=
                    {this.props.deleteTopic}
                   className="fa fa-times-circle"></i></span>
        </a>
        </li>

    );
  }
}