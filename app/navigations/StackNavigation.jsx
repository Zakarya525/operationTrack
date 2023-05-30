import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, UserGuide, Home } from "../screens";
import { Login, Register } from "../screens/Authentication";
import Loader from "../components/Loader/Loader";
import { useAuth } from "../context/Authentication";
import {
  PatientForm,
  Patient,
  PatientList,
  PatientProfile,
} from "../components/Patient";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { token, isLoading } = useAuth();

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {token === "" ? (
        <>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="UserGuide" component={UserGuide} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PatientForm" component={PatientForm} />
          <Stack.Screen name="PatientList" component={PatientList} />
          <Stack.Screen name="Patient" component={Patient} />
          <Stack.Screen name="PatientProfile" component={PatientProfile} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
