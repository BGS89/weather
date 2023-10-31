import "./App.css";
import Forecast from "./components/Forecast";
import SearchForm from "./components/SearchForm";
import { useState } from "react";

function App() {
  const [city, setCity] = useState(null);

  return (
    <main>
      <SearchForm setCity={setCity} />
      <Forecast city={city} />
    </main>
  );
}

export default App;
