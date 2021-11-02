import React from 'react'
import './Cards.css'

const Cards = (props) =>(
    <img className="Cards-image" src={`https://deckofcardsapi.com/static/img/${props.CardID}.png`} alt="" />
)

export default Cards