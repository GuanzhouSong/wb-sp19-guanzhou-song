import React from 'react'

const ImageWidget = ({widget, updateWidget, preview}) =>
    <div>
      <input
          value={widget.link}
          onChange={event => {
            widget.link = event.target.value;
            updateWidget(widget)
          }}
          className="form-control"/>
      <input
          value={widget.name}
          onChange={event => {
            widget.name = event.target.value;
            updateWidget(widget)
          }}
          className="form-control"/>
      <div hidden={!preview}>
        <h3>Preview</h3>
        <img src={widget.link} width="500px"/>
      </div>
    </div>;

export default ImageWidget