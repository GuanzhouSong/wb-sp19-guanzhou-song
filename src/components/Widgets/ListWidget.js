import React from 'react'

const ListWidget = ({widget, updateWidget, preview}) =>
    <div>
      <textarea className="form-control" placeholder="Paragraph content"
                type="text" value={widget.text}
                onChange={event => {
                  widget.text = event.target.value;
                  updateWidget(widget)
                }}/>
      <select
          onChange={event => {
            widget.size = parseInt(event.target.value);
            updateWidget(widget)
          }}
          className="form-control">
        <option value="1">Unordered List</option>
        <option value="2">Ordered List</option>
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
          {widget.text ? widget.text.split('\n').map(text =>
              <li>{text}</li>) : null}
        </div>
      </div>
    </div>;

export default ListWidget