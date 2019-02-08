import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap"
import LessonService from '../services/LessonService'

class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleId: '',
      courseId: '',
      lesson: {title: ''},
      lessons: this.props.lessons
    };

    this.deleteLesson = this.deleteLesson.bind(this);
    this.setLessons = this.setLessons.bind(this);
    this.lessonService = new LessonService();
  }

  deleteLesson = (e) => {
    var id = e.target.getAttribute("id");
    this.lessonService
    .deleteLesson(id)
    .then(() => {
      this.findAllLessonsForModule(this.props.moduleId);
    });
  };

  findAllLessonsForModule(moduleId) {
    this.lessonService
    .findAllLessonsForModule(moduleId, this.props.courseId)
    .then((lessons) => {
      this.setLessons(lessons)
    });
  }

  setLessons(lessons) {
    this.setState({lessons: lessons})
  }

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
                     href={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson.id}`}>
                    {lesson.title}
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