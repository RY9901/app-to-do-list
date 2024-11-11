import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, addItem, updateItem, deleteItem, logout }) => {
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);

  const handleAddItem = () => {
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add</button>
      <button onClick={logout}>Logout</button>
      <ul>
        {items.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            editItem={editItem}
            setEditItem={setEditItem}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;