import React from 'react'
import ModuleList from './ModuleList'

export default class CourseEditor
    extends React.Component {

  constructor(props) {
    super(props);
    this.state = {courseId: ''};
    this.selectCourse = this.selectCourse.bind(this);
    this.state = {
      selectedModule:
          this.props.course.modules[0]
    };
    this.selectedLesson = {
      selectedLesson: this.props.course.modules[0].lessons[0]
    }

  }

  selectModule = module =>
      this.setState({
        selectedModule: module,
        selectedLesson: module.lessons[0],
        selectedTopic: module.lessons[0].topics[0]
      });

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  selectLesson = lesson =>
      this.setState({
        selectedLesson: lesson,
        selectedTopic: lesson.topics[0]
      });

  render() {
    return (
        <div className="row">
          <div className="col-3">
            <ModuleList selectModule={this.selectModule}
                        modules={this.props.course.modules}/>
          </div>
          <div className="col-3">
            <LessonTabs selectLesson={this.selectLesson}
                        selectedLesson={this.state.selectedLesson}
                        lessons=
                            {this.state.selectedModule.lessons}/>
            />
            {/*<TopicPills/>*/}
          </div>
        </div>
    );
  }
}

const ModuleList = ({modules, selectModule, selectedModule}) =>
    <div>
      <input className="form-control"
             placeholder="title" onChange={this.titleChanged}
             value={this.state.module.title}/>
      <button onClick={this.createModule}
              className=
                  "btn btn-primary btn-block">
        <i className=
               "fa fa-plus"></i>
      </button>
      <ul className="list-group">
        {this.state.modules.map((module, key) =>
            <ModuleListItem
                module={module}
                selectModule={selectModule}
                selectedModule={selectedModule}
                key={key}/>
        )}
      </ul>
    </div>;

const ModuleListItem =
    ({module, selectModule, selectedModule}) =>
        <li className={module ===
        selectedModule ? "list-group-itemactive" : "list-group-item"}>
          <a>{module.title}</a>
        </li>;

const LessonTabs = ({lessons, selectLesson, selectedLesson}) =>
    lessons.map(function (lesson, key) {
      return (<li className="nav-item"
                  onClick={() => selectLesson(lesson)} key={key}>
        <a className={lesson === selectedLesson ?
            "nav-link active" : "nav-link"}>{lesson.title}</a>

      </li>)
    });

