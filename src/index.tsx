import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeContext} from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

const colors = {
    blue: "#03619c",
    yellow: "#8c8f03",
    red: "#9c0312"
};
ReactDOM.render(
  <React.StrictMode>
      <ThemeContext.Provider value={colors}>
            <App />
      </ThemeContext.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
