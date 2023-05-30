import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { colors } from "../utils";
import { useAuth } from "../context/Authentication";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Patient from "../components/Patient/Patient";
import { usePatient } from "../context/Patient";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const { user, logOut } = useAuth();
  const { patientCount, counter, patients, isLoading } = usePatient();
  const navigation = useNavigation();

  if (isLoading) {
    return <Loader />;
  }

  const windowHeight = Dimensions.get("window").height;

  const handleLogOut = () => {
    logOut();
  };

  return (
    <View>
      <Text style={styles.headingLarge}>Greeting {user.email}</Text>
      <TouchableOpacity onPress={handleLogOut} style={styles.logoutButton}>
        <Icon name="sign-out" size={25} color="black" />
      </TouchableOpacity>
      <Image
        style={tw`w-80 h-48 ml-10 rounded-xl`}
        source={require("../images/banner.jpg")}
      />

      <View style={styles.addPatientContainer}>
        <Text style={styles.heading}>Add Patient</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("PatientForm")}
          disabled={patientCount >= 10}
        >
          <Icon name="user-plus" size={50} color={colors.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.heading}>
          Total added Patients for Today: {patientCount}
        </Text>
        {patientCount >= 10 && (
          <Text style={styles.heading}>Patients limit reached</Text>
        )}
      </View>

      <View style={tw`flex-row justify-between`}>
        <Text style={styles.headingMedium}>
          Today's {patientCount == 1 ? "Patient" : "Patients"}
        </Text>
      </View>
      <View>
        <ScrollView style={{ maxHeight: windowHeight * 0.4 }}>
          {patients.map((patient) => {
            return <Patient key={patient.id} patient={patient} />;
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
