import * as constants from "../constants/index"
import widgetService from "../services/WidgetService"

const WIDGET_LESSON_URL =
    constants.WIDGET_API_URL;

export const findWidgetsByTopic = (dispatch, topicId) => {
  let ws = new widgetService();
  ws.findAllWidgetsForTopic(topicId)
  .then(widgets =>
      dispatch({
        type: "FIND_ALL_WIDGETS_FOR_TOPIC",
        widgets: widgets
      }))
};