import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Search.module.scss";
import { filterJobListings } from "../features/jobListings/jobListingsSlice";

function Search() {
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const dispatch = useDispatch();

  const handleTagsChange = (event) => {
    const selectedTags = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setTags(selectedTags);

    dispatch(filterJobListings({ tags: selectedTags, searchQuery }));
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchQuery(searchValue);

    dispatch(filterJobListings({ tags, searchQuery: searchValue }));
  };
  return (
    <form>
      <div className={styles.searchField}>
        <input
          className={styles.input}
          type="text"
          id="search"
          name="search"
          placeholder="Search by job title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className={styles.dropdownMenu}>
          <button
            className={styles.menuButton}
            onMouseEnter={() => setDropdownMenu(true)}
          >
            Filter
          </button>
          {dropdownMenu && (
            <div
              className={styles.option}
            onMouseLeave={() => setDropdownMenu(false)} 
            >
              <select
                id="tags"
                name="tags"
                multiple
                value={tags}
                onChange={handleTagsChange}
              >
                <option value="frontend">Frontend</option>

                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
                <option value="design">Design</option>
                <option value="webb">Webb</option>
                <option value="Python">Python</option>
                <option value="Jenkins">Jenkins</option>
                <option value=".net">.NET</option>
                <option value="c#">C#</option>
              </select>
            </div>
          )}
          {/* <label htmlFor="tags">Filter by tags:</label>
          <select
            id="tags"
            name="tags"
            multiple
            value={tags}
            onChange={handleTagsChange}
          >
  
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="design">Design</option>
            <option value="webb">Webb</option>
            <option value=".net">.NET</option>
            <option value="c#">C#</option>
            <option value="Python">Python</option>
            <option value="Jenkins">Jenkins</option>
          </select> */}
        </div>
      </div>
    </form>
  );
}

export default Search;
