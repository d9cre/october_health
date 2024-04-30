import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = ({
  location,
  onLocationChange,
  onEndEditing,
}: {
  location: string;
  onLocationChange: (location: string) => void;
  onEndEditing: () => void;
}) => {
  // display a search bar with a search icon
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        autoFocus={true}
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Input location"
        value={location}
        onChangeText={onLocationChange}
        inputMode="text"
        textContentType={"addressCity"}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
