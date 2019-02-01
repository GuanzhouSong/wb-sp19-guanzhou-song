import React from 'react'

const ImageWidget = ({widget, updateWidget}) =>
    <div>
      <input
          value={widget.link}
          onChange={event => {
            widget.link = event.target.value;
            updateWidget(widget)
          }}
          className="form-control"/>
      <input
          value={widget.text}
          onChange={event => {
            widget.text = event.target.value;
            updateWidget(widget)
          }}
          className="form-control"/>
      <h3>Preview</h3>
      <img src={widget.link} width="500px"/>
    </div>;

export default ImageWidget