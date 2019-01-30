import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap"

const TopicPills = ({lesson}) =>
    <ul className="nav nav-pills">
        {
            lesson.map(topics =>
                <li className="nav-item">
                    <a className="nav-link show" data-toggle="pill"
                       href="#">{topics.title}
                        <i className="fa fa-trash-o pr-4 pull-right"/>
                        <i className="fa fa-edit pr-4 pull-right"/>
                    </a>

                </li>
            )
        }
    </ul>;
export default TopicPills
