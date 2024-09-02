import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilterValue } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={css.searchContainer}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter contact name"
        value={filterValue}
        onChange={(e) => dispatch(setFilterValue(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
