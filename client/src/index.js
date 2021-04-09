import React from 'react';
import ReactDOM from 'react-dom';
import "./Sass/Main.sass"
import {store} from "./Reducers/index";
import {Provider} from "react-redux";
import App from "./App.jsx";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);
