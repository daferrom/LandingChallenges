import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import JSONDATA from './database/challengesList.json'

function App() {
  return (
    <div className="AppContainer">
      
      <h1>My challenges on Javascript</h1>
      <h2>Diego Ferro Software Developer</h2>
      <h2>Retos y baretos</h2>
      <input type="text" placeholder="Buscar..."></input>
      {JSONDATA.map(( val, key ) => { 
      return <div>{val.name}</div>;
      })}
      <Header></Header>
      <Cards></Cards>
    </div>
  );
}

export default App;
