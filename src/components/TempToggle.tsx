import React, {useState} from 'react';
import {Switch} from 'react-native';

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
    setIsEnabled(previousState => !previousState);
    setTempUnit(tempUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius');
  };

  // display a switch to toggle between Celsius and Fahrenheit
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default TempToggle;
