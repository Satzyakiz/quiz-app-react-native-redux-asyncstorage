import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Question({ data, index, selectedAnswer, onAnswerSelect }) {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionStyle}> {data.question} </Text>
      <View style={styles.buttonGroup}>
        {data.options.map((option) => (
          <Button
            key={option}
            title={option}
            style={styles.button}
            onPress={() => onAnswerSelect(index, option)}
            color={option === selectedAnswer ? "#A4DE02" : "#A9A9A9"}
          />
        ))}
      </View>
    </View>
  );
}

export default Question;

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    margin: 30,
    padding: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    margin: 20,
    padding: 10,
    width: 100,
    color: "grey",
  },
  questionStyle: {
    flex: 1,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "white",
    margin: 15,
    fontSize: 25,
    width: "100%",
  },
});
