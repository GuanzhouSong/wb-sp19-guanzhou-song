import React, {Component} from 'react'
import HeadingWidget from '../components/Widgets/HeadingWidget'
import ImageWidget from '../components/Widgets/ImageWidget'
import ListWidget from '../components/Widgets/ListWidget'
import LinkWidget from '../components/Widgets/LinkWidget'
import ParagraphWidget from "../components/Widgets/ParagraphWidget";
import "./WidgetList.css";

class WidgetComponent extends Component {
  constructor(props) {
    super(props);
    // this.props.findAllWidgets()
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    console.log(this.props);
    return (
        <div className="container widget">
          <div className="row mb-3">
            <div className="col-7">
              {
                this.props.widget.wtype == 'HEADING' && <h2>Heading Widget</h2>
                ||
                this.props.widget.wtype == 'IMAGE' && <h2>Image Widget</h2>
                ||
                this.props.widget.wtype == 'LINK' && <h2>Link Widget</h2>
                ||
                this.props.widget.wtype == 'LIST' && <h2>List Widget</h2>
                ||
                this.props.widget.wtype == 'PARAGRAPH' && <h2>Paragraph
                  Widget</h2>
              }
            </div>
            <div className="col-5">
              {
                this.props.widget.widgetOrder !== 0 && <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      this.props.widgetMovingUp(this.props.widget);
                      this.props.updateWidget(this.props.widget)
                    }}>
                  <i className="fa fa-arrow-up"></i>
                </button>
              }
              {
                !this.props.isTail && <button className="btn btn-warning"
                                              onClick={(event) => {
                                                this.props.widgetMovingDown(
                                                    this.props.widget);
                                                this.props.updateWidget(
                                                    this.props.widget)
                                              }}>
                  <i className="fa fa-arrow-down"></i>
                </button>
              }
              <select onChange={(event) => {
                this.props.widget.wtype = event.target.value;
                this.props.updateWidget(this.props.widget)
              }} className="custom-select d-inline w-50"
                      value={this.props.widget.wtype}
                      id="HeadingRole">
                <option selected value="HEADING">Heading</option>
                <option value="LIST">List</option>
                <option value="IMAGE">Image</option>
                <option value="LINK">Link</option>
                <option value="PARAGRAPH">Paragraph</option>
              </select>
              <button onClick={() => this.props.deleteWidget(this.props.widget)}
                      className="btn btn-danger">
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
          {
            this.props.widget.wtype == 'HEADING' &&
            <HeadingWidget
                updateWidget={this.props.updateWidget}
                widget={this.props.widget}
                preview={this.props.preview}/>
            || this.props.widget.wtype == 'IMAGE' &&
            <ImageWidget
                updateWidget={this.props.updateWidget}
                widget={this.props.widget}
                preview={this.props.preview}/>
            || this.props.widget.wtype == 'LIST' &&
            <ListWidget
                updateWidget={this.props.updateWidget}
                widget={this.props.widget}
                preview={this.props.preview}/>
            || this.props.widget.wtype == 'LINK' &&
            <LinkWidget
                updateWidget={this.props.updateWidget}
                widget={this.props.widget}
                preview={this.props.preview}/>
            || this.props.widget.wtype == 'PARAGRAPH' &&
            <ParagraphWidget
                updateWidget={this.props.updateWidget}
                widget={this.props.widget}
                preview={this.props.preview}/>
          }
        </div>
    )
  }
}

export default WidgetComponent