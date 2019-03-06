import WidgetService from "../services/WidgetService";
import * as constants from "../constants/index";

var widgetService = new WidgetService();
export const widgetReducer = (state = {widgets: [], preview: "hahaha"},
    action) => {
  let newState = state;
  switch (action.type) {

    case "DELETE_WIDGET":
      return {
        widgets: state.widgets.filter(widget => (
            widget.widgetOrder !== action.widget.widgetOrder
        )).sort((a, b) => (a.widgetOrder - b.widgetOrder)),
        preview: state.preview
      };

    case "ADD_WIDGET":
      return {
        widgets: [
          ...state.widgets,
          action.widget
        ],
        preview: state.preview
      };

    case 'UPDATE_WIDGET':
      // replace the old widget with the new widget
      return {
        widgets: state.widgets.map(widget =>
            widget.id === action.widget.id ? action.widget : widget
        ),
        preview: state.preview
      };

    case 'FIND_WIDGET':
      return {
        widgets: state.widgets.find(widget => widget.tid === action.widget.tid),
        preview: state.preview
      };

    case 'FIND_ALL_WIDGETS_FOR_TOPIC':
      newState = Object.assign({}, state);
      newState.preview = false;
      newState.widgets = action.widgets;
      return newState;

    case 'SAVE_WIDGETS':
      console.log(state);
      state.widgets.forEach(widget => {
        switch (widget.wtype) {
          case 'HEADING':
            fetch(constants.WIDGET_HEADING_API_URL + widget.id, {
              method: 'put',
              body: JSON.stringify(widget),
              headers: {
                'content-type': 'application/json'
              }
            });
            break;
          case 'IMAGE':
            fetch(constants.WIDGET_IMAGE_API_URL + widget.id, {
              method: 'put',
              body: JSON.stringify(widget),
              headers: {
                'content-type': 'application/json'
              }
            });
            break;
          case 'LINK':
            fetch(constants.WIDGET_LINK_API_URL + widget.id, {
              method: 'put',
              body: JSON.stringify(widget),
              headers: {
                'content-type': 'application/json'
              }
            });
            break;
          case 'LIST':
            fetch(constants.WIDGET_LIST_API_URL + widget.id, {
              method: 'put',
              body: JSON.stringify(widget),
              headers: {
                'content-type': 'application/json'
              }
            });
            break;
          case 'PARAGRAPH':
            fetch(constants.WIDGET_PARAGRAPH_API_URL + widget.id, {
              method: 'put',
              body: JSON.stringify(widget),
              headers: {
                'content-type': 'application/json'
              }
            });
            break;

        }
      });
      return state;

    case 'WIDGET_MOVE_UP':
      let list = state.widgets;
      let order = action.widget.widgetOrder;
      let w1 = list.find(w => w.widgetOrder == order);
      let w2 = list.find(w => w.widgetOrder == (order - 1));
      w1.widgetOrder--;
      w2.widgetOrder++;
      return {
        widgets: list.sort((a, b) => (a.widgetOrder - b.widgetOrder)),
        preview: state.preview
      };

    case 'WIDGET_MOVE_DOWN':
      list = state.widgets;
      order = action.widget.widgetOrder;
      w1 = list.find(w => w.widgetOrder == order);
      w2 = list.find(w => w.widgetOrder == (order + 1));
      w1.widgetOrder++;
      w2.widgetOrder--;
      return {
        widgets: list.sort((a, b) => (a.widgetOrder - b.widgetOrder)),
        preview: state.preview
      };

    case 'TOGGLE_PREVIEW':
      return {
        preview: !state.preview,
        widgets: state.widgets
      };

    default:
      return state;
  }
};

export default widgetReducer;