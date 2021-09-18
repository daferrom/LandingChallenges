import React from 'react'
//import DataChallenges from '../../database/challengesList.json'

const Header = () => {
    

    return (
        <div className="header">
        <h4 className="title">Buscador</h4>
        <small className="subtitle">Buscar reto por nombre </small>
        <input type="text" id="filter" placeholder="Buscar"></input>
        
        <ul id='result' className="user-list">
            <li>
                <h3>Loading...</h3>
            </li>
        </ul>
        
        </div>
        
        
    )
}

export default Header
