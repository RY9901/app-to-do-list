import React from 'react';

const TodoItem = ({ item, editItem, setEditItem, updateItem, deleteItem }) => {
  return (
    <li>
      {editItem === item.id ? (
        <input
          type="text"
          defaultValue={item.text}
          onBlur={(e) => updateItem(item.id, e.target.value)}
        />
      ) : (
        <span onClick={() => setEditItem(item.id)}>{item.text}</span>
      )}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;