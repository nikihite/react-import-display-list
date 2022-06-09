export default function MovieItem({ name, year, characters }) {
  return (
    <div className="movie">
      <img className='moviepic' src={`${year}.jpeg`}/>
      <h3>This movie is {name}.</h3>
      <p>It was released in {year}.</p>
      <p>Some characters in this movie are, {characters}.</p>
    </div>
  );
}