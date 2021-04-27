import React, { Component } from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Portfolio from './containers/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Portfolio />
        </ Layout>  
      </header>
    </div>
  );
}

export default App;
