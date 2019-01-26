import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as courses from '../services/Data/courses2.json';
import CourseTable from '../containers/CourseTable';
import CourseGrid from '../containers/CourseGrid';

export default class WhiteBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourse: courses.courseData[0]
    }
  };

  selectCourse = course =>
      this.setState({selectedCourse: course});

  render() {
    return (
        <Router>
          <div>
            <Route path="/course/table"
                   render={() => <CourseTable selectCourse={this.selectCourse}
                                              courses={courses.courseData}/>}/>
            <Route path="/course/grid"
                   render={() => <CourseGrid selectCourse={this.selectCourse}
                                             courses={courses.courseData}/>}/>
          </div>
        </Router>

    )
  }
}



