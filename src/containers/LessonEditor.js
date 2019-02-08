import React from 'react'
import WidgetReducer from "../reducers/WidgetReducer";
import {createStore} from 'redux'

const store = createStore(WidgetReducer);
export default class LessonEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moduleId: this.props.moduleId,
      courseId: this.props.courseId,
      lessonId: this.props.lessonId
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

  selectLesson(lessonId) {
    this.setState({lessonId: lessonId});
  }

  render() {
    return (
        <div>

        </div>
    );
  }
}

// provider fixme