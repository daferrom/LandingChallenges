import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="AppContainer">
      
      <h1>My challenges on Javascript</h1>
      <h2>Diego Ferro Software Developer</h2>
      <h2>Retos y baretos</h2>
      <Header></Header>
      <Cards></Cards>
    </div>
  );
}

export default App;
