import React from 'react';
import * as constant from "constant"

var COURSE_API_URL = constant.COURSE_API_URL;
var MODULE_API_URL = constant.MODULE_API_URL;
var LESSON_API_URL = constant.LESSON_API_URL;
var TOPIC_API_URL = constant.TOPIC_API_URL;


class TopicService {
  findAllTopics(lessonId) {
    return fetch(LESSON_API_URL + lessonId + "/topic"
    ).then(response => response.json());
  }

  findTopicById(courseId, moduleId, lessonId, topicId) {
    return fetch(TOPIC_API_URL + topicId
    ).then(response => response.json());
  }

  deleteTopic(topicId) {
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

  createTopic(lessonId, topic) {
    return fetch(LESSON_API_URL + lessonId + "/topic", {
      body: JSON.stringify(topic),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }
}

export default TopicService;