import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store  from "./src/store"
import { Provider } from "react-redux"
import BoxComponent from "./src/components/boxComponents"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../sugoku/src/screens/HomeScreen"
import GameScreen from '../sugoku/src/screens/GameScreen'
import FinishScreen from "../sugoku/src/screens/FinishScreen"
// import UselessTextInput from "./src/components/SandBox"

export default function App() {
  const Stack = createStackNavigator()

  return (
    <Provider store={ store }> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>          
          <Stack.Screen name="Game" component={GameScreen}></Stack.Screen>
          <Stack.Screen name="Finish" component={FinishScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
