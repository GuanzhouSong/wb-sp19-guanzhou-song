import React from 'react'
import ModuleListItem from "./ModuleListItem";
import CourseService from "../services/CourseService";

class ModuleList extends React.Component {
  constructor(props) {
    super(props);
    this.courseService = new CourseService();
    this.state = {

      modules: this.props.modules,
      module: {
        title: 'New Module',
        id: this.props.length
      },
      index: this.props.modules.length + 1
    };
    this.deleteModule = this.deleteModule.bind(this);
    // this.titleChanged = this.titleChanged.bind(this);
  }

  createModule = () => {
    this.setState(
        {
          modules: [
            ...this.state.modules,
            this.state.module
          ],
          index: this.state.index++
        }
    )
  };

  deleteModule = (e) => {

    var lists = this.state.modules;

    var id = e.target.getAttribute("id");

    var index = lists.findIndex(function (module) {
      return module.id == id
    });
    lists.splice(index, 1);

    this.setState({modules: lists, index: this.state.index--})

  };

  titleChanged = (event) => {
    this.setState(
        {
          module: {
            title: event.target.value,
            id: (new Date()).getTime()
          }
        });
  };

  render() {
    return (
        <div>
          <h3>Module List</h3>
          <ul className="nav flex-column nav-pills">
            <li className="list-group-item">
              <input
                  onChange={this.titleChanged}
                  className="form-control" placeholder="New Module"/>
              <button
                  onClick={this.createModule}
                  className="btn btn-primary btn-block">Add Module
              </button>
            </li>

            {
              this.state.modules.map(
                  (module) => {
                    return (
                        <ModuleListItem
                            selectModule={this.props.selectModule}
                            id={module.id}
                            module={module}
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