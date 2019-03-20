import React from 'react'
import TopicEditor from "./TopicEditor";
import {Route} from 'react-router-dom'
import TopicTabs from "../containers/TopicTabs";

export default class ModuleEditor
    extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moduleId: this.props.match.params.moduleId,
      courseId: this.props.match.params.courseId
    };
    this.selectModule = this.selectModule.bind(this);
    this.selectCourse = this.selectCourse.bind(this);
  }

  componentDidMount() {
    this.selectModule
    (this.props.match.params.moduleId);
    this.selectCourse
    (this.props.match.params.courseId);
  }

  componentWillReceiveNewProps(newProps) {
    this.selectModule
    (newProps.match.params.moduleId);
    this.selectCourse(newProps.match.params.courseId);
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId});
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  render() {
    console.log(this.state);
    return (
        <div>

          <div className="col-12">
            <TopicTabs moduleId={this.props.match.params.moduleId}
                       courseId={this.props.match.params.courseId}
                       lessonId={this.props.match.params.lessonId}/>
          </div>
          <Route
              path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
              component={TopicEditor}>
          </Route>
        </div>
    );
  }
}

