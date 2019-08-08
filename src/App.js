import React, { Component } from 'react';
import List from './composition/List';
import './App.css';
import STORE from './store.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: STORE.lists,
      allCards: STORE.allCards,
    }
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.addRandomCard = this.addRandomCard.bind(this);
  }

  /*deletes all instances of the card across all lists */
 handleDeleteCard(cardId){
   console.log(cardId);
  }

  addRandomCard(){
    console.log('added');
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List 
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDelete={this.handleDeleteCard}
              onAdd={this.addRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;