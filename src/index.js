import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";

import "./index.scss";

import reducer from "./reducers/index";
import EditUserProfile from "./components/EditUserProfile";
import UpdatePost from "./components/UpdatePost";
import UserDetail from "./components/UserDetail";

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
        <Route
          exact
          path="/EditUserProfile"
          component={EditUserProfile}
        ></Route>

        <Route exact path="/UpdatePost" component={UpdatePost}></Route>
        <Route exact path="/UserDetail" component={UserDetail}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
