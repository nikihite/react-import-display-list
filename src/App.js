import PizzasList from './Pizza/PizzasList';
import { pizzas } from './Pizza/pizzas-data';
import DogsList from './Dog/DogsList';
import { dogs } from './Dog/dogs-data';
import ChakrasList from './Chakras/ChakrasList';
import { chakras } from './Chakras/chakras-data';
import MoviesList from './Movies/MoviesList';
import { movies } from './Movies/movies-data';
// import your arrays here

function App() {
  return (
    <div className="App">
      <PizzasList pizzas={pizzas} />
      <hr />
      <DogsList dogs={dogs} />
      <hr />
      <ChakrasList chakras={chakras} />
      <hr />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
