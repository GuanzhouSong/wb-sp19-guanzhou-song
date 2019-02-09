import React from 'react'
import {connect} from 'react-redux'
import WidgetList from './WidgetList'
import WidgetListService from "../services/WidgetListService";

const stateToPropertyMapper = state => ({
  widgets: state.widgets,
  preview: state.preview
});

var widgetService = new WidgetListService();
const dispatchToPropertyMapper = dispatch => ({
  deleteWidget: widget =>
      dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
      }),
  addWidget: () =>
      dispatch({
        type: 'ADD_WIDGET'
      }),
  updateWidget: widget =>
      dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget
      }),
  findWidget: widget =>
      dispatch({
            type: 'FIND_WIDGET',
            widget: widget
          }
      ),
  findAllWidgetsForTopic: (courseId, moduleId, lessonId, topicId) =>
      dispatch({
        type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
        courseId: courseId,
        moduleId: moduleId,
        lessonId: lessonId,
        topicId: topicId

      }),
  findAllWidgets: () =>
      dispatch({
        type: 'FIND_ALL_WIDGETS'
      }),
  saveWidgets: () =>
      dispatch({
        type: 'SAVE_WIDGETS'
      }),
  widgetMovingUp: widget =>
      dispatch({
        type: 'WIDGET_MOVE_UP',
        widget: widget
      }),
  widgetMovingDown: widget =>
      dispatch({
        type: 'WIDGET_MOVE_DOWN',
        widget: widget
      }),
  togglePreview: () =>
      dispatch({
        type: 'TOGGLE_PREVIEW',
      })

});

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList);

export default WidgetListContainer