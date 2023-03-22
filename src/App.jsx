import React, { useState } from 'react';
import Header from "./components/Header";
import Search from './components/Search';
import JobList from './components/JobList';
import styles from "./App.module.scss";


function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Search/>
      <JobList/>
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