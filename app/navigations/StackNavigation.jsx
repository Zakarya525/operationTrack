import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { Splash, UserGuide, Home } from "../screens";
import { Login, Register } from "../screens/Authentication";
import Loader from "../components/Loader/Loader";
import { useState, useEffect } from "react";
import { signInWithCustomToken, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { Text } from "react-native";
import { useAuth } from "../context/Authentication";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { name } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="UserGuide" component={UserGuide} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
