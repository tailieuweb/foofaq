import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.scss";

import thunk from "redux-thunk";

import Login from "./pages/Login";

import reducer from "./reducers/index";
import QuestionList from "./pages/QuestionList";
// user
import UserProfileNavbar from "./pages/UserProfile/index";
import Contacts from "./components/ContactUser/Contacts";
import AddContact from "./components/ContactUser/AddContact";
import EditContact from "./components/ContactUser/EditContact";
import Navbar from "./components/Elements/Navbar";


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
          <Route path="/question-list" component={QuestionList}></Route>
          <Route path="/userprofile" component={UserProfileNavbar}></Route>


          <Route exact path="/" component={Contacts}></Route>
          <Route exact path="/contacts/add" component={AddContact}></Route>
          <Route exact path="/contacts/edit/:id" component={EditContact} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
