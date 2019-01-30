import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap"

export default class TopicPills
    extends React.Component {
  render() {
    return (
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active show" data-toggle="pill" href="#">Topic
              1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#">Topic 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#">Topic
              3</a>
          </li>
          <li className="nav-item">
            <a className="m-2 nav-link"> <i className="fa fa-plus"></i>
            </a></li>
        </ul>

    );
  }
}
