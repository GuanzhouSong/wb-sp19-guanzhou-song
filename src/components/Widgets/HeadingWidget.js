import React from 'react'

const HeadingWidget = ({widget, updateWidget, preview}) =>
    <div>
      <select
          onChange={event => {
            widget.size = parseInt(event.target.value);
            updateWidget(widget)
          }}
          className="form-control" value={widget.size ? widget.size : 1}>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
      </select>
      <input
          value={widget.title}
          onChange={event => {
            widget.title = event.target.value;
            updateWidget(widget)
          }}
          className="form-control"
          placeholder="Heading Text"/>
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

          widget.size === 2 && <h2>{widget.title}</h2> ||
          widget.size === 3 && <h3>{widget.title}</h3> ||
          widget.size === 4 && <h4>{widget.title}</h4> ||
          widget.size === 5 && <h5>{widget.title}</h5> ||
          <h1>{widget.title}</h1>
        }
      </div>
    </div>;

export default HeadingWidget