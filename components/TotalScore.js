import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TotalScore({ route, navigation }) {
  const { score } = route.params;
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.textContainer}>Your total score is :</Text>
      <Text style={styles.textContainer}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: 30,
  },
});
