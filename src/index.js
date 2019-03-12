import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import WhiteBoard from './containers/WhiteBoard'
import '../node_modules/jquery/dist/jquery';
// const store = createStore(widgetReducer);

ReactDOM.render(
    <div className="container-fluid">
      <WhiteBoard/>
    </div>,
    document.getElementById("root")
);