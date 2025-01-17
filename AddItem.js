import React, { useState } from 'react';

const AddItem = ({ handleAdd }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return; // Avoid adding empty items
    handleAdd(newItem);
    setNewItem(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Add a new item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="add-item-input"
      />
      <button type="submit" className="add-item-button">
        Add
      </button>
    </form>
  );
};

export default AddItem;
