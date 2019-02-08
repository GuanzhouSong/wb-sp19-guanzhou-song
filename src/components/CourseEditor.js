import React from 'react'
import ModuleList from './ModuleList'
import ModuleEditor from "./ModuleEditor";
import {Route} from 'react-router-dom'


class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {courseId: ''};
    this.selectCourse = this.selectCourse.bind(this);
  }
  
  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }



  render() {
    return (

        <div>
          {/*<h2>Editing course: {this.state.courseId}</h2>*/}
          <div className="row">
            <div className="col-4">
              <ModuleList courseId={this.state.courseId}/>
            </div>
            <div className="col-8">
              <Route path="/course/:courseId/module/:moduleId"
                     component={ModuleEditor}>
              </Route>
            </div>
          </div>
        </div>

    );
  }
}

export default CourseEditor