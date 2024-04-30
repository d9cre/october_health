import React from 'react';
import {Image} from 'react-native';
import {Weather} from '../utils/types';

const WeatherReport = ({
  current,
  tempUnit,
}: {
  current: Weather;
  tempUnit: string;
}) => {
  // get weather icon from openweathermap
  const icon = current.weather[0].icon;

  // convert temperature to Celcius or Fahrenheit
  const convertTemp = (temp: number) => {
    return tempUnit === 'Celcius' ? temp : (temp * 9) / 5 + 32;
  };

  // display the weather icon, description and temperature
  return (
    <div>
      <Image source={{uri: `http://openweathermap.org/img/w/${icon}.png`}} />
      <h2>{current.weather[0].description}</h2>
      <h3>{convertTemp(current.temp)}</h3>
    </div>
  );
};

export default WeatherReport;
