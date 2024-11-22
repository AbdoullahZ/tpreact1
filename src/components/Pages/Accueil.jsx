import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "../css/Accueil.css";
import { increment, reset } from "../features/counterSlice";
import LIMBUS from "../Sounds/LIMBUS.mp3";

export function Accueil() {
  const [discover, setDiscover] = useState([]);
  const [loading, setLoading] = useState(true);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=f0a61359296dcb582f98495a46433c5d"
        );
        setDiscover(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchFilm();
  }, []);

  useEffect(() => {
    if (count % 7 === 0 && count !== 0) {
      const audio = new Audio(LIMBUS);
      audio.play();
    }
  }, [count]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [location, dispatch]);

  if (loading) return <p>Chargement en cours...</p>;

  return (
    <div>
      <h1>{"Bienvenue sur la page d'accueil !"}</h1>
      <ul>
        {discover.map((film) => (
          <img
            key={film.id}
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          />
        ))}
      </ul>

      <img src="https://preview.redd.it/don-quixote-reaction-image-dump-v0-w4ipy9g2jb8d1.jpeg?width=415&format=pjpg&auto=webp&s=c313fd69cdce3c99ba107ee7096fe26b40a30a82" />
      <p>Valeur actuelle : {count}</p>
      <button onClick={() => dispatch(increment())}>Incrémenter</button>
      <button onClick={() => dispatch(reset())}>Réinitialiser</button>
    </div>
  );
}
