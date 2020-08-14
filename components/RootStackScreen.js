import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import QuestionCollectionPage from "./QuestionCollectionPage";
import TotalScore from "./TotalScore";

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen
        name="QuestionCollectionPage"
        component={QuestionCollectionPage}
      />
      <RootStack.Screen name="TotalScore" component={TotalScore} />
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({});
