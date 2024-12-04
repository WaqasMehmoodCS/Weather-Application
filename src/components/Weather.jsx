import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading.jsx";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "9c0a81c1a78ef84cc480f4d4918cf3e4";

  const defaultWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
          try {
            const response = await axios.get(url);
            setWeather(response.data);
            setError(null);
          } catch (err) {
            setError("City not found or failed to fetch weather data.");
            setWeather(null);
          }
        },
        (error) => {
          setError("Error getting location.");
          setWeather(null);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setWeather(null);
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      defaultWeather();
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      setLoading(true);
      const response = await axios.get(url);
      setWeather(response.data);
      setCity("");
      setError(null);
      setLoading(false);
    } catch (err) {
      setError("City not found or failed to fetch weather data.");
      setWeather(null);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      {loading && <Loading />}
      <h1 className="title">Weather Application</h1>
      <input
        type="text"
        value={city}
        id="cityName"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="cityInput"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchWeather();
          }
        }}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather ? (
        <div className="weatherBox">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Place</td>
                <td>
                  {weather.name}, {weather.sys.country}
                </td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weather.main.humidity} %</td>
              </tr>
              <tr>
                <td>Temprature</td>
                <td>{weather.main.temp}°C</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>{weather.wind.speed} m/s</td>
              </tr>
              <tr>
                <td>Weather description</td>
                <td>{weather.weather[0].description}</td>
              </tr>
              <tr>
                <td>Weather Condition</td>
                <td>
                  <img
                    src={getWeatherIconUrl(weather.weather[0].icon)}
                    alt="weatherImage"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Weather;
