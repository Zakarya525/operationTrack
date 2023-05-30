import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { colors } from "../utils";
import { useAuth } from "../context/Authentication";
import PatientForm from "../components/Patient/PatientForm";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Patient from "../components/Patient/Patient";
import { usePatient } from "../context/Patient";

const Home = () => {
  const { user, logOut } = useAuth();
  const { patientCount } = usePatient();
  console.log(patientCount);

  const navigation = useNavigation();
  const windowHeight = Dimensions.get("window").height;

  const [patients, setPatients] = useState([]);
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [counter, setCounter] = useState(patientCount);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsCollectionRef = collection(FIRESTORE_DB, "patients");
        const querySnapshot = await getDocs(query(patientsCollectionRef));

        const fetchedPatients = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPatients(fetchedPatients);
        setPatientCount(fetchedPatients.length);
      } catch (error) {
        console.log("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleLogOut = () => {
    logOut();
  };

  const handlePatientSubmit = async (patientData) => {
    if (patientCount >= 10) {
      return;
    }

    try {
      const patientCollectionRef = collection(FIRESTORE_DB, "patients");
      await addDoc(patientCollectionRef, patientData);
      setPatientCount((prevCount) => prevCount + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setShowPatientForm(false);
    } catch (error) {
      console.log("Error adding patient:", error);
    }
  };

  const togglePatientForm = () => {
    setShowPatientForm((prevShowPatientForm) => !prevShowPatientForm);
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
        {!showPatientForm && (
          <TouchableOpacity
            onPress={togglePatientForm}
            disabled={patientCount >= 10}
          >
            <Icon name="user-plus" size={50} color={colors.primaryColor} />
          </TouchableOpacity>
        )}
        <Text style={styles.heading}>
          Total added Patients for Today: {patientCount}
        </Text>
      </View>

      {showPatientForm && counter < 10 && (
        <PatientForm onSubmit={handlePatientSubmit} disabled={counter >= 10} />
      )}
      {counter >= 10 && <Text>Patient limit reached</Text>}
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
