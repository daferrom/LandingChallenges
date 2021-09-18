import './App.css';
import Cards from './components/Cards/Cards';
//import Header from './components/Header/Header';
import JSONDATA from './database/challengesList.json'

import {useState} from 'react'
function App() {
  const[searchTerm, setSearchTerm] = useState('')
  return (
    <div className="AppContainer">
      
      <h1>My challenges on Javascript</h1>
      <h2>Diego Ferro Software Developer</h2>
      
      <input className="searchBar" type="text" placeholder="Buscar..." onChange={event => {setSearchTerm(event.target.value)}}></input>
      <div className="cardsContainer">
      
      
      {JSONDATA.filter((val)=> {
        if(searchTerm === ""){
          return val
        } 
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }      
      }).map(( val, key ) => { 
      return (
       
        
          <div className="Card" key={key}>
            <a href={val.challengeUrl} target="blank">
            <img src= {`https://raw.githubusercontent.com/daferrom/retos/main/Assets/imgs/${val.id}.jpg`} alt={val.name} ></img>
            <h4>{val.id}. {val.name}</h4>
            </a>
          </div>
        
      );
      })}
      </div>
      

    </div>
  );
}

export default App;
