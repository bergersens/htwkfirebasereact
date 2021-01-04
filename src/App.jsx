import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory} from "react-router-dom";
import "./App.css";
import { Signup } from "./Signup";
import { TodoList } from "./TodoList";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCw3M-AGnMtIDtcGBcNFS43pJ_y07c1Do",
  authDomain: "htwkfirebase-5a2d7.firebaseapp.com",
  projectId: "htwkfirebase-5a2d7",
  storageBucket: "htwkfirebase-5a2d7.appspot.com",
  messagingSenderId: "908501330455",
  appId: "1:908501330455:web:aa484ae57da8d1f122ca52"
};

if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signup"/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/todo-list/:uid">
            <TodoList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;




