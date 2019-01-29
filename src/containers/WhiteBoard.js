import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseTable from '../containers/CourseTable';
import CourseGrid from '../containers/CourseGrid';
import CourseEditor from "../components/CourseEditor";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import CourseService from "../services/CourseService";

export default class WhiteBoard extends React.Component {
  constructor(props) {
    super(props);
    this.courseService = new CourseService();
    this.courses = this.courseService.findAllCourses();
    this.state = {
      selectedCourse: this.courses[0]
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
                                              courses={this.courses}/>}/>
            <Route path="/course/grid"
                   render={() => <CourseGrid selectCourse={this.selectCourse}
                                             courses={this.courses}/>}/>
            <Route path='/course/edit/:id'
                   component={CourseEditor}/>
          </div>
        </Router>

    )
  }
}



