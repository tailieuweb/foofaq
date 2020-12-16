import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";
import "./index.scss";
import reducer from "./reducers/index";


// imports pages:
import QuestionManager from "./pages/QuestionManager";
import Managers from "./pages/QuestionManager";
import FormManager from "./pages/FormManager";
//imports components:
import UserDetailStoryFirst from "./components/UserDetailStoryFirst/index";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>

        <Route path="/form/" component={QuestionManager}></Route>
        <Route path="/manager/" component={Managers}></Route>
        <Route path="/forms/" component={FormManager}></Route>
       

        <Route path="/user-story/" component={UserDetailStoryFirst}></Route>

      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
