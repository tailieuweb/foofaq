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

import EventsGridViewManager from "./components/EventsGridViewManager";
//import QuestionApprovalDetail from "./components/QuetionAprovalDetail";
import QuestionCreateForm from "./pages/QuestionCreateForm";
// import QuestionApprovalCard from "./components/QuestionApprovalCard";
// import CategoriesManager from "./components/CategoriesManager";
import Managers from "./pages/QuestionManager";
// import CategoriesForm from "./components/FormManager/Categories";
// import QuestionApprovalDetail from "./components/QuetionAprovalDetail";
import QuestionCategoryList from "./pages/QuestionCategoryList";
import FormManager from "./pages/FormManager";
import QuestionGridViewManager from "./components/QuestionGridViewManager";
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
          <Route path="/detail" component={QuestionDetail}></Route>
          <Route path="/approval" component={QuestionApproval}></Route>

          <Route path="/form" component={QuestionCreateForm}></Route>
          <Route path="/category" component={QuestionCategoryList}></Route>
          <Route path="/manager/" component={Managers}></Route>
          <Route path="/forms/" component={FormManager}></Route>
          <Route path="/griddemo" component={QuestionGridViewManager}></Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
