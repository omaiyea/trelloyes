import React from 'react';
import './List.css';
import STORE from '../store.js';
import Card from './Card.js'

function List(){
    const lists = STORE.lists.map(function(listItem){
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{listItem.header}</h2>
                </header>
                <Card cardOn={listItem}/>
            </section>
        );
    });
    return(
    <div className="App-list">
        {lists}
    </div>
    );
}

export default List;