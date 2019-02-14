import React from 'react'
import TopicTab from '../components/TopicTab';
import TopicService from "../services/TopicService";

export default class TopicTabs extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      moduleId: '',
      courseId: '',
      lessonId: '',
      topic: {title: ''},
      topics: []
    };
    this.createTopic = this.createTopic.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteTopic = this.deleteTopic.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.setLessonId = this.setLessonId.bind(this);
    this.topicService = new TopicService();
  }

  setTopics(topics) {
    this.setState({topics: topics})
  }

  findAllTopicsForLesson(lessonId) {
    this.topicService
    .findAllTopics(lessonId)
    .then((topics) => {
      this.setTopics(topics)
    });
  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  setLessonId(lessonId) {
    this.setState({lessonId: lessonId});
  }

  componentDidMount() {
    this.setModuleId(this.props.moduleId);
    this.setCourseId(this.props.courseId);
    this.setLessonId(this.props.lessonId);

  }

  componentWillReceiveProps(newProps) {
    this.setModuleId(newProps.moduleId);
    this.setCourseId(newProps.courseId);
    this.setLessonId(newProps.lessonId);
    this.findAllTopicsForLesson(newProps.lessonId)
  }

  createTopic() {
    this.topicService
    .createTopic(this.props.lessonId, this.state.topic)
    .then(() => {
      this.findAllTopicsForLesson(this.props.lessonId);
    });
    this.setState({topic: {title: ''}});
  }

  titleChanged(event) {
    console.log(event.target.value);
    this.setState({topic: {title: event.target.value}});
  }

  deleteTopic(topicId) {
    this.topicService
    .deleteTopic(topicId)
    .then(() => {
      this.findAllTopicsForLesson(this.props.lessonId);
    });
  }

  renderListOfTopics() {
    let topics = null;

    if (this.state) {
      topics = this.state.topics.map(
          (topic) => {
            return <TopicTab courseId={this.props.courseId}
                             moduleId={this.props.moduleId}
                             lessonId={this.props.lessonId}
                             topic={topic}
                             key={topic.id} deleteTopic={this.deleteTopic}/>
          });
    }
    return (
        topics
    )
  }

  render() {
    console.log(this.state);

    return (
        <div>
          <br/>
          <br/>
          <ul className="nav nav-tabs">
            {this.renderListOfTopics()}
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <div className="input-group">
                  <input onChange={this.titleChanged}
                         value={this.state.topic.title}
                         placeholder="title"
                         className="form-control"/>
                  <span className="input-group-addon">
                  <button
                      onClick={this.createTopic}
                      className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                  </button>
                  </span>
                </div>
              </a>
            </li>
          </ul>

        </div>
    );
  }
}
