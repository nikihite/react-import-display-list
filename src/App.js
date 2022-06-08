import logo from './logo.svg';
import './App.css';
import PizzasList from './PizzasList';
import { pizzas } from './pizzas-data';
// import your arrays here

function App() {
  return (
    <div className="App">
      <PizzasList pizzas={pizzas} />
    </div>
  );
}

export default App;
