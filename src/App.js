import React from 'react'
import TodoList from "./components/TodoList/TodoList";
import './App.css'


function App() {
  return (
    <div className="App">
      <div className='appHeader'>
        <h1>
          Todo List Redux-Saga
        </h1>
      </div>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
