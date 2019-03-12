import React from 'react'

const ParagraphWidget = ({widget, updateWidget, preview}) =>
    <div>
      <textarea className="form-control" placeholder="Paragraph content"
                type="text" value={widget.text}
                onChange={event => {
                  widget.text = event.target.value;
                  updateWidget(widget)
                }}/>

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
          {widget.text}
        </div>
      </div>
    </div>;

export default ParagraphWidget