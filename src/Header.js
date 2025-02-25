import React from "react";

const Header = (props) => {
  const searchNotes = (e) => {
    const currentSearch = e.target.value;
    props.onSearch(currentSearch);
  };

  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={searchNotes}
        />
      </aside>
    </header>
  );
};

export default Header;
