import { useState } from "react";

function SearchForm({ setCity }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a place"
        required
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
