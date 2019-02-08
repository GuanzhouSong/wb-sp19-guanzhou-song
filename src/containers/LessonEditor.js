import React from 'react'
import WidgetReducer from "../reducers/WidgetReducer";
import {createStore} from 'redux'
import TopicTabs from "./TopicTabs";
import TopicEditor from "./TopicEditor";
import TopicService from "../services/TopicService";

const store = createStore(WidgetReducer);
export default class LessonEditor extends React.Component {

  constructor(props) {
    super(props);
    this.topicService = new TopicService();
    this.state = {
      moduleId: this.props.moduleId,
      courseId: this.props.courseId,
      lessonId: this.props.lessonId,
      topics: this.topicService.findAllTopics(this.props.courseId,
          this.props.moduleId, this.props.lessonId),
      topicId: this.topicService.findAllTopics(this.props.courseId,
          this.props.moduleId, this.props.lessonId)[0].id
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

  componentDidMount() {
    this.selectModule
    (this.props.moduleId);
    this.selectCourse(this.props.courseId);
    this.selectLesson(this.props.lessonId);
  }

  componentWillReceiveNewProps(newProps) {
    this.selectModule
    (newProps.moduleId);
    this.selectCourse(newProps.courseId);
    this.selectLesson(newProps.lessonId);
  }

  render() {
    return (
        <div>

          <div className="col-8">
            <TopicTabs moduleId={this.props.moduleId}
                       courseId={this.props.courseId}
                       lessonId={this.props.lessonId}
            />
          </div>
          <TopicEditor moduleId={this.props.moduleId}
                       courseId={this.props.courseId}
                       lessonId={this.props.lessonId}
                       topicId={this.state.topicId}/>
        </div>
    );
  }
}

// provider fixme