import React from 'react';

var COURSE_API_URL = "http://localhost:8080/api/course/";
var MODULE_API_URL = "http://localhost:8080/api/module/";
var LESSON_API_URL = "http://localhost:8080/api/lesson/";
var TOPIC_API_URL = "http://localhost:8080/api/topic/";


class TopicService {
  findAllTopics(courseId, moduleId, lessonId) {
    return fetch(LESSON_API_URL + lessonId + "/topic"
    ).then(response => response.json());
  }

  findTopicById(courseId, moduleId, lessonId, topicId) {
    return fetch(TOPIC_API_URL + topicId
    ).then(response => response.json());
  }

  deleteTopic(courseId, moduleId, lessonId, topicId) {
    return fetch(TOPIC_API_URL + topicId, {
      method: 'delete'
    });
  }

  updateTopic(courseId, moduleId, lessonId, topic) {
    return fetch(TOPIC_API_URL + topic.id, {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  createTopic(courseId, moduleId, lessonId, topic) {
    return fetch(MODULE_API_URL + moduleId + "/lesson", {
      body: JSON.stringify(topic),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }
}

export default TopicService;