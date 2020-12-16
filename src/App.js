import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar';
import Banner from './Components/Banner';
import Banking from './Components/Banking-title';
import Nextpage from './Components/nextpage';
import Appcard from './Components/App-card';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Banking />
      <Appcard />
      <Nextpage />

    </div>
  );
}

export default App;
