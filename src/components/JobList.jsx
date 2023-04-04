import React from "react";
import { useSelector } from "react-redux";
import styles from "./JobList.module.scss";
import { filterJobListings } from "../features/jobListings/jobListingsSlice";

const JobList = () => {
  const jobListings = useSelector(state => state.jobListings.filteredJobListings);

  return (
    <div>
      <ul>
        {jobListings.map(listing => (
          <li className={styles.jobList} key={listing.id}>
            <h2>{listing.title}</h2>
            <p>
              Location: {listing.location}
              <br />
              Tags: {listing.tags.join(", ")}
            </p>
            <h4>{listing.description}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default JobList;