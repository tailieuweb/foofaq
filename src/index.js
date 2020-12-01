import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";

import Login from "./pages/Login";

import "./index.scss";

import reducer from "./reducers/index";
import QuestionList from "./pages/QuestionList";
import QuestionApproval from "./pages/QuestionApproval";
import QuestionDetail from "./pages/QuestionDetail";
import CategoryTag from "./components/CategoryCard";
import NavigationBar from "./components/NavigationBar";
import QuestionApprovalDetail from "./components/QuetionAprovalDetail";

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
          {/* <Route exact path="/login" component={Login}></Route>
          <Route path="/" component={QuestionList}></Route> */}
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={QuestionList}></Route>
          <Route path="/approval" component={QuestionApproval}></Route>
          <Route path="/detail" component={QuestionDetail}></Route>
          <Route path="/category" component={CategoryTag}></Route>
          <Route path="/navigation" component={NavigationBar}></Route>
          <Route
            path="/detailapproval/:id"
            component={QuestionApprovalDetail}
          ></Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
