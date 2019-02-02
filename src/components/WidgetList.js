import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({
  widgets, addWidget, deleteWidget, updateWidget, togglePreview,
  findWidget, findAllWidgetsForTopic, findAllWidgets, saveWidgets, widgetMovingUp, widgetMovingDown, preview
}) =>
    <div>
      <div className="container">
        <div className="row mb-3">
          <h1>Widget List</h1>
          <div className="offset-9">

            <button className="btn btn-success mr-2">Save</button>
            <span className="mr-2">Preview</span>
            <a onClick={togglePreview}>
              {preview ? <i className="fa fa-2x fa-toggle-on"/> : <i
                  className="fa fa-2x fa-toggle-off"/>}
            </a>
          </div>
        </div>
      </div>

      <div className="list-group">
        {
          widgets.map(widget =>
              <WidgetComponent
                  key={widget.id}
                  updateWidget={updateWidget}
                  deleteWidget={deleteWidget}
                  widgetMovingUp={widgetMovingUp}
                  widgetMovingDown={widgetMovingDown}
                  isTail={(widgets.length - 1) === widget.order}
                  widget={widget}
                  preview={preview}/>
          )
        }
        <button
            onClick={addWidget}
            className="btn btn-success">
          Add
        </button>
      </div>
    </div>;

export default WidgetList