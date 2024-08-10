import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, onChange }) => {
  return (
    <div className={css.searchContainer}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter contact name"
        value={filterValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
