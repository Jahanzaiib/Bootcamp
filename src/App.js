import React from 'react';

import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
    <div className="App">
        <h1>Hi all i add a new file</h1>
        <Dinner dishname='mutton kharai' sweet='kheer'/>
        <Dinner dishname='mutton kharai' sweet='Jalabi'/>
        <Dinner dishname='mutton kharai' sweet='Nehari'/>
        <Dinner dishname='mutton kharai' sweet='spe'/>
    </div>
  );
}

export default App;
