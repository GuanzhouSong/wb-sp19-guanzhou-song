import React from 'react'

const LinkWidget = ({widget, updateWidget, preview}) =>
    <div>
      <input
          value={widget.url}
          onChange={event => {
            widget.url = event.target.value;
            updateWidget(widget)
          }}
          placeholder="Link URL"
          className="form-control"/>
      <input
          value={widget.text}
          onChange={event => {
            widget.text = event.target.value;
            updateWidget(widget)
          }}
          placeholder="Link Text"
          className="form-control"/>
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
        {
          <a href={widget.url} target="_blank">
            {widget.text}
          </a>
        }
      </div>
    </div>;

export default LinkWidget