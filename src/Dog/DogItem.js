import './Dog.css';

export default function DogItem({ 
  name,
  breed,
  age,
  image,
}) {
  return (
    <div className='dog'>
      <h3>This is {name}</h3>
      <p>they are a {breed}</p>
      <p>and they are {age} years old</p>
      <img className='pic' src={`${name}.jpeg`} />
    </div>
  );
}