import React from 'react';
import * as constant from "../constants/index"

var COURSE_API_URL = constant.COURSE_API_URL;

class CourseService {

  findAllCourses() {
    return fetch(COURSE_API_URL).then(response => response.json());
  }



  useCoupon(id) {
    return fetch(COURSE_API_URL  + id, {
      method: 'PUT'
    });
  }

  createCourse(course) {
    return fetch(COURSE_API_URL, {
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }

}

export default CourseService;