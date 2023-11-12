import { useEffect, useState } from "react";
import { fetchForecast } from "../data/weatherData";

function Forecast({ city }) {
  const [forecast, setForecast] = useState({
    location: { name: "", country: "" },
  });

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
      <h2>
        {forecast.location.name}, {forecast.location.country}
      </h2>
    </section>
  );
}

export default Forecast;
