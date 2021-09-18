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
      <h2>Retos y mas retos</h2>
      <input type="text" placeholder="Buscar..." onChange={event => {setSearchTerm(event.target.value)}}></input>
      {JSONDATA.filter((val)=> {
        if(searchTerm === ""){
          return val
        } 
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }      
      }).map(( val, key ) => { 
      return (
        <div className="user" key={key}>
        <p>{val.name}</p>
        </div>
      );
      })}

      <Cards></Cards>
    </div>
  );
}

export default App;
