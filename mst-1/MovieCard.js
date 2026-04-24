import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
      <hr />
    </div>
  );
}

export default MovieCard;