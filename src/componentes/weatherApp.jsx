import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import Error from "./error";
import Loading from "./loading";

import styles from "./weatherApp.module.css";

export default function WeatherApp({}) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `weather| ${weather?.location.name ?? ''}`;
  }, [weather]);

  async function loadInfo(city = 'london') {
    try {
      if (!isValidCity(city)) {
        setError('Entrada no válida. Ingresa una ciudad o país válido.');
        return;
      }

      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
       
      if (request.status === 400) {
        setError('Ciudad no encontrada. Ingresa una ciudad o país válido.');
        setWeather(null);
        return;
      }

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
        setError(null); 
      }, 2000);
    } catch (error) {
      setError('Ocurrió un error al cargar la información. Por favor, intenta de nuevo más tarde.');
      console.log('Error:', error);
    }
  }

  function isValidCity(city) {
    return city.trim().length >= 3;
  }


  function handleChangeCity(city) {

    setWeather(null);
    setError(null);

    const cleanedCity = city.trim();
    

    if (cleanedCity === '') {
      setError('Por favor, ingresa una ciudad o país válido.');
    } else {
      if (/[^a-zA-Z\s]+/.test(cleanedCity)) {
        setError('La entrada no es válida. Ingresa una ciudad o país válido.');
      } else {
        loadInfo(cleanedCity);
        
      }
    }
  }

  

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {error ? (
        <Error />
      ) : weather ? (
        <WeatherMainInfo weather={weather} />
      ) : (
        <Loading />
      )}
    </div>
  );
}