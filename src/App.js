import React from 'react';
import './App.css';
import Category from './components/Category';

function App() {
  return(
    <div className="container">
      <h1>Truth or Dare</h1>
      <h2>The youngest player starts</h2>
      <Category></Category>
    </div>
  )
}

export default App;