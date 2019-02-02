const widgetsJson =
    {
      widgets: [
        {
          id: 123,
          title: 'Widget 1',
          type: 'HEADING',
          text: 'This is a heading',
          size: 2,
          order: 0
        },
        {
          id: 234,
          title: 'Widget 2',
          type: 'IMAGE',
          order: 1
        }, {
          id: 1234,
          title: 'Widget 3',
          type: 'HEADING',
          text: 'This is a heading',
          size: 2,
          order: 2
        },
      ]
    };
const widgetReducer = (state = widgetsJson, action) => {
  switch (action.type) {
    case 'DELETE_WIDGET':
      return {
        widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
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
        ]
      };
    case 'UPDATE_WIDGET':
      // replace the old widget with the new widget
      return {
        widgets: state.widgets.map(widget =>
            widget.id === action.widget.id ? action.widget : widget
        )
      };
    case 'FIND_WIDGET':
      return {
        widgets: state.widgets.find(widget => widget.id === action.widget.id)
      };
    case 'FIND_ALL_WIDGETS_FOR_TOPIC':
      return {
        widgets: state.widgets
      };
    case 'FIND_ALL_WIDGETS':
      return {
        widgets: state.widgets
      };
    case 'SAVE_WIDGETS':
      return {
        widgets: state.widgets
      };
    case 'WIDGET_MOVE_UP':
      let list = state.widgets;
      let order = action.widget.order;
      let w1 = list.find(w => w.order == order);
      let w2 = list.find(w => w.order == (order - 1));
      w1.order--;
      w2.order++;
      return {
        widgets: list.sort((a, b) => (a.order - b.order))
      };
    case 'WIDGET_MOVE_DOWN':
      list = state.widgets;
      order = action.widget.order;
      w1 = list.find(w => w.order == order);
      w2 = list.find(w => w.order == (order + 1));
      w1.order++;
      w2.order--;
      return {
        widgets: list.sort((a, b) => (a.order - b.order))
      };
    default:
      return state;
  }
};

export default widgetReducer;