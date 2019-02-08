import React from 'react'
import ModuleList from './ModuleList'
import ModuleEditor from "./ModuleEditor";
import ModuleService from "../services/ModuleService"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.ModuleService = new ModuleService();
    this.state = {
      courseId: this.props.match.params.id,
      modules: this.ModuleService.findAllModules(this.props.match.params.id),
      moduleId: this.ModuleService.findAllModules(
          this.props.match.params.id)[0].id
    };
    this.selectModule = this.selectModule.bind(this);
  }

  selectModule(e) {
    this.setState({moduleId: e.target.getAttribute("id")});
    this.render();
  }

  render() {
    return (

        <div>
          <div className="row">
            <div className="col-4">
              <ModuleList courseId={this.state.courseId}
                          selectModule={this.selectModule}/>
            </div>
            <div className="col-8">
              <ModuleEditor courseId={this.state.courseId}
                            moduleId={this.state.moduleId}/>
            </div>
          </div>
        </div>

    );
  }
}

export default CourseEditor