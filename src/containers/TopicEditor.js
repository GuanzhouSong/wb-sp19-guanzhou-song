import React from 'react'
/*
const store = createStore(widgetReducer)*/
export default class TopicEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moduleId: this.props.match.params.moduleId,
      courseId: this.props.match.params.courseId,
      lessonId: this.props.match.params.lessonId,
      topicId: this.props.match.params.topicId,
    };
    this.selectModule = this.selectModule.bind(this);
    this.selectCourse = this.selectCourse.bind(this);
    this.selectLesson = this.selectLesson.bind(this);
    this.selectTopic = this.selectTopic.bind(this);
  }

  componentDidMount() {
    this.selectModule
    (this.props.match.params.moduleId);
    this.selectCourse
    (this.props.match.params.courseId);
    this.selectLesson
    (this.props.match.params.lessonId);
    this.selectTopic
    (this.props.match.params.topicId);
  }

  componentWillReceiveNewProps(newProps) {
    this.selectModule
    (newProps.match.params.moduleId);
    this.selectCourse(newProps.match.params.courseId);
    this.selectLesson(newProps.match.params.lessonId);
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
            <div className="col-8">
              {/*<Provider store={store}>
                <div className="container"><br></br>
                  <div>
                    <App topicId={this.props.match.params.topicId}/>
                  </div>
                </div>
              </Provider>*/}
            </div>
          </div>
        </div>

    );
  }
}

// provider fixme