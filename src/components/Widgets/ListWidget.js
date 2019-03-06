import React from 'react'

const ListWidget = ({widget, updateWidget, preview}) =>
    <div>
      <textarea className="form-control" placeholder="List Item"
                type="text" value={widget.listText}
                onChange={event => {
                  widget.listText = event.target.value;
                  updateWidget(widget)
                }}/>
      <select
          onChange={event => {
            widget.ordered = event.target.value == "true" ? true : false;
            updateWidget(widget)
          }}
          className="form-control">
        <option value="false" selected={widget.ordered}>Unordered List</option>
        <option value="true" selected={widget.ordered}>Ordered List</option>
      </select>
      <input
          value={widget.name}
          onChange={event => {
            widget.name = event.target.value;
            updateWidget(widget)
          }}
          placeholder="Widget Name"
          className="form-control"/>
      <div hidden={!preview}>
        <h3>Preview</h3>
        <div
            className="list-group row justify-content-start col-12 widget-inner">
          {widget.listText ? widget.listText.split('\n').map(text =>
              <li>{text}</li>) : null}
        </div>
      </div>
    </div>;

export default ListWidget