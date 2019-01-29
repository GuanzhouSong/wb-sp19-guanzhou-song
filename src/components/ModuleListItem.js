import React from 'react'

class ModuleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="list-group-item">
          {this.props.module.title}
          <a className="no-decorate d-inline" href="#">
            <i class="fa fa-trash-o pr-4 pull-right"/>
          </a>
        </li>
    )
  }
}

export default ModuleListItem;