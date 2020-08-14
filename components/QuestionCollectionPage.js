import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useSelector, useDispatch } from "react-redux";

import Question from "./Question";

const DATA = [
  {
    id: "1",
    question: "What is your age ?",
    options: ["A", "B", "C", "D"],
    rightOption: "B",
  },
  {
    id: "2",
    question: "What is your name ?",
    options: ["A", "B", "C", "D"],
    rightOption: "C",
  },
  {
    id: "3",
    question: "What is your height ?",
    options: ["A", "B", "C", "D"],
    rightOption: "D",
  },
  {
    id: "4",
    question: "What is your age ?",
    options: ["A", "B", "C", "D"],
    rightOption: "B",
  },
  {
    id: "5",
    question: "What is your name ?",
    options: ["A", "B", "C", "D"],
    rightOption: "C",
  },
  {
    id: "6",
    question: "What is your height ?",
    options: ["A", "B", "C", "D"],
    rightOption: "D",
  },
  {
    id: "7",
    question: "What is your age ?",
    options: ["A", "B", "C", "D"],
    rightOption: "B",
  },
  {
    id: "8",
    question: "What is your name ?",
    options: ["A", "B", "C", "D"],
    rightOption: "C",
  },
  {
    id: "9",
    question: "What is your height ?",
    options: ["A", "B", "C", "D"],
    rightOption: "D",
  },
  {
    id: "10",
    question: "What is your age ?",
    options: ["A", "B", "C", "D"],
    rightOption: "B",
  },
  {
    id: "11",
    question: "What is your name ?",
    options: ["A", "B", "C", "D"],
    rightOption: "C",
  },
  {
    id: "12",
    question: "What is your height ?",
    options: ["A", "B", "C", "D"],
    rightOption: "D",
  },
  {
    id: "13",
    question: "What is your age ?",
    options: ["A", "B", "C", "D"],
    rightOption: "B",
  },
  {
    id: "14",
    question: "What is your name ?",
    options: ["A", "B", "C", "D"],
    rightOption: "C",
  },
  {
    id: "15",
    question: "What is your height ?",
    options: ["A", "B", "C", "D"],
    rightOption: "D",
  },
];

const QuestionCollectionPage = ({ navigation }) => {
  const answers = useSelector((state) => state.answers);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const savedAnswers = await AsyncStorage.getItem("answers");
      if (savedAnswers) {
        dispatch({ type: "SET_ANSWERS", payload: JSON.parse(savedAnswers) });
      }
    })();
  }, [dispatch]);

  const handleSubmit = async () => {
    let score = 0;

    answers.forEach((answer, index) => {
      if (answer === DATA[index].rightOption) {
        ++score;
      }
    });

    await AsyncStorage.removeItem("answers");
    navigation.navigate("TotalScore", { score });
  };

  const handleAnswerSelect = async (questionIndex, answer) => {
    let updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answer;
    await AsyncStorage.setItem("answers", JSON.stringify(updatedAnswers));
    dispatch({ type: "SET_ANSWERS", payload: updatedAnswers });
  };

  const renderItem = ({ item, index }) => (
    <Question
      data={item}
      index={index}
      onAnswerSelect={handleAnswerSelect}
      selectedAnswer={answers[index]}
    />
  );

  return (
    <View style={styles.questionCollections}>
      <FlatList
        style={styles.flatlist}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <Button title="Submit" color="green" onPress={handleSubmit} />
        }
      />
    </View>
  );
};

export default QuestionCollectionPage;

const styles = StyleSheet.create({
  questionCollections: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20639B",
  },
  submitButton: {
    margin: 20,
    width: 100,
  },
  flatlist: {
    flex: 1,
  },
});
