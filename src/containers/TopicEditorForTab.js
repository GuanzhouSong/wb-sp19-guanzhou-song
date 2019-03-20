import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import widgetReducer from '../reducers/WidgetReducer'
import App from './WidgetListContainer'

const store = createStore(widgetReducer);
export default class TopicEditorForTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moduleId: this.props.moduleId,
      courseId: this.props.courseId,
      lessonId: this.props.lessonId,
      topicId: this.props.topicId,
    };
    this.selectModule = this.selectModule.bind(this);
    this.selectCourse = this.selectCourse.bind(this);
    this.selectLesson = this.selectLesson.bind(this);
    this.selectTopic = this.selectTopic.bind(this);
  }

  componentDidMount() {
    this.selectModule
    (this.props.moduleId);
    this.selectCourse
    (this.props.courseId);
    this.selectLesson
    (this.props.lessonId);
    this.selectTopic
    (this.props.topicId);
  }

  componentWillReceiveNewProps(newProps) {
    this.selectModule
    (newProps.moduleId);
    this.selectCourse(newProps.courseId);
    this.selectLesson(newProps.lessonId);
    this.selectTopic(newProps.topicId);
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

  selectTopic(topicId) {
    this.setState({topicId: topicId});
  }

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-12">
              <Provider store={store}>
                <div className="container"><br></br>
                  <div>
                    <App topicId={this.props.topicId}/>
                  </div>
                </div>
              </Provider>
            </div>
          </div>
        </div>

    );
  }
}

// provider fixme