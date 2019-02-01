import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
  widgets: state.widgets
});

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
  findAllWidgetsForTopic: () =>
      dispatch({
        type: 'FIND_ALL_WIDGETS_FOR_TOPIC'
      }),
  findAllWidgets: () =>
      dispatch({
        type: 'FIND_ALL_WIDGETS'
      })
});

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList);

export default WidgetListContainer