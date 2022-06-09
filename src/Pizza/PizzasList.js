import PizzaItem from './PizzaItem';
import './pizza.css';

export default function PizzaList({ pizzas }) {
  return <div className='pizzatwo'>
    {
      pizzas.map((pizza, i) => <PizzaItem pizza={pizza} key={pizza + i} />)
    }
  </div>;
}