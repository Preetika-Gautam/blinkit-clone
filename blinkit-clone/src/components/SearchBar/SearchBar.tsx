import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <SearchOutlinedIcon />
      Search
    </div>
  );
};

export default SearchBar;
