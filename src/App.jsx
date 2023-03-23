import React from 'react';
import Header from "./components/Header";
import Search from './components/Search';
import JobList from './components/JobList';
import Footer from "./components/Footer";
import styles from "./App.module.scss";


function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Search/>
      <JobList/>
      <Footer/>
    </div>
  );
}

export default App;

