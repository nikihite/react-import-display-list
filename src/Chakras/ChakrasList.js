import ChakraItem from './ChakraItem';
import './chakras.css';

export default function ChakrasList({ chakras }) {
  return (
    <div className='chakra2'>
      {
        chakras.map((chakra, i) => <ChakraItem {...chakra} key={i}/>)
      }
    </div>
  );
}