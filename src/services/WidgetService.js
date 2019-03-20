import React from 'react'

import TopicService from './TopicService'
import * as constant from "../constants";

var topicService = new TopicService();
var COURSE_API_URL = constant.COURSE_API_URL;
var MODULE_API_URL = constant.MODULE_API_URL;
var LESSON_API_URL = constant.LESSON_API_URL;
var TOPIC_API_URL = constant.TOPIC_API_URL;
var WIDGET_API_URL = constant.WIDGET_API_URL;
var WIDGET_HEADING_API_URL = constant.WIDGET_HEADING_API_URL;
var WIDGET_LINK_API_URL = constant.WIDGET_LINK_API_URL;
var WIDGET_LIST_API_URL = constant.WIDGET_LIST_API_URL;
var WIDGET_IMAGE_API_URL = constant.WIDGET_IMAGE_API_URL;
var WIDGET_PARAGRAPH_API_URL = constant.WIDGET_PARAGRAPH_API_URL;


class WidgetService {

  findAllWidgetsForTopic(topicId) {
    return fetch(TOPIC_API_URL + topicId + "/widget"
    ).then(response =>
        response.json()
    );
  }

  findWidgetById(widgetId) {
    return fetch(WIDGET_API_URL + "widget"
    ).then(response => response.json());
  }

  deleteWidget(widgetId) {
    return fetch(WIDGET_API_URL + widgetId, {
      method: 'delete'
    });
  }

  updateWidget(widget) {
    return fetch(WIDGET_API_URL + widget.wtype + "/" + widget.id, {
      method: 'PUT',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  createWidget(topicId, widget) {
    return fetch(TOPIC_API_URL + topicId + "/widget", {
      body: JSON.stringify(widget),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }

  createEmptyWidget(topicId) {
    return fetch(TOPIC_API_URL + topicId + "/emptyWidget", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
  }

}

export default WidgetService;