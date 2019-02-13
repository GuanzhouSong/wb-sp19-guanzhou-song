import React from 'react';
import {Link} from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <tr>
          <td>
            <Link
                to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
              {this.props.module.title}
            </Link>
          </td>
          <td>
            <Link to={`/course/${this.props.courseId}`}>
              <i onClick=
                     {() => this.props.deleteModule(this.props.module.id)}
                 className="fa fa-trash"></i>
            </Link>

          </td>
        </tr>
    );
  }
}