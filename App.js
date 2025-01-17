import React, { useState } from "react";
import Header from "./Header";
import Counter from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import "./App.css"; // Import CSS file for styling

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Practice Coding" },
    { id: 2, checked: false, item: "Exercise" },
    { id: 3, checked: false, item: "Read books" },
  ]);

  const [search, setSearch] = useState("");

  const handleAdd = (item) => {
    const newItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      item,
    };
    setItems([...items, newItem]);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <AddItem handleAdd={handleAdd} />
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={handleSearchChange}
          className="search-box"
        />
        <Counter
          items={filteredItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
