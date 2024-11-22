import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function FilmDetails() {
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f0a61359296dcb582f98495a46433c5d`
        );
        setFilmDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchFilmDetails();
  }, [id]);

  if (loading) return <p>Chargement en cours...</p>;
  if (!filmDetails) return <p>Film introuvable</p>;

  return (
    <div>
      <h1>{filmDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`}
        alt={filmDetails.title}
      />
      <p>{filmDetails.overview}</p>
      <p>Date de sortie : {filmDetails.release_date}</p>
      <p>Note : {filmDetails.vote_average}</p>
    </div>
  );
}
