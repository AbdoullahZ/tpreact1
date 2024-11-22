import { Link } from "react-router-dom";
import "../css/Navbar.css";

export function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | <Link to="/filmlist">Liste de films</Link> |{" "}
      <Link to="/neco">???</Link>
    </nav>
  );
}
