import { useEffect, useState } from "react";
import { fetchForecast } from "../data/weatherData";

function Forecast() {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    fetchForecast("london")
      .then((dataFromApi) => {
        setForecast(dataFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(forecast);

  return (
    <section>
      <h1>Forecast</h1>
    </section>
  );
}

export default Forecast;
