import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseGrid from '../components/CourseGrid'
import CourseTable from '../components/CourseTable'
import CourseEditor from "./CourseEditor";
import ProfilePage from "./ProfilePage";

class WhiteBoard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <Router>
            <div>
              <Route path='/' exact
                     render={() =>
                         <CourseGrid/>}/>
              <Route path="/course/:courseId"
                     component={CourseEditor}/>
              <Route path='/table'
                     render={() => <CourseTable/>}/>
              <Route path='/profile'
                     render={() => <ProfilePage/>}/>
            </div>
          </Router>
        </div>
    )
  }
}

export default WhiteBoard;