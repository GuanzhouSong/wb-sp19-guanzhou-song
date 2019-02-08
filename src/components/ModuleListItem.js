import React from 'react'

class ModuleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="nav-item" id={this.props.id}
            onClick={this.props.selectModule}>
          <a className="nav-link" data-toggle="pill"
             href='#' id={this.props.id}>
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