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
import AnswerForm from "./components/AnswerForm";
import QuestionForm from "./components/QuestionForm";
import AnswerDetail from "./components/QuestionAnswerDetail"
import QuestionApproval from "./pages/QuestionApproval";

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
          <Route path="/" component={AnswerDetail}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={QuestionList}></Route>
          <Route path="/" component={QuestionApproval}></Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
