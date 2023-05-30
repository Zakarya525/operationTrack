import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Docter from "../../components/Docter";
import { TouchableOpacity } from "react-native";
import { colors } from "../../utils";

export default function PatientList({ navigation }) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={{ marginLeft: 10, marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={20} color={colors.primaryColor} />
      </TouchableOpacity>

      <FlatList
        data={newItems}
        renderItem={({ item }) => <Docter docter={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    paddingTop: 50,
  },
});
