import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'
import CourseService from "../services/CourseService";

class ModuleList extends React.Component {
  constructor(props) {
    super(props);
    this.moduleService = new ModuleService();
    this.courseService = new CourseService();
    this.state = {
      modules: [],
      module: {
        title: "new Module"
      }
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.setModule = this.setModule.bind(this);
  }

  setModules(modules) {
    this.setState({modules: modules});
    this.render();
  }

  setModule(module) {
    this.setState({module: module});
    this.render();
  }

  componentDidMount = () => {
    this.findAllModulesForCourse(this.props.courseId)
  };

  findAllModulesForCourse(courseId) {
    this.moduleService.findAllModules(courseId).then(
        modules => this.setModules(modules)
    );

  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  createModule() {
    this.moduleService
    .createModule(this.props.courseId, this.state.module);

    this.findAllModulesForCourse(this.props.courseId);
    this.setState({module: {title: ''}});

  }

  titleChanged(event) {
    this.setState(
        {
          module: {
            title: event.target.value,
            id: (new Date()).getTime()
          }
        });
  }

  deleteModule(e) {
    var moduleId = e.target.getAttribute("id");
    e.target.setAttribute("id", "del");
    this.moduleService
    .deleteModule(this.state.courseId, moduleId);
    this.findAllModulesForCourse(this.props.courseId)
  }

  render() {
    return (
        <div>
          <h3>Module List</h3>
          <ul className="nav flex-column nav-pills">
            <li className="list-group-item">
              <input onChange={this.titleChanged}
                     id="123"
                     value={this.state.module.title}
                     placeholder="new module"
                     className="form-control"/>
              <button onClick={this.createModule}
                      className="btn btn-primary btn-block">
                <i className="fa fa-plus"></i>
              </button>
            </li>

            {
              this.state.modules.map(
                  (module) => {
                    return (
                        <ModuleListItem selectModule={this.props.selectModule}
                                        courseId={this.state.courseId}
                                        module={module} id={module.id}
                                        key={module.id}
                                        deleteModule={this.deleteModule}/>
                    )
                  }
              )
            }
          </ul>
        </div>
    )
  }
}

export default ModuleList;