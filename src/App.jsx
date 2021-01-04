import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory} from "react-router-dom";
import "./App.css";
import { Signup } from "./Signup";
import { TodoList } from "./TodoList";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGYiNbY_uE9wC2DvYi1H2oiivTNYmka1I",
  authDomain: "htwkfirebase-7cf7f.firebaseapp.com",
  projectId: "htwkfirebase-7cf7f",
  storageBucket: "htwkfirebase-7cf7f.appspot.com",
  messagingSenderId: "822672566104",
  appId: "1:822672566104:web:4fcca12dcb2ecdfecae72d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase.apps.length)

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




