import React, { useState } from "react";
import { View } from "react-native";
import openWeatherMap from "../api/openWeatherMap";
import SearchBar from "../components/SearchBar";
import WeatherReport from "../components/WeatherReport";
import TempToggle from "../components/TempToggle";

const HomeScreen = () => {
  const [location, setLocation] = useState("");
  const [tempUnit, setTempUnit] = useState("Celsius");
  const [weather, setWeather] = useState({
    weather: [
      {
        icon: "",
        description: "",
      },
    ],
    temp: 0,
  });
  const [errorMsg, setErrorMsg] = useState("");

  // call the openweathermap api to get the weather data
  const getWeather = async () => {
    try {
      const response = await openWeatherMap.get("/weather", {
        params: {
          q: location,
          appid: "73906f46c689f6805a7f80420df73f3d",
          units: "metric", // metric for Celsius
        },
      });

      // set the weather data to state
      setWeather(response.data.current);

      // clear the error message if there is no error
      setErrorMsg("");
    } catch (error: any) {
      // set the error message to state if there is an error
      setErrorMsg(error.message);
    }
  };

  return (
    <View>
      <SearchBar
        location={location}
        onLocationChange={setLocation}
        onEndEditing={getWeather}
      />
      {
        // display an error message if there is an error, otherwise display the weather report
        errorMsg ? (
          <h1>{errorMsg}</h1>
        ) : (
          // display a search bar, weather report and a switch to toggle between Celsius and Fahrenheit
          <View>
            <WeatherReport current={weather} tempUnit={tempUnit} />
            <TempToggle tempUnit={tempUnit} setTempUnit={setTempUnit} />
          </View>
        )
      }
    </View>
  );
};

export default HomeScreen;
