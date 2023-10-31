import axios from "axios";

const key = import.meta.env.VITE_SOME_KEY;

const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

const fetchForecast = (city) => {
  return weatherApi
    .get(`/forecast.json?key=${key}&q=${city}&days=10&aqi=no&alerts=no`)
    .then((response) => {
      return response.data;
    });
};

export { fetchForecast };
