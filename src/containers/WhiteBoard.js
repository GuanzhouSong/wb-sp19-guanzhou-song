import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "../components/CourseEditor";

class WhiteBoard extends Component {
  constructor() {
    super();
    this.courseService = new CourseService();
    this.state = {
      courses: this.courseService.findAllCourses()
    }
  }

  deleteCourse = course =>
      this.setState({
        courses: this.courseService.deleteCourse(course)
      });
  addCourse = () =>
      this.setState({
        courses: this.courseService.addCourse(null)
      });

  render() {
    return (
        <div>
          <Router>
            <div>
              <Route path='/' exact
                     render={() =>
                         <CourseGrid
                             addCourse={this.addCourse}
                             deleteCourse={this.deleteCourse}
                             courses={this.state.courses}/>}/>
              <Route path="/course/edit/:id"
                     exact
                     component={CourseEditor}/>
              <Route path='/table'
                     render={() => <CourseTable
                         courses={this.state.courses}/>}/>
            </div>
          </Router>
        </div>
    )
  }
}

export default WhiteBoard;