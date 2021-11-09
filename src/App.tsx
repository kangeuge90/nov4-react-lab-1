import React from 'react';
import logo from './logo.svg';
import './App.css';


import AdDesigner from './AdDesigner';

import Header from './Header';
import Votes from './Votes';

function App() {
  return (
    <div className="App">
        <Header/>
        <AdDesigner/>
        <Votes/>
    </div>
  );
}

export default App;
