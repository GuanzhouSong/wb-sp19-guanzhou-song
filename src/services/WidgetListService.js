import React from 'react'

import TopicService from './TopicService'

var topicService = new TopicService();

class WidgetListService {

  findAllWidgets(courseId, moduleId, lessonId) {
    var topics = topicService.findAllTopics(courseId, moduleId, lessonId);
    var widgets = topics.flatMap(topic => {
      if (topic.widgets) {
        return topic.widgets
      } else {
        return []
      }

    });
    return widgets;
  }

  findAllWidgetsForTopic(courseId, moduleId, lessonId, topicId) {
    var topic = {
      ...topicService.findTopicById(courseId, moduleId, lessonId, topicId)
    };
    var widgets = topic.widgets ? topic.widgets : [];
    return [...widgets];
  }

  findWidgetById(courseId, moduleId, lessonId, topicId, widgetId) {
    let widgets = this.findAllWidgets(courseId, moduleId, lessonId, topicId);
    return widgets.filter(widget => widget.id == widgetId)[0]
  }

  deleteWidget(courseId, moduleId, lessonId, topicId, widgetId) {
    var topic = {
      ...topicService.findTopiccById(courseId, moduleId, lessonId, topicId)
    };
    topic.widgets = topic.widgets.filter(widget => widget.id != widgetId);
    topicService.updateTopic(courseId, moduleId, lessonId, topic);
  }

  updateWidget(courseId, moduleId, lessonId, topicId, widget) {
    var widgets = this.findAllWidgets(courseId, moduleId, lessonId,
        topicId).map(w => {
      if (w.id == widget.id) {
        return widget;
      } else {
        return w;
      }
    });
    var topic = {
      ...topicService.findTopicById(courseId, moduleId, lessonId, topicId)
    };
    topic.widgets = widgets;
    topicService.updateTopic(courseId, moduleId, lessonId, topic);
  }

  createWidgets(courseId, moduleId, lessonId, topicId, widgets) {
    var topic = {
      ...topicService.findTopicById(courseId, moduleId, lessonId, topicId)
    };
    topic.widgets = widgets;
    topicService.updateTopic(courseId, moduleId, lessonId, topic);
  }

  createWidget(courseId, moduleId, lessonId, topicId, widget) {
    var widgets = this.findAllWidgets(courseId, moduleId, lessonId, topicId);
    widgets.push(widget);
    var topic = {
      ...topicService.findTopicById(courseId, moduleId, lessonId, topicId)
    };
    topic.widgets = widgets;
    topicService.updateTopic(courseId, moduleId, lessonId, topic);
  }

}

export default WidgetListService;