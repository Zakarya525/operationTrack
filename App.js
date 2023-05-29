import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./app/navigations/StackNavigation";
import { useFonts } from "expo-font";
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
  });

  useEffect(() => {
    async function prapare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prapare();
  }, []);

  if (!fontsLoaded) return undefined;

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
