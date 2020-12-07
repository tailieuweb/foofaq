import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";

import Login from "./pages/Login";
import EditUserProfile from "./components/EditUserProfile";

import "./index.scss";

import reducer from "./reducers/index";
import QuestionList from "./pages/QuestionList";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route
            exact
            path="/EditUserProfile"
            component={EditUserProfile}
          ></Route>
          <Route path="/" component={QuestionList}></Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
