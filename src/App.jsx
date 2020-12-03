import React from "react";
import "./App.css";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMoVHAlfLjCZqBxSvsVWM4NEY25Rn0nLA",
  authDomain: "htwkfirebasetodo.firebaseapp.com",
  databaseURL: "https://htwkfirebasetodo.firebaseio.com",
  projectId: "htwkfirebasetodo",
  storageBucket: "htwkfirebasetodo.appspot.com",
  messagingSenderId: "773853444894",
  appId: "1:773853444894:web:f1e2ec3cade4f67bbee70f",
};

// Hallo My

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
