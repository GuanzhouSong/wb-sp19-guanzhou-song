import * as constants from "../constants/index"
import widgetService from "../services/WidgetService"

const WIDGET_LESSON_URL =
    constants.WIDGET_API_URL;

export const findWidgetsByTopic = (dispatch, topicId) => {
  let ws = new widgetService();
  ws.findAllWidgetsForTopic(topicId)
  .then(widgets => {
    console.log(widgets.length);
    if (widgets.length > 0) {
      return dispatch({
        type: "FIND_ALL_WIDGETS_FOR_TOPIC",
        widgets: widgets
      })
    } else {
      return dispatch({
        type: "FIND_ALL_WIDGETS_FOR_TOPIC",
        widgets: []
      })
    }
  })

};

export const createWidget = (dispatch, topicId, widgets) => {
  let ws = new widgetService();
  let newWidget = {
    tid: widgets.length,
    text: 'New Text',
    wtype: 'HEADING',
    size: 1,
    name: 'New Widget',
    listType: 'Unordered list',
    width: 0,
    height: 0,
    title: 'New Title',
    item: ['new Item'],
    ordered: true,
    url: 'url',
    urlName: 'Url Name',
    src: 'new src',
    widgetOrder: widgets.length,
  };
  ws.createWidget(topicId, newWidget)
  .then(widget =>
      dispatch({
        type: "ADD_WIDGET",
        widget: widget
      }))
};

