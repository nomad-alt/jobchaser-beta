import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterJobListings } from './features/jobListings/jobListingsSlice';

function App() {
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const jobListings = useSelector(
    (state) => state.jobListings.filteredJobListings
  );

  const dispatch = useDispatch();

  const handleTagsChange = (event) => {
    const selectedTags = Array.from(event.target.selectedOptions, (option) =>
      option.value
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
    <div className="App">
      <h1>Jobchaser</h1>
      <form>
        <div>
          <label htmlFor="tags">Filter by tags:</label>
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
          </select>
        </div>
        <div>
          <label htmlFor="search">Search by job title:</label>
          <input
            type="text"
            id="search"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </form>
      <ul>
        {jobListings.map((listing) => (
          <li key={listing.id}>
            <h2>{listing.title}</h2>
            <p>
              Location: {listing.location}
              <br />
              Tags: {listing.tags.join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/* I denna kod använder vi react-redux-hooks useSelector och useDispatch för att hämta vår jobListings-data från Redux Store 
och att dispatcha vår filterJobListings-action för att uppdatera våra filtrerade jobblistningar. 
Vi använder också useState-hooks för att hantera våra taggar och sökfältets värden.

Vi använder ett formulär med två fält: en för taggar och en för sökning. 
När användaren väljer taggar eller skriver in en sökterm, uppdaterar vi våra lokala state-variabler och dispatchar vår filterJobListings-action. 
Vi renderar sedan en lista över jobbplatsannonser, baserat på de filtrerade jobblistningarna. */