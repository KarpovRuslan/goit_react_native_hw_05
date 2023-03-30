import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, ImageBackground } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home/Home";
import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";

// const imageBack = require("./assets/images/photo.jpg");
const MainScreen = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainScreen.Navigator initialRouteName="Login">
          <MainScreen.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainScreen.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainScreen.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </MainScreen.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    // resizeMode: "cover",
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    //justifyContent: "flex-end",
  },
});
