function SearchBar({ value, onChange }) {
  return (
    <label className="search-field" htmlFor="projectSearch">
      <span>Search</span>
      <input
        id="projectSearch"
        type="search"
        placeholder="Search by title, category, or detail"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;