import PizzaItem from './PizzaItem';

export default function PizzaList({ pizzas }) {
  return <div>
    {
      pizzas.map((pizza, i) => <PizzaItem pizza={pizza} key={pizza + i} />)
    }
  </div>;
}