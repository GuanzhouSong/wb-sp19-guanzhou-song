import React from 'react'
import LessonTabs from './LessonTabs'
import LessonEditor from "./LessonEditor";
import LessonService from "../services/LessonService";

export default class ModuleEditor
    extends React.Component {

  constructor(props) {
    super(props);
    this.lessonService = new LessonService();
    this.state = {
      moduleId: this.props.moduleId,
      courseId: this.props.courseId,
      lessons: this.lessonService.findAllLessons(this.props.courseId,
          this.props.moduleId),
      lessonId: this.lessonService.findAllLessons(this.props.courseId,
          this.props.moduleId)[0].id
    };
    this.selectModule = this.selectModule.bind(this);
    this.selectCourse = this.selectCourse.bind(this);
    this.selectLesson = this.selectLesson.bind(this);
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId});
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  selectLesson(e) {
    this.setState({lessonId: e.target.getAttribute("id")});
    this.render();
  }

  componentDidMount() {
    this.selectModule
    (this.props.moduleId);
    this.selectCourse(this.props.courseId);
  }

  componentWillReceiveNewProps(newProps) {
    console.log(newProps);
    this.selectModule
    (newProps.moduleId);
    this.selectCourse(newProps.courseId);
  }

  render() {
    return (
        <div>

          <div className="col-8">
            <LessonTabs moduleId={this.props.moduleId}
                        courseId={this.props.courseId}/>
          </div>
          <LessonEditor moduleId={this.props.moduleId}
                        courseId={this.props.courseId}
                        lessonId={this.state.lessonId}/>
        </div>
    );
  }
}

