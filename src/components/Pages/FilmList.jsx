import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function FilmList() {
  const [filmList, setFilmList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=f0a61359296dcb582f98495a46433c5d"
        );
        setFilmList(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchFilm();
  }, []);

  if (loading) return <p>Chargement en cours...</p>;

  return (
    <>
      <h1>Liste de films</h1>
      <ul>
        {filmList.map((film) => (
          <Link to={`/film/${film.id}`} key={film.id}>
            <img
              key={film.id}
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title || "Film"}
            />
          </Link>
        ))}
      </ul>
    </>
  );
}
