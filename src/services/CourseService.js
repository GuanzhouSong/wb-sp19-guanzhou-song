import React from 'react';
import * as constant from "../constants/index"

var COURSE_API_URL = constant.COURSE_API_URL;

class CourseService {

  findAllCourses() {
    console.log(COURSE_API_URL);
    return fetch(COURSE_API_URL).then(response => response.json());
  }

  findCourseById = courseId =>
      fetch(COURSE_API_URL + "/" + courseId)
      .then(response => response.json());

  updateCourse(courseId, course) {
    return fetch(COURSE_API_URL + "/" + courseId, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  deleteCourse(courseId) {
    return fetch(COURSE_API_URL + "/" + courseId, {
      method: 'delete'
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