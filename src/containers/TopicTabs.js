import React from 'react'
import TopicService from "../services/TopicService";
import TopicTab from "../components/TopicTab"

export default class TopicTabs extends React.Component {
  constructor(props) {
    super(props);
    this.topicService = new TopicService();
    this.state = {
      moduleId: this.props.moduleId,
      courseId: this.props.courseId,
      lessonId: this.props.lessonId,
      topics: this.topicService.findAllTopics(this.props.courseId,
          this.props.moduleId, this.props.lessonId),
      topic: {
        title: '',
        id: (new Date()).getTime()
      }
    };
    this.createTopic = this.createTopic.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteTopic = this.deleteTopic.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.setLessonId = this.setLessonId.bind(this);

  }

  setTopics(topics) {
    this.setState({topics: topics})
  }

  findAllTopicsForLesson(lessonId) {
    var topics = this.topicService
    .findAllTopics(this.props.courseId, this.props.moduleId, lessonId);
    this.setTopics(topics);
  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  setLessonId(lessonId) {
    this.setState({lessonId: lessonId});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  componentDidMount() {
    this.setModuleId(this.props.moduleId);
    this.setCourseId(this.props.courseId);
    this.setLessonId(this.props.lessonId);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setModuleId(newProps.moduleId);
    this.setCourseId(newProps.courseId);
    this.setLessonId(newProps.lessonId);
    this.findAllTopicsForLesson(newProps.lessonId)
  }

  createTopic() {
    this.topicService
    .createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId,
        this.state.topic);
    this.topicService
    .findAllTopics(this.state.courseId, this.props.moduleId,
        this.props.lessonId);
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
          topic: {
            title: event.target.value,
            id: (new Date()).getTime()
          }
        });
  }

  deleteTopic(topicId) {
    console.log('delete');
    this.topicService
    .deleteTopic(this.props.courseId, this.props.moduleId, this.props.lessonId,
        topicId);

    this.topicService
    .findAllTopics(this.state.courseId, this.props.moduleId,
        this.props.lessonId);
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
    return (
        <div>
          <div className="input-group">

            <input onChange={this.titleChanged}
                   value={this.state.topic.title}
                   placeholder="title"
                   className="form-control"/>
            <span className="input-group-addon"><button
                onClick={this.createTopic}
                className="btn btn-primary btn-block">
                            <i className="fa fa-plus"></i>
                        </button></span>

          </div>
          <br/>
          <br/>

          <ul className="nav nav-tabs">
            {this.renderListOfTopics()}
          </ul>

        </div>
    );
  }
}
