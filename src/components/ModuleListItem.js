import React from 'react'

class ModuleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="nav-item" id={this.props.id}>
          <a className="nav-link" data-toggle="pill"
             href={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
            {/*<Link
                to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
              {this.props.module.title}
            </Link>*/}
            {this.props.module.title}
            <i className="fa fa-trash-o pr-4 pull-right" id={this.props.id}
               onClick={this.props.deleteModule}/>
            <i className="fa fa-edit pr-4 pull-right"
               id={this.props.id}/>
          </a>
        </li>

    )
  }
}

export default ModuleListItem;