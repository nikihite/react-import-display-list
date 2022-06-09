import MovieItem from './MovieItem';
import './movies.css';

export default function MoviesList({ movies }) {
  return (
    <div className='movie2'>
      {
        movies.map((movie, i) => <MovieItem {...movie} key={movie.name + i} />)
      }
    </div>
  );
}