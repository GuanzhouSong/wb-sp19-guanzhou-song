import React from 'react'

const ImageWidget = ({widget, updateWidget, preview}) =>
    <div>
      <input
          value={widget.src}
          onChange={event => {
            widget.src = event.target.value;
            updateWidget(widget)
          }}
          placeholder="Image Link"
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
        <img src={widget.src} width="500px"/>
      </div>
    </div>;

export default ImageWidget