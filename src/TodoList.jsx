import React, {useEffect, useState} from 'react';
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import {useParams}from "react-router-dom"
import firebase from "firebase";

export const TodoList = () => {
    const params = useParams();
    const [todos, setTodos] = useState([]);
    console.log({params})

    useEffect(() => {
        firebase.database().ref('users/' + params.uid).on(
            'value',
            (snapshot) => {
                const data = snapshot.val();
                console.log({data})
                setTodos(data ? data.todos : [])
                console.log('nice')
            })
    }, [])


    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
        firebase.database().ref('users/' + params.uid).set({
            todos: newTodos
        });
    };

    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
        firebase.database().ref('users/' + params.uid).set({
            todos: newTodos
        });
    };

    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
        firebase.database().ref('users/' + params.uid).set({
            todos: newTodos
        });
    };

    return (
      <div className="app">
        <div className="todo-list">

          {todos && todos.map((todo, index) => (
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
