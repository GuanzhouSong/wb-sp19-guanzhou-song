import React from 'react'
import {connect} from 'react-redux'
import WidgetList from './WidgetList'
import * as actions from "../actions"

const stateToPropertyMapper = state => ({
  widgets: state.widgets,
  preview: state.preview
});

const dispatchToPropertyMapper = dispatch => ({
  deleteWidget: widget =>
      dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
      }),

  addWidget: (topicId, widgets) =>
      actions.createWidget(dispatch, topicId, widgets),

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
  findAllWidgetsForTopic: (topicId) =>
      actions.findWidgetsByTopic(dispatch, topicId),

  findAllWidgets: () =>
      dispatch({
        type: 'FIND_ALL_WIDGETS'
      }),
  saveWidgets: (topicId) =>
      dispatch({
        type: 'SAVE_WIDGETS',
        topicId: topicId
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