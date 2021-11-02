import React from 'react';
import Cards from './Cards';
import Score from './Score';


function randomIndex (arr){
    let idx = Math.floor(Math.random()*arr.length);
    return arr[idx]
}

function getCards(vals, suits, numCards = 2){
    let cards = []
    cards.push([randomIndex(vals), randomIndex(suits)])
    while( cards.length < numCards){
        let newCard = [randomIndex(vals), randomIndex(suits)]
        if (!cards.includes(newCard)){
            cards.push(newCard)
        }
    }
    console.log(cards) 
    return cards

}

function BlackJack (props){
    const cardsPair = getCards(props.values, props.suits)
    return (
        <div>
            {cardsPair.map(c =>(
              <Cards CardID={c.join("")} keys={c}/>
            ))}
            <Score cards={cardsPair} />
        </div>
    )
}


BlackJack.defaultProps = {
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"],
    suits: ["C", "D", "H", "S"]
  };

export default BlackJack