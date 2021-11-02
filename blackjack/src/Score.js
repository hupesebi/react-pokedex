import React from 'react'


function singleScore(card){
    const val = card[0];
    if (val === 'A'){
        return 11;
    } else if (["0", "J", "Q", "K"].includes(val)){
        return 10
    }
    return +val 
}

function totalScore (cards){
    let total = 0
    for (let card of cards){
        total += singleScore(card)
    }
    return total;
}

const Score = (props) =>{
    const score = totalScore(props.cards)
    return (
        <div>
      <h2>Score: {score}</h2>
      {score === 21 ? <h4> BLACKJACK!!!</h4> : null}
    </div>
    )
}

export default Score