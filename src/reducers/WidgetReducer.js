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
            widget.tid !== action.widget.tid

        )),
        preview: state.preview
      };

    case "ADD_WIDGET":
      return {
        widgets: [
          ...state.widgets,
          {
            tid: state.widgets.length,
            text: '',
            type: 'HEADING',
            size: 1,
            name: '',
            listType: 'Unordered list',
            width: 0,
            height: 0,
            title: '',
            item: [],
            ordered: true,
            url: '',
            urlName: '',
            src: '',
            widgetOrder: state.widgets.length,
          }
        ],
        preview: state.preview
      };

    case 'UPDATE_WIDGET':
      // replace the old widget with the new widget
      return {
        widgets: state.widgets.map(widget =>
            widget.tid === action.widget.tid ? action.widget : widget
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
      console.log(newState);
      return newState;

    case 'SAVE_WIDGETS':
      console.log(state);
      fetch(constants.WIDGET_API_URL + "batch/" + action.topicId, {
        method: 'put',
        body: JSON.stringify(state.widgets),
        headers: {
          'content-type': 'application/json'
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