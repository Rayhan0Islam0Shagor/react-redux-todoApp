import React from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {

  return (
    <div className="container App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
