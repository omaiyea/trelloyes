import React from 'react';
import './App.css';
import List from './composition/List.js';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <List />
      <button type="button" className="List-add-button">
        + Add Random Card
      </button>
    </main>
  );
}

export default App;
