import WidgetListService from "../services/WidgetListService";

var widgetService = new WidgetListService();
const widgetReducer = (state = {widgets: [], preview: false},
    action) => {
  switch (action.type) {
    case 'DELETE_WIDGET':
      return {
        widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
        preview: state.preview
      };
    case 'ADD_WIDGET':
      return {
        widgets: [
          ...state.widgets,
          {
            type: 'HEADING',
            text: 'New Widget',
            size: 1,
            order: state.widgets.length
          }
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
        widgets: state.widgets.find(widget => widget.id === action.widget.id),
        preview: state.preview
      };
    case 'FIND_ALL_WIDGETS_FOR_TOPIC':
      return {
        widgets: widgetService.findAllWidgetsForTopic(action.courseId,
            action.moduleId, action.lessonId, action.topicId),
        preview: state.preview
      };
    case 'FIND_ALL_WIDGETS':
      return {
        widgets: state.widgets,
        preview: state.preview
      };
    case 'SAVE_WIDGETS':
      return {
        widgets: state.widgets,
        preview: state.preview
      };
    case 'WIDGET_MOVE_UP':
      let list = state.widgets;
      let order = action.widget.order;
      let w1 = list.find(w => w.order == order);
      let w2 = list.find(w => w.order == (order - 1));
      w1.order--;
      w2.order++;
      return {
        widgets: list.sort((a, b) => (a.order - b.order)),
        preview: state.preview
      };
    case 'WIDGET_MOVE_DOWN':
      list = state.widgets;
      order = action.widget.order;
      w1 = list.find(w => w.order == order);
      w2 = list.find(w => w.order == (order + 1));
      w1.order++;
      w2.order--;
      return {
        widgets: list.sort((a, b) => (a.order - b.order)),
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