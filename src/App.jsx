import "./App.css";
import Forecast from "./components/Forecast";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <main>
      <SearchForm />
      <Forecast />
    </main>
  );
}

export default App;
