import React from 'react';
import * as constant from "../constants/index"

var COURSE_API_URL = constant.COURSE_API_URL;
var MODULE_API_URL = constant.MODULE_API_URL;
var LESSON_API_URL = constant.LESSON_API_URL;


class LessonService {

  findAllLessons(courseId, moduleId) {
    return fetch(MODULE_API_URL + moduleId + "/lesson"
    ).then(response => response.json());
  }

  findLessonById(courseId, moduleId, lessonId) {
    return fetch(LESSON_API_URL + lessonId
    ).then(response => response.json());
  }

  deleteLesson(lessonId) {
    return fetch(LESSON_API_URL + lessonId, {
      method: 'delete'
    });
  }

  updateLesson(courseId, moduleId, lesson) {
    return fetch(LESSON_API_URL + lesson.id, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  createLesson(courseId, moduleId, lesson) {
    return fetch(MODULE_API_URL + moduleId + "/lesson", {
      body: JSON.stringify(lesson),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }
}

export default LessonService;