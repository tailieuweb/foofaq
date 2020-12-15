import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLayout from './common/PageLayout/index';
import PageLayoutManager from './common/PageLayoutManager/index';
import UserListAnswer from "./pages/UserListAnswer/index";

import thunk from "redux-thunk";

import "./index.scss";

import reducer from "./reducers/index";

// imports pages


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PageLayout>
        <Route  path="/" component={UserListAnswer}></Route>
        </PageLayout>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
