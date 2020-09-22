import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Modal from './Modal/Modal';
import TodoSubmit from './Todo/TodoSubmit';


function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Молоко" },
    { id: 2, completed: false, title: "Хлеб" },
    { id: 3, completed: false, title: "Мясо" },
    { id: 4, completed: false, title: "Овощи" },
    { id: 5, completed: false, title: "Фрукты" },
  ]);
  const [state, setState] = React.useState();

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  function onState([todos]) {
    setState(
      state.map(() => setTodos(state))
    )
  }

  
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="Wrapper">
        <h1>Husband manual</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Дело сделано</p>
        )}
        <Modal todos={todos} state={onState}/>
          <TodoSubmit todos={todos}/>
      </div>



    </Context.Provider>
  );
}

export default App;
