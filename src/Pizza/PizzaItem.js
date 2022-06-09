import './pizza.css';

export default function PizzaItem({ pizza }) {
  return <div className="pizza">
    <img className="pizzapic" src={`${pizza}.jpeg`}/>
    {pizza}
  </div>;
}