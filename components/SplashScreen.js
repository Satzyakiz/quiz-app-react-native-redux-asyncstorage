import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import QuestionCollectionPage from "./QuestionCollectionPage";

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: "#20639B",
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text
          style={[
            styles.title,
            {
              color: "white",
            },
          ]}
        >
          Proceed to the Assessment !
        </Text>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("QuestionCollectionPage")}
          >
            <Text style={styles.textSign}>Begin</Text>
            {/* <MaterialIcons name="navigate-next" color="#fff" size={20} /> */}
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#20639B",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text: {
    color: "#20639B",
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: "white",
    alignSelf: "center",
    width: 200,
    height: 50,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#20639B",
    fontWeight: "bold",
    // padding: 10,
    fontSize: 15,
    textAlignVertical: "center",
  },
});
