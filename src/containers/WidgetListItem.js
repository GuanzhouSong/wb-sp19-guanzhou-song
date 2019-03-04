import React from 'react'
import './WidgetList.css';

export default class WidgetListItem
    extends React.Component {

  render() {
    return (
        <div>
          <div class="container widget" id="headingBox">
            <div class="row mb-3">
              <div class="col-7">
                <h2>Heading Widget</h2>
              </div>
              <div class="col-5">
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-down "></i>
                </button>
                <select class="custom-select d-inline w-50" id="HeadingRole"
                        onClick={this.onchange}>
                  <option selected value="heading">Heading</option>
                  <option value="list">List</option>
                  <option value="image">Image</option>
                  <option value="link">Link</option>
                  <option value="paragraph">Paragraph</option>
                </select>
                <button class="btn btn-danger">
                  <i class="fa fa-trash-o"></i>
                </button>
              </div>

            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Heading text"
                     type="text"/>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <select class="form-control" id="role">
                <option selected value="heading1">Heading1</option>
                <option value="heading2">Heading2</option>
                <option value="heading3">Heading3</option>
              </select>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Heading text"
                     type="text"/>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <h3>Preview</h3>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <h2>Heading text</h2>
            </div>
          </div>

          <div class="container widget" id="listBox">
            <div class="row mb-3">
              <div class="col-7">
                <h2>List Widget</h2>
              </div>
              <div class="col-5">
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-down "></i>
                </button>
                <select class="custom-select d-inline w-50" id="listrole">
                  <option value="heading">Heading</option>
                  <option selected value="list">List</option>
                  <option value="image">Image</option>
                  <option value="link">Link</option>
                  <option value="paragraph">Paragraph</option>
                </select>
                <button class="btn btn-danger">
                  <i class="fa fa-trash-o"></i>
                </button>
              </div>

            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <textarea class="form-control"
                        placeholder="Put each item in separate row"
                        type="text"/>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <select class="form-control" id="list">
                <option selected value="unorder">Unordered List</option>
                <option value="order">Ordered List</option>
              </select>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Widget Name"
                     type="text"/>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <h3>Preview</h3>
            </div>
            <div
                class="list-group row justify-content-start col-12 widget-inner padding-left20">
              <li>Put each</li>
              <li>item in</li>
              <li>separate row</li>
            </div>
          </div>


          <div class="container widget" id="paragraphBox">
            <div class="row mb-3">
              <div class="col-7">
                <h2>Paragraph Widget</h2>
              </div>
              <div class="col-5">
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-down "></i>
                </button>
                <select class="custom-select d-inline w-50" id="ParagraphROle">
                  <option value="heading">Heading</option>
                  <option value="list">List</option>
                  <option value="image">Image</option>
                  <option value="link">Link</option>
                  <option selected value="paragraph">Paragraph</option>
                </select>
                <button class="btn btn-danger">
                  <i class="fa fa-trash-o"></i>
                </button>
              </div>

            </div>
            <div class="row justify-content-start col-12 widget-inner">
          <textarea class="form-control" placeholder="Paragraph content"
                    type="text"></textarea>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Widget Name"
                     type="text"/>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <h3>Preview</h3>
            </div>
            <div
                class="list-group row justify-content-start col-12 widget-inner padding-left20">
              Lnoeavbi
            </div>
          </div>


          <div class="container widget" id="imageBox">
            <div class="row mb-3">
              <div class="col-7">
                <h2>Image Widget</h2>
              </div>
              <div class="col-5">
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-down "></i>
                </button>
                <select class="custom-select d-inline w-50" id="ImageRole">
                  <option value="heading">Heading</option>
                  <option value="list">List</option>
                  <option selected value="image">Image</option>
                  <option value="link">Link</option>
                  <option value="paragraph">Paragraph</option>
                </select>
                <button class="btn btn-danger">
                  <i class="fa fa-trash-o"></i>
                </button>
              </div>

            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="image link"
                     type="text"></input>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Widget Name"
                     type="text"/>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <h3>Preview</h3>
            </div>
            <div
                class="list-group row justify-content-start col-12 widget-inner">
              <img className="padding-left20"
                   src="https://picsum.photos/300/200"
                   width="500px"/>
            </div>
          </div>

          <div class="container widget" id="linkBox">
            <div class="row mb-3">
              <div class="col-7">
                <h2>Link Widget</h2>
              </div>
              <div class="col-5">
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa fa-arrow-down "></i>
                </button>
                <select class="custom-select d-inline w-50" id="LinkRole">
                  <option value="heading">Heading</option>
                  <option value="list">List</option>
                  <option value="image">Image</option>
                  <option selected value="link">Link</option>
                  <option value="paragraph">Paragraph</option>
                </select>
                <button class="btn btn-danger">
                  <i class="fa fa-trash-o"></i>
                </button>
              </div>

            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Link URL"
                     type="text"></input>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Link Text"
                     type="text"></input>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <input class="form-control" placeholder="Widget Name"
                     type="text"/>
            </div>
            <div class="row justify-content-start col-12 widget-inner">
              <h3>Preview</h3>
            </div>
            <div
                class="list-group row justify-content-start col-12 widget-inner padding-left20">
              <a href="#">Link</a>
            </div>
          </div>

          <div class="col-10 row justify-content-end padding-left20">
            <a className="btn  btn-danger" href="#">
              <i className="fa fa-plus-circle"> New</i>
            </a>
          </div>
        </div>
    );
  }
}