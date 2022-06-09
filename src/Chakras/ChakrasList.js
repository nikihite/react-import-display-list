import ChakraItem from './ChakraItem';

export default function ChakrasList({ chakras }) {
  return (
    <div>
      {
        chakras.map((chakra, i) => <ChakraItem {...chakra} key={i}/>)
      }
    </div>
  );
}