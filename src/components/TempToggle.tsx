import React, { useState } from "react";
import { Switch } from "react-native";
import { StyledText, StyledView } from "./StyledComponents";

const TempToggle = ({
  tempUnit,
  setTempUnit,
}: {
  tempUnit: string;
  setTempUnit: (tempUnit: string) => void;
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  // toggle between Celsius and Fahrenheit when the switch is toggled
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setTempUnit(tempUnit === "Celsius" ? "Fahrenheit" : "Celsius");
  };

  // display a switch to toggle between Celsius and Fahrenheit
  return (
    <StyledView justify="space-evenly" align="flex-start" flexDirection="row">

      <StyledText marginRight={10} size={20}>
        °C
      </StyledText>

      <Switch
        trackColor={{ false: "#767577", true: "#252626" }}
        thumbColor={isEnabled ? "#efc68f" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <StyledText marginLeft={10} size={20}>
        °F
      </StyledText>
    </StyledView>
  );
};

export default TempToggle;
