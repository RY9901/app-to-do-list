import React from 'react';
import { useAuth } from './hooks/useAuth';
import { useTodos } from './hooks/useTodos';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const { user, error, login } = useAuth();
  const { items, addItem, updateItem, deleteItem } = useTodos(user);

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <div>
            <h1>Welcome, {user.email}</h1>
            <p>You are now logged in.</p>
            <TodoList
              items={items}
              addItem={addItem}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          </div>
        ) : (
          <LoginForm login={login} error={error} />
        )}
      </header>
    </div>
  );
}

export default App;