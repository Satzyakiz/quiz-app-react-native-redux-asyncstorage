import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import RootStackScreen from "./components/RootStackScreen";

const INITIAL_STATE = { answers: [] };
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ANSWERS":
      return {
        ...state,
        answers: action.payload,
      };

    default:
      return state;
  }
};

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <View style={styles.container}>
          <RootStackScreen />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
