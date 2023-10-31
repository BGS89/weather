import { useEffect, useState } from "react";
import { fetchForecast } from "../data/weatherData";

function Forecast({ city }) {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    fetchForecast(city)
      .then((dataFromApi) => {
        setForecast(dataFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  console.log(forecast);

  return (
    <section>
      <h1>Forecast</h1>
    </section>
  );
}

export default Forecast;
