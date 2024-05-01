import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const SearchBar = ({
  location,
  onLocationChange,
  updateWeather,
}: {
  location: string;
  onLocationChange: (location: string) => void;
  updateWeather: () => void;
}) => {
  // display a search bar with a search button
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        autoFocus={true}
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search City or Zip Code"
        value={location}
        onChangeText={onLocationChange}
        inputMode="text"
        textContentType={"addressCity"}
      />

      <TouchableOpacity onPress={updateWeather}>
        <Text style={styles.buttonStyle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    backgroundColor: "rgba(0,0,0, 0.6)",
    paddingHorizontal: 10,
    marginEnd: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    fontSize: 18,
  },
  buttonStyle: {
    padding: 14,
    backgroundColor: "#efc68f",
    borderRadius: 6,
    color: "white",
  },
});

export default SearchBar;
