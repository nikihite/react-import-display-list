import './App.css';
import PizzasList from './Pizza/PizzasList';
import { pizzas } from './Pizza/pizzas-data';
import DogsList from './Dog/DogsList';
import { dogs } from './Dog/dogs-data';
// import your arrays here

function App() {
  return (
    <div className="App">
      <PizzasList pizzas={pizzas} />
      <hr />
      <DogsList dogs={dogs} />
    </div>
  );
}

export default App;
