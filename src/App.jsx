import React, { useState, createElement } from 'react';
// import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SimpleContainer from './components/Container';

function App() {

  return (
    <div>
      <ResponsiveAppBar/>
      <SimpleContainer/>
    </div>
  )
}

export default App
