import React from 'react'
import WidgetComponent from './WidgetComponent'

class WidgetList extends React.Component {
  constructor(props) {
    super(props);
    // this.props.findAllWidgets()
    this.props.findAllWidgetsForTopic(this.props.topicId);
    this.state = {
      widgets: this.props.widgets,
      preview: this.props.preview
    };
    console.log(this.props)
  }

  componentDidMount() {
    this.props.findAllWidgetsForTopic(this.props.topicId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topicId !== this.props.topicId) {
      this.props.findAllWidgetsForTopic(this.props.topicId);
    }
  }

  render() {
    return (
        <div>
          <div className="container">
            <div className="row mb-3">
              <h1>Widget List</h1>
              <div className="offset-9">

                <button className="btn btn-success mr-2"
                        onClick={() => this.props.saveWidgets(
                            this.props.topicId)}>Save
                </button>
                <span className="mr-2">Preview</span>

                <a onClick={this.props.togglePreview}>
                  {this.props.preview ? <i className="fa fa-2x fa-toggle-on"/> :
                      <i
                          className="fa fa-2x fa-toggle-off"/>}
                </a>
              </div>
            </div>
          </div>

          <div className="list-group">
            {
              this.props.widgets.map(widget => {
                    return <WidgetComponent
                        key={widget.id}
                        updateWidget={this.props.updateWidget}
                        deleteWidget={this.props.deleteWidget}
                        widgetMovingUp={this.props.widgetMovingUp}
                        widgetMovingDown={this.props.widgetMovingDown}
                        isTail={(this.props.widgets.length - 1)
                        === widget.widgetOrder}
                        widget={widget}
                        preview={this.props.preview}/>

                  }
              )
            }
            <button
                onClick={() => {
                  this.props.addWidget(this.props.topicId)
                }}
                className="btn btn-success">
              Add
            </button>
          </div>
        </div>)
  }
}

export default WidgetList