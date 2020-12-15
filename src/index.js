import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";

import "./index.scss";

import reducer from "./reducers/index";
import Blog from "./components/BlogForm/index"
// imports pages

import Profile from './components/Components/Profile/profile';

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
     
        <Route exact path="/" component={Profile}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
