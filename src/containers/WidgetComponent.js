import React from 'react'
import HeadingWidget from '../components/Widgets/HeadingWidget'
import ImageWidget from '../components/Widgets/ImageWidget'
import ListWidget from '../components/Widgets/ListWidget'
import LinkWidget from '../components/Widgets/LinkWidget'
import ParagraphWidget from "../components/Widgets/ParagraphWidget";
import "./WidgetList.css";

const WidgetComponent = ({isTail, widget, deleteWidget, updateWidget, widgetMovingUp, widgetMovingDown, preview}) =>
    <div className="container widget">
      <div className="row mb-3">
        <div className="col-7">
          {
            widget.type == 'HEADING' &&
            <h2>Heading Widget</h2> ||
            widget.type == 'IMAGE' && <h2>Image Widget</h2>
            ||
            widget.type == 'LINK' && <h2>Link Widget</h2>
            ||
            widget.type == 'LIST' && <h2>List Widget</h2>
            ||
            widget.type == 'PARAGRAPH' && <h2>Paragraph Widget</h2>
          }
        </div>
        <h1>{widget.id}</h1>
        <div className="col-5">
          {
            widget.order !== 0 && <button className="btn btn-warning"
                                          onClick={(event) => {
                                            widgetMovingUp(widget);
                                            updateWidget(widget)
                                          }}>
              <i className="fa fa-arrow-up"></i>
            </button>
          }
          {
            !isTail && <button className="btn btn-warning"
                               onClick={(event) => {
                                 widgetMovingDown(widget);
                                 updateWidget(widget)
                               }}>
              <i className="fa fa-arrow-down"></i>
            </button>
          }
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
            widget={widget}
            preview={preview}/>
        || widget.type == 'IMAGE' &&
        <ImageWidget
            updateWidget={updateWidget}
            widget={widget}
            preview={preview}/>
        || widget.type == 'LIST' &&
        <ListWidget
            updateWidget={updateWidget}
            widget={widget}
            preview={preview}/>
        || widget.type == 'LINK' &&
        <LinkWidget
            updateWidget={updateWidget}
            widget={widget}
            preview={preview}/>
        || widget.type == 'PARAGRAPH' &&
        <ParagraphWidget
            updateWidget={updateWidget}
            widget={widget}
            preview={preview}/>
      }
    </div>;
export default WidgetComponent