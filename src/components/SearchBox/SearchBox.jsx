import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setFilterValue } from "../../redux/filters/slice";

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
