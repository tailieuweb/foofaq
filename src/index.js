import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";

import PageLayout from "./common/PageLayout/index";
import PageLayoutManager from "./common/PageLayoutManager/index";
import UserProfileActivity from "./pages/UserProfileActivity/index";
import ALayout from "./layout/ALayout/index";
import BLayout from "./layout/BLayout/index";
import BMain from "./partials/BMain/index";
import ListNewUser from "./pages/ListNewUser/index";
import UserDeveloperStoryAfter from "./pages/UserDeveloperStoryAfter/index";
import UserListAnswer from "./pages/UserListAnswer/index";
import UserListQuestion from "./pages/UserListQuestion/index";

import "./index.scss";
import reducer from "./reducers/index";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <ALayout exact path="/" component={UserProfileActivity} />
        <ALayout exact path="/bloglist" component={UserProfileActivity} />
        <ALayout exact path="/detailUser" component={UserProfileActivity} />
        <ALayout exact path="/edituserprofile" component={UserProfileActivity} />
        <ALayout exact path="/formblog" component={UserProfileActivity} />
        <BLayout exact path="/listnewuser" component={ListNewUser} />
        <ALayout exact path="/updatepost" component={UserProfileActivity} />
        <ALayout exact path="/useradd" component={UserProfileActivity} />
        <BLayout exact path="/userdeveloperstoryafter" component={UserDeveloperStoryAfter} />
        <ALayout exact path="/userdeveloperstorybefore" component={UserProfileActivity} />
        <ALayout exact path="/useredit" component={UserProfileActivity} />
        <ALayout exact path="/userlistanswer" component={UserListAnswer} />
        <ALayout exact path="/userlistquestion" component={UserListQuestion} />
        <ALayout exact path="/usermanager" component={UserProfileActivity} />
        <ALayout exact path="/userprofile" component={UserProfileActivity} />
        <BLayout path="/profile" component={BMain} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
