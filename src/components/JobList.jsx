import React from "react";
import { useSelector } from "react-redux";
import styles from "./JobList.module.scss";
import { filterJobListings } from "../features/jobListings/jobListingsSlice";

function JobList() {
  const jobListings = useSelector(
    (state) => state.jobListings.filteredJobListings
  );
  return (
    <div>
      <ul>
        {jobListings.map((listing) => (
          <li className={styles.jobsList} key={listing.id}>
            <h2>{listing.title}</h2>
            <p>
              Location: {listing.location}
              <br />
              Tags: {listing.tags.join(", ")}
            </p>
            <h4>{listing.decrebtion}</h4>
            {/* <p>
              <address>
              <a href = "mailto: abc@example.com">Send Email</a>
              </address></p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
