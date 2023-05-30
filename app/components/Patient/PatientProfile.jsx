import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "twrnc";
import { colors } from "../../utils";
import { styles } from "./styles";

const PatientProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { patient } = route.params;

  const handleClick = () => {
    //   navigation.navigate("BookAppointment");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.doctorName}>{patient.patientName}</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle} />
        </View>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Patient: {patient.patientName}</Text>
          <Text style={styles.doctorName}>
            Consultant: {patient.consultantName}
          </Text>
          <Text style={styles.doctorName}>OT Table: {patient.otTable}</Text>
          <Text style={styles.doctorName}>Diagnosis: {patient.diagnosis}</Text>
          <Text style={styles.doctorName}>Procedure: {patient.procedure}</Text>
          <Text style={styles.doctorName}>Date: {patient.date}</Text>
          <Text style={styles.doctorName}>Day: {patient.day}</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <View style={tw`justify-center items-center m-2 shadow-md`}>
          <Icon name="users" size={24} color={colors.primaryColor} />
          <Text style={styles.text}>Patients</Text>
        </View>
        <View style={tw`justify-center items-center m-2 shadow-md`}>
          <Icon name="lastfm-square" size={24} color={colors.primaryColor} />
          <Text style={styles.text}>Experience</Text>
        </View>
        <View style={tw`justify-center items-center m-2 shadow-md`}>
          <Icon name="star-half-full" size={24} color={colors.primaryColor} />
          <Text style={styles.text}>Rating</Text>
        </View>
        <View style={tw`justify-center items-center m-2 shadow-md`}>
          <Icon name="commenting" size={24} color={colors.primaryColor} />
          <Text style={styles.text}>Reviews</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          consectetur ante lacus, non vestibulum sapien hendrerit eu. Sed ac
          neque vel odio aliquam ultrices vel eu mauris. Quisque eget enim
          iaculis, congue ligula in, ultrices leo.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Working Time</Text>
        <View style={styles.workingTimeContainer}>
          <View style={styles.workingTimeItem}>
            <Text style={styles.workingTimeHours}>
              Monday - Friday, 9:00 AM - 5:00 PM
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientProfile;
