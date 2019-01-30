import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap"

class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: this.props.lessons,
      lesson: "New Lesson"
    };
    this.deleteLesson = this.deleteLesson.bind(this);
  }

  deleteLesson = (e) => {
    var lists = this.state.lessons;
    var id = e.target.getAttribute("id");
    var index = lists.findIndex(function (lesson) {
      return lesson.id == id
    });
    lists.splice(index, 1);
    this.setState({lessons: lists})

  };

  addLesson = () => {
    this.setState(
        {
          lessons: [
            ...this.state.lessons,
            this.state.lesson
          ]
        }
    )
  };

  titleChanged = (event) => {
    this.setState(
        {
          lesson: {
            title: event.target.value,
            id: (new Date()).getTime(),
            topics: "",
          }
        });
  };

  render() {
    return (
        <ul className="nav nav-tabs">
          {
            this.state.lessons.map(lesson =>
                <li id={lesson.id} className="nav-item">
                  <a className="nav-link show" data-toggle="tab"
                     href="#">{lesson.title}
                    <i className="fa fa-trash-o pr-4 pull-right"
                       id={lesson.id} onClick={this.deleteLesson}/>
                    <i className="fa fa-edit pr-4 pull-right"
                    />
                  </a>
                </li>
            )
          }
          <li className="nav-item">
            <input
                onChange={this.titleChanged}
                className="form-control" placeholder="New Lesson"/>
            <a href="#" onClick={this.addLesson}>
              <i className="fa fa-plus"/>
            </a>
          </li>
        </ul>
    );
  }
}

export default LessonTabs