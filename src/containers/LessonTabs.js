import React from 'react'
import LessonTab from '../components/LessonTab';
import LessonService from '../services/LessonService'

export default class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      moduleId: '',
      courseId: '',
      lesson: {title: ''},
      lessons: []
    };
    this.createLesson = this.createLesson.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteLesson = this.deleteLesson.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.lessonService = new LessonService();
  }

  setLessons(lessons) {
    this.setState({lessons: lessons})
  }

  findAllLessonsForModule(moduleId) {
    this.lessonService
    .findAllLessons(this.props.courseId, moduleId)
    .then((lessons) => {
      this.setLessons(lessons)
    });
  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  componentDidMount() {
    this.setModuleId(this.props.moduleId);
    this.setCourseId(this.props.courseId);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setModuleId(newProps.moduleId);
    this.setCourseId(newProps.courseId);
    this.findAllLessonsForModule(newProps.moduleId)
  }

  createLesson() {
    console.log(this.state.lesson);
    this.lessonService
    .createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
    .then(() => {
      this.findAllLessonsForModule(this.props.moduleId);
    });
    this.setState({lesson: {title: ''}});
  }

  titleChanged(event) {
    console.log(event.target.value);
    this.setState({lesson: {title: event.target.value}});
  }

  deleteLesson(lessonId) {
    console.log('delete');
    this.lessonService
    .deleteLesson(lessonId)
    .then(() => {
      this.findAllLessonsForModule(this.props.moduleId);
    });
  }

  renderListOfLessons() {
    let lessons = null;

    if (this.state) {
      lessons = this.state.lessons.map(
          (lesson) => {
            return <LessonTab courseId={this.props.courseId}
                              moduleId={this.props.moduleId} lesson={lesson}
                              key={lesson.id} deleteLesson={this.deleteLesson}/>
          });
    }
    return (
        lessons
    )
  }

  render() {

    return (
        <div>
          <br/>
          <ul className="nav nav-tabs" role="tablist">
            {this.renderListOfLessons()}
            <li className="nav-item">
                <div className="input-group">
                  <input onChange={this.titleChanged}
                         value={this.state.lesson.title}
                         placeholder="title"
                         className="form-control"/>
                  <span className="input-group-addon"><button
                      onClick={this.createLesson}
                      className="btn btn-primary btn-block">
                            <i className="fa fa-plus"></i>
                        </button></span>
                </div>
            </li>
          </ul>

        </div>
    );
  }
}
