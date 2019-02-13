import React from 'react'
import LessonTab from '../components/LessonTab';
import LessonService from '../services/LessonService'

export default class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
    this.lessonService = new LessonService();
    console.log(props);
    this.state = {
      moduleId: this.props.moduleId,
      courseId: this.props.courseId,
      lessons: [],
      lesson: {
        title: 'New Lesson'
      }
    };
    this.createLesson = this.createLesson.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setCourseId = this.setCourseId.bind(this);

  }

  setLessons(lessons) {
    this.setState({lessons: lessons})
  }

  componentDidMount = () => {
    this.findAllLessonsForModule(this.props.courseId, this.props.moduleId)
  };

  findAllLessonsForModule(courseId, moduleId) {

    this.lessonService.findAllLessons(courseId, moduleId).then(
        lessons => {
          this.setState({
            lessons: lessons
          });
          console.log(lessons)
        }
    );

  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setModuleId(newProps.moduleId);
    this.setCourseId(newProps.courseId);
    this.findAllLessonsForModule(newProps.moduleId);

  }

  createLesson() {
    this.lessonService
    .createLesson(this.props.courseId, this.props.moduleId, this.state.lesson);
    this.lessonService
    .findAllLessons(this.props.courseId, this.props.moduleId);
    this.setState({
      lesson: {
        title: '',
        id: (new Date()).getTime()
      }
    });
  }

  titleChanged(event) {
    this.setState(
        {
          lesson: {
            title: event.target.value,
            id: (new Date()).getTime()
          }
        });
  }

  renderListOfLessons() {
    let lessons = null;

    if (this.state) {
      lessons = this.state.lessons.map(
          (lesson) => {
            return <LessonTab courseId={this.props.courseId}
                              moduleId={this.props.moduleId}
                              lessonId={lesson.id}
                              selectLesson={this.props.selectLesson}
                              lesson={lesson}
                              deleteLesson={this.props.deleteLesson}/>
          });
    }
    return (
        lessons
    )
  }

  render() {
    return (
        <div>
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
          <br/>
          <br/>

          <ul className="nav nav-tabs">
            {this.renderListOfLessons()}
          </ul>

        </div>
    );
  }
}
