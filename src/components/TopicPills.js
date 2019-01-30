import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap"

class TopicPills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: this.props.lesson,
      topic: {
        title: "New Topic",
        id: (new Date()).getTime()
      }
    };
    this.deleteTopic = this.deleteTopic.bind(this);
  }

  deleteTopic = (e) => {
    var lists = this.state.lesson;
    var id = e.target.getAttribute("id");
    var index = lists.findIndex(function (lesson) {
      return lesson.id == id
    });
    lists.splice(index, 1);
    this.setState({lessons: lists})

  };

  addTopic = () => {
    this.setState(
        {
          lesson: [
            ...this.state.lesson,
            this.state.topic
          ]
        }
    )
  };

  titleChanged = (event) => {
    this.setState(
        {
          topic: {
            title: event.target.value,
            id: (new Date()).getTime(),
          }
        });
  };

  render() {
    return (<ul className="nav nav-pills">
      {
        this.state.lesson.map(topics =>
            <li className="nav-item">
              <a className="nav-link show" data-toggle="pill"
                 href="#">{topics.title}
                <i className="fa fa-trash-o pr-4 pull-right" id={topics.id}
                   onClick={this.deleteTopic}/>
                <i className="fa fa-edit pr-4 pull-right"/>
              </a>

            </li>
        )
      }
      <li className="nav-item">
        <input
            onChange={this.titleChanged}
            className="form-control" placeholder="New Lesson"/>
        <a href="#" onClick={this.addTopic}>
          <i className="fa fa-plus"/>
        </a>
      </li>
    </ul>)
  }
}

export default TopicPills
