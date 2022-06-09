import MovieItem from './MovieItem';

export default function MoviesList({ movies }) {
  return (
    <div>
      {
        movies.map((movie, i) => <MovieItem {...movie} key={movie.name + i} />)
      }
    </div>
  );
}