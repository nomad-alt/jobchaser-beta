import React from "react";
import { useSelector} from 'react-redux';
import { filterJobListings } from '../features/jobListings/jobListingsSlice';


function JobList(){
    const jobListings = useSelector(
    (state) => state.jobListings.filteredJobListings
  );
    return(<div>
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
    </div>)
}

export default JobList;