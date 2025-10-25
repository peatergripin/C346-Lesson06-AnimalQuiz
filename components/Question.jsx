import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function Question({
  index,
  question,
  selectedAnswer,
  onSelect,
}) {
  const [userAns, setUserAns] = useState(selectedAnswer || "");

  const handleValueChange = (value) => {
    setUserAns(value);
    onSelect(value); // report selection back to parent (App.js)
  };

  return (
    <View style={styles.card}>
      <Image source={question.photo} style={styles.image} />
      <RNPickerSelect
        value={userAns}
        onValueChange={handleValueChange}
        items={[
          ...question.options.map((option) => ({
            label: option,
            value: option,
          })),
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});
