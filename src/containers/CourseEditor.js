import React from 'react'
import ModuleList from './ModuleList'
import ModuleService from "../services/ModuleService"

class CourseEditor extends React.Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.ModuleService = new ModuleService();
    this.state = {
      courseId: this.props.match.params.id,
    };
    console.log(this.state);
    this.selectModule = this.selectModule.bind(this);
  }

  componentDidMount = () => {
    this._isMounted = true;
    this.findAllModules(this.props.match.params.id)
  };

  findAllModules(courseId) {
    if (this._isMounted) {
      this.ModuleService.findAllModules(courseId).then(
          data => {
            if (data.length != 0) {
              this.setState({
                moduleId: data[0].id
              })
            }
          }
      )
    }
  }

  selectModule(e) {
    this.setState({moduleId: e.target.getAttribute("id")});
  }

  selectCourse = courseId => {
    this.setState({courseId: courseId});
  };

  componentWillReceiveProps(newProps) {
    this.selectCourse
    (newProps.match.params.courseId);

  }

  render() {
    return (

        <div>
          <div className="row">
            <div className="col-4">
              <ModuleList courseId={this.state.courseId}
                          selectModule={this.selectModule}/>
            </div>
            {/*<div className="col-8">
              <ModuleEditor courseId={this.state.courseId}
                            moduleId={this.state.moduleId}/>
            </div>*/}
          </div>
        </div>

    );
  }
}

export default CourseEditor