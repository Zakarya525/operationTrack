import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { Splash, UserGuide, Home } from "../screens";
import { Login, Register } from "../screens/Authentication";
import Loader from "../components/Loader/Loader";
import { useState, useEffect } from "react";
import { signInWithCustomToken, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleAutoLogin = async () => {
      try {
        const token = await SecureStore.getItemAsync("authToken");

        console.log(token);

        if (token) {
          setToken(token);
          const userCredential = await signInWithCustomToken(
            FIREBASE_AUTH,
            token
          );
          const user = userCredential.user;
          setUser(user);
          console.log("This is the current user:", user);
        }

        setLoading(false);
      } catch (error) {
        console.log("Auto login failed:", error);
        setError(error);
        setLoading(false);
      }
    };

    handleAutoLogin();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    // Handle the error, such as displaying an error message
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <Stack.Navigator
      initialRouteName={user ? "Home" : "Splash"}
      screenOptions={{ headerShown: false }}
    >
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{ email: user.email || "GUset" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="UserGuide" component={UserGuide} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
