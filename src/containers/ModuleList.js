import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

class ModuleList extends React.Component {
  constructor(props) {
    super(props);
    this.moduleService = new ModuleService();
    this.state = {
      courseId: this.props.courseId,
      module: {title: ''},
      modules: this.moduleService.findAllModules(this.props.courseId)
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.setModule = this.setModule.bind(this);
    this.moduleService = new ModuleService();
  }

  setModules(modules) {
    this.setState({modules: modules});
    this.render();
  }

  setModule(module) {
    this.setState({module: module});
    this.render();
  }

  findAllModulesForCourse(courseId) {
    var modules = this.moduleService
    .findAllModules(courseId);
    this.setModules(modules)

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
    this.moduleService
    .deleteModule(this.props.courseId, e.target.getAttribute("id"));
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