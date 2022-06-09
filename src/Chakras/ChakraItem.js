
export default function ChakraItem({ name, crystal, }) {
  return (
    <div className="chakra">
      <img className='chakrapic' src={`${name}.jpeg`}/>
      <h3>This is the {name} Chakra.</h3>
      <p>The crystal {crystal.name} corresponds with this Chakra.</p>
      <p>{crystal.name} is the color {crystal.color}.</p>
      <p>A function of this Chakra is {crystal.function}.</p>
      <img className='chakrapic' src={`${crystal.name}.jpeg`} />
    </div>
  );
}