import React from 'react';
import './Card.css';
import STORE from '../store.js'

function Card(props){
    const cards = props.cardOn.cardIds.map(function(cardId){
        return (
            <div className="Card">
                <button type="button">delete</button>
                <h3>{STORE.allCards[cardId].title}</h3>
                <p>{STORE.allCards[cardId].content}</p>
            </div>
        );
    });
    return (
        <div className="List-cards">
            {cards}
            <button type="button" className="List-add-button">
                + Add Random Card
            </button>
        </div>
    );
}

export default Card;