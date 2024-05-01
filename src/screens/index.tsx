import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import openWeatherMap from "../api/openWeatherMap";
import SearchBar from "../components/SearchBar";
import WeatherReport from "../components/WeatherReport";
import TempToggle from "../components/TempToggle";
import { StyledText, StyledView } from "../components/StyledComponents";

const HomeScreen = () => {
  const [location, setLocation] = useState("");
  const [tempUnit, setTempUnit] = useState("Celsius");
  const [weather, setWeather] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState("");

  const image = {
    uri: "https://images.unsplash.com/photo-1594652010347-788d009508c3?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

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
      setWeather(response.data);
      console.log("weather", response.data);

      // clear the location input
      setLocation("");

      // clear the error message if there is no error
      setErrorMsg("");
    } catch (error: any) {
      // set the error message to state if there is an error
      setErrorMsg(error.message);

      // clear the location input
      setLocation("");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StyledView justify="flex-start" marginTop={20}>
          <SearchBar
            location={location}
            onLocationChange={setLocation}
            updateWeather={getWeather}
          />
        </StyledView>
        {
          // show a message if there is no location entered
          errorMsg !== "" || weather === undefined ? (
            <StyledView flex={5} justify="flex-start">
              <StyledText>
                Enter a valid location to get the current weather report.
              </StyledText>
            </StyledView>
          ) : (
            // show the weather report and temperature toggle if there is weather data
            <StyledView flex={5} justify="flex-start">
              <WeatherReport
                weather={weather}
                tempUnit={tempUnit}
                setTempUnit={setTempUnit}
              />
            </StyledView>
          )
        }
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
