import React from 'react'
import './Card.css'

const Card = ({props}) => {
    
    const imageUrl = `https://raw.githubusercontent.com/daferrom/retos/main/Assets/imgs/${props.id}.jpg`
    
    return (
        <div className="Card">
            <img src={imageUrl} alt={props.name} ></img>
            <h4>{props.id} {props.name}</h4>
        </div>
    )
}

export default Card
