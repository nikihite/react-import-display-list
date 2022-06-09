import DogItem from './DogItem';
import './dog.css';

export default function DogsList({ dogs }) {
  return (
    <div className='dog-list'>
      {
        dogs.map((dog, i) => <DogItem {...dog} key={dog.name + i} />)
      }
    </div>
  );
}