import './dog.css';

export default function DogItem({ 
  name,
  breed,
  age,
}) {
  return (
    <div className='dog'>
      <h3>This is {name},</h3>
      <p>{breed},</p>
      <p>and {age} years old.</p>
      <img className='pic' src={`${name}.jpeg`} />
    </div>
  );
}