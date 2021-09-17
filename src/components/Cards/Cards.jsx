import React from 'react'
import Card from '../Card/Card'
import Challengesjson from '../../database/challengesList.json'
import './Cards.css'

const Cards = ({props}) => {

    
    const Challenges = Challengesjson.filter((challenge)=>challenge.name.includes("click"))
    


    return (
        <div className="cardsContainer">
            {Challenges.map((challenge, id)=>
            <Card props={challenge} key={id}></Card>)} 
            
        </div>
    )
}

export default Cards
