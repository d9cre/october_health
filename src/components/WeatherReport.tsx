import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Weather } from "../utils/types";
import TempToggle from "./TempToggle";
import { StyledText, StyledView } from "./StyledComponents";

const WeatherReport = ({
  weather,
  tempUnit,
  setTempUnit,
}: {
  weather?: Weather;
  tempUnit: string;
  setTempUnit: (tempUnit: string) => void;
}) => {
  // get weather icon from openweathermap
  const icon = weather?.weather[0].icon;

  // convert temperature to Celcius or Fahrenheit
  const convertTemp = (temp: number) => {
    return tempUnit === "Celsius" ? temp : (temp * 9) / 5 + 32;
  };

  return (
    <StyledView>
      <StyledText size={30} marginBottom={10} weight="bold">
        {weather?.name}, {weather?.sys.country}
      </StyledText>
      <StyledText>
        {new Date().toLocaleDateString("en-us", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </StyledText>

      <StyledText size={60}>
        {weather?.main ? convertTemp(weather?.main.temp).toFixed(0) : 0}°
      </StyledText>
      <StyledText size={17} marginBottom={20}>
        Feels like{" "}
        {weather?.main ? convertTemp(weather?.main.feels_like).toFixed(0) : 0}°
      </StyledText>
      <StyledView>
        <TempToggle tempUnit={tempUnit} setTempUnit={setTempUnit} />
      </StyledView>
      <StyledView flex={4} justify="flex-start">
        <Image
          height={80}
          width={80}
          source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }}
        />
        <StyledText transformText="capitalize" size={18}>
          {weather?.weather[0].description}
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default WeatherReport;
