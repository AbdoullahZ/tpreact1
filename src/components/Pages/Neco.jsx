import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { increment, reset } from "../features/counterSlice";
import Burenyuu from "../Sounds/Burenyuu.mp3";

export function Neco() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      const audio = new Audio(Burenyuu);
      audio.play();
    }
  }, [count]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [location, dispatch]);

  return (
    <div>
      <img src="https://i.pinimg.com/originals/88/e8/46/88e846de93eb7d31eae1b5eb26e3c25b.gif" />
      <p>Valeur actuelle : {count}</p>
      <button onClick={() => dispatch(increment())}>???</button>
      <button onClick={() => dispatch(reset())}>Réinitialiser</button>
    </div>
  );
}
