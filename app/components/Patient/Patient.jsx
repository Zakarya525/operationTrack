import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

function Patient({ patient }) {
  const navigation = useNavigation();
  console.log("This is Patient: ", patient);

  const handleClick = () => {
    navigation.navigate("PatientProfile", { patient });
  };

  return (
    <TouchableOpacity
      style={[
        tw`flex flex-row bg-white h-28 mb-2 mr-2 ml-2 rounded-xl shadow-md`,
      ]}
      onPress={handleClick}
    >
      <Image
        style={tw`w-28 h-28 rounded-l-xl mr-8`}
        source={require("../../images/dr4.jpg")}
      />
      <View style={tw`justify-center`}>
        <Text style={tw`text-base font-bold mb-3`}>
          Patient: {patient.patientName}
        </Text>
        <View style={tw`flex-row`}>
          <Text style={tw`text-base`}>
            Consultant: {patient.consultantName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Patient;
