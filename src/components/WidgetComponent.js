import React from 'react'
import HeadingWidget from './Widgets/HeadingWidget'
import ImageWidget from './Widgets/ImageWidget'

const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
    <div className="container widget">
      <div className="row mb-3">
        <div className="col-7">
          {
            widget.type == 'HEADING' &&
            <h2>Heading Widget</h2> ||
            widget.type == 'IMAGE' && <h2>Image Widget</h2>
          }
        </div>
        <div className="col-5">
          <button className="btn btn-warning">
            <i className="fa fa-arrow-up"></i>
          </button>
          <button className="btn btn-warning">
            <i className="fa fa-arrow-down "></i>
          </button>
          <select onChange={(event) => {
            widget.type = event.target.value;
            updateWidget(widget)
          }} className="custom-select d-inline w-50" value={widget.type}
                  id="HeadingRole">
            <option selected value="HEADING">Heading</option>
            <option value="LIST">List</option>
            <option value="IMAGE">Image</option>
            <option value="LINK">Link</option>
          </select>
          <button onClick={() => deleteWidget(widget)}
                  className="btn btn-danger">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
      {
        widget.type == 'HEADING' &&
        <HeadingWidget
            updateWidget={updateWidget}
            widget={widget}/> ||
        widget.type == 'IMAGE' && <ImageWidget widget={widget}/>
      }
    </div>;

export default WidgetComponent