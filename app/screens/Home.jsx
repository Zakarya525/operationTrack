import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { useFonts } from "expo-font";
import { colors } from "../utils";

const Home = ({ route }) => {
  const { email } = route.params;
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [appointmentCountDocId, setAppointmentCountDocId] = useState(null);

  useEffect(() => {
    const fetchAppointmentCount = async () => {
      const appointmentCountCollectionRef = collection(
        FIRESTORE_DB,
        "appointmentCount"
      );
      const q = query(appointmentCountCollectionRef);
      const querySnapshot = await getDocs(q);

      querySnapshot.empty
        ? setAppointmentCountDocId(doc(appointmentCountCollectionRef).id)
        : (setAppointmentCount(querySnapshot.docs[0].data().count || 0),
          setAppointmentCountDocId(querySnapshot.docs[0].id));
    };

    fetchAppointmentCount();
  }, [appointmentCount]);

  const handleIncrementAppointmentCount = async () => {
    const newCount = appointmentCount + 1;
    if (newCount <= 10 && appointmentCountDocId) {
      const appointmentCountDocRef = doc(
        FIRESTORE_DB,
        "appointmentCount",
        appointmentCountDocId
      );
      await updateDoc(appointmentCountDocRef, { count: newCount });
      setAppointmentCount(newCount);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome dear</Text>
      <Text style={styles.welcomeText}>{email}</Text>
      <Text style={styles.appointmentCountText}>
        Today's Booked Operations: {appointmentCount}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleIncrementAppointmentCount}
        disabled={appointmentCount >= 10}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontFamily: "Urbanist_600SemiBold",
    fontSize: 24,
    marginBottom: 20,
  },
  appointmentCountText: {
    fontFamily: "Urbanist_400Regular",
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Urbanist_600SemiBold",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
