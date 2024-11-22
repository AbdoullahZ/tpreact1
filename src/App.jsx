import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Accueil } from "./components/Pages/Accueil";
import { FilmDetails } from "./components/Pages/FilmDetails";
import { FilmList } from "./components/Pages/FilmList";
import { Neco } from "./components/Pages/Neco";
import { NotFound } from "./components/Pages/NotFound";
import { store } from "./components/app/store";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/tpreact1">
        <Navbar />
        <Routes>
          <Route path="/" Component={Accueil} />
          <Route path="/filmlist" Component={FilmList} />
          <Route path="/film/:id" Component={FilmDetails} />
          <Route path="/Neco" Component={Neco} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
