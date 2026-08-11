import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import { App } from "./components/app/App";

import "./sass/app.scss";



// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode >,
  );
}


