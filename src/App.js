import React, { Component } from 'react';
import List from './composition/List';
import './App.css';
import STORE from './store.js';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {STORE.lists.map(list => (
            <List 
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => STORE.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;