import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap"

const LessonTabs = ({lessons}) =>
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>
            <li key={lesson.id} className="nav-item">
              <a className="nav-link show" data-toggle="tab"
                 href="#">{lesson.title}
              </a>
            </li>
        )
      }
    </ul>;
export default LessonTabs